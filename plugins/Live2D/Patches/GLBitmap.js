function GLBitmap() {
    this.initialize.apply(this, arguments);
}
GLBitmap.prototype = Object.create(Bitmap.prototype);
GLBitmap.prototype.constructor = GLBitmap;

GLBitmap.prototype._createCanvas = function (width, height) {};

GLBitmap.prototype.initialize = function (width, height, name) {
    this.__canvas = document.createElement('canvas');
    this.__canvas.width = Math.max(width || 1, 1);
    this.__canvas.height = Math.max(height || 1, 1);
    this.__context = this.getWebGLContext();
    this.__baseTexture = new PIXI.BaseTexture(this.__canvas);
    this.__baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    this._image = null;
    this._url = '';
    this._paintOpacity = 255;
    this._smooth = false;
    this._loadListeners = [];
    this._loadingState = 'none';
    this._decodeAfterRequest = false;    
    this.fontFace = 'Microsoft Yahei';
    this.fontSize = 28;
    this.fontItalic = false;
    this.textColor = '#ffffff';
    this.outlineColor = 'rgba(0, 0, 0, 0.5)';
    this.outlineWidth = 4;    
    this.gl = this._context;
    this._modelName = name;
    this._setDirty();
};

GLBitmap.prototype.getWebGLContext = function () {
    var NAMES = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
    var param = {
        // alpha : true,
        preserveDrawingBuffer: true
    };
    for (var i = 0; i < NAMES.length; i++) {
        try {
            var ctx = this.__canvas.getContext(NAMES[i], param);
            if (ctx) return ctx;
        }
        catch (e) { }
    }
    return null;
};

function GLBitmapManager() {
    throw new Error('This is a static class');
}

GLBitmapManager.getGLBitmap = function (width, height, name) {
    var key = '' + width + height + name;
    if (!this._glBitmaps) this._glBitmaps = {};
    if (!this._glBitmaps[key]) this.createGLBitmap(width, height, name);
    return this._glBitmaps[key];
};

GLBitmapManager.createGLBitmap = function (width, height, name) {
    var key = '' + width + height + name;
    this._glBitmaps[key] = new GLBitmap(width, height, name);
};

GLBitmapManager.setGL = function (gl) {
    this._gl = gl;
};