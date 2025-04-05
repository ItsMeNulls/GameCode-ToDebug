//=============================================================================
// DhoomLive2DTint.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_L2DTint = true;

var Dhoom = Dhoom || {};
Dhoom.L2DTint = Dhoom.L2DTint || {};
/*:
 * @plugindesc Dhoom L2DTint v1.1
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Switch ID
 * @desc Switch for enabling and disabling this plugin. 0 = Always active.
 * @type switch
 * @default 0
 * 
 * @param Red Value
 * @type number
 * @min -255
 * @max 255
 * @default -68
 * 
 * @param Green Value
 * @type number
 * @min -255
 * @max 255
 * @default -68
 * 
 * @param Blue Value
 * @type number
 * @min -255
 * @max 255
 * @default -68
 * 
 * @param Gray Value
 * @type number
 * @min 0
 * @max 255
 * @default 0
 * 
 * @param Duration
 * @desc Tint transition duration.
 * @type number
 * @min 0
 * @max 99999
 * @default 0
 *
 * @help
  (c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
 */

Dhoom.Parameters = PluginManager.parameters('DhoomLive2DTint');
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

Dhoom.L2DTint.switchId = Dhoom.loadParam('Switch ID');
Dhoom.L2DTint.tintValue = [Dhoom.loadParam('Red Value'), Dhoom.loadParam('Green Value'), Dhoom.loadParam('Blue Value'), Dhoom.loadParam('Gray Value')];
Dhoom.L2DTint.tintDuration = Dhoom.loadParam('Duration');

Dhoom.L2DTint.Game_Screen_startTint = Game_Screen.prototype.startTint;
Game_Screen.prototype.startTint = function (tone, duration) {
    if ((Dhoom.L2DTint.switchId === 0 || $gameSwitches.value(Dhoom.L2DTint.switchId)) && this.anyLive2DVisible() && !tone.equals(Dhoom.L2DTint.tintValue)) {
        this._tempTone = tone.clone();
    } else {
        Dhoom.L2DTint.Game_Screen_startTint.call(this, tone, duration);
    }
};

Dhoom.L2DTint.Game_Screen_update = Game_Screen.prototype.update;
Game_Screen.prototype.update = function () {
    Dhoom.L2DTint.Game_Screen_update.call(this);
    this.updateLive2DTint();
};

Game_Screen.prototype.updateLive2DTint = function () {
    if (Dhoom.L2DTint.switchId === 0 || $gameSwitches.value(Dhoom.L2DTint.switchId)) {
        if (this.anyLive2DVisible()) {
            if (!this._tone.equals(Dhoom.L2DTint.tintValue) && !this._toneTarget.equals(Dhoom.L2DTint.tintValue)) {
                this._tempTone = this._tone.clone();
                this.startTint(Dhoom.L2DTint.tintValue, Dhoom.L2DTint.tintDuration);
            }
        } else if (this._tempTone) {
            this.startTint(this._tempTone, Dhoom.L2DTint.tintDuration);
            this._tempTone = null;
        }
    } else if (this._tempTone) {
        this.startTint(this._tempTone, Dhoom.L2DTint.tintDuration);
        this._tempTone = null;
    }
};

Game_Screen.prototype.anyLive2DVisible = function () {
    for (var key in this.live2dModels) {
        var model = this.live2dModels[key];
        if (model && (model instanceof Sprite_Live2D || model instanceof LIVE2DCUBISMPIXI.Model) && !model._hiding && model.opacity > 0) {
            return true;
        }
    }
    return false;
};