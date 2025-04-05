//=============================================================================
// DhoomLive2DBattle.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_L2DBattle = "1.0";

var Dhoom = Dhoom || {};
Dhoom.L2DBattle = Dhoom.L2DBattle || {};
/*:
 * @plugindesc Dhoom L2DBattle v1.0 - 20/09/2021
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Enable Switch
 * @desc Set to None/0 to always enabled.
 * @type switch
 * @default 0
 * 
 * @param Variable ID
 * @type variable
 * @default 1
 * 
 * @param Max Variable Value
 * @type number
 * @default 100
 * 
 * @param Player Default Setting
 * @desc [x, y]
 * @type struct<modelSetting>
 * @default {"x":"-400","y":"-400","scale":"0.50"}
 * 
 * @param Enemy Default Setting
 * @desc [x, y]
 * @type struct<modelSetting>
 * @default {"x":"400","y":"-600","scale":"0.30"}
 * 
 * @param Player Status Window
 * @type struct<playerStatusWindow>
 * @default {"x":"17","y":"7","width":"462","height":"99","opacity":"255","padding":"18","background":"{\"x\":\"0\",\"y\":\"0\",\"filename\":\"\"}","hpGauge":"{\"x\":\"12\",\"y\":\"44\",\"back\":\"battle player gauge back\",\"fillX\":\"4\",\"fillY\":\"3\",\"fill\":\"battle player gauge fill\",\"flow\":\"battle player gauge flow\",\"flowDuration\":\"30\"}","texts":"[\"{\\\"text\\\":\\\"%1\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"426\\\",\\\"height\\\":\\\"24\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"left\\\\\\\"}\\\"}\",\"{\\\"text\\\":\\\"%2%\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"36\\\",\\\"width\\\":\\\"426\\\",\\\"height\\\":\\\"30\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"]"}
 * 
 * @param Enemy Status Window
 * @type struct<enemyStatusWindow>
 * @default {"x":"834","y":"563","width":"462","height":"99","opacity":"255","padding":"18","background":"{\"x\":\"0\",\"y\":\"0\",\"filename\":\"\"}","hpGauge":"{\"x\":\"12\",\"y\":\"44\",\"back\":\"battle player gauge back\",\"fillX\":\"4\",\"fillY\":\"3\",\"fill\":\"battle player gauge fill\",\"flow\":\"battle player gauge flow\",\"flowDuration\":\"30\"}","texts":"[\"{\\\"text\\\":\\\"Lvl: %4\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"213\\\",\\\"height\\\":\\\"24\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"left\\\\\\\"}\\\"}\",\"{\\\"text\\\":\\\"%1\\\",\\\"x\\\":\\\"213\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"213\\\",\\\"height\\\":\\\"24\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"right\\\\\\\"}\\\"}\",\"{\\\"text\\\":\\\"%2 / %3\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"36\\\",\\\"width\\\":\\\"426\\\",\\\"height\\\":\\\"30\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"3\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"]"}
 *
 * @param Battle Log Window
 * @type struct<battleLogWindow>
 * @default {"maxLines":"2","x":"0","y":"660"}
 * 
 * @param Command Window
 * @type struct<commandWindow>
 * @default {"x":"420","y":"300","width":"160","height":"180","opacity":"255","padding":"18","lineHeight":"36","spacing":"0","background":"{\"x\":\"0\",\"y\":\"0\",\"filename\":\"\"}","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"3\",\"outlineColor\":\"#000000\",\"align\":\"left\"}"}
 * 
 * @param Skill Window
 * @type struct<selectableWindow>
 * @default {"x":"580","y":"300","width":"440","height":"440","opacity":"255","padding":"18","lineHeight":"36","column":"1","vspacing":"8","spacing":"8","background":"{\"x\":\"0\",\"y\":\"0\",\"filename\":\"\"}","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"3\",\"outlineColor\":\"#000000\",\"align\":\"left\"}"}
 * 
 * @param Item Window
 * @type struct<selectableWindow>
 * @default {"x":"580","y":"300","width":"440","height":"440","opacity":"255","padding":"18","lineHeight":"36","column":"1","vspacing":"8","spacing":"8","background":"{\"x\":\"0\",\"y\":\"0\",\"filename\":\"\"}","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"3\",\"outlineColor\":\"#000000\",\"align\":\"left\"}"}
 * 
 * @param Help Window
 * @type struct<windowSetting>
 * @default {"x":"420","y":"192","width":"600","height":"108","opacity":"255","padding":"18","lineHeight":"36","background":"{\"x\":\"0\",\"y\":\"0\",\"filename\":\"\"}","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"3\",\"outlineColor\":\"#000000\",\"align\":\"left\"}"}
 * 
 * @param Confirmation Window
 * @type struct<confirmWindow>
 * @default {"x":"580","y":"300","width":"160","height":"108","opacity":"255","padding":"18","lineHeight":"36","column":"1","vspacing":"0","spacing":"0","background":"{\"x\":\"0\",\"y\":\"0\",\"filename\":\"\"}","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"3\",\"outlineColor\":\"#000000\",\"align\":\"left\"}","confirm":"Yes","cancel":"No"}
 * 
 * @param Confirmation Help Window
 * @type struct<confirmHelpWindow>
 * @default {"x":"420","y":"192","width":"600","height":"108","opacity":"255","padding":"18","lineHeight":"36","background":"{\"x\":\"0\",\"y\":\"0\",\"filename\":\"\"}","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"3\",\"outlineColor\":\"#000000\",\"align\":\"left\"}","text":"\"Are you sure you want to flee?\\nIf this fail, it will end your turn.\""}
 * 
 * @help 
  (c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
 */

/*~struct~selectableWindow:
@param x
@text X Position
@type number
@min -999999
@default 0

@param y
@text Y Position
@type number
@min -999999
@default 0

@param width
@text Width
@type number
@min 1
@default 32

@param height
@text Height
@type number
@min 1
@default 32

@param opacity
@text Window Opacity
@type number
@max 255
@default 255

@param padding
@text Padding
@type number
@min 0
@default 18

@param lineHeight
@text Line Height
@type number
@min 1
@default 36

@param column
@text Max Column
@type number
@min 1
@default 2

@param vspacing
@text Vertical Spacing
@desc Spacing between each item.
@type number
@min -9999999
@default 8

@param spacing
@text Horizontal Spacing
@desc Spacing between each item.
@type number
@min -999999
@default 8

@param background
@text Background Setting
@type struct<systemGraphic>
@default 

@param style
@text Text Style
@type struct<FontStyle>
@default 
*/

/*~struct~confirmWindow:
@param x
@text X Position
@type number
@min -999999
@default 0

@param y
@text Y Position
@type number
@min -999999
@default 0

@param width
@text Width
@type number
@min 1
@default 32

@param height
@text Height
@type number
@min 1
@default 32

@param opacity
@text Window Opacity
@type number
@max 255
@default 255

@param padding
@text Padding
@type number
@min 0
@default 18

@param lineHeight
@text Line Height
@type number
@min 1
@default 36

@param column
@text Max Column
@type number
@min 1
@default 2

@param vspacing
@text Vertical Spacing
@desc Spacing between each item.
@type number
@min -9999999
@default 8

@param spacing
@text Horizontal Spacing
@desc Spacing between each item.
@type number
@min -999999
@default 8

@param background
@text Background Setting
@type struct<systemGraphic>
@default 

@param style
@text Text Style
@type struct<FontStyle>
@default 

@param confirm
@text Confirm Text
@default Yes

@param cancel
@text Cancel Text
@default No
*/

/*~struct~windowSetting:
@param x
@text X Position
@type number
@min -999999
@default 0

@param y
@text Y Position
@type number
@min -999999
@default 0

@param width
@text Width
@type number
@min 1
@default 32

@param height
@text Height
@type number
@min 1
@default 32

@param opacity
@text Window Opacity
@type number
@max 255
@default 255

@param padding
@text Padding
@type number
@min 0
@default 18

@param lineHeight
@text Line Height
@type number
@min 1
@default 36

@param background
@text Background Setting
@type struct<systemGraphic>
@default 

@param style
@text Text Style
@type struct<FontStyle>
@default 
*/

/*~struct~confirmHelpWindow:
@param x
@text X Position
@type number
@min -999999
@default 0

@param y
@text Y Position
@type number
@min -999999
@default 0

@param width
@text Width
@type number
@min 1
@default 32

@param height
@text Height
@type number
@min 1
@default 32

@param opacity
@text Window Opacity
@type number
@max 255
@default 255

@param padding
@text Padding
@type number
@min 0
@default 18

@param lineHeight
@text Line Height
@type number
@min 1
@default 36

@param background
@text Background Setting
@type struct<systemGraphic>
@default 

@param style
@text Text Style
@type struct<FontStyle>
@default 

@param text
@text Help Text
@type note
@default 
*/

/*~struct~commandWindow:
@param x
@text X Position
@type number
@min -999999
@default 0

@param y
@text Y Position
@type number
@min -999999
@default 0

@param width
@text Width
@type number
@min 1
@default 32

@param height
@text Height
@type number
@min 1
@default 32

@param opacity
@text Window Opacity
@type number
@max 255
@default 255

@param padding
@text Padding
@type number
@min 0
@default 18

@param lineHeight
@text Line Height
@type number
@min 1
@default 36

@param spacing
@text Spacing
@desc Spacing between each item.
@type number
@min -999999
@default 8

@param background
@text Background Setting
@type struct<systemGraphic>
@default 

@param style
@text Text Style
@type struct<FontStyle>
@default 
*/

/*~struct~battleLogWindow:
@param maxLines
@text Max Lines
@type number
@min 1
@default 2

@param x
@text X Position
@type number
@min -999999
@default 0

@param y
@text Y Position
@type number
@min -999999
@default 0
*/

/*~struct~enemyStatusWindow:
@param x
@text X Position
@type number
@min -999999
@default 0

@param y
@text Y Position
@type number
@min -999999
@default 0

@param width
@text Width
@type number
@min 1
@default 32

@param height
@text Height
@type number
@min 1
@default 32

@param opacity
@text Window Opacity
@type number
@max 255
@default 255

@param padding
@text Padding
@type number
@min 0
@default 18

@param background
@text Background Setting
@type struct<systemGraphic>
@default 

@param hpGauge
@text HP Gauge Setting
@type struct<gaugeSetting>
@default 

@param texts
@text Text Settings
@desc %1 = Enemy name, %2 = Enemy HP, %3 = Enemy Max HP, %4 = Enemy level.
@type struct<textSetting>[]
@default []
*/

/*~struct~playerStatusWindow:
@param x
@text X Position
@type number
@min -999999
@default 0

@param y
@text Y Position
@type number
@min -999999
@default 0

@param width
@text Width
@type number
@min 1
@default 32

@param height
@text Height
@type number
@min 1
@default 32

@param opacity
@text Window Opacity
@type number
@max 255
@default 255

@param padding
@text Padding
@type number
@min 0
@default 18

@param background
@text Background Setting
@type struct<systemGraphic>
@default 

@param hpGauge
@text HP Gauge Setting
@type struct<gaugeSetting>
@default 

@param texts
@text Text Settings
@desc %1 = Player name, %2 = Player HP, %3 = Player Max HP.
@type struct<textSetting>[]
@default []
*/

/*~struct~textSetting:
@param text
@text Text Format
@default %1

@param x
@text X Position
@type number
@min -999999999
@default 0

@param y
@text Y Position
@type number
@min -999999999
@default 0

@param width
@text Text Width
@type number
@min 1
@default 1

@param height
@text Text Height
@type number
@min 1
@default 1

@param style
@text Text Style
@type struct<FontStyle>
*/

/*~struct~FontStyle:
@param name
@text Font Name
@desc Font name, leave empty if you want to use the default font.
@default 

@param size
@text Font Size
@desc Font size
@default 32
@type number
@min 1

@param color
@text Font Color
@desc Font color
@default #FFFFFF

@param outlineWidth
@text Font Outline Width
@desc Font outline width
@default 1
@type number

@param outlineColor
@text Font Outline Color
@desc Font outline color
@default #000000

@param align
@text Text Alignment
@desc Text alignment
@default center
@type select
@option left
@option center
@option right
*/

/*~struct~gaugeSetting:
@param x
@text X Position
@type number
@min -999999999
@default 0

@param y
@text Y Position
@type number
@min -999999999
@default 0

@param back
@text Back Filename
@type file
@dir img/system/

@param fillX
@text Fill X
@type number
@min -999999999
@default 0

@param fillY
@text Fill Y
@type number
@min -999999999
@default 0

@param fill
@text Fill Filename
@type file
@dir img/system/

@param flow
@text Flow Filename
@type file
@dir img/system/

@param flowDuration
@text Flow Duration
@type number
@min 0
@default 10
*/

/*~struct~systemGraphic:
@param x
@text X Position
@type number
@min -999999999
@default 0

@param y
@text Y Position
@type number
@min -999999999
@default 0

@param filename
@text Filename
@type file
@dir img/system/
*/

/*~struct~modelSetting:
@param x
@text X Position
@type number
@min -999999
@default 0

@param y
@text Y Position
@type number
@min -999999
@default 0

@param scale
@text Scale
@type number
@min 0
@decimals 2
@default 0.3
*/

Dhoom.Parameters = $plugins.filter(function (obj) { return obj.description.match(/Dhoom L2DBattle/) })[0].parameters;
if (!Dhoom.jsonParse) {
    Dhoom.jsonParse = function (string) {
        if (typeof string === 'string') {
            try {
                return JSON.parse(string, function (key, value) {
                    if (typeof value === 'string') {
                        try {
                            return this.jsonParse(value);
                        } catch (e) {
                            return value;
                        }
                    } else {
                        return value;
                    }
                }.bind(this))
            } catch (e) {
                return string;
            }
        } else {
            return string;
        }
    };
}
if (!Dhoom.loadParam) {
    Dhoom.loadParam = function (sym) {
        return Dhoom.jsonParse(Dhoom.Parameters[sym]);
    };
}
Dhoom.L2DBattle.loadParameters = function () {
    for (var name in Dhoom.Parameters) {
        var sym = name.replace(/\s+/g, '');
        sym = sym[0].toLowerCase() + sym.slice(1);
        Dhoom.L2DBattle[sym] = Dhoom.loadParam(name);
    }
};
Dhoom.L2DBattle.loadParameters();

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// DataManager
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DBattle.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function () {
    if (!Dhoom.L2DBattle.DataManager_isDatabaseLoaded.call(this)) return false;
    if (!Dhoom.L2DBattle.isL2DBattleInitialized) {
        this.DhoomInitL2DBattle();
        Dhoom.L2DBattle.isL2DBattleInitialized = true;
    }
    return true;
};

DataManager.DhoomInitL2DBattle = function () {
    var group = [].concat($dataActors).concat($dataEnemies);
    for (var i = 1; i < group.length; i++) {
        var object = group[i];
        if (object) {
            var notedata = object.note.split(/[\r\n]+/);
            var modelSetting = false;
            defaultSetting = i >= $dataActors.length ? Dhoom.L2DBattle.enemyDefaultSetting : Dhoom.L2DBattle.playerDefaultSetting;
            var modelResult = {
                name: "",
                scale: defaultSetting.scale,
                x: defaultSetting.x,
                y: defaultSetting.y,
                motions: {}
            };
            for (var n = 0; n < notedata.length; n++) {
                var note = notedata[n];
                if (note.match(/<escapechance:\s*(\d+)>/i)) {
                    object._escapeChance = Number(RegExp.$1);
                }
                if (note.match(/<level:\s*(\d+)>/i)) {
                    object._level = Number(RegExp.$1);
                }
                if (note.match(/<modelsetting>/i)) {
                    modelSetting = true;
                }
                if (note.match(/<\/modelsetting>/i)) {
                    modelSetting = false;
                    object._battleModelSetting = modelResult;
                    modelResult = {
                        name: "",
                        scale: defaultSetting.scale,
                        x: defaultSetting.x,
                        y: defaultSetting.y,
                        motions: {}
                    };
                }
                if (modelSetting) {
                    if (note.match(/flip/i))
                        modelResult.flip = true;
                    if (note.match(/name:\s*(.+)/i))
                        modelResult.name = RegExp.$1.trim();
                    if (note.match(/scale:\s*([0-9.]+)/i))
                        modelResult.scale = Number(RegExp.$1);
                    if (note.match(/x:\s*(-?\d+)/i))
                        modelResult.x = Number(RegExp.$1);
                    if (note.match(/y:\s*(-?\d+)/i))
                        modelResult.y = Number(RegExp.$1);
                    if (note.match(/motion\s(.+):\s*(.+)/i)) {
                        var motion = RegExp.$1.trim();
                        modelResult.motions[motion] = modelResult.motions[motion] || {};
                        var result = RegExp.$2.trim();
                        if (result.contains('|')) {
                            var results = result.split(',');
                            for (var j = 0; j < results.length; j++) {
                                var split = results[j].split("|");
                                var index = Number(split[0]);
                                modelResult.motions[motion][index] = split[1].trim();
                            }
                        } else {
                            modelResult.motions[motion][100] = result;
                        }
                    }
                }
            }
        }
    }
    group = [].concat($dataItems).concat($dataSkills);
    for (var i = 1; i < group.length; i++) {
        var object = group[i];
        if (object) {
            notedata = object.note.split(/[\r\n]+/);
            for (var n = 0; n < notedata.length; n++) {
                if (notedata[n].match(/<motion:\s*(.+)>/i)) {
                    object.live2DMotion = RegExp.$1.trim();
                }
            }
        }
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// BattleManager
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DBattle.BattleManager_setup = BattleManager.setup;
BattleManager.setup = function (troopId, canEscape, canLose) {
    Dhoom.L2DBattle.BattleManager_setup.call(this, troopId, canEscape, canLose);
    if ($gameSystem.isLive2DBattle()) $gameParty.onLive2DBattleStart();
};

Dhoom.L2DBattle.BattleManager_makeEscapeRatio = BattleManager.makeEscapeRatio;
BattleManager.makeEscapeRatio = function () {
    if ($gameTroop.members()[0].escapeChance() !== undefined) {
        this._escapeRatio = $gameTroop.members()[0].escapeChance() / 100;
    } else {
        Dhoom.L2DBattle.BattleManager_makeEscapeRatio.call(this);
    }
};

Dhoom.L2DBattle.BattleManager_updateEventMain = BattleManager.updateEventMain;
BattleManager.updateEventMain = function () {
    $gameTroop.requestMotionRefresh();
    return Dhoom.L2DBattle.BattleManager_updateEventMain.call(this);
};

Dhoom.L2DBattle.BattleManager_startTurn = BattleManager.startTurn;
BattleManager.startTurn = function () {
    Dhoom.L2DBattle.BattleManager_startTurn.call(this);
    $gameTroop.requestMotionRefresh();
};

Dhoom.L2DBattle.BattleManager_updateTurn = BattleManager.updateTurn;
BattleManager.updateTurn = function () {
    $gameTroop.requestMotionRefresh();
    Dhoom.L2DBattle.BattleManager_updateTurn.call(this);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_System
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Game_System.prototype.isLive2DBattle = function () {
    return !Dhoom.L2DBattle.enableSwitch || $gameSwitches.value(Dhoom.L2DBattle.enableSwitch);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Screen
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
if (Imported.Dhoom_L2DTint) {
    Dhoom.L2DBattle.Game_Screen_anyLive2DVisible = Game_Screen.prototype.anyLive2DVisible;
    Game_Screen.prototype.anyLive2DVisible = function () {
        if ($gameParty.inBattle()) return false;
        return Dhoom.L2DBattle.Game_Screen_anyLive2DVisible.call(this);
    };
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Action
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Game_Action.prototype.live2DMotion = function () {
    return this.item() ? this.item().live2DMotion : null;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Battler
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Game_Battler.prototype.isLive2D = function () {
    return !!this.live2DModel();
};

Game_Battler.prototype.live2DModel = function () { return undefined; };

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Actor
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Game_Actor.prototype.live2DModel = function () {
    return this.actor()._battleModelSetting;
};

Dhoom.L2DBattle.Game_Actor_performDamage = Game_Actor.prototype.performDamage;
Game_Actor.prototype.performDamage = function () {
    Dhoom.L2DBattle.Game_Actor_performDamage.call(this);
    if ($gameSystem.isLive2DBattle()) this.requestEffect('blink');
};

Dhoom.L2DBattle.Game_Actor_param = Game_Actor.prototype.param;
Game_Actor.prototype.param = function (paramId) {
    if ($gameParty.inBattle() && $gameSystem.isLive2DBattle() && paramId === 0) {
        return Dhoom.L2DBattle.maxVariableValue;
    }
    return Dhoom.L2DBattle.Game_Actor_param.call(this, paramId);
};

Dhoom.L2DBattle.Game_Actor_setHp = Game_Actor.prototype.setHp;
Game_Actor.prototype.setHp = function (hp) {
    Dhoom.L2DBattle.Game_Actor_setHp.call(this, hp);
    if ($gameSystem.isLive2DBattle() && $gameParty.inBattle()) $gameVariables.setValue(Dhoom.L2DBattle.variableID, Dhoom.L2DBattle.maxVariableValue - this._hp);
};

Dhoom.L2DBattle.Game_Actor_onBattleEnd = Game_Actor.prototype.onBattleEnd;
Game_Actor.prototype.onBattleEnd = function () {
    Dhoom.L2DBattle.Game_Actor_onBattleEnd.call(this);
    if ($gameSystem.isLive2DBattle() && this._tempHp !== undefined) {
        this.setHp(this._tempHp);
        this._tempHp = undefined;
    }
};

Dhoom.L2DBattle.Game_Actor_performAction = Game_Actor.prototype.performAction;
Game_Actor.prototype.performAction = function (action) {
    if (action.live2DMotion()) {
        this.requestMotion(action.live2DMotion());
        return;
    }
    Dhoom.L2DBattle.Game_Actor_performAction.call(this, action);
};

Game_Actor.prototype.updateLive2DHpVariable = function () {
    this.setHp(Dhoom.L2DBattle.maxVariableValue - $gameVariables.value(Dhoom.L2DBattle.variableID));
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Enemy
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DBattle.Game_Enemy_screenX = Game_Enemy.prototype.screenX;
Game_Enemy.prototype.screenX = function () {
    if ($gameSystem.isLive2DBattle()) return 0;
    return Dhoom.L2DBattle.Game_Enemy_screenX.call(this);
};

Dhoom.L2DBattle.Game_Enemy_screenX = Game_Enemy.prototype.screenY;
Game_Enemy.prototype.screenY = function () {
    if ($gameSystem.isLive2DBattle()) return 0;
    return Dhoom.L2DBattle.Game_Enemy_screenY.call(this);
};

Game_Enemy.prototype.live2DModel = function () {
    return this.enemy()._battleModelSetting;
};

Dhoom.L2DBattle.Game_Enemy_performAction = Game_Enemy.prototype.performAction;
Game_Enemy.prototype.performAction = function (action) {
    Dhoom.L2DBattle.Game_Enemy_performAction.call(this, action);
    if (action.live2DMotion()) {
        this.requestMotion(action.live2DMotion());
    } else if (action.isGuard()) {
        this.requestMotion('guard');
    } else if (action.isMagicSkill()) {
        this.requestMotion('spell');
    } else if (action.isSkill()) {
        this.requestMotion('skill');
    } else if (action.isItem()) {
        this.requestMotion('item');
    }
};

Dhoom.L2DBattle.Game_Enemy_performDamage = Game_Enemy.prototype.performDamage;
Game_Enemy.prototype.performDamage = function () {
    Dhoom.L2DBattle.Game_Enemy_performDamage.call(this);
    this.requestMotion('damage');
};

Dhoom.L2DBattle.Game_Enemy_performEvasion = Game_Enemy.prototype.performEvasion;
Game_Enemy.prototype.performEvasion = function () {
    Dhoom.L2DBattle.Game_Enemy_performEvasion.call(this);
    this.requestMotion('evade');
};

Dhoom.L2DBattle.Game_Enemy_performMagicEvasion = Game_Enemy.prototype.performMagicEvasion;
Game_Enemy.prototype.performMagicEvasion = function () {
    Dhoom.L2DBattle.Game_Enemy_performMagicEvasion.call(this);
    this.requestMotion('evade');
};

Game_Enemy.prototype.live2DLevel = function () {
    return this.enemy()._level || 1;
};

Game_Enemy.prototype.escapeChance = function () {
    return this.enemy()._escapeChance;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Party
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Game_Party.prototype.onLive2DBattleStart = function () {
    var actor = this.members()[0];
    actor._tempHp = actor._hp;
    actor.setHp(Dhoom.L2DBattle.maxVariableValue - $gameVariables.value(Dhoom.L2DBattle.variableID));
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Troop
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Game_Troop.prototype.requestMotionRefresh = function () {
    this.members().forEach(function (enemy) {
        enemy.requestMotionRefresh();
    });
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Interpreter
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DBattle.Game_Interpreter_command122 = Game_Interpreter.prototype.command122;
Game_Interpreter.prototype.command122 = function () {
    var result = Dhoom.L2DBattle.Game_Interpreter_command122.call(this);
    if ($gameSystem.isLive2DBattle() && $gameParty.inBattle()) $gameParty.leader().updateLive2DHpVariable();
    return result;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Sprite_Animation
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DBattle.Sprite_Animation_updatePosition = Sprite_Animation.prototype.updatePosition;
Sprite_Animation.prototype.updatePosition = function () {
    if (this._target instanceof Sprite_Live2D) {
        if (this._animation.position === 3) {
            this.x = this.parent.width / 2;
            this.y = this.parent.height / 2;
        } else {
            var parent = this._target.parent;
            var grandparent = parent ? parent.parent : null;
            this.x = this._target.x + this._target.width / 2;
            this.y = this._target.y + this._target.height / 1.5;
            if (this.parent === grandparent) {
                this.x += parent.x;
                this.y += parent.y;
            }
        }
    } else {
        Dhoom.L2DBattle.Sprite_Animation_updatePosition.call(this);
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Sprite_Battler
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Sprite_Battler.prototype.setLive2DModel = function (model) {
    this._live2DModel = model;
    this._effectTarget = model;
    this.addChild(model);
    this.refreshMotion();
    this._live2DModel.fadeIn(30);
};

Sprite_Battler.prototype.live2DSetting = function () {
    if (this._battler) return this._battler.live2DModel();
};

Sprite_Battler.prototype.startLive2DMotion = function (motionType) {
    if (this._live2DModel && this.live2DSetting() && this.live2DSetting().motions[motionType]) {
        var hpr = Math.floor(this._battler.hpRate() * 100);
        var newMotion = "";
        var motions = this.live2DSetting().motions[motionType];
        var indexes = Object.keys(motions);
        for (var i = 0; i < indexes.length; i++) {
            if (hpr <= Number(indexes[i])) {
                newMotion = motions[indexes[i]];
                break;
            }
        }
        if (newMotion && this._l2dMotion !== newMotion) {
            this._l2dMotion = newMotion;
            this.refreshLive2DMotion(motionType === 'idle');
        }
    }
};

Sprite_Battler.prototype.refreshLive2DMotion = function (loop) {
    this._live2DModel.startRandomMotion(this._l2dMotion, 3, loop);
    if (!loop) this._live2DModel._model._tappedMotionDuration = Infinity;
};

Sprite_Battler.prototype.motionTypeToLive2DMotion = function (motionType) {
    var result = motionType;
    if (['walk', 'wait', 'dying'].contains(motionType)) {
        result = "idle";
    } else if (['thrust', 'swing', 'missle', 'skill', 'spell'].contains(motionType)) {
        result = "attack";
    }
    return result;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Sprite_Actor
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DBattle.Sprite_Actor_initMembers = Sprite_Actor.prototype.initMembers;
Sprite_Actor.prototype.initMembers = function () {
    Dhoom.L2DBattle.Sprite_Actor_initMembers.call(this);
    this._effectType = null;
};

Dhoom.L2DBattle.Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
Sprite_Actor.prototype.setActorHome = function (index) {
    if ($gameSystem.isLive2DBattle()) {
        this.setHome(0, 0);
        return
    }
    Dhoom.L2DBattle.Sprite_Actor_setActorHome.call(this, index);
};

Dhoom.L2DBattle.Sprite_Actor_startMove = Sprite_Actor.prototype.startMove;
Sprite_Actor.prototype.startMove = function (x, y, duration) {
    if (!$gameSystem.isLive2DBattle()) Dhoom.L2DBattle.Sprite_Actor_startMove.call(this, x, y, duration);
};

Dhoom.L2DBattle.Sprite_Actor_update = Sprite_Actor.prototype.update;
Sprite_Actor.prototype.update = function () {
    Dhoom.L2DBattle.Sprite_Actor_update.call(this);
    if (this._actor && $gameSystem.isLive2DBattle()) {
        this.updateEffect();
    }
};

Sprite_Actor.prototype.setupEffect = function () {
    if (this._actor.isEffectRequested()) {
        this.startEffect(this._actor.effectType());
        this._actor.clearEffect();
    }
};

Sprite_Actor.prototype.startEffect = function (effectType) {
    this._effectType = effectType;
    switch (this._effectType) {
        case 'whiten':
            this.startWhiten();
            break;
        case 'blink':
            this.startBlink();
            break;
    }
    this.revertToNormal();
};

Sprite_Actor.prototype.startWhiten = function () {
    this._effectDuration = 16;
};

Sprite_Actor.prototype.startBlink = function () {
    this._effectDuration = 20;
};

Sprite_Actor.prototype.isEffecting = function () {
    return this._effectType !== null;
};

Sprite_Actor.prototype.revertToNormal = function () {
    this._shake = 0;
    this.blendMode = 0;
    this.opacity = 255;
    this.setBlendColor([0, 0, 0, 0]);
};

Sprite_Actor.prototype.updateEffect = function () {
    this.setupEffect();
    if (this._effectDuration > 0) {
        this._effectDuration--;
        switch (this._effectType) {
            case 'whiten':
                this.updateWhiten();
                break;
            case 'blink':
                this.updateBlink();
                break;
        }
        if (this._effectDuration === 0) {
            this._effectType = null;
        }
    }
};

Sprite_Actor.prototype.updateWhiten = function () {
    var alpha = 128 - (16 - this._effectDuration) * 10;
    this.setBlendColor([255, 255, 255, alpha]);
};

Sprite_Actor.prototype.updateBlink = function () {
    this.opacity = (this._effectDuration % 10 < 5) ? 255 : 0;
};

Dhoom.L2DBattle.Sprite_Actor_startMotion = Sprite_Actor.prototype.startMotion;
Sprite_Actor.prototype.startMotion = function (motionType) {
    Dhoom.L2DBattle.Sprite_Actor_startMotion.call(this, motionType);
    this.startLive2DMotion(this.motionTypeToLive2DMotion(motionType));
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Sprite_Enemy
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DBattle.Sprite_Enemy_initMembers = Sprite_Enemy.prototype.initMembers;
Sprite_Enemy.prototype.initMembers = function () {
    Dhoom.L2DBattle.Sprite_Enemy_initMembers.call(this);
    this._battlerName = undefined;
    this._motion = null;
};

Dhoom.L2DBattle.Sprite_Enemy_update = Sprite_Enemy.prototype.update;
Sprite_Enemy.prototype.update = function () {
    Dhoom.L2DBattle.Sprite_Enemy_update.call(this);
    if (this._enemy) {
        this.setupMotion();
        if (this._enemy.isMotionRefreshRequested()) {
            this.refreshMotion();
            this._enemy.clearMotion();
        }
    }
};

Sprite_Enemy.prototype.setupMotion = function () {
    if (this._enemy.isMotionRequested()) {
        this.startMotion(this._enemy.motionType());
        this._enemy.clearMotion();
    }
};

Sprite_Enemy.prototype.startMotion = function (motionType) {
    this.startLive2DMotion(this.motionTypeToLive2DMotion(motionType));
};

Sprite_Enemy.prototype.refreshMotion = function () {
    var enemy = this._enemy;
    if (enemy) {
        var stateMotion = enemy.stateMotionIndex();
        if (enemy.isInputting() || enemy.isActing()) {
            this.startMotion('walk');
        } else if (stateMotion === 3) {
            this.startMotion('dead');
        } else if (stateMotion === 2) {
            this.startMotion('sleep');
        } else if (enemy.isChanting()) {
            this.startMotion('chant');
        } else if (enemy.isGuard() || enemy.isGuardWaiting()) {
            this.startMotion('guard');
        } else if (stateMotion === 1) {
            this.startMotion('abnormal');
        } else if (enemy.isDying()) {
            this.startMotion('dying');
        } else if (enemy.isUndecided()) {
            this.startMotion('walk');
        } else {
            this.startMotion('wait');
        }
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Spriteset_Battle
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Spriteset_Battle.prototype.createLive2DLayer = function () {
    Spriteset_Base.prototype.createLive2DLayer.call(this);
    this.createLive2DActors();
    this.createLive2DEnemies();
};

Spriteset_Battle.prototype.createLive2DActors = function () {
    for (var i = 0; i < this._actorSprites.length; i++) {
        var actor = $gameParty.members()[i];
        if (actor && actor.isLive2D()) {
            var setting = actor.live2DModel();
            var key = 'actor' + i;
            $gameScreen.loadLive2DModel(key, setting.name);
            var pending = $gameScreen.live2dPendingMethods[key];
            pending.push('this.viewScale = ' + setting.scale);
            pending.push('this.x = ' + setting.x);
            pending.push('this.y = ' + setting.y);
            pending.push('this.opacity = 0;');
            if (setting.flip) pending.push('this._flip = !this._flip; this.viewScale = this.viewScale');
            pending.push('this.parent.removeChild(this); SceneManager._scene._spriteset._actorSprites[' + i + '].setLive2DModel(this);');
        }
    }
};

Spriteset_Battle.prototype.createLive2DEnemies = function () {
    for (var i = 0; i < this._enemySprites.length; i++) {
        var sprite = this._enemySprites[i];
        var enemy = sprite._battler;
        if (enemy.isLive2D()) {
            var setting = enemy.live2DModel();
            var key = 'enemy' + i;
            $gameScreen.loadLive2DModel(key, setting.name);
            var pending = $gameScreen.live2dPendingMethods[key];
            pending.push('this.viewScale = ' + setting.scale);
            pending.push('this.x = ' + setting.x);
            pending.push('this.y = ' + setting.y);
            pending.push('this.opacity = 0;');
            if (setting.flip) pending.push('this._flip = !this._flip; this.viewScale = this.viewScale');
            pending.push('this.parent.removeChild(this); SceneManager._scene._spriteset._enemySprites[' + i + '].setLive2DModel(this)');
        }
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Sprite_Live2DBattleGauge
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Sprite_Live2DBattleGauge extends Sprite {
    constructor() {
        super(...arguments);
    }

    initialize(setting) {
        super.initialize();
        this._setting = setting;
        this._targetDuration = 0;
        this._targetValue = 0;
        this._value = 0;
        this._maxValue = 0;
        this.x = this.setting().x;
        this.y = this.setting().y;
        this.refreshBitmap();
        this.createFlowSprite();
        this.createFillSprite();
        this.refresh();
    }

    setting() {
        return this._setting;
    }

    rate() {
        return this._maxValue ? this._value / this._maxValue : 0;
    }

    targetRate() {
        return this._maxValue ? this._targetValue / this._maxValue : 0;
    }

    flowDuration() {
        return this.setting().flowDuration;
    }

    refreshBitmap() {
        this.bitmap = ImageManager.loadSystem(this.setting().back);
    }

    createFlowSprite() {
        this._flowSprite = new Sprite();
        this._flowSprite.bitmap = ImageManager.loadSystem(this.setting().flow);
        this._flowSprite.x = this.setting().fillX;
        this._flowSprite.y = this.setting().fillY;
        this.addChild(this._flowSprite);
    }

    createFillSprite() {
        this._fillSprite = new Sprite();
        this._fillSprite.bitmap = ImageManager.loadSystem(this.setting().fill);
        this._fillSprite.x = this.setting().fillX;
        this._fillSprite.y = this.setting().fillY;
        this.addChild(this._fillSprite);
    }

    refresh() {
        if (this._fillSprite.bitmap.isReady()) {
            var rate = this.rate();
            var targetRate = this.targetRate();
            if (this._value < this._targetValue) {
                var w = this._flowSprite.bitmap.width * targetRate;
                var h = this._flowSprite.bitmap.height;
                this._flowSprite.setFrame(0, 0, w, h);
                w = this._fillSprite.bitmap.width * rate;
                h = this._fillSprite.bitmap.height;
                this._fillSprite.setFrame(0, 0, w, h);
            } else {
                var w = this._fillSprite.bitmap.width * targetRate;
                var h = this._fillSprite.bitmap.height;
                this._fillSprite.setFrame(0, 0, w, h);
                w = this._flowSprite.bitmap.width * rate;
                h = this._flowSprite.bitmap.height;
                this._flowSprite.setFrame(0, 0, w, h);
            }
        } else {
            this._needRefresh = true;
        }
    }

    update() {
        super.update();
        if (this._needRefresh && this._fillSprite.bitmap.isReady()) {
            this._needRefresh = false;
            this.refresh();
        }
        this.updateFlow();
    }

    setValue(value) {
        if (this._value !== value && this._targetValue !== value) {
            this._targetValue = value;
            this._targetDuration = this.flowDuration();
            this.refresh();
        }
    }

    setMaxValue(value) {
        if (this._maxValue !== value) {
            this._maxValue = value;
            this.refresh();
        }
    }

    updateFlow() {
        if (this._targetDuration > 0) {
            var d = this._targetDuration;
            this._value = (this._value * (d - 1) + this._targetValue) / d;
            this._targetDuration--;
            this.refresh();
        }
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_BattleActorStatus
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Window_BattleActorStatus extends Window_Base {
    constructor() {
        super(...arguments);
    }

    initialize() {
        super.initialize(this.setting().x, this.setting().y, this.setting().width, this.setting().height);
        this.opacity = this.setting().opacity;
        this.createBackgroundSprite();
        this.createGaugeSprite();
        this.refresh();
    }

    setting() {
        return Dhoom.L2DBattle.playerStatusWindow;
    }

    standardPadding() {
        return this.setting().padding;
    }

    battler() {
        return $gameParty.leader();
    }

    needRefresh() {
        return this._hp !== this.battler().hp || this._name !== this.battler().name() || this._mhp !== this.battler().mhp;
    }

    createBackgroundSprite() {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.x = this.setting().background.x;
        this._backgroundSprite.y = this.setting().background.y;
        this._backgroundSprite.bitmap = ImageManager.loadSystem(this.setting().background.filename);
        this.addChildToBack(this._backgroundSprite);
    }

    createGaugeSprite() {
        this._gaugeSprite = new Sprite_Live2DBattleGauge(this.setting().hpGauge);
        this.addChildAt(this._gaugeSprite, this.children.indexOf(this._windowContentsSprite) - 1);
    }

    refresh() {
        this.contents.clear();
        this._name = this.battler().name();
        this._hp = this.battler().hp;
        this._mhp = this.battler().mhp;
        for (var i = 0; i < this.setting().texts.length; i++) {
            this.drawText(this.setting().texts[i]);
        }
        this._gaugeSprite.setMaxValue(this._mhp);
        this._gaugeSprite.setValue(this._mhp - this._hp);
    }

    drawText(setting) {
        this.contents.changeTextStyle(setting.style);
        var text = setting.text.format(this._name, this._mhp - this._hp, this._mhp);
        this.contents.drawText(text, setting.x, setting.y, setting.width, setting.height, setting.style.align);
    }

    update() {
        super.update();
        if (this.needRefresh()) this.refresh();
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_BattleEnemyStatus
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Window_BattleEnemyStatus extends Window_BattleActorStatus {
    constructor() {
        super(...arguments);
    }

    setting() {
        return Dhoom.L2DBattle.enemyStatusWindow;
    }

    battler() {
        return $gameTroop.members()[0];
    }

    needRefresh() {
        return super.needRefresh() || this._level !== this.battler().live2DLevel();
    }

    refresh() {
        this.contents.clear();
        this._name = this.battler().name();
        this._hp = this.battler().hp;
        this._mhp = this.battler().mhp;
        this._level = this.battler().live2DLevel();
        for (var i = 0; i < this.setting().texts.length; i++) {
            this.drawText(this.setting().texts[i]);
        }
        this._gaugeSprite.setMaxValue(this._mhp);
        this._gaugeSprite.setValue(this._hp);
    }

    drawText(setting) {
        this.contents.changeTextStyle(setting.style);
        var text = setting.text.format(this._name, this._hp, this._mhp, this._level);
        this.contents.drawText(text, setting.x, setting.y, setting.width, setting.height, setting.style.align);
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_BattleLog
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DBattle.Window_BattleLog_initialize = Window_BattleLog.prototype.initialize;
Window_BattleLog.prototype.initialize = function () {
    Dhoom.L2DBattle.Window_BattleLog_initialize.call(this);
    this.x = this.setting().x;
    this.y = this.setting().y;
};

Window_BattleLog.prototype.setting = function () {
    return Dhoom.L2DBattle.battleLogWindow;
};

Window_BattleLog.prototype.maxLines = function () {
    return this.setting().maxLines;
};

Dhoom.L2DBattle.Window_BattleLog_addText = Window_BattleLog.prototype.addText;
Window_BattleLog.prototype.addText = function (text) {
    this._lines.push(text);
    while (this._lines.length > this.maxLines()) {
        this._lines.shift();
    }
    this.refresh();
    this.wait();
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_Live2DActorCommand
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Window_Live2DActorCommand extends Window_ActorCommand {
    constructor() {
        super(...arguments);
    }

    initialize() {
        super.initialize();
        this.x = this.setting().x;
        this.y = this.setting().y;
        this.opacity = this.setting().opacity;
        this.createBackgroundSprite();
    }

    setting() {
        return Dhoom.L2DBattle.commandWindow;
    }

    windowWidth() {
        return this.setting().width;
    }

    windowHeight() {
        return this.setting().height;
    }

    lineHeight() {
        return this.setting().lineHeight;
    }

    spacing() {
        return this.setting().spacing;
    }

    standardPadding() {
        return this.setting().padding;
    }

    itemHeight() {
        return super.itemHeight() + this.spacing();
    }

    itemRect(index) {
        var rect = super.itemRect(index);
        rect.height -= this.spacing();
        return rect;
    }

    createBackgroundSprite() {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.x = this.setting().background.x;
        this._backgroundSprite.y = this.setting().background.y;
        this._backgroundSprite.bitmap = ImageManager.loadSystem(this.setting().background.filename);
        this.addChildToBack(this._backgroundSprite);
    }

    makeCommandList() {
        if (this._actor) {
            this.addAttackCommand();
            this.addSkillCommands();
            this.addItemCommand();
            this.addCommand(TextManager.escape, 'escape', BattleManager.canEscape());
        }
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_BattleSkillL2D
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Window_BattleSkillL2D extends Window_BattleSkill {
    constructor() {
        super(...arguments);
    }

    initialize() {
        super.initialize(this.setting().x, this.setting().y, this.setting().width, this.setting().height);
        this.opacity = this.setting().opacity;
        this.createBackgroundSprite();
    }

    setting() {
        return Dhoom.L2DBattle.skillWindow;
    }

    lineHeight() {
        return this.setting().lineHeight;
    }

    spacing() {
        return this.setting().spacing;
    }

    vspacing() {
        return this.setting().vspacing;
    }

    standardPadding() {
        return this.setting().padding;
    }

    maxCols() {
        return this.setting().column;
    }

    itemHeight() {
        return super.itemHeight() + this.vspacing();
    }

    itemRect(index) {
        var rect = super.itemRect(index);
        rect.height -= this.vspacing();
        return rect;
    }

    createBackgroundSprite() {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.x = this.setting().background.x;
        this._backgroundSprite.y = this.setting().background.y;
        this._backgroundSprite.bitmap = ImageManager.loadSystem(this.setting().background.filename);
        this.addChildToBack(this._backgroundSprite);
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_BattleSkillL2D
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Window_BattleItemL2D extends Window_BattleItem {
    constructor() {
        super(...arguments);
    }

    initialize() {
        super.initialize(this.setting().x, this.setting().y, this.setting().width, this.setting().height);
        this.opacity = this.setting().opacity;
        this.createBackgroundSprite();
    }

    setting() {
        return Dhoom.L2DBattle.itemWindow;
    }

    lineHeight() {
        return this.setting().lineHeight;
    }

    spacing() {
        return this.setting().spacing;
    }

    vspacing() {
        return this.setting().vspacing;
    }

    standardPadding() {
        return this.setting().padding;
    }

    maxCols() {
        return this.setting().column;
    }

    itemHeight() {
        return super.itemHeight() + this.vspacing();
    }

    itemRect(index) {
        var rect = super.itemRect(index);
        rect.height -= this.vspacing();
        return rect;
    }

    createBackgroundSprite() {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.x = this.setting().background.x;
        this._backgroundSprite.y = this.setting().background.y;
        this._backgroundSprite.bitmap = ImageManager.loadSystem(this.setting().background.filename);
        this.addChildToBack(this._backgroundSprite);
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_BattleHelpL2D
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Window_BattleHelpL2D extends Window_Help {
    constructor() {
        super(...arguments);
    }

    initialize() {
        super.initialize(2);
        this.move(this.setting().x, this.setting().y, this.setting().width, this.setting().height);
        this.createContents();
        this.opacity = this.setting().opacity;
        this.createBackgroundSprite();
    }

    setting() {
        return Dhoom.L2DBattle.helpWindow;
    }

    lineHeight() {
        return this.setting().lineHeight;
    }

    standardPadding() {
        return this.setting().padding;
    }

    createBackgroundSprite() {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.x = this.setting().background.x;
        this._backgroundSprite.y = this.setting().background.y;
        this._backgroundSprite.bitmap = ImageManager.loadSystem(this.setting().background.filename);
        this.addChildToBack(this._backgroundSprite);
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_BattleConfirmHelpL2D
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Window_BattleConfirmHelpL2D extends Window_BattleHelpL2D {
    constructor() {
        super(...arguments);
    }

    initialize() {
        super.initialize();
        this.setText(this.setting().text);
    }

    setting() {
        return Dhoom.L2DBattle.confirmationHelpWindow;
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_BattleConfirmL2D
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Window_BattleConfirmL2D extends Window_Command {
    constructor() {
        super(...arguments);
    }

    initialize() {
        super.initialize(this.setting().x, this.setting().y);
        this.opacity = this.setting().opacity;
        this.createBackgroundSprite();
    }

    setting() {
        return Dhoom.L2DBattle.confirmationWindow;
    }

    windowWidth() {
        return this.setting().width;
    }

    windowHeight() {
        return this.setting().height;
    }

    lineHeight() {
        return this.setting().lineHeight;
    }

    spacing() {
        return this.setting().spacing;
    }

    standardPadding() {
        return this.setting().padding;
    }

    itemHeight() {
        return super.itemHeight() + this.spacing();
    }

    itemRect(index) {
        var rect = super.itemRect(index);
        rect.height -= this.spacing();
        return rect;
    }

    createBackgroundSprite() {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.x = this.setting().background.x;
        this._backgroundSprite.y = this.setting().background.y;
        this._backgroundSprite.bitmap = ImageManager.loadSystem(this.setting().background.filename);
        this.addChildToBack(this._backgroundSprite);
    }

    makeCommandList() {
        this.addCommand(this.setting().confirm, 'ok');
        this.addCommand(this.setting().cancel, 'cancel');
    }

    refresh() {
        super.refresh();
        this.select(1);
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_Battle
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DBattle.Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function () {
    Dhoom.L2DBattle.Scene_Battle_createAllWindows.call(this);
    this.createConfirmationWindows();
};

Dhoom.L2DBattle.Scene_Battle_createStatusWindow = Scene_Battle.prototype.createStatusWindow;
Scene_Battle.prototype.createStatusWindow = function () {
    Dhoom.L2DBattle.Scene_Battle_createStatusWindow.call(this);
    this._statusWindow.hide();
    this._actorStatusWindow = new Window_BattleActorStatus();
    this.addWindow(this._actorStatusWindow);
    this._enemyStatusWindow = new Window_BattleEnemyStatus();
    this.addWindow(this._enemyStatusWindow);
};

Scene_Battle.prototype.createHelpWindow = function () {
    this._helpWindow = new Window_BattleHelpL2D();
    this._helpWindow.visible = false;
    this.addWindow(this._helpWindow);
};

Scene_Battle.prototype.createActorCommandWindow = function () {
    this._actorCommandWindow = new Window_Live2DActorCommand();
    this._actorCommandWindow.setHandler('attack', this.commandAttack.bind(this));
    this._actorCommandWindow.setHandler('skill', this.commandSkill.bind(this));
    this._actorCommandWindow.setHandler('item', this.commandItem.bind(this));
    this._actorCommandWindow.setHandler('escape', this.commandEscapeConfirmation.bind(this));
    this.addWindow(this._actorCommandWindow);
};

Scene_Battle.prototype.createSkillWindow = function () {
    this._skillWindow = new Window_BattleSkillL2D();
    this._skillWindow.setHelpWindow(this._helpWindow);
    this._skillWindow.setHandler('ok', this.onSkillOk.bind(this));
    this._skillWindow.setHandler('cancel', this.onSkillCancel.bind(this));
    this.addWindow(this._skillWindow);
};

Scene_Battle.prototype.createItemWindow = function () {
    this._itemWindow = new Window_BattleItemL2D();
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
};

Scene_Battle.prototype.createConfirmationWindows = function () {
    this._escapeConfirmWindow = new Window_BattleConfirmL2D();
    this._escapeConfirmWindow.setHandler('ok', this.onConfirmOk.bind(this));
    this._escapeConfirmWindow.setHandler('cancel', this.onConfirmCancel.bind(this));
    this._escapeConfirmWindow.hide();
    this._escapeConfirmWindow.deactivate();
    this.addWindow(this._escapeConfirmWindow);
    this._escapeHelpWindow = new Window_BattleConfirmHelpL2D();
    this._escapeHelpWindow.hide();
    this.addWindow(this._escapeHelpWindow);
};

Scene_Battle.prototype.startPartyCommandSelection = function () {
    this.refreshStatus();
    this._partyCommandWindow.close();
    this.selectNextCommand();
};

Scene_Battle.prototype.selectEnemySelection = function () {
    this._enemyWindow.refresh();
    this._enemyWindow.select(0);
    this.onEnemyOk();
};

Scene_Battle.prototype.selectActorSelection = function () {
    this._actorWindow.refresh();
    this._actorWindow.select(0);
    this.onActorOk();
};

Scene_Battle.prototype.commandEscapeConfirmation = function () {
    this._escapeConfirmWindow.show();
    this._escapeConfirmWindow.activate();
    this._escapeConfirmWindow.refresh();
    this._escapeHelpWindow.show();
};

Scene_Battle.prototype.onConfirmOk = function () {
    if (this._escapeConfirmWindow.index() === 0) {
        this.commandEscape();
        this._escapeConfirmWindow.hide();
        this._escapeHelpWindow.hide();
    } else {
        this.onConfirmCancel();
    }
};

Scene_Battle.prototype.onConfirmCancel = function () {
    this._escapeConfirmWindow.hide();
    this._escapeHelpWindow.hide();
    this._actorCommandWindow.activate();
};

Dhoom.L2DBattle.Scene_Battle_isAnyInputWindowActive = Scene_Battle.prototype.isAnyInputWindowActive;
Scene_Battle.prototype.isAnyInputWindowActive = function () {
    return (Dhoom.L2DBattle.Scene_Battle_isAnyInputWindowActive.call(this) ||
        this._escapeConfirmWindow.active);
};