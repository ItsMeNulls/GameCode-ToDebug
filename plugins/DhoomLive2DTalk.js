//=============================================================================
// DhoomLive2DTalk.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_L2DTalk = true;

var Dhoom = Dhoom || {};
Dhoom.L2DTalk = Dhoom.L2DTalk || {};
/*:
 * @plugindesc Dhoom L2DTalk v1.2b
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Switch
 * @desc Switch to enable or disable talking motion.
 * @type switch
 * @default 1
 * 
 * @param Default Motion Group Name
 * @desc Default motion group name.
 * @default talk
 * 
 * @param Default Motion Index
 * @desc Default motion index. Start from 0. Set to -1 for random motion.
 * @default -1
 * @type number
 * @min -1
 * 
 * @param Models Talk Motion
 * @desc Set talk motion for specific models. [Model Name/Model Key, Motion Group Name, Motion Index]
 * @default ["[\"haru\", \"tap_body\", -1]","[\"wanko\", \"shake\", 2]"]
 * @type string[]
 * 
 * @param Disable Filter
 * @desc Filter for disabling the talk motion.
 * @default \C[
 * 
 * @param Model Keys
 * @desc Name to which KEYs for the talk motion. Also work for escape character just add another '\'. [NAME, KEY, KEY, ...]
 * @default ["[\"\\\\N[1]\", \"testing\", \"testing2\"]"]
 * @type text[]
 *
 * @help 
    Boner Games © 2017 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

Dhoom.Parameters = PluginManager.parameters('DhoomLive2DTalk');
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

Dhoom.L2DTalk.switchId = Dhoom.loadParam('Switch');
Dhoom.L2DTalk.defaultMotion = String(Dhoom.Parameters['Default Motion Group Name']);
Dhoom.L2DTalk.defaultMotionIndex = Number(Dhoom.Parameters['Default Motion Index']);
Dhoom.L2DTalk.modelKeys = Dhoom.loadParam('Model Keys');
Dhoom.L2DTalk.defaultTalkMotions = Dhoom.loadParam('Models Talk Motion');
Dhoom.L2DTalk.talkMotions = JsonEx.makeDeepCopy(Dhoom.L2DTalk.defaultTalkMotions);
Dhoom.L2DTalk.disableFilter = String(Dhoom.Parameters['Disable Filter']);

PluginManager.loadScript('Live2D/Sprite_Live2D_talkPatch.js');
PluginManager.loadScript('Live2D/LAppModel_talkPatch.js');

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Screen
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Game_Screen.prototype.live2DSetTalk = function (key) {
    var model = this.getLive2DModel(key.toLowerCase());
    var dummy = new Window_Base(0, 0, 128, 128);
    var keys = [];
    if (model) {
        keys.push(key.toLowerCase());
    } else {
        for (var i = 0; i < Dhoom.L2DTalk.modelKeys.length; i++) {
            if (dummy.convertEscapeCharacters(Dhoom.L2DTalk.modelKeys[i][0]) === key) {
                keys = keys.concat(Dhoom.L2DTalk.modelKeys[i].slice(1));
            }
        }
    }
    for (var i = 0; i < keys.length; i++) {
        model = this.getLive2DModel(keys[i]);
        if (model) {
            pending = this.live2dPendingMethods[keys[i]];
            var name = typeof model === "string" ? model : model._model.modelSetting.json.name;
            $gameTemp._l2dTalkModel = $gameTemp._l2dTalkModel || { names: [], keys: [] };
            $gameTemp._l2dTalkModel.names.push(name);
            $gameTemp._l2dTalkModel.keys.push(keys[i]);
            var motion = Dhoom.L2DTalk.defaultMotion;
            var index = Dhoom.L2DTalk.defaultMotionIndex;
            for (var j = 0; j < Dhoom.L2DTalk.talkMotions.length; j++) {
                if (Dhoom.L2DTalk.talkMotions[j][0] === keys[i] || Dhoom.L2DTalk.talkMotions[j][0] === name) {
                    motion = Dhoom.L2DTalk.talkMotions[j][1];
                    index = Dhoom.L2DTalk.talkMotions[j][2];
                }
            }
            if (typeof model === "string" || model._isLoading) {
                pending.push([Sprite_Live2D.prototype.setTalkMotion, [motion, index]]);
            } else {
                model.setTalkMotion(motion, index);
            }
        }
    };
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Interpreter
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DTalk.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    Dhoom.L2DTalk.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command.toLowerCase() === 'live2d' && args[0].toLowerCase() === 'talkmotion') {
        var model = args[1];
        var index = Number(args[3]);
        if (args[2].toLowerCase() === 'reset') {
            for (var i = 0; i < Dhoom.L2DTalk.talkMotions.length; i++) {
                if (Dhoom.L2DTalk.talkMotions[i][0] === model) {
                    Dhoom.L2DTalk.talkMotions[i] = Dhoom.L2DTalk.defaultTalkMotions[i].clone();
                    break;
                }
            }
        } else {
            for (var i = 0; i < Dhoom.L2DTalk.talkMotions.length; i++) {
                if (Dhoom.L2DTalk.talkMotions[i][0] === model) {
                    Dhoom.L2DTalk.talkMotions[i][1] = args[2];
                    Dhoom.L2DTalk.talkMotions[i][2] = Number.isInteger(index) ? index : -1;
                    return;
                }
            }
            Dhoom.L2DTalk.talkMotions.push([model, args[2], Number.isInteger(index) ? index : -1]);
        }
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_NameBox
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DTalk.Window_NameBox_refresh = Window_NameBox.prototype.refresh;
Window_NameBox.prototype.refresh = function (text, position) {
    if (text.contains('|NTM|')) {
        text = text.replace('|NTM|', '');
    } else if (!text.contains(Dhoom.L2DTalk.disableFilter) && !$gameTemp._disableL2DTalkMotion) {
        if ($gameSwitches.value(Dhoom.L2DTalk.switchId)) {
            $gameScreen.live2DSetTalk(text);
        }
    }
    return Dhoom.L2DTalk.Window_NameBox_refresh.call(this, text, position);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_Message
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DTalk.Window_Message_convertEscapeCharacters = Window_Message.prototype.convertEscapeCharacters;
Window_Message.prototype.convertEscapeCharacters = function (text) {
    $gameTemp._disableL2DTalkMotion = text.contains(Dhoom.L2DTalk.disableFilter);
    return Dhoom.L2DTalk.Window_Message_convertEscapeCharacters.call(this, text);
    $gameTemp._disableL2DTalkMotion = false;
};

Dhoom.L2DTalk.Window_Message_startMessage = Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function () {
    $gameMessage._messageStarted = true;
    $gameTemp._l2dTalkModel = null;
    Dhoom.L2DTalk.Window_Message_startMessage.call(this);
};

Dhoom.L2DTalk.Window_Message_onEndOfText = Window_Message.prototype.onEndOfText;
Window_Message.prototype.onEndOfText = function () {
    $gameMessage._messageStarted = false;
    $gameTemp._l2dTalkModel = null;
    Dhoom.L2DTalk.Window_Message_onEndOfText.call(this);
};