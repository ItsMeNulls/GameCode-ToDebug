//=============================================================================
// DhoomLive2DTitleScreen.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_L2DTitle = true;

var Dhoom = Dhoom || {};
Dhoom.L2DTitle = Dhoom.L2DTitle || {};
/*:
 * @plugindesc Dhoom L2DTitle v1.2
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Live2D Layer Z
 * @desc Layer Z position based on DhoomAnimatedTitleBackground. Ex, 3 = This will be in front of 3rd DATB layer.
 * @default 3
 * 
 * @param =====Live2D 1=====
 * @desc
 * @default 
 * 
 * @param Live2D 1 Position
 * @desc Live2D position [[x, y], ...]
 * @default [[0, -350]]
 * 
 * @param Live2D 1 Scale
 * @desc Live2D scale [scale, ...]
 * @default [0.4]
 * 
 * @param Live2D 1 Mirror
 * @desc Mirror the model? [value, ...]
 * @default [true]
 * 
 * @param Live2D 1 Models
 * @desc Live2D Models that will be randomly shown. [[Model Name, Motion Group Name, Motion Index (can be set to random)], ...]
 * @default [['natalie', 'idle', 0]]
 * 
 * @param =====Live2D 2=====
 * @desc
 * @default
 * 
 * @param Live2D 2 Position
 * @desc Live2D position [[x, y], ...]
 * @default [[400, -350], [600, -350]]
 * 
 * @param Live2D 2 Scale
 * @desc Live2D scale [scale, ...]
 * @default [0.4, 0.8]
 * 
 * @param Live2D 2 Mirror
 * @desc Mirror the model? [value, ...]
 * @default [false, true]
 * 
 * @param Live2D 2 Models
 * @desc Live2D Models that will be randomly shown. [[Model Name, Motion Group Name, Motion Index (can be set to random)], ...]
 * @default [['natalie', 'idle', 0], ['wanko', 'shake', 'random']]
 * 
 * @param =====Commands=====
 * @desc
 * @default
 * 
 * @param Command Mouse Cursor
 * @desc Mouse cursor filename when commands is hovered
 * @default select
 * 
 * @param Commands Position
 * @desc Commands position [[Command 1 X, Command 1 Y], ...]
 * @default [[80, 300], [90, 370], [100, 440], [110, 510]]
 * 
 * @param Command Size
 * @desc Command size, [width, height]
 * @default [284, 54]
 * 
 * @param Command Background
 * @desc Command background [normal, selected]
 * @default ['title command background normal', 'title command background selected']
 * 
 * @param Command Background Position
 * @desc Command background position, relative to command position [x, y]
 * @default [0, 0]
 * 
 * @param Command Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default Chewy
 *
 * @param Command Font Size
 * @desc Font size
 * @default 46
 *
 * @param Command Font Color
 * @desc Font color
 * @default #FFFFFF
 *
 * @param Command Font Outline Width
 * @desc Font outline width
 * @default 5
 *
 * @param Command Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Command Font Bold
 * @desc
 * @default false
 *
 * @param Command Font Italic
 * @desc
 * @default false 
 *
 * @help
  (c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
 */

Dhoom.Parameters = PluginManager.parameters('DhoomLive2DTitleScreen');

Dhoom.L2DTitle.l2dZ = Number(Dhoom.Parameters['Live2D Layer Z']);

Dhoom.L2DTitle.l2ds = [];
for (var i = 0; i < 2; i++) {
    Dhoom.L2DTitle.l2ds[i] = {};
    Dhoom.L2DTitle.l2ds[i].pos = JSON.parse(Dhoom.Parameters['Live2D ' + (i + 1) + ' Position']);
    Dhoom.L2DTitle.l2ds[i].scale = JSON.parse(Dhoom.Parameters['Live2D ' + (i + 1) + ' Scale']);
    Dhoom.L2DTitle.l2ds[i].mirror = eval(Dhoom.Parameters['Live2D ' + (i + 1) + ' Mirror']);
    Dhoom.L2DTitle.l2ds[i].models = eval(Dhoom.Parameters['Live2D ' + (i + 1) + ' Models']);
}

Dhoom.L2DTitle.commandMouse = String(Dhoom.Parameters['Command Mouse Cursor']);
Dhoom.L2DTitle.commandPos = JSON.parse(Dhoom.Parameters['Commands Position']);
Dhoom.L2DTitle.commandSize = JSON.parse(Dhoom.Parameters['Command Size']);
Dhoom.L2DTitle.commandBackground = eval(Dhoom.Parameters['Command Background']);
Dhoom.L2DTitle.commandBackgroundPos = JSON.parse(Dhoom.Parameters['Command Background Position']);
Dhoom.L2DTitle.commandFont = {
    name: String(Dhoom.Parameters['Command Font Name']),
    size: Number(Dhoom.Parameters['Command Font Size']),
    color: String(Dhoom.Parameters['Command Font Color']),
    outlineWidth: Number(Dhoom.Parameters['Command Font Outline Width']),
    outlineColor: String(Dhoom.Parameters['Command Font Outline Color']),
    bold: JSON.parse(Dhoom.Parameters['Command Font Bold'].toLowerCase()),
    italic: JSON.parse(Dhoom.Parameters['Command Font Italic'].toLowerCase()),
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Bitmap
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
if (typeof Bitmap.prototype.changeTextStyle === 'undefined') {
    Dhoom.L2DTitle.Bitmap_initialize = Bitmap.prototype.initialize;
    Bitmap.prototype.initialize = function (width, height) {
        Dhoom.L2DTitle.Bitmap_initialize.call(this, width, height);
        this.fontBold = false;
    };

    Dhoom.L2DTitle.Bitmap_makeFontNameText = Bitmap.prototype._makeFontNameText;
    Bitmap.prototype._makeFontNameText = function () {
        if (this.fontBold) return 'Bold ' + this.fontSize + 'px ' + this.fontFace;
        return Dhoom.L2DTitle.Bitmap_makeFontNameText.call(this);
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

    Dhoom.L2DTitle.Bitmap_drawTextOutline = Bitmap.prototype._drawTextOutline;
    Bitmap.prototype._drawTextOutline = function (text, tx, ty, maxWidth) {
        if (this.outlineWidth === 0) return;
        Dhoom.L2DTitle.Bitmap_drawTextOutline.call(this, text, tx, ty, maxWidth);
    };
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// TouchInput
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
if (typeof TouchInput._mouseX === 'undefined') {
    Dhoom.L2DTitle.TouchInput_clear = TouchInput.clear;
    TouchInput.clear = function () {
        Dhoom.L2DTitle.TouchInput_clear.call(this);
        this._mouseX = 0;
        this._mouseY = 0;
    };

    Object.defineProperty(TouchInput, 'mouseX', {
        get: function () {
            return this._mouseX;
        },
        configurable: true
    });

    Object.defineProperty(TouchInput, 'mouseY', {
        get: function () {
            return this._mouseY;
        },
        configurable: true
    });

    Dhoom.L2DTitle.TouchInput_onMouseMove = TouchInput._onMouseMove;
    TouchInput._onMouseMove = function (event) {
        Dhoom.L2DTitle.TouchInput_onMouseMove.call(this, event);
        this._mouseX = Graphics.pageToCanvasX(event.pageX);
        this._mouseY = Graphics.pageToCanvasY(event.pageY);
    };
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Sprite_TitleCommand
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Sprite_TitleCommand() {
    this.initialize.apply(this, arguments);
}

Sprite_TitleCommand.prototype = Object.create(Sprite.prototype);
Sprite_TitleCommand.prototype.constructor = Sprite_TitleCommand;

Sprite_TitleCommand.prototype.initialize = function (x, y, text, enabled) {
    Sprite.prototype.initialize.call(this);
    this.x = x;
    this.y = y;
    this._text = text;
    this._tempSelected = false;
    this._selected = false;
    this._enabled = enabled;
    this.createBackground();
    this.createContents();
    this.refresh();
};

Sprite_TitleCommand.prototype.createBackground = function () {
    this._background = new Sprite();
    this.addChild(this._background);
    this._background.x = Dhoom.L2DTitle.commandBackgroundPos[0];
    this._background.y = Dhoom.L2DTitle.commandBackgroundPos[1];
};

Sprite_TitleCommand.prototype.createContents = function () {
    this._contents = new Sprite();
    this._contents.bitmap = new Bitmap(Dhoom.L2DTitle.commandSize[0], Dhoom.L2DTitle.commandSize[1]);
    this.addChild(this._contents);
};

Sprite_TitleCommand.prototype.refreshBackground = function () {
    var index = this._selected ? 1 : 0;
    this._background.bitmap = ImageManager.loadSystem(Dhoom.L2DTitle.commandBackground[index]);
    this._tempSelected = this._selected;
};

Sprite_TitleCommand.prototype.refresh = function () {
    this.refreshBackground();
    this._contents.bitmap.clear();
    this._contents.bitmap.changeTextStyle(Dhoom.L2DTitle.commandFont);
    this._contents.bitmap.paintOpacity = this._enabled ? 255 : 160;
    this._contents.bitmap.drawText(this._text, 0, 0, this._contents.width, this._contents.height, 'center');
};

Sprite_TitleCommand.prototype.update = function () {
    Sprite.prototype.update.call(this);
    if (this._tempSelected !== this._selected) this.refreshBackground();
    if (this._selected) this.updateMOGCursor();
};

Sprite_TitleCommand.prototype.isTouched = function () {
    return (TouchInput.isTriggered() && (TouchInput.x >= this.x &&
        TouchInput.x <= this.x + this._contents.width &&
        TouchInput.y >= this.y && TouchInput.y <= this.y + this._contents.height ||
        this.isHovered()));
};

Sprite_TitleCommand.prototype.isHovered = function () {
    return (TouchInput.mouseX >= this.x &&
        TouchInput.mouseX <= this.x + this._contents.width &&
        TouchInput.mouseY >= this.y && TouchInput.mouseY <= this.y + this._contents.height);
};

Sprite_TitleCommand.prototype.select = function () {
    this._selected = true;
    if (!this._tempSelected) this.refreshBackground();
    this._tempSelected = true;
};

Sprite_TitleCommand.prototype.updateMOGCursor = function () {
    if (Imported.MOG_MenuCursor) {
        var rect = this._contents.bitmap.rect;
        $gameTemp._mcursorData[0] = true;
        $gameTemp._mcursorData[1] = 1;
        $gameTemp._mcursorData[2] = this.x;
        $gameTemp._mcursorData[3] = this.y + (rect.height / 3);
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_Title
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DTitle.Scene_Title_createBackground = Scene_Title.prototype.createBackground;
Scene_Title.prototype.createBackground = function () {
    Dhoom.L2DTitle.Scene_Title_createBackground.call(this);
    this._spriteset = new Spriteset_Base();
    this.addChildAt(this._spriteset, this.children.indexOf(this._backgrounds[Dhoom.L2DTitle.l2dZ - 1]) + 1);
    this._spriteset._blackScreen.opacity = 0;
    this._spriteset._fadeSprite.visible = false;
    for (var n = 0; n < Dhoom.L2DTitle.l2ds.length; n++) {
        var setting = Dhoom.L2DTitle.l2ds[n];
        var i = Math.randomInt(setting.models.length);
        if (setting.models[i]) {
            var data = setting.models[i];
            $gameScreen.loadLive2DModel('title' + n, data[0]);
            model = $gameScreen.getLive2DModel('title' + n);
            pending = $gameScreen.live2dPendingMethods['title' + n];
            pending.push('this.viewScale = ' + setting.scale[i]);
            pending.push('this.x = ' + Number(setting.pos[i][0]));
            pending.push('this.y = ' + Number(setting.pos[i][1]));
            if (setting.mirror[i]) pending.push('this._flip = !this._flip; this.viewScale = this.viewScale');
            if (data[2] === 'random') {
                pending.push([Sprite_Live2D.prototype.startRandomMotion, [data[1], 3, true]]);
            } else {
                pending.push([Sprite_Live2D.prototype.startMotion, [data[1], data[2], 3, true]]);
            }
            pending.push([Sprite_Live2D.prototype.fadeIn, [30]]);
			if (setting.models[1]) {
            pending.push('this.drag = true');
			} else {
            pending.push('this.drag = false');
			}
        }
    }
};

Dhoom.L2DTitle.Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function () {
    Dhoom.L2DTitle.Scene_Title_createCommandWindow.call(this);
    this._commandWindow.x = Graphics.width;
    this._commandWindow.y = Graphics.height;
    this._commandWindow.visible = false;
    this.createSpriteCommands();
};

Scene_Title.prototype.createSpriteCommands = function () {
    this._spriteCommands = [];
    for (var i = 0; i < this._commandWindow.maxItems(); i++) {
        var sprite = new Sprite_TitleCommand(Dhoom.L2DTitle.commandPos[i][0], Dhoom.L2DTitle.commandPos[i][1], this._commandWindow.commandName(i), this._commandWindow.isCommandEnabled(i));
        this._spriteCommands.push(sprite);
        this.addChild(sprite);
    }
};

Dhoom.L2DTitle.Scene_Title_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function () {
    Dhoom.L2DTitle.Scene_Title_update.call(this);
    this.updateSpriteCommands();
    this.updateMouseCursor();
};

Scene_Title.prototype.updateSpriteCommands = function () {
    if (this._commandWindow.index() !== this._tempCommandIndex) {
        this._tempCommandIndex = this._commandWindow.index();
        for (var i = 0; i < this._spriteCommands.length; i++) {
            this._spriteCommands[i]._selected = false;
        }
        this._spriteCommands[this._tempCommandIndex].select();
    }
    for (var i = 0; i < this._spriteCommands.length; i++) {
        if (this._spriteCommands[i].isTouched()) {
            TouchInput.update();
            if (this._spriteCommands[i]._selected) {
                this._commandWindow.processOk();
            } else {
                this._commandWindow.select(i);
            }
        }
        if (this._spriteCommands[i].isHovered() && !this._spriteCommands[i]._selected) {
            this._spriteCommands[i].select();
            this._commandWindow.select(i);
        }
    }
};

Scene_Title.prototype.updateMouseCursor = function () {
    if (!Imported.TDDP_MouseSystemEx || !TDDP_MouseSystemEx.useCustomCursor) return;
    var index = -1;
    for (var i = 0; i < this._spriteCommands.length; i++) {
        if (this._spriteCommands[i].isHovered()) index = i;
    }
    if (index >= 0) {
        TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.L2DTitle.commandMouse));
        this._commandHovered = true;
    } else {
        if (this._commandHovered) {
            TDDP_MouseSystemEx._resetCustomCursor();
            this._commandHovered = false;
        }
    }
};

Dhoom.L2DTitle.Scene_Title_terminate = Scene_Title.prototype.terminate;
Scene_Title.prototype.terminate = function () {
    Dhoom.L2DTitle.Scene_Title_terminate.call(this);
    if (Imported.TDDP_MouseSystemEx && TDDP_MouseSystemEx.useCustomCursor) TDDP_MouseSystemEx._resetCustomCursor();
};