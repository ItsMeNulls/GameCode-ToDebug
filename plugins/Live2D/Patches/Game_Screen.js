(function () {

	var parameters = PluginManager.parameters('Live2D');
	var modelPath = parameters['path'] || 'live2d/';

	var _Game_Screen_clear = Game_Screen.prototype.clear;
	Game_Screen.prototype.clear = function () {
		_Game_Screen_clear.call(this);
		this.clearLive2DModels();
	};

	Game_Screen.prototype.isBusy = function () {
		if (this.live2dModels) {
			for (var key in this.live2dModels) {
				if (typeof this.live2dModels[key] === 'string') return true;
			}
		}
		return false;
	}

	Game_Screen.prototype.clearLive2DModels = function () {
		if (this.live2dModels) {
			for (var key in this.live2dModels) {
				this.removeLive2DModel(key);
			}
		}
		this.live2dModels = {};
		this.live2dPendingMethods = this.live2dPendingMethods || {};
	};

	Game_Screen.prototype.loadLive2DModel = function (key, model) {
		if (this.live2dModels[key]) this.removeLive2DModel(key);
		this.live2dModels[key] = model;
		this.live2dPendingMethods[key] = [];
		if (this.live2dSpriteset) this.live2dSpriteset.add(key, model);
	};

	Game_Screen.prototype.getLive2DModel = function (key) {
		return this.live2dModels[key];
	};

	Game_Screen.prototype.removeLive2DModel = function (key) {
		if (this.live2dModels[key]) {
			if (this.live2dModels[key].parent) {				
				if (this.live2dModels[key]._version === 3) {					
					this.live2dModels[key].parent.removeChild(this.live2dModels[key].masks);
					this.live2dModels[key].parent.removeChild(this.live2dModels[key]);
					this.live2dModels[key].destroy(true);		
				} else {
					this.live2dModels[key].parent.removeChild(this.live2dModels[key]);
				}
			}		
		}
		delete this.live2dModels[key];
	};

	Game_Screen.prototype.setLive2DSpriteset = function (spriteset) {
		this.live2dSpriteset = spriteset;
	};

	Game_Screen.prototype.isLive2DTapped = function (key, area) {
		var model = this.getLive2DModel(key);
		if (model && typeof model !== "string" && !model._isLoading) {
			return model.isAreaTapped(area);
		}
		return false;
	};

	Game_Screen.prototype.getLive2DKeyFromModel = function (model) {
		var keys = Object.keys(this.live2dModels);
		for (var i = 0; i < keys.length; i++) {
			var sprite = this.live2dModels[keys[i]];
			if (sprite && sprite._version) {
				if (sprite._version === 3) {
					if (sprite === model) return keys[i];
				} else {
					if (sprite._model === model) return keys[i];
				}
			}
		}
	};

	var _DataManager_saveGameWithoutRescue = DataManager.saveGameWithoutRescue;
	DataManager.saveGameWithoutRescue = function (savefileId) {
		var sprset = $gameScreen.live2dSpriteset;
		delete $gameScreen.live2dSpriteset;
		var value = _DataManager_saveGameWithoutRescue.call(this, savefileId);
		$gameScreen.setLive2DSpriteset(sprset);
		return value;
	};	
})();