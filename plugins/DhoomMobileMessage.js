//=============================================================================
// DhoomMobileMessage.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_MobileMessage = true;

var Dhoom = Dhoom || {};
Dhoom.MobileMessage = Dhoom.MobileMessage || {};
/*:
 * @plugindesc Dhoom MobileMessage v1.3b
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Message Source JSON
 * @desc Message source
 * @default data/message_data.json
 * 
 * @param Menu
 * @desc
 * 
 * @param Menu Background
 * @type struct<menuBackground>
 * @parent Menu
 * @default {"x":"0","y":"0","filename":"main menu background ori"}
 * 
 * @param Menu Message Window
 * @desc Window position, size, etc
 * @type struct<winSetting>
 * @parent Menu
 * @default {"x":"468","y":"152","width":"302","height":"405","opacity":"0","padding":"8","background":"","backgroundPosition":"[0, 0]","scroll":"4"}
 * 
 * @param Menu Message Setting
 * @type struct<messageSetting>
 * @parent Menu
 * @default {"align":"vertical","size":"120","spacing":"8","background":"message background","face":"[8, 8, 72, 72]","name":"{\"x\":\"86\",\"y\":\"17\",\"width\":\"187\",\"height\":\"21\",\"text\":\"%1\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"21\\\",\\\"color\\\":\\\"#FFFF00\\\",\\\"outlineWidth\\\":\\\"3\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"left\\\"}\"}","date":"{\"x\":\"86\",\"y\":\"51\",\"width\":\"200\",\"height\":\"32\",\"text\":\"[\\\"%2 %11\\\",\\\"%4 %1, %5\\\"]\",\"spacing\":\"2\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"14\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"3\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"left\\\"}\"}","message":"{\"x\":\"5\",\"y\":\"86\",\"width\":\"273\",\"spacing\":\"4\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"3\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"left\\\"}\"}","new":"{\"x\":\"8\",\"y\":\"8\",\"filename\":\"message new\"}"}
 * 
 * @param Scene
 * @desc
 * 
 * @param Scene Background
 * @type struct<menuBackground>
 * @parent Scene
 * @default {"x":"0","y":"0","filename":""}
 * 
 * @param Scene Message Window
 * @desc Window position, size, etc
 * @type struct<winSetting>
 * @parent Scene
 * @default {"x":"468","y":"0","width":"302","height":"768","opacity":"0","padding":"8","background":"","backgroundPosition":"[0, 0]","scroll":"4"}
 * 
 * @param Scene Message Setting
 * @type struct<messageSetting>
 * @parent Scene
 * @default {"align":"vertical","size":"120","spacing":"8","background":"message background","face":"[8, 8, 72, 72]","name":"{\"x\":\"86\",\"y\":\"17\",\"width\":\"187\",\"height\":\"21\",\"text\":\"%1\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"21\\\",\\\"color\\\":\\\"#FFFF00\\\",\\\"outlineWidth\\\":\\\"3\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"left\\\"}\"}","date":"{\"x\":\"86\",\"y\":\"51\",\"width\":\"200\",\"height\":\"32\",\"text\":\"[\\\"%2 %11\\\",\\\"%4 %1, %5\\\"]\",\"spacing\":\"2\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"14\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"3\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"left\\\"}\"}","message":"{\"x\":\"5\",\"y\":\"86\",\"width\":\"273\",\"spacing\":\"4\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"32\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"3\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"left\\\"}\"}","new":"{\"x\":\"8\",\"y\":\"8\",\"filename\":\"message new\"}"}
 * 
 * @help
  Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

/*~struct~menuBackground:
@param x
@text Window X
@desc Window X
@default 0
@type number
@min -99999
@max 99999

@param y
@text Window Y
@desc Window Y
@default 0
@type number
@min -99999
@max 99999

@param filename
@text Filename
@desc Background filename
@type file
@dir img/system/
@require
*/

/*~struct~winSetting:
@param x
@text Window X
@desc Window X
@default 0
@type number
@min -99999
@max 99999

@param y
@text Window Y
@desc Window Y
@default 0
@type number
@min -99999
@max 99999

@param width
@text Window Width
@desc Window width
@default 1296
@type number
@min 32

@param height
@text Window Height
@desc Window height area
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

@param background
@text Window Background
@desc Window background filename
@default win-background
@type file
@dir img/system/
@require

@param backgroundPosition
@text Window Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]

@param scroll
@text Scroll Speed
@desc Scroll speed
@type number
@default 4
*/

/*~struct~messageSetting:
@param align
@text Alignment
@desc Message alignment
@type select
@option horizontal
@option vertical
@default horizontal

@param size
@text Size
@desc Message size, depending on message alignment. horizontal = width, vertical = height.
@type number
@min 32
@default 120

@param spacing
@text Spacing
@desc Spacing between each message
@type number
@min 0

@param background
@text Background
@desc Message background
@type file
@dir img/system/
@default message background

@param face
@text Face Rect
@desc Face position and size [x, y, width, height]
@default [8, 8, 72, 72]

@param name
@text Name Setting
@desc Name setting like position, size, font, etc
@type struct<textSetting>

@param date
@text Date Setting
@desc Date setting like position, size, font, etc
@type struct<dateSetting>

@param message
@text Message Setting
@desc Message setting
@type struct<messageTextSetting>

@param new
@text New Flag Setting
@type struct<newSetting>
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

/*~struct~textSetting:
@param x
@text Text X
@desc Text X position
@default 86
@type number
@min -1000

@param y
@text Text Y
@desc Text Y position
@default 17
@type number
@min -1000

@param width
@text Text Width
@desc Text width area
@default 187
@type number
@min 1

@param height
@text Text Height
@desc Text height area
@default 21
@type number
@min 1

@param text
@text Text Format
@desc %1 = Name
@default %1

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>
*/

/*~struct~dateSetting:
@param x
@text Text X
@desc Text X position
@default 86
@type number
@min -1000

@param y
@text Text Y
@desc Text Y position
@default 51
@type number
@min -1000

@param width
@text Text Width
@desc Text width area
@default 200
@type number
@min 1

@param height
@text Text Height
@desc Text height area
@default 32
@type number
@min 1

@param text
@text Text Format
@desc [Line, Line, ...] %1=Day(Num), %2=Day, %3=M(Num), %4=M, %5=Y, %6=Y Post, %7=H, %8=Min, %9=Sec, %10=AM/PM, %11=Period
@default ["%2 %11","%4 %1, %6"]
@type text[]

@param spacing
@text Text Spacing
@desc Spacing between each line.
@default 0
@type number

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>
*/

/*~struct~messageTextSetting:
@param x
@text Text X
@desc Text X position
@default 5
@type number
@min -1000

@param y
@text Text Y
@desc Text Y position
@default 86
@type number
@min -1000

@param width
@text Text Width
@desc Text width area
@default 276
@type number
@min 1

@param spacing
@text Text Spacing
@desc Spacing between each line.
@default 4
@type number

@param cursor
@text Picture Cursor
@desc Cursor for selecting clickable pictures.
@default menu cursor
@type file
@dir img/system/

@param cursorPos
@text Picture Cursor Position
@desc Shifted position from its default position, which is at the bottom-left of the picture. [x, y]
@default [0, 0]

@param mogCursor
@text Use Mog Cursor?
@type boolean
@default true

@param pictureIcon
@text Picture Icon
@desc An icon that will be shown in the picture if the picture size is reduced.
@type file
@dir img/system/

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>
*/

/*~struct~newSetting:
@param x
@text X Position
@type number

@param y
@text Y Position
@type number

@param filename
@text Filename
@type file
@dir img/system/
@default message new
*/

Dhoom.Parameters = $plugins.filter(function (obj) { return obj.description.match(/Dhoom MobileMessage/) })[0].parameters;
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

Dhoom.MobileMessage.messageSource = Dhoom.loadParam('Message Source JSON');
Dhoom.MobileMessage.menuBackground = Dhoom.loadParam('Menu Background');
Dhoom.MobileMessage.menuMessageWindow = Dhoom.loadParam('Menu Message Window');
Dhoom.MobileMessage.menuMessageSetting = Dhoom.loadParam('Menu Message Setting');
Dhoom.MobileMessage.sceneBackground = Dhoom.loadParam('Scene Background');
Dhoom.MobileMessage.sceneMessageWindow = Dhoom.loadParam('Scene Message Window');
Dhoom.MobileMessage.sceneMessageSetting = Dhoom.loadParam('Scene Message Setting');

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// DataManager
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
var $gameDhoomMessage = null;
var $gameDhoomMessageData = null;

Dhoom.MobileMessage.DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function () {
    Dhoom.MobileMessage.DataManager_createGameObjects.call(this);
    $gameDhoomMessage = new Game_DhoomMessage();
};

Dhoom.MobileMessage.DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function () {
    var contents = Dhoom.MobileMessage.DataManager_makeSaveContents.call(this);
    contents.dhoomMessage = $gameDhoomMessage;
    return contents;
};

Dhoom.MobileMessage.DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function (contents) {
    Dhoom.MobileMessage.DataManager_extractSaveContents.call(this, contents);
    $gameDhoomMessage = contents.dhoomMessage;
    $gameDhoomMessage.initMessageData();
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_DhoomMessage
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Game_DhoomMessage() {
    this.initialize.apply(this, arguments);
}

Game_DhoomMessage.prototype.initialize = function () {
    this._messages = [];
    this.initMessageData();
};

Game_DhoomMessage.prototype.initMessageData = function () {
    var parameters = PluginManager.parameters('GameTime');
    this._defaultDaysWeek = '"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"'
    this._daysWeek = eval("[" + (parameters['Days of the Week'] || this._defaultDaysWeek) + "]");
    this._defaultMonthNames = '"January","February","March","April","May","June","July","August","September","October","November","December"';
    this._monthNames = eval("[" + (parameters['Month Names'] || this._defaultMonthNames) + "]");
    this._yearPost = (parameters['Year Post'] || "A.D.");
    this._hourtf = (parameters['Twenty Four Hour Mode'] || "false").toLowerCase() == "true";
    this._daysMonth = eval("[" + (parameters['Days in a Month'] || "31,28,31,30,31,30,31,31,30,31,30,31") + "]");

    if (!$gameDhoomMessageData) {
        if (Utils.isNwjs()) {
            var data = null;
            var fs = require('fs');
            var path = require('path');
            var base = path.dirname(process.mainModule.filename);
            var filePath = path.join(base, Dhoom.MobileMessage.messageSource);
            if (fs.existsSync(filePath)) {
                data = fs.readFileSync(filePath, {
                    encoding: 'utf8'
                });
            }
            $gameDhoomMessageData = JSON.parse(data);
        } else {
            DataManager.loadDataFile('$gameDhoomMessageData', Dhoom.MobileMessage.messageSource.split('/')[1]);
        }
    }
};

Game_DhoomMessage.prototype.data = function () {
    return $gameDhoomMessageData;
};

Game_DhoomMessage.prototype.messages = function () {
    return this._messages;
};

Game_DhoomMessage.prototype.getMessage = function (index) {
    var result = {};
    this.initMessageData();
    var msg = this._messages[index];
    var data = this.data()[msg.id];
    result.day = msg.day;
    result.dayname = this._daysWeek[msg.dayWeek];
    result.month = msg.month
    result.monthname = this._monthNames[result.month - 1];
    result.year = msg.year;
    result.ypost = this._yearPost;
    result.hour = msg.hour;
    result.minute = msg.minute;
    if (result.minute < 10) result.minute = '0' + result.minute;
    result.second = msg.second;
    if (result.second < 10) result.second = '0' + result.second;
    result.ampm = this._hourtf ? '' : result.hour > 11 ? 'PM' : 'AM';
    if (!this._hourtf) {
        if (result.hour === 0) result.hour = 12;
        if (result.hour > 12) result.hour -= 12;
    }
    var time = result.hour + (result.minute / 100);
    var res = '';
    for (var i = 0; i < Dhoom.MobileMainMenu.timePeriod.length; i++) {
        var j = Dhoom.MobileMainMenu.timePeriod[i];
        if (time >= j[1] && time <= j[2]) res = j[0];
    }
    result.period = res;
    result.message = data.messages[msg.messageIndex];
    result.name = data.name;
    result.face = data.face;
    return result;
};

Game_DhoomMessage.prototype.addMessage = function (id, index, day, dayweek, month, year, hour, minute, second) {
    var data = null;
    var dataIndex = null;
    this.initMessageData();
    if (this.data()[id]) {
        data = this.data()[id];
        dataIndex = id;
    } else {
        for (var i = 0; i < this.data().length; i++) {
            if (this.data()[i].name === id) {
                data = this.data()[i];
                dataIndex = i;
                break;
            }
        }
    }
    if (data && data.messages[index]) {
        var msg = {};
        msg.id = dataIndex;
        msg.day = day || $gameTime.getTime('day') + 1;
        msg.dayWeek = dayweek || $gameTime.getTime('dayweek');
        msg.month = month || $gameTime.getTime('month') + 1;
        msg.year = year || $gameTime.getTime('year');
        msg.hour = hour || $gameTime.getTime('hour');
        msg.minute = minute || $gameTime.getTime('minute');
        msg.second = second || $gameTime.getTime('second');
        msg.messageIndex = index;
        this._messages = [msg].concat(this._messages);
        if (Imported.Dhoom_MobileMainMenu) {
            var commands = Dhoom.MobileMainMenu.commandCommands;
            for (var i = 0; i < commands.length; i++) {
                if (commands[i][2] === Scene_MenuMessage || commands[i][2] === Scene_Message) {
                    $gameSystem._menuAlertCommands[i] = true;
                }
            }
        }
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Interpreter
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.MobileMessage.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    Dhoom.MobileMessage.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command.toLowerCase() === 'mobilemessage') {
        switch (args[0].toLowerCase()) {
            case 'add':
                var id = isNaN(args[1]) ? args[1] : Number(args[1]);
                var index = Number(args[2]);
                var day = Number(args[3]);
                var dayweek = Number(args[4]);
                var month = Number(args[5]);
                var year = Number(args[6]);
                var hour = Number(args[7]);
                var minute = Number(args[8]);
                var second = Number(args[9]);
                $gameDhoomMessage.addMessage(id, index, day, dayweek, month, year, hour, minute, second);
                break;
            case 'clear':
                $gameDhoomMessage._messages = [];
                break;
        }
    }
};


//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_MenuMessageContent
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_MenuMessageContent() {
    this.initialize.apply(this, arguments);
}

Window_MenuMessageContent.prototype = Object.create(Window_Base.prototype);
Window_MenuMessageContent.prototype.constructor = Window_MenuMessageContent;

Window_MenuMessageContent.prototype.initialize = function (x, y, width, height, index, setting, message) {
    this._index = index;
    this._setting = setting;
    this._message = message;
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.opacity = 0;
};

Window_MenuMessageContent.prototype.standardPadding = function () {
    return 0;
};

Window_MenuMessageContent.prototype.setting = function () {
    return this._setting;
};

Window_MenuMessageContent.prototype.getParent = function () {
    return this.parent.parent;
};

Window_MenuMessageContent.prototype.clickablePictures = function () {
    return this.getParent()._clickablePictures;
};

Window_MenuMessageContent.prototype.scanStretchArea = function (bitmap) {
    if (!bitmap || !bitmap.isReady()) return;
    if (bitmap._dhoomStretchArea) return bitmap._dhoomStretchArea;
    var rect = new Rectangle();
    rect.x = -1;
    rect.y = -1;
    for (var x = 1; x < bitmap.width; x++) {
        if (Number(bitmap.getAlphaPixel(x, 0)) > 0) {
            if (rect.x >= 0) {
                rect.width = x - rect.x + 1;
            } else {
                rect.x = x;
            }
        }
    }
    for (var y = 1; y < bitmap.height; y++) {
        if (Number(bitmap.getAlphaPixel(0, y)) > 0) {
            if (rect.y >= 0) {
                rect.height = y - rect.y + 1;
            } else {
                rect.y = y;
            }
        }
    }
    bitmap._dhoomStretchArea = rect;
    return rect;
};

Window_MenuMessageContent.prototype.messageData = function () {
    return $gameDhoomMessage.getMessage(this._index);
};

Window_MenuMessageContent.prototype.setContent = function (width, height, message) {
    if (this.width !== width || this.height !== height || this._message !== message) {
        this.move(this.x, this.y, width, height);
        this._message = message;
        this.refresh();
    }
};

Window_MenuMessageContent.prototype.refresh = function () {
    this.createContents();
    this.drawBackground();
    this.drawMessageFace();
    this.drawMessageName();
    this.drawMessageDate();
    this.drawMessages();
    this.drawMessageFlag();
};

Window_MenuMessageContent.prototype.drawBackground = function () {
    var rect = new Rectangle(0, 0, this.width, this.height);
    var bitmap = ImageManager.loadSystem(this.setting().background);
    var brect = this.scanStretchArea(bitmap);
    if (brect) {
        // draw corners
        // top-left
        var cw1 = brect.x - 1;
        var ch1 = brect.y - 1;
        this.contents.blt(bitmap, 1, 1, cw1, ch1, rect.x, rect.y);
        // bottom-left
        var cw2 = cw1;
        var ch2 = bitmap.height - brect.y - brect.height;
        this.contents.blt(bitmap, 1, brect.y + brect.height, cw2, ch2, rect.x, rect.y + rect.height - ch2);
        // top-right
        var cw3 = bitmap.width - brect.x - brect.width;
        var ch3 = ch1;
        this.contents.blt(bitmap, brect.x + brect.width, 1, cw3, ch3, rect.x + rect.width - cw3, rect.y);
        // bottom-right
        var cw4 = cw3;
        var ch4 = ch2;
        this.contents.blt(bitmap, brect.x + brect.width, brect.y + brect.height, cw4, ch4, rect.x + rect.width - cw4, rect.y + rect.height - ch4);
        // draw outsides
        // top
        this.contents.blt(bitmap, brect.x, 1, brect.width, ch1, rect.x + cw1, rect.y, rect.width - cw3 - cw1);
        // left
        this.contents.blt(bitmap, 1, brect.y, cw1, brect.height, rect.x, rect.y + ch1, cw1, rect.height - ch2 - ch1);
        // right
        this.contents.blt(bitmap, brect.x + brect.width, brect.y, cw3, brect.height, rect.x + rect.width - cw3, rect.y + ch3, cw3, rect.height - ch3 - ch4);
        // bottom
        this.contents.blt(bitmap, brect.x, brect.y + brect.height, brect.width, ch4, rect.x + cw2, rect.y + rect.height - ch2, rect.width - cw3 - cw1);
        // draw inside
        this.contents.blt(bitmap, brect.x, brect.y, brect.width, brect.height, rect.x + cw1, rect.y + ch1, rect.width - cw1 - cw3, rect.height - ch1 - ch2);
    } else {
        this._needRefresh = true;
    }
};

Window_MenuMessageContent.prototype.drawMessageFace = function () {
    var data = this.messageData();
    if (data) {
        var set = this.setting().face;
        var width = Window_Base._faceWidth;
        var height = Window_Base._faceHeight;
        var bitmap = ImageManager.loadFace(data.face[0]);
        if (!bitmap.isReady()) this._needRefresh = true;
        var sx = data.face[1] % 4 * width;
        var sy = Math.floor(data.face[1] / 4) * height;
        this.contents.blt(bitmap, sx, sy, width, height, set[0], set[1], set[2], set[3]);
    }
};

Window_MenuMessageContent.prototype.drawMessageName = function () {
    var data = this.messageData();
    if (data) {
        var setting = this.setting().name;
        var text = setting.text.format(data.name);
        this.contents.changeTextStyle(setting.style);
        this.contents.drawText(text, setting.x, setting.y, setting.width, setting.height, setting.style.align);
    }
};

Window_MenuMessageContent.prototype.drawMessageDate = function () {
    var data = this.messageData();
    if (data) {
        var setting = this.setting().date;
        var texts = setting.text.map(function (t) {
            return t.format(data.day, data.dayname, data.month, data.monthname, data.year, data.ypost, data.hour, data.minute, data.second, data.ampm, data.period);
        })
        this.contents.changeTextStyle(setting.style);
        for (var i = 0; i < texts.length; i++) {
            this.contents.drawText(texts[i], setting.x, setting.y + (setting.style.size + setting.spacing) * i, setting.width, setting.style.size, setting.style.align);
        }
    }
};

Window_MenuMessageContent.prototype.drawMessages = function () {
    var data = this.messageData();
    if (data) {
        var setting = this.setting().message;
        this.contents.changeTextStyle(setting.style);
        var texts = this._message;
        var x = setting.x;
        var y = setting.y;
        for (var i = 0; i < texts.length; i++) {
            var ax = 0;
            if (setting.style.align === 'center') {
                ax = (setting.width - texts[i][1]) / 2;
            } else if (setting.style.align === 'right') {
                ax = setting.width - texts[i][1];
            }
            this.drawTextEx(texts[i][0], x + ax, y);
            y += texts[i][2];
            y += setting.spacing;
        }
    }
};

Window_MenuMessageContent.prototype.obtainPicParam = function (textState) {
    var arr = /^\[.+\]/.exec(textState.text.slice(textState.index));
    if (arr) {
        textState.index += arr[0].length;
        return arr[0].slice(1, arr[0].length - 1);
    } else {
        return '';
    }
};

Window_MenuMessageContent.prototype.processEscapeCharacter = function (code, textState) {
    Window_Base.prototype.processEscapeCharacter.call(this, code, textState);
    switch (code) {
        case 'PIC':
            this.drawMessagePicture(this.obtainPicParam(textState), textState);
            break;
    }
};

Window_MenuMessageContent.prototype.drawMessagePicture = function (filename, textState) {
    var bitmap = ImageManager.loadPicture(filename);
    this._lastPictureBitmap = bitmap;
    if (bitmap.isReady()) {
        var width = this.setting().message.width - textState.x + this.setting().message.x;
        var sw = width >= bitmap.width ? bitmap.width : width;
        var sh = Math.round(sw / bitmap.width * bitmap.height);
        this._lastPictureSize = [sw, sh];
        this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, textState.x, textState.y, sw, sh);
        if (sw < bitmap.width) {
            var icon = ImageManager.loadSystem(this.setting().message.pictureIcon);
            this.contents.blt(icon, 0, 0, icon.width, icon.height, textState.x + sw - icon.width, textState.y + sh - icon.height);
            this.clickablePictures().push([filename, textState.x, textState.y + this.y, sw, sh]);
        }
        textState.x += sw;
    } else {
        this._needRefresh = true;
    }
};

Window_MenuMessageContent.prototype.drawMessageFlag = function () {
    if (!this.messageData() || $gameDhoomMessage.messages()[this._index]._seen) return;
    var setting = this.setting().new;
    var bitmap = ImageManager.loadSystem(setting.filename);
    if (bitmap.isReady()) {
        this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, setting.x, setting.y);
    } else {
        this._needRefresh = true;
    }
};

Window_MenuMessageContent.prototype.resetFontSettings = function () {
    this.contents.changeTextStyle(this.setting().message.style);
};

Window_MenuMessageContent.prototype.sliceText = function (text, width) {
    text = text || "";
    var result = [];
    var t = '';
    var texts = this.convertEscapeCharacters(text).split(' ');
    var tsw = 0;
    var space;
    var word;
    var tsh = 0;
    while (texts.length > 0) {
        var sw = 0;
        if (texts[0] === '\n') {
            texts.shift();
            if (this.contents.fontSize > tsh) tsh = this.contents.fontSize;
            result.push([t.trim(), tsw, tsh]);
            t = '';
            tsw = 0;
            tsh = 0;
        } else if (texts[0].contains('\x1b')) {
            if (this.contents.fontSize > tsh) tsh = this.contents.fontSize;
            word = texts.shift();
            space = this.contents.measureTextWidth(' ');
            var sh = 0;
            var textState = {
                text: word,
                index: 0,
                x: sw + this.setting().message.x,
                y: this.setting().message.y
            };
            for (var i = 0; i < word.length; i++) {
                if (word[i] === '\x1b') {
                    i++;
                    var regExp = /^[\$\.\|\^!><\{\}\\]|^[A-Z]+/i;
                    var arr = regExp.exec(word.slice(i));
                    if (arr) {
                        i += arr[0].length;
                        textState.index = i;
                        var code = arr[0].toUpperCase();
                        if (code === 'PIC') {
                            while (texts.length > 0 && !/^\[.+\]/.exec(textState.text.slice(textState.index))) {
                                word += ' ' + texts.shift();
                                textState.text = word;
                            }
                        }
                        if (code === 'I' && sh < Window_Base._iconHeight) {
                            sh = Window_Base._iconHeight;
                            sw += Window_Base._iconWidth;
                        }
                        this.processEscapeCharacter(code, textState);
                        i = textState.index;
                        if (code === 'PIC' && this._lastPictureBitmap && this._lastPictureBitmap.isReady()) {
                            sw += this._lastPictureSize[0];
                            if (this._lastPictureSize[1] > sh) sh = this._lastPictureSize[1];
                        }
                    }
                } else {
                    sw += this.contents.measureTextWidth(word[i]);
                }
                if (this.contents.fontSize > sh) sh = this.contents.fontSize;
            }
            if (tsw + space + sw < width) {
                tsw += space + sw;
                t += ' ' + textState.text;
                if (sh > tsh) tsh = sh
            } else {
                result.push([t.trim(), tsw, tsh]);
                t = textState.text;
                tsw = sw;
                if (sh > tsh) tsh = sh
            }
        } else {
            word = texts.shift();
            space = this.contents.measureTextWidth(' ');
            sw = this.contents.measureTextWidth(word);
            if (this.contents.fontSize > tsh) tsh = this.contents.fontSize;
            if (tsw + space + sw < width) {
                tsw += space + sw;
                t += ' ' + word;
            } else {
                result.push([t.trim(), tsw, tsh]);
                t = word;
                tsw = sw;
                tsh = 0;
            }
        }
        if (texts.length === 0 && t.length > 0) {
            if (this.contents.fontSize > tsh) tsh = this.contents.fontSize;
            result.push([t.trim(), tsw, tsh]);
        }
    }
    return result;
};

Window_MenuMessageContent.prototype.update = function () {
    Window_Base.prototype.update.call(this);
    if (this._needRefresh && ImageManager.isReady()) {
        this._needRefresh = false;
        this.refresh();
        this.getParent()._needRepositionContent = true;
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_MenuMessage
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_MenuMessage() {
    this.initialize.apply(this, arguments);
}

Window_MenuMessage.prototype = Object.create(Window_Base.prototype);
Window_MenuMessage.prototype.constructor = Window_MenuMessage;

Window_MenuMessage.prototype.initialize = function (setting, messageSetting) {
    this._setting = setting;
    this._messageSetting = messageSetting;
    this._arrowFrame = 0;
    this._arrowDur = Dhoom.MobileMainMenu.commandArrowDur;
    this._scrollWait = 0;
    ImageManager.loadSystem(this.itemSetting().message.pictureIcon);
    Window_Base.prototype.initialize.call(this, this._setting.x, this._setting.y, this._setting.width, this._setting.height);
    this.opacity = this._setting.opacity;
    this._itemRects = [];
    this._windowContents = [];
    this.createBackground();
    this.createContentContainerSprite();
    this.createPictureCursor();
    this.refresh();
};

Window_MenuMessage.prototype.createContents = function () {
    Window_Base.prototype.createContents.call(this);
    this.refreshMaskSprite();
};

Window_MenuMessage.prototype.refreshMaskSprite = function () {
    if (!this._maskContentSprite) this.createMaskSprite();
    if (!this._maskContentSprite.bitmap || this._maskContentSprite.bitmap.width !== this.contents.width || this._maskContentSprite.bitmap.height !== this.contents.height) {
        this._maskContentSprite.bitmap = new Bitmap(this.contents.width, this.contents.height);
        this._maskContentSprite.bitmap.fillAll('#fff');
    }
};

Window_MenuMessage.prototype.standardPadding = function () {
    return this._setting.padding;
};

Window_MenuMessage.prototype.createBackground = function () {
    this._background = new Sprite();
    this._background.bitmap = ImageManager.loadSystem(this._setting.background);
    this._background.x = this._setting.backgroundPosition[0];
    this._background.y = this._setting.backgroundPosition[1];
    this.addChildToBack(this._background);
};

Window_MenuMessage.prototype.createContentContainerSprite = function () {
    this._contentContainerSprite = new Sprite();
    this.addChildAt(this._contentContainerSprite, this.children.indexOf(this._windowContentsSprite));
};

Window_MenuMessage.prototype.createPictureCursor = function () {
    if (!this.itemSetting().message.mogCursor) {
        this._picCursor = new Sprite();
        this._picCursor.bitmap = ImageManager.loadSystem(this.itemSetting().message.cursor);
        this._picCursor.anchor.x = 0.5;
        this._picCursor.anchor.y = 0.5;
        this._picCursor.visible = false;
        this.addChild(this._picCursor);
    }
    this._mogCursorData = [false, 0, 0];
    this._picCursorIndex = -1;
};

Window_MenuMessage.prototype.createMaskSprite = function () {
    this._maskContentSprite = new Sprite();
    this.addChild(this._maskContentSprite);
};

Window_MenuMessage.prototype.itemSetting = function () {
    return this._messageSetting;
};

Window_MenuMessage.prototype.spacing = function () {
    return this.itemSetting().spacing;
};

Window_MenuMessage.prototype.maxItems = function () {
    return $gameDhoomMessage.messages().length;
};

Window_MenuMessage.prototype.maxCols = function () {
    return this.itemSetting().align === 'horizontal' ? Math.floor(this.contents.width / (this.itemWidth() + this.spacing())) : 1;
};

Window_MenuMessage.prototype.itemWidth = function () {
    return this.itemSetting().align === 'horizontal' ? this.itemSetting().size : this.contents.width;
};

Window_MenuMessage.prototype.itemHeight = function () {
    return this.itemSetting().align === 'vertical' ? this.itemSetting().size + this.spacing() : this.contents.height;
};

Window_MenuMessage.prototype.itemRect = function (index) {
    var rect = new Rectangle();
    var maxCols = this.maxCols();
    rect.width = this.itemWidth();
    rect.height = this.itemHeight();
    rect.x = index % maxCols * (rect.width + this.spacing());
    rect.y = Math.floor(index / maxCols) * rect.height;
    if (this._itemRects[index]) rect.height = this._itemRects[index] + this.spacing();
    if (this.itemSetting().align === 'vertical') rect.height -= this.spacing();
    if (this.itemSetting().align === 'vertical' && index > 0 && this._itemRects[index] && this._itemRects[index - 1]) {
        var r = this.itemRect(index - 1);
        rect.y = r.y + r.height + this.spacing();
    }
    return rect;
};

Window_MenuMessage.prototype.refresh = function () {
    this._clickablePictures = [];
    this.refreshMessageData();
    this._contentContainerSprite.mask = this._maskContentSprite;
    this._maskContentSprite.move(this.padding, this.padding);
    this._contentContainerSprite.move(this.padding, this.padding);
    this._clickablePictures = [];
    this._contentHeight = 0;
    var num = Math.min(10, this.maxItems());
    for (var i = 0; i < num; i++) {
        this.drawItem(i);
    }
    this.updatePictureCursor();
    this.contents.clear();
};

Window_MenuMessage.prototype.refreshMessageData = function () {
    this._messages = [];
    this._itemRects = [];
    var setting = this.itemSetting().message;
    for (var i = 0; i < this.maxItems(); i++) {
        var data = $gameDhoomMessage.getMessage(i);
        this._itemRects[i] = this.itemHeight() - this.spacing();
        if (data) {
            this.contents.changeTextStyle(setting.style);
            this._messages[i] = this.sliceText(data.message, setting.width);
            var height = 0;
            var vh = this._messages[i].reduce(function (a, b, j, k) {
                var v = (Array.isArray(a) ? a[2] : a) + (Array.isArray(b) ? b[2] : 0);
                v += setting.spacing;
                return v;
            });
            if (Array.isArray(vh)) {
                height = vh[2];
            } else {
                height = vh;
            }
            this._itemRects[i] = Math.max(this._itemRects[i], setting.y + height + setting.style.size / 2);
        }
    }
};

Window_MenuMessage.prototype.sliceText = function (text, width) {
    text = text || "";
    var result = [];
    var t = '';
    var texts = this.convertEscapeCharacters(text).split(' ');
    var tsw = 0;
    var space;
    var word;
    var tsh = 0;
    while (texts.length > 0) {
        var sw = 0;
        if (texts[0] === '\n') {
            texts.shift();
            if (this.contents.fontSize > tsh) tsh = this.contents.fontSize;
            result.push([t.trim(), tsw, tsh]);
            t = '';
            tsw = 0;
            tsh = 0;
        } else if (texts[0].contains('\x1b')) {
            if (this.contents.fontSize > tsh) tsh = this.contents.fontSize;
            word = texts.shift();
            space = this.contents.measureTextWidth(' ');
            var sh = 0;
            var textState = {
                text: word,
                index: 0,
                x: sw + this.itemSetting().message.x,
                y: this.itemSetting().message.y
            };
            for (var i = 0; i < word.length; i++) {
                if (word[i] === '\x1b') {
                    i++;
                    var regExp = /^[\$\.\|\^!><\{\}\\]|^[A-Z]+/i;
                    var arr = regExp.exec(word.slice(i));
                    if (arr) {
                        i += arr[0].length;
                        textState.index = i;
                        var code = arr[0].toUpperCase();
                        if (code === 'PIC') {
                            while (texts.length > 0 && !/^\[.+\]/.exec(textState.text.slice(textState.index))) {
                                word += ' ' + texts.shift();
                                textState.text = word;
                            }
                        }
                        if (code === 'I' && sh < Window_Base._iconHeight) {
                            sh = Window_Base._iconHeight;
                            sw += Window_Base._iconWidth;
                        }
                        this.processEscapeCharacter(code, textState);
                        i = textState.index;
                        if (code === 'PIC' && this._lastPictureBitmap && this._lastPictureBitmap.isReady()) {
                            sw += this._lastPictureSize[0];
                            if (this._lastPictureSize[1] > sh) sh = this._lastPictureSize[1];
                        }
                    }
                } else {
                    sw += this.contents.measureTextWidth(word[i]);
                }
                if (this.contents.fontSize > sh) sh = this.contents.fontSize;
            }
            if (tsw + space + sw < width) {
                tsw += space + sw;
                t += ' ' + textState.text;
                if (sh > tsh) tsh = sh
            } else {
                result.push([t.trim(), tsw, tsh]);
                t = textState.text;
                tsw = sw;
                if (sh > tsh) tsh = sh
            }
        } else {
            word = texts.shift();
            space = this.contents.measureTextWidth(' ');
            sw = this.contents.measureTextWidth(word);
            if (this.contents.fontSize > tsh) tsh = this.contents.fontSize;
            if (tsw + space + sw < width) {
                tsw += space + sw;
                t += ' ' + word;
            } else {
                result.push([t.trim(), tsw, tsh]);
                t = word;
                tsw = sw;
                tsh = 0;
            }
        }
        if (texts.length === 0 && t.length > 0) {
            if (this.contents.fontSize > tsh) tsh = this.contents.fontSize;
            result.push([t.trim(), tsw, tsh]);
        }
    }
    return result;
};

Window_MenuMessage.prototype.obtainPicParam = function (textState) {
    var arr = /^\[.+\]/.exec(textState.text.slice(textState.index));
    if (arr) {
        textState.index += arr[0].length;
        return arr[0].slice(1, arr[0].length - 1);
    } else {
        return '';
    }
};

Window_MenuMessage.prototype.processEscapeCharacter = function (code, textState) {
    Window_Base.prototype.processEscapeCharacter.call(this, code, textState);
    switch (code) {
        case 'PIC':
            this.processMessagePicture(this.obtainPicParam(textState), textState);
            break;
    }
};

Window_MenuMessage.prototype.processMessagePicture = function (filename, textState) {
    var bitmap = ImageManager.loadPicture(filename);
    this._lastPictureBitmap = bitmap;
    if (bitmap.isReady()) {
        var width = this.itemSetting().message.width - textState.x + this.itemSetting().message.x;
        var sw = width >= bitmap.width ? bitmap.width : width;
        var sh = Math.round(sw / bitmap.width * bitmap.height);
        this._lastPictureSize = [sw, sh];
        textState.x += sw;
    } else {
        this._needRefresh = true;
    }
};

Window_MenuMessage.prototype.drawItem = function (index) {
    var rect = this.itemRect(index);
    if (this._windowContents[index]) {
        this._windowContents[index].x = rect.x;
        this._windowContents[index].y = rect.y;
        this._windowContents[index].setContent(rect.width, rect.height, this._messages[index]);
    } else {
        var content = new Window_MenuMessageContent(rect.x, rect.y, rect.width, rect.height, index, this.itemSetting(), this._messages[index]);
        this._contentContainerSprite.addChild(content);
        content.refresh();
        this._windowContents.push(content);
    }
    this._contentHeight = Math.max(this._contentHeight, this._windowContents[index].y + this._windowContents[index].height);
    if ($gameDhoomMessage.messages()[index] && !this._needRefresh) $gameDhoomMessage.messages()[index]._seen = true;
};

Window_MenuMessage.prototype.update = function () {
    Window_Base.prototype.update.call(this);
    if (this._arrowNeedRefresh && ImageManager.isReady()) {
        this._refreshArrows();
        this._arrowNeedRefresh = false;
    }
    if (this._needRefresh && ImageManager.isReady()) {
        this._needRefresh = false;
        this.refresh();
    }
    this.updateScroll();
    this.updateMogCursorData();
};

Window_MenuMessage.prototype.updateScroll = function () {
    this._scrollWait -= 1;
    var tempx = this._contentContainerSprite.x;
    var tempy = this._contentContainerSprite.y;
    var threshold = 20;
    if (TouchInput.isPressed() && SceneManager._scene.checkButtonMouseHover(this)) {
        if (this._currentTouchPos) {
            this._contentContainerSprite.y = this._currentTouchPos[3] - this._currentTouchPos[1] + TouchInput.y;
        } else {
            this._currentTouchPos = [TouchInput.x, TouchInput.y, this._contentContainerSprite.x, this._contentContainerSprite.y];
        }
    } else {
        this._currentTouchPos = null;
    }
    if (Input.isPressed('down') && this._scrollWait <= 0) {
        this._contentContainerSprite.y -= this._setting.scroll;
    }
    if (TouchInput.wheelY >= threshold) {
        this._contentContainerSprite.y -= this._setting.scroll * 4;
    }
    if (Input.isPressed('up') && this._scrollWait <= 0) {
        this._contentContainerSprite.y += this._setting.scroll;
    }
    if (TouchInput.wheelY <= -threshold) {
        this._contentContainerSprite.y += this._setting.scroll * 4;
    }
    var maxY = -this._contentHeight + this.height - this.padding;
    if (this._contentContainerSprite.y < maxY) this._contentContainerSprite.y = maxY;
    if (this._contentContainerSprite.y > this.padding) this._contentContainerSprite.y = this.padding;
    this.downArrowVisible = this._contentContainerSprite.y > maxY;
    this.upArrowVisible = this._contentContainerSprite.y < 0;
    if (tempx !== this._contentContainerSprite.x || tempy !== this._contentContainerSprite.y) {
        this.updatePictureCursor(tempx > this._contentContainerSprite.x || tempy > this._contentContainerSprite.y);
        this.updateContentScroll();
    }
};

Window_MenuMessage.prototype.updatePictureCursor = function (inc) {
    var temp = this._picCursorIndex;
    var visPicts = this.anyVisiblePictures();
    if (visPicts.length > 0) {
        if (this._picCursorIndex > -1) {
            if (inc && visPicts.contains(this._picCursorIndex + 1)) {
                this._picCursorIndex++;
            } else if (!inc && visPicts.contains(this._picCursorIndex - 1)) {
                this._picCursorIndex--;
            }
        } else {
            this._picCursorIndex = visPicts[0];
        }
    } else {
        this._picCursorIndex = -1;
    }
    if (temp !== this._picCursorIndex && this._picCursorIndex > -1) {
        SoundManager.playCursor();
        this._scrollWait = 10;
    }
    this.updatePictureCursorPosition();
    if (!this.itemSetting().message.mogCursor) this._picCursor.visible = this._picCursorIndex > -1;
};

Window_MenuMessage.prototype.updatePictureCursorPosition = function () {
    if (this._picCursorIndex > -1) {
        var pict = this._clickablePictures[this._picCursorIndex];
        var x = this.padding + pict[1] + this.itemSetting().message.cursorPos[0] - this._contentContainerSprite.x;
        var y = pict[2] + pict[4];
        var wh = this.height - this.padding * 2 - this._contentContainerSprite.y;
        if (y > wh) y = wh;
        y = this.padding + y + this.itemSetting().message.cursorPos[1] + this._contentContainerSprite.y;
        if (this.itemSetting().message.mogCursor) {
            this._mogCursorData = [true, this.x - this.padding + x, this.y - this.padding * 2 + y];
        } else {
            this._picCursor.x = x;
            this._picCursor.y = y;
        }
    } else {
        if (this.itemSetting().message.mogCursor) {
            this._mogCursorData = [false, 0, 0];
        }
    }
};

Window_MenuMessage.prototype.anyVisiblePictures = function () {
    result = [];
    if (this._clickablePictures) {
        var ww = this.width - this.padding * 2;
        var wh = this.height - this.padding * 2;
        var cw = this.contents.width < ww ? this.contents.width : ww;
        var ch = this._contentHeight < wh ? this._contentHeight : wh;
        var r1 = [this._contentContainerSprite.x, -this._contentContainerSprite.y, this._contentContainerSprite.x + cw, -this._contentContainerSprite.y + ch];
        for (var i = 0; i < this._clickablePictures.length; i++) {
            var pict = this._clickablePictures[i];
            var r2 = [pict[1], pict[2], pict[1] + pict[3], pict[2] + pict[4]];
            if (r1[0] < r2[2] && r1[2] > r2[0] && r1[1] < r2[3] && r1[3] > r2[1]) {
                result.push(i);
            }
        }
    }
    return result;
};

Window_MenuMessage.prototype._refreshArrows = function () {
    if (!Imported.Dhoom_MobileMainMenu) return;
    var w = this._width;
    var h = this._height;
    this._downArrowSprite.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.commandArrowFilename);
    if (!this._downArrowSprite.bitmap.isReady()) this._arrowNeedRefresh = true;
    this._downArrowSprite.anchor.x = 0.5;
    this._downArrowSprite.anchor.y = 0.5;
    this._downArrowSprite.move(w / 2, h);
    this._upArrowSprite.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.commandArrowFilename);
    this._upArrowSprite.scale.y = -1;
    this._upArrowSprite.anchor.x = 0.5;
    this._upArrowSprite.anchor.y = 0.5;
    this._upArrowSprite.move(w / 2, 0);
    this._refreshArrowsFrame();
};

Window_MenuMessage.prototype._refreshArrowsFrame = function () {
    if (!Imported.Dhoom_MobileMainMenu) return;
    var a = this._downArrowSprite.bitmap.width / Dhoom.MobileMainMenu.commandArrowFrame;
    var b = this._downArrowSprite.bitmap.height;
    this._downArrowSprite.setFrame(this._arrowFrame * a, 0, a, b);
    this._upArrowSprite.setFrame(this._arrowFrame * a, 0, a, b);
};

Window_MenuMessage.prototype._updateArrows = function () {
    Window_Base.prototype._updateArrows.call(this);
    if (!Imported.Dhoom_MobileMainMenu) return;
    this._arrowDur--;
    if (this._arrowDur <= 0) {
        this._arrowFrame = this._arrowFrame < Dhoom.MobileMainMenu.commandArrowFrame - 1 ? this._arrowFrame + 1 : 0;
        this._arrowDur = Dhoom.MobileMainMenu.commandArrowDur;
        this._refreshArrowsFrame();
    }
};

Window_MenuMessage.prototype.updateMogCursorData = function () {
    if (this.itemSetting().message.mogCursor && this._mogCursorData[0]) {
        $gameTemp._mcursorData[0] = true;
        $gameTemp._mcursorData[1] = 1;
        $gameTemp._mcursorData[2] = this._mogCursorData[1];
        $gameTemp._mcursorData[3] = this._mogCursorData[2];
    }
};

Window_MenuMessage.prototype.pictureTouched = function () {
    var visPicts = this.anyVisiblePictures();
    var mx = TouchInput._mouseX - this.x + this._contentContainerSprite.x;
    var my = TouchInput._mouseY - this.y - this._contentContainerSprite.y;
    for (var i = 0; i < visPicts.length; i++) {
        var pict = this._clickablePictures[visPicts[i]];
        if (mx >= pict[1] && mx < pict[1] + pict[3] && my >= pict[2] && my < pict[2] + pict[4]) {
            return visPicts[i];
        }
    }
    return -1;
};

Window_MenuMessage.prototype.updateContentScroll = function () {
    if (this._windowContents.length < this.maxItems()) {
        var wnd = this._windowContents[this._windowContents.length - 1];
        if (wnd.y + this._contentContainerSprite.y <= this.contents.height + 200) {
            this.drawItem(this._windowContents.length);
        }
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_MenuMessage
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Scene_MenuMessage() {
    this.initialize.apply(this, arguments);
}

Scene_MenuMessage.prototype = Object.create(Scene_MenuBase.prototype);
Scene_MenuMessage.prototype.constructor = Scene_MenuMessage;

Scene_MenuMessage.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    this.createQuitSprite();
    this.createMessageWindow();
};

Scene_MenuMessage.prototype.createBackground = function () {
    Scene_MenuBase.prototype.createBackground.call(this);
    this._menuBackgroundSprite = new Sprite();
    this._menuBackgroundSprite.bitmap = ImageManager.loadSystem(Dhoom.MobileMessage.menuBackground.filename);
    this._menuBackgroundSprite.x = Dhoom.MobileMessage.menuBackground.x;
    this._menuBackgroundSprite.y = Dhoom.MobileMessage.menuBackground.y;
    this.addChild(this._menuBackgroundSprite);
};

Scene_MenuMessage.prototype.createQuitSprite = function () {
    this._quitSprite = new Sprite_MenuQuit();
    this.addChild(this._quitSprite);
};

Scene_MenuMessage.prototype.createMessageWindow = function () {
    this._messageWindow = new Window_MenuMessage(Dhoom.MobileMessage.menuMessageWindow, Dhoom.MobileMessage.menuMessageSetting);
    this.addChild(this._messageWindow);
};

Scene_MenuMessage.prototype.createMessagePictureSprites = function () {
    this._pictureBackground = new Sprite();
    this._pictureBackground.bitmap = new Bitmap(Graphics.width, Graphics.height);
    this._pictureBackground.bitmap.fillAll('#000000');
    this._pictureBackground.opacity = 180;
    this.addChild(this._pictureBackground);
    this._pictureBackground.visible = false;
    this._pictureSprite = new Sprite();
    this._pictureSprite.anchor.x = 0.5;
    this._pictureSprite.anchor.y = 0.5;
    this._pictureSprite.x = Graphics.width / 2;
    this._pictureSprite.y = Graphics.height / 2;
    this.addChild(this._pictureSprite);
    this._pictureSprite.visible = false;
    this._pictureShown = false;
};

Scene_MenuMessage.prototype.update = function () {
    Scene_MenuBase.prototype.update.call(this);
    this.updateMouseCursor();
    if (this._pictureShown) {
        if (Input.isTriggered('ok') || Input.isTriggered('cancel') || TouchInput.isTriggered() || TouchInput.isCancelled()) {
            SoundManager.playCancel();
            this.hidePicture();
        }
    } else {
        if (Input.isTriggered('cancel') || TouchInput.isCancelled()) {
            SoundManager.playCancel();
            this.popScene();
            if (Imported.TDDP_MouseSystemEx && TDDP_MouseSystemEx.useCustomCursor) TDDP_MouseSystemEx._resetCustomCursor();
        }
        if ((this.checkButtonMouseHover(this._quitSprite) && TouchInput.isTriggered())) {
            SoundManager.playOk();
            SceneManager.push(Scene_GameEnd);
            if (Imported.TDDP_MouseSystemEx && TDDP_MouseSystemEx.useCustomCursor) TDDP_MouseSystemEx._resetCustomCursor();
        } else if (TouchInput.isTriggered() && this.checkButtonMouseHover(this._messageWindow) && this._messageWindow.pictureTouched() > -1) {
            var temp = this._messageWindow._picCursorIndex;
            this._messageWindow._picCursorIndex = this._messageWindow.pictureTouched();
            if (temp === this._messageWindow._picCursorIndex) {
                SoundManager.playOk();
                this.showPicture(this._messageWindow._clickablePictures[this._messageWindow._picCursorIndex][0]);
            } else {
                SoundManager.playCursor();
                this._messageWindow.updatePictureCursorPosition();
            }
        } else if (Input.isTriggered('ok') && this._messageWindow._picCursorIndex > -1) {
            SoundManager.playOk();
            this.showPicture(this._messageWindow._clickablePictures[this._messageWindow._picCursorIndex][0]);
        }
    }
};

Scene_MenuMessage.prototype.updateMouseCursor = function () {
    if (!Imported.TDDP_MouseSystemEx || !TDDP_MouseSystemEx.useCustomCursor) return;
    if (this._pictureShown) {
        TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.MobileMainMenu.mouseHover));
    } else {
        if (this.checkButtonMouseHover(this._quitSprite) || this.checkButtonMouseHover(this._messageWindow)) {
            TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.MobileMainMenu.mouseHover));
        } else {
            TDDP_MouseSystemEx._resetCustomCursor();
        }
    }
};

Scene_MenuMessage.prototype.checkButtonMouseHover = function (sprite) {
    if (!sprite) return;
    var x = sprite.canvasToLocalX(TouchInput._mouseX);
    var y = sprite.canvasToLocalY(TouchInput._mouseY);
    return x >= 0 && y >= 0 && x < sprite.width && y < sprite.height;
};

Scene_MenuMessage.prototype.showPicture = function (filename) {
    if (!this._pictureBackground) this.createMessagePictureSprites();
    this._pictureShown = true;
    this._pictureSprite.bitmap = ImageManager.loadPicture(filename);
    this._pictureSprite.visible = true;
    this._pictureBackground.visible = true;
};

Scene_MenuMessage.prototype.hidePicture = function () {
    this._pictureShown = false;
    this._pictureBackground.visible = false;
    this._pictureSprite.visible = false;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_Message
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Scene_Message() {
    this.initialize.apply(this, arguments);
}

Scene_Message.prototype = Object.create(Scene_Base.prototype);
Scene_Message.prototype.constructor = Scene_Message;

Scene_Message.prototype.create = function () {
    Scene_Base.prototype.create.call(this);
    this.createBackground();
    this.createMessageWindow();
};

Scene_Message.prototype.createBackground = function () {
    this._menuBackgroundSprite = new Sprite();
    this._menuBackgroundSprite.bitmap = ImageManager.loadSystem(Dhoom.MobileMessage.sceneBackground.filename);
    this._menuBackgroundSprite.x = Dhoom.MobileMessage.sceneBackground.x;
    this._menuBackgroundSprite.y = Dhoom.MobileMessage.sceneBackground.y;
    this.addChild(this._menuBackgroundSprite);
};

Scene_Message.prototype.createMessageWindow = function () {
    this._messageWindow = new Window_MenuMessage(Dhoom.MobileMessage.sceneMessageWindow, Dhoom.MobileMessage.sceneMessageSetting);
    this.addChild(this._messageWindow);
};

Scene_Message.prototype.createMessagePictureSprites = function () {
    this._pictureBackground = new Sprite();
    this._pictureBackground.bitmap = new Bitmap(Graphics.width, Graphics.height);
    this._pictureBackground.bitmap.fillAll('#000000');
    this._pictureBackground.opacity = 180;
    this.addChild(this._pictureBackground);
    this._pictureBackground.visible = false;
    this._pictureSprite = new Sprite();
    this._pictureSprite.anchor.x = 0.5;
    this._pictureSprite.anchor.y = 0.5;
    this._pictureSprite.x = Graphics.width / 2;
    this._pictureSprite.y = Graphics.height / 2;
    this.addChild(this._pictureSprite);
    this._pictureSprite.visible = false;
    this._pictureShown = false;
};

Scene_Message.prototype.update = function () {
    Scene_Base.prototype.update.call(this);
    this.updateMouseCursor();
    if (this._pictureShown) {
        if (Input.isTriggered('ok') || Input.isTriggered('cancel') || TouchInput.isTriggered() || TouchInput.isCancelled()) {
            SoundManager.playCancel();
            this.hidePicture();
        }
    } else {
        if (Input.isTriggered('cancel') || TouchInput.isCancelled()) {
            SoundManager.playCancel();
            this.popScene();
            if (Imported.TDDP_MouseSystemEx && TDDP_MouseSystemEx.useCustomCursor) TDDP_MouseSystemEx._resetCustomCursor();
        }
        if (TouchInput.isTriggered() && this.checkButtonMouseHover(this._messageWindow) && this._messageWindow.pictureTouched() > -1) {
            var temp = this._messageWindow._picCursorIndex;
            this._messageWindow._picCursorIndex = this._messageWindow.pictureTouched();
            if (temp === this._messageWindow._picCursorIndex) {
                SoundManager.playOk();
                this.showPicture(this._messageWindow._clickablePictures[this._messageWindow._picCursorIndex][0]);
            } else {
                SoundManager.playCursor();
                this._messageWindow.updatePictureCursorPosition();
            }
        } else if (Input.isTriggered('ok') && this._messageWindow._picCursorIndex > -1) {
            SoundManager.playOk();
            this.showPicture(this._messageWindow._clickablePictures[this._messageWindow._picCursorIndex][0]);
        }
    }
};

Scene_MenuMessage.prototype.updateMouseCursor = function () {
    if (!Imported.TDDP_MouseSystemEx || !TDDP_MouseSystemEx.useCustomCursor) return;
    if (this._pictureShown) {
        TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.MobileMainMenu.mouseHover));
    } else {
        if (this.checkButtonMouseHover(this._quitSprite) || this.checkButtonMouseHover(this._messageWindow)) {
            TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.MobileMainMenu.mouseHover));
        } else {
            TDDP_MouseSystemEx._resetCustomCursor();
        }
    }
};

Scene_Message.prototype.updateMouseCursor = function () {
    if (!Imported.TDDP_MouseSystemEx || !TDDP_MouseSystemEx.useCustomCursor) return;
    if (this._pictureShown) {
        TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.MobileMainMenu.mouseHover));
    } else {
        if (this.checkButtonMouseHover(this._messageWindow)) {
            TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.MobileMainMenu.mouseHover));
        } else {
            TDDP_MouseSystemEx._resetCustomCursor();
        }
    }
};

Scene_Message.prototype.checkButtonMouseHover = function (sprite) {
    if (!sprite) return;
    var x = sprite.canvasToLocalX(TouchInput._mouseX);
    var y = sprite.canvasToLocalY(TouchInput._mouseY);
    return x >= 0 && y >= 0 && x < sprite.width && y < sprite.height;
};

Scene_Message.prototype.showPicture = function (filename) {
    if (!this._pictureBackground) this.createMessagePictureSprites();
    this._pictureShown = true;
    this._pictureSprite.bitmap = ImageManager.loadPicture(filename);
    this._pictureSprite.visible = true;
    this._pictureBackground.visible = true;
};

Scene_Message.prototype.hidePicture = function () {
    this._pictureShown = false;
    this._pictureBackground.visible = false;
    this._pictureSprite.visible = false;
};