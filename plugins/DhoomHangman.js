//=============================================================================
// DhoomHangman.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_Hangman = true;

var Dhoom = Dhoom || {};
Dhoom.Hangman = Dhoom.Hangman || {};
/*:
@plugindesc Dhoom Hangman v1.1
@author DrDhoom / (c)Boner Games - www.bonergames.com
 
@param General

@param Input

@param Symbol

@param Appearance

@param Position

@param Sound

@param Result Switch ID
@desc Switch ID for storing the last game result.
@default 1
@type switch
@parent General

@param Default Time Limit
@desc Default time limit in second.
@default 60
@type number
@min -1000
@parent General

@param Show Solution
@desc Show solution when the player gave up
@default true
@type boolean
@parent General

@param TDDP Mouse Cursor
@desc Cursor filename when hovering over buttons. Only if TDDP Mouse System Ex is installed.
@default select
@parent General



@param Giveup Input
@desc Input for giveup button. a-z 0-9 esc backspace tab enter shift ctrl alt esc space pageup pagedown left up right down
@default esc
@type text
@parent Input



@param Giveup Symbol
@desc Text for give up button
@default Give up (Esc)
@type text
@parent Symbol

@param Keyboard Format
@desc Input characters format.
@type select
@default QWERTY
@option QWERTY
@option Alphabetical
@parent Symbol



@param Background Filename
@desc Scene background
@default background
@type file
@require
@dir img/numbergame/
@parent Appearance

@param Tries Setting
@desc Setting for how many tries that the player can make.
@type struct<triesSetting>
@parent Appearance
@default {"alignment":"vertical","normal":"try-normal","active":"try-active","spacing":"2"}

@param Keyboard Setting
@desc Setting for keyboard appearance.
@type struct<keyboardSetting>
@parent Appearance
@default {"buttonNormal":"keyboard background inactive","buttonActive":"keyboard background","spacing":"2","x":"5","y":"5","width":"52","height":"53","text":"%1","style":"{\"name\":\"Eraser\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"0\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","correctStyle":"{\"name\":\"Eraser\",\"size\":\"32\",\"color\":\"#5eff62\",\"outlineWidth\":\"0\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","wrongStyle":"{\"name\":\"Eraser\",\"size\":\"32\",\"color\":\"#ff5e5e\",\"outlineWidth\":\"0\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","tone":"{\"hover\":\"[72, 72, 72, 0]\",\"disabled\":\"[0, 0, 0, 255]\",\"hoverDisabled\":\"[72, 72, 72, 255]\"}"}

@param Giveup Setting
@desc Setting for button filenames and text style.
@type struct<giveupSetting>
@parent Appearance
@default {"buttonNormal":"button-giveup","x":"24","y":"24","width":"179","height":"66","text":"%1","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","tone":"{\"hover\":\"[72, 72, 72, 0]\",\"disabled\":\"[0, 0, 0, 255]\",\"hoverDisabled\":\"[72, 72, 72, 255]\"}"}

@param Characters Setting
@desc Setting for inputted characters.
@type struct<charactersSetting>
@parent Appearance
@default {"filename":"character background","spacing":"4","x":"6","y":"6","width":"79","height":"71","text":"%1","style":"{\"name\":\"Eraser\",\"size\":\"58\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"0\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}"}

@param Hint Window
@desc Window for showing hint.
@type struct<winSetting>
@parent Appearance
@default {"width":"845","height":"54","opacity":"0","padding":"0","text":"%1","style":"{\"name\":\"Eraser\",\"size\":\"48\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"0\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","background":"hint background","backgroundPosition":"[-17, -29]"}

@param Win Window
@desc Window setting like opacity, background, and text style.
@type struct<winSetting>
@parent Appearance
@default {"width":"1296","height":"768","opacity":"0","padding":"12","text":"%1","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","background":"win-background","backgroundPosition":"[0, 0]"}

@param Giveup Window
@desc Window setting like opacity, background, and text style.
@type struct<giveupWindow>
@parent Appearance
@default {"width":"1296","height":"768","opacity":"0","padding":"12","text":"%1","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","background":"solution-background","backgroundPosition":"[0, 0]"}

@param Time Bar
@desc Time bar setting
@type struct<timeBar>
@parent Appearance
@default {"bar":"time-bar","background":"time-background","backgroundPosition":"[-41, -114]","direction":"vertical","x":"-18","y":"550","width":"69","height":"52","text":"%1","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}"}



@param Tries Position
@desc [x, y]
@type text
@parent Position
@default [1120, 55]

@param Keyboard Position
@desc [x, y]
@default [226, 501]
@parent Position

@param Giveup Position
@desc Position for give up button [X, Y]
@default [892, 589]
@type text
@parent Position

@param Characters Rect
@desc Area position and size for inputted characters. [x, y, width, height]
@parent Position
@default [208, 166, 881, 287]

@param Hint Window Position
@desc Hint window position. [x, y]
@default [226, 80]
@parent Position

@param Win Window Position
@desc Win window position [x, y]
@default [0, 0]
@type text
@parent Position

@param Giveup Window Position
@desc Give up window position [x, y]
@default [0, 0]
@type text
@parent Position

@param Time Bar Position
@desc Time bar position [x, y]
@default [148, 64]
@type text
@parent Position


@param Keyboard SE
@desc SE for keyboard buttons.
@type struct<audioSE>
@parent Sound
@default {"name":"Cursor1","volume":"90","pitch":"100","pan":"0"}

@param Win ME
@desc ME that will be played when winning
@default {"name":"Victory1","volume":"90","pitch":"100","pan":"0"}
@type struct<audioME>
@parent Sound

@param Fail ME
@desc ME that will be played when failing
@default {"name":"Defeat1","volume":"90","pitch":"100","pan":"0"}
@type struct<audioME>
@parent Sound

@help 
   Boner Games © 2018 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
*/

/*~struct~triesSetting:
@param alignment
@text Alignment
@type select
@option horizontal
@option vertical

@param normal
@text Normal Filename
@type file
@dir img/numbergame/
@require

@param active
@text Active Filename
@type file
@dir img/numbergame/
@require

@param spacing
@text Spacing
@type number
*/

/*~struct~keyboardSetting:
@param buttonNormal
@text Normal Button Filename
@desc Filename for normal button
@default button-number-normal
@type file
@dir img/numbergame/
@require

@param buttonActive
@text Active Button Filename
@desc Filename for active button
@default button-number-active
@type file
@dir img/numbergame/
@require

@param spacing
@text Spacing
@desc Spacing between each keys.
@type number

@param x
@text Text X
@desc Text X position
@default 5
@type number
@min -1000

@param y
@text Text Y
@desc Text Y position
@default 5
@type number
@min -1000

@param width
@text Text Width
@desc Text width area
@default 52
@type number
@min 1

@param height
@text Text Height
@desc Text height area
@default 53
@type number
@min 1

@param text
@text Text Format
@desc %1 = Number
@default %1

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param correctStyle
@text Correct Text Style
@desc Text style for correct character.
@type struct<FontStyle>

@param wrongStyle
@text Wrong Text Style
@desc Text style for wrong character.
@type struct<FontStyle>

@param tone
@text Button Tone
@desc Button hover and disabled tone
@type struct<buttonTone>
*/

/*~struct~giveupSetting:
@param buttonNormal
@text Normal Button Filename
@desc Filename for normal button
@default button-giveup
@type file
@dir img/numbergame/
@require

@param x
@text Text X
@desc Text X position
@default 24
@type number
@min -1000

@param y
@text Text Y
@desc Text Y position
@default 24
@type number
@min -1000

@param width
@text Text Width
@desc Text width area
@default 179
@type number
@min 1

@param height
@text Text Height
@desc Text height area
@default 66
@type number
@min 1

@param text
@text Text Format
@desc %1 = Number
@default %1

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param tone
@text Button Tone
@desc Button hover and disabled tone
@type struct<buttonTone>
*/

/*~struct~charactersSetting:
@param filename
@text Background Filename
@default 
@type file
@dir img/numbergame/
@require

@param spacing
@text Spacing
@desc Spacing between each characters.
@type number
@default 4

@param x
@text Text X
@desc Text X position
@default 6
@type number
@min -1000

@param y
@text Text Y
@desc Text Y position
@default 6
@type number
@min -1000

@param width
@text Text Width
@desc Text width area
@default 79
@type number
@min 1

@param height
@text Text Height
@desc Text height area
@default 71
@type number
@min 1

@param text
@text Text Format
@desc %1 = Number
@default %1

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>
*/

/*~struct~buttonSetting:
@param buttonNormal
@text Normal Button Filename
@desc Filename for normal button
@default button-normal
@type file
@dir img/numbergame/
@require

@param buttonActive
@text Active Button Filename
@desc Filename for active button
@default button-active
@type file
@dir img/numbergame/
@require

@param x
@text Text X
@desc Text X position
@default 12
@type number
@min -1000

@param y
@text Text Y
@desc Text Y position
@default 12
@type number
@min -1000

@param width
@text Text Width
@desc Text width area
@default 90
@type number
@min 1

@param height
@text Text Height
@desc Text height area
@default 90
@type number
@min 1

@param text
@text Text Format
@desc %1 = Number
@default %1

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param tone
@text Button Tone
@desc Button hover and disabled tone
@type struct<buttonTone>
*/

/*~struct~windowSetting:
@param width
@text Window Width
@desc Window width
@default 114
@type number
@min 32

@param height
@text Window Height
@desc Window height area
@default 114
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
@min 0

@param text
@text Text Format
@desc %1 = Number
@default %1

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param background
@text Window Background
@desc Window background filename
@default target-background
@type file
@dir img/numbergame/
@require

@param backgroundPosition
@text Window Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]
*/

/*~struct~winSetting:
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

@param text
@text Text Format
@desc %1 = Number
@default %1

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param background
@text Window Background
@desc Window background filename
@default win-background
@type file
@dir img/numbergame/
@require

@param backgroundPosition
@text Window Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]
*/

/*~struct~giveupWindow:
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

@param text
@text Text Format
@desc %1 = Number
@default %1

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param background
@text Window Background
@desc Window background filename
@default solution-background
@type file
@dir img/numbergame/
@require

@param backgroundPosition
@text Window Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]
*/

/*~struct~timeBar:
@param bar
@text Bar Filename
@desc Bar filename
@default time-bar
@type file
@dir img/numbergame/
@require

@param background
@text Bar Background
@desc Bar background filename
@default time-background
@type file
@dir img/numbergame/
@require

@param backgroundPosition
@text Bar Background Position
@desc Bar background position [x, y]
@default [-41, -59]

@param direction
@text Bar direction
@desc Direction of the bar
@default vertical
@type select
@option vertical
@option horizontal

@param x
@text Text X
@desc Text X position
@default -18
@type number
@min -1000

@param y
@text Text Y
@desc Text Y position
@default 610
@type number
@min -1000

@param width
@text Text Width
@desc Text width area
@default 69
@type number
@min 1

@param height
@text Text Height
@desc Text height area
@default 52
@type number
@min 1

@param text
@text Text Format
@desc %1 = Number
@default %1

@param style
@text Text Style
@desc Text style
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

/*~struct~buttonTone:
@param hover
@text Hover Tone
@desc Hover tone [r, g, b, gray]
@default [72, 72, 72, 0]

@param disabled
@text Disabled Tone
@desc Disabled tone [r, g, b, gray]
@default [0, 0, 0, 255]

@param hoverDisabled
@text Hovered and Disabled Tone
@desc Hovered and disabled tone [r, g, b, gray]
@default [72, 72, 72, 255]
*/

/*~struct~audioSE:
@param name
@text Filename
@desc ME Filename
@type file
@dir audio/se/

@param volume
@text Volume
@desc ME volume
@type number
@max 100
@default 90

@param pitch
@text Pitch
@desc ME pitch
@type number
@max 150
@min 50
@default 100

@param pan
@text Pan
@desc ME pan
@type number
@max 100
@min -100
@default 0
*/

/*~struct~audioME:
@param name
@text Filename
@desc ME Filename
@type file
@dir audio/me/

@param volume
@text Volume
@desc ME volume
@type number
@max 100
@default 90

@param pitch
@text Pitch
@desc ME pitch
@type number
@max 150
@min 50
@default 100

@param pan
@text Pan
@desc ME pan
@type number
@max 100
@min -100
@default 0
*/

var Window_HangmanBase,Sprite_HangmanCharacter,Spriteset_HangmanCharacters,Sprite_HangmanButton,Sprite_HangmanKey,Spriteset_HangmanTries,Sprite_HangmanTimeBar,Spriteset_HangmanKeyboard,Scene_Hangman,CryptoJS;+function() {
function _$af926241(string){try{return JSON.parse(string,function(key,value){try{return this.jsonParse(value)}catch(e){return value}}.bind(this))}catch(e){return string}}function _$af926243(sym){return Dhoom.jsonParse(Dhoom.Parameters[sym])}function _$af926244(){this._maxTry= 8;this._maxTime= this.defaultTime;this._wrongChars= [];this._correctChars= [];this._hint= "";this._target= [];this._realTarget= [];this._solution= "";this._done= false}function _$af926245(solution,hint,maxTry,maxTime){this.clearValues();this._maxTry= maxTry;if(maxTime> 0){this._maxTime= maxTime};this._hint= hint;this._solution= solution;this._target= this._solution.toUpperCase().split("");this._realTarget= this._target.filter(function(value,pos){return value!== " "&& this._target.indexOf(value)=== pos},this)}function _$af926247(){Dhoom.Hangman.TouchInput_clear.call(this);this._mouseX= 0;this._mouseY= 0}function _$af926248(){return this._mouseX}function _$af926249(){return this._mouseY}function _$af926250(event){Dhoom.Hangman.TouchInput_onMouseMove.call(this,event);this._mouseX= Graphics.pageToCanvasX(event.pageX);this._mouseY= Graphics.pageToCanvasY(event.pageY)}function _$af926251(width,height){Dhoom.Hangman.Bitmap_initialize.call(this,width,height);this.fontBold= false}function _$af926252(){if(this.fontBold){return "Bold "+ this.fontSize+ "px "+ this.fontFace};return Dhoom.Hangman.Bitmap_makeFontNameText.call(this)}function _$af926253(style){this.fontFace= style.name.length> 0?style.name:"GameFont";this.fontSize= style.size;this.textColor= style.color;this.outlineWidth= style.outlineWidth;this.outlineColor= style.outlineColor;this.fontBold= style.bold;this.fontItalic= style.italic}function _$af926254(text,tx,ty,maxWidth){if(this.outlineWidth=== 0){return};Dhoom.Hangman.Bitmap_drawTextOutline.call(this,text,tx,ty,maxWidth)}function _$af926255(command,args){Dhoom.Hangman.Game_Interpreter_pluginCommand.call(this,command,args);if(command.toLowerCase()=== "hangman"){if(this._params[0].match(/hangman[ ]["'](.*)["'][ ]["'](.*)["'][ ](\d+)[ ](\d+)/i)){Dhoom.Hangman.start(RegExp.$1,RegExp.$2,Number(RegExp.$3),Number(RegExp.$4))}else {if(this._params[0].match(/hangman[ ]["'](.*)["'][ ]["'](.*)["'][ ](\d+)/i)){Dhoom.Hangman.start(RegExp.$1,RegExp.$2,Number(RegExp.$3),false)}};SceneManager.push(_$af926318)}}function _$af926256(){this.initialize.apply(this,arguments)}function _$af926257(setting){this._setting= setting;Window_Base.prototype.initialize.call(this,0,0,this._setting.width,this._setting.height);this._text= "";this.opacity= this._setting.opacity;this.createBackground()}function _$af926258(){return this._setting.padding}function _$af926259(){this._background=  new Sprite();this._background.bitmap= ImageManager.loadBitmap(Dhoom.Hangman.mainDir,this._setting.background);this._background.x= this._setting.backgroundPosition[0];this._background.y= this._setting.backgroundPosition[1];this.addChildToBack(this._background)}function _$af926260(text){if(this._text=== text){return};this._text= text;this.refresh()}function _$af926261(){this.contents.clear();this.contents.changeTextStyle(this._setting.style);var text=this._setting.text.format(this._text);this.contents.drawText(text,0,0,this.contents.width,this.contents.height,this._setting.style.align)}function _$af926262(){this.initialize.apply(this,arguments)}function _$af926263(char){Sprite.prototype.initialize.call(this);this._char= char;if(Dhoom.Hangman._realTarget.contains(this._char)){this.bitmap= ImageManager.loadBitmap(Dhoom.Hangman.mainDir,this.setting().filename)};this.createTextSprite()}function _$af926264(){return Dhoom.Hangman.charactersSetting}function _$af926265(){this._textSprite=  new Sprite();var w=this.setting().width;var h=this.setting().height;this._textSprite.bitmap=  new Bitmap(w,h);this._textSprite.x= this.setting().x;this._textSprite.y= this.setting().y;this._textSprite.bitmap.changeTextStyle(this.setting().style);this._textSprite.bitmap.drawText(this._char.toUpperCase(),0,0,w,h,this.setting().style.align);this.addChild(this._textSprite)}function _$af926266(){Sprite.prototype.update.call(this);this.updateVisibility()}function _$af926267(){this._textSprite.visible= !Dhoom.Hangman._realTarget.contains(this._char)|| Dhoom.Hangman._correctChars.contains(this._char)}function _$af926268(){this.initialize.apply(this,arguments)}function _$af926269(){Sprite.prototype.initialize.call(this);this.createSprites()}function _$af926270(){this._sprites= [];var chars=Dhoom.Hangman._target;for(var i=0;i< chars.length;i++){var sprite= new _$af926262(chars[i]);this.addChild(sprite);this._sprites.push(sprite)};this.arrangeSprites()}function _$af926271(){Sprite.prototype.update.call(this);this.arrangeSprites()}function _$af926272(){var width=this._sprites[0].width;if(this._tempWidth!== width&& width> 0){this._tempWidth= width;var rect=Dhoom.Hangman.charactersRect;var height=this._sprites[0].height;var spacing=Dhoom.Hangman.charactersSetting.spacing;var cols=Math.floor((rect[2]+ spacing)/ (width+ spacing));var words=Dhoom.Hangman._solution.split(" ");var lines=[];var text="";while(words.length> 0){if((text+ " "+ words[0]).trim().length<= cols){text= (text+ " "+ words.shift()).trim();if(words.length=== 0){lines.push(text)}}else {if(text.length=== 0){text= words.shift()};lines.push(text);text= ""}};var y=Math.round((rect[3]- ((height+ spacing)* lines.length- spacing))/ 2);var k=0;for(var i=0;i< lines.length;i++){var x=Math.round((rect[2]- lines[i].length* (width+ spacing)- spacing)/ 2);for(var j=0;j< lines[i].length+ 1;j++){if(this._sprites[k]){this._sprites[k].x= x+ (width+ spacing)* j;this._sprites[k].y= y;k++}};y+= height+ spacing}}}function _$af926273(){this.initialize.apply(this,arguments)}function _$af926274(setting,data){Sprite_Base.prototype.initialize.call(this);this._setting= setting;this._data= data;this._tempData= data;this._isDisabled= false;this._active= false;this._hovered= false;this._tempActive= false;this._selected= false;this._tempSelected= false;this._oriData= data;this.refresh()}function _$af926275(){var bitmap=ImageManager.loadBitmap(Dhoom.Hangman.mainDir,this.getBitmapFilename());this._tempActive= this._active;this._tempData= this._data;if(!bitmap.isReady()){this._needRefresh= true;return};if((!this.bitmap|| (this.bitmap.width!== bitmap.width&& this.bitmap.height!== bitmap.height)) && bitmap.isReady()){this.bitmap=  new Bitmap(bitmap.width,bitmap.height)};this.bitmap.clear();this.bitmap.blt(bitmap,0,0,bitmap.width,bitmap.height,0,0);this.bitmap.changeTextStyle(this._setting.style);this.bitmap.drawText(this.text(),this._setting.x,this._setting.y,this._setting.width,this._setting.height,this._setting.style.align);this._needRefresh= false;this._tempDisabled= null;this._tempHovered= null;this.setColorTone([0,0,0,0]);this._isReady= true}function _$af926276(){return this._active?this._setting.buttonActive:this._setting.buttonNormal}function _$af926277(){return this._setting.text.format(this._data)}function _$af926278(){Sprite_Base.prototype.update.call(this);this.updateBitmap();this._hovered= this.isHovered();this.updateTone();if(this.isTouched()|| (this.hasInput()&& this.isInputTriggered())){this.updateInput()}}function _$af926279(){if((this._needRefresh&& ImageManager.isReady())|| this._tempActive!== this._active|| this._data!== this._tempData){this.refresh()}}function _$af926280(){var x=this.canvasToLocalX(TouchInput._mouseX);var y=this.canvasToLocalY(TouchInput._mouseY);return !Dhoom.Hangman._done&& x>= 0 && x< this.width && y>= 0 && y< this.height}function _$af926281(x){var node=this;while(node){x-= node.x;node= node.parent};return x}function _$af926282(y){var node=this;while(node){y-= node.y;node= node.parent};return y}function _$af926283(){if(this._tempDisabled=== this._isDisabled&& this._tempHovered=== this._hovered&& this._tempSelected=== this._selected){return};if(this._isDisabled&& (this._hovered|| this._selected)){this.setColorTone(this._setting.tone.hoverDisabled)}else {if(this._isDisabled){this.setColorTone(this._setting.tone.disabled)}else {if(this._hovered|| this._selected){this.setColorTone(this._setting.tone.hover)}else {this.setColorTone([0,0,0,0])}}};this._tempHovered= this._hovered;this._tempDisabled= this._isDisabled;this._tempSelected= this._selected}function _$af926284(){if(!this.visible){return};if(this.isHandled()){if(this.isHandlerDisabled()){SoundManager.playBuzzer()}else {this.callInputHandler()}}}function _$af926285(input,method){this._inputHandler= method;this._handlerInput= input}function _$af926286(){return !Dhoom.Hangman._done&&  !!this._inputHandler}function _$af926287(){this._inputHandler(this.handlerParams())}function _$af926288(){return this._isDisabled}function _$af926289(){return this._oriData!== this._data}function _$af926290(){return !!this._handlerInput}function _$af926291(){if(this.hasInput()&& Input.isTriggered(this._handlerInput)){Input.update();return true};return false}function _$af926292(){return this}function _$af926293(){if(this._hovered&& TouchInput.isTriggered()){TouchInput.update();return true};return false}function _$af926294(){this.initialize.apply(this,arguments)}function _$af926295(){var result=_$af926273.prototype.isHovered.call(this);return this._active&& result}function _$af926296(){return _$af926273.prototype.isHandlerDisabled.call(this)||  !this._active}function _$af926297(){this.initialize.apply(this,arguments)}function _$af926298(){Sprite.prototype.initialize.call(this);this.createSprites()}function _$af926299(){this._sprites= [];for(var i=0;i< Dhoom.Hangman._maxTry;i++){var sprite= new Sprite();sprite.bitmap= ImageManager.loadBitmap(Dhoom.Hangman.mainDir,Dhoom.Hangman.triesSetting.normal);this._sprites.push(sprite);this.addChild(sprite)};this.updateSprites()}function _$af926300(){var spacing=Dhoom.Hangman.triesSetting.spacing;var align=Dhoom.Hangman.triesSetting.alignment;for(var i=0;i< this._sprites.length;i++){var sprite=this._sprites[i];sprite.x= align=== "horizontal"?i* (sprite.width+ spacing):0;sprite.y= align=== "vertical"?i* (sprite.height+ spacing):0}}function _$af926301(){Sprite.prototype.update.call(this);this.updateSprites()}function _$af926302(){if(this._sprites[0]&& this._sprites[0].bitmap.isReady()){this.arrangeSprites()};for(var i=0;i< this._sprites.length;i++){var sprite=this._sprites[i];var filename=i< Dhoom.Hangman._wrongChars.length?Dhoom.Hangman.triesSetting.active:Dhoom.Hangman.triesSetting.normal;sprite.bitmap= ImageManager.loadBitmap(Dhoom.Hangman.mainDir,filename)}}function _$af926303(){this.initialize.apply(this,arguments)}function _$af926304(){Sprite.prototype.initialize.call(this);this._setting= Dhoom.Hangman.timeBarSetting;this._value= this.maxValue();this.createBackground();this.createFill();this.createTextSprite();this.refresh()}function _$af926305(){this._background=  new Sprite();this._background.bitmap= ImageManager.loadBitmap(Dhoom.Hangman.mainDir,this._setting.background);this._background.x= this._setting.backgroundPosition[0];this._background.y= this._setting.backgroundPosition[1];this.addChild(this._background)}function _$af926306(){this._fill=  new Sprite();this.addChild(this._fill);this.createFillBitmap()}function _$af926307(){var bitmap=ImageManager.loadBitmap(Dhoom.Hangman.mainDir,this._setting.bar);if(!bitmap.isReady()){this._needRefresh= true;return};this._needRefresh= false;this._fill.bitmap=  new Bitmap(bitmap.width,bitmap.height)}function _$af926308(){this._textSprite=  new Sprite();this._textSprite.bitmap=  new Bitmap(this._setting.width,this._setting.height);this._textSprite.x= this._setting.x;this._textSprite.y= this._setting.y;this.addChild(this._textSprite)}function _$af926309(){Sprite.prototype.update.call(this);if(this._needRefresh&& ImageManager.isReady()){this.createFillBitmap()};if(!Dhoom.Hangman._done){if(this._value){this._value= Math.max(this._value- 1,0)};if(this._value!== this._tempValue){this.refresh()}}}function _$af926310(){if(!this._fill.bitmap){return};this._tempValue= this.value();this._fill.bitmap.clear();var bitmap=ImageManager.loadBitmap(Dhoom.Hangman.mainDir,this._setting.bar);var rate=this._tempValue< 0?1:this._tempValue/ this.maxValue();if(this._setting.direction=== "vertical"){this._fill.bitmap.blt(bitmap,0,bitmap.height- bitmap.height* rate,bitmap.width,bitmap.height* rate,0,bitmap.height- bitmap.height* rate)}else {this._fill.bitmap.blt(bitmap,0,0,bitmap.width* rate,bitmap.height,0,0)};this._textSprite.bitmap.clear();this._textSprite.bitmap.changeTextStyle(this._setting.style);var text=this._tempValue< 0?"-":Math.ceil(this._tempValue/ 60);this._textSprite.bitmap.drawText(text,0,0,this._textSprite.width,this._textSprite.height,this._setting.style.align)}function _$af926311(){return Dhoom.Hangman._maxTime* 60}function _$af926312(){return this._value}function _$af926313(){this.initialize.apply(this,arguments)}function _$af926314(){Sprite.prototype.initialize.call(this);this._needRefresh= false;this.createKeySprites()}function _$af926315(){this._keySprites= [];var format=Dhoom.Hangman.charactersFormat=== "Alphabetical"?Dhoom.Hangman._formatAlphabetic:Dhoom.Hangman._formatQwerty;for(var i=0;i< format.length;i++){var sprite= new _$af926294(JsonEx.makeDeepCopy(Dhoom.Hangman.keyboardSetting),format[i].toUpperCase());sprite._active= true;this.addChild(sprite);this._keySprites.push(sprite)};this.arrangeSprites()}function _$af926316(){Sprite.prototype.update.call(this);this.arrangeSprites()}function _$af926317(){var width=this._keySprites[0].width;if(this._tempWidth!== width){this._tempWidth= width;var height=this._keySprites[0].height;var spacing=Dhoom.Hangman.keyboardSetting.spacing;for(var i=0;i< this._keySprites.length;i++){var sprite=this._keySprites[i];if(i< 10){sprite.x= i* (width+ spacing)}else {if(i< 19){sprite.x= width/ 2+ (i- 10)* (width+ spacing);sprite.y= height+ spacing}else {sprite.x= ((10* (width+ spacing)- (7* (width+ spacing)))/ 2- spacing/ 2)+ (i- 19)* (width+ spacing);sprite.y= (height+ spacing)* 2}}}}}function _$af926318(){this.initialize.apply(this,arguments)}function _$af926319(){Scene_Base.prototype.initialize.call(this);this.createBackground();this.createHintWindow();this.createTimeSprite();this.createTriesSpriteset();this.createKeyboardSpriteset();this.createGiveupSprite();this.createCharactersSpriteset();this.createGiveupWindow();this.createWinWindow()}function _$af926320(){this._background=  new Sprite();this._background.bitmap= ImageManager.loadBitmap(Dhoom.Hangman.mainDir,Dhoom.Hangman.background);this.addChild(this._background)}function _$af926321(){this._hintWindow=  new _$af926256(Dhoom.Hangman.hintWindow);this._hintWindow.x= Dhoom.Hangman.hintPosition[0];this._hintWindow.y= Dhoom.Hangman.hintPosition[1];this._hintWindow.setText(Dhoom.Hangman._hint);this.addChild(this._hintWindow)}function _$af926322(){this._timeSprite=  new _$af926303();var pos=Dhoom.Hangman.timeBarPosition;this._timeSprite.x= pos[0];this._timeSprite.y= pos[1];this.addChild(this._timeSprite)}function _$af926323(){this._triesSpriteset=  new _$af926297();var pos=Dhoom.Hangman.triesPosition;this._triesSpriteset.x= pos[0];this._triesSpriteset.y= pos[1];this.addChild(this._triesSpriteset)}function _$af926324(){this._keyboardSpriteset=  new _$af926313();var pos=Dhoom.Hangman.keyboardPosition;this._keyboardSpriteset.x= pos[0];this._keyboardSpriteset.y= pos[1];this.addChild(this._keyboardSpriteset);for(var i=0;i< this._keyboardSpriteset._keySprites.length;i++){var sprite=this._keyboardSpriteset._keySprites[i];sprite.setHandler("#"+ sprite._data.toLowerCase(),this.onKeyboardInput.bind(this))}}function _$af926325(){this._giveupButton=  new _$af926273(Dhoom.Hangman.giveupSetting,Dhoom.Hangman.giveupSymbol);this._giveupButton.x= Dhoom.Hangman.giveupPosition[0];this._giveupButton.y= Dhoom.Hangman.giveupPosition[1];this._giveupButton.setHandler("#"+ Dhoom.Hangman.giveupInput,this.onGiveupOk.bind(this));this.addChild(this._giveupButton)}function _$af926326(){this._charSpriteset=  new _$af926268();this._charSpriteset.x= Dhoom.Hangman.charactersRect[0];this._charSpriteset.y= Dhoom.Hangman.charactersRect[1];this.addChild(this._charSpriteset)}function _$af926327(){this._giveupWindow=  new _$af926256(Dhoom.Hangman.giveupWindow);this._giveupWindow.x= Dhoom.Hangman.giveupWPosition[0];this._giveupWindow.y= Dhoom.Hangman.giveupWPosition[1];if(Dhoom.Hangman.showSolution){this._giveupWindow.setText(Dhoom.Hangman._solution)};this._giveupWindow.hide();this.addChild(this._giveupWindow)}function _$af926328(){this._winWindow=  new _$af926256(Dhoom.Hangman.winWindow);this._winWindow.x= Dhoom.Hangman.winPosition[0];this._winWindow.y= Dhoom.Hangman.winPosition[1];this._winWindow.hide();this.addChild(this._winWindow)}function _$af926329(){if((this._winWindow.visible|| this._giveupWindow.visible)&& (TouchInput.isCancelled()|| Input.isTriggered("cancel"))){SoundManager.playCancel();this.popScene()};if(this._timeSprite.value()<= 0){Dhoom.Hangman._done= true;AudioManager.playMe(Dhoom.Hangman.failME);this._giveupWindow.show();$gameSwitches.setValue(Dhoom.Hangman.resultSwitch,false)};Scene_Base.prototype.update.call(this);this.updateCursor()}function _$af926330(){if(Imported.TDDP_MouseSystemEx&& TDDP_MouseSystemEx.useCustomCursor&& Dhoom.Hangman.hoverCursor){var hover=false;if(this._giveupButton.isHovered()){hover= true};if(!hover){this._keyboardSpriteset._keySprites.forEach(function(sprite){if(sprite.isHovered()){hover= true}},this)};if(this._state!== hover){if(hover){TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.Hangman.hoverCursor))}else {TDDP_MouseSystemEx._resetCustomCursor()};this._state= hover}}}function _$af926332(sprite){AudioManager.playStaticSe(Dhoom.Hangman.keySE);sprite._active= false;if(Dhoom.Hangman._target.contains(sprite._data)){sprite._setting.style= sprite._setting.correctStyle;Dhoom.Hangman._correctChars.push(sprite._data)}else {Dhoom.Hangman._wrongChars.push(sprite._data);sprite._setting.style= sprite._setting.wrongStyle};sprite.refresh();if(Dhoom.Hangman._wrongChars.length>= Dhoom.Hangman._maxTry){Dhoom.Hangman._done= true;AudioManager.playMe(Dhoom.Hangman.failME);this._giveupWindow.show();$gameSwitches.setValue(Dhoom.Hangman.resultSwitch,false)};if(Dhoom.Hangman._correctChars.length=== Dhoom.Hangman._realTarget.length){Dhoom.Hangman._done= true;AudioManager.playMe(Dhoom.Hangman.winME);this._winWindow.show();$gameSwitches.setValue(Dhoom.Hangman.resultSwitch,true)}}function _$af926333(){SoundManager.playCancel();Dhoom.Hangman._done= true;AudioManager.playMe(Dhoom.Hangman.failME);this._giveupWindow.show();$gameSwitches.setValue(Dhoom.Hangman.resultSwitch,false)}Window_HangmanBase= _$af926256;Sprite_HangmanCharacter= _$af926262;Spriteset_HangmanCharacters= _$af926268;Sprite_HangmanButton= _$af926273;Sprite_HangmanKey= _$af926294;Spriteset_HangmanTries= _$af926297;Sprite_HangmanTimeBar= _$af926303;Spriteset_HangmanKeyboard= _$af926313;Scene_Hangman= _$af926318;Dhoom.Parameters= PluginManager.parameters("DhoomHangman");if(!Dhoom.jsonParse){Dhoom.jsonParse= _$af926241};if(!Dhoom.loadParam){Dhoom.loadParam= _$af926243};Dhoom.Hangman.resultSwitch= Dhoom.loadParam("Result Switch ID");Dhoom.Hangman.defaultTime= Dhoom.loadParam("Default Time Limit");Dhoom.Hangman.showSolution= Dhoom.loadParam("Show Solution");Dhoom.Hangman.hoverCursor= Dhoom.loadParam("TDDP Mouse Cursor");Dhoom.Hangman.giveupInput= Dhoom.loadParam("Giveup Input").toLowerCase();Dhoom.Hangman.giveupSymbol= Dhoom.loadParam("Giveup Symbol");Dhoom.Hangman.charactersFormat= Dhoom.loadParam("Keyboard Format");Dhoom.Hangman.background= Dhoom.loadParam("Background Filename");Dhoom.Hangman.triesSetting= Dhoom.loadParam("Tries Setting");Dhoom.Hangman.keyboardSetting= Dhoom.loadParam("Keyboard Setting");Dhoom.Hangman.giveupSetting= Dhoom.loadParam("Giveup Setting");Dhoom.Hangman.charactersSetting= Dhoom.loadParam("Characters Setting");Dhoom.Hangman.hintWindow= Dhoom.loadParam("Hint Window");Dhoom.Hangman.winWindow= Dhoom.loadParam("Win Window");Dhoom.Hangman.giveupWindow= Dhoom.loadParam("Giveup Window");Dhoom.Hangman.timeBarSetting= Dhoom.loadParam("Time Bar");Dhoom.Hangman.triesPosition= Dhoom.loadParam("Tries Position");Dhoom.Hangman.keyboardPosition= Dhoom.loadParam("Keyboard Position");Dhoom.Hangman.operatorPosition= Dhoom.loadParam("Operators Position");Dhoom.Hangman.giveupPosition= Dhoom.loadParam("Giveup Position");Dhoom.Hangman.charactersRect= Dhoom.loadParam("Characters Rect");Dhoom.Hangman.hintPosition= Dhoom.loadParam("Hint Window Position");Dhoom.Hangman.winPosition= Dhoom.loadParam("Win Window Position");Dhoom.Hangman.giveupWPosition= Dhoom.loadParam("Giveup Window Position");Dhoom.Hangman.timeBarPosition= Dhoom.loadParam("Time Bar Position");Dhoom.Hangman.keySE= Dhoom.loadParam("Keyboard SE");Dhoom.Hangman.winME= Dhoom.loadParam("Win ME");Dhoom.Hangman.failME= Dhoom.loadParam("Fail ME");Dhoom.Hangman.mainDir= "img/numbergame/";if(!Imported.Quasi_Input){throw  new Error("Quasi Input plugin is required, and this plugin has to be under it.")};Dhoom.Hangman.clearValues= _$af926244;Dhoom.Hangman._formatAlphabetic= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];Dhoom.Hangman._formatQwerty= ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];Dhoom.Hangman.start= _$af926245;if( typeof TouchInput._mouseX=== "undefined"){Dhoom.Hangman.TouchInput_clear= TouchInput.clear;TouchInput.clear= _$af926247;Object.defineProperty(TouchInput,"mouseX",{get:_$af926248,configurable:true});Object.defineProperty(TouchInput,"mouseY",{get:_$af926249,configurable:true});Dhoom.Hangman.TouchInput_onMouseMove= TouchInput._onMouseMove;TouchInput._onMouseMove= _$af926250};Dhoom.Hangman.Bitmap_initialize= Bitmap.prototype.initialize;Bitmap.prototype.initialize= _$af926251;Dhoom.Hangman.Bitmap_makeFontNameText= Bitmap.prototype._makeFontNameText;Bitmap.prototype._makeFontNameText= _$af926252;Bitmap.prototype.changeTextStyle= _$af926253;Dhoom.Hangman.Bitmap_drawTextOutline= Bitmap.prototype._drawTextOutline;Bitmap.prototype._drawTextOutline= _$af926254;Dhoom.Hangman.Game_Interpreter_pluginCommand= Game_Interpreter.prototype.pluginCommand;Game_Interpreter.prototype.pluginCommand= _$af926255;_$af926256.prototype= Object.create(Window_Base.prototype);_$af926256.prototype.constructor= _$af926256;_$af926256.prototype.initialize= _$af926257;_$af926256.prototype.standardPadding= _$af926258;_$af926256.prototype.createBackground= _$af926259;_$af926256.prototype.setText= _$af926260;_$af926256.prototype.refresh= _$af926261;_$af926262.prototype= Object.create(Sprite.prototype);_$af926262.prototype.constructor= _$af926262;_$af926262.prototype.initialize= _$af926263;_$af926262.prototype.setting= _$af926264;_$af926262.prototype.createTextSprite= _$af926265;_$af926262.prototype.update= _$af926266;_$af926262.prototype.updateVisibility= _$af926267;_$af926268.prototype= Object.create(Sprite.prototype);_$af926268.prototype.constructor= _$af926268;_$af926268.prototype.initialize= _$af926269;_$af926268.prototype.createSprites= _$af926270;_$af926268.prototype.update= _$af926271;_$af926268.prototype.arrangeSprites= _$af926272;_$af926273.prototype= Object.create(Sprite_Base.prototype);_$af926273.prototype.constructor= _$af926273;_$af926273.prototype.initialize= _$af926274;_$af926273.prototype.refresh= _$af926275;_$af926273.prototype.getBitmapFilename= _$af926276;_$af926273.prototype.text= _$af926277;_$af926273.prototype.update= _$af926278;_$af926273.prototype.updateBitmap= _$af926279;_$af926273.prototype.isHovered= _$af926280;_$af926273.prototype.canvasToLocalX= _$af926281;_$af926273.prototype.canvasToLocalY= _$af926282;_$af926273.prototype.updateTone= _$af926283;_$af926273.prototype.updateInput= _$af926284;_$af926273.prototype.setHandler= _$af926285;_$af926273.prototype.isHandled= _$af926286;_$af926273.prototype.callInputHandler= _$af926287;_$af926273.prototype.isHandlerDisabled= _$af926288;_$af926273.prototype.isModified= _$af926289;_$af926273.prototype.hasInput= _$af926290;_$af926273.prototype.isInputTriggered= _$af926291;_$af926273.prototype.handlerParams= _$af926292;_$af926273.prototype.isTouched= _$af926293;_$af926294.prototype= Object.create(_$af926273.prototype);_$af926294.prototype.constructor= _$af926294;_$af926294.prototype.isHovered= _$af926295;_$af926294.prototype.isHandlerDisabled= _$af926296;_$af926297.prototype= Object.create(Sprite.prototype);_$af926297.prototype.constructor= _$af926297;_$af926297.prototype.initialize= _$af926298;_$af926297.prototype.createSprites= _$af926299;_$af926297.prototype.arrangeSprites= _$af926300;_$af926297.prototype.update= _$af926301;_$af926297.prototype.updateSprites= _$af926302;_$af926303.prototype= Object.create(Sprite.prototype);_$af926303.prototype.constructor= _$af926303;_$af926303.prototype.initialize= _$af926304;_$af926303.prototype.createBackground= _$af926305;_$af926303.prototype.createFill= _$af926306;_$af926303.prototype.createFillBitmap= _$af926307;_$af926303.prototype.createTextSprite= _$af926308;_$af926303.prototype.update= _$af926309;_$af926303.prototype.refresh= _$af926310;_$af926303.prototype.maxValue= _$af926311;_$af926303.prototype.value= _$af926312;_$af926313.prototype= Object.create(Sprite.prototype);_$af926313.prototype.constructor= _$af926313;_$af926313.prototype.initialize= _$af926314;_$af926313.prototype.createKeySprites= _$af926315;_$af926313.prototype.update= _$af926316;_$af926313.prototype.arrangeSprites= _$af926317;_$af926318.prototype= Object.create(Scene_Base.prototype);_$af926318.prototype.constructor= _$af926318;_$af926318.prototype.initialize= _$af926319;_$af926318.prototype.createBackground= _$af926320;_$af926318.prototype.createHintWindow= _$af926321;_$af926318.prototype.createTimeSprite= _$af926322;_$af926318.prototype.createTriesSpriteset= _$af926323;_$af926318.prototype.createKeyboardSpriteset= _$af926324;_$af926318.prototype.createGiveupSprite= _$af926325;_$af926318.prototype.createCharactersSpriteset= _$af926326;_$af926318.prototype.createGiveupWindow= _$af926327;_$af926318.prototype.createWinWindow= _$af926328;_$af926318.prototype.update= _$af926329;_$af926318.prototype.updateCursor= _$af926330;_$af926318.prototype.onKeyboardInput= _$af926332;_$af926318.prototype.onGiveupOk= _$af926333;CryptoJS= CryptoJS
}();