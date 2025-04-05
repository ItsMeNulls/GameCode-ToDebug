//=============================================================================
// DhoomVariableBar.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_VariableBar = "1.3";

var Dhoom = Dhoom || {};
Dhoom.VariableBar = Dhoom.VariableBar || {};
/*:
 * @plugindesc Dhoom VariableBar v1.3
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @param Presets
 * @desc
 * @type struct<barPreset>[]
 * @default ["{\"x\":\"12\",\"y\":\"300\",\"back\":\"bar back\",\"fill\":\"bar fill\",\"fillX\":\"3\",\"fillY\":\"3\",\"fillDuration\":\"10\",\"fillDirection\":\"Vertical\"}","{\"x\":\"90\",\"y\":\"300\",\"back\":\"bar back\",\"fill\":\"bar fill 2\",\"fillX\":\"3\",\"fillY\":\"3\",\"fillDuration\":\"10\",\"fillDirection\":\"Vertical\"}"]
 *
 * @help 
Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

/*~struct~barPreset: 
 @param x
 @text X Position
 @desc Bar X coordinate.
 @type number 
 @min -999999
 @max 999999
 @default 12
 
 @param y
 @text Y Position
 @desc Bar Y coordinate.
 @type number 
 @min -999999
 @max 999999
 @default 12
 
 @param back
 @text Bar Background Filename
 @desc Bar background filename.
 @type file
 @dir img/system/
 @default

 @param fill
 @text Bar Fill Filename
 @desc Bar fill filename.
 @type file
 @dir img/system/
 @default 

 @param fillX
 @text Fill X Position
 @desc Fill X coordinate.
 @type number 
 @min -999999
 @max 999999
 @default 12
 
 @param fillY
 @text Fill Y Position
 @desc Fill Y coordinate.
 @type number 
 @min -999999
 @max 999999
 @default 12
 
 @param fillDuration
 @text Fill Duration
 @desc Fill change duration in frame.
 @type number
 @min 0
 @default 10

 @param fillDirection
 @text Fill Direction
 @desc Set whether the fill direction is horizontal or vertical.
 @type select
 @option Horizontal
 @option Vertical
 @default Horizontal
*/

Dhoom.Parameters = $plugins.filter(function (obj) { return obj.description.match(/Dhoom VariableBar/) })[0].parameters;
if (!Dhoom.jsonParse) {
    Dhoom.jsonParse = function (string) {
        try {
            return JSON.parse(string, function (key, value) {
                try {
                    return this.jsonParse(value);
                } catch (e) {
                    return value;
                }
            }.bind(this))
        } catch (e) {
            return string;
        }
    };
}
if (!Dhoom.loadParam) {
    Dhoom.loadParam = function (sym) {
        return Dhoom.jsonParse(Dhoom.Parameters[sym]);
    };
}

Dhoom.VariableBar.presets = Dhoom.loadParam('Presets');

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Bitmap
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
if (!Bitmap.prototype.changeTextStyle) {
    Dhoom.VariableBar.Bitmap_initialize = Bitmap.prototype.initialize;
    Bitmap.prototype.initialize = function (width, height) {
        Dhoom.VariableBar.Bitmap_initialize.call(this, width, height);
        this.fontBold = false;
    };

    Dhoom.VariableBar.Bitmap_makeFontNameText = Bitmap.prototype._makeFontNameText;
    Bitmap.prototype._makeFontNameText = function () {
        if (this.fontBold) return 'Bold ' + this.fontSize + 'px ' + this.fontFace;
        return Dhoom.VariableBar.Bitmap_makeFontNameText.call(this);
    };

    Bitmap.prototype.changeTextStyle = function (style) {
        this.fontFace = style.name.length > 0 ? style.name : 'GameFont';
        this.fontSize = style.size;
        this.textColor = style.color;
        this.outlineWidth = style.outlineWidth;
        this.outlineColor = style.outlineColor;
        this.fontBold = style.bold;
        this.fontItalic = style.italic;
    };
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// DataManager
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
var $gameVariableBars = null;

Dhoom.VariableBar.DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function () {
    Dhoom.VariableBar.DataManager_createGameObjects.call(this);
    $gameVariableBars = new Game_VariableBars();
};

Dhoom.VariableBar.DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function () {
    contents = Dhoom.VariableBar.DataManager_makeSaveContents.call(this);
    contents.VariableBar = $gameVariableBars;
    return contents;
};

Dhoom.VariableBar.DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function (contents) {
    Dhoom.VariableBar.DataManager_extractSaveContents.call(this, contents);
    $gameVariableBars = contents.VariableBar ? contents.VariableBar : new Game_VariableBars();
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_VariableBar
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Game_VariableBar() {
    this.initialize.apply(this, arguments);
}

Game_VariableBar.prototype.initialize = function (id, variableId, maxValue, presetId) {
    this.id = id;
    this.presetId = presetId;
    this.variableId = variableId;
    this.maxValue = maxValue;
    this.realValue = variableId ? $gameVariables.value(variableId) : 0;
    this.value = this.realValue;
    this.x = this.preset().x;
    this.y = this.preset().y;
    this.backFilename = this.preset().back;
    this.fillFilename = this.preset().fill;
    this.fillX = this.preset().fillX;
    this.fillY = this.preset().fillY;
    this.fillDuration = this.preset().fillDuration;
    this.fillDirection = this.preset().fillDirection;
    this.duration = 0;
    this.valueSpeed = 0;
};

Game_VariableBar.prototype.preset = function () {
    return Dhoom.VariableBar.presets[this.presetId];
};

Game_VariableBar.prototype.update = function () {
    if (this.variableId) {
        var temp = this.realValue;
        this.realValue = $gameVariables.value(this.variableId).clamp(0, this.maxValue);
        if (temp !== this.realValue) {
            this.value = temp;
            this.valueSpeed = (this.realValue - temp) / this.fillDuration;
            this.duration = this.fillDuration;
        }
        if (this.duration > 0) {
            this.value += this.valueSpeed;
            this.duration--;
            if (this.duration === 0) this.value = this.realValue;
        }
    }
};

Game_VariableBar.prototype.getRate = function () {
    return this.value / this.maxValue;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_VariableBars
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Game_VariableBars() {
    this.initialize.apply(this, arguments);
}

Game_VariableBars.prototype.initialize = function () {
    this.clear();
};

Game_VariableBars.prototype.clear = function () {
    this._data = {};
};

Game_VariableBars.prototype.getBar = function (id) {
    return this._data[id];
};

Game_VariableBars.prototype.createBar = function (id, variableId, maxValue, presetId) {
    this._data[id] = new Game_VariableBar(id, variableId, maxValue, presetId);
};

Game_VariableBars.prototype.removeBar = function (id) {
    this._data[id] = null;
};

Game_VariableBars.prototype.update = function () {
    for (var id in this._data) {
        if (this._data[id]) this._data[id].update();
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Interpreter
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.VariableBar.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    Dhoom.VariableBar.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'VariableBar') {
        var bar;
        switch (args[0]) {
            case 'create':
                var id = Number(args[1]);
                var variableId = Number(args[2]);
                var maxValue = Number(args[3]);
                var presetId = Number(args[4]);
                $gameVariableBars.createBar(id, variableId, maxValue, presetId);
                break;
            case 'remove':
                $gameVariableBars.removeBar(Number(args[1]));
                break;
            case 'setValue':
                bar = $gameVariableBars.getBar(Number(args[1]));
                if (!bar) return;
                bar.getBar(Number(args[1])).value = Number(args[2]);
                break;
            case 'setMaxValue':
                bar = $gameVariableBars.getBar(Number(args[1]));
                if (!bar) return;
                bar.maxValue = Number(args[2]);
                break;
            case 'move':
                bar = $gameVariableBars.getBar(Number(args[1]));
                if (!bar) return;
                if (args[2].toLowerCase() === 'x') {
                    bar.x = Number(args[3]);
                } else if (args[2].toLowerCase() === 'y') {
                    bar.y = Number(args[3]);
                }
                break;
        }
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Sprite_VariableBar
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Sprite_VariableBar() {
    this.initialize.apply(this, arguments);
}

Sprite_VariableBar.prototype = Object.create(Sprite.prototype);
Sprite_VariableBar.prototype.constructor = Sprite_VariableBar;

Sprite_VariableBar.prototype.initialize = function (id) {
    Sprite.prototype.initialize.call(this);
    this._id = id;
    this.createFillSprite();
    this.refresh();
    this.update();
};

Sprite_VariableBar.prototype.data = function () {
    return $gameVariableBars.getBar(this._id);
};

Sprite_VariableBar.prototype.refresh = function () {
    this.bitmap = ImageManager.loadSystem(this.data().backFilename);
    this._fillSprite.bitmap = ImageManager.loadSystem(this.data().fillFilename);
};

Sprite_VariableBar.prototype.createFillSprite = function () {
    this._fillSprite = new Sprite();
    this.addChild(this._fillSprite);
};

Sprite_VariableBar.prototype.update = function () {
    Sprite.prototype.update.call(this);
    if (this.data()) {
        this.updatePosition();
        this.updateFillFrame();
    }
};

Sprite_VariableBar.prototype.updatePosition = function () {
    this.x = this.data().x;
    this.y = this.data().y;
    this._fillSprite.x = this.data().fillX;
    this._fillSprite.y = this.data().fillY;
};

Sprite_VariableBar.prototype.updateFillFrame = function () {
    var x = 0;
    var y = 0;
    var width = this._fillSprite.bitmap.width;
    var height = this._fillSprite.bitmap.height;
    var rate = this.data().getRate();
    if (this.data().fillDirection === "Horizontal") {
        width *= rate;
    } else {
        height *= rate;
        y = this._fillSprite.bitmap.height - height;
        this._fillSprite.y += y;
    }
    this._fillSprite.setFrame(x, y, width, height);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Spriteset_Map
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Spriteset_Map.prototype.createVariableBarsContainer = function () {
    this._variableBars = [];
    this._variableBarsContainerOver = new Sprite();
    this.addChild(this._variableBarsContainerOver);
};

Spriteset_Map.prototype.createBar = function (id) {
    if (this._variableBars[id]) this.removeBar(id);
    this._variableBars[id] = new Sprite_VariableBar(id);
    this._variableBarsContainerOver.addChild(this._variableBars[id]);
};

Spriteset_Map.prototype.removeBar = function (id) {
    if (!this._variableBars[id]) return;
    this._variableBarsContainerOver.removeChild(this._variableBars[id]);
    this._variableBars[id] = null;
};

Spriteset_Map.prototype.getBar = function (id) {
    return this._variableBars[id];
};

Dhoom.VariableBar.Spriteset_Map_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function () {
    if (!this._variableBarsContainerOver) {
        this.createVariableBarsContainer();
    }
    Dhoom.VariableBar.Spriteset_Map_update.call(this);
    this.updateVariableBars();
};

Spriteset_Map.prototype.updateVariableBars = function () {
    $gameVariableBars.update();
    if (this._variableBars) {
        for (var id in this._variableBars) {
            if (!$gameVariableBars.getBar(id)) {
                this.removeBar(id);
            }
        }
        for (var x in $gameVariableBars._data) {
            var data = $gameVariableBars._data[x];
            if (data) {
                if (!this._variableBars[data.id]) {
                    this.createBar(data.id);
                }
            }
        }
    }
};