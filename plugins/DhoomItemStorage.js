//=============================================================================
// DhoomItemStorage.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_ItemStorage = "1.3";

var Dhoom = Dhoom || {};
Dhoom.ItemStorage = Dhoom.ItemStorage || {};
/*:
 * @plugindesc Dhoom ItemStorage v1.3
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Storage Settings
 * @type struct<storageSetting>[]
 * @default ["{\"name\":\"Default\",\"size\":\"30\",\"whitelist\":\"[\\\"I7\\\",\\\"I9\\\",\\\"I128\\\"]\",\"blacklist\":\"[]\",\"include\":\"false\"}"]
 * 
 * @param Common Events
 * 
 * @param Can't Store Common Event
 * @desc When the player select unstorable items, this common event will run.
 * @type common_event
 * @default 0
 * @parent Common Events
 * 
 * @param No Room Common Event
 * @desc This common event will run when the player want to store item in a storage that has no room left.
 * @type common_event
 * @default 0
 * @parent Common Events
 * 
 * @param Can't Retrieve Common Event
 * @desc This common event will run when the player can't retrieve items from storage because the player has the maximum amount in inventory.
 * @type common_event
 * @default 0
 * @parent Common Events
 * 
 * @param Windows
 * 
 * @param Help Window
 * @type struct<helpWindow>
 * @default {"x":"100","y":"100","width":"1096","height":"88","opacity":"255","padding":"12","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\"}","wordWrap":"true","background":"","backgroundPosition":"[0, 0]"}
 * @parent Windows
 * 
 * @param Storage Window
 * @type struct<storageWindow>
 * @default {"x":"648","y":"188","width":"548","height":"480","opacity":"255","padding":"12","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\"}","background":"","backgroundPosition":"[0, 0]","cols":"1","switchKey":"left"}
 * @parent Windows
 * 
 * @param Inventory Window
 * @type struct<inventoryWindow>
 * @default {"x":"100","y":"188","width":"548","height":"480","opacity":"255","padding":"12","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\"}","background":"","backgroundPosition":"[0, 0]","cols":"1","hide":"false","switchKey":"right"}
 * @parent Windows
 * 
 * @param Storage Size Window
 * @type struct<sizeWindow>
 * @default {"x":"996","y":"668","width":"200","height":"56","opacity":"255","padding":"12","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\"}","text":"%1 / %2","background":"","backgroundPosition":"[0, 0]"}
 * @parent Windows
 *
 * @help 
  (c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
 */

/*~struct~sizeWindow:
@param x
@text X
@desc Window X
@default 0
@type number
@min -99999
@max 99999

@param y
@text Y
@desc Window Y
@default 0
@type number
@min -99999
@max 99999

@param width
@text Width
@desc Window width
@default 1296
@type number
@min 32

@param height
@text Height
@desc Window height
@default 768
@type number
@min 32

@param opacity
@text Opacity
@desc Window opacity
@default 255
@type number
@max 255

@param padding
@text Padding
@desc Window padding
@default 12
@type number

@param style
@text Text Style
@type struct<FontStyle>
@default {"name":"","size":"32","color":"#FFFFFF","outlineWidth":"1","outlineColor":"#000000","bold":"false","italic":"false"}

@param text
@text Text
@desc %1 = Current Size, %2 = Max Size.
@default %1 / %2

@param background
@text Background
@desc Window background filename
@default 
@type file
@dir img/system/
@require

@param backgroundPosition
@text Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]
*/

/*~struct~helpWindow:
@param x
@text X
@desc Window X
@default 0
@type number
@min -99999
@max 99999

@param y
@text Y
@desc Window Y
@default 0
@type number
@min -99999
@max 99999

@param width
@text Width
@desc Window width
@default 1296
@type number
@min 32

@param height
@text Height
@desc Window height
@default 768
@type number
@min 32

@param opacity
@text Opacity
@desc Window opacity
@default 255
@type number
@max 255

@param padding
@text Padding
@desc Window padding
@default 12
@type number

@param style
@text Text Style
@type struct<FontStyle>
@default {"name":"","size":"32","color":"#FFFFFF","outlineWidth":"1","outlineColor":"#000000","bold":"false","italic":"false"}

@param wordWrap
@text Word Wrap
@type boolean
@default true

@param background
@text Background
@desc Window background filename
@default 
@type file
@dir img/system/
@require

@param backgroundPosition
@text Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]
*/

/*~struct~inventoryWindow:
@param x
@text X
@desc Window X
@default 0
@type number
@min -99999
@max 99999

@param y
@text Y
@desc Window Y
@default 0
@type number
@min -99999
@max 99999

@param width
@text Width
@desc Window width
@default 1296
@type number
@min 32

@param height
@text Height
@desc Window height
@default 768
@type number
@min 32

@param opacity
@text Opacity
@desc Window opacity
@default 255
@type number
@max 255

@param padding
@text Padding
@desc Window padding
@default 12
@type number

@param style
@text Text Style
@type struct<FontStyle>
@default {"name":"","size":"32","color":"#FFFFFF","outlineWidth":"1","outlineColor":"#000000","bold":"false","italic":"false"}

@param background
@text Background
@desc Window background filename
@default 
@type file
@dir img/system/
@require

@param backgroundPosition
@text Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]

@param cols
@text Columns
@desc Number of columns.
@type number
@min 1
@default 1

@param hide
@text Hide Unstorable Items?
@type boolean
@default true

@param storeText
@text Store All Text Setting
@desc Set the text empty to hide.
@type struct<textSetting>
@default 

@param switchKey
@text Switch Key
@desc Input key for switching active window. a-z, 0-9, num0-num9, left, right, up, down, ctrl, alt, shift, tab.
@default right
*/

/*~struct~storageWindow:
@param x
@text X
@desc Window X
@default 0
@type number
@min -99999
@max 99999

@param y
@text Y
@desc Window Y
@default 0
@type number
@min -99999
@max 99999

@param width
@text Width
@desc Window width
@default 1296
@type number
@min 32

@param height
@text Height
@desc Window height
@default 768
@type number
@min 32

@param opacity
@text Opacity
@desc Window opacity
@default 255
@type number
@max 255

@param padding
@text Padding
@desc Window padding
@default 12
@type number

@param style
@text Text Style
@type struct<FontStyle>
@default {"name":"","size":"32","color":"#FFFFFF","outlineWidth":"1","outlineColor":"#000000","bold":"false","italic":"false"}

@param background
@text Background
@desc Window background filename
@default 
@type file
@dir img/system/
@require

@param backgroundPosition
@text Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]

@param cols
@text Columns
@desc Number of columns.
@type number
@min 1
@default 1

@param retrieveText
@text Retrieve All Text Setting
@desc Set the text empty to hide.
@type struct<textSetting>
@default 

@param switchKey
@text Switch Key
@desc Input key for switching active window. a-z, 0-9, num0-num9, left, right, up, down, ctrl, alt, shift, tab.
@default left
*/

/*~struct~storageSetting:
@param name
@text Storage Name
@desc Must be unique. Will be used as the storage ID.

@param size
@text Initial Size
@desc How many items this storage can store. Can be changed later with plugin command.
@type number
@min 1
@default 1

@param type
@text Only Count Item
@desc When turned on, only count unique item instead of the amount.
@type boolean
@default false

@param whitelist
@text Item Whitelist
@desc TypeIndex. Example: I10 = Item Id 10, IT0 = Regular Item, ET3 = Equipment Type 3, W0 = All Weapons. Has more priority than blacklist.
@type text[]
@default []

@param blacklist
@text Item Blacklist
@desc TypeIndex. Example: I10 = Item Id 10, IT0 = Regular Item, ET3 = Equipment Type 3, W0 = All Weapons.
@type text[]
@default []

@param include
@text Include Item Not On List
@desc Can store item that is not on the white and black list?
@type boolean
@default true
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
*/

/*~struct~textSetting:
@param text
@text Text
@desc Leave empty to hide
@default 

@param align
@text Alignment
@type select
@option left
@option center
@option right
@default center

@param style
@text Style
@type struct<FontStyle>
@default {"name":"","size":"32","color":"#FFFFFF","outlineWidth":"1","outlineColor":"#000000","bold":"false","italic":"false"}
*/

Dhoom.Parameters = $plugins.filter(function (obj) { return obj.description.match(/Dhoom ItemStorage/) })[0].parameters;
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

Dhoom.ItemStorage.cantStore = Dhoom.loadParam("Can't Store Common Event");
Dhoom.ItemStorage.noRoom = Dhoom.loadParam('No Room Common Event');
Dhoom.ItemStorage.cantRetrieve = Dhoom.loadParam("Can't Retrieve Common Event");
Dhoom.ItemStorage.helpWindow = Dhoom.loadParam('Help Window');
Dhoom.ItemStorage.sizeWindow = Dhoom.loadParam('Storage Size Window');
Dhoom.ItemStorage.storageWindow = Dhoom.loadParam('Storage Window');
Dhoom.ItemStorage.inventoryWindow = Dhoom.loadParam('Inventory Window');
Dhoom.ItemStorage.storageIndexes = [null];
Dhoom.ItemStorage.storages = Dhoom.loadParam('Storage Settings');
Dhoom.ItemStorage.storages.forEach(function (s) {
    Dhoom.ItemStorage.storageIndexes.push(s.name);
    s.whitelist = s.whitelist.map(function (t) { return t.toLowerCase() });
    s.blacklist = s.blacklist.map(function (t) { return t.toLowerCase() });
});

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Bitmap
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
if (typeof Bitmap.prototype.changeTextStyle === 'undefined') {
    Dhoom.ItemStorage.Bitmap_initialize = Bitmap.prototype.initialize;
    Bitmap.prototype.initialize = function (width, height) {
        Dhoom.ItemStorage.Bitmap_initialize.call(this, width, height);
        this.fontBold = false;
    };

    Dhoom.ItemStorage.Bitmap_makeFontNameText = Bitmap.prototype._makeFontNameText;
    Bitmap.prototype._makeFontNameText = function () {
        if (this.fontBold) return 'Bold ' + this.fontSize + 'px ' + this.fontFace;
        return Dhoom.ItemStorage.Bitmap_makeFontNameText.call(this);
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

    Dhoom.ItemStorage.Bitmap_drawTextOutline = Bitmap.prototype._drawTextOutline;
    Bitmap.prototype._drawTextOutline = function (text, tx, ty, maxWidth) {
        if (this.outlineWidth === 0) return;
        Dhoom.ItemStorage.Bitmap_drawTextOutline.call(this, text, tx, ty, maxWidth);
    };
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// TDDP_MouseSystemEx
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
if (Imported.TDDP_MouseSystemEx) {
    Dhoom.ItemStorage.TDDP_MouseSystemEx_conditionsValidForMouseHoverCheck = TDDP_MouseSystemEx.conditionsValidForMouseHoverCheck;
    TDDP_MouseSystemEx.conditionsValidForMouseHoverCheck = function () {
        return Dhoom.ItemStorage.TDDP_MouseSystemEx_conditionsValidForMouseHoverCheck.call(this) && !SceneManager._scene.isItemStorageActive();
    };
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Party
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Game_Party.prototype.itemStorage = function (index) {
    if (!this._itemStorages) this._itemStorages = {};
    if (!this._itemStorages[index]) this._itemStorages[index] = new Game_ItemStorage(index);
    if (!(this._itemStorages[index] instanceof Game_ItemStorage)) {
        var temp = this._itemStorages[index];
        this._itemStorages[index] = new Game_ItemStorage(index);
        if (temp._data) this._itemStorages[index]._data = temp._data;
        if (temp._size) this._itemStorages[index]._size = temp._size;
    }
    return this._itemStorages[index];
};

Game_Party.prototype.getStorageIndex = function (name) {
    if (isNaN(name)) {
        return Dhoom.ItemStorage.storageIndexes.indexOf(name);
    } else {
        return Number(name);
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_ItemStorage
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Game_ItemStorage() {
    this.initialize.apply(this, arguments);
}

Game_ItemStorage.prototype.initialize = function (index) {
    this._index = index - 1;
    this._data = {};
    this._size = this.setting().size;
};

Game_ItemStorage.prototype.setting = function () {
    return Dhoom.ItemStorage.storages[this._index];
};

Game_ItemStorage.prototype.whitelist = function () {
    return this.setting().whitelist;
};

Game_ItemStorage.prototype.blacklist = function () {
    return this.setting().blacklist;
};

Game_ItemStorage.prototype.maxItems = function () {
    return this._size;
};

Game_ItemStorage.prototype.canStore = function (item) {
    if (item) {
        var all;
        var sym;
        var type;
        var equip;
        if (DataManager.isItem(item)) {
            sym = 'i' + item.id;
            type = 'it' + item.itypeId;
            all = 'i0';
        } else if (DataManager.isWeapon(item)) {
            sym = 'w' + item.id;
            type = 'wt' + item.wtypeId;
            all = 'w0';
        } else if (DataManager.isArmor(item)) {
            sym = 'a' + item.id;
            type = 'at' + item.atypeId;
            equip = 'et' + item.etypeId;
            all = 'a0';
        }
        if (all && this.whitelist().contains(all)) return true;
        if (sym && this.whitelist().contains(sym)) return true;
        if (type && this.whitelist().contains(type)) return true;
        if (equip && this.whitelist().contains(equip)) return true;
        if (all && this.blacklist().contains(all)) return false;
        if (sym && this.blacklist().contains(sym)) return false;
        if (type && this.blacklist().contains(type)) return false;
        if (equip && this.blacklist().contains(equip)) return false;
    }
    return item && !!this.setting().include;
};

Game_ItemStorage.prototype.hasItem = function (item) {
    return this._data[this.itemToKey(item)];
};

Game_ItemStorage.prototype.hasRoom = function (item) {
    if (this.setting().type && this.hasItem(item)) return true;
    return this.remainingSize() > 0;
};

Game_ItemStorage.prototype.currentSize = function () {
    if (this.setting().type) {
        return this.items().length;
    }
    return this.items().reduce(function (p, c) {
        return p + c[1];
    }, 0);
};

Game_ItemStorage.prototype.remainingSize = function () {
    return this.maxItems() - this.currentSize();
};

Game_ItemStorage.prototype.items = function () {
    var result = [];
    for (var key in this._data) {
        if (this._data.hasOwnProperty(key)) {
            var item = this.keyToItem(key);
            if (item && this._data[key]) result.push([item, this._data[key]]);
        }
    }
    return result;
};

Game_ItemStorage.prototype.add = function (item, amount, gain) {
    var type = this.getType(item);
    if (type) {
        var id = type + item.id;
        this._data[id] = this._data[id] || 0;
        this._data[id] += amount;
        if (gain) $gameParty.gainItem(item, -amount);
        if (this._data[id] <= 0) {
            delete this._data[id];
        }
    }
};

Game_ItemStorage.prototype.remove = function (item, amount, gain) {
    this.add(item, -amount, gain);
};

Game_ItemStorage.prototype.removeAll = function (gain) {
    var keys = Object.keys(this._data);
    for (var i = 0; i < keys.length; i++) {
        if (this._data.hasOwnProperty(keys[i])) {
            var item = this.keyToItem(keys[i]);
            if (item && this._data[keys[i]]) {
                this.remove(item, this._data[keys[i]], gain);
            }
        }
    }
};

Game_ItemStorage.prototype.storeAll = function (gain) {
    var items = $gameParty.allItems().filter(function (item) { return this.canStore(item); }, this);
    for (var i = 0; i < items.length; i++) {
        if (this.hasRoom(items[i])) {
            if (this.setting().type) {
                this.add(items[i], $gameParty.numItems(items[i]), gain);
            } else {
                this.add(items[i], Math.min($gameParty.numItems(items[i]), this.remainingSize()), gain);
            }
        } else {
            break;
        }
    }
};

Game_ItemStorage.prototype.getType = function (item) {
    if (DataManager.isItem(item)) {
        return 'i';
    } else if (DataManager.isWeapon(item)) {
        return 'w';
    } else if (DataManager.isArmor(item)) {
        return 'a';
    }
    return null;
};

Game_ItemStorage.prototype.itemToKey = function (item) {
    return this.getType(item) + item.id;
};

Game_ItemStorage.prototype.keyToItem = function (key) {
    var type = key[0];
    var id = Number(key.slice(1));
    switch (type.toLowerCase()) {
        case 'i':
            return $dataItems[id];
        case 'a':
            return $dataArmors[id];
        case 'w':
            return $dataWeapons[id];
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Player
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.ItemStorage.Game_Player_canMove = Game_Player.prototype.canMove;
Game_Player.prototype.canMove = function () {
    if (SceneManager._scene instanceof Scene_Map && SceneManager._scene.isItemStorageActive()) {
        return false;
    }
    return Dhoom.ItemStorage.Game_Player_canMove.call(this);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Interpreter
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.ItemStorage.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    if (command.toLowerCase() === 'itemstorage') {
        switch (args[0].toLowerCase()) {
            case 'open':
                var id = $gameParty.getStorageIndex(args[1]);
                if (id && id > 0) {
                    SceneManager._scene.startItemStorage(id);
                } else {
                    console.warn("DhoomItemStorage: There's no storage with ID of " + args[1]);
                }
                break;
            case 'close':
                SceneManager._scene.closeItemStorage();
                break;
            case 'activate':
                SceneManager._scene.onItemStorageListSwitch();
                break;
            case 'deactivate':
                SceneManager._scene._itemStorageInventoryWindow.deactivate();
                SceneManager._scene._itemStorageListWindow.deactivate();
                break;
            case 'changesize':
                var id = $gameParty.getStorageIndex(args[1]);
                if (id && id > 0) {
                    $gameParty.itemStorage(id)._size = Number(args[2]);
                } else {
                    console.warn("DhoomItemStorage: There's no storage with ID of " + args[1]);
                }
                break;
        }
    }
    Dhoom.ItemStorage.Game_Interpreter_pluginCommand.call(this, command, args);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_ItemStorageHelp
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_ItemStorageHelp() {
    this.initialize.apply(this, arguments);
}

Window_ItemStorageHelp.prototype = Object.create(Window_Help.prototype);
Window_ItemStorageHelp.prototype.constructor = Window_ItemStorageHelp;

Window_ItemStorageHelp.prototype.initialize = function () {
    Window_Help.prototype.initialize.call(this);
    this.move(this.setting().x, this.setting().y, this.setting().width, this.setting().height);
    this.createContents();
    this.opacity = this.setting().opacity;
    this.openness = 0;
    this.createBackgroundSprite();
};

Window_ItemStorageHelp.prototype.setting = function () {
    return Dhoom.ItemStorage.helpWindow;
};

Window_ItemStorageHelp.prototype.standardPadding = function () {
    return this.setting().padding;
};

Window_ItemStorageHelp.prototype.lineHeight = function () {
    return this.setting().style.size;
};

Window_ItemStorageHelp.prototype.resetFontSettings = function () {
    Window_Help.prototype.resetFontSettings.call(this);
    this.contents.changeTextStyle(this.setting().style);
};

Window_ItemStorageHelp.prototype.createBackgroundSprite = function () {
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = ImageManager.loadSystem(this.setting().background);
    this._backgroundSprite.x = this.setting().backgroundPosition[0];
    this._backgroundSprite.y = this.setting().backgroundPosition[1];
    this.addChildToBack(this._backgroundSprite);
};

Window_ItemStorageHelp.prototype.update = function () {
    Window_Help.prototype.update.call(this);
    this.updateBackgroundSprite();
};

Window_ItemStorageHelp.prototype.updateBackgroundSprite = function () {
    this._backgroundSprite.opacity = this.openness;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_ItemStorageSize
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_ItemStorageSize() {
    this.initialize.apply(this, arguments);
}

Window_ItemStorageSize.prototype = Object.create(Window_Base.prototype);
Window_ItemStorageSize.prototype.constructor = Window_ItemStorageSize;

Window_ItemStorageSize.prototype.initialize = function () {
    Window_Base.prototype.initialize.call(this, this.setting().x, this.setting().y, this.setting().width, this.setting().height);
    this.opacity = this.setting().opacity;
    this.openness = 0;
    this.createBackgroundSprite();
};

Window_ItemStorageSize.prototype.setting = function () {
    return Dhoom.ItemStorage.sizeWindow;
};

Window_ItemStorageSize.prototype.standardPadding = function () {
    return this.setting().padding;
};

Window_ItemStorageSize.prototype.refresh = function (size, max) {
    this.contents.clear();
    this.contents.changeTextStyle(this.setting().style);
    this.contents.drawText(this.setting().text.format(size, max), 0, 0, this.contents.width, this.contents.height, 'center');
};

Window_ItemStorageSize.prototype.createBackgroundSprite = function () {
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = ImageManager.loadSystem(this.setting().background);
    this._backgroundSprite.x = this.setting().backgroundPosition[0];
    this._backgroundSprite.y = this.setting().backgroundPosition[1];
    this.addChildToBack(this._backgroundSprite);
};

Window_ItemStorageSize.prototype.update = function () {
    Window_Base.prototype.update.call(this);
    this.updateBackgroundSprite();
};

Window_ItemStorageSize.prototype.updateBackgroundSprite = function () {
    this._backgroundSprite.opacity = this.openness;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_ItemStorageList
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_ItemStorageList() {
    this.initialize.apply(this, arguments);
}

Window_ItemStorageList.prototype = Object.create(Window_ItemList.prototype);
Window_ItemStorageList.prototype.constructor = Window_ItemStorageList;

Window_ItemStorageList.prototype.initialize = function (storageIndex) {
    this._storageIndex = storageIndex;
    Window_ItemList.prototype.initialize.call(this, this.setting().x, this.setting().y, this.setting().width, this.setting().height);
    this.opacity = this.setting().opacity;
    this.openness = 0;
    this.createBackgroundSprite();
};

Window_ItemStorageList.prototype.setting = function () {
    return Dhoom.ItemStorage.storageWindow;
};

Window_ItemStorageList.prototype.storeRetrieveSetting = function () {
    return this.setting().retrieveText;
};

Window_ItemStorageList.prototype.hasStoreRetrieve = function () {
    return this.storeRetrieveSetting() && this.storeRetrieveSetting().text && this.storeRetrieveSetting().text.length;
};

Window_ItemStorageList.prototype.standardPadding = function () {
    return this.setting().padding;
};

Window_ItemStorageList.prototype.maxCols = function () {
    return this.setting().cols;
};

Window_ItemStorageList.prototype.storageSetting = function () {
    return Dhoom.ItemStorage.storages[this._storageIndex];
};

Window_ItemStorageList.prototype.storage = function () {
    return $gameParty.itemStorage(this._storageIndex);
};

Window_ItemStorageList.prototype.storageObjects = function () {
    return $gameParty.itemStorageObjects(this._storageIndex);
};

Window_ItemStorageList.prototype.isEnabled = function (item) {
    return item && $gameParty.numItems(item[0]) < $gameParty.maxItems();
};

Window_ItemStorageList.prototype.makeItemList = function () {
    this._data = this.hasStoreRetrieve() ? ['text'] : [];
    this._data = this._data.concat(this.storage() ? this.storage().items() : []);
};

Window_ItemStorageList.prototype.selectLast = function () {
    this.select(0);
};

Window_ItemStorageList.prototype.setStorage = function (storageIndex) {
    this._storageIndex = storageIndex;
    this.select(0);
    this.refresh();
};

Window_ItemStorageList.prototype.refresh = function () {
    Window_ItemList.prototype.refresh.call(this);
    if (this._index >= this.maxItems()) this.select(Math.max(0, this.maxItems() - 1));
};

Window_ItemStorageList.prototype.drawItem = function (index) {
    var item = this._data[index];
    if (item === 'text') {
        var rect = this.itemRect(index);
        this.changePaintOpacity(this.isEnabled(item));
        this.contents.changeTextStyle(this.storeRetrieveSetting().style);
        this.drawText(this.storeRetrieveSetting().text, rect.x, rect.y, rect.width, this.storeRetrieveSetting().align);
        this.changePaintOpacity(1);
    } else {
        Window_ItemList.prototype.drawItem.call(this, index);
    }
};

Window_ItemStorageList.prototype.drawItemName = function (item, x, y, width) {
    Window_ItemList.prototype.drawItemName.call(this, item[0], x, y, width);
};

Window_ItemStorageList.prototype.drawItemNumber = function (item, x, y, width) {
    if (this.needsNumber()) {
        this.drawText(':', x, y, width - this.textWidth('000'), 'right');
        this.drawText(item[1], x, y, width, 'right');
    }
};

Window_ItemStorageList.prototype.update = function () {
    Window_ItemList.prototype.update.call(this);
    this.updateBackgroundSprite();
    this.updateHandler();
};

Window_ItemStorageList.prototype.updateHandler = function () {
    if (this.isOpenAndActive() && this.visible) {
        for (var symbol in this._handlers) {
            if (symbol !== 'cancel' && symbol !== 'ok') {
                if (Input.isTriggered(symbol)) {
                    this._handlers[symbol]();
                    break;
                }
            }
        }
    }
};

Window_ItemStorageList.prototype.updateHelp = function () {
    this.setHelpWindowItem(this.item() ? this.item()[0] : null);
};

Window_ItemStorageList.prototype.createBackgroundSprite = function () {
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = ImageManager.loadSystem(this.setting().background);
    this._backgroundSprite.x = this.setting().backgroundPosition[0];
    this._backgroundSprite.y = this.setting().backgroundPosition[1];
    this.addChildToBack(this._backgroundSprite);
};

Window_ItemStorageList.prototype.updateBackgroundSprite = function () {
    this._backgroundSprite.opacity = this.openness;
};

Window_ItemStorageList.prototype.processOk = function () {
    this.updateInputData();
    this.deactivate();
    this.callOkHandler();
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_ItemStorageInventory
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_ItemStorageInventory() {
    this.initialize.apply(this, arguments);
}

Window_ItemStorageInventory.prototype = Object.create(Window_ItemStorageList.prototype);
Window_ItemStorageInventory.prototype.constructor = Window_ItemStorageInventory;

Window_ItemStorageInventory.prototype.setting = function () {
    return Dhoom.ItemStorage.inventoryWindow;
};

Window_ItemStorageInventory.prototype.storeRetrieveSetting = function () {
    return this.setting().storeText;
};

Window_ItemStorageInventory.prototype.isEnabled = function (item) {
    if (item === 'text') return true;
    return this.storage().canStore(item) && this.storage().hasRoom(item);
};

Window_ItemStorageInventory.prototype.includes = function (item) {
    if (this.setting().hide) {
        if (!this.storage().canStore(item)) return false;
    }
    return true;
};

Window_ItemStorageInventory.prototype.makeItemList = function () {
    this._data = this.hasStoreRetrieve() ? ['text'] : [];
    this._data = this._data.concat($gameParty.allItems().filter(function (item) {
        return this.includes(item);
    }, this));
};

Window_ItemStorageInventory.prototype.drawItemName = function (item, x, y, width) {
    Window_ItemList.prototype.drawItemName.call(this, item, x, y, width);
};

Window_ItemStorageInventory.prototype.drawItemNumber = function (item, x, y, width) {
    if (this.needsNumber()) {
        this.drawText(':', x, y, width - this.textWidth('000'), 'right');
        this.drawText($gameParty.numItems(item), x, y, width, 'right');
    }
};

Window_ItemStorageInventory.prototype.updateHelp = function () {
    Window_ItemList.prototype.updateHelp.call(this);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_ItemStorageNumberInput
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_ItemStorageNumberInput() {
    this.initialize.apply(this, arguments);
}

Window_ItemStorageNumberInput.prototype = Object.create(Window_NumberInput.prototype);
Window_ItemStorageNumberInput.prototype.constructor = Window_ItemStorageNumberInput;

Window_ItemStorageNumberInput.prototype.initialize = function () {
    Window_NumberInput.prototype.initialize.call(this);
    this._minValue = 1;
    this._maxValue = $gameParty.maxItems();
    this._maxDigits = $gameParty.maxItems().toString().split('').length;
};

Window_ItemStorageNumberInput.prototype.start = function (max) {
    max = Math.min($gameParty.maxItems(), max);
    this._maxDigits = max.toString().split('').length;
    this._maxValue = max;
    this._number = max;
    this.updatePlacement();
    this.placeButtons();
    this.updateButtonsVisiblity();
    this.createContents();
    this.refresh();
    this.open();
    this.activate();
    this.select(0);
};

Window_ItemStorageNumberInput.prototype.updatePlacement = function () {
    this.width = this.windowWidth();
    this.height = this.windowHeight();
    this.x = (Graphics.width - this.width) / 2;
    this.y = (Graphics.height - this.height) / 2;
};

Window_ItemStorageNumberInput.prototype.createButtons = function () {
    var bitmap = ImageManager.loadSystem('ButtonSet');
    var buttonWidth = 48;
    var buttonHeight = 48;
    this._buttons = [];
    for (var i = 0; i < 3; i++) {
        var button = new Sprite_Button();
        var x = buttonWidth * [1, 2, 4][i];
        var w = buttonWidth * (i === 2 ? 2 : 1);
        button.bitmap = bitmap;
        button.setColdFrame(x, 0, w, buttonHeight);
        button.setHotFrame(x, buttonHeight, w, buttonHeight);
        button.visible = false;
        this._buttons.push(button);
        this.addChild(button);
    }
    this._buttons[0].setClickHandler(this.onButtonDown.bind(this));
    this._buttons[1].setClickHandler(this.onButtonUp.bind(this));
    this._buttons[2].setClickHandler(this.onButtonOk.bind(this));
};

Window_ItemStorageNumberInput.prototype.buttonY = function () {
    return this.height + 8;
};

Window_ItemStorageNumberInput.prototype.changeDigit = function (up) {
    var index = this.index();
    var operator = up ? 1 : -1;
    while (index < this._maxDigits - 1) {
        operator *= 10;
        index++;
    }
    this._number += operator;
    this._number = Math.min(this._maxValue, Math.max(this._minValue, this._number));
    this.refresh();
    SoundManager.playCursor();
};

Window_ItemStorageNumberInput.prototype.processOk = function () {
    SoundManager.playOk();
    this.updateInputData();
    this.deactivate();
    this.close();
    this.hideButtons();
    this.callOkHandler();
};

Window_ItemStorageNumberInput.prototype.processCancel = function () {
    SoundManager.playCancel();
    this.updateInputData();
    this.deactivate();
    this.close();
    this.hideButtons();
    this.callCancelHandler();
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_Map
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.ItemStorage.Scene_Map_createWindowLayer = Scene_Map.prototype.createWindowLayer;
Scene_Map.prototype.createWindowLayer = function () {
    this.createItemStorageWindows();
    Dhoom.ItemStorage.Scene_Map_createWindowLayer.call(this);
};

Scene_Map.prototype.createItemStorageWindows = function () {
    this._itemStorageHelpWindow = new Window_ItemStorageHelp();
    this.addChild(this._itemStorageHelpWindow);
    this._itemStorageListWindow = new Window_ItemStorageList();
    this._itemStorageListWindow.setHelpWindow(this._itemStorageHelpWindow);
    this._itemStorageListWindow.setHandler('ok', this.onItemStorageListOk.bind(this));
    this._itemStorageListWindow.setHandler('cancel', this.onItemStorageListCancel.bind(this));
    this._itemStorageListWindow.setHandler(this._itemStorageListWindow.setting().switchKey, this.onItemStorageListSwitch.bind(this));
    this.addChild(this._itemStorageListWindow);
    this._itemStorageInventoryWindow = new Window_ItemStorageInventory();
    this._itemStorageInventoryWindow.setHelpWindow(this._itemStorageHelpWindow);
    this._itemStorageInventoryWindow.setHandler('ok', this.onItemStorageInventoryOk.bind(this));
    this._itemStorageInventoryWindow.setHandler('cancel', this.onItemStorageInventoryCancel.bind(this));
    this._itemStorageInventoryWindow.setHandler(this._itemStorageInventoryWindow.setting().switchKey, this.onItemStorageInventorySwitch.bind(this));
    this.addChild(this._itemStorageInventoryWindow);
    this._itemStorageSizeWindow = new Window_ItemStorageSize();
    this.addChild(this._itemStorageSizeWindow);
    this._itemStorageNumberWindow = new Window_ItemStorageNumberInput();
    this._itemStorageNumberWindow.setHandler('ok', this.onItemStorageNumberOk.bind(this));
    this._itemStorageNumberWindow.setHandler('cancel', this.onItemStorageNumberCancel.bind(this));
    this.addChild(this._itemStorageNumberWindow);
};

Dhoom.ItemStorage.Scene_Map_isMenuEnabled = Scene_Map.prototype.isMenuEnabled;
Scene_Map.prototype.isMenuEnabled = function () {
    return Dhoom.ItemStorage.Scene_Map_isMenuEnabled.call(this) && !this.isItemStorageActive();
};

Scene_Map.prototype.onItemStorageListOk = function () {
    var item = this._itemStorageListWindow.item();
    var storage = this._itemStorageListWindow.storage();
    if (this._itemStorageListWindow.isCurrentItemEnabled()) {
        this._itemStorageListWindow.playOkSound();
        if (item === 'text') {
            storage.removeAll(true);
            this._itemStorageListWindow.refresh();
            this._itemStorageInventoryWindow.refresh();
            this._itemStorageListWindow.activate();
            this._itemStorageSizeWindow.refresh(storage.currentSize(), storage.maxItems());
        } else if (item[1] > 1) {
            this._itemStorageNumberWindow._mode = 'list';
            this._itemStorageNumberWindow.start(Math.min(item[1], $gameParty.maxItems() - $gameParty.numItems(item[0])));
        } else {
            storage.remove(item[0], 1, true);
            this._itemStorageListWindow.refresh();
            this._itemStorageInventoryWindow.refresh();
            this._itemStorageListWindow.activate();
            this._itemStorageSizeWindow.refresh(storage.currentSize(), storage.maxItems());
        }
    } else {
        this._itemStorageListWindow.playBuzzerSound();
        if (Dhoom.ItemStorage.cantRetrieve) {
            $gameTemp.reserveCommonEvent(Dhoom.ItemStorage.cantRetrieve);
        } else {
            this._itemStorageListWindow.activate();
        }
    }
};

Scene_Map.prototype.onItemStorageListCancel = function () {
    this.closeItemStorage();
};

Scene_Map.prototype.onItemStorageListSwitch = function () {
    SoundManager.playCursor();
    this._itemStorageListWindow.deactivate();
    this._itemStorageInventoryWindow.activate();
};

Scene_Map.prototype.onItemStorageInventoryOk = function () {
    var item = this._itemStorageInventoryWindow.item();
    var storage = this._itemStorageInventoryWindow.storage();
    if (this._itemStorageInventoryWindow.isCurrentItemEnabled()) {
        this._itemStorageInventoryWindow.playOkSound();
        if (item === 'text') {
            storage.storeAll(true);
            this._itemStorageInventoryWindow.refresh();
            this._itemStorageListWindow.refresh();
            this._itemStorageInventoryWindow.activate();
            this._itemStorageSizeWindow.refresh(this._itemStorageListWindow.storage().currentSize(), this._itemStorageListWindow.storage().maxItems());
        } else if ($gameParty.numItems(item) > 1) {
            this._itemStorageNumberWindow._mode = 'inventory';
            if (storage.setting().type) {
                this._itemStorageNumberWindow.start(Math.min($gameParty.numItems(item), $gameParty.maxItems()));
            } else {
                this._itemStorageNumberWindow.start(Math.min($gameParty.numItems(item), Math.min(storage.remainingSize(), $gameParty.maxItems())));
            }
        } else {
            storage.add(item, 1, true);
            this._itemStorageInventoryWindow.refresh();
            this._itemStorageListWindow.refresh();
            this._itemStorageInventoryWindow.activate();
            this._itemStorageSizeWindow.refresh(this._itemStorageListWindow.storage().currentSize(), this._itemStorageListWindow.storage().maxItems());
        }
    } else {
        this._itemStorageInventoryWindow.playBuzzerSound();
        if (storage.canStore(item)) {
            if (Dhoom.ItemStorage.noRoom) $gameTemp.reserveCommonEvent(Dhoom.ItemStorage.noRoom);
        } else if (Dhoom.ItemStorage.cantStore) {
            $gameTemp.reserveCommonEvent(Dhoom.ItemStorage.cantStore);
        } else {
            this._itemStorageInventoryWindow.activate();
        }
    }
};

Scene_Map.prototype.onItemStorageInventoryCancel = function () {
    this.closeItemStorage();
};

Scene_Map.prototype.onItemStorageInventorySwitch = function () {
    SoundManager.playCursor();
    this._itemStorageListWindow.activate();
    this._itemStorageInventoryWindow.deactivate();
};

Scene_Map.prototype.onItemStorageNumberOk = function () {
    var number = this._itemStorageNumberWindow._number;
    if (this._itemStorageNumberWindow._mode === 'inventory') {
        this._itemStorageInventoryWindow.storage().add(this._itemStorageInventoryWindow.item(), number, true);
        this._itemStorageInventoryWindow.activate();
    } else {
        this._itemStorageListWindow.storage().remove(this._itemStorageListWindow.item()[0], number, true);
        this._itemStorageListWindow.activate();
    }
    this._itemStorageInventoryWindow.refresh();
    this._itemStorageListWindow.refresh();
    this._itemStorageSizeWindow.refresh(this._itemStorageListWindow.storage().currentSize(), this._itemStorageListWindow.storage().maxItems());
};

Scene_Map.prototype.onItemStorageNumberCancel = function () {
    if (this._itemStorageNumberWindow._mode === 'inventory') {
        this._itemStorageInventoryWindow.activate();
    } else {
        this._itemStorageListWindow.activate();
    }
};

Scene_Map.prototype.isItemStorageActive = function () {
    return this._itemStorageNumberWindow.isOpenAndActive() ||
        this._itemStorageInventoryWindow.isOpenAndActive() ||
        this._itemStorageListWindow.isOpenAndActive();
};

Dhoom.ItemStorage.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function () {
    Dhoom.ItemStorage.Scene_Map_update.call(this);
    if (this.isItemStorageActive()) this.updateItemStorageTouchSwitch();
};

Scene_Map.prototype.updateItemStorageTouchSwitch = function () {
    if (TouchInput.isTriggered()) {
        if (this._itemStorageListWindow.active && this._itemStorageInventoryWindow.isTouchedInsideFrame()) {
            this._itemStorageListWindow.deactivate();
            this._itemStorageInventoryWindow.activate();
            SoundManager.playCursor();
            TouchInput.update();
        } else if (this._itemStorageInventoryWindow.active && this._itemStorageListWindow.isTouchedInsideFrame()) {
            this._itemStorageListWindow.activate();
            this._itemStorageInventoryWindow.deactivate();
            SoundManager.playCursor();
            TouchInput.update();
        }
    }
};

Scene_Map.prototype.startItemStorage = function (index) {
    this._itemStorageHelpWindow.open();
    this._itemStorageListWindow.setStorage(index);
    this._itemStorageListWindow.deactivate();
    this._itemStorageListWindow.open();
    this._itemStorageInventoryWindow.setStorage(index);
    this._itemStorageInventoryWindow.activate();
    this._itemStorageInventoryWindow.open();
    this._itemStorageSizeWindow.open();
    this._itemStorageSizeWindow.refresh(this._itemStorageListWindow.storage().currentSize(), this._itemStorageListWindow.storage().maxItems());
};

Scene_Map.prototype.closeItemStorage = function () {
    this._itemStorageHelpWindow.close();
    this._itemStorageListWindow.close();
    this._itemStorageInventoryWindow.close();
    this._itemStorageSizeWindow.close();
};