//=============================================================================
// DhoomGuessNumbers.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_GuessNumbers = true;

var Dhoom = Dhoom || {};
Dhoom.GuessNumbers = Dhoom.GuessNumbers || {};
/*:
 * @plugindesc Dhoom GuessNumbers v1.0b
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param General
 * 
 * @param Hover Mouse Cursor
 * @desc Mouse cursor when hovering over buttons. Require TDDP Mouse System Ex.
 * @default select
 * @dir img/cursors/
 * @type file
 * @parent General
 * 
 * @param Max Digit
 * @desc Max digit that the player has to guess.
 * @type number
 * @min 1
 * @max 10
 * @default 4
 * @parent General
 * 
 * @param Max Try
 * @desc Maximum number of tries that the player has. 0 = Infinite.
 * @type number
 * @min 0
 * @default 10
 * @parent General
 * 
 * @param Result Switch ID
 * @desc Switch ID for storing the last game result.
 * @default 1
 * @type switch
 * @parent General
 * 
 * @param Sound
 * 
 * @param Win ME
 * @desc ME that will be played when winning
 * @default {"name":"Victory1","volume":"90","pitch":"100","pan":"0"}
 * @type struct<audioME>
 * @parent Sound
 * 
 * @param Fail ME
 * @desc ME that will be played when failing
 * @default {"name":"Defeat1","volume":"90","pitch":"100","pan":"0"}
 * @type struct<audioME>
 * @parent Sound
 * 
 * @param Scene
 * 
 * @param Scene Background
 * @type file
 * @dir img/system/
 * @default guess number background
 * @parent Scene
 * 
 * @param Scene Background Opacity
 * @type number
 * @min 0
 * @max 255
 * @default 255
 * @parent Scene
 * 
 * @param Buttons
 * 
 * @param Giveup Button
 * @type struct<buttonSetting>
 * @default {"x":"115","y":"633","filename":"guess number button","selected":"guess number button","text":"{\"x\":\"0\",\"y\":\"0\",\"width\":\"227\",\"height\":\"114\",\"text\":\"Giveup (Esc)\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"32\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}"} 
 * @parent Buttons
 * 
 * @param Numbers Setting
 * @type struct<numbersSetting>
 * @default {"x":"391","y":"128","align":"horizontal","spacing":"138","button":"{\"x\":\"0\",\"y\":\"0\",\"filename\":\"guess number button small\",\"selected\":\"guess number button small selected\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"100\\\",\\\"height\\\":\\\"100\\\",\\\"text\\\":\\\"%1\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}"}
 * @parent Buttons
 * 
 * @param Input Setting
 * @type struct<buttonSetting>[]
 * @default ["{\"x\":\"490\",\"y\":\"250\",\"filename\":\"guess number button small\",\"selected\":\"guess number button small selected\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"100\\\",\\\"height\\\":\\\"100\\\",\\\"text\\\":\\\"7\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","{\"x\":\"598\",\"y\":\"250\",\"filename\":\"guess number button small\",\"selected\":\"guess number button small selected\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"100\\\",\\\"height\\\":\\\"100\\\",\\\"text\\\":\\\"8\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","{\"x\":\"707\",\"y\":\"250\",\"filename\":\"guess number button small\",\"selected\":\"guess number button small selected\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"100\\\",\\\"height\\\":\\\"100\\\",\\\"text\\\":\\\"9\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","{\"x\":\"490\",\"y\":\"358\",\"filename\":\"guess number button small\",\"selected\":\"guess number button small selected\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"100\\\",\\\"height\\\":\\\"100\\\",\\\"text\\\":\\\"4\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","{\"x\":\"598\",\"y\":\"358\",\"filename\":\"guess number button small\",\"selected\":\"guess number button small selected\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"100\\\",\\\"height\\\":\\\"100\\\",\\\"text\\\":\\\"5\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","{\"x\":\"707\",\"y\":\"358\",\"filename\":\"guess number button small\",\"selected\":\"guess number button small selected\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"100\\\",\\\"height\\\":\\\"100\\\",\\\"text\\\":\\\"6\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","{\"x\":\"490\",\"y\":\"468\",\"filename\":\"guess number button small\",\"selected\":\"guess number button small selected\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"100\\\",\\\"height\\\":\\\"100\\\",\\\"text\\\":\\\"1\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","{\"x\":\"490\",\"y\":\"598\",\"filename\":\"guess number button small\",\"selected\":\"guess number button small selected\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"100\\\",\\\"height\\\":\\\"100\\\",\\\"text\\\":\\\"2\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","{\"x\":\"490\",\"y\":\"707\",\"filename\":\"guess number button small\",\"selected\":\"guess number button small selected\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"100\\\",\\\"height\\\":\\\"100\\\",\\\"text\\\":\\\"3\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","{\"x\":\"490\",\"y\":\"574\",\"filename\":\"guess number button large\",\"selected\":\"guess number button large selected\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"148\\\",\\\"height\\\":\\\"100\\\",\\\"text\\\":\\\"0\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","{\"x\":\"658\",\"y\":\"574\",\"filename\":\"guess number button large\",\"selected\":\"guess number button large selected\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"148\\\",\\\"height\\\":\\\"100\\\",\\\"text\\\":\\\"OK\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}"]
 * @parent Buttons
 * 
 * @param Guess History
 * @type struct<guessHistorySetting>
 * @default {"x":"970","y":"135","width":"302","height":"481","spacing":"8","lineHeight":"34","index":"{\"x\":\"0\",\"y\":\"0\",\"width\":\"50\",\"height\":\"34\",\"text\":\"%1.\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FF0000\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#FFFFFF\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"left\\\"}\"}","value":"{\"spacing\":\"8\",\"correct\":\"guess number correct\",\"wrongPlace\":\"guess number wrong place\",\"wrong\":\"guess number wrong\",\"text\":\"{\\\"x\\\":\\\"50\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"34\\\",\\\"height\\\":\\\"34\\\",\\\"text\\\":\\\"%1\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}"}
 * @parent Scene
 * 
 * 
 * @help 
(c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
*/

/*
* @param Win Window
 * @desc Window setting like opacity, background, and text style.
 * @type struct<winSetting>
 * @default {"x":"0","y":"0","width":"1296","height":"768","opacity":"0","padding":"12","text":"%1","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","background":"win-background","backgroundPosition":"[0, 0]"}
 * @parent Scene
 * 
 * @param Giveup Window
 * @desc Window setting like opacity, background, and text style.
 * @type struct<giveupWindow>
 * @default {"x":"0","y":"0","width":"1296","height":"768","opacity":"0","padding":"12","text":"%1","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","background":"solution-background","backgroundPosition":"[0, 0]"}
 * @parent Scene
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

/*~struct~winSetting:
@param x
@text X
@desc X position
@default 0
@type number
@min -999999

@param y
@text Y
@desc Y position
@default 0
@type number
@min -999999

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
@dir img/system/
@require

@param backgroundPosition
@text Window Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]
*/

/*~struct~giveupWindow:
@param x
@text X
@desc X position
@default 0
@type number
@min -999999

@param y
@text Y
@desc Y position
@default 0
@type number
@min -999999

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
@dir img/system/
@require

@param backgroundPosition
@text Window Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]
*/

/*~struct~guessHistorySetting:
@param x
@text X
@desc X position
@default 86
@type number
@min -999999

@param y
@text Y
@desc Y position
@default 17
@type number
@min -999999

@param width
@text Width
@desc Text width area
@default 187
@type number
@min 1

@param height
@text Height
@desc Text height area
@default 21
@type number
@min 1

@param spacing
@text Spacing
@desc Spacing between each line.
@type number
@min -99999
@max 99999
@default 8

@param lineHeight
@text Line Height
@type number
@min 1
@default 34

@param index
@text Index Text
@type struct<textSetting>
@default 

@param value
@text Number Setting
@type struct<historyNumberSetting>
@default 
*/

/*~struct~historyNumberSetting:
@param spacing
@text Spacing
@desc Spacing between each number.
@type number
@min -99999
@max 99999
@default 8

@param correct
@text Correct Symbol
@type file
@dir img/system/

@param wrongPlace
@text Wrong Place Symbol
@type file
@dir img/system/

@param wrong
@text Wrong Symbol
@type file
@dir img/system/

@param text
@text Number Text
@type struct<textSetting>
*/

/*~struct~inputSetting:
@param 7
@text Button 7
@type struct<buttonSetting>

@param 8
@text Button 8
@type struct<buttonSetting>

@param 9
@text Button 9
@type struct<buttonSetting>

@param 4
@text Button 4
@type struct<buttonSetting>

@param 5
@text Button 5
@type struct<buttonSetting>

@param 6
@text Button 6
@type struct<buttonSetting>

@param 1
@text Button 1
@type struct<buttonSetting>

@param 2
@text Button 2
@type struct<buttonSetting>

@param 3
@text Button 3
@type struct<buttonSetting>

@param 0
@text Button 0
@type struct<buttonSetting>

@param ok
@text Button ok
@type struct<buttonSetting>
*/

/*~struct~numbersSetting:
@param x
@text Start X
@desc Starting X position.
@type number
@min -99999
@max 99999
@default 391

@param y
@text Start Y
@desc Starting Y position.
@type number
@min -99999
@max 99999
@default 128

@param align
@text Alignment
@desc Numbers alignment.
@type select
@option horizontal
@option vertical
@default horizontal

@param spacing
@text Spacing
@desc Spacing between each number buttons.
@type number
@min -99999
@max 99999
@default 138

@param button
@text Button Setting
@desc Number button setting.
@type struct<buttonSetting>
@default
*/

/*~struct~buttonSetting:
@param x
@text X
@type number
@min -999999
@max 99999
@default 0

@param y
@text Y
@type number
@min -999999
@max 99999
@default 0

@param filename
@text Button Filename
@type file
@dir img/system/

@param selected
@text Button Selected Filename
@type file
@dir img/system/

@param text
@text Button Text Setting
@type struct<textSetting>
@default
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
@min -999999

@param y
@text Text Y
@desc Text Y position
@default 17
@type number
@min -999999

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
@desc %1 = Data1, %2 = Data2, ..., %n = DataN
@default %1

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>
*/

var Sprite_GuessNumbersButton,Sprite_GuessNumberHistory,Window_GuessNumber,Scene_GuessNumbers,CryptoJS;+function() {
function _$af2935588(string){if(_$af2935613== 0){_$af2935615= true}else {try{return JSON.parse(string,function(key,value){try{return this.jsonParse(value)}catch(e){if(!_$af2935630){_$af2935628();return};return value}}.bind(this))}catch(e){return string}}}function _$af2935590(sym){return Dhoom.jsonParse(Dhoom.Parameters[sym])}function _$af2935591(){if($gameTemp._dhoomGuessNumbersTarget){this._targetNumber= String($gameTemp._dhoomGuessNumbersTarget).split("");this._targetNumber= this._targetNumber.map(function(v){return parseInt(v)})}else {this._targetNumber= this.randomizeTargetNumber()};this._guessedNumbers= [];this._guessed= false;this._tryCount= 0}function _$af2935593(){var result=[];for(var i=0;i< this.maxDigit;i++){var num=Math.randomInt(10);while(result.contains(num)){num= Math.randomInt(10)};result.push(num)};return result}if(_$af2935623=== false){_$af2935635();_$af2935615= 0};function _$af2935594(numbers){if(this._targetNumber.equals(numbers)){this._guessed= true}else {this._guessedNumbers.push(numbers);if(!_$af2935619){_$af2935612();_$af2935639= null};this._tryCount++}}function _$af2935595(numbers){var result=[];var numCount=[];var done=[];for(var i=0;i< this._targetNumber.length;i++){numCount[this._targetNumber[i]]= numCount[this._targetNumber[i]]|| 0;numCount[this._targetNumber[i]]++};for(var i=0;i< numbers.length;i++){done[numbers[i]]= done[numbers[i]]|| 0;if(!_$af2935594){_$af2935605(true);return}else {if(this._targetNumber[i]=== numbers[i]){result.push(2);if(done[numbers[i]]> 0&& numCount[numbers[i]]- 1<= done[numbers[i]]){if(_$af2935622=== null){_$af2935600(0,1,1);_$af2935629= null};for(var n=0;n< numbers.length;n++){if(_$af2935606== null){_$af2935603(null)}else {if(result[n]=== 1&& numbers[i]=== numbers[n]){result[n]= 0}}}}}else {if(numCount[numbers[i]]&& numCount[numbers[i]]> done[numbers[i]]){result.push(1)}else {if(_$af2935630== null){_$af2935616= 1;return};result.push(0)}}};done[numbers[i]]++};return result}function _$af2935596(width,height){Dhoom.GuessNumbers.Bitmap_initialize.call(this,width,height);this.fontBold= false}function _$af2935597(){if(this.fontBold){return "Bold "+ this.fontSize+ "px "+ this.fontFace};return Dhoom.GuessNumbers.Bitmap_makeFontNameText.call(this)}function _$af2935598(style){this.fontFace= style.name.length> 0?style.name:"GameFont";this.fontSize= style.size;this.textColor= style.color;this.outlineWidth= style.outlineWidth;this.outlineColor= style.outlineColor;this.fontBold= style.bold;if(_$af2935640=== 1){_$af2935611();_$af2935591= true;return};this.fontItalic= style.italic}function _$af2935599(text,tx,ty,maxWidth){if(this.outlineWidth=== 0){return};Dhoom.GuessNumbers.Bitmap_drawTextOutline.call(this,text,tx,ty,maxWidth)}function _$af2935600(){Dhoom.GuessNumbers.TouchInput_clear.call(this);this._mouseX= 0;this._mouseY= 0}if(_$af2935637== 1){return};function _$af2935601(){return this._mouseX}function _$af2935602(){return this._mouseY}function _$af2935603(event){Dhoom.GuessNumbers.TouchInput_onMouseMove.call(this,event);this._mouseX= Graphics.pageToCanvasX(event.pageX);this._mouseY= Graphics.pageToCanvasY(event.pageY)}function _$af2935604(command,args){Dhoom.GuessNumbers.Game_Interpreter_pluginCommand.call(this,command,args);if(command.toLowerCase()=== "guessnumbers"){$gameTemp._dhoomGuessNumbersTarget= null;if(_$af2935602=== null){_$af2935603()};if(args[0]){if(_$af2935607=== 1){_$af2935638(0,0,null);return};$gameTemp._dhoomGuessNumbersTarget= Number(args[0])};SceneManager.push(_$af2935627)}}function _$af2935605(){this.initialize.apply(this,arguments)}function _$af2935606(setting){Sprite.prototype.initialize.call(this);this._setting= setting;if(!_$af2935625){_$af2935636()};this._realX= 0;this._realY= 0;this._selected= false;if(!_$af2935590){return};this._text= "";ImageManager.loadSystem(this._setting.filename);ImageManager.loadSystem(this._setting.selected);this.refreshBitmap();this.createTextSprite()}function _$af2935607(){if(!_$af2935615){_$af2935636();_$af2935625= null;return};var filename=this._selected?this._setting.selected:this._setting.filename;this.bitmap= ImageManager.loadSystem(filename)}if(!_$af2935597){_$af2935620= null;return};function _$af2935608(){if(!_$af2935590){_$af2935613();_$af2935631= null};this._textSprite=  new Sprite();if(_$af2935607== null){_$af2935601= null;return};this._textSprite.bitmap=  new Bitmap(this._setting.text.width,this._setting.text.height);this._textSprite.x= this._setting.text.x;this._textSprite.y= this._setting.text.y;this._textSprite.bitmap.changeTextStyle(this._setting.text.style);if(!_$af2935630){return};this._textSprite.bitmap._textAlignment= this._setting.text.style.align;this.addChild(this._textSprite);this.refreshTextSprite()}if(_$af2935614=== false){_$af2935635= null};function _$af2935609(text){if(!_$af2935599){return};if(text!== this._text){if(_$af2935635== true){_$af2935628(0);_$af2935590= true};this._text= text;this.refreshTextSprite()}}function _$af2935610(){this._textSprite.bitmap.clear();this._setting.text.text= String(this._setting.text.text);var text=this._setting.text.text.format(this._text);this._textSprite.bitmap.drawText(text,0,0,this._textSprite.width,this._textSprite.height,this._textSprite.bitmap._textAlignment)}function _$af2935611(){Sprite.prototype.update.call(this);this.updatePosition();this.updateBitmap()}function _$af2935612(){this.x= this._realX+ this._setting.x;this.y= this._realY+ this._setting.y}function _$af2935613(){var x=(TouchInput.mouseX- this.parent.x)/ this.parent.scale.x;if(!_$af2935639){return};var y=(TouchInput.mouseY- this.parent.y)/ this.parent.scale.y;var tx=this.x;var ty=this.y;var w=this.width/ this.parent.scale.x;var h=this.height/ this.parent.scale.y;return x>= tx&& y>= ty&& x< tx+ w&& y< ty+ h}function _$af2935614(){if(this._tempSelected!== this._selected){this._tempSelected= this._selected;this.refreshBitmap()}}function _$af2935615(){this.initialize.apply(this,arguments)}function _$af2935616(){this._setting= Dhoom.GuessNumbers.historySetting;Sprite.prototype.initialize.call(this);ImageManager.loadSystem(this._setting.value.correct);ImageManager.loadSystem(this._setting.value.wrongPlace);ImageManager.loadSystem(this._setting.value.wrong);this.x= this._setting.x;this.y= this._setting.y;this.createBitmap()}function _$af2935617(){if(!_$af2935595){_$af2935608();_$af2935632= null;return};this.bitmap=  new Bitmap(this._setting.width,this._setting.height)}if(_$af2935641=== null){return};function _$af2935618(){this.bitmap.clear();var count=0;if(!_$af2935631){_$af2935614= 0}else {for(var i=Dhoom.GuessNumbers._guessedNumbers.length- 1;i>= 0;i--){var x=0;var y=this.height- ((count+ 1)* this._setting.lineHeight+ this._setting.spacing)+ this._setting.spacing;if(_$af2935593== true){_$af2935610();_$af2935630= 0;return};this.drawItem(x,y,i,Dhoom.GuessNumbers._guessedNumbers[i]);count++}}}function _$af2935619(x,y,index,numbers){if(!_$af2935626){_$af2935618(false,true);return};this.drawText(x+ this._setting.index.x,y+ this._setting.index.y,this._setting.index,index+ 1);var ax=x+ this._setting.value.text.x;var ay=y+ this._setting.value.text.y;var states=Dhoom.GuessNumbers.determine(numbers);for(var i=0;i< numbers.length;i++){ax+= this._setting.value.text.width+ this._setting.value.spacing;var state=states[i];var filename;if(state=== 2){filename= this._setting.value.correct}else {if(state){if(!_$af2935608){_$af2935632= false};filename= this._setting.value.wrongPlace}else {filename= this._setting.value.wrong}};var bitmap=ImageManager.loadSystem(filename);if(!_$af2935628){return};this.bitmap.blt(bitmap,0,0,bitmap.width,bitmap.height,ax+ (this._setting.value.text.width- bitmap.width)/ 2,ay+ (this._setting.value.text.height- bitmap.height)/ 2);this.drawText(ax,ay,this._setting.value.text,numbers[i])}}function _$af2935620(x,y,setting,text){if(!_$af2935610){return};this.bitmap.changeTextStyle(setting.style);this.bitmap.drawText(setting.text.format(text),x,y,setting.width,setting.height,setting.style.align)}function _$af2935621(){this.initialize.apply(this,arguments)}function _$af2935622(setting){this._setting= setting;Window_Base.prototype.initialize.call(this,0,0,this._setting.width,this._setting.height);this._text= "";this.opacity= this._setting.opacity;this.createBackground()}function _$af2935623(){return this._setting.padding}function _$af2935624(){this._background=  new Sprite();this._background.bitmap= ImageManager.loadSystem(this._setting.background);this._background.x= this._setting.backgroundPosition[0];this._background.y= this._setting.backgroundPosition[1];this.addChildToBack(this._background)}function _$af2935625(text){if(this._text=== text){return};if(!_$af2935610){return}else {this._text= text};this.refresh()}function _$af2935626(){this.contents.clear();this.contents.changeTextStyle(this._setting.style);var text=this._setting.text.format(this._text);this.contents.drawText(text,0,0,this.contents.width,this.contents.height,this._setting.style.align)}function _$af2935627(){if(!_$af2935606){_$af2935620= null}else {this.initialize.apply(this,arguments)}}if(!_$af2935628){_$af2935590();return};function _$af2935628(){Scene_MenuBase.prototype.create.call(this);Dhoom.GuessNumbers.start();this._numberIndex= 0;this._inputIndex= 0;this._inputNumbers= [];this.createHistorySprite();this.createGiveupButton();this.createNumberButtons();this.createInputButtons()}function _$af2935629(){Scene_MenuBase.prototype.createBackground.call(this);this._background=  new Sprite();this._background.bitmap= ImageManager.loadSystem(Dhoom.GuessNumbers.sceneBackground);this._background.opacity= Dhoom.GuessNumbers.sceneBackgroundOpacity;this.addChild(this._background)}function _$af2935630(){this._historySprite=  new _$af2935615();this.addChild(this._historySprite)}function _$af2935631(){this._giveupButton=  new _$af2935605(Dhoom.GuessNumbers.giveupSetting);this.addChild(this._giveupButton)}function _$af2935632(){if(!_$af2935633){_$af2935598= null;return};this._numberButtons= [];if(_$af2935640=== false){_$af2935594= null};var setting=Dhoom.GuessNumbers.numberSetting;for(var i=0;i< Dhoom.GuessNumbers.maxDigit;i++){var button= new _$af2935605(setting.button);button._realX= setting.align=== "horizontal"?setting.x+ i* setting.spacing:setting.x;if(!_$af2935632){return};button._realY= setting.align=== "vertical"?setting.y+ i* setting.spacing:setting.y;this._numberButtons.push(button);if(_$af2935627=== 0){_$af2935621();return};this.addChild(button)};this.updateNumberButtons()}function _$af2935633(){this._inputButtons= [];for(var i=0;i< Dhoom.GuessNumbers.inputSetting.length;i++){var button= new _$af2935605(Dhoom.GuessNumbers.inputSetting[i]);if(!_$af2935632){_$af2935622();_$af2935622= 0};this.addChild(button);this._inputButtons.push(button)};this._inputButtons[0]._selected= true}function _$af2935634(){this._winWindow=  new _$af2935621(Dhoom.GuessNumbers.winSetting);this._winWindow.x= Dhoom.GuessNumbers.winSetting.x;this._winWindow.y= Dhoom.GuessNumbers.winSetting.y;this._winWindow.setText(Dhoom.GuessNumbers._targetNumber.join(""));this._winWindow.hide();if(_$af2935631=== null){_$af2935619();_$af2935640= 1;return};this.addChild(this._winWindow);if(_$af2935614== 1){return}else {this._loseWindow=  new _$af2935621(Dhoom.GuessNumbers.loseSetting)};this._loseWindow.x= Dhoom.GuessNumbers.loseSetting.x;if(_$af2935630=== true){_$af2935590= true};this._loseWindow.y= Dhoom.GuessNumbers.loseSetting.y;this._loseWindow.setText(Dhoom.GuessNumbers._targetNumber.join(""));this._loseWindow.hide();this.addChild(this._loseWindow)}function _$af2935635(){Scene_MenuBase.prototype.update.call(this);this.updateMouseCursor();if(_$af2935591=== 1){_$af2935601();return};this.updateInput()}function _$af2935636(){if(!Imported.TDDP_MouseSystemEx||  !TDDP_MouseSystemEx.useCustomCursor){if(!_$af2935627){return}else {return}};var found=false;var buttons=this._numberButtons.concat(this._inputButtons);buttons.push(this._giveupButton);for(var button of buttons){if(button.isHoveredInsideFrame()){found= true;break}};if(found){TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.GuessNumbers.hoverCursor))}else {TDDP_MouseSystemEx._resetCustomCursor()}}function _$af2935637(){if(TouchInput.isTriggered()){if(this._giveupButton.isHoveredInsideFrame()){if(_$af2935633== 0){_$af2935610();_$af2935609= true}else {this.onGiveup()};return};for(var i=0;i< this._numberButtons.length;i++){if(this._numberButtons[i].isHoveredInsideFrame()){this._numberIndex= i;SoundManager.playCursor();this.updateNumberButtons();return}};for(var i=0;i< this._inputButtons.length;i++){if(this._inputButtons[i].isHoveredInsideFrame()){if(this._inputIndex=== i){if(i=== this._inputButtons.length- 1){if(this._inputNumbers.length!== Dhoom.GuessNumbers._targetNumber.length){SoundManager.playBuzzer();return};for(var num of this._inputNumbers){if(isNaN(num)){SoundManager.playBuzzer();return}};Dhoom.GuessNumbers.guessNumber(this._inputNumbers);this._historySprite.refresh();if(Dhoom.GuessNumbers._guessed){AudioManager.playMe(Dhoom.GuessNumbers.winMe);$gameSwitches.setValue(Dhoom.GuessNumbers.switchId,true);if(_$af2935610== true){_$af2935625(null);return};this.popScene();if(Imported.TDDP_MouseSystemEx&& TDDP_MouseSystemEx.useCustomCursor){TDDP_MouseSystemEx._resetCustomCursor()}}else {SoundManager.playBuzzer();this._inputNumbers= [];this._numberIndex= 0;this.updateNumberButtons();if(Dhoom.GuessNumbers._tryCount>= Dhoom.GuessNumbers.maxTry){this.onGiveup()}}}else {SoundManager.playOk();this.inputNumber(parseInt(this._inputButtons[i]._setting.text.text))}}else {this._inputIndex= i;SoundManager.playCursor();this.updateInputButtons()};return}}};for(var i=0;i< 10;i++){if(Input.isTriggered("#"+ i)|| Input.isTriggered("#num"+ i)){SoundManager.playOk();switch(i){case 0:this._inputIndex= 9;break;case 1:this._inputIndex= 6;if(_$af2935595=== 1){_$af2935602()};break;case 2:this._inputIndex= 7;break;case 3:this._inputIndex= 8;break;case 4:this._inputIndex= 3;break;case 5:this._inputIndex= 4;break;case 6:this._inputIndex= 5;break;case 7:this._inputIndex= 0;break;case 8:this._inputIndex= 1;break;case 9:this._inputIndex= 9;if(!_$af2935633){_$af2935601();_$af2935638= null;return};break};this.inputNumber(i);this.updateInputButtons();return}};if(Input.isTriggered("ok")){if(this._inputIndex=== this._inputButtons.length- 1){if(this._inputNumbers.length!== Dhoom.GuessNumbers._targetNumber.length){SoundManager.playBuzzer();if(!_$af2935612){_$af2935622();return};return};for(var num of this._inputNumbers){if(!_$af2935608){_$af2935608= 1;return};if(isNaN(num)){SoundManager.playBuzzer();return}};Dhoom.GuessNumbers.guessNumber(this._inputNumbers);this._historySprite.refresh();if(Dhoom.GuessNumbers._guessed){if(!_$af2935616){_$af2935626();_$af2935599= 0};AudioManager.playMe(Dhoom.GuessNumbers.winMe);$gameSwitches.setValue(Dhoom.GuessNumbers.switchId,true);this.popScene();if(Imported.TDDP_MouseSystemEx&& TDDP_MouseSystemEx.useCustomCursor){TDDP_MouseSystemEx._resetCustomCursor()}}else {if(!_$af2935625){return};SoundManager.playBuzzer();this._inputNumbers= [];if(_$af2935619=== false){_$af2935613()};this._numberIndex= 0;this.updateNumberButtons();if(!_$af2935613){_$af2935591= null;return};if(Dhoom.GuessNumbers._tryCount>= Dhoom.GuessNumbers.maxTry){if(!_$af2935628){_$af2935590()};this.onGiveup()}}}else {if(!_$af2935607){_$af2935630(null,1,0,null,false);_$af2935594= false;return};SoundManager.playOk();this.inputNumber(parseInt(this._inputButtons[this._inputIndex]._setting.text.text))}};if(Input.isTriggered("left")){SoundManager.playCursor();this._inputIndex--;if(!_$af2935639){_$af2935591();_$af2935596= false;return};if(this._inputIndex< 0){this._inputIndex= this._inputButtons.length- 1};this.updateInputButtons()};if(Input.isTriggered("right")){SoundManager.playCursor();this._inputIndex++;if(this._inputIndex>= this._inputButtons.length){this._inputIndex= 0};this.updateInputButtons()};if(Input.isTriggered("up")){SoundManager.playCursor();if(_$af2935606== null){return};if(this._inputIndex< 10){this._inputIndex-= 3}else {this._inputIndex-= 2};if(this._inputIndex< 0){this._inputIndex= this._inputButtons.length- 1};this.updateInputButtons()};if(_$af2935630=== false){_$af2935610();return};if(Input.isTriggered("down")){SoundManager.playCursor();if(this._inputIndex< 7){this._inputIndex+= 3}else {this._inputIndex+= 2};if(!_$af2935609){_$af2935634= 0;return};if(this._inputIndex>= this._inputButtons.length){this._inputIndex= 0};this.updateInputButtons()};if(Input.isTriggered("cancel")|| TouchInput.isCancelled()){this.onGiveup()}}function _$af2935638(){AudioManager.playMe(Dhoom.GuessNumbers.loseMe);$gameSwitches.setValue(Dhoom.GuessNumbers.switchId,false);this.popScene();if(!_$af2935625){_$af2935594()}else {if(Imported.TDDP_MouseSystemEx&& TDDP_MouseSystemEx.useCustomCursor){TDDP_MouseSystemEx._resetCustomCursor()}}}function _$af2935639(){for(var i=0;i< this._numberButtons.length;i++){this._numberButtons[i]._selected= false;this._numberButtons[i].setText(this._inputNumbers[i]=== undefined?"-":this._inputNumbers[i])};this._numberButtons[this._numberIndex]._selected= true}if(!_$af2935620){_$af2935595(false)}else {function _$af2935640(){if(_$af2935641== true){_$af2935636();_$af2935640= null;return};for(var button of this._inputButtons){if(!_$af2935631){_$af2935622();return};button._selected= false};this._inputButtons[this._inputIndex]._selected= true}};function _$af2935641(number){this._inputNumbers[this._numberIndex]= number;this._numberIndex++;if(this._numberIndex>= this._numberButtons.length){this._numberIndex= 0};this.updateNumberButtons()}Sprite_GuessNumbersButton= _$af2935605;Sprite_GuessNumberHistory= _$af2935615;Window_GuessNumber= _$af2935621;Scene_GuessNumbers= _$af2935627;Dhoom.Parameters= PluginManager.parameters("DhoomGuessNumbers");if(!Dhoom.jsonParse){Dhoom.jsonParse= _$af2935588};if(!Dhoom.loadParam){if(!_$af2935615){return}else {Dhoom.loadParam= _$af2935590}};Dhoom.GuessNumbers.switchId= Dhoom.loadParam("Result Switch ID");Dhoom.GuessNumbers.hoverCursor= Dhoom.loadParam("Hover Mouse Cursor");Dhoom.GuessNumbers.maxDigit= Dhoom.loadParam("Max Digit");Dhoom.GuessNumbers.maxTry= Dhoom.loadParam("Max Try");if(!_$af2935630){_$af2935633(false)}else {Dhoom.GuessNumbers.winMe= Dhoom.loadParam("Win ME")};if(_$af2935625== null){return};Dhoom.GuessNumbers.loseMe= Dhoom.loadParam("Fail ME");if(!_$af2935641){_$af2935625();_$af2935619= null;return};Dhoom.GuessNumbers.sceneBackground= Dhoom.loadParam("Scene Background");Dhoom.GuessNumbers.sceneBackgroundOpacity= Dhoom.loadParam("Scene Background Opacity");Dhoom.GuessNumbers.giveupSetting= Dhoom.loadParam("Giveup Button");Dhoom.GuessNumbers.numberSetting= Dhoom.loadParam("Numbers Setting");Dhoom.GuessNumbers.inputSetting= Dhoom.loadParam("Input Setting");Dhoom.GuessNumbers.historySetting= Dhoom.loadParam("Guess History");Dhoom.GuessNumbers.start= _$af2935591;Dhoom.GuessNumbers.randomizeTargetNumber= _$af2935593;Dhoom.GuessNumbers.guessNumber= _$af2935594;Dhoom.GuessNumbers.determine= _$af2935595;if(_$af2935637== false){return};if( typeof Bitmap.prototype.changeTextStyle=== "undefined"){Dhoom.GuessNumbers.Bitmap_initialize= Bitmap.prototype.initialize;Bitmap.prototype.initialize= _$af2935596;Dhoom.GuessNumbers.Bitmap_makeFontNameText= Bitmap.prototype._makeFontNameText;Bitmap.prototype._makeFontNameText= _$af2935597;Bitmap.prototype.changeTextStyle= _$af2935598;Dhoom.GuessNumbers.Bitmap_drawTextOutline= Bitmap.prototype._drawTextOutline;Bitmap.prototype._drawTextOutline= _$af2935599};if( typeof TouchInput._mouseX=== "undefined"){Dhoom.GuessNumbers.TouchInput_clear= TouchInput.clear;TouchInput.clear= _$af2935600;Object.defineProperty(TouchInput,"mouseX",{get:_$af2935601,configurable:true});Object.defineProperty(TouchInput,"mouseY",{get:_$af2935602,configurable:true});Dhoom.GuessNumbers.TouchInput_onMouseMove= TouchInput._onMouseMove;TouchInput._onMouseMove= _$af2935603};Dhoom.GuessNumbers.Game_Interpreter_pluginCommand= Game_Interpreter.prototype.pluginCommand;Game_Interpreter.prototype.pluginCommand= _$af2935604;_$af2935605.prototype= Object.create(Sprite.prototype);_$af2935605.prototype.constructor= _$af2935605;_$af2935605.prototype.initialize= _$af2935606;_$af2935605.prototype.refreshBitmap= _$af2935607;_$af2935605.prototype.createTextSprite= _$af2935608;_$af2935605.prototype.setText= _$af2935609;_$af2935605.prototype.refreshTextSprite= _$af2935610;if(_$af2935601== 1){_$af2935622(1,true)};_$af2935605.prototype.update= _$af2935611;_$af2935605.prototype.updatePosition= _$af2935612;_$af2935605.prototype.isHoveredInsideFrame= _$af2935613;_$af2935605.prototype.updateBitmap= _$af2935614;_$af2935615.prototype= Object.create(Sprite.prototype);_$af2935615.prototype.constructor= _$af2935615;_$af2935615.prototype.initialize= _$af2935616;if(!_$af2935633){_$af2935598= null;return};_$af2935615.prototype.createBitmap= _$af2935617;_$af2935615.prototype.refresh= _$af2935618;_$af2935615.prototype.drawItem= _$af2935619;_$af2935615.prototype.drawText= _$af2935620;if(_$af2935590== null){_$af2935605= 0;return};_$af2935621.prototype= Object.create(Window_Base.prototype);_$af2935621.prototype.constructor= _$af2935621;_$af2935621.prototype.initialize= _$af2935622;if(!_$af2935610){return};_$af2935621.prototype.standardPadding= _$af2935623;_$af2935621.prototype.createBackground= _$af2935624;_$af2935621.prototype.setText= _$af2935625;_$af2935621.prototype.refresh= _$af2935626;_$af2935627.prototype= Object.create(Scene_MenuBase.prototype);_$af2935627.prototype.constructor= _$af2935627;_$af2935627.prototype.create= _$af2935628;_$af2935627.prototype.createBackground= _$af2935629;_$af2935627.prototype.createHistorySprite= _$af2935630;_$af2935627.prototype.createGiveupButton= _$af2935631;_$af2935627.prototype.createNumberButtons= _$af2935632;_$af2935627.prototype.createInputButtons= _$af2935633;_$af2935627.prototype.createWindows= _$af2935634;if(!_$af2935628){return};_$af2935627.prototype.update= _$af2935635;_$af2935627.prototype.updateMouseCursor= _$af2935636;_$af2935627.prototype.updateInput= _$af2935637;_$af2935627.prototype.onGiveup= _$af2935638;_$af2935627.prototype.updateNumberButtons= _$af2935639;_$af2935627.prototype.updateInputButtons= _$af2935640;_$af2935627.prototype.inputNumber= _$af2935641;CryptoJS= CryptoJS
}();