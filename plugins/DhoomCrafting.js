//=============================================================================
// DhoomCrafting.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_Crafting = "1.1";

var Dhoom = Dhoom || {};
Dhoom.Crafting = Dhoom.Crafting || {};
/*:
 * @plugindesc Dhoom Crafting v1.1 - 01/06/2021
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param General
 * 
 * @param Max Crafting
 * @desc Max amount of item that the player can craft at a time.
 * @type number
 * @min 1
 * @default 3
 * @parent General
 * 
 * @param Max Item
 * @desc Max number of item materials for recipes.
 * @type number
 * @default 2
 * @parent General
 * 
 * @param Item Category ID
 * @desc Item category ID
 * @type number
 * @default 2
 * @parent General
 * 
 * @param Allow No Recipe Combination
 * @desc When set to true, items can be combined even though there is no recipe for it.
 * @type boolean
 * @default true
 * @parent General
 * 
 * @param Remember Result
 * @desc Remember result of item combinations.
 * @type boolean
 * @default true
 * @parent General
 * 
 * @param Give Back Failed Combination
 * @type boolean
 * @default true
 * @parent General
 * 
 * @param Default Crafting Duration
 * @desc In seconds. Min ~ Max
 * @default 3600 ~ 4800
 * @parent General
 * 
 * @param Crafting Recipes
 * @type struct<craftingRecipe>[]
 * @default ["{\"name\":\"Extended Dildo\",\"materials\":\"[\\\"151\\\",\\\"151\\\"]\",\"result\":\"171\",\"duration\":\"0\",\"condition\":\"\"}","{\"name\":\"Dildo Gag\",\"materials\":\"[\\\"166\\\",\\\"155\\\"]\",\"result\":\"172\",\"duration\":\"0\",\"condition\":\"\"}","{\"name\":\"Electric Whip\",\"materials\":\"[\\\"152\\\",\\\"155\\\"]\",\"result\":\"173\",\"duration\":\"0\",\"condition\":\"\"}"]
 * @parent General
 * 
 * @param GUI
 * 
 * @param Command Window Setting
 * @type struct<commandWindowSetting>
 * @default {"x":"0","y":"180","width":"300","height":"132","opacity":"255","padding":"12","style":"{\"name\":\"\",\"size\":\"28\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"left\"}","commands":"[\"{\\\"name\\\":\\\"Craft\\\",\\\"symbol\\\":\\\"craft\\\"}\",\"{\\\"name\\\":\\\"List\\\",\\\"symbol\\\":\\\"list\\\"}\",\"{\\\"name\\\":\\\"Cancel\\\",\\\"symbol\\\":\\\"cancel\\\"}\"]"}
 * @parent GUI
 * 
 * @param Info Window Setting
 * @type struct<infoWindowSetting>
 * @default {"x":"300","y":"180","width":"996","height":"132","opacity":"255","padding":"12","text":"Craft result: %1","materials":"{\"x\":\"0\",\"y\":\"0\",\"width\":\"972\",\"height\":\"54\",\"separator\":\"+\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"28\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}","result":"{\"x\":\"0\",\"y\":\"54\",\"width\":\"972\",\"height\":\"54\",\"hidden\":\"\\\\I[16]?????\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"28\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}"}
 * @parent GUI
 * 
 * @param Crafting Window Setting
 * @type struct<craftingWindowSetting>
 * @default {"x":"0","y":"312","width":"1296","height":"456","opacity":"255","padding":"12","text":"Craft result: %1","style":"{\"name\":\"\",\"size\":\"28\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"right\"}","showGauge":"true","gaugeColor1":"5","gaugeColor2":"6","percentage":"%1%","showTime":"true","time":"Time Remaining: %1:%2:%3"}
 * @parent GUI
 * 
 * @param Confirm Window Setting
 * @type struct<confirmWindowSetting>
 * @default {"x":"0","y":"180","width":"300","height":"132","opacity":"255","padding":"12","style":"{\"name\":\"\",\"size\":\"28\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"left\"}","text":"Proceed?","commands":"[\"Confirm\", \"Cancel\"]"}
 * @parent GUI
 * 
 * @param List Command Window Setting
 * @type struct<listCommandWindowSetting>
 * @default {"x":"0","y":"180","width":"300","height":"132","opacity":"255","padding":"12","style":"{\"name\":\"\",\"size\":\"28\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"left\"}","commands":"[\"{\\\"name\\\":\\\"Retrieve\\\",\\\"symbol\\\":\\\"retrieve\\\"}\",\"{\\\"name\\\":\\\"Abort\\\",\\\"symbol\\\":\\\"abort\\\"}\",\"{\\\"name\\\":\\\"Cancel\\\",\\\"symbol\\\":\\\"cancel\\\"}\"]"}
 * @parent GUI
 * 
 * @param Success Message
 * @desc <material1>, <material2>, ... , <result>
 * @type note
 * @default "<material1>+<material2>=<result>\nCRAFTING SUCCESS!"
 * @parent GUI
 * 
 * @param Failed Message
 * @desc <material1>, <material2>, ...
 * @type note
 * @default "<material1>+<material2>\nCRAFTING FAILED!"
 * @parent GUI
 * 
 * @param Sound
 * 
 * @param Success SE
 * @type struct<seSetting>
 * @default {"name":"[P] item","volume":"90","pitch":"100","pan":"0"}
 * @parent Sound
 * 
 * @param Failed SE
 * @type struct<seSetting>
 * @default {"name":"[P] back 2","volume":"90","pitch":"100","pan":"0"}
 * @parent Sound
 *
 * @help 
(c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
*/

/*~struct~seSetting:
@param name
@text Filename
@type file
@dir audio/se/

@param volume
@text Volume
@type number
@min 0
@max 100
@default 90

@param pitch
@text Pitch
@type number
@min 50
@max 150
@default 100

@param pan
@text Pan
@type number
@min -100
@max 100
@default 0
*/

/*~struct~listCommandWindowSetting:
@param x
@text X
@desc X position
@default 0
@type number
@min -99999

@param y
@text Y
@desc Y position
@default 0
@type number
@min -99999

@param width
@text Window Width
@desc Window width
@default 1296
@type number
@min 32

@param height
@text Window Height
@desc Window height
@default 768
@type number
@min 32

@param opacity
@text Window Opacity
@desc Window opacity
@default 0
@type number
@max 255

@param padding
@text Window Padding
@desc Window padding
@default 12
@type number

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param commands
@text Commands
@type struct<listCommandSetting>[]
@default 
*/

/*~struct~listCommandSetting:
@param name
@text Command Name

@param symbol
@text Command Symbol
@desc retrieve, abort, cancel
*/

/*~struct~confirmWindowSetting:
@param x
@text X
@desc X position
@default 0
@type number
@min -99999

@param y
@text Y
@desc Y position
@default 0
@type number
@min -99999

@param width
@text Window Width
@desc Window width
@default 1296
@type number
@min 32

@param height
@text Window Height
@desc Window height
@default 768
@type number
@min 32

@param opacity
@text Window Opacity
@desc Window opacity
@default 0
@type number
@max 255

@param padding
@text Window Padding
@desc Window padding
@default 12
@type number

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param text
@text Text
@desc Help text.
@default Proceed?

@param commands
@text Commands
@desc ["Confirm Text", "Cancel Text"]
@default ["Confirm", "Cancel"]
*/

/*~struct~craftingWindowSetting:
@param x
@text X
@desc X position
@default 0
@type number
@min -99999

@param y
@text Y
@desc Y position
@default 0
@type number
@min -99999

@param width
@text Window Width
@desc Window width
@default 1296
@type number
@min 32

@param height
@text Window Height
@desc Window height
@default 768
@type number
@min 32

@param opacity
@text Window Opacity
@desc Window opacity
@default 0
@type number
@max 255

@param padding
@text Window Padding
@desc Window padding
@default 12
@type number

@param text
@text Text Format
@desc %1 = Item icon and name.
@default Craft result: %1

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param showGauge
@text Show Percentage Gauge
@type boolean
@default true

@param gaugeColor1
@text Gauge Color 1
@type number
@min 0
@max 31
@default 1

@param gaugeColor2
@text Gauge Color 2
@type number
@min 0
@max 31
@default 2

@param percentage
@text Percentage Text Format
@desc %1 = percentage
@default %1%

@param showTime
@text Show Remaining Time
@type boolean
@default true

@param time
@text Remaining Time Format
@desc %1 = Hours, %2 = Minutes, %3 = Seconds.
@default Time Remaining: %1:%2:%3

@param completed
@text Completed Text
@default Completed
*/

/*~struct~infoWindowSetting:
@param x
@text X
@desc X position
@default 0
@type number
@min -99999

@param y
@text Y
@desc Y position
@default 0
@type number
@min -99999

@param width
@text Window Width
@desc Window width
@default 1296
@type number
@min 32

@param height
@text Window Height
@desc Window height
@default 768
@type number
@min 32

@param opacity
@text Window Opacity
@desc Window opacity
@default 0
@type number
@max 255

@param padding
@text Window Padding
@desc Window padding
@default 12
@type number

@param text
@text Text Format
@desc %1 = Item icon and name.
@default Craft result: %1

@param materials
@text Materials Text Setting
@type struct<materialSetting>
@default

@param result
@text Result Text Setting
@type struct<resultSetting>
@default
*/

/*~struct~resultSetting:
@param x
@text X
@desc X position
@default 0
@type number
@min -99999

@param y
@text Y
@desc Y position
@default 0
@type number
@min -99999

@param width
@text Width
@default 32
@type number
@min 1

@param height
@text Height
@default 32
@type number
@min 1

@param hidden
@text Hidden Text
@default \\I[0]?????

@param style
@text Text Style
@type struct<FontStyle>
@default 
*/

/*~struct~materialSetting:
@param x
@text X
@desc X position
@default 0
@type number
@min -99999

@param y
@text Y
@desc Y position
@default 0
@type number
@min -99999

@param width
@text Width
@default 32
@type number
@min 1

@param height
@text Height
@default 32
@type number
@min 1

@param separator
@text Separator
@default +

@param style
@text Text Style
@type struct<FontStyle>
@default 
*/

/*~struct~rect:
@param x
@text X
@desc X position
@default 0
@type number
@min -99999

@param y
@text Y
@desc Y position
@default 0
@type number
@min -99999

@param width
@text Width
@default 32
@type number
@min 1

@param height
@text Height
@default 32
@type number
@min 1
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

@param bold
@text Font Bold
@desc Font bold
@default false
@type boolean

@param italic
@text Font Italic
@desc Font italic
@default false
@type boolean

@param align
@text Text Alignment
@desc Text alignment
@default center
@type select
@option left
@option center
@option right
*/

/*~struct~commandWindowSetting:
@param x
@text X
@desc X position
@default 0
@type number
@min -99999

@param y
@text Y
@desc Y position
@default 0
@type number
@min -99999

@param width
@text Window Width
@desc Window width
@default 1296
@type number
@min 32

@param height
@text Window Height
@desc Window height
@default 768
@type number
@min 32

@param opacity
@text Window Opacity
@desc Window opacity
@default 0
@type number
@max 255

@param padding
@text Window Padding
@desc Window padding
@default 12
@type number

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param commands
@text Commands
@type struct<commandSetting>[]
@default []
*/

/*~struct~commandSetting:
@param name
@text Command Name

@param symbol
@text Command Symbol
@desc craft, list, cancel
*/

/*~struct~craftingRecipe:
@param name
@text Name
@desc Not used. Only for easily distinguishable recipe. 

@param materials
@text Materials
@type item[]
@default []

@param result
@text Result
@type item
@default

@param duration
@text Craft Duration
@desc Leave empty to use the default duration. Duration in seconds. Min ~ Max
@type number
@min 0
@default 0

@param condition
@text Condition
@desc Recipe condition script. s = switches, v = variables. Empty = always true.
@default
*/

Dhoom.Parameters = $plugins.filter(function (obj) { return obj.description.match(/Dhoom Crafting/) })[0].parameters;
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

Dhoom.Crafting.loadParameters = function () {
    for (var name in Dhoom.Parameters) {
        var sym = name.replace(/\s+/g, "");
        sym = sym[0].toLowerCase() + sym.slice(1);
        Dhoom.Crafting[sym] = Dhoom.loadParam(name);
    }
};

Dhoom.Crafting.loadParameters();

Dhoom.Crafting.itemToText = function (item) {
    return "\\I[" + item.iconIndex + "]" + item.name;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Bitmap
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
if (typeof Bitmap.prototype.changeTextStyle === undefined) {
    Dhoom.Crafting.Bitmap_initialize = Bitmap.prototype.initialize;
    Bitmap.prototype.initialize = function (width, height) {
        Dhoom.Crafting.Bitmap_initialize.call(this, width, height);
        this.fontBold = false;
    };

    Dhoom.Crafting.Bitmap_makeFontNameText = Bitmap.prototype._makeFontNameText;
    Bitmap.prototype._makeFontNameText = function () {
        if (this.fontBold) return 'Bold ' + this.fontSize + 'px ' + this.fontFace;
        return Dhoom.Crafting.Bitmap_makeFontNameText.call(this);
    };

    Bitmap.prototype.changeTextStyle = function (style) {
        this.fontFace = style.name.length > 0 ? style.name : 'GameFont';
        this.fontSize = style.size;
        this.textColor = style.color;
        this.outlineWidth = style.outlineWidth;
        this.outlineColor = style.outlineColor;
        this.fontBold = style.bold;
        this.fontItalic = style.italic;
        this.fontShadowBlur = style.shadowBlur;
        this.fontShadowColor = style.shadowColor;
    };

    Dhoom.Crafting.Bitmap_drawTextOutline = Bitmap.prototype._drawTextOutline;
    Bitmap.prototype._drawTextOutline = function (text, tx, ty, maxWidth) {
        if (this.outlineWidth === 0) return;
        if (this.fontShadowBlur) {
            var context = this._context;
            context.shadowBlur = this.fontShadowBlur;
            context.shadowColor = this.fontShadowColor;
        }
        Dhoom.Crafting.Bitmap_drawTextOutline.call(this, text, tx, ty, maxWidth);
    };

    Dhoom.Crafting.Bitmap_drawTextBody = Bitmap.prototype._drawTextBody;
    Bitmap.prototype._drawTextBody = function (text, tx, ty, maxWidth) {
        if (this.outlineWidth === 0 && this.fontShadowBlur) {
            var context = this._context;
            context.shadowBlur = this.fontShadowBlur;
            context.shadowColor = this.fontShadowColor;
        }
        Dhoom.Crafting.Bitmap_drawTextBody.call(this, text, tx, ty, maxWidth);
    };
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Party
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.Crafting.Game_Party_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function () {
    Dhoom.Crafting.Game_Party_initialize.call(this);
    this.initDhoomCrafting();
};

Game_Party.prototype.initDhoomCrafting = function () {
    this._craftedItems = {};
    this._craftingItems = [];
    this._tempCraftingSecond = 0;
    this._maxCrafting = Dhoom.Crafting.maxCrafting;
};

Game_Party.prototype.revealAllCraftingItems = function () {
    var recipes = Dhoom.Crafting.craftingRecipes;
    for (var i = 0; i < recipes.length; i++) {
        this.revealCraftingRecipe(i);
    }
};

Game_Party.prototype.revealCraftingRecipe = function (index) {
    var recipe = Dhoom.Crafting.craftingRecipes[index];
    if (recipe) {
        var id = this.craftingMaterialToId(recipe.materials);
        this._craftedItems[id] = recipe.result;
    }
};

Game_Party.prototype.craftingMaterialToId = function (materials) {
    if (typeof materials[0] !== "number") {
        materials = materials.map(function (item) { return item.id; });
    }
    return materials.clone().sort().reduce(function (p, c) { return p + ":" + c });
};

Game_Party.prototype.craftingResult = function (materials) {
    var id = this.craftingMaterialToId(materials);
    var result = this._craftedItems[id];
    if (!result) {
        var recipes = Dhoom.Crafting.craftingRecipes;
        for (var i = 0; i < recipes.length; i++) {
            if (this.craftingMaterialToId(recipes[i].materials) === id) {
                if (recipes[i].condition) {
                    var s = $gameSwitches._data;
                    var v = $gameVariables._data;
                    try {
                        if (!eval(recipes[i].condition)) continue;
                    } catch (e) {
                        console.warn("Recipe Condition Error!: " + recipes[i]);
                        console.log(e);
                    }
                }
                result = recipes[i].result;
                break;
            }
        }
    }
    return result ? $dataItems[result] : null;
};

Game_Party.prototype.hasCrafted = function (materials) {
    return !!this._craftedItems[this.craftingMaterialToId(materials)];
};

Game_Party.prototype.registerCraftedItem = function (materials, result) {
    this._craftedItems[this.craftingMaterialToId(materials)] = result.id;
};

Game_Party.prototype.addCraftingQueue = function (materials) {
    var recipe;
    var id = this.craftingMaterialToId(materials);
    var recipes = Dhoom.Crafting.craftingRecipes;
    for (var i = 0; i < recipes.length; i++) {
        if (this.craftingMaterialToId(recipes[i].materials) === id) {
            recipe = recipes[i];
            break;
        }
    }
    var craft = {};
    craft.materials = materials;
    if (recipe && recipe.duration) {
        var durations = recipe.duration.replace(/\s+/g, "").split("~").map(function (t) { return Number(t) });
    } else {
        var durations = Dhoom.Crafting.defaultCraftingDuration.replace(/\s+/g, "").split("~").map(function (t) { return Number(t) });
    }
    craft.duration = Math.randomInt(durations[1] - durations[0]) + durations[0];
    craft.initDuration = craft.duration;
    craft.percentage = 0;
    this._craftingItems.push(craft);
};

Game_Party.prototype.updateCraftingDuration = function () {
    if ($gameTime && !$gameTime.pauseTime && !$gameTime.noTimeMap()) {
        var time = (($gameTime.getTime('day') * 24 + $gameTime.getTime('hour')) * 60 + $gameTime.getTime('minute')) * 60 + $gameTime.getTime('second');
        if (this._tempCraftingSecond !== time) {
            var value = Math.min(Math.max(time - this._tempCraftingSecond, 0), 60 * 60 * 24 * 7);
            this._tempCraftingSecond = time;
            if (value && this._craftingItems && this._craftingItems.length) {
                for (var i = 0; i < this._craftingItems.length; i++) {
                    this._craftingItems[i].duration = Math.min(Math.max(this._craftingItems[i].duration - value, 0), this._craftingItems[i].initDuration);
                    var temp = this._craftingItems[i].percentage;
                    this._craftingItems[i].percentage = Math.floor((1 - (this._craftingItems[i].duration / this._craftingItems[i].initDuration)) * 100);
                    if (temp !== this._craftingItems[i].percentage) $gameTemp._refreshCraftingList = true;
                }
            }
        }
    }
};

Game_Party.prototype.sortCraftingItems = function () {
    this._craftingItems.sort(function (a, b) { return a.duration - b.duration; });
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Message
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.Crafting.Game_Message_isBusy = Game_Message.prototype.isBusy;
Game_Message.prototype.isBusy = function () {
    return Dhoom.Crafting.Game_Message_isBusy.call(this) || !!$gameTemp._dhoomCrafting;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Interpreter
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.Crafting.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    Dhoom.Crafting.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command.toLowerCase() === 'crafting') {
        switch (args[0].toLowerCase()) {
            case 'open':
                if (SceneManager._scene instanceof Scene_Map) {
                    SceneManager._scene.openCraftingWindows();
                    this.setWaitMode('message');
                }
                break;
            case 'reveal':
                if (args[1].toLowerCase() === "all") {
                    $gameParty.revealAllCraftingItems();
                } else {
                    $gameParty.revealCraftingRecipe(Number(args[1]));
                }
                break;
            case 'max':
                $gameParty._maxCrafting = Number(args[1]);
                break
        }
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_CraftingConfirm
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Window_CraftingConfirm extends Window_Command {
    constructor() {
        super(...arguments);
    }

    initialize() {
        super.initialize(this.setting().x, this.setting().y);
        this.opacity = this.setting().opacity;
        this.openness = 0;
        this.active = false;
    }

    setting() {
        return Dhoom.Crafting.confirmWindowSetting;
    }

    windowWidth() {
        return this.setting().width;
    }

    windowHeight() {
        return this.setting().height;
    }

    standardPadding() {
        return this.setting().padding;
    }

    itemRect(index) {
        var rect = super.itemRect(index);
        rect.y += this.lineHeight();
        return rect;
    }

    makeCommandList() {
        var enabled = $gameParty._craftingItems.length < $gameParty._maxCrafting;
        if (enabled) enabled = Dhoom.Crafting.allowNoRecipeCombination ||
            ($gameTemp._dhoomCrafting && SceneManager._scene instanceof Scene_Map && !!$gameParty.craftingResult(SceneManager._scene._craftingMaterials));
        this.addCommand(this.setting().commands[0], 'ok', enabled);
        this.addCommand(this.setting().commands[1], 'cancel');
    }

    refresh() {
        super.refresh();
        this.drawHelpText();
    }

    drawHelpText() {
        this.resetTextColor();
        this.contents.drawText(this.setting().text, 0, 0, this.contents.width, this.lineHeight());
    }

    resetTextColor() {
        super.resetTextColor();
        this.contents.changeTextStyle(this.setting().style);
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_CraftingListCommand
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Window_CraftingListCommand extends Window_Command {
    constructor() {
        super(...arguments);
    }

    initialize() {
        super.initialize(this.setting().x, this.setting().y);
        this.opacity = this.setting().opacity;
        this.openness = 0;
        this.active = false;
        this._craftIndex = -1;
    }

    setting() {
        return Dhoom.Crafting.listCommandWindowSetting;
    }

    windowWidth() {
        return this.setting().width;
    }

    windowHeight() {
        return this.setting().height;
    }

    standardPadding() {
        return this.setting().padding;
    }

    setCraftIndex(index) {
        this._craftIndex = index;
        this.refresh();
    };

    makeCommandList() {
        var commands = this.setting().commands;
        for (var i = 0; i < commands.length; i++) {
            var enabled = true;
            if (commands[i].symbol === "retrieve") enabled = this._craftIndex >= 0 && $gameParty._craftingItems[this._craftIndex] && $gameParty._craftingItems[this._craftIndex].percentage === 100;
            this.addCommand(commands[i].name, commands[i].symbol, enabled);
        }
    }

    resetTextColor() {
        super.resetTextColor();
        this.contents.changeTextStyle(this.setting().style);
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_CraftingCommand
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Window_CraftingCommand extends Window_Command {
    constructor() {
        super(...arguments);
    }

    initialize() {
        super.initialize(this.setting().x, this.setting().y);
        this.opacity = this.setting().opacity;
        this.openness = 0;
        this.active = false;
    }

    setting() {
        return Dhoom.Crafting.commandWindowSetting;
    }

    windowWidth() {
        return this.setting().width;
    }

    windowHeight() {
        return this.setting().height;
    }

    standardPadding() {
        return this.setting().padding;
    }

    makeCommandList() {
        var commands = this.setting().commands;
        for (var i = 0; i < commands.length; i++) {
            var enabled = true;
            if (commands[i].symbol === "list") enabled = $gameParty._craftingItems.length;
            this.addCommand(commands[i].name, commands[i].symbol, enabled);
        }
    }

    resetTextColor() {
        super.resetTextColor();
        this.contents.changeTextStyle(this.setting().style);
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_CraftingList
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Window_CraftingList extends Window_Selectable {
    constructor() {
        super(...arguments);
    }

    initialize() {
        super.initialize(this.setting().x, this.setting().y, this.setting().width, this.setting().height);
        this.opacity = this.setting().opacity;
        this.openness = 0;
        this.refresh();
    }

    setting() {
        return Dhoom.Crafting.craftingWindowSetting;
    }

    standardPadding() {
        return this.setting().padding;
    }

    maxItems() {
        return this._data ? this._data.length : 1;
    }

    item() {
        return this._data ? this._data[this.index()] : null;
    }

    isCurrentItemEnabled() {
        return this.isEnabled(this.item());
    }

    isEnabled(item) {
        return !!item;
    }

    maxPageRows() {
        return super.maxPageRows() - 1;
    }

    itemRect(index) {
        var rect = super.itemRect(index);
        rect.y += rect.height;
        return rect;
    }

    refresh() {
        this.makeItemList();
        this.createContents();
        this.drawAllItems();
        this.drawSlotAmount();
    }

    makeItemList() {
        if ($gameParty._craftingItems) {
            $gameParty.sortCraftingItems();
            this._data = $gameParty._craftingItems.clone();
        } else {
            this._data = [];
        }
    }

    update() {
        super.update();
        this.updateData();
    }

    updateData() {
        if ((this.isOpen() && this.visible && $gameTemp._refreshCraftingList) || ($gameParty._craftingItems && !this._data.equals($gameParty._craftingItems))) {
            $gameTemp._refreshCraftingList = false;
            this.refresh();
        }
    }

    drawItem(index) {
        this.drawItemNames(index);
        this.drawProgress(index);
    }

    drawItemNames(index) {
        var rect = this.itemRect(index);
        var text = "";
        var data = this._data[index];
        for (var i = 0; i < data.materials.length; i++) {
            text += Dhoom.Crafting.itemToText(data.materials[i]);
            if (i < data.materials.length - 1) text += " " + Dhoom.Crafting.infoWindowSetting.materials.separator + " ";
        }
        text += " = ";
        if ($gameParty.hasCrafted(data.materials)) {
            var item = $gameParty.craftingResult(data.materials);
            text += Dhoom.Crafting.itemToText(item);
        } else {
            text += Dhoom.Crafting.infoWindowSetting.result.hidden;
        }
        this.drawTextEx(text, rect.x, rect.y);
    }

    drawProgress(index) {
        var rect = this.itemRect(index);
        rect.width = Math.round(rect.width / 2);
        rect.x += rect.width;
        var rate = this._data[index].percentage / 100;
        if (this.setting().showGauge) {
            var x = rect.x + 40;
            var width = rect.width / 2 - 80;
            this.contents.fillRect(x, rect.y + 4, width, rect.height - 8, this.gaugeBackColor());
            this.contents.gradientFillRect(x, rect.y + 4, Math.floor(width * rate), rect.height - 8, this.textColor(this.setting().gaugeColor1), this.textColor(this.setting().gaugeColor2));
            this.drawText(this.setting().percentage.format(this._data[index].percentage), x, rect.y, width, 'center');
        }
        rect.width = Math.round(rect.width / 2);
        rect.x += rect.width;
        if (this.setting().showTime) {
            if (rate === 1) {
                var text = this.setting().completed || "Completed";
            } else {
                var duration = this._data[index].duration;
                var hour = Math.floor(duration / 60 / 60).padZero(2);
                var minute = Math.floor(duration / 60 % 60).padZero(2);
                var second = (duration % 60).padZero(2);
                var text = this.setting().time.format(hour, minute, second);
            }
            this.drawText(text, rect.x, rect.y, rect.width);
        }
    }

    drawSlotAmount() {
        var rect = this.itemRect(0);
        this.drawText('Max %1/%2'.format($gameParty._craftingItems.length, $gameParty._maxCrafting), rect.x, 0, rect.width, 'right');
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_CraftingInfo
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Window_CraftingInfo extends Window_Base {
    constructor() {
        super(...arguments);
    }

    initialize() {
        super.initialize(this.setting().x, this.setting().y, this.setting().width, this.setting().height);
        this.opacity = this.setting().opacity;
        this.openness = 0;
        this._items = [];
        this.refresh();
    }

    setting() {
        return Dhoom.Crafting.infoWindowSetting;
    }

    standardPadding() {
        return this.setting().padding;
    }

    setItems(items) {
        if (!this._items.equals(items)) {
            this._items = items.clone();
            this.refresh();
        }
    }

    resetTextColor() {
        super.resetTextColor();
        this.contents.changeTextStyle(this._mode ? this.setting().result.style : this.setting().materials.style);
    }

    refresh() {
        this.contents.clear();
        if (this._items.length) {
            this._mode = false;
            this.drawMaterials();
            this._mode = true;
            this.drawResult();
        }
    }

    drawMaterials() {
        var max = Dhoom.Crafting.maxItem;
        var setting = this.setting().materials;
        this.contents.changeTextStyle(setting.style);
        var separator = max - 1;
        var sWidth = this.contents.measureTextWidth(setting.separator) * 2;
        var width = (setting.width - sWidth * separator) / max;
        var x = setting.x;
        for (var i = 0; i < max; i++) {
            if (this._items[i]) {
                var text = Dhoom.Crafting.itemToText(this._items[i]);
                var xw = this.drawTextEx(text, 0, this.contents.height);
                this.drawTextEx(text, x + (width - xw) / 2, setting.y + (setting.height - this.contents.fontSize) / 2);
            }
            x += width;
            if (i < max - 1) this.contents.drawText(setting.separator, x, setting.y, sWidth, setting.height, setting.style.align);
            x += sWidth;
        }
    }

    drawResult() {
        if (this._items.length === Dhoom.Crafting.maxItem) {
            this.resetFontSettings();
            var setting = this.setting().result;
            if ($gameParty.hasCrafted(this._items)) {
                var item = $gameParty.craftingResult(this._items);
                var text = Dhoom.Crafting.itemToText(item);
            } else {
                var text = setting.hidden;
            }
            var xw = this.drawTextEx(text, 0, this.contents.height);
            this.drawTextEx(text, setting.x + (setting.width - xw) / 2, setting.y + (setting.height - this.contents.fontSize) / 2);
        }
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_EventItem
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.Crafting.Window_EventItem_onOk = Window_EventItem.prototype.onOk;
Window_EventItem.prototype.onOk = function () {
    if ($gameTemp._dhoomCrafting) {
        SceneManager._scene.onCraftingItemOk();
        return;
    }
    Dhoom.Crafting.Window_EventItem_onOk.call(this);
};

Dhoom.Crafting.Window_EventItem_onCancel = Window_EventItem.prototype.onCancel;
Window_EventItem.prototype.onCancel = function () {
    if ($gameTemp._dhoomCrafting) {
        SceneManager._scene.onCraftingItemCancel();
        return;
    }
    Dhoom.Crafting.Window_EventItem_onCancel.call(this);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_Base
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.Crafting.Scene_Base_update = Scene_Base.prototype.update;
Scene_Base.prototype.update = function () {
    Dhoom.Crafting.Scene_Base_update.call(this);
    $gameParty.updateCraftingDuration();
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_Map
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.Crafting.Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function () {
    this.createCraftingWindows();
    Dhoom.Crafting.Scene_Map_createAllWindows.call(this);
};

Scene_Map.prototype.createCraftingWindows = function () {
    if (!$gameParty._craftedItems) $gameParty.initDhoomCrafting();
    this._craftingCommandWindow = new Window_CraftingCommand();
    this._craftingCommandWindow.setHandler('craft', this.onCraftingCommandCraft.bind(this));
    this._craftingCommandWindow.setHandler('list', this.onCraftingCommandList.bind(this));
    this._craftingCommandWindow.setHandler('cancel', this.onCraftingCommandCancel.bind(this));
    this.addChildAt(this._craftingCommandWindow, this.children.indexOf(this._windowLayer));
    this._craftingListWindow = new Window_CraftingList();
    this._craftingListWindow.setHandler('ok', this.onCraftingListOk.bind(this));
    this._craftingListWindow.setHandler('cancel', this.onCraftingListCancel.bind(this));
    this.addChildAt(this._craftingListWindow, this.children.indexOf(this._windowLayer));
    this._craftingInfoWindow = new Window_CraftingInfo();
    this.addChildAt(this._craftingInfoWindow, this.children.indexOf(this._windowLayer));
    this._craftingConfirmWindow = new Window_CraftingConfirm();
    this._craftingConfirmWindow.setHandler('ok', this.onCraftingConfirmOk.bind(this));
    this._craftingConfirmWindow.setHandler('cancel', this.onCraftingConfirmCancel.bind(this));
    this.addChildAt(this._craftingConfirmWindow, this.children.indexOf(this._windowLayer));
    this._craftingListCommandWindow = new Window_CraftingListCommand();
    this._craftingListCommandWindow.setHandler('retrieve', this.onCraftingListCommandRetrieve.bind(this));
    this._craftingListCommandWindow.setHandler('abort', this.onCraftingListCommandAbort.bind(this));
    this._craftingListCommandWindow.setHandler('cancel', this.onCraftingListCommandCancel.bind(this));
    this.addChildAt(this._craftingListCommandWindow, this.children.indexOf(this._windowLayer));
};

Scene_Map.prototype.openCraftingWindows = function () {
    $gameTemp._dhoomCrafting = true;
    this._craftingMaterials = [];
    $gameMessage._maSelectItemCategoryId = Dhoom.Crafting.itemCategoryID;
    this._messageWindow._itemWindow.start();
    this._messageWindow._itemWindow.deselect();
    this._messageWindow._itemWindow.deactivate();
    this._craftingCommandWindow.open();
    this._craftingCommandWindow.activate();
    this._craftingCommandWindow.refresh();
    this._craftingListWindow.open();
    this._craftingListWindow.refresh();
    this._craftingInfoWindow.open();
    this._craftingCommandWindow.select(0);
};

Scene_Map.prototype.onCraftingCommandCraft = function () {
    this._messageWindow._itemWindow.select(0);
    this._messageWindow._itemWindow.activate();
};

Scene_Map.prototype.onCraftingCommandList = function () {
    this._craftingListWindow.activate();
    this._craftingListWindow.select(0);
};

Scene_Map.prototype.onCraftingCommandCancel = function () {
    $gameTemp._dhoomCrafting = false;
    this._messageWindow._itemWindow.close();
    this._craftingCommandWindow.close();
    this._craftingListWindow.close();
    this._craftingInfoWindow.close();
};

Scene_Map.prototype.onCraftingListOk = function () {
    this._craftingCommandWindow.close();
    this._craftingListCommandWindow.setCraftIndex(this._craftingListWindow.index());
    this._craftingListCommandWindow.open();
    this._craftingListCommandWindow.activate();
    this._craftingListCommandWindow.select(0);
};

Scene_Map.prototype.onCraftingListCancel = function () {
    this._craftingListWindow.deselect();
    this._craftingCommandWindow.activate();
};

Scene_Map.prototype.onCraftingItemOk = function () {
    var item = this._messageWindow._itemWindow.item();
    $gameParty.loseItem(item, 1);
    this._craftingMaterials.push(item);
    this._craftingInfoWindow.setItems(this._craftingMaterials);
    this._messageWindow._itemWindow.refresh();
    if (this._messageWindow._itemWindow.index() >= this._messageWindow._itemWindow.maxItems()) this._messageWindow._itemWindow.select(this._messageWindow._itemWindow.maxItems() - 1);
    if (this._craftingMaterials.length === Dhoom.Crafting.maxItem) {
        this._craftingCommandWindow.close();
        this._craftingConfirmWindow.refresh();
        this._craftingConfirmWindow.open();
        this._craftingConfirmWindow.activate();
        this._craftingConfirmWindow.select(0);
    } else {
        this._messageWindow._itemWindow.activate();
    }
};

Scene_Map.prototype.onCraftingItemCancel = function () {
    if (this._craftingMaterials.length) {
        $gameParty.gainItem(this._craftingMaterials.pop(), 1);
        this._messageWindow._itemWindow.refresh();
        this._messageWindow._itemWindow.activate();
    } else {
        this._messageWindow._itemWindow.deselect();
        this._craftingCommandWindow.activate();
    }
    this._craftingInfoWindow.setItems(this._craftingMaterials);
};

Scene_Map.prototype.onCraftingConfirmOk = function () {
    $gameParty.addCraftingQueue(this._craftingMaterials);
    this._craftingMaterials = [];
    this._craftingConfirmWindow.close();
    this._craftingCommandWindow.open();
    this._craftingCommandWindow.activate();
    this._craftingCommandWindow.refresh();
    this._craftingListWindow.refresh();
    this._craftingInfoWindow.setItems(this._craftingMaterials);
    this._messageWindow._itemWindow.deselect();
};

Scene_Map.prototype.onCraftingConfirmCancel = function () {
    SoundManager.playCancel();
    this._craftingConfirmWindow.close();
    this._craftingCommandWindow.open();
    this.onCraftingItemCancel();
};

Scene_Map.prototype.onCraftingListCommandRetrieve = function () {
    var active = true;
    var materials = this._craftingListWindow.item().materials;
    var result = $gameParty.craftingResult(materials);
    if (result) {
        $gameParty.gainItem(result, 1);
        if (Dhoom.Crafting.rememberResult) $gameParty.registerCraftedItem(this._craftingListWindow.item().materials, result);
        if (Dhoom.Crafting.successMessage.length) {
            var text = Dhoom.Crafting.successMessage.slice();
            for (var i = 0; i < materials.length; i++) {
                text = text.replace(new RegExp("<material" + (i + 1) + ">", "ig"), Dhoom.Crafting.itemToText(materials[i]));
            }
            text = text.replace(/<result>/gi, Dhoom.Crafting.itemToText(result));
            $gameMessage.add(text);
            active = false;
        }
        AudioManager.playSe(Dhoom.Crafting.successSE);
    } else {
        if (Dhoom.Crafting.giveBackFailedCombination) {
            this._craftingListWindow.item().materials.forEach(function (item) {
                $gameParty.gainItem(item, 1);
            });
        }
        if (Dhoom.Crafting.failedMessage.length) {
            var text = Dhoom.Crafting.failedMessage.slice();
            for (var i = 0; i < materials.length; i++) {
                text = text.replace(new RegExp("<material" + (i + 1) + ">", "ig"), Dhoom.Crafting.itemToText(materials[i]));
            }
            $gameMessage.add(text);
            active = false;
        }
        AudioManager.playSe(Dhoom.Crafting.failedSE);
    }
    $gameParty._craftingItems.splice(this._craftingListWindow.index(), 1);
    this._craftingListWindow.refresh();
    this._craftingListCommandWindow.close();
    this._craftingCommandWindow.open();
    this._craftingCommandWindow.refresh();
    this._messageWindow._itemWindow.refresh();
    if (active) {
        if ($gameParty._craftingItems.length) {
            this._craftingListWindow.activate();
            if (this._craftingListWindow.index() >= this._craftingListWindow.maxItems())
                this._craftingListWindow.select(this._craftingListWindow.maxItems() - 1);
        } else {
            this._craftingListWindow.deselect();
            this._craftingCommandWindow.activate();
        }
    }
};

Scene_Map.prototype.onCraftingListCommandAbort = function () {
    this._craftingListWindow.item().materials.forEach(function (item) {
        $gameParty.gainItem(item, 1);
    });
    $gameParty._craftingItems.splice(this._craftingListWindow.index(), 1);
    this._craftingListWindow.refresh();
    this._craftingListCommandWindow.close();
    this._craftingCommandWindow.open();
    this._craftingCommandWindow.refresh();
    this._messageWindow._itemWindow.refresh();
    if ($gameParty._craftingItems.length) {
        this._craftingListWindow.activate();
        if (this._craftingListWindow.index() >= this._craftingListWindow.maxItems())
            this._craftingListWindow.select(this._craftingListWindow.maxItems() - 1);
    } else {
        this._craftingListWindow.deselect();
        this._craftingCommandWindow.activate();
    }
};

Scene_Map.prototype.onCraftingListCommandCancel = function () {
    this._craftingCommandWindow.open();
    this._craftingListCommandWindow.close();
    this._craftingListWindow.activate();
};

Dhoom.Crafting.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function () {
    Dhoom.Crafting.Scene_Map_update.call(this);
    this.updateCraftingWindows();
};

Scene_Map.prototype.updateCraftingWindows = function () {
    if (this._craftingListWindow.visible && this._craftingListWindow.isOpen()) {
        if (!this._craftingListWindow.active && !this._craftingCommandWindow.active &&
            !this._craftingConfirmWindow.active && !this._craftingListCommandWindow.active &&
            !this._messageWindow._itemWindow.active && !$gameMessage.hasText()) {
            $gameMessage._maSelectItemCategoryId = Dhoom.Crafting.itemCategoryID;
            SceneManager._scene._messageWindow._itemWindow.refresh();
            if ($gameParty._craftingItems.length) {
                this._craftingListWindow.activate();
                if (this._craftingListWindow.index() >= this._craftingListWindow.maxItems())
                    this._craftingListWindow.select(this._craftingListWindow.maxItems() - 1);
            } else {
                this._craftingListWindow.deselect();
                this._craftingCommandWindow.activate();
            }
        }
    }
};