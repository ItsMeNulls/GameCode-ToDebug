//=============================================================================
// DhoomKnowledgeEffortMeter.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_KnowledgeEffortMeter = true;

var Dhoom = Dhoom || {};
Dhoom.KnowledgeEffortMeter = Dhoom.KnowledgeEffortMeter || {};

/*:
 * @plugindesc v1.4. Display knowledge and effort based on a variable in main menu and map.
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @param =====KNOWLEDGE====
 * @desc
 * @default
 *
 * @param Knowledge Variable ID
 * @desc Variable ID for knowledge system.
 * @default 1
 *
 * @param Max Knowledge
 * @desc Maximum knowledge variable value.
 * @default 200
 *
 * @param Knowledge Base Color
 * @desc Knowledge bar base color, [Color 1, Color 2]
 * @default ['#686868', '#373737']
 *
 * @param Knowledge Settings 1
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default [0, 'Knowledge: Evil', '#ff0000', '#ff00ff', 'icon1', true, 120, 10]
 * @param Knowledge Settings 2
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default [80, 'Knowledge: Neutral', '#ff0000', '#ff00ff', 'icon2', false]
 * @param Knowledge Settings 3
 * @desc [Min value, 'Name', Color 1 Hex, Color 2 Hex, Icon Filename (in Pictures folder).
 * @default [120, 'Knowledge: Good', '#ff0000', '#ff00ff', 'icon3', true, 60, 5]
 * @param Knowledge Settings 4
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Knowledge Settings 5
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Knowledge Settings 6
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Knowledge Settings 7
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Knowledge Settings 8
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 *
 * @param =====KNOWLEDGE MAIN MENU====
 * @desc
 * @default
 *
 * @param Menu Knowledge Enable Switch ID
 * @desc Display knowledge window when switch is on
 * @default 1
 *
 * @param Menu Knowledge Window Rect
 * @desc Window position and size. [x, y, width, height]
 * @default [0, 360, 240, 108]
 *
 * @param Menu Knowledge Window Opacity
 * @desc Window opacity. Max value 255.
 * @default 255
 *
 * @param Menu Knowledge Draw Value?
 * @desc Draw variable value? true or false
 * @default true
 *
 * @param Menu Knowledge Text Area
 * @desc Area for knowledge text [x, y, width, height]
 * @default [0, 0, 204, 36]
 *
 * @param Menu Knowledge Bar Rect
 * @desc Bar position and size [x, y, width, height]
 * @default [40, 36, 164, 36]
 *
 * @param Menu Knowledge Icon Position
 * @desc Icon position [x, y]
 * @default [0, 36]
 * 
 * @param Menu Knowledge Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param Menu Knowledge Font Size
 * @desc Font size
 * @default 14
 *
 * @param Menu Knowledge Font Color
 * @desc Font color
 * @default #000000
 *
 * @param Menu Knowledge Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param Menu Knowledge Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Menu Knowledge Font Bold
 * @desc
 * @default false
 *
 * @param Menu Knowledge Font Italic
 * @desc
 * @default false 
 *
 * @param =====KNOWLEDGE MAP====
 * @desc
 * @default
 *
 * @param Map Knowledge Enable Switch ID
 * @desc Display knowledge window when switch is on
 * @default 1
 *
 * @param Map Knowledge Window Rect
 * @desc Window position and size. [x, y, width, height]
 * @default [0, 360, 240, 108]
 *
 * @param Map Knowledge Window Opacity
 * @desc Window opacity. Max value 255.
 * @default 80
 *
 * @param Map Knowledge Draw Value?
 * @desc Draw variable value? true or false
 * @default true
 *
 * @param Map Knowledge Text Area
 * @desc Area for knowledge text [x, y, width, height]
 * @default [0, 0, 204, 36]
 *
 * @param Map Knowledge Bar Rect
 * @desc Bar position and size [x, y, width, height]
 * @default [40, 36, 164, 36]
 *
 * @param Map Knowledge Icon Position
 * @desc Icon position [x, y]
 * @default [0, 36]
 * 
 * @param Map Knowledge Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param Map Knowledge Font Size
 * @desc Font size
 * @default 14
 *
 * @param Map Knowledge Font Color
 * @desc Font color
 * @default #000000
 *
 * @param Map Knowledge Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param Map Knowledge Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Map Knowledge Font Bold
 * @desc
 * @default false
 *
 * @param Map Knowledge Font Italic
 * @desc
 * @default false 
 *
 * @param =====EFFORT====
 * @desc
 * @default
 *
 * @param Effort Variable ID
 * @desc Variable ID for effort system.
 * @default 1
 *
 * @param Max Effort
 * @desc Maximum effort variable value.
 * @default 200
 *
 * @param Effort Base Color
 * @desc Effort bar base color, [Color 1, Color 2]
 * @default ['#686868', '#373737']
 *
 * @param Effort Settings 1
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default [0, 'Effort: Evil', '#ff0000', '#ff00ff', 'icon4', false]
 * @param Effort Settings 2
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default [80, 'Effort: Neutral', '#ff0000', '#ff00ff', 'icon3', true, 80, 10]
 * @param Effort Settings 3
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default [120, 'Effort: Good', '#ff0000', '#ff00ff', 'icon2', false]
 * @param Effort Settings 4
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Effort Settings 5
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Effort Settings 6
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Effort Settings 7
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Effort Settings 8
 * @desc [Min value, 'Name', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 *
 * @param =====EFFORT MAIN MENU====
 * @desc
 * @default
 *
 * @param Menu Effort Enable Switch ID
 * @desc Display knowledge window when switch is on
 * @default 1
 *
 * @param Menu Effort Window Rect
 * @desc Window position and size. [x, y, width, height]
 * @default [0, 468, 240, 108]
 *
 * @param Menu Effort Window Opacity
 * @desc Window opacity. Max value 255.
 * @default 255
 *
 * @param Menu Effort Draw Value?
 * @desc Draw variable value? true or false
 * @default true
 *
 * @param Menu Effort Text Area
 * @desc Area for effort text [x, y, width, height]
 * @default [0, 0, 204, 36]
 *
 * @param Menu Effort Bar Rect
 * @desc Bar position and size [x, y, width, height]
 * @default [40, 36, 164, 36]
 *
 * @param Menu Effort Icon Position
 * @desc Icon position [x, y]
 * @default [0, 36]
 * 
 * @param Menu Effort Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param Menu Effort Font Size
 * @desc Font size
 * @default 14
 *
 * @param Menu Effort Font Color
 * @desc Font color
 * @default #000000
 *
 * @param Menu Effort Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param Menu Effort Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Menu Effort Font Bold
 * @desc
 * @default false
 *
 * @param Menu Effort Font Italic
 * @desc
 * @default false
 *
 * @param =====EFFORT MAP====
 * @desc
 * @default
 *
 * @param Map Effort Enable Switch ID
 * @desc Display Effort window when switch is on
 * @default 1
 *
 * @param Map Effort Window Rect
 * @desc Window position and size. [x, y, width, height]
 * @default [0, 468, 240, 108]
 *
 * @param Map Effort Window Opacity
 * @desc Window opacity. Max value 255.
 * @default 80
 *
 * @param Map Effort Draw Value?
 * @desc Draw variable value? true or false
 * @default true
 *
 * @param Map Effort Text Area
 * @desc Area for knowledge text [x, y, width, height]
 * @default [0, 0, 204, 36]
 *
 * @param Map Effort Bar Rect
 * @desc Bar position and size [x, y, width, height]
 * @default [40, 36, 164, 36]
 *
 * @param Map Effort Icon Position
 * @desc Icon position [x, y]
 * @default [0, 36]
 * 
 * @param Map Effort Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param Map Effort Font Size
 * @desc Font size
 * @default 14
 *
 * @param Map Effort Font Color
 * @desc Font color
 * @default #000000
 *
 * @param Map Effort Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param Map Effort Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Map Effort Font Bold
 * @desc
 * @default false
 *
 * @param Map Effort Font Italic
 * @desc
 * @default false 
 *
 * @help 
    Boner Games © 2017 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

Dhoom.Parameters = PluginManager.parameters('DhoomKnowledgeEffortMeter');

Dhoom.KnowledgeEffortMeter.knowledgeVariable = Number(Dhoom.Parameters['Knowledge Variable ID']);
Dhoom.KnowledgeEffortMeter.knowledgeMaxValue = Number(Dhoom.Parameters['Max Knowledge']);
Dhoom.KnowledgeEffortMeter.knowledgeBaseColors = eval(Dhoom.Parameters['Knowledge Base Color']);
Dhoom.KnowledgeEffortMeter.knowledgeSettings = [];
for (var i = 8; i >= 1; i--) {
	if (Dhoom.Parameters['Knowledge Settings ' + i] !== '') {
		Dhoom.KnowledgeEffortMeter.knowledgeSettings.push(eval(String(Dhoom.Parameters['Knowledge Settings ' + i])));
	}
}
Dhoom.KnowledgeEffortMeter.knowledgeSettings.sort(function(a, b) {
	return a[0] - b[0];
});

Dhoom.KnowledgeEffortMeter.knowledgeMenuSwitch = Number(Dhoom.Parameters['Menu Knowledge Enable Switch ID']);
Dhoom.KnowledgeEffortMeter.knowledgeMenuRect = JSON.parse(Dhoom.Parameters['Menu Knowledge Window Rect']);
Dhoom.KnowledgeEffortMeter.knowledgeMenuOpacity = Number(Dhoom.Parameters['Menu Knowledge Window Opacity'] || 255);
Dhoom.KnowledgeEffortMeter.knowledgeMenuDraw = JSON.parse(Dhoom.Parameters['Menu Knowledge Draw Value?']) || true;
Dhoom.KnowledgeEffortMeter.knowledgeMenuTextRect = JSON.parse(Dhoom.Parameters['Menu Knowledge Text Area']);
Dhoom.KnowledgeEffortMeter.knowledgeMenuBarRect = JSON.parse(Dhoom.Parameters['Menu Knowledge Bar Rect']);
Dhoom.KnowledgeEffortMeter.knowledgeMenuIconPos = JSON.parse(Dhoom.Parameters['Menu Knowledge Icon Position']);
Dhoom.KnowledgeEffortMeter.knowledgeMenuFont = {
    name: String(Dhoom.Parameters['Menu Knowledge Font Name']),
    size: Number(Dhoom.Parameters['Menu Knowledge Font Size']),
    color: String(Dhoom.Parameters['Menu Knowledge Font Color']),
    outlineWidth: Number(Dhoom.Parameters['Menu Knowledge Font Outline Width']),
    outlineColor: String(Dhoom.Parameters['Menu Knowledge Font Outline Color']),
    bold: JSON.parse(Dhoom.Parameters['Menu Knowledge Font Bold'].toLowerCase()),
    italic: JSON.parse(Dhoom.Parameters['Menu Knowledge Font Italic'].toLowerCase()),
};

Dhoom.KnowledgeEffortMeter.knowledgeMapSwitch = Number(Dhoom.Parameters['Map Knowledge Enable Switch ID']);
Dhoom.KnowledgeEffortMeter.knowledgeMapRect = JSON.parse(Dhoom.Parameters['Map Knowledge Window Rect']);
Dhoom.KnowledgeEffortMeter.knowledgeMapOpacity = Number(Dhoom.Parameters['Map Knowledge Window Opacity'] || 255);
Dhoom.KnowledgeEffortMeter.knowledgeMapDraw = JSON.parse(Dhoom.Parameters['Map Knowledge Draw Value?']) || true;
Dhoom.KnowledgeEffortMeter.knowledgeMapTextRect = JSON.parse(Dhoom.Parameters['Map Knowledge Text Area']);
Dhoom.KnowledgeEffortMeter.knowledgeMapBarRect = JSON.parse(Dhoom.Parameters['Map Knowledge Bar Rect']);
Dhoom.KnowledgeEffortMeter.knowledgeMapIconPos = JSON.parse(Dhoom.Parameters['Map Knowledge Icon Position']);
Dhoom.KnowledgeEffortMeter.knowledgeMapFont = {
    name: String(Dhoom.Parameters['Map Knowledge Font Name']),
    size: Number(Dhoom.Parameters['Map Knowledge Font Size']),
    color: String(Dhoom.Parameters['Map Knowledge Font Color']),
    outlineWidth: Number(Dhoom.Parameters['Map Knowledge Font Outline Width']),
    outlineColor: String(Dhoom.Parameters['Map Knowledge Font Outline Color']),
    bold: JSON.parse(Dhoom.Parameters['Map Knowledge Font Bold'].toLowerCase()),
    italic: JSON.parse(Dhoom.Parameters['Map Knowledge Font Italic'].toLowerCase()),
};

Dhoom.KnowledgeEffortMeter.effortVariable = Number(Dhoom.Parameters['Effort Variable ID']);
Dhoom.KnowledgeEffortMeter.effortMaxValue = Number(Dhoom.Parameters['Max Effort']);
Dhoom.KnowledgeEffortMeter.effortBaseColors = eval(Dhoom.Parameters['Effort Base Color']);
Dhoom.KnowledgeEffortMeter.effortSettings = [];
for (var i = 8; i >= 1; i--) {
	if (Dhoom.Parameters['Effort Settings ' + i] !== '') {
		Dhoom.KnowledgeEffortMeter.effortSettings.push(eval(String(Dhoom.Parameters['Effort Settings ' + i])));
	}
}
Dhoom.KnowledgeEffortMeter.effortSettings.sort(function(a, b) {
	return a[0] - b[0];
});

Dhoom.KnowledgeEffortMeter.effortMenuSwitch = Number(Dhoom.Parameters['Menu Effort Enable Switch ID']);
Dhoom.KnowledgeEffortMeter.effortMenuRect = JSON.parse(Dhoom.Parameters['Menu Effort Window Rect']);
Dhoom.KnowledgeEffortMeter.effortMenuOpacity = Number(Dhoom.Parameters['Menu Effort Window Opacity'] || 255);
Dhoom.KnowledgeEffortMeter.effortMenuDraw = JSON.parse(Dhoom.Parameters['Menu Effort Draw Value?']) || true;
Dhoom.KnowledgeEffortMeter.effortMenuTextRect = JSON.parse(Dhoom.Parameters['Menu Effort Text Area']);
Dhoom.KnowledgeEffortMeter.effortMenuBarRect = JSON.parse(Dhoom.Parameters['Menu Effort Bar Rect']);
Dhoom.KnowledgeEffortMeter.effortMenuIconPos = JSON.parse(Dhoom.Parameters['Menu Effort Icon Position']);
Dhoom.KnowledgeEffortMeter.effortMenuFont = {
    name: String(Dhoom.Parameters['Menu Effort Font Name']),
    size: Number(Dhoom.Parameters['Menu Effort Font Size']),
    color: String(Dhoom.Parameters['Menu Effort Font Color']),
    outlineWidth: Number(Dhoom.Parameters['Menu Effort Font Outline Width']),
    outlineColor: String(Dhoom.Parameters['Menu Effort Font Outline Color']),
    bold: JSON.parse(Dhoom.Parameters['Menu Effort Font Bold'].toLowerCase()),
    italic: JSON.parse(Dhoom.Parameters['Menu Effort Font Italic'].toLowerCase()),
};

Dhoom.KnowledgeEffortMeter.effortMapSwitch = Number(Dhoom.Parameters['Map Effort Enable Switch ID']);
Dhoom.KnowledgeEffortMeter.effortMapRect = JSON.parse(Dhoom.Parameters['Map Effort Window Rect']);
Dhoom.KnowledgeEffortMeter.effortMapOpacity = Number(Dhoom.Parameters['Map Effort Window Opacity'] || 255);
Dhoom.KnowledgeEffortMeter.effortMapDraw = JSON.parse(Dhoom.Parameters['Map Effort Draw Value?']) || true;
Dhoom.KnowledgeEffortMeter.effortMapTextRect = JSON.parse(Dhoom.Parameters['Map Effort Text Area']);
Dhoom.KnowledgeEffortMeter.effortMapBarRect = JSON.parse(Dhoom.Parameters['Map Effort Bar Rect']);
Dhoom.KnowledgeEffortMeter.effortMapIconPos = JSON.parse(Dhoom.Parameters['Map Effort Icon Position']);
Dhoom.KnowledgeEffortMeter.effortMapFont = {
    name: String(Dhoom.Parameters['Map Effort Font Name']),
    size: Number(Dhoom.Parameters['Map Effort Font Size']),
    color: String(Dhoom.Parameters['Map Effort Font Color']),
    outlineWidth: Number(Dhoom.Parameters['Map Effort Font Outline Width']),
    outlineColor: String(Dhoom.Parameters['Map Effort Font Outline Color']),
    bold: JSON.parse(Dhoom.Parameters['Map Effort Font Bold'].toLowerCase()),
    italic: JSON.parse(Dhoom.Parameters['Map Effort Font Italic'].toLowerCase()),
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Graphics
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.KnowledgeEffortMeter.Graphics_createGameFontLoader = Graphics._createGameFontLoader;
Graphics._createGameFontLoader = function() {
    Dhoom.KnowledgeEffortMeter.Graphics_createGameFontLoader.call(this);
    this._createFontLoader(Dhoom.KnowledgeEffortMeter.knowledgeMapFont.name);
    this._createFontLoader(Dhoom.KnowledgeEffortMeter.knowledgeMenuFont.name);
    this._createFontLoader(Dhoom.KnowledgeEffortMeter.effortMapFont.name);
    this._createFontLoader(Dhoom.KnowledgeEffortMeter.effortMenuFont.name);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Bitmap
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
if (typeof Bitmap.prototype.changeTextStyle === 'undefined') {
    Dhoom.KnowledgeEffortMeter.Bitmap_initialize = Bitmap.prototype.initialize;
    Bitmap.prototype.initialize = function (width, height) {
        Dhoom.KnowledgeEffortMeter.Bitmap_initialize.call(this, width, height);
        this.fontBold = false;
    };

    Dhoom.KnowledgeEffortMeter.Bitmap_makeFontNameText = Bitmap.prototype._makeFontNameText;
    Bitmap.prototype._makeFontNameText = function () {
        if (this.fontBold) return 'Bold ' + this.fontSize + 'px ' + this.fontFace;
        return Dhoom.KnowledgeEffortMeter.Bitmap_makeFontNameText.call(this);
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

    Dhoom.KnowledgeEffortMeter.Bitmap_drawTextOutline = Bitmap.prototype._drawTextOutline;
    Bitmap.prototype._drawTextOutline = function (text, tx, ty, maxWidth) {
        if (this.outlineWidth === 0) return;
        Dhoom.KnowledgeEffortMeter.Bitmap_drawTextOutline.call(this, text, tx, ty, maxWidth);
    };
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_MeterBase
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_MeterBase() {
	this.initialize.apply(this, arguments);
}

Window_MeterBase.prototype = Object.create(Window_Base.prototype);
Window_MeterBase.prototype.constructor = Window_MeterBase;

Window_MeterBase.prototype.initialize = function() {
	Window_Base.prototype.initialize.call(this, this.windowRect()[0], this.windowRect()[1], this.windowRect()[2], this.windowRect()[3]);
	this.opacity = this.windowOpacity();
	this._text = '';
	this._color1 = '#ffffff';
	this._color2 = '#000000';
	this._icon = '';
	this.refresh();
};

Window_MeterBase.prototype.windowRect = function() {
	return [0, 0, 96, 96];
};

Window_MeterBase.prototype.windowOpacity = function() {
	return 255;
};

Window_MeterBase.prototype.meterValue = function() {
	return 0;
};

Window_MeterBase.prototype.meterMaxValue = function() {
	return 1;
};

Window_MeterBase.prototype.meterSettings = function() {
	return [];
};

Window_MeterBase.prototype.meterBaseColors = function() {
	return ['#ffffff', '#000000'];
};

Window_MeterBase.prototype.refresh = function() {
	this._needRefresh = false;
	this.contents.clear();
	this.refreshSetting();
	this.contents.changeTextStyle(this.meterFont());
	
	this.drawMeterText();
	this.drawMeterBar();
	this.drawMeterIcon();
	this._tempText = this._text;
	this._tempColor1 = this._color1;
	this._tempColor2 = this._color2;
	this._tempIcon = this._icon;
	this._tempValue = this.meterValue();
};

Window_MeterBase.prototype.refreshSetting = function() {
	var value = this.meterValue();
	if (value > this.meterMaxValue()) value = this.meterMaxValue();
	this.meterSettings().forEach(function(setting) {
		if (value >= setting[0]) {
			this._text = setting[1];
			this._color1 = setting[2];
			this._color2 = setting[3];
			this._icon = setting[4];
			this._blinkEnabled = setting[5];
			this._blinkWait = setting[6];
			this._blinkDuration = setting[7];
		}
	}, this);
};

Window_MeterBase.prototype.meterFont = function () {
	return {};
};

Window_MeterBase.prototype.meterTextRect = function() {
	return [0, 0, this.width, this.height];
};

Window_MeterBase.prototype.drawMeterText = function() {
	var rect = this.meterTextRect();
	this.contents.drawText(this._text, rect[0], rect[1], rect[2], rect[3], 'center');
};

Window_MeterBase.prototype.meterBarRect = function() {
	return [0, 0, this.width, this.height];
};

Window_MeterBase.prototype.drawMeterBar = function() {
	var rect = this.meterBarRect();
	this.contents.gradientFillRect(rect[0], rect[1], rect[2], rect[3], this.meterBaseColors()[0], this.meterBaseColors()[1], true);
	var width = Math.min(1, this.meterValue() / this.meterMaxValue()) * rect[2];
	this.contents.gradientFillRect(rect[0], rect[1], width, rect[3], this._color1, this._color2, true);
	if (this.drawMeterValueOn()) {
		this.contents.drawText(Math.round(this.meterValue() / this.meterMaxValue() * 100) + '%', rect[0], rect[1], rect[2], rect[3], 'center');
	}
};

Window_MeterBase.prototype.drawMeterValueOn = function() {
	return true;
};

Window_MeterBase.prototype.meterIconPos = function() {
	return [0, 0];
};

Window_MeterBase.prototype.drawMeterIcon = function() {
	if (this._tempIcon === this._icon) return;
	if (!this._iconSprite) {
		this._iconSprite = new Sprite();
		this.addChild(this._iconSprite);
	}
	this._iconSprite.bitmap = ImageManager.loadPicture(this._icon);
	this._iconSprite.opacity = 255;
	this._iconBlink = this._blinkWait;
	this.updateIconSprite();
};

Window_MeterBase.prototype.update = function() {
	Window_Base.prototype.update.call(this);
	if (this._needRefresh && ImageManager.isReady()) this.refresh();
	this.updateIconSprite();
};

Window_MeterBase.prototype.updateValue = function() {
	this.refreshSetting();
	if (this._tempValue !== this.meterValue() || this._text !== this._tempText ||
		this._color1 !== this._tempColor1 || this._color2 !== this._tempColor2 ||
		this._icon !== this._tempIcon) this.refresh();
};

Window_MeterBase.prototype.updateIconSprite = function() {
	var pos = this.meterIconPos();
	this._iconSprite.x = this.standardPadding() + pos[0];
	this._iconSprite.y = this.standardPadding() + pos[1];
	this._iconSprite.visible = this.visible;
	if (this._blinkEnabled) {
		this._iconBlink--;
		if (this._iconBlink <= 0) {
			if (this._iconBlink < -this._blinkDuration && this._iconSprite.opacity === 0) {
				this._iconBlink = this._blinkWait;
				this._iconSprite.opacity = 255;
			} else {
				this._iconSprite.opacity = 0;
			}
		}
	}
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_Knowledge
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_Knowledge() {
	this.initialize.apply(this, arguments);
}

Window_Knowledge.prototype = Object.create(Window_MeterBase.prototype);
Window_Knowledge.prototype.constructor = Window_Knowledge;

Window_Knowledge.prototype.windowRect = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeMenuRect;
};

Window_Knowledge.prototype.windowOpacity = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeMenuOpacity;
};

Window_Knowledge.prototype.meterValue = function() {
	return $gameVariables.value(Dhoom.KnowledgeEffortMeter.knowledgeVariable);
};

Window_Knowledge.prototype.meterMaxValue = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeMaxValue;
};

Window_Knowledge.prototype.meterSettings = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeSettings;
};

Window_Knowledge.prototype.meterBaseColors = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeBaseColors;
};

Window_Knowledge.prototype.drawMeterValueOn = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeMenuDraw;
};

Window_Knowledge.prototype.meterFont = function () {
	return Dhoom.KnowledgeEffortMeter.knowledgeMenuFont;
};

Window_Knowledge.prototype.meterTextRect = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeMenuTextRect;
};

Window_Knowledge.prototype.meterBarRect = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeMenuBarRect;
};

Window_Knowledge.prototype.meterIconPos = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeMenuIconPos;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_Effort
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_Effort() {
	this.initialize.apply(this, arguments);
}

Window_Effort.prototype = Object.create(Window_MeterBase.prototype);
Window_Effort.prototype.constructor = Window_Effort;

Window_Effort.prototype.windowRect = function() {
	return Dhoom.KnowledgeEffortMeter.effortMenuRect;
};

Window_Effort.prototype.windowOpacity = function() {
	return Dhoom.KnowledgeEffortMeter.effortMenuOpacity;
};

Window_Effort.prototype.meterValue = function() {
	return $gameVariables.value(Dhoom.KnowledgeEffortMeter.effortVariable);
};

Window_Effort.prototype.meterMaxValue = function() {
	return Dhoom.KnowledgeEffortMeter.effortMaxValue;
};

Window_Effort.prototype.meterSettings = function() {
	return Dhoom.KnowledgeEffortMeter.effortSettings;
};

Window_Effort.prototype.meterBaseColors = function() {
	return Dhoom.KnowledgeEffortMeter.effortBaseColors;
};

Window_Effort.prototype.drawMeterValueOn = function() {
	return Dhoom.KnowledgeEffortMeter.effortMenuDraw;
};

Window_Effort.prototype.meterFont = function () {
	return Dhoom.KnowledgeEffortMeter.effortMenuFont;
};

Window_Effort.prototype.meterTextRect = function() {
	return Dhoom.KnowledgeEffortMeter.effortMenuTextRect;
};

Window_Effort.prototype.meterBarRect = function() {
	return Dhoom.KnowledgeEffortMeter.effortMenuBarRect;
};

Window_Effort.prototype.meterIconPos = function() {
	return Dhoom.KnowledgeEffortMeter.effortMenuIconPos;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_MapKnowledge
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_MapKnowledge() {
	this.initialize.apply(this, arguments);
}

Window_MapKnowledge.prototype = Object.create(Window_Knowledge.prototype);
Window_MapKnowledge.prototype.constructor = Window_MapKnowledge;

Window_MapKnowledge.prototype.windowRect = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeMapRect;
};

Window_MapKnowledge.prototype.windowOpacity = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeMapOpacity;
};

Window_MapKnowledge.prototype.drawMeterValueOn = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeMapDraw;
};

Window_MapKnowledge.prototype.meterTextRect = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeMapTextRect;
};

Window_MapKnowledge.prototype.meterBarRect = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeMapBarRect;
};

Window_MapKnowledge.prototype.meterIconPos = function() {
	return Dhoom.KnowledgeEffortMeter.knowledgeMapIconPos;
};

Window_MapKnowledge.prototype.meterFont = function () {
	return Dhoom.KnowledgeEffortMeter.knowledgeMapFont;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_MapEffort
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_MapEffort() {
	this.initialize.apply(this, arguments);
}

Window_MapEffort.prototype = Object.create(Window_Effort.prototype);
Window_MapEffort.prototype.constructor = Window_MapEffort;

Window_MapEffort.prototype.windowRect = function() {
	return Dhoom.KnowledgeEffortMeter.effortMapRect;
};

Window_MapEffort.prototype.windowOpacity = function() {
	return Dhoom.KnowledgeEffortMeter.effortMapOpacity;
};

Window_MapEffort.prototype.drawMeterValueOn = function() {
	return Dhoom.KnowledgeEffortMeter.effortMapDraw;
};

Window_MapEffort.prototype.meterTextRect = function() {
	return Dhoom.KnowledgeEffortMeter.effortMapTextRect;
};

Window_MapEffort.prototype.meterBarRect = function() {
	return Dhoom.KnowledgeEffortMeter.effortMapBarRect;
};

Window_MapEffort.prototype.meterIconPos = function() {
	return Dhoom.KnowledgeEffortMeter.effortMapIconPos;
};

Window_MapEffort.prototype.meterFont = function () {
	return Dhoom.KnowledgeEffortMeter.effortMapFont;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_Menu
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.KnowledgeEffortMeter.Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
	Dhoom.KnowledgeEffortMeter.Scene_Menu_create.call(this);
	if ($gameSwitches.value(Dhoom.KnowledgeEffortMeter.knowledgeMenuSwitch)) this.createKnowledgeWindow();
	if ($gameSwitches.value(Dhoom.KnowledgeEffortMeter.effortMenuSwitch)) this.createEffortWindow();
};

Scene_Menu.prototype.createKnowledgeWindow = function() {
	this._knowledgeWindow = new Window_Knowledge();
	this.addChild(this._knowledgeWindow);
};

Scene_Menu.prototype.createEffortWindow = function() {
	this._effortWindow = new Window_Effort();
	this.addChild(this._effortWindow);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_Map
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.KnowledgeEffortMeter.Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
	Dhoom.KnowledgeEffortMeter.Scene_Map_createAllWindows.call(this);
	this.createKnowledgeEffortWindow();
};

Scene_Map.prototype.createKnowledgeEffortWindow = function() {
	this._knowledgeWindow = new Window_MapKnowledge();
	this.addChild(this._knowledgeWindow);
	this._effortWindow = new Window_MapEffort();
	this.addChild(this._effortWindow);
	this.updateKnowledgeEffortWindow();
};

Dhoom.KnowledgeEffortMeter.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
	Dhoom.KnowledgeEffortMeter.Scene_Map_update.call(this);
	this.updateKnowledgeEffortWindow();
};

Scene_Map.prototype.updateKnowledgeEffortWindow = function() {
	if (this._hideKnowEffWindow) return
	this._knowledgeWindow.visible = $gameSwitches.value(Dhoom.KnowledgeEffortMeter.knowledgeMapSwitch);
	this._effortWindow.visible = $gameSwitches.value(Dhoom.KnowledgeEffortMeter.effortMapSwitch);
	if (this._knowledgeWindow.visible) this._knowledgeWindow.updateValue();
	if (this._effortWindow.visible) this._effortWindow.updateValue();
};

Dhoom.KnowledgeEffortMeter.Scene_Map_callMenu = Scene_Map.prototype.callMenu;
Scene_Map.prototype.callMenu = function() {
    Dhoom.KnowledgeEffortMeter.Scene_Map_callMenu.call(this);
	this._knowledgeWindow.hide();
	this._effortWindow.hide();
	this._hideKnowEffWindow = true;
};