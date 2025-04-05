//=============================================================================
// Sprite_Live2D_Layer.js
//=============================================================================

var parameters = PluginManager.parameters('Live2D');
var modelPath = parameters['path'] || 'live2d/';

function Sprite_Live2D_Layer() {
	this.initialize.apply(this, arguments);
}

Sprite_Live2D_Layer.prototype = Object.create(Sprite_Base.prototype);
Sprite_Live2D_Layer.prototype.constructor = Sprite_Live2D_Layer;

Sprite_Live2D_Layer.prototype.initialize = function () {
	Sprite_Base.prototype.initialize.call(this);
	$gameScreen.clearLive2DModels();
	this._models = {};
	this._loading = false;
	this._l2d_bitmap = new GLBitmap(Graphics.width, Graphics.height);
}

Sprite_Live2D_Layer.prototype.update = function () {
	Sprite_Base.prototype.update.call(this);
	this._models = $gameScreen.live2dModels;
	for (var i in this._models) {
		if (this._models[i]) {
			if (typeof this._models[i] == "string") {
				this.add(i, this._models[i]);
			} else {
				this._models[i]._keyName = i;
			}
		}
	}
};

Sprite_Live2D_Layer.prototype.isBusy = function () {
	return thisRef._loading;
}

Sprite_Live2D_Layer.prototype.add = function (key, model) {
	if (this._loading) {
		return;
	}
	var thisRef = this;
	this._loading = true;
	var dirPath = modelPath + model + '/' + model;
	if (Utils.isNwjs()) {
		var fs = require('fs');
		var path = require('path');
		var base = path.dirname(process.mainModule.filename);
		if (fs.existsSync(base + "/" + dirPath + '.model3.json')) {
			dirPath = dirPath + '.model3.json';
			this.loadCubism3Model(dirPath, key, model);
		} else {
			dirPath = dirPath + '.model.json';
			var model = new Sprite_Live2D(dirPath, true, key, function () {
				thisRef._models[key] = model;
				thisRef._models[key].x = Graphics.width - thisRef._models[key].width;
				thisRef._models[key].y = Graphics.height - thisRef._models[key].height;
				thisRef._models[key]._hash = key;
				thisRef._models[key].cut = true;
				thisRef._models[key].hide();
				$gameScreen.live2dModels[key] = thisRef._models[key];
				thisRef._loading = false;
				thisRef._models[key]._isLoading = false;
				thisRef.addChild(thisRef._models[key]);
			});
		}
	} else {
		var xhr = new XMLHttpRequest();
		xhr.open('HEAD', dirPath + '.model3.json');
		xhr.send();
		if (xhr.status === '404') {
			dirPath = dirPath + '.model.json';
			var model = new Sprite_Live2D(dirPath, true, key, function () {
				thisRef._models[key] = model;
				thisRef._models[key].x = Graphics.width - thisRef._models[key].width;
				thisRef._models[key].y = Graphics.height - thisRef._models[key].height;
				thisRef._models[key]._hash = key;
				thisRef._models[key].cut = true;
				thisRef._models[key].hide();
				$gameScreen.live2dModels[key] = thisRef._models[key];
				thisRef._loading = false;
				thisRef._models[key]._isLoading = false;
				thisRef.addChild(thisRef._models[key]);
			});
		} else {
			dirPath = dirPath + '.model3.json';
			this.loadCubism3Model(dirPath, key, model);
		}
	}
};

Sprite_Live2D_Layer.prototype.loadCubism3Model = function (path, key, model) {
	var modelSetting = new ModelSettingJson();
	var thisRef = this;
	var textures = [];
	modelSetting.loadModelSetting(path, function () {
		thisRef._models[key] = new LIVE2DCUBISMPIXI.ModelBuilder();
		thisRef._models[key]._isLoading = true;
		thisRef._models[key].addAnimatorLayer("blink", LIVE2DCUBISMFRAMEWORK.BuiltinAnimationBlenders.MULTIPLY, 1);
		thisRef._models[key].addAnimatorLayer("motion", LIVE2DCUBISMFRAMEWORK.BuiltinAnimationBlenders.OVERRIDE, 1);		
		thisRef._models[key].addAnimatorLayer("expressionOver", LIVE2DCUBISMFRAMEWORK.BuiltinAnimationBlenders.OVERRIDE, 1);
		thisRef._models[key].addAnimatorLayer("expressionAdd", LIVE2DCUBISMFRAMEWORK.BuiltinAnimationBlenders.ADD, 1);
		thisRef._models[key].addAnimatorLayer("expressionMult", LIVE2DCUBISMFRAMEWORK.BuiltinAnimationBlenders.MULTIPLY, 1);
		thisRef._models[key].addAnimatorLayer("pose", LIVE2DCUBISMFRAMEWORK.BuiltinAnimationBlenders.OVERRIDE, 1);
		thisRef._models[key].addAnimatorLayer("breath", LIVE2DCUBISMFRAMEWORK.BuiltinAnimationBlenders.ADD, 1);		
		thisRef._models[key].addAnimatorLayer("lookat", LIVE2DCUBISMFRAMEWORK.BuiltinAnimationBlenders.OVERRIDE, 1);
		for (var i = 0; i < modelSetting.getTextureNum(); i++) {
			textures.push(ImageManager.loadBitmap(path.slice(0, path.lastIndexOf('/') + 1), modelSetting.getTextureFile(i).replace('.png', '')));
		}
		textures[textures.length - 1].addLoadListener(function () {
			textures.forEach(function (bit, j) {
				bit.smooth = true;
				bit._baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
				bit._baseTexture.mipmap = true;
				thisRef._models[key].addTexture(j, new PIXI.Texture(bit._baseTexture));
			});
			var modelJson = {};
			modelJson.url = path;
			modelJson.data = modelSetting.json;
			thisRef._models[key].buildFromModel3JsonNoTexture(new PIXI.loaders.Loader(), modelJson, function (modelObj) {
				thisRef._models[key] = modelObj;
				thisRef._models[key]._modelSetting = modelSetting;
				thisRef.addChild(thisRef._models[key]);
				thisRef.addChild(thisRef._models[key].masks);
				thisRef._models[key].initialize(path);
				thisRef._models[key]._hash = key;
				$gameScreen.live2dModels[key] = thisRef._models[key];
				thisRef._loading = false;
			});
		});
	});
	return;
};

Sprite_Live2D_Layer.prototype.get = function (key) {
	return this._models[key];
};

Sprite_Live2D_Layer.prototype.releaseModel = function (idx, gl) {
	// console.log("--> LAppLive2DManager.releaseModel(" + no + ")");

	if (!this._models[idx]) return;
	this._models[idx].release(gl);
	this.removeChild(this._models[idx]);
	this.removeChild(this._models[idx].masks);
	delete this._models[idx];
};

Sprite_Live2D_Layer.prototype.releaseAll = function (gl) {
	if (this._models.length <= 0) return;
	for (var i in this._models) {
		this.releaseModel(i, gl);
	}
};

var _Spriteset_Base_createUpperLayer = Spriteset_Base.prototype.createUpperLayer;
Spriteset_Base.prototype.createUpperLayer = function () {
	_Spriteset_Base_createUpperLayer.call(this);
	this.createLive2DLayer();
};

Spriteset_Base.prototype.createLive2DLayer = function () {
	this._live2dLayer = new Sprite_Live2D_Layer();
	this._live2dLayer.bitmap = new Bitmap(Graphics.width, Graphics.height);
	this.addChild(this._live2dLayer);
	$gameScreen.setLive2DSpriteset(this._live2dLayer);
};