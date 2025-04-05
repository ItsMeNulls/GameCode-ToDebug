//=============================================================================
// DhoomArousalCharmMeter.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_ArousalCharmMeter = true;

var Dhoom = Dhoom || {};
Dhoom.ArousalCharmMeter = Dhoom.ArousalCharmMeter || {};

/*:
 * @plugindesc v1.4a. Display arousal and charm based on a variable in main menu and map.
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @param =====AROUSAL====
 * @desc
 * @default
 *
 * @param Arousal Variable ID
 * @desc Variable ID for arousal system.
 * @default 1
 *
 * @param Max Arousal
 * @desc Maximum arousal variable value.
 * @default 200
 *
 * @param Arousal Base Color
 * @desc Arousal bar base color, [Color 1, Color 2]
 * @default ['#686868', '#373737']
 *
 * @param Arousal Settings 1
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default [0, 'Arousal', 'Arousal: Evil', '#ff0000', '#ff00ff', 'icon1', true, 120, 10]
 * @param Arousal Settings 2
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default [80, 'Arousal', 'Arousal: Neutral', '#ff0000', '#ff00ff', 'icon2', false]
 * @param Arousal Settings 3
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1 Hex, Color 2 Hex, Icon Filename (in Pictures folder).
 * @default [120, 'Arousal', 'Arousal: Good', '#ff0000', '#ff00ff', 'icon3', true, 60, 5]
 * @param Arousal Settings 4
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Arousal Settings 5
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Arousal Settings 6
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Arousal Settings 7
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Arousal Settings 8
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 *
 * @param =====AROUSAL MAIN MENU====
 * @desc
 * @default
 *
 * @param Menu Arousal Enable Switch ID
 * @desc Display arousal window when switch is on
 * @default 1
 *
 * @param Menu Arousal Window Rect
 * @desc Window position and size. [x, y, width, height]
 * @default [0, 360, 240, 108]
 *
 * @param Menu Arousal Window Opacity
 * @desc Window opacity. Max value 255.
 * @default 255
 *
 * @param Menu Arousal Draw Value?
 * @desc Draw variable value? true or false
 * @default true
 *
 * @param Menu Arousal Text Area
 * @desc Area for arousal text [x, y, width, height]
 * @default [0, 0, 204, 36]
 *
 * @param Menu Arousal Bar Rect
 * @desc Bar position and size [x, y, width, height]
 * @default [40, 36, 164, 36]
 *
 * @param Menu Arousal Icon Position
 * @desc Icon position [x, y]
 * @default [0, 36]
 * 
 * @param Menu Arousal Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param Menu Arousal Font Size
 * @desc Font size
 * @default 14
 *
 * @param Menu Arousal Font Color
 * @desc Font color
 * @default #000000
 *
 * @param Menu Arousal Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param Menu Arousal Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Menu Arousal Font Bold
 * @desc
 * @default false
 *
 * @param Menu Arousal Font Italic
 * @desc
 * @default false 
 *
 * @param =====AROUSAL MAP====
 * @desc
 * @default
 *
 * @param Map Arousal Enable Switch ID
 * @desc Display arousal window when switch is on
 * @default 1
 *
 * @param Map Arousal Window Rect
 * @desc Window position and size. [x, y, width, height]
 * @default [0, 360, 240, 108]
 *
 * @param Map Arousal Window Opacity
 * @desc Window opacity. Max value 255.
 * @default 80
 *
 * @param Map Arousal Draw Value?
 * @desc Draw variable value? true or false
 * @default true
 *
 * @param Map Arousal Text Area
 * @desc Area for arousal text [x, y, width, height]
 * @default [0, 0, 204, 36]
 *
 * @param Map Arousal Bar Rect
 * @desc Bar position and size [x, y, width, height]
 * @default [40, 36, 164, 36]
 *
 * @param Map Arousal Icon Position
 * @desc Icon position [x, y]
 * @default [0, 36]
 * 
 * @param Map Arousal Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param Map Arousal Font Size
 * @desc Font size
 * @default 14
 *
 * @param Map Arousal Font Color
 * @desc Font color
 * @default #000000
 *
 * @param Map Arousal Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param Map Arousal Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Map Arousal Font Bold
 * @desc
 * @default false
 *
 * @param Map Arousal Font Italic
 * @desc
 * @default false 
 *
 * @param =====CHARM====
 * @desc
 * @default
 *
 * @param Charm Variable ID
 * @desc Variable ID for charm system.
 * @default 1
 *
 * @param Max Charm
 * @desc Maximum charm variable value.
 * @default 200
 *
 * @param Charm Base Color
 * @desc Charm bar base color, [Color 1, Color 2]
 * @default ['#686868', '#373737']
 *
 * @param Charm Settings 1
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default [0, 'Charm', 'Charm: Evil', '#ff0000', '#ff00ff', 'icon4', false]
 * @param Charm Settings 2
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default [80, 'Charm', 'Charm: Neutral', '#ff0000', '#ff00ff', 'icon3', true, 80, 10]
 * @param Charm Settings 3
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default [120, 'Charm', 'Charm: Good', '#ff0000', '#ff00ff', 'icon2', false]
 * @param Charm Settings 4
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Charm Settings 5
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Charm Settings 6
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Charm Settings 7
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 * @param Charm Settings 8
 * @desc [Min value, 'Name (Menu)', 'Name (Map)', Color 1, Color 2, Icon Filename (in Pictures folder), Icon blink?, Blink wait, Blink duration].
 * @default 
 *
 * @param =====CHARM MAIN MENU====
 * @desc
 * @default
 *
 * @param Menu Charm Enable Switch ID
 * @desc Display arousal window when switch is on
 * @default 1
 *
 * @param Menu Charm Window Rect
 * @desc Window position and size. [x, y, width, height]
 * @default [0, 468, 240, 108]
 *
 * @param Menu Charm Window Opacity
 * @desc Window opacity. Max value 255.
 * @default 255
 *
 * @param Menu Charm Draw Value?
 * @desc Draw variable value? true or false
 * @default true
 *
 * @param Menu Charm Text Area
 * @desc Area for charm text [x, y, width, height]
 * @default [0, 0, 204, 36]
 *
 * @param Menu Charm Bar Rect
 * @desc Bar position and size [x, y, width, height]
 * @default [40, 36, 164, 36]
 *
 * @param Menu Charm Icon Position
 * @desc Icon position [x, y]
 * @default [0, 36]
 * 
 * @param Menu Charm Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param Menu Charm Font Size
 * @desc Font size
 * @default 14
 *
 * @param Menu Charm Font Color
 * @desc Font color
 * @default #000000
 *
 * @param Menu Charm Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param Menu Charm Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Menu Charm Font Bold
 * @desc
 * @default false
 *
 * @param Menu Charm Font Italic
 * @desc
 * @default false
 *
 * @param =====CHARM MAP====
 * @desc
 * @default
 *
 * @param Map Charm Enable Switch ID
 * @desc Display Charm window when switch is on
 * @default 1
 *
 * @param Map Charm Window Rect
 * @desc Window position and size. [x, y, width, height]
 * @default [0, 468, 240, 108]
 *
 * @param Map Charm Window Opacity
 * @desc Window opacity. Max value 255.
 * @default 80
 *
 * @param Map Charm Draw Value?
 * @desc Draw variable value? true or false
 * @default true
 *
 * @param Map Charm Text Area
 * @desc Area for arousal text [x, y, width, height]
 * @default [0, 0, 204, 36]
 *
 * @param Map Charm Bar Rect
 * @desc Bar position and size [x, y, width, height]
 * @default [40, 36, 164, 36]
 *
 * @param Map Charm Icon Position
 * @desc Icon position [x, y]
 * @default [0, 36]
 * 
 * @param Map Charm Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param Map Charm Font Size
 * @desc Font size
 * @default 14
 *
 * @param Map Charm Font Color
 * @desc Font color
 * @default #000000
 *
 * @param Map Charm Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param Map Charm Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Map Charm Font Bold
 * @desc
 * @default false
 *
 * @param Map Charm Font Italic
 * @desc
 * @default false 
 *
* @help 
(c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
*/

Dhoom.Parameters = PluginManager.parameters('DhoomArousalCharmMeter');

Dhoom.ArousalCharmMeter.arousalVariable = Number(Dhoom.Parameters['Arousal Variable ID']);
Dhoom.ArousalCharmMeter.arousalMaxValue = Number(Dhoom.Parameters['Max Arousal']);
Dhoom.ArousalCharmMeter.arousalBaseColors = eval(Dhoom.Parameters['Arousal Base Color']);
Dhoom.ArousalCharmMeter.arousalSettings = [];
for (var i = 8; i >= 1; i--) {
	if (Dhoom.Parameters['Arousal Settings ' + i] !== '') {
		Dhoom.ArousalCharmMeter.arousalSettings.push(eval(String(Dhoom.Parameters['Arousal Settings ' + i])));
	}
}
Dhoom.ArousalCharmMeter.arousalSettings.sort(function(a, b) {
	return a[0] - b[0];
});

Dhoom.ArousalCharmMeter.arousalMenuSwitch = Number(Dhoom.Parameters['Menu Arousal Enable Switch ID']);
Dhoom.ArousalCharmMeter.arousalMenuRect = JSON.parse(Dhoom.Parameters['Menu Arousal Window Rect']);
Dhoom.ArousalCharmMeter.arousalMenuOpacity = Number(Dhoom.Parameters['Menu Arousal Window Opacity'] || 255);
Dhoom.ArousalCharmMeter.arousalMenuDraw = JSON.parse(Dhoom.Parameters['Menu Arousal Draw Value?']) || true;
Dhoom.ArousalCharmMeter.arousalMenuTextRect = JSON.parse(Dhoom.Parameters['Menu Arousal Text Area']);
Dhoom.ArousalCharmMeter.arousalMenuBarRect = JSON.parse(Dhoom.Parameters['Menu Arousal Bar Rect']);
Dhoom.ArousalCharmMeter.arousalMenuIconPos = JSON.parse(Dhoom.Parameters['Menu Arousal Icon Position']);
Dhoom.ArousalCharmMeter.arousalMenuFont = {
    name: String(Dhoom.Parameters['Menu Arousal Font Name']),
    size: Number(Dhoom.Parameters['Menu Arousal Font Size']),
    color: String(Dhoom.Parameters['Menu Arousal Font Color']),
    outlineWidth: Number(Dhoom.Parameters['Menu Arousal Font Outline Width']),
    outlineColor: String(Dhoom.Parameters['Menu Arousal Font Outline Color']),
    bold: JSON.parse(Dhoom.Parameters['Menu Arousal Font Bold'].toLowerCase()),
    italic: JSON.parse(Dhoom.Parameters['Menu Arousal Font Italic'].toLowerCase()),
};

Dhoom.ArousalCharmMeter.arousalMapSwitch = Number(Dhoom.Parameters['Map Arousal Enable Switch ID']);
Dhoom.ArousalCharmMeter.arousalMapRect = JSON.parse(Dhoom.Parameters['Map Arousal Window Rect']);
Dhoom.ArousalCharmMeter.arousalMapOpacity = Number(Dhoom.Parameters['Map Arousal Window Opacity'] || 255);
Dhoom.ArousalCharmMeter.arousalMapDraw = JSON.parse(Dhoom.Parameters['Map Arousal Draw Value?']) || true;
Dhoom.ArousalCharmMeter.arousalMapTextRect = JSON.parse(Dhoom.Parameters['Map Arousal Text Area']);
Dhoom.ArousalCharmMeter.arousalMapBarRect = JSON.parse(Dhoom.Parameters['Map Arousal Bar Rect']);
Dhoom.ArousalCharmMeter.arousalMapIconPos = JSON.parse(Dhoom.Parameters['Map Arousal Icon Position']);
Dhoom.ArousalCharmMeter.arousalMapFont = {
    name: String(Dhoom.Parameters['Map Arousal Font Name']),
    size: Number(Dhoom.Parameters['Map Arousal Font Size']),
    color: String(Dhoom.Parameters['Map Arousal Font Color']),
    outlineWidth: Number(Dhoom.Parameters['Map Arousal Font Outline Width']),
    outlineColor: String(Dhoom.Parameters['Map Arousal Font Outline Color']),
    bold: JSON.parse(Dhoom.Parameters['Map Arousal Font Bold'].toLowerCase()),
    italic: JSON.parse(Dhoom.Parameters['Map Arousal Font Italic'].toLowerCase()),
};

Dhoom.ArousalCharmMeter.charmVariable = Number(Dhoom.Parameters['Charm Variable ID']);
Dhoom.ArousalCharmMeter.charmMaxValue = Number(Dhoom.Parameters['Max Charm']);
Dhoom.ArousalCharmMeter.charmBaseColors = eval(Dhoom.Parameters['Charm Base Color']);
Dhoom.ArousalCharmMeter.charmSettings = [];
for (var i = 8; i >= 1; i--) {
	if (Dhoom.Parameters['Charm Settings ' + i] !== '') {
		Dhoom.ArousalCharmMeter.charmSettings.push(eval(String(Dhoom.Parameters['Charm Settings ' + i])));
	}
}
Dhoom.ArousalCharmMeter.charmSettings.sort(function(a, b) {
	return a[0] - b[0];
});

Dhoom.ArousalCharmMeter.charmMenuSwitch = Number(Dhoom.Parameters['Menu Charm Enable Switch ID']);
Dhoom.ArousalCharmMeter.charmMenuRect = JSON.parse(Dhoom.Parameters['Menu Charm Window Rect']);
Dhoom.ArousalCharmMeter.charmMenuOpacity = Number(Dhoom.Parameters['Menu Charm Window Opacity'] || 255);
Dhoom.ArousalCharmMeter.charmMenuDraw = JSON.parse(Dhoom.Parameters['Menu Charm Draw Value?']) || true;
Dhoom.ArousalCharmMeter.charmMenuTextRect = JSON.parse(Dhoom.Parameters['Menu Charm Text Area']);
Dhoom.ArousalCharmMeter.charmMenuBarRect = JSON.parse(Dhoom.Parameters['Menu Charm Bar Rect']);
Dhoom.ArousalCharmMeter.charmMenuIconPos = JSON.parse(Dhoom.Parameters['Menu Charm Icon Position']);
Dhoom.ArousalCharmMeter.charmMenuFont = {
    name: String(Dhoom.Parameters['Menu Charm Font Name']),
    size: Number(Dhoom.Parameters['Menu Charm Font Size']),
    color: String(Dhoom.Parameters['Menu Charm Font Color']),
    outlineWidth: Number(Dhoom.Parameters['Menu Charm Font Outline Width']),
    outlineColor: String(Dhoom.Parameters['Menu Charm Font Outline Color']),
    bold: JSON.parse(Dhoom.Parameters['Menu Charm Font Bold'].toLowerCase()),
    italic: JSON.parse(Dhoom.Parameters['Menu Charm Font Italic'].toLowerCase()),
};

Dhoom.ArousalCharmMeter.charmMapSwitch = Number(Dhoom.Parameters['Map Charm Enable Switch ID']);
Dhoom.ArousalCharmMeter.charmMapRect = JSON.parse(Dhoom.Parameters['Map Charm Window Rect']);
Dhoom.ArousalCharmMeter.charmMapOpacity = Number(Dhoom.Parameters['Map Charm Window Opacity'] || 255);
Dhoom.ArousalCharmMeter.charmMapDraw = JSON.parse(Dhoom.Parameters['Map Charm Draw Value?']) || true;
Dhoom.ArousalCharmMeter.charmMapTextRect = JSON.parse(Dhoom.Parameters['Map Charm Text Area']);
Dhoom.ArousalCharmMeter.charmMapBarRect = JSON.parse(Dhoom.Parameters['Map Charm Bar Rect']);
Dhoom.ArousalCharmMeter.charmMapIconPos = JSON.parse(Dhoom.Parameters['Map Charm Icon Position']);
Dhoom.ArousalCharmMeter.charmMapFont = {
    name: String(Dhoom.Parameters['Map Charm Font Name']),
    size: Number(Dhoom.Parameters['Map Charm Font Size']),
    color: String(Dhoom.Parameters['Map Charm Font Color']),
    outlineWidth: Number(Dhoom.Parameters['Map Charm Font Outline Width']),
    outlineColor: String(Dhoom.Parameters['Map Charm Font Outline Color']),
    bold: JSON.parse(Dhoom.Parameters['Map Charm Font Bold'].toLowerCase()),
    italic: JSON.parse(Dhoom.Parameters['Map Charm Font Italic'].toLowerCase()),
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Graphics
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.ArousalCharmMeter.Graphics_createGameFontLoader = Graphics._createGameFontLoader;
Graphics._createGameFontLoader = function() {
    Dhoom.ArousalCharmMeter.Graphics_createGameFontLoader.call(this);
    this._createFontLoader(Dhoom.ArousalCharmMeter.arousalMapFont.name);
    this._createFontLoader(Dhoom.ArousalCharmMeter.arousalMenuFont.name);
    this._createFontLoader(Dhoom.ArousalCharmMeter.charmMapFont.name);
    this._createFontLoader(Dhoom.ArousalCharmMeter.charmMenuFont.name);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Bitmap
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
if (typeof Bitmap.prototype.changeTextStyle === 'undefined') {
    Dhoom.ArousalCharmMeter.Bitmap_initialize = Bitmap.prototype.initialize;
    Bitmap.prototype.initialize = function (width, height) {
        Dhoom.ArousalCharmMeter.Bitmap_initialize.call(this, width, height);
        this.fontBold = false;
    };

    Dhoom.ArousalCharmMeter.Bitmap_makeFontNameText = Bitmap.prototype._makeFontNameText;
    Bitmap.prototype._makeFontNameText = function () {
        if (this.fontBold) return 'Bold ' + this.fontSize + 'px ' + this.fontFace;
        return Dhoom.ArousalCharmMeter.Bitmap_makeFontNameText.call(this);
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

    Dhoom.ArousalCharmMeter.Bitmap_drawTextOutline = Bitmap.prototype._drawTextOutline;
    Bitmap.prototype._drawTextOutline = function (text, tx, ty, maxWidth) {
        if (this.outlineWidth === 0) return;
        Dhoom.ArousalCharmMeter.Bitmap_drawTextOutline.call(this, text, tx, ty, maxWidth);
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

Window_MeterBase.prototype.meterText = function (index) {
	return '';
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
	this.meterSettings().forEach(function(setting, index) {
		if (value >= setting[0]) {
			this._text = this.meterText(index);
			this._color1 = setting[3];
			this._color2 = setting[4];
			this._icon = setting[5];
			this._blinkEnabled = setting[6];
			this._blinkWait = setting[7];
			this._blinkDuration = setting[8];
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
// Window_Arousal
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_Arousal() {
	this.initialize.apply(this, arguments);
}

Window_Arousal.prototype = Object.create(Window_MeterBase.prototype);
Window_Arousal.prototype.constructor = Window_Arousal;

Window_Arousal.prototype.windowRect = function() {
	return Dhoom.ArousalCharmMeter.arousalMenuRect;
};

Window_Arousal.prototype.windowOpacity = function() {
	return Dhoom.ArousalCharmMeter.arousalMenuOpacity;
};

Window_Arousal.prototype.meterValue = function() {
	return $gameVariables.value(Dhoom.ArousalCharmMeter.arousalVariable);
};

Window_Arousal.prototype.meterMaxValue = function() {
	return Dhoom.ArousalCharmMeter.arousalMaxValue;
};

Window_Arousal.prototype.meterSettings = function() {
	return Dhoom.ArousalCharmMeter.arousalSettings;
};

Window_Arousal.prototype.meterBaseColors = function() {
	return Dhoom.ArousalCharmMeter.arousalBaseColors;
};

Window_Arousal.prototype.drawMeterValueOn = function() {
	return Dhoom.ArousalCharmMeter.arousalMenuDraw;
};

Window_Arousal.prototype.meterFont = function () {
	return Dhoom.ArousalCharmMeter.arousalMenuFont;
};

Window_Arousal.prototype.meterTextRect = function() {
	return Dhoom.ArousalCharmMeter.arousalMenuTextRect;
};

Window_Arousal.prototype.meterBarRect = function() {
	return Dhoom.ArousalCharmMeter.arousalMenuBarRect;
};

Window_Arousal.prototype.meterIconPos = function() {
	return Dhoom.ArousalCharmMeter.arousalMenuIconPos;
};

Window_Arousal.prototype.meterText = function (index) {
	return this.meterSettings()[index][1];
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_Charm
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_Charm() {
	this.initialize.apply(this, arguments);
}

Window_Charm.prototype = Object.create(Window_MeterBase.prototype);
Window_Charm.prototype.constructor = Window_Charm;

Window_Charm.prototype.windowRect = function() {
	return Dhoom.ArousalCharmMeter.charmMenuRect;
};

Window_Charm.prototype.windowOpacity = function() {
	return Dhoom.ArousalCharmMeter.charmMenuOpacity;
};

Window_Charm.prototype.meterValue = function() {
	return $gameVariables.value(Dhoom.ArousalCharmMeter.charmVariable);
};

Window_Charm.prototype.meterMaxValue = function() {
	return Dhoom.ArousalCharmMeter.charmMaxValue;
};

Window_Charm.prototype.meterSettings = function() {
	return Dhoom.ArousalCharmMeter.charmSettings;
};

Window_Charm.prototype.meterBaseColors = function() {
	return Dhoom.ArousalCharmMeter.charmBaseColors;
};

Window_Charm.prototype.drawMeterValueOn = function() {
	return Dhoom.ArousalCharmMeter.charmMenuDraw;
};

Window_Charm.prototype.meterFont = function () {
	return Dhoom.ArousalCharmMeter.charmMenuFont;
};

Window_Charm.prototype.meterTextRect = function() {
	return Dhoom.ArousalCharmMeter.charmMenuTextRect;
};

Window_Charm.prototype.meterBarRect = function() {
	return Dhoom.ArousalCharmMeter.charmMenuBarRect;
};

Window_Charm.prototype.meterIconPos = function() {
	return Dhoom.ArousalCharmMeter.charmMenuIconPos;
};

Window_Charm.prototype.meterText = function (index) {
	return this.meterSettings()[index][1];
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_MapArousal
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_MapArousal() {
	this.initialize.apply(this, arguments);
}

Window_MapArousal.prototype = Object.create(Window_Arousal.prototype);
Window_MapArousal.prototype.constructor = Window_MapArousal;

Window_MapArousal.prototype.windowRect = function() {
	return Dhoom.ArousalCharmMeter.arousalMapRect;
};

Window_MapArousal.prototype.windowOpacity = function() {
	return Dhoom.ArousalCharmMeter.arousalMapOpacity;
};

Window_MapArousal.prototype.drawMeterValueOn = function() {
	return Dhoom.ArousalCharmMeter.arousalMapDraw;
};

Window_MapArousal.prototype.meterTextRect = function() {
	return Dhoom.ArousalCharmMeter.arousalMapTextRect;
};

Window_MapArousal.prototype.meterBarRect = function() {
	return Dhoom.ArousalCharmMeter.arousalMapBarRect;
};

Window_MapArousal.prototype.meterIconPos = function() {
	return Dhoom.ArousalCharmMeter.arousalMapIconPos;
};

Window_MapArousal.prototype.meterFont = function () {
	return Dhoom.ArousalCharmMeter.arousalMapFont;
};

Window_MapArousal.prototype.meterText = function (index) {
	return this.meterSettings()[index][2];
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_MapCharm
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Window_MapCharm() {
	this.initialize.apply(this, arguments);
}

Window_MapCharm.prototype = Object.create(Window_Charm.prototype);
Window_MapCharm.prototype.constructor = Window_MapCharm;

Window_MapCharm.prototype.windowRect = function() {
	return Dhoom.ArousalCharmMeter.charmMapRect;
};

Window_MapCharm.prototype.windowOpacity = function() {
	return Dhoom.ArousalCharmMeter.charmMapOpacity;
};

Window_MapCharm.prototype.drawMeterValueOn = function() {
	return Dhoom.ArousalCharmMeter.charmMapDraw;
};

Window_MapCharm.prototype.meterTextRect = function() {
	return Dhoom.ArousalCharmMeter.charmMapTextRect;
};

Window_MapCharm.prototype.meterBarRect = function() {
	return Dhoom.ArousalCharmMeter.charmMapBarRect;
};

Window_MapCharm.prototype.meterIconPos = function() {
	return Dhoom.ArousalCharmMeter.charmMapIconPos;
};

Window_MapCharm.prototype.meterFont = function () {
	return Dhoom.ArousalCharmMeter.charmMapFont;
};

Window_MapCharm.prototype.meterText = function (index) {
	return this.meterSettings()[index][2];
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_Menu
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.ArousalCharmMeter.Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
	Dhoom.ArousalCharmMeter.Scene_Menu_create.call(this);
	if ($gameSwitches.value(Dhoom.ArousalCharmMeter.arousalMenuSwitch)) this.createArousalWindow();
	if ($gameSwitches.value(Dhoom.ArousalCharmMeter.charmMenuSwitch)) this.createCharmWindow();
};

Scene_Menu.prototype.createArousalWindow = function() {
	this._arousalWindow = new Window_Arousal();
	this.addChild(this._arousalWindow);
};

Scene_Menu.prototype.createCharmWindow = function() {
	this._charmWindow = new Window_Charm();
	this.addChild(this._charmWindow);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_Map
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.ArousalCharmMeter.Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
	Dhoom.ArousalCharmMeter.Scene_Map_createAllWindows.call(this);
	this.createArousalCharmWindow();
};

Scene_Map.prototype.createArousalCharmWindow = function() {
	this._arousalWindow = new Window_MapArousal();
	this.addChild(this._arousalWindow);
	this._charmWindow = new Window_MapCharm();
	this.addChild(this._charmWindow);
	this.updateArousalCharmWindow();
};

Dhoom.ArousalCharmMeter.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
	Dhoom.ArousalCharmMeter.Scene_Map_update.call(this);
	this.updateArousalCharmWindow();
};

Scene_Map.prototype.updateArousalCharmWindow = function() {
	//if (this._hideMorConfWindow) return
	this._arousalWindow.visible = $gameSwitches.value(Dhoom.ArousalCharmMeter.arousalMapSwitch);
	this._charmWindow.visible = $gameSwitches.value(Dhoom.ArousalCharmMeter.charmMapSwitch);
	if (this._arousalWindow.visible) this._arousalWindow.updateValue();
	if (this._charmWindow.visible) this._charmWindow.updateValue();
};

Dhoom.ArousalCharmMeter.Scene_Map_callMenu = Scene_Map.prototype.callMenu;
Scene_Map.prototype.callMenu = function() {
    Dhoom.ArousalCharmMeter.Scene_Map_callMenu.call(this);
	this._arousalWindow.hide();
	this._charmWindow.hide();
	//this._hideMorConfWindow = true;
};

var CryptoJS = CryptoJS;