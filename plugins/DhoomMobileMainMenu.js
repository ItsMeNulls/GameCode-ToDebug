//=============================================================================
// DhoomMobileMainMenu.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_MobileMainMenu = true;

var Dhoom = Dhoom || {};
Dhoom.MobileMainMenu = Dhoom.MobileMainMenu || {};
/*:
 * @plugindesc Dhoom MobileMainMenu v1.3b
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Hover Mouse Cursor
 * @desc Mouse cursor when hovering over commands
 * @default select
 * 
 * @param Menu Background
 * @desc Menu background filename
 * @default main menu background
 * 
 * @param Menu Cursor Filename
 * @desc Selection cursor filename
 * @default menu cursor
 * 
 * @param Menu Cursor Use Mog
 * @desc Use Mog's menu cursor instead?
 * @default true
 * 
 * @param =====Time=====
 * @desc
 * @default
 * 
 * @param Time Period
 * @desc Period of time, [['Name', from, to], ...]
 * @default [['Morning', 6.00, 11.59], ['Afternoon', 12.00, 17.59], ['Evening', 18.00, 23.59], ['Night', 0.00, 5.59]]
 * 
 * @param =====HUD=====
 * @desc
 * @default
 * 
 * @param Time HUD Switch
 * @desc Switch ID that determine this HUD visibility
 * @default 1
 * 
 * @param Time HUD Position
 * @desc [x, y]
 * @default [96, 96]
 * 
 * @param Time HUD Filename
 * @desc HUD filename, %1 = Time Period
 * @default time hud %1
 * 
 * @param Time HUD Hour Arm Position
 * @desc Arm position [x, y]
 * @default [99, 60]
 * 
 * @param Time HUD Hour Arm Filename
 * @desc Arm filename
 * @default time hud hour arm
 * 
 * @param Time HUD Minute Arm Position
 * @desc Arm position [x, y]
 * @default [99, 60]
 * 
 * @param Time HUD Minute Arm Filename
 * @desc Arm filename
 * @default time hud minute arm
 * 
 * @param Time HUD Second Arm Position
 * @desc Arm position [x, y]
 * @default [99, 60]
 * 
 * @param Time HUD Second Arm Filename
 * @desc Arm filename
 * @default time hud second arm
 * 
 * @param Time HUD Second Arm Auto Rotate
 * @desc Auto rotate second arm clock even if the time is paused
 * @default true
 * 
 * @param Time HUD Second Arm Rotate Speed
 * @desc Rotate speed if Clock Second Arm Auto Rotate is true
 * @default 1
 * 
 * @param =====Gold Window=====
 * @desc
 * @default
 * 
 * @param Gold Window Activation
 * @desc Scene class or Common Event ID
 * @default 5
 * 
 * @param Gold Window Rect
 * @desc Window position and size [x, y, width, height]
 * @default [468, 125, 141, 27]
 *
 * @param Gold Window Opacity
 * @desc Window opacity, 0 - 255
 * @default 0
 *
 * @param Gold Window Padding
 * @desc Window padding
 * @default 4
 *
 * @param Gold Window Background
 * @desc Window background filename
 * @default 
 *
 * @param Gold Window Background Position
 * @desc Window background position [x, y]
 * @default [0, 0]
 * 
 * @param Gold Window Text
 * @desc %1 = Currency, %2 = Total Gold
 * @default %2 %1
 * 
 * @param Gold Window Cursor Position
 * @desc Selection cursor position [x, y]
 * @default [-32, 0]
 *
 * @param Gold Window Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param Gold Window Font Size
 * @desc Font size
 * @default 21
 *
 * @param Gold Window Font Color
 * @desc Font color
 * @default #FFFFFF
 *
 * @param Gold Window Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param Gold Window Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Gold Window Font Bold
 * @desc
 * @default false
 *
 * @param Gold Window Font Italic
 * @desc
 * @default false
 *
 * @param Gold Window Font Alignment
 * @desc Text alignment, left - center - right
 * @default left
 * 
 * @param =====Command Window=====
 * @desc
 * @default
 * 
 * @param Menu Commands
 * @desc [['Icon Filename', 'Name', Scene class or Common Event ID, Switch ID for command access (0 = Always available)], ...]
 * @default [['icon obj', 'Objectives', 1, 0], ['icon item', 'Items', Scene_Item, 0], ['icon contacts', 'Contacts', Scene_Status, 0], ['icon settings', 'Settings', Scene_Options, 0], ['icon call', 'Call', 2, 0], ['icon messages', 'Messages', 3, 1], ['icon load', 'Load', Scene_Load, 1], ['icon logs', 'Logs', 4, 1]]
 *
 * @param Command Alert Filename
 * @desc Command alert graphic filename
 * @default icon alert
 * 
 * @param Command Alert Position
 * @desc [x, y]
 * @default [34, 2]
 * 
 * @param Command Alert Blink Duration
 * @desc Duration in frame, set to 0 to disable
 * @default 15
 * 
 * @param Command Window Arrow Filename
 * @desc Graphic filename
 * @default menu arrow
 * 
 * @param Command Window Arrow Frame
 * @desc How many frame does the arrow graphic has?
 * @default 3
 * 
 * @param Command Window Arrow Duration
 * @desc How long each frame is shown
 * @default 5
 * 
 * @param Command Window Rect
 * @desc Window position and size [x, y, width, height]
 * @default [484, 387, 273, 159]
 *
 * @param Command Window Opacity
 * @desc Window opacity, 0 - 255
 * @default 0
 *
 * @param Command Window Padding
 * @desc Window padding
 * @default 0
 * 
 * @param Command Window Column
 * @desc Max column
 * @default 4
 * 
 * @param Command Window Spacing
 * @desc Spacing between each command. [x, y]
 * @default [19, 9]
 * 
 * @param Command Window Command Size
 * @desc Command size [width, height]
 * @default [54, 75]
 * 
 * @param Command Window Icon Position
 * @desc Icon position [x, y]
 * @default [0, 0]
 * 
 * @param Command Window Text Rect
 * @desc Text position and size [x, y, width, height]
 * @default [3, 54, 48, 21]
 * 
 * @param Command Window Cursor Position
 * @desc Selection cursor position [x, y]
 * @default [-20, 20]
 *
 * @param Command Window Background
 * @desc Window background filename
 * @default
 *
 * @param Command Window Background Position
 * @desc Window background position [x, y]
 * @default [0, 0]
 *
 * @param Command Window Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param Command Window Font Size
 * @desc Font size
 * @default 12
 *
 * @param Command Window Font Color
 * @desc Font color
 * @default #FFFFFF
 *
 * @param Command Window Font Outline Width
 * @desc Font outline width
 * @default 2
 *
 * @param Command Window Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Command Window Font Bold
 * @desc
 * @default false
 *
 * @param Command Window Font Italic
 * @desc
 * @default false
 *
 * @param Command Window Font Alignment
 * @desc Text alignment, left - center - right
 * @default center
 * 
 * @param =====Time Window=====
 * @desc
 * @default
 *
 * @param Time Window Rect
 * @desc Window position and size [x, y, width, height]
 * @default [468, 152, 233, 80]
 *
 * @param Time Window Opacity
 * @desc Window opacity, 0 - 255
 * @default 0
 *
 * @param Time Window Padding
 * @desc Window padding
 * @default 6
 *
 * @param Time Window Background
 * @desc Window background filename
 * @default
 *
 * @param Time Window Background Position
 * @desc Window background position [x, y]
 * @default [0, 0]
 * 
 * @param Time Window Text
 * @desc [Line, Line, ...] %1=Day(Num), %2=Day, %3=M(Num), %4=M, %5=Y, %6=Y Post, %7=H, %8=Min, %9=Sec, %10=AM/PM, %11=Period
 * @default ['%4 %1, %5', '%2, %7:%8 %10']
 *
 * @param Time Window Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param Time Window Font Size
 * @desc Font size
 * @default 28
 *
 * @param Time Window Font Color
 * @desc Font color
 * @default #FFFFFF
 *
 * @param Time Window Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param Time Window Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Time Window Font Bold
 * @desc
 * @default false
 *
 * @param Time Window Font Italic
 * @desc
 * @default false
 *
 * @param Time Window Font Alignment
 * @desc Text alignment, left - center - right
 * @default center
 * 
 * @param =====Clock=====
 * @desc
 * @default
 * 
 * @param Clock Position
 * @desc [x, y]
 * @default [731, 191]
 * 
 * @param Clock Background
 * @desc Background filename
 * @default clock background
 * 
 * @param Clock Hour Arm
 * @desc Hour arm filename
 * @default clock hour
 * 
 * @param Clock Minute Arm
 * @desc Minute arm filename
 * @default clock minute
 * 
 * @param Clock Second Arm
 * @desc Second arm filename
 * @default clock second
 * 
 * @param Clock Second Arm Auto Rotate
 * @desc Auto rotate second arm clock even if the time is paused
 * @default true
 * 
 * @param Clock Second Arm Rotate Speed
 * @desc Rotate speed if Clock Second Arm Auto Rotate is true
 * @default 1
 * 
 * @param =====News Window=====
 * @desc
 * @default
 * 
 * @param News Source
 * @desc Source filename for news text
 * @default data/news_source.json
 * 
 * @param News Variable ID
 * @desc Variable for source index
 * @default 1
 * 
 * @param News Window Scroll Speed
 * @desc Scroll Speed
 * @default 1
 *
 * @param News Window Rect
 * @desc Window position and size [x, y, width, height]
 * @default [534, 233, 236, 20]
 *
 * @param News Window Opacity
 * @desc Window opacity, 0 - 255
 * @default 0
 *
 * @param News Window Padding
 * @desc Window padding
 * @default 4
 *
 * @param News Window Background
 * @desc Window background filename
 * @default
 *
 * @param News Window Background Position
 * @desc Window background position [x, y]
 * @default [0, 0]
 *
 * @param News Window Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param News Window Font Size
 * @desc Font size
 * @default 14
 *
 * @param News Window Font Color
 * @desc Font color
 * @default #000000
 *
 * @param News Window Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param News Window Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param News Window Font Bold
 * @desc
 * @default false
 *
 * @param News Window Font Italic
 * @desc
 * @default false 
 * 
 * @param =====Quit Button=====
 * @desc
 * @default
 * 
 * @param Quit Button Filename
 * @desc Button filename
 * @default menu quit button
 * 
 * @param Quit Button Position
 * @desc [x, y]
 * @default [592, 571]
 * 
 * @param Quit Button Cursor Position
 * @desc Selection cursor position [x, y]
 * @default [-20, 20]
 *
 * @help
  Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

var Sprite_MenuClock, Sprite_MenuQuit, Sprite_MapClock, Window_MenuGold, Window_MobileMenuCommand, Window_MenuTime, Window_MenuNews;

+function() {
    function _$af870478() {
        var min = $gameTime.getTime("minute");
        var hour = $gameTime.getTime("hour");
        var time = hour + (min / 100);
        var result = "";
        for (var i = 0; i < Dhoom.MobileMainMenu.timePeriod.length; i++) {
            var data = Dhoom.MobileMainMenu.timePeriod[i];
            if (time >= data[1] && time <= data[2]) {
                result = data[0];
            }
        }
        return result;
    }

    function _$af870479() {
        Dhoom.MobileMainMenu.Graphics_createGameFontLoader.call(this);
        this._createFontLoader(Dhoom.MobileMainMenu.goldFont.name);
        this._createFontLoader(Dhoom.MobileMainMenu.commandFont.name);
        this._createFontLoader(Dhoom.MobileMainMenu.timeFont.name);
        this._createFontLoader(Dhoom.MobileMainMenu.newsFont.name);
    }

    function _$af870480(width, height) {
        Dhoom.MobileMainMenu.Bitmap_initialize.call(this, width, height);
        this.fontBold = false;
    }

    function _$af870481() {
        if (this.fontBold) {
            return "Bold " + this.fontSize + "px " + this.fontFace;
        }
        return Dhoom.MobileMainMenu.Bitmap_makeFontNameText.call(this);
    }

    function _$af870482(style) {
        this.fontFace = style.name.length > 0 ? style.name : "GameFont";
        this.fontSize = style.size;
        this.textColor = style.color;
        this.outlineWidth = style.outlineWidth;
        this.outlineColor = style.outlineColor;
        this.fontBold = style.bold;
        this.fontItalic = style.italic;
    }

    function _$af870483(text, tx, ty, maxWidth) {
        if (this.outlineWidth === 0) {
            return;
        }
        Dhoom.MobileMainMenu.Bitmap_drawTextOutline.call(this, text, tx, ty, maxWidth);
    }

    function _$af870484() {
        Dhoom.MobileMainMenu.TouchInput_clear.call(this);
        this._mouseX = 0;
        this._mouseY = 0;
    }

    function _$af870485() {
        return this._mouseX;
    }

    function _$af870486() {
        return this._mouseY;
    }

    function _$af870487(event) {
        Dhoom.MobileMainMenu.TouchInput_onMouseMove.call(this, event);
        this._mouseX = Graphics.pageToCanvasX(event.pageX);
        this._mouseY = Graphics.pageToCanvasY(event.pageY);
    }

    function _$af870488() {
        Dhoom.MobileMainMenu.Game_System_initialize.call(this);
        this._menuAlertCommands = [];
    }

    function _$af870489(command, args) {
        Dhoom.MobileMainMenu.Game_Interpreter_pluginCommand.call(this, command, args);
        if (command.toLowerCase() === "mobilemenu") {
            switch (args[0].toLowerCase()) {
                case "setalert":
                    $gameSystem._menuAlertCommands[Number(args[1])] = true;
                    break;
            }
        }
    }

    function _$af870490() {
        this.initialize.apply(this, arguments);
    }

    function _$af870491() {
        Sprite.prototype.initialize.call(this);
        this.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.clockBack);
        this.x = Dhoom.MobileMainMenu.clockPos[0];
        this.y = Dhoom.MobileMainMenu.clockPos[1];
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this._tempSec = 0;
        this.createSprites();
        this.updateClock();
    }

    function _$af870492() {
        this._hour = new Sprite();
        this._hour.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.clockHour);
        this._hour.anchor.x = 0.5;
        this._hour.anchor.y = 0.5;
        this.addChild(this._hour);
        this._minute = new Sprite();
        this._minute.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.clockMinute);
        this._minute.anchor.x = 0.5;
        this._minute.anchor.y = 0.5;
        this.addChild(this._minute);
        this._second = new Sprite();
        this._second.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.clockSecond);
        this._second.anchor.x = 0.5;
        this._second.anchor.y = 0.5;
        this.addChild(this._second);
    }

    function _$af870493() {
        var hour = $gameTime.getTime("hour");
        if (hour > 12) {
            hour -= 12;
        }
        var minute = $gameTime.getTime("minute");
        var sec = $gameTime.getTime("second");
        this._hour.rotation = hour / 12 * 2 * Math.PI;
        this._hour.rotation += minute / 60 / 12 * 2 * Math.PI;
        this._minute.rotation = minute / 60 * 2 * Math.PI;
        this._minute.rotation += sec / 60 / 60 * 2 * Math.PI;
        if (Dhoom.MobileMainMenu.clockSecAuto) {
            this._tempSec += Dhoom.MobileMainMenu.clockSecSpeed;
            if (this._tempSec > 60) {
                this._tempSec -= 60;
            }
            this._second.rotation = this._tempSec / 60 * 2 * Math.PI;
        } else {
            this._second.rotation = sec / 60 * 2 * Math.PI;
        }
    }

    function _$af870494() {
        Sprite.prototype.update.call(this);
        this.updateClock();
    }

    function _$af870495() {
        this.initialize.apply(this, arguments);
    }

    function _$af870496() {
        Sprite.prototype.initialize.call(this);
        this.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.quitFilename);
        this.x = Dhoom.MobileMainMenu.quitPos[0];
        this.y = Dhoom.MobileMainMenu.quitPos[1];
        this._active = false;
        this.createCursor();
    }

    function _$af870497() {
        this._cursor = new Sprite();
        if (!Dhoom.MobileMainMenu.mogCursor) {
            this._cursor.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.menuCursor);
            this._cursor.x = Dhoom.MobileMainMenu.quitCursor[0];
            this._cursor.y = Dhoom.MobileMainMenu.quitCursor[1];
            this._cursor.visible = false;
            this.addChild(this._cursor);
        }
    }

    function _$af870498() {
        Sprite.prototype.update.call(this);
        this._cursor.visible = this._active;
        if (Dhoom.MobileMainMenu.mogCursor && this._active) {
            this.set_mcursor_data();
        }
    }

    function _$af870499() {
        var x = this.canvasToLocalX(TouchInput.mouseX);
        var y = this.canvasToLocalY(TouchInput.mouseY);
        return x >= 0 && y >= 0 && x < this.width && y < this.height;
    }

    function _$af870500(x) {
        return (x - this.parent.x) / this.parent.scale.x - this.x;
    }

    function _$af870501(y) {
        return (y - this.parent.y) / this.parent.scale.y - this.y;
    }

    function _$af870502() {
        var rect = this.bitmap.rect;
        $gameTemp._mcursorData[0] = true;
        $gameTemp._mcursorData[1] = 1;
        $gameTemp._mcursorData[2] = this.x + rect.x;
        $gameTemp._mcursorData[3] = this.y + rect.y + (rect.height / 2);
    }

    function _$af870509() {
        this.initialize.apply(this, arguments);
    }

    function _$af870510() {
        Sprite.prototype.initialize.call(this);
        this.x = Dhoom.MobileMainMenu.hudPos[0];
        this.y = Dhoom.MobileMainMenu.hudPos[1];
        this._tempSec = 0;
        this.refreshBitmap();
        this.createSprites();
        this.updateClock();
    }

    function _$af870511() {
        this._period = Dhoom.MobileMainMenu.getTimePeriod();
        var filename = Dhoom.MobileMainMenu.hudFilename.format(this._period);
        this.bitmap = ImageManager.loadSystem(filename);
    }

    function _$af870512() {
        this._hour = new Sprite();
        this._hour.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.hudHourFilename);
        this._hour.anchor.x = 0.5;
        this._hour.anchor.y = 0.5;
        this._hour.x = Dhoom.MobileMainMenu.hudHourPos[0];
        this._hour.y = Dhoom.MobileMainMenu.hudHourPos[1];
        this.addChild(this._hour);
        this._minute = new Sprite();
        this._minute.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.hudMinuteFilename);
        this._minute.anchor.x = 0.5;
        this._minute.anchor.y = 0.5;
        this._minute.x = Dhoom.MobileMainMenu.hudMinutePos[0];
        this._minute.y = Dhoom.MobileMainMenu.hudMinutePos[1];
        this.addChild(this._minute);
        this._second = new Sprite();
        this._second.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.hudSecondFilename);
        this._second.anchor.x = 0.5;
        this._second.anchor.y = 0.5;
        this._second.x = Dhoom.MobileMainMenu.hudSecondPos[0];
        this._second.y = Dhoom.MobileMainMenu.hudSecondPos[1];
        this.addChild(this._second);
    }

    function _$af870513() {
        var hour = $gameTime.getTime("hour");
        if (hour > 12) {
            hour -= 12;
        }
        var minute = $gameTime.getTime("minute");
        var sec = $gameTime.getTime("second");
        this._hour.rotation = hour / 12 * 2 * Math.PI;
        this._hour.rotation += minute / 60 / 12 * 2 * Math.PI;
        this._minute.rotation = minute / 60 * 2 * Math.PI;
        this._minute.rotation += sec / 60 / 60 * 2 * Math.PI;
        if (Dhoom.MobileMainMenu.hudSecondAuto) {
            this._tempSec += Dhoom.MobileMainMenu.hudSecondSpeed;
            if (this._tempSec > 60) {
                this._tempSec -= 60;
            }
            this._second.rotation = this._tempSec / 60 * 2 * Math.PI;
        } else {
            this._second.rotation = sec / 60 * 2 * Math.PI;
        }
    }

    function _$af870514() {
        Sprite.prototype.update.call(this);
        this.visible = $gameSwitches.value(Dhoom.MobileMainMenu.hudSwitch);
        if (this._period !== Dhoom.MobileMainMenu.getTimePeriod()) {
            this.refreshBitmap();
        }
        this.updateClock();
    }

    function _$af870515() {
        this.initialize.apply(this, arguments);
    }

    function _$af870516() {
        var rect = Dhoom.MobileMainMenu.goldRect;
        Window_Base.prototype.initialize.call(this, rect[0], rect[1], rect[2], rect[3]);
        this._active = false;
        this.opacity = Dhoom.MobileMainMenu.goldOpacity;
        this.createBackground();
        this.createCursor();
        this.refresh();
    }

    function _$af870517() {
        return Dhoom.MobileMainMenu.goldPadding;
    }

    function _$af870518() {
        this._background = new Sprite();
        this._background.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.goldBackground);
        this._background.x = Dhoom.MobileMainMenu.goldBackgroundPos[0];
        this._background.y = Dhoom.MobileMainMenu.goldBackgroundPos[1];
        this.addChildToBack(this._background);
    }

    function _$af870519() {
        this._cursorSprite = new Sprite();
        if (!Dhoom.MobileMainMenu.mogCursor) {
            this._cursorSprite.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.menuCursor);
            this._cursorSprite.x = Dhoom.MobileMainMenu.goldCursorPos[0];
            this._cursorSprite.y = Dhoom.MobileMainMenu.goldCursorPos[1];
            this._cursorSprite.visible = false;
            this.addChild(this._cursorSprite);
        }
    }

    function _$af870520() {
        this.contents.clear();
        this.contents.changeTextStyle(Dhoom.MobileMainMenu.goldFont);
        var align = Dhoom.MobileMainMenu.goldFont.align;
        var text = Dhoom.MobileMainMenu.goldText.format(this.currencyUnit(), this.value());
        this.contents.drawText(text, 0, 0, this.contents.width, this.contents.height, align);
    }

    function _$af870521() {
        var x = this.canvasToLocalX(TouchInput.mouseX);
        var y = this.canvasToLocalY(TouchInput.mouseY);
        return x >= 0 && y >= 0 && x < this.width && y < this.height;
    }

    function _$af870522(x) {
        return (x - this.parent.x) / this.parent.scale.x - this.x;
    }

    function _$af870523(y) {
        return (y - this.parent.y) / this.parent.scale.y - this.y;
    }

    function _$af870524() {
        Window_Gold.prototype.update.call(this);
        this._cursorSprite.visible = this._active;
        if (Dhoom.MobileMainMenu.mogCursor && this._active) {
            this.set_mcursor_data();
        }
    }

    function _$af870525() {
        var rect = this.contents.rect;
        $gameTemp._mcursorData[0] = true;
        $gameTemp._mcursorData[1] = 1;
        $gameTemp._mcursorData[2] = this.x + rect.x;
        $gameTemp._mcursorData[3] = this.y + rect.y + (rect.height / 2);
    }

    function _$af870526() {
        this.initialize.apply(this, arguments);
    }

    function _$af870527() {
        ImageManager.loadSystem(Dhoom.MobileMainMenu.commandArrowFilename);
        var rect = Dhoom.MobileMainMenu.commandRect;
        this._bitmapNotReady = false;
        this._arrowFrame = 0;
        this._arrowDur = Dhoom.MobileMainMenu.commandArrowDur;
        this.initAlert();
        Window_Command.prototype.initialize.call(this, rect[0], rect[1]);
        this.createCursor();
        this.createBackground();
        this.opacity = Dhoom.MobileMainMenu.commandOpacity;
        this.selectLast();
    }

    function _$af870528() {
        this._alertDur = Dhoom.MobileMainMenu.alertDur;
        this._alertBlink = (this._alertDur > 0);
        this._alerts = [];
        for (var i = 0; i < Dhoom.MobileMainMenu.commandCommands.length; i++) {
            this._alerts[i] = $gameSystem._menuAlertCommands[i];
        }
    }

    function _$af870529() {
        this._background = new Sprite();
        this._background.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.commandBackground);
        this._background.x = Dhoom.MobileMainMenu.commandBackgroundPos[0];
        this._background.y = Dhoom.MobileMainMenu.commandBackgroundPos[1];
        this.addChildToBack(this._background);
    }

    function _$af870530() {
        this._cursorSprite = new Sprite();
        if (!Dhoom.MobileMainMenu.mogCursor) {
            this._cursorSprite.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.menuCursor);
            this.addChild(this._cursorSprite);
        }
    }

    function _$af870531() {
        return Dhoom.MobileMainMenu.commandRect[2];
    }

    function _$af870532() {
        return Dhoom.MobileMainMenu.commandRect[3];
    }

    function _$af870533() {
        return Dhoom.MobileMainMenu.commandPadding;
    }

    function _$af870534() {
        return this.maxItems();
    }

    function _$af870535() {
        return Dhoom.MobileMainMenu.commandCol;
    }

    function _$af870536() {
        return Dhoom.MobileMainMenu.commandSpacing[0];
    }

    function _$af870537() {
        return Dhoom.MobileMainMenu.commandItemSize[0];
    }

    function _$af870538() {
        return Dhoom.MobileMainMenu.commandItemSize[1];
    }

    function _$af870539(index) {
        var rect = Window_Selectable.prototype.itemRect.call(this, index);
        rect.y += Math.floor(index / this.maxCols()) * Dhoom.MobileMainMenu.commandSpacing[1];
        return rect;
    }

    function _$af870540() {
        return Dhoom.MobileMainMenu.commandFont.align;
    }

    function _$af870541() {
        this._lastCommandSymbol = null;
    }

    function _$af870542() {
        for (var i = 0; i < Dhoom.MobileMainMenu.commandCommands.length; i++) {
            var com = Dhoom.MobileMainMenu.commandCommands[i];
            this.addCommand(com[1], i, com[3] ? $gameSwitches.value(com[3]) : true);
        }
    }

    function _$af870543() {
        this._alertState = 0;
        this._alertDur = Dhoom.MobileMainMenu.alertDur;
        Window_Command.prototype.refresh.call(this);
    }

    function _$af870544(index) {
        var rect = this.itemRect(index);
        var align = this.itemTextAlign();
        this.contents.changeTextStyle(Dhoom.MobileMainMenu.commandFont);
        this.changePaintOpacity(this.isCommandEnabled(index));
        var iconPos = Dhoom.MobileMainMenu.commandIconPos;
        var bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.commandCommands[index][0]);
        if (!bitmap.isReady()) {
            this._bitmapNotReady = true;
        }
        this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, rect.x + iconPos[0], rect.y + iconPos[1]);
        if (this._alertBlink && this._alertState === 0 && this._alerts[index]) {
            var bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.alertFilename);
            if (!bitmap.isReady()) {
                this._bitmapNotReady = true;
            }
            var pos = Dhoom.MobileMainMenu.alertPos;
            this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, rect.x + pos[0], rect.y + pos[1]);
        }
        var textRect = Dhoom.MobileMainMenu.commandTextRect;
        this.contents.drawText(this.commandName(index), rect.x + textRect[0], rect.y + textRect[1], textRect[2], textRect[3], align);
    }

    function _$af870545() {
        _$af870526._lastCommandSymbol = this.currentSymbol();
        Window_Command.prototype.processOk.call(this);
    }

    function _$af870546() {
        this.selectSymbol(_$af870526._lastCommandSymbol);
    }

    function _$af870547() {
        Window_Command.prototype.update.call(this);
        if (this._arrowNeedRefresh && ImageManager.isReady()) {
            this._refreshArrows();
            this._arrowNeedRefresh = false;
        }
        if (this._bitmapNotReady && ImageManager.isReady()) {
            this._bitmapNotReady = false;
            this.refresh();
        }
        this.updateAlerts();
    }

    function _$af870548() {
        if (!this._alertBlink) {
            return;
        }
        this._alertDur--;
        if (this._alertDur <= 0) {
            this._alertState = this._alertState === 0 ? 1 : 0;
            this._alertDur = Dhoom.MobileMainMenu.alertDur;
            for (var i = 0; i < this._alerts.length; i++) {
                if (this._alerts[i]) {
                    this.redrawItem(i);
                }
            }
        }
    }

    function _$af870549() {
        return false;
    }

    function _$af870550() {
        Window_Command.prototype.updateCursor.call(this);
        if (this._cursorSprite) {
            var rect = this.itemRect(this.index());
            this._cursorSprite.x = Dhoom.MobileMainMenu.commandCursorPos[0] + rect.x;
            this._cursorSprite.y = Dhoom.MobileMainMenu.commandCursorPos[1] + rect.y;
            this._cursorSprite.visible = this.isOpenAndActive();
        }
    }

    function _$af870551() {
        var w = this._width;
        var h = this._height;
        this._downArrowSprite.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.commandArrowFilename);
        if (!this._downArrowSprite.bitmap.isReady()) {
            this._arrowNeedRefresh = true;
        }
        this._downArrowSprite.anchor.x = 0.5;
        this._downArrowSprite.anchor.y = 0.5;
        this._downArrowSprite.move(w / 2, h);
        this._upArrowSprite.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.commandArrowFilename);
        this._upArrowSprite.scale.y = -1;
        this._upArrowSprite.anchor.x = 0.5;
        this._upArrowSprite.anchor.y = 0.5;
        this._upArrowSprite.move(w / 2, 0);
        this._refreshArrowsFrame();
    }

    function _$af870552() {
        var a = this._downArrowSprite.bitmap.width / Dhoom.MobileMainMenu.commandArrowFrame;
        var b = this._downArrowSprite.bitmap.height;
        this._downArrowSprite.setFrame(this._arrowFrame * a, 0, a, b);
        this._upArrowSprite.setFrame(this._arrowFrame * a, 0, a, b);
    }

    function _$af870553() {
        Window_Command.prototype._updateArrows.call(this);
        this._arrowDur--;
        if (this._arrowDur <= 0) {
            this._arrowFrame = this._arrowFrame < Dhoom.MobileMainMenu.commandArrowFrame - 1 ? this._arrowFrame + 1 : 0;
            this._arrowDur = Dhoom.MobileMainMenu.commandArrowDur;
            this._refreshArrowsFrame();
        }
    }

    function _$af870554(wrap) {
        var index = this.index();
        var maxItems = this.maxItems();
        var maxCols = this.maxCols();
        if (index < maxItems - maxCols || (wrap && maxCols === 1)) {
            this.select((index + maxCols) % maxItems);
        } else {
            if (index / maxCols < (maxItems - 1) / maxCols) {
                this.select(this.maxItems() - 1);
            }
        }
    }

    function _$af870555() {
        var x = this.canvasToLocalX(TouchInput.mouseX);
        var y = this.canvasToLocalY(TouchInput.mouseY);
        return x >= 0 && y >= 0 && x < this.width && y < this.height;
    }

    function _$af870556(x) {
        return (x - this.parent.x) / this.parent.scale.x - this.x;
    }

    function _$af870557(y) {
        return (y - this.parent.y) / this.parent.scale.y - this.y;
    }

    function _$af870558() {
        this.initialize.apply(this, arguments);
    }

    function _$af870559() {
        var rect = Dhoom.MobileMainMenu.timeRect;
        Window_Base.prototype.initialize.call(this, rect[0], rect[1], rect[2], rect[3]);
        var parameters = PluginManager.parameters("GameTime");
        this._defaultDaysWeek = "\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"";
        this._daysWeek = eval("[" + (parameters["Days of the Week"] || this._defaultDaysWeek) + "]");
        this._defaultMonthNames = "\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"";
        this._monthNames = eval("[" + (parameters["Month Names"] || this._defaultMonthNames) + "]");
        this._yearPost = (parameters["Year Post"] || "A.D.");
        this._hourtf = (parameters["Twenty Four Hour Mode"] || "false").toLowerCase() == "true";
        this.opacity = Dhoom.MobileMainMenu.timeOpacity;
        this.createBackground();
        this._lastData = [];
        this.updateData();
    }

    function _$af870560() {
        this._background = new Sprite();
        this._background.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.timeBackground);
        this._background.x = Dhoom.MobileMainMenu.timeBackgroundPos[0];
        this._background.y = Dhoom.MobileMainMenu.timeBackgroundPos[1];
        this.addChildToBack(this._background);
    }

    function _$af870561() {
        return Dhoom.MobileMainMenu.timePadding;
    }

    function _$af870562() {
        this.contents.clear();
        var font = Dhoom.MobileMainMenu.timeFont;
        this.contents.changeTextStyle(font);
        var data = this._lastData;
        for (var i = 0; i < Dhoom.MobileMainMenu.timeText.length; i++) {
            var text = Dhoom.MobileMainMenu.timeText[i].format(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10]);
            this.contents.drawText(text, this.textPadding(), this.textPadding() + i * (font.size + this.textPadding()), this.contents.width - this.textPadding() * 2, font.size, font.align);
        }
    }

    function _$af870563() {
        Window_Base.prototype.update.call(this);
        this.updateData();
    }

    function _$af870564() {
        var dnum = $gameTime.getTime("day") + 1;
        var day = this._daysWeek[$gameTime.getTime("dayweek")];
        var mnum = $gameTime.getTime("month") + 1;
        var month = this._monthNames[mnum - 1];
        var year = $gameTime.getTime("year");
        var ypost = this._yearPost;
        var hour = $gameTime.getTime("hour");
        var minute = $gameTime.getTime("minute");
        if (minute < 10) {
            minute = "0" + minute;
        }
        var sec = $gameTime.getTime("second");
        if (sec < 10) {
            sec = "0" + sec;
        }
        var ampm = this._hourtf ? "" : hour > 11 ? "PM" : "AM";
        if (!this._hourtf) {
            if (hour === 0) {
                hour = 12;
            }
            if (hour > 12) {
                hour -= 12;
            }
        }
        var period = Dhoom.MobileMainMenu.getTimePeriod();
        var data = this._lastData;
        if (data[0] !== dnum || data[1] !== day || data[2] !== mnum || data[3] !== month || data[4] !== year || data[5] !== ypost || data[6] !== hour || data[7] !== minute || data[8] !== sec || data[9] !== ampm || data[10] !== period) {
            this._lastData = [dnum, day, mnum, month, year, ypost, hour, minute, sec, ampm, period];
            this.refresh();
        }
    }

    function _$af870565() {
        this.initialize.apply(this, arguments);
    }

    function _$af870566() {
        this.loadSourceData();
        var rect = Dhoom.MobileMainMenu.newsRect;
        Window_Base.prototype.initialize.call(this, rect[0], rect[1], rect[2], rect[3]);
        if (this.isScrolling()) {
            this.origin.x = -Window_Base.prototype.contentsWidth.call(this);
        }
        this.opacity = Dhoom.MobileMainMenu.newsOpacity;
        this.createBackground();
        this.refresh();
    }

    function _$af870567() {
        return Dhoom.MobileMainMenu.newsPadding;
    }

    function _$af870568() {
        var bitmap = new Bitmap(32, 32);
        bitmap.changeTextStyle(Dhoom.MobileMainMenu.newsFont);
        return this.data() ? bitmap.measureTextWidth(this.data()) : Window_Base.prototype.contentsWidth.call(this);
    }

    function _$af870569() {
        if (Utils.isNwjs()) {
            var data = null;
            var fs = require("fs");
            var path = require("path");
            var base = path.dirname(process.mainModule.filename);
            var filePath = path.join(base, Dhoom.MobileMainMenu.newsSource);
            if (fs.existsSync(filePath)) {
                data = fs.readFileSync(filePath, { encoding: "utf8" });
            }
            this._source = JSON.parse(data);
        } else {
            DataManager.loadDataFile("$dhoomMobileMenuNewsSource", Dhoom.MobileMainMenu.newsSource.split("/")[1]);
        }
    }

    function _$af870570() {
        this._background = new Sprite();
        this._background.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.newsBackground);
        this._background.x = Dhoom.MobileMainMenu.newsBackgroundPos[0];
        this._background.y = Dhoom.MobileMainMenu.newsBackgroundPos[1];
        this.addChildToBack(this._background);
    }

    function _$af870571() {
        this.contents.clear();
        var text = this.data();
        this.contents.changeTextStyle(Dhoom.MobileMainMenu.newsFont);
        this.contents.drawText(text, 0, 0, this.contents.width, this.contents.height);
    }

    function _$af870572() {
        if (!this._source && $dhoomMobileMenuNewsSource) {
            this._source = $dhoomMobileMenuNewsSource;
        }
        return this._source ? this._source[$gameVariables.value(Dhoom.MobileMainMenu.newsVar)] : "";
    }

    function _$af870573() {
        Window_Base.prototype.update.call(this);
        this.updateContentsScroll();
    }

    function _$af870574() {
        return this.contents.width > Window_Base.prototype.contentsWidth.call(this);
    }

    function _$af870575() {
        if (this.isScrolling()) {
            this.origin.x += Dhoom.MobileMainMenu.newsScroll;
            if (this.origin.x === this.contents.width) {
                this.origin.x = -Window_Base.prototype.contentsWidth.call(this);
            }
        }
    }

    function _$af870576() {
        Dhoom.MobileMainMenu.Scene_Menu_create.call(this);
        this.createTimeWindow();
        this.createClockSprite();
        this.createNewsWindow();
        this.createQuitSprite();
        this._statusWindow.hide();
    }

    function _$af870577() {
        Scene_MenuBase.prototype.createBackground.call(this);
        this._menuBackgroundSprite = new Sprite();
        this._menuBackgroundSprite.bitmap = ImageManager.loadSystem(Dhoom.MobileMainMenu.menuBackground);
        this.addChild(this._menuBackgroundSprite);
    }

    function _$af870578() {
        this._goldWindow = new _$af870515();
        this.addChild(this._goldWindow);
    }

    function _$af870579() {
        this._commandWindow = new _$af870526();
        this._commandWindow.setHandler("ok", this.onCommandOk.bind(this));
        this._commandWindow.setHandler("cancel", this.popScene.bind(this));
        this.addChild(this._commandWindow);
    }

    function _$af870580() {
        this._timeWindow = new _$af870558();
        this.addChild(this._timeWindow);
    }

    function _$af870581() {
        this._clockSprite = new _$af870490();
        this.addChild(this._clockSprite);
    }

    function _$af870582() {
        this._newsWindow = new _$af870565();
        this.addChild(this._newsWindow);
    }

    function _$af870583() {
        this._quitSprite = new _$af870495();
        this.addChild(this._quitSprite);
    }

    function _$af870585() {}

    function _$af870586() {
        if (Imported.TDDP_MouseSystemEx && TDDP_MouseSystemEx.useCustomCursor) {
            TDDP_MouseSystemEx._resetCustomCursor();
        }
        $gameSystem._menuAlertCommands[this._commandWindow.index()] = false;
        var act = Dhoom.MobileMainMenu.commandCommands[this._commandWindow.index()][2];
        if (typeof act === "number") {
            $gameTemp.reserveCommonEvent(act);
            SceneManager["goto"](Scene_Map);
        } else {
            SceneManager.push(act);
        }
    }

    function _$af870587() {
        this.updateMouseCursor();
        this.updateWindowSelection();
        Scene_MenuBase.prototype.update.call(this);
    }

    function _$af870588() {
        if (Input.isTriggered("cancel") || TouchInput.isCancelled()) {
            SoundManager.playCancel();
            this.popScene();
            Input.update();
            TouchInput.update();
            if (Imported.TDDP_MouseSystemEx && TDDP_MouseSystemEx.useCustomCursor) {
                TDDP_MouseSystemEx._resetCustomCursor();
            }
            return;
        }
        if (!this._quitSprite._active && this._quitSprite.isHoveredInsideFrame()) {
            Input.update();
            TouchInput.update();
            this._quitSprite._active = true;
            this._commandWindow.deactivate();
            this._goldWindow._active = false;
            SoundManager.playCursor();
        }
        if (!this._goldWindow._active && this._goldWindow.isHoveredInsideFrame()) {
            Input.update();
            TouchInput.update();
            this._goldWindow._active = true;
            this._commandWindow.deactivate();
            this._quitSprite._active = false;
            SoundManager.playCursor();
        }
        if (!this._commandWindow.active && this._commandWindow.isHoveredInsideFrame()) {
            Input.update();
            TouchInput.update();
            this._commandWindow.activate();
            this._goldWindow._active = false;
            this._quitSprite._active = false;
            this._commandWindow.onTouch(false);
            SoundManager.playCursor();
        }
        if (this._quitSprite._active) {
            if (Input.isTriggered("left") || Input.isTriggered("right")) {
                Input.update();
                TouchInput.update();
                this._quitSprite._active = false;
                this._goldWindow._active = true;
                SoundManager.playCursor();
            }
            if (Input.isTriggered("up")) {
                Input.update();
                TouchInput.update();
                this._commandWindow.activate();
                this._goldWindow._active = false;
                this._quitSprite._active = false;
                SoundManager.playCursor();
            }
            if (Input.isTriggered("ok") || (TouchInput.isTriggered() && this._quitSprite.isHoveredInsideFrame())) {
                SoundManager.playOk();
                SceneManager.push(Scene_GameEnd);
                if (Imported.TDDP_MouseSystemEx && TDDP_MouseSystemEx.useCustomCursor) {
                    TDDP_MouseSystemEx._resetCustomCursor();
                }
            }
        } else if (this._goldWindow._active) {
            if (Input.isTriggered("left") || Input.isTriggered("right")) {
                Input.update();
                TouchInput.update();
                this._goldWindow._active = false;
                this._quitSprite._active = true;
                SoundManager.playCursor();
            }
            if (Input.isTriggered(this._goldWindow.y < this._commandWindow.y ? "down" : "up")) {
                Input.update();
                TouchInput.update();
                this._goldWindow._active = false;
                this._commandWindow.activate();
                SoundManager.playCursor();
            }
            if (Input.isTriggered("ok") || (TouchInput.isTriggered() && this._goldWindow.isHoveredInsideFrame())) {
                SoundManager.playOk();
                if (typeof Dhoom.MobileMainMenu.goldActivation === "number") {
                    $gameTemp.reserveCommonEvent(Dhoom.MobileMainMenu.goldActivation);
                    SceneManager["goto"](Scene_Map);
                } else {
                    SceneManager.push(Dhoom.MobileMainMenu.goldActivation);
                }
                if (Imported.TDDP_MouseSystemEx && TDDP_MouseSystemEx.useCustomCursor) {
                    TDDP_MouseSystemEx._resetCustomCursor();
                }
            }
        } else {
            if (Input.isTriggered("left") && this._commandWindow.index() % this._commandWindow.maxCols() === 0) {
                Input.update();
                TouchInput.update();
                this._goldWindow._active = true;
                this._commandWindow.deactivate();
                SoundManager.playCursor();
            }
            if (Input.isTriggered("right") && this._commandWindow.index() % this._commandWindow.maxCols() === this._commandWindow.maxCols() - 1) {
                Input.update();
                TouchInput.update();
                this._quitSprite._active = true;
                this._commandWindow.deactivate();
                SoundManager.playCursor();
            }
            if (Input.isTriggered("up")) {
                var index = this._commandWindow.index();
                this._commandWindow.cursorUp();
                if (index === this._commandWindow.index()) {
                    Input.update();
                    TouchInput.update();
                    this._goldWindow._active = true;
                    this._commandWindow.deactivate();
                    SoundManager.playCursor();
                } else {
                    this._commandWindow.select(index);
                }
            }
            if (Input.isTriggered("down")) {
                var index = this._commandWindow.index();
                this._commandWindow.cursorDown();
                if (index === this._commandWindow.index()) {
                    Input.update();
                    TouchInput.update();
                    this._quitSprite._active = true;
                    this._commandWindow.deactivate();
                    SoundManager.playCursor();
                } else {
                    this._commandWindow.select(index);
                }
            }
        }
    }

    function _$af870589() {
        if (!Imported.TDDP_MouseSystemEx || !TDDP_MouseSystemEx.useCustomCursor) {
            return;
        }
        if (this.checkButtonMouseHover(this._quitSprite) || this.checkButtonMouseHover(this._goldWindow) || this.checkButtonMouseHover(this._commandWindow)) {
            TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.MobileMainMenu.mouseHover));
        } else {
            TDDP_MouseSystemEx._resetCustomCursor();
        }
    }

    function _$af870590(sprite) {
        var x = sprite.canvasToLocalX(TouchInput._mouseX);
        var y = sprite.canvasToLocalY(TouchInput._mouseY);
        return x >= 0 && y >= 0 && x < sprite.width && y < sprite.height;
    }

    function _$af870592() {
        Dhoom.MobileMainMenu.Scene_Map_createAllWindows.call(this);
        this._spriteTimeHUD = new _$af870509();
        this.addChild(this._spriteTimeHUD);
    }

    Sprite_MenuClock = _$af870490;
    Sprite_MenuQuit = _$af870495;
    Sprite_MapClock = _$af870509;
    Window_MenuGold = _$af870515;
    Window_MobileMenuCommand = _$af870526;
    Window_MenuTime = _$af870558;
    Window_MenuNews = _$af870565;

    Dhoom.Parameters = PluginManager.parameters("DhoomMobileMainMenu");
    Dhoom.MobileMainMenu.mouseHover = String(Dhoom.Parameters["Hover Mouse Cursor"]);
    Dhoom.MobileMainMenu.menuBackground = Dhoom.Parameters["Menu Background"];
    Dhoom.MobileMainMenu.menuCursor = Dhoom.Parameters["Menu Cursor Filename"];
    Dhoom.MobileMainMenu.mogCursor = eval(Dhoom.Parameters["Menu Cursor Use Mog"]);
    Dhoom.MobileMainMenu.timePeriod = eval(Dhoom.Parameters["Time Period"]);
    Dhoom.MobileMainMenu.hudSwitch = Number(Dhoom.Parameters["Time HUD Switch"]);
    Dhoom.MobileMainMenu.hudPos = JSON.parse(Dhoom.Parameters["Time HUD Position"]);
    Dhoom.MobileMainMenu.hudFilename = String(Dhoom.Parameters["Time HUD Filename"]);
    Dhoom.MobileMainMenu.hudHourPos = JSON.parse(Dhoom.Parameters["Time HUD Hour Arm Position"]);
    Dhoom.MobileMainMenu.hudHourFilename = String(Dhoom.Parameters["Time HUD Hour Arm Filename"]);
    Dhoom.MobileMainMenu.hudMinutePos = JSON.parse(Dhoom.Parameters["Time HUD Minute Arm Position"]);
    Dhoom.MobileMainMenu.hudMinuteFilename = String(Dhoom.Parameters["Time HUD Minute Arm Filename"]);
    Dhoom.MobileMainMenu.hudSecondPos = JSON.parse(Dhoom.Parameters["Time HUD Second Arm Position"]);
    Dhoom.MobileMainMenu.hudSecondFilename = String(Dhoom.Parameters["Time HUD Second Arm Filename"]);
    Dhoom.MobileMainMenu.hudSecondAuto = eval(Dhoom.Parameters["Time HUD Second Arm Auto Rotate"]);
    Dhoom.MobileMainMenu.hudSecondSpeed = Number(Dhoom.Parameters["Time HUD Second Arm Rotate Speed"]);
    Dhoom.MobileMainMenu.goldActivation = eval(Dhoom.Parameters["Gold Window Activation"]);
    Dhoom.MobileMainMenu.goldRect = JSON.parse(Dhoom.Parameters["Gold Window Rect"]);
    Dhoom.MobileMainMenu.goldOpacity = Number(Dhoom.Parameters["Gold Window Opacity"]);
    Dhoom.MobileMainMenu.goldPadding = Number(Dhoom.Parameters["Gold Window Padding"]);
    Dhoom.MobileMainMenu.goldBackground = String(Dhoom.Parameters["Gold Window Background"]);
    Dhoom.MobileMainMenu.goldBackgroundPos = JSON.parse(Dhoom.Parameters["Gold Window Background Position"]);
    Dhoom.MobileMainMenu.goldCursorPos = JSON.parse(Dhoom.Parameters["Gold Window Cursor Position"]);
    Dhoom.MobileMainMenu.goldText = String(Dhoom.Parameters["Gold Window Text"]);
    Dhoom.MobileMainMenu.goldFont = {
        name: String(Dhoom.Parameters["Gold Window Font Name"]),
        size: Number(Dhoom.Parameters["Gold Window Font Size"]),
        color: String(Dhoom.Parameters["Gold Window Font Color"]),
        outlineWidth: Number(Dhoom.Parameters["Gold Window Font Outline Width"]),
        outlineColor: String(Dhoom.Parameters["Gold Window Font Outline Color"]),
        bold: JSON.parse(Dhoom.Parameters["Gold Window Font Bold"].toLowerCase()),
        italic: JSON.parse(Dhoom.Parameters["Gold Window Font Italic"].toLowerCase()),
        align: String(Dhoom.Parameters["Gold Window Font Alignment"])
    };
    Dhoom.MobileMainMenu.alertFilename = String(Dhoom.Parameters["Command Alert Filename"]);
    Dhoom.MobileMainMenu.alertPos = JSON.parse(Dhoom.Parameters["Command Alert Position"]);
    Dhoom.MobileMainMenu.alertDur = Number(Dhoom.Parameters["Command Alert Blink Duration"]);
    Dhoom.MobileMainMenu.commandArrowFilename = String(Dhoom.Parameters["Command Window Arrow Filename"]);
    Dhoom.MobileMainMenu.commandArrowFrame = Number(Dhoom.Parameters["Command Window Arrow Frame"]);
    Dhoom.MobileMainMenu.commandArrowDur = Number(Dhoom.Parameters["Command Window Arrow Duration"]);
    Dhoom.MobileMainMenu.commandRect = JSON.parse(Dhoom.Parameters["Command Window Rect"]);
    Dhoom.MobileMainMenu.commandOpacity = Number(Dhoom.Parameters["Command Window Opacity"]);
    Dhoom.MobileMainMenu.commandPadding = Number(Dhoom.Parameters["Command Window Padding"]);
    Dhoom.MobileMainMenu.commandBackground = String(Dhoom.Parameters["Command Window Background"]);
    Dhoom.MobileMainMenu.commandBackgroundPos = JSON.parse(Dhoom.Parameters["Command Window Background Position"]);
    Dhoom.MobileMainMenu.commandCommands = eval(Dhoom.Parameters["Menu Commands"]);
    Dhoom.MobileMainMenu.commandCol = Number(Dhoom.Parameters["Command Window Column"]);
    Dhoom.MobileMainMenu.commandSpacing = JSON.parse(Dhoom.Parameters["Command Window Spacing"]);
    Dhoom.MobileMainMenu.commandItemSize = JSON.parse(Dhoom.Parameters["Command Window Command Size"]);
    Dhoom.MobileMainMenu.commandIconPos = JSON.parse(Dhoom.Parameters["Command Window Icon Position"]);
    Dhoom.MobileMainMenu.commandCursorPos = JSON.parse(Dhoom.Parameters["Command Window Cursor Position"]);
    Dhoom.MobileMainMenu.commandTextRect = JSON.parse(Dhoom.Parameters["Command Window Text Rect"]);
    Dhoom.MobileMainMenu.commandFont = {
        name: String(Dhoom.Parameters["Command Window Font Name"]),
        size: Number(Dhoom.Parameters["Command Window Font Size"]),
        color: String(Dhoom.Parameters["Command Window Font Color"]),
        outlineWidth: Number(Dhoom.Parameters["Command Window Font Outline Width"]),
        outlineColor: String(Dhoom.Parameters["Command Window Font Outline Color"]),
        bold: JSON.parse(Dhoom.Parameters["Command Window Font Bold"].toLowerCase()),
        italic: JSON.parse(Dhoom.Parameters["Command Window Font Italic"].toLowerCase()),
        align: String(Dhoom.Parameters["Command Window Font Alignment"])
    };
    Dhoom.MobileMainMenu.timeRect = JSON.parse(Dhoom.Parameters["Time Window Rect"]);
    Dhoom.MobileMainMenu.timeOpacity = Number(Dhoom.Parameters["Time Window Opacity"]);
    Dhoom.MobileMainMenu.timePadding = Number(Dhoom.Parameters["Time Window Padding"]);
    Dhoom.MobileMainMenu.timeBackground = String(Dhoom.Parameters["Time Window Background"]);
    Dhoom.MobileMainMenu.timeBackgroundPos = JSON.parse(Dhoom.Parameters["Time Window Background Position"]);
    Dhoom.MobileMainMenu.timeText = eval(Dhoom.Parameters["Time Window Text"]);
    Dhoom.MobileMainMenu.timeFont = {
        name: String(Dhoom.Parameters["Time Window Font Name"]),
        size: Number(Dhoom.Parameters["Time Window Font Size"]),
        color: String(Dhoom.Parameters["Time Window Font Color"]),
        outlineWidth: Number(Dhoom.Parameters["Time Window Font Outline Width"]),
        outlineColor: String(Dhoom.Parameters["Time Window Font Outline Color"]),
        bold: JSON.parse(Dhoom.Parameters["Time Window Font Bold"].toLowerCase()),
        italic: JSON.parse(Dhoom.Parameters["Time Window Font Italic"].toLowerCase()),
        align: String(Dhoom.Parameters["Time Window Font Alignment"])
    };
    Dhoom.MobileMainMenu.clockPos = JSON.parse(Dhoom.Parameters["Clock Position"]);
    Dhoom.MobileMainMenu.clockBack = String(Dhoom.Parameters["Clock Background"]);
    Dhoom.MobileMainMenu.clockHour = String(Dhoom.Parameters["Clock Hour Arm"]);
    Dhoom.MobileMainMenu.clockMinute = String(Dhoom.Parameters["Clock Minute Arm"]);
    Dhoom.MobileMainMenu.clockSecond = String(Dhoom.Parameters["Clock Second Arm"]);
    Dhoom.MobileMainMenu.clockSecAuto = eval(Dhoom.Parameters["Clock Second Arm Auto Rotate"]);
    Dhoom.MobileMainMenu.clockSecSpeed = Number(Dhoom.Parameters["Clock Second Arm Rotate Speed"]);
    Dhoom.MobileMainMenu.newsSource = String(Dhoom.Parameters["News Source"]);
    Dhoom.MobileMainMenu.newsVar = Number(Dhoom.Parameters["News Variable ID"]);
    Dhoom.MobileMainMenu.newsScroll = Number(Dhoom.Parameters["News Window Scroll Speed"]);
    Dhoom.MobileMainMenu.newsRect = JSON.parse(Dhoom.Parameters["News Window Rect"]);
    Dhoom.MobileMainMenu.newsOpacity = Number(Dhoom.Parameters["News Window Opacity"]);
    Dhoom.MobileMainMenu.newsPadding = Number(Dhoom.Parameters["News Window Padding"]);
    Dhoom.MobileMainMenu.newsBackground = String(Dhoom.Parameters["News Window Background"]);
    Dhoom.MobileMainMenu.newsBackgroundPos = JSON.parse(Dhoom.Parameters["News Window Background Position"]);
    Dhoom.MobileMainMenu.newsFont = {
        name: String(Dhoom.Parameters["News Window Font Name"]),
        size: Number(Dhoom.Parameters["News Window Font Size"]),
        color: String(Dhoom.Parameters["News Window Font Color"]),
        outlineWidth: Number(Dhoom.Parameters["News Window Font Outline Width"]),
        outlineColor: String(Dhoom.Parameters["News Window Font Outline Color"]),
        bold: JSON.parse(Dhoom.Parameters["News Window Font Bold"].toLowerCase()),
        italic: JSON.parse(Dhoom.Parameters["News Window Font Italic"].toLowerCase())
    };
    Dhoom.MobileMainMenu.quitFilename = String(Dhoom.Parameters["Quit Button Filename"]);
    Dhoom.MobileMainMenu.quitPos = JSON.parse(Dhoom.Parameters["Quit Button Position"]);
    Dhoom.MobileMainMenu.quitCursor = JSON.parse(Dhoom.Parameters["Quit Button Cursor Position"]);
    Dhoom.MobileMainMenu.getTimePeriod = _$af870478;

    Dhoom.MobileMainMenu.Graphics_createGameFontLoader = Graphics._createGameFontLoader;
    Graphics._createGameFontLoader = _$af870479;

    if (typeof Bitmap.prototype.changeTextStyle === "undefined") {
        Dhoom.MobileMainMenu.Bitmap_initialize = Bitmap.prototype.initialize;
        Bitmap.prototype.initialize = _$af870480;
        Dhoom.MobileMainMenu.Bitmap_makeFontNameText = Bitmap.prototype._makeFontNameText;
        Bitmap.prototype._makeFontNameText = _$af870481;
        Bitmap.prototype.changeTextStyle = _$af870482;
        Dhoom.MobileMainMenu.Bitmap_drawTextOutline = Bitmap.prototype._drawTextOutline;
        Bitmap.prototype._drawTextOutline = _$af870483;
    }

    if (typeof TouchInput._mouseX === "undefined") {
        Dhoom.MobileMainMenu.TouchInput_clear = TouchInput.clear;
        TouchInput.clear = _$af870484;
        Object.defineProperty(TouchInput, "mouseX", { get: _$af870485, configurable: true });
        Object.defineProperty(TouchInput, "mouseY", { get: _$af870486, configurable: true });
        Dhoom.MobileMainMenu.TouchInput_onMouseMove = TouchInput._onMouseMove;
        TouchInput._onMouseMove = _$af870487;
    }

    Dhoom.MobileMainMenu.Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = _$af870488;

    Dhoom.MobileMainMenu.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = _$af870489;

    _$af870490.prototype = Object.create(Sprite.prototype);
    _$af870490.prototype.constructor = _$af870490;
    _$af870490.prototype.initialize = _$af870491;
    _$af870490.prototype.createSprites = _$af870492;
    _$af870490.prototype.updateClock = _$af870493;
    _$af870490.prototype.update = _$af870494;

    _$af870495.prototype = Object.create(Sprite.prototype);
    _$af870495.prototype.constructor = _$af870495;
    _$af870495.prototype.initialize = _$af870496;
    _$af870495.prototype.createCursor = _$af870497;
    _$af870495.prototype.update = _$af870498;
    _$af870495.prototype.isHoveredInsideFrame = _$af870499;
    _$af870495.prototype.canvasToLocalX = _$af870500;
    _$af870495.prototype.canvasToLocalY = _$af870501;
    _$af870495.prototype.set_mcursor_data = _$af870502;

    _$af870509.prototype = Object.create(Sprite.prototype);
    _$af870509.prototype.constructor = _$af870509;
    _$af870509.prototype.initialize = _$af870510;
    _$af870509.prototype.refreshBitmap = _$af870511;
    _$af870509.prototype.createSprites = _$af870512;
    _$af870509.prototype.updateClock = _$af870513;
    _$af870509.prototype.update = _$af870514;

    _$af870515.prototype = Object.create(Window_Gold.prototype);
    _$af870515.prototype.constructor = _$af870515;
    _$af870515.prototype.initialize = _$af870516;
    _$af870515.prototype.standardPadding = _$af870517;
    _$af870515.prototype.createBackground = _$af870518;
    _$af870515.prototype.createCursor = _$af870519;
    _$af870515.prototype.refresh = _$af870520;
    _$af870515.prototype.isHoveredInsideFrame = _$af870521;
    _$af870515.prototype.canvasToLocalX = _$af870522;
    _$af870515.prototype.canvasToLocalY = _$af870523;
    _$af870515.prototype.update = _$af870524;
    _$af870515.prototype.set_mcursor_data = _$af870525;

    _$af870526.prototype = Object.create(Window_Command.prototype);
    _$af870526.prototype.constructor = _$af870526;
    _$af870526.prototype.initialize = _$af870527;
    _$af870526.prototype.initAlert = _$af870528;
    _$af870526.prototype.createBackground = _$af870529;
    _$af870526.prototype.createCursor = _$af870530;
    _$af870526.prototype.windowWidth = _$af870531;
    _$af870526.prototype.windowHeight = _$af870532;
    _$af870526.prototype.standardPadding = _$af870533;
    _$af870526.prototype.numVisibleRows = _$af870534;
    _$af870526.prototype.maxCols = _$af870535;
    _$af870526.prototype.spacing = _$af870536;
    _$af870526.prototype.itemWidth = _$af870537;
    _$af870526.prototype.itemHeight = _$af870538;
    _$af870526.prototype.itemRect = _$af870539;
    _$af870526.prototype.itemTextAlign = _$af870540;
    _$af870526.initCommandPosition = _$af870541;
    _$af870526.prototype.makeCommandList = _$af870542;
    _$af870526.prototype.refresh = _$af870543;
    _$af870526.prototype.drawItem = _$af870544;
    _$af870526.prototype.processOk = _$af870545;
    _$af870526.prototype.selectLast = _$af870546;
    _$af870526.prototype.update = _$af870547;
    _$af870526.prototype.updateAlerts = _$af870548;
    _$af870526.prototype.isCursorVisible = _$af870549;
    _$af870526.prototype.updateCursor = _$af870550;
    _$af870526.prototype._refreshArrows = _$af870551;
    _$af870526.prototype._refreshArrowsFrame = _$af870552;
    _$af870526.prototype._updateArrows = _$af870553;
    _$af870526.prototype.cursorDown = _$af870554;
    _$af870526.prototype.isHoveredInsideFrame = _$af870555;
    _$af870526.prototype.canvasToLocalX = _$af870556;
    _$af870526.prototype.canvasToLocalY = _$af870557;

    _$af870558.prototype = Object.create(Window_Base.prototype);
    _$af870558.prototype.constructor = _$af870558;
    _$af870558.prototype.initialize = _$af870559;
    _$af870558.prototype.createBackground = _$af870560;
    _$af870558.prototype.standardPadding = _$af870561;
    _$af870558.prototype.refresh = _$af870562;
    _$af870558.prototype.update = _$af870563;
    _$af870558.prototype.updateData = _$af870564;

    _$af870565.prototype = Object.create(Window_Base.prototype);
    _$af870565.prototype.constructor = _$af870565;
    _$af870565.prototype.initialize = _$af870566;
    _$af870565.prototype.standardPadding = _$af870567;
    _$af870565.prototype.contentsWidth = _$af870568;
    _$af870565.prototype.loadSourceData = _$af870569;
    _$af870565.prototype.createBackground = _$af870570;
    _$af870565.prototype.refresh = _$af870571;
    _$af870565.prototype.data = _$af870572;
    _$af870565.prototype.update = _$af870573;
    _$af870565.prototype.isScrolling = _$af870574;
    _$af870565.prototype.updateContentsScroll = _$af870575;

    Dhoom.MobileMainMenu.Scene_Menu_create = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = _$af870576;
    Scene_Menu.prototype.createBackground = _$af870577;
    Scene_Menu.prototype.createGoldWindow = _$af870578;
    Scene_Menu.prototype.createCommandWindow = _$af870579;
    Scene_Menu.prototype.createTimeWindow = _$af870580;
    Scene_Menu.prototype.createClockSprite = _$af870581;
    Scene_Menu.prototype.createNewsWindow = _$af870582;
    Scene_Menu.prototype.createQuitSprite = _$af870583;
    Scene_Menu.prototype.repositionWindows = _$af870585;
    Scene_Menu.prototype.onCommandOk = _$af870586;
    Scene_Menu.prototype.update = _$af870587;
    Scene_Menu.prototype.updateWindowSelection = _$af870588;
    Scene_Menu.prototype.updateMouseCursor = _$af870589;
    Scene_Menu.prototype.checkButtonMouseHover = _$af870590;

    Dhoom.MobileMainMenu.Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = _$af870592;
}();