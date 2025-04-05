//=============================================================================
// Dhoom4Numbers.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_FourNumbers = true;

var Dhoom = Dhoom || {};
Dhoom.FourNumbers = Dhoom.FourNumbers || {};
/*:
@plugindesc Dhoom FourNumbers v1.1c
@author Dhoom / (c)Boner Games - www.bonergames.com

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

@param Max Number
@desc Max number limit
@default 24
@type number
@parent General

@param Allow Undo
@default true
@type boolean
@parent General

@param Allow Redo
@default true
@type boolean
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
@default
@parent General



@param Giveup Input
@desc Input for giveup button. a-z 0-9 escape backspace tab enter shift ctrl alt esc space pageup pagedown left up right down
@default c
@type text
@parent Input

@param Undo Input
@desc Input for giveup button. a-z 0-9 escape backspace tab enter shift ctrl alt esc space pageup pagedown left up right down
@default q
@parent Input

@param Redo Input
@desc Input for giveup button. a-z 0-9 escape backspace tab enter shift ctrl alt esc space pageup pagedown left up right down
@default w
@parent Input




@param Operator Symbols
@desc Symbols for Operator
@default ["+", "-", "×", "÷"]
@type text[]
@parent Symbol

@param Giveup Symbol
@desc Text for give up button
@default Give up (C)
@type text
@parent Symbol

@param Undo Symbol
@desc Symbols for undo button
@default < (Q)
@type text
@parent Symbol

@param Redo Symbol
@desc Symbols for redo button
@default > (W)
@type text
@parent Symbol



@param Background Filename
@desc Scene background
@default background
@type file
@require
@dir img/numbergame/
@parent Appearance

@param Number Setting
@desc Setting for button filenames and text style.
@type struct<numberSetting>
@parent Appearance
@default {"buttonNormal":"button-number-normal","buttonActive":"button-number-active","x":"24","y":"24","width":"180","height":"180","text":"%1","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","tone":"{\"hover\":\"[72, 72, 72, 0]\",\"disabled\":\"[0, 0, 0, 255]\",\"hoverDisabled\":\"[72, 72, 72, 255]\"}"}

@param Operator Setting
@desc Setting for button filenames and text style.
@type struct<buttonSetting>
@parent Appearance
@default {"buttonNormal":"button-normal","buttonActive":"button-active","x":"12","y":"12","width":"90","height":"90","text":"%1","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","tone":"{\"hover\":\"[72, 72, 72, 0]\",\"disabled\":\"[0, 0, 0, 255]\",\"hoverDisabled\":\"[72, 72, 72, 255]\"}"}

@param Giveup Setting
@desc Setting for button filenames and text style.
@type struct<giveupSetting>
@parent Appearance
@default {"buttonNormal":"button-giveup","x":"24","y":"24","width":"179","height":"66","text":"%1","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","tone":"{\"hover\":\"[72, 72, 72, 0]\",\"disabled\":\"[0, 0, 0, 255]\",\"hoverDisabled\":\"[72, 72, 72, 255]\"}"}

@param Undo Redo Setting
@desc Setting for button filenames and text style.
@type struct<buttonSetting>
@parent Appearance
@default {"buttonNormal":"button-normal","buttonActive":"button-active","x":"12","y":"12","width":"90","height":"90","text":"%1","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","tone":"{\"hover\":\"[72, 72, 72, 0]\",\"disabled\":\"[0, 0, 0, 255]\",\"hoverDisabled\":\"[72, 72, 72, 255]\"}"}

@param Target Window
@desc Window setting like opacity, background, and text style.
@type struct<windowSetting>
@parent Appearance
@default {"width":"114","height":"114","opacity":"0","padding":"12","text":"%1","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","background":"target-background","backgroundPosition":"[0, 0]"}

@param Preview Window
@desc Window setting like opacity, background, and text style.
@type struct<windowSetting>
@parent Appearance
@default {"width":"315","height":"58","opacity":"0","padding":"12","text":"%1","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}","background":"selected-background","backgroundPosition":"[-19, -40]"}

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
@default {"bar":"time-bar","background":"time-background","backgroundPosition":"[-41, -59]","direction":"vertical","x":"-18","y":"610","width":"69","height":"52","text":"%1","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}"}



@param Numbers Position
@desc Position for each number buttons [X, Y]
@default ["[420, 174]","[648, 174]","[420, 402]","[648, 402]"]
@type text[]
@parent Position

@param Operators Position
@desc Position for each operator buttons [X, Y]
@default ["[420, 631]","[534, 631]","[648, 631]","[762, 631]"]
@type text[]
@parent Position

@param Giveup Position
@desc Position for give up button [X, Y]
@default [1033, 507]
@type text
@parent Position

@param Undo Position
@desc Position for undo button [X, Y]
@default [1033, 631]
@type text
@parent Position

@param Redo Position
@desc Position for redo button [X, Y]
@default [1147, 631]
@type text
@parent Position

@param Target Position
@desc Target window position [x, y]
@default [591, 68]
@parent Position

@param Preview Position
@desc Preview window position [x, y]
@default [932, 109]
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
@default [64, 64]
@type text
@parent Position



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
(c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
*/

/*~struct~numberSetting:
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
@default 180
@type number
@min 1

@param height
@text Text Height
@desc Text height area
@default 180
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

var Window_FourNBase,Window_FourNPreview,Sprite_FourNButton,Sprite_FourNTimeBar,Spriteset_FourNumbers,Scene_FourNumbers;(function() {
var _0x156FA=[];function _0x15737(_0x15737){try{return JSON["parse"](_0x15737,function(_0x15737,_0x15774){try{return this["jsonParse"](_0x15774)}catch(e){return _0x15774}}["bind"](this))}catch(e){return _0x15737}}function _0x15774(_0x15737){return Dhoom["jsonParse"](Dhoom["Parameters"][_0x15737])}function _0x157B1(_0x1591F,_0x157EE,_0x1595C,_0x157B1){var _0x15868=_0x1591F?_0x1591F["clone"]():[];for(i= 0;i< _0x157B1;i++){if(!_0x15868[i]){_0x15868[i]= (Math["floor"](Math["random"]()* _0x157EE)+ 1);var _0x158A5=true}};if($gameSystem["_dhoom4NumbsSolutions"]&& $gameSystem["_dhoom4NumbsSolutions"][_0x1595C]&& $gameSystem["_dhoom4NumbsSolutions"][_0x1595C][_0x15868]){return {success:true,numbers:_0x15868,solutions:$gameSystem["_dhoom4NumbsSolutions"][_0x1595C][_0x15868]}};var _0x158E2,_0x1582B,_0x15774,_0x15999;var _0x15737=[];if(_0x158A5){var _0x159D6=0;console["log"]("[Dhoom4Numbers]: Generating numbers started.");while(!_0x158E2){_0x159D6++;_0x15774= false;console["log"]("[Dhoom4Numbers]: Generating numbers...");if(_0x15737["contains"](_0x15868)){_0x15774= true};if(_0x15774){_0x15868= _0x1591F?_0x1591F["clone"]():[];for(i= 0;i< _0x157B1;i++){if(!_0x15868[i]){_0x15868[i]= (Math["floor"](Math["random"]()* _0x157EE)+ 1)}}}else {_0x15999= this["solveNumbers"](_0x15868,_0x1595C);if(_0x15999["success"]){_0x158E2= _0x15999}else {_0x15737["push"](_0x15868["clone"]());_0x15868= _0x1591F?_0x1591F["clone"]():[];for(i= 0;i< _0x157B1;i++){if(!_0x15868[i]){_0x15868[i]= (Math["floor"](Math["random"]()* _0x157EE)+ 1)}}}};if(_0x159D6>= 100){break}};if(!_0x158E2){throw  new Error("[Dhoom4Numbers]: No possible combination for these numbers: "+ _0x1591F+ " to be "+ _0x1595C)}}else {_0x158E2= this["solveNumbers"](_0x15868,_0x1595C);if(!_0x158E2["success"]){throw  new Error("[Dhoom4Numbers]: No possible combination for these numbers: "+ _0x15868+ " to be "+ _0x1595C)}};if(!$gameSystem["_dhoom4NumbsSolutions"]){$gameSystem["_dhoom4NumbsSolutions"]= {}};if(!$gameSystem["_dhoom4NumbsSolutions"][_0x1595C]){$gameSystem["_dhoom4NumbsSolutions"][_0x1595C]= {}};$gameSystem["_dhoom4NumbsSolutions"][_0x1595C][_0x158E2["numbers"]]= _0x158E2["solutions"];return _0x158E2}function _0x157EE(_0x1582B,_0x15A8D){var _0x15A50={success:false,numbers:_0x1582B,solutions:[]};var _0x15868=[];function _0x159D6(_0x157EE){var _0x15868=[];var _0x158A5=_0x157EE["slice"]();var _0x1582B=["+","-","*","/"];for(var _0x15737=0;_0x15737<= 3;_0x15737++){for(var _0x15774=0;_0x15774<= 3;_0x15774++){for(var _0x157B1=0;_0x157B1<= 3;_0x157B1++){_0x158A5["splice"](3,0,_0x1582B[_0x157B1]);_0x158A5["splice"](2,0,_0x1582B[_0x15774]);_0x158A5["splice"](1,0,_0x1582B[_0x15737]);if(eval(_0x158A5["join"](""))=== _0x15A8D){return [_0x158A5]};_0x15868["push"](_0x158A5);_0x158A5= _0x157EE["slice"]()}}};return _0x15868}var _0x1591F,_0x15ACA;function _0x15999(_0x156FA){_0x1591F= [];_0x15ACA= [];var _0x15737=_0x1595C(_0x156FA);return _0x15737}function _0x1595C(_0x15737){if(_0x15737[0]=== "found"){return _0x15737};var _0x157EE,_0x15774;var _0x157B1=_0x15737["slice"]();for(_0x157EE= 0;_0x157EE< _0x157B1["length"];_0x157EE++){_0x15774= _0x157B1["splice"](_0x157EE,1)[0];_0x15ACA["push"](_0x15774);if(_0x157B1["length"]== 0){var _0x1582B=_0x159D6(_0x15ACA);if(eval(_0x1582B[0]["join"](""))=== _0x15A8D){return ["found",_0x1582B[0]]};_0x15868["push"](_0x1582B);_0x1591F["push"](_0x15ACA["slice"]())};var _0x158A5=_0x1595C(_0x157B1);if(_0x158A5[0]=== "found"){return _0x158A5};_0x157B1["splice"](_0x157EE,0,_0x15774);_0x15ACA["pop"]()};return _0x1591F}function _0x15A13(_0x15737){_0x15737= _0x15737["slice"]();saved= _0x15737["slice"]();permutations= [];if(!_0x15737["contains"]("/")&&  !_0x15737["contains"]("*")){return [_0x15737]};if(!_0x15737["contains"]("+")&&  !_0x15737["contains"]("-")){return [_0x15737]};if(["+","-"]["contains"](_0x15737[1])&& ["/","*"]["contains"](_0x15737[3])){_0x15737["splice"](0,0,"(");_0x15737["splice"](4,0,")")};permutations["push"](_0x15737["slice"]());_0x15737= saved["slice"]();_0x15737["splice"](0,0,"(");_0x15737["splice"](4,0,")");_0x15737["splice"](6,0,"(");_0x15737["splice"](10,0,")");permutations["push"](_0x15737["slice"]());_0x15737= saved["slice"]();_0x15737["splice"](0,0,"(");_0x15737["splice"](6,0,")");permutations["push"](_0x15737["slice"]());_0x15737= saved["slice"]();_0x15737["splice"](2,0,"(");_0x15737["splice"](8,0,")");permutations["push"](_0x15737["slice"]());_0x15737= saved["slice"]();_0x15737["splice"](4,0,"(");_0x15737["splice"](8,0,")");permutations["push"](_0x15737["slice"]());_0x15737= saved["slice"]();return permutations}var _0x15737=_0x15999(_0x1582B);if(_0x15737[0]=== "found"){_0x15A50["solutions"]["push"](_0x15737[1]["join"](" "));_0x15A50["success"]= true;return _0x15A50};var _0x158E2=[];for(var _0x157B1=0;_0x157B1< _0x15868["length"];_0x157B1++){for(var _0x157EE=0;_0x157EE< _0x15868[_0x157B1]["length"];_0x157EE++){if(eval(_0x15868[_0x157B1][_0x157EE]["join"](""))=== _0x15A8D){_0x15A50["solutions"]["push"](_0x15868[_0x157B1][_0x157EE]["join"](" "));_0x15A50["success"]= true;return _0x15A50};var _0x158A5=(_0x15A13(_0x15868[_0x157B1][_0x157EE]));_0x158E2["push"](_0x158A5);for(var _0x15774=0;_0x15774< _0x158A5["length"];_0x15774++){if(eval(_0x158A5[_0x15774]["join"](""))=== _0x15A8D){_0x15A50["solutions"]["push"](_0x158A5[_0x15774]["join"](" "));_0x15A50["success"]= true;return _0x15A50}}}};return _0x15A50}function _0x1582B(){Dhoom["FourNumbers"]["TouchInput_clear"]["call"](this);this["_mouseX"]= 0;this["_mouseY"]= 0}function _0x15868(){return this["_mouseX"]}function _0x158A5(){return this["_mouseY"]}function _0x158E2(_0x15737){Dhoom["FourNumbers"]["TouchInput_onMouseMove"]["call"](this,_0x15737);this["_mouseX"]= Graphics["pageToCanvasX"](_0x15737["pageX"]);this["_mouseY"]= Graphics["pageToCanvasY"](_0x15737["pageY"])}function _0x1591F(_0x15774,_0x15737){Dhoom["FourNumbers"]["Bitmap_initialize"]["call"](this,_0x15774,_0x15737);this["fontBold"]= false}function _0x1595C(){if(this["fontBold"]){return "Bold "+ this["fontSize"]+ "px "+ this["fontFace"]};return Dhoom["FourNumbers"]["Bitmap_makeFontNameText"]["call"](this)}function _0x15999(_0x15737){this["fontFace"]= _0x15737["name"]["length"]> 0?_0x15737["name"]:"GameFont";this["fontSize"]= _0x15737["size"];this["textColor"]= _0x15737["color"];this["outlineWidth"]= _0x15737["outlineWidth"];this["outlineColor"]= _0x15737["outlineColor"];this["fontBold"]= _0x15737["bold"];this["fontItalic"]= _0x15737["italic"]}function _0x159D6(_0x15774,_0x157B1,_0x157EE,_0x15737){if(this["outlineWidth"]=== 0){return};Dhoom["FourNumbers"]["Bitmap_drawTextOutline"]["call"](this,_0x15774,_0x157B1,_0x157EE,_0x15737)}function _0x15A13(_0x15774,_0x15737){Dhoom["FourNumbers"]["Game_Interpreter_pluginCommand"]["call"](this,_0x15774,_0x15737);if(_0x15774["toLowerCase"]()=== "4numbersgame"){$gameTemp["_dhoom4NumbsTarget"]= Number(_0x15737[0]);$gameTemp["_dhoom4NumbsMaxTime"]= Number(_0x15737[1])?Number(_0x15737[1])* 60:Dhoom["FourNumbers"]["defaultTime"]* 60;$gameTemp["_dhoom4NumbsSet"]= [Number(_0x15737[2]),Number(_0x15737[3]),Number(_0x15737[4]),Number(_0x15737[5])];SceneManager["push"](_0x1676B)}}function _0x15A50(){this["initialize"]["apply"](this,arguments)}function _0x15A8D(_0x15737){this["_setting"]= _0x15737;Window_Base["prototype"]["initialize"]["call"](this,0,0,this["_setting"]["width"],this["_setting"]["height"]);this["_text"]= "";this["opacity"]= this["_setting"]["opacity"];this["createBackground"]()}function _0x15ACA(){return this["_setting"]["padding"]}function _0x15B07(){this["_background"]=  new Sprite();this["_background"]["bitmap"]= ImageManager["loadBitmap"](Dhoom["FourNumbers"]["mainDir"],this["_setting"]["background"]);this["_background"]["x"]= this["_setting"]["backgroundPosition"][0];this["_background"]["y"]= this["_setting"]["backgroundPosition"][1];this["addChildToBack"](this["_background"])}function _0x15B44(_0x15737){if(this["_text"]=== _0x15737){return};this["_text"]= _0x15737;this["refresh"]()}function _0x15B81(){this["contents"]["clear"]();this["contents"]["changeTextStyle"](this["_setting"]["style"]);var _0x15737=this["_setting"]["text"]["format"](this["_text"]);this["contents"]["drawText"](_0x15737,0,0,this["contents"]["width"],this["contents"]["height"],this["_setting"]["style"]["align"])}function _0x15BBE(){this["initialize"]["apply"](this,arguments)}function _0x15BFB(_0x15737){this["_set"]= [0,0,0];this["_tempSet"]= this["_set"]["clone"]();_0x15A50["prototype"]["initialize"]["call"](this,_0x15737);this["refresh"]()}function _0x15C38(_0x15737){if(this["_tempSet"]["equals"](_0x15737)){return};this["_set"]= _0x15737;this["refresh"]()}function _0x15C75(){this["contents"]["clear"]();this["contents"]["changeTextStyle"](this["_setting"]["style"]);var _0x157B1=this["contents"]["width"]/ 5;var _0x15774;for(var _0x15737=0;_0x15737< 5;_0x15737++){_0x15774= "";if(_0x15737< 3){_0x15774= this["_set"][_0x15737]}else {if(_0x15737=== 3){_0x15774= "="}else {if(this["_set"][0]&& this["_set"][1]&& this["_set"][2]){_0x15774= Math["round"](eval(this["_set"][0]+ this["_set"][1]+ this["_set"][2])* 100)/ 100}}};if(_0x15774){this["contents"]["drawText"](_0x15774,_0x15737* _0x157B1,0,_0x157B1,this["contents"]["height"],this["_setting"]["style"]["align"])}}}function _0x15CB2(){_0x15A50["prototype"]["update"]["call"](this);if(!this["_tempSet"]["equals"](this["_set"])){this["_tempSet"]= this["_set"]["clone"]();this["refresh"]()}}function _0x15CEF(){this["initialize"]["apply"](this,arguments)}function _0x15D2C(_0x15774,_0x15737){Sprite_Base["prototype"]["initialize"]["call"](this);this["_setting"]= _0x15774;this["_data"]= _0x15737;this["_tempData"]= _0x15737;this["_isDisabled"]= false;this["_active"]= false;this["_hovered"]= false;this["_tempActive"]= false;this["_selected"]= false;this["_tempSelected"]= false;this["_oriData"]= _0x15737;this["refresh"]()}function _0x15D69(){var _0x15737=ImageManager["loadBitmap"](Dhoom["FourNumbers"]["mainDir"],this["getBitmapFilename"]());this["_tempActive"]= this["_active"];this["_tempData"]= this["_data"];if(!_0x15737["isReady"]()){this["_needRefresh"]= true;return};if((!this["bitmap"]|| (this["bitmap"]["width"]!== _0x15737["width"]&& this["bitmap"]["height"]!== _0x15737["height"])) && _0x15737["isReady"]()){this["bitmap"]=  new Bitmap(_0x15737["width"],_0x15737["height"])};this["bitmap"]["clear"]();this["bitmap"]["blt"](_0x15737,0,0,_0x15737["width"],_0x15737["height"],0,0);this["bitmap"]["changeTextStyle"](this["_setting"]["style"]);this["bitmap"]["drawText"](this["text"](),this["_setting"]["x"],this["_setting"]["y"],this["_setting"]["width"],this["_setting"]["height"],this["_setting"]["style"]["align"]);this["_needRefresh"]= false;this["_tempDisabled"]= null;this["_tempHovered"]= null;this["setColorTone"]([0,0,0,0])}function _0x15DA6(){return this["_active"]?this["_setting"]["buttonActive"]:this["_setting"]["buttonNormal"]}function _0x15DE3(){return this["_setting"]["text"]["format"](this["_data"])}function _0x15E20(){Sprite_Base["prototype"]["update"]["call"](this);this["updateBitmap"]();this["_hovered"]= this["isHovered"]();this["updateTone"]();if(TouchInput["isTriggered"]()&& this["isHovered"]()){this["updateInput"]()}}function _0x15E5D(){if((this["_needRefresh"]&& ImageManager["isReady"]())|| this["_tempActive"]!== this["_active"]|| this["_data"]!== this["_tempData"]){this["refresh"]()}}function _0x15E9A(){var _0x15737=TouchInput["_mouseX"];var _0x15774=TouchInput["_mouseY"];return _0x15737>= this["x"]&& _0x15737<= this["x"]+ this["width"]&& _0x15774>= this["y"]&& _0x15774<= this["y"]+ this["height"]}function _0x15ED7(){if(this["_tempDisabled"]=== this["_isDisabled"]&& this["_tempHovered"]=== this["_hovered"]&& this["_tempSelected"]=== this["_selected"]){return};if(this["_isDisabled"]&& (this["_hovered"]|| this["_selected"])){this["setColorTone"](this["_setting"]["tone"]["hoverDisabled"])}else {if(this["_isDisabled"]){this["setColorTone"](this["_setting"]["tone"]["disabled"])}else {if(this["_hovered"]|| this["_selected"]){this["setColorTone"](this["_setting"]["tone"]["hover"])}else {this["setColorTone"]([0,0,0,0])}}};this["_tempHovered"]= this["_hovered"];this["_tempDisabled"]= this["_isDisabled"];this["_tempSelected"]= this["_selected"]}function _0x15F14(){if(!this["visible"]){return};if(this["isHandled"]()){if(this["isHandlerDisabled"]()){SoundManager["playBuzzer"]()}else {this["callInputHandler"]()}}}function _0x15F51(_0x15737){this["_inputHandler"]= _0x15737}function _0x15F8E(){return !!this["_inputHandler"]}function _0x15FCB(){this["_inputHandler"]()}function _0x16008(){return this["_isDisabled"]}function _0x16045(){return this["_oriData"]!== this["_data"]}function _0x16082(){this["initialize"]["apply"](this,arguments)}function _0x160BF(_0x15737){Sprite["prototype"]["initialize"]["call"](this);this["_setting"]= _0x15737;this["_value"]= this["maxValue"]();this["createBackground"]();this["createFill"]();this["createTextSprite"]();this["refresh"]()}function _0x160FC(){this["_background"]=  new Sprite();this["_background"]["bitmap"]= ImageManager["loadBitmap"](Dhoom["FourNumbers"]["mainDir"],this["_setting"]["background"]);this["_background"]["x"]= this["_setting"]["backgroundPosition"][0];this["_background"]["y"]= this["_setting"]["backgroundPosition"][1];this["addChild"](this["_background"])}function _0x16139(){this["_fill"]=  new Sprite();this["addChild"](this["_fill"]);this["createFillBitmap"]()}function _0x16176(){var _0x15737=ImageManager["loadBitmap"](Dhoom["FourNumbers"]["mainDir"],this["_setting"]["bar"]);if(!_0x15737["isReady"]()){this["_needRefresh"]= true;return};this["_needRefresh"]= false;this["_fill"]["bitmap"]=  new Bitmap(_0x15737["width"],_0x15737["height"])}function _0x161B3(){this["_textSprite"]=  new Sprite();this["_textSprite"]["bitmap"]=  new Bitmap(this["_setting"]["width"],this["_setting"]["height"]);this["_textSprite"]["x"]= this["_setting"]["x"];this["_textSprite"]["y"]= this["_setting"]["y"];this["addChild"](this["_textSprite"])}function _0x161F0(){Sprite["prototype"]["update"]["call"](this);if(this["_needRefresh"]&& ImageManager["isReady"]()){this["createFillBitmap"]()};if(this["_value"]){this["_value"]--};if(this["_value"]!== this["_tempValue"]){this["refresh"]()}}function _0x1622D(){if(!this["_fill"]["bitmap"]){return};this["_tempValue"]= this["value"]();this["_fill"]["bitmap"]["clear"]();var _0x15737=ImageManager["loadBitmap"](Dhoom["FourNumbers"]["mainDir"],this["_setting"]["bar"]);var _0x15774=this["_tempValue"]< 0?1:this["_tempValue"]/ this["maxValue"]();if(this["_setting"]["direction"]=== "vertical"){this["_fill"]["bitmap"]["blt"](_0x15737,0,_0x15737["height"]- _0x15737["height"]* _0x15774,_0x15737["width"],_0x15737["height"]* _0x15774,0,_0x15737["height"]- _0x15737["height"]* _0x15774)}else {this["_fill"]["bitmap"]["blt"](_0x15737,0,0,_0x15737["width"]* _0x15774,_0x15737["height"],0,0)};this["_textSprite"]["bitmap"]["clear"]();this["_textSprite"]["bitmap"]["changeTextStyle"](this["_setting"]["style"]);var _0x157B1=this["_tempValue"]< 0?"-":Math["ceil"](this["_tempValue"]/ 60);this["_textSprite"]["bitmap"]["drawText"](_0x157B1,0,0,this["_textSprite"]["width"],this["_textSprite"]["height"],this["_setting"]["style"]["align"])}function _0x1626A(){return $gameTemp["_dhoom4NumbsMaxTime"]}function _0x162A7(){return this["_value"]}function _0x162E4(){this["initialize"]["apply"](this,arguments)}function _0x16321(){Sprite["prototype"]["initialize"]["call"](this);this["_index"]= 0;this["_state"]= false;this["createBackground"]();this["createOperators"]();this["createNumbers"]();this["createGiveupButton"]();this["createUndoButton"]();this["createRedoButton"]();this["createTargetWindow"]();this["createPreviewWindow"]();this["createTimeBar"]();this["createGiveupWindow"]();this["createWinWindow"]()}function _0x1635E(){this["_background"]=  new Sprite();this["_background"]["bitmap"]= ImageManager["loadBitmap"](Dhoom["FourNumbers"]["mainDir"],Dhoom["FourNumbers"]["background"]);this["addChild"](this["_background"])}function _0x1639B(){this["_operators"]= [];for(var _0x15737=0;_0x15737< 4;_0x15737++){var _0x15774= new _0x15CEF(Dhoom["FourNumbers"]["operatorSetting"],Dhoom["FourNumbers"]["operatorSymbols"][_0x15737]);_0x15774["x"]= Dhoom["FourNumbers"]["operatorPosition"][_0x15737][0];_0x15774["y"]= Dhoom["FourNumbers"]["operatorPosition"][_0x15737][1];this["_operators"]["push"](_0x15774);this["addChild"](_0x15774)}}function _0x163D8(){this["_numbers"]= [];this["_resultNumbers"];while(!this["_resultNumbers"]){var _0x15774=Dhoom["FourNumbers"]["generateRandomNumbers"]($gameTemp["_dhoom4NumbsSet"],Dhoom["FourNumbers"]["maxNumLim"],$gameTemp["_dhoom4NumbsTarget"],Dhoom["FourNumbers"]["maxNumSel"]);if(_0x15774["success"]){this["_resultNumbers"]= _0x15774}};for(var _0x15737=0;_0x15737< Dhoom["FourNumbers"]["maxNumSel"];_0x15737++){var _0x157B1= new _0x15CEF(Dhoom["FourNumbers"]["numberSetting"],this["_resultNumbers"]["numbers"][_0x15737]);_0x157B1["x"]= Dhoom["FourNumbers"]["numberPosition"][_0x15737][0];_0x157B1["y"]= Dhoom["FourNumbers"]["numberPosition"][_0x15737][1];this["_numbers"]["push"](_0x157B1);this["addChild"](_0x157B1)}}function _0x16415(){this["_giveupButton"]=  new _0x15CEF(Dhoom["FourNumbers"]["giveupSetting"],Dhoom["FourNumbers"]["giveupSymbol"]);this["_giveupButton"]["x"]= Dhoom["FourNumbers"]["giveupPosition"][0];this["_giveupButton"]["y"]= Dhoom["FourNumbers"]["giveupPosition"][1];this["addChild"](this["_giveupButton"])}function _0x16452(){if(!Dhoom["FourNumbers"]["allowUndo"]){return};this["_undoButton"]=  new _0x15CEF(Dhoom["FourNumbers"]["undoRedoSetting"],Dhoom["FourNumbers"]["undoSymbol"]);this["_undoButton"]["x"]= Dhoom["FourNumbers"]["undoPosition"][0];this["_undoButton"]["y"]= Dhoom["FourNumbers"]["undoPosition"][1];this["_undoButton"]["_isDisabled"]= true;this["addChild"](this["_undoButton"])}function _0x1648F(){if(!Dhoom["FourNumbers"]["allowRedo"]){return};this["_redoButton"]=  new _0x15CEF(Dhoom["FourNumbers"]["undoRedoSetting"],Dhoom["FourNumbers"]["redoSymbol"]);this["_redoButton"]["x"]= Dhoom["FourNumbers"]["redoPosition"][0];this["_redoButton"]["y"]= Dhoom["FourNumbers"]["redoPosition"][1];this["_redoButton"]["_isDisabled"]= true;this["addChild"](this["_redoButton"])}function _0x164CC(){this["_targetWindow"]=  new _0x15A50(Dhoom["FourNumbers"]["targetSetting"]);this["_targetWindow"]["x"]= Dhoom["FourNumbers"]["targetPosition"][0];this["_targetWindow"]["y"]= Dhoom["FourNumbers"]["targetPosition"][1];this["_targetWindow"]["setText"]($gameTemp["_dhoom4NumbsTarget"]);this["addChild"](this["_targetWindow"])}function _0x16509(){this["_previewWindow"]=  new _0x15BBE(Dhoom["FourNumbers"]["previewSetting"]);this["_previewWindow"]["x"]= Dhoom["FourNumbers"]["previewPosition"][0];this["_previewWindow"]["y"]= Dhoom["FourNumbers"]["previewPosition"][1];this["addChild"](this["_previewWindow"])}function _0x16546(){this["_timeBar"]=  new _0x16082(Dhoom["FourNumbers"]["timeBarSetting"]);this["_timeBar"]["x"]= Dhoom["FourNumbers"]["timeBarPosition"][0];this["_timeBar"]["y"]= Dhoom["FourNumbers"]["timeBarPosition"][1];this["addChild"](this["_timeBar"])}function _0x16583(){this["_giveupWindow"]=  new _0x15A50(Dhoom["FourNumbers"]["giveupWindow"]);this["_giveupWindow"]["x"]= Dhoom["FourNumbers"]["giveupWPosition"][0];this["_giveupWindow"]["y"]= Dhoom["FourNumbers"]["giveupWPosition"][1];var _0x15737=this["_resultNumbers"]["solutions"][0];_0x15737= _0x15737["replace"](/\+/gi,Dhoom["FourNumbers"]["operatorSymbols"][0]);_0x15737= _0x15737["replace"](/\-/gi,Dhoom["FourNumbers"]["operatorSymbols"][1]);_0x15737= _0x15737["replace"](/\*/gi,Dhoom["FourNumbers"]["operatorSymbols"][2]);_0x15737= _0x15737["replace"](/\//gi,Dhoom["FourNumbers"]["operatorSymbols"][3]);if(Dhoom["FourNumbers"]["showSolution"]){this["_giveupWindow"]["setText"](_0x15737)};this["_giveupWindow"]["hide"]();this["addChild"](this["_giveupWindow"])}function _0x165C0(){this["_winWindow"]=  new _0x15A50(Dhoom["FourNumbers"]["winWindow"]);this["_winWindow"]["x"]= Dhoom["FourNumbers"]["winPosition"][0];this["_winWindow"]["y"]= Dhoom["FourNumbers"]["winPosition"][1];this["_winWindow"]["hide"]();this["addChild"](this["_winWindow"])}function _0x165FD(){Sprite["prototype"]["update"]["call"](this);this["updateButtons"]();this["updateCursor"]()}function _0x1663A(){if(Input["isTriggered"]("left")){SoundManager["playCursor"]();this["_index"]--;var _0x15737=false;while(!_0x15737){if(this["_index"]< 0){this["_index"]= this["_numbers"]["length"]+ this["_operators"]["length"]- 1};if(this["_index"]< this["_numbers"]["length"]){if(!this["_numbers"][this["_index"]]["parent"]){this["_index"]--}else {_0x15737= true}};if(this["_index"]>= this["_numbers"]["length"]){if(!this["_operators"][this["_index"]- this["_numbers"]["length"]]["parent"]){this["_index"]--}else {_0x15737= true}}}};if(Input["isTriggered"]("right")){SoundManager["playCursor"]();this["_index"]++;var _0x15737=false;while(!_0x15737){if(this["_index"]> this["_numbers"]["length"]+ this["_operators"]["length"]- 1){this["_index"]= 0};if(this["_index"]< this["_numbers"]["length"]){if(!this["_numbers"][this["_index"]]["parent"]){this["_index"]++}else {_0x15737= true}};if(this["_index"]>= this["_numbers"]["length"]){if(!this["_operators"][this["_index"]- this["_numbers"]["length"]]["parent"]){this["_index"]++}else {_0x15737= true}}}};if(Input["isTriggered"]("up")){if(this["_index"]- 2>= 0&& ((this["_index"]- 2< this["_numbers"]["length"]&& this["_numbers"][this["_index"]- 2]["parent"])|| (this["_index"]- 2>= this["_numbers"]["length"]&& this["_operators"][this["_index"]- 2- this["_numbers"]["length"]]["parent"]))){SoundManager["playCursor"]();this["_index"]-= 2}};if(Input["isTriggered"]("down")){if(this["_index"]+ 2< this["_numbers"]["length"]+ this["_operators"]["length"]- 1&& ((this["_index"]+ 2< this["_numbers"]["length"]&& this["_numbers"][this["_index"]+ 2]["parent"])|| (this["_index"]+ 2>= this["_numbers"]["length"]&& this["_operators"][this["_index"]+ 2- this["_numbers"]["length"]]["parent"]))){SoundManager["playCursor"]();this["_index"]+= 2}};if(this["_index"]< 0){this["_index"]= this["_numbers"]["length"]+ this["_operators"]["length"]- 1};if(this["_index"]> this["_numbers"]["length"]+ this["_operators"]["length"]- 1){this["_index"]= 0};for(var _0x15774=0;_0x15774< this["_numbers"]["length"];_0x15774++){if(this["_numbers"][_0x15774]["isHovered"]()){this["_index"]= _0x15774};this["_numbers"][_0x15774]["_selected"]= _0x15774=== this["_index"]};for(var _0x15774=0;_0x15774< this["_operators"]["length"];_0x15774++){if(this["_operators"][_0x15774]["isHovered"]()){this["_index"]= this["_numbers"]["length"]+ _0x15774};this["_operators"][_0x15774]["_selected"]= _0x15774=== this["_index"]- this["_numbers"]["length"]}}function _0x16677(){if(Imported["TDDP_MouseSystemEx"]&& TDDP_MouseSystemEx["useCustomCursor"]&& Dhoom["FourNumbers"]["hoverCursor"]){var _0x15737=false;if(!_0x15737){this["_numbers"]["forEach"](function(_0x15774){if(_0x15774["isHovered"]()){_0x15737= true}},this)};if(!_0x15737){this["_operators"]["forEach"](function(_0x15774){if(_0x15774["isHovered"]()){_0x15737= true}},this)};if(!_0x15737&& this["_giveupButton"]["isHovered"]()){_0x15737= true};if(!_0x15737&& this["_undoButton"] && this["_undoButton"]["isHovered"]()){_0x15737= true};if(!_0x15737&& this["_redoButton"] && this["_redoButton"]["isHovered"]()){_0x15737= true};if(this["_state"]!== _0x15737){if(_0x15737){TDDP_MouseSystemEx["_setCustomCursor"](TDDP_MouseSystemEx["_ext"](Dhoom["FourNumbers"]["hoverCursor"]))}else {TDDP_MouseSystemEx["_resetCustomCursor"]()};this["_state"]= _0x15737}}}function _0x166B4(){for(var _0x15737=0;_0x15737< this["_operators"]["length"];_0x15737++){if(this["_operators"][_0x15737]["_active"]){return ["+","-","*","/"][_0x15737]}}}function _0x166F1(){var _0x15737=[];this["_numbers"]["forEach"](function(_0x15774){if(_0x15774["_active"]){_0x15737["push"](_0x15774)}},this);return _0x15737}function _0x1672E(){var _0x15737=[];this["_numbers"]["forEach"](function(_0x15774){if(this["children"]["contains"](_0x15774)){_0x15737["push"](_0x15774)}},this);return _0x15737}function _0x1676B(){this["initialize"]["apply"](this,arguments)}function _0x167A8(){Scene_Base["prototype"]["initialize"]["call"](this);this["_selectedNumbers"]= [];this["_undoOps"]= [];this["_redoOps"]= [];this["createSpriteset"]()}function _0x167E5(){this["_spriteset"]=  new _0x162E4();this["_spriteset"]["_giveupButton"]["setHandler"](this["commandGiveup"]["bind"](this));if(this["_spriteset"]["_undoButton"]){this["_spriteset"]["_undoButton"]["setHandler"](this["commandUndo"]["bind"](this))};if(this["_spriteset"]["_redoButton"]){this["_spriteset"]["_redoButton"]["setHandler"](this["commandRedo"]["bind"](this))};this["_spriteset"]["_operators"]["forEach"](function(_0x15737){_0x15737["setHandler"](this["commandOperator"]["bind"](this,_0x15737))},this);this["_spriteset"]["_numbers"]["forEach"](function(_0x15737){_0x15737["setHandler"](this["commandNumber"]["bind"](this,_0x15737))},this);this["addChild"](this["_spriteset"])}function _0x16822(){Scene_Base["prototype"]["update"]["call"](this);this["updateButtons"]();if(!this["_solutionShown"]&& this["_spriteset"]["_timeBar"]["value"]()=== 0){SoundManager["playBuzzer"]();this["showSolution"]();this["_spriteset"]["_giveupWindow"]["show"]();this["addChild"](this["_spriteset"]["_giveupWindow"]);$gameSwitches["setValue"](Dhoom["FourNumbers"]["resultSwitch"],false);AudioManager["playMe"](Dhoom["FourNumbers"]["failME"])}}function _0x1685F(){if(this["_solutionShown"]){if(Input["isTriggered"]("cancel")|| TouchInput["isCancelled"]()){SoundManager["playCancel"]();if(Imported["TDDP_MouseSystemEx"]&& TDDP_MouseSystemEx["useCustomCursor"]){TDDP_MouseSystemEx["_resetCustomCursor"]()};SceneManager["pop"]()}}else {if(Input["isTriggered"]("#"+ Dhoom["FourNumbers"]["giveupInput"])){this["_spriteset"]["_giveupButton"]["updateInput"]()};if(this["_spriteset"]["_undoButton"]){this["_spriteset"]["_undoButton"]["_isDisabled"]= this["_undoOps"]["length"]=== 0;if(Input["isTriggered"]("#"+ Dhoom["FourNumbers"]["undoInput"])){this["_spriteset"]["_undoButton"]["updateInput"]()}};if(this["_spriteset"]["_redoButton"]){this["_spriteset"]["_redoButton"]["_isDisabled"]= this["_redoOps"]["length"]=== 0;if(Input["isTriggered"]("#"+ Dhoom["FourNumbers"]["redoInput"])){this["_spriteset"]["_redoButton"]["updateInput"]()}};if(Input["isTriggered"]("ok")){var _0x15737=this["_spriteset"]["_index"];if(_0x15737< this["_spriteset"]["_numbers"]["length"]){this["_spriteset"]["_numbers"][_0x15737]["updateInput"]()}else {this["_spriteset"]["_operators"][_0x15737- this["_spriteset"]["_numbers"]["length"]]["updateInput"]()}};var _0x15774=this["_spriteset"]["_previewWindow"];this["_spriteset"]["_numbers"]["forEach"](function(_0x157EE,_0x157B1){if((_0x157EE["_hovered"]|| _0x157EE["_selected"])&&  !this["_selectedNumbers"]["contains"](_0x157EE)){_0x15774["_set"][_0x15737]= _0x157EE["_data"]}},this);if(!this["_spriteset"]["getOperator"]()){_0x15774["_set"][1]= 0;this["_spriteset"]["_operators"]["forEach"](function(_0x157B1,_0x15737){if(_0x157B1["_hovered"]|| _0x157B1["_selected"]){_0x15774["_set"][1]= ["+","-","*","/"][_0x15737]}},this)};if(!this["_selectedNumbers"][0]||  !this["_selectedNumbers"][1]){var _0x15737=this["_selectedNumbers"][0]?2:0;_0x15774["_set"][_0x15737]= 0;this["_spriteset"]["_numbers"]["forEach"](function(_0x157EE,_0x157B1){if((_0x157EE["_hovered"]|| _0x157EE["_selected"])&&  !this["_selectedNumbers"]["contains"](_0x157EE)){_0x15774["_set"][_0x15737]= _0x157EE["_data"]}},this)}}}function _0x1689C(){TouchInput["update"]();SoundManager["playOk"]();this["showSolution"]();this["_spriteset"]["_giveupWindow"]["show"]();this["addChild"](this["_spriteset"]["_giveupWindow"]);$gameSwitches["setValue"](Dhoom["FourNumbers"]["resultSwitch"],false);AudioManager["playMe"](Dhoom["FourNumbers"]["failME"])}function _0x168D9(){TouchInput["update"]();SoundManager["playOk"]();var _0x15737=this["_undoOps"]["pop"]();this["_redoOps"]["push"](_0x15737["clone"]());this["_redoOps"][this["_redoOps"]["length"]- 1][2]= _0x15737[1]["_data"];this["_redoOps"][this["_redoOps"]["length"]- 1][3]= _0x15737[1]["_operation"]["pop"]();this["_spriteset"]["addChild"](_0x15737[0]);_0x15737[0]["_active"]= false;_0x15737[1]["_data"]= _0x15737[2];this["_spriteset"]["_previewWindow"]["_set"]= [];this["_spriteset"]["_previewWindow"]["_set"][3]= "="}function _0x16916(){TouchInput["update"]();SoundManager["playOk"]();var _0x15737=this["_redoOps"]["pop"]();this["_undoOps"]["push"](_0x15737["clone"]());this["_undoOps"][this["_undoOps"]["length"]- 1][2]= _0x15737[1]["_data"];this["_spriteset"]["removeChild"](_0x15737[0]);_0x15737[1]["_data"]= _0x15737[2];_0x15737[1]["_operation"]["push"](_0x15737[3]);this["_spriteset"]["_previewWindow"]["_set"]= [];this["_spriteset"]["_previewWindow"]["_set"][3]= "="}function _0x16953(_0x15737){TouchInput["update"]();SoundManager["playCursor"]();this["_spriteset"]["_operators"]["forEach"](function(_0x15737){_0x15737["_active"]= false},this);_0x15737["_active"]= true;var _0x15774=this["_spriteset"]["_previewWindow"]["_set"]["clone"]();_0x15774[1]= this["_spriteset"]["getOperator"]();this["_spriteset"]["_previewWindow"]["changeSet"](_0x15774)}function _0x16990(_0x157B1){TouchInput["update"]();SoundManager["playCursor"]();if(_0x157B1["_active"]){_0x157B1["_active"]= false;this["_selectedNumbers"]["splice"](this["_selectedNumbers"]["indexOf"](_0x157B1),1)}else {if(!this["_spriteset"]["getOperator"]()){this["_spriteset"]["_numbers"]["forEach"](function(_0x15737){_0x15737["_active"]= false},this);this["_selectedNumbers"]= []};_0x157B1["_active"]= true;this["_selectedNumbers"]["push"](_0x157B1)};var _0x158A5=this["_spriteset"]["_previewWindow"]["_set"]["clone"]();_0x158A5[0]= this["_selectedNumbers"][0]?this["_selectedNumbers"][0]["_data"]:0;_0x158A5[2]= this["_selectedNumbers"][1]?this["_selectedNumbers"][1]["_data"]:0;this["_spriteset"]["_previewWindow"]["changeSet"](_0x158A5);if(this["_selectedNumbers"]["length"]>= 2){this["_redoOps"]= [];var _0x15868="";var _0x1582B=this["_spriteset"]["getOperator"]();var _0x157EE=this["_selectedNumbers"]["map"](function(_0x15737){return _0x15737["_data"]});_0x157EE["forEach"](function(_0x15774,_0x15737){_0x15868+= _0x15774;if(_0x15737< _0x157EE["length"]- 1){_0x15868+= _0x1582B}},this);if(eval(_0x15868)% 1=== 0){_0x15868= eval(_0x15868)};this["_spriteset"]["removeChild"](this["_selectedNumbers"][0]);this["_selectedNumbers"]["push"](_0x157B1["_data"]);this["_undoOps"]["push"](this["_selectedNumbers"]["clone"]());_0x157B1["_data"]= _0x15868;var _0x15737=this["_selectedNumbers"][0]["_operation"]&& this["_selectedNumbers"][0]["_operation"]["length"]> 0?"( "+ this["_selectedNumbers"][0]["_operation"][this["_selectedNumbers"][0]["_operation"]["length"]- 1]+ " )":this["_selectedNumbers"][0]["_oriData"];var _0x15774=this["_selectedNumbers"][1]["_operation"]&& this["_selectedNumbers"][1]["_operation"]["length"]> 0?"( "+ this["_selectedNumbers"][1]["_operation"][this["_selectedNumbers"][1]["_operation"]["length"]- 1]+ " )":this["_selectedNumbers"][1]["_oriData"];_0x157B1["_operation"]= _0x157B1["_operation"]|| [];_0x157B1["_operation"]["push"](_0x15737+ " "+ _0x1582B+ " "+ _0x15774);_0x157B1["_active"]= false;this["_selectedNumbers"]= [];this["_spriteset"]["_operators"]["forEach"](function(_0x15737){_0x15737["_active"]= false},this);this["_spriteset"]["_previewWindow"]["_set"]= [];this["_spriteset"]["_previewWindow"]["_set"][3]= "=";if(this["_spriteset"]["currentNumbers"]()["length"]=== 1&& _0x15868=== $gameTemp["_dhoom4NumbsTarget"]){this["_spriteset"]["update"]();this["showSolution"]();var _0x158E2=_0x157B1["_operation"][_0x157B1["_operation"]["length"]- 1];if((!_0x158E2["contains"]("*")&&  !_0x158E2["contains"]("/")) || (!_0x158E2["contains"]("+")&&  !_0x158E2["contains"]("-"))){_0x158E2= _0x158E2["replace"](/\( /gi,"");_0x158E2= _0x158E2["replace"](/ \)/gi,"");_0x158E2= _0x158E2["replace"](/\+/gi,Dhoom["FourNumbers"]["operatorSymbols"][0]);_0x158E2= _0x158E2["replace"](/\-/gi,Dhoom["FourNumbers"]["operatorSymbols"][1]);_0x158E2= _0x158E2["replace"](/\*/gi,Dhoom["FourNumbers"]["operatorSymbols"][2]);_0x158E2= _0x158E2["replace"](/\//gi,Dhoom["FourNumbers"]["operatorSymbols"][3]);_0x158E2["trim"]()};this["_spriteset"]["_winWindow"]["setText"](_0x158E2);this["_spriteset"]["_winWindow"]["show"]();this["addChild"](this["_spriteset"]["_winWindow"]);$gameSwitches["setValue"](Dhoom["FourNumbers"]["resultSwitch"],true);AudioManager["playMe"](Dhoom["FourNumbers"]["winME"])}}}function _0x169CD(){this["_tempSprite"]=  new Sprite();this["_tempSprite"]["bitmap"]= SceneManager["snap"]();this["addChild"](this["_tempSprite"]);this["removeChild"](this["_spriteset"]);this["_solutionShown"]= true}Window_FourNBase= _0x15A50;Window_FourNPreview= _0x15BBE;Sprite_FourNButton= _0x15CEF;Sprite_FourNTimeBar= _0x16082;Spriteset_FourNumbers= _0x162E4;Scene_FourNumbers= _0x1676B;Dhoom["Parameters"]= PluginManager["parameters"]("Dhoom4Numbers");if(!Dhoom["jsonParse"]){Dhoom["jsonParse"]= _0x15737};if(!Dhoom["loadParam"]){Dhoom["loadParam"]= _0x15774};Dhoom["FourNumbers"]["resultSwitch"]= Dhoom["loadParam"]("Result Switch ID");Dhoom["FourNumbers"]["maxNumSel"]= 4;Dhoom["FourNumbers"]["maxNumLim"]= Dhoom["loadParam"]("Max Number");Dhoom["FourNumbers"]["allowUndo"]= Dhoom["loadParam"]("Allow Undo");Dhoom["FourNumbers"]["allowRedo"]= Dhoom["loadParam"]("Allow Redo");Dhoom["FourNumbers"]["defaultTime"]= Dhoom["loadParam"]("Default Time Limit");Dhoom["FourNumbers"]["showSolution"]= Dhoom["loadParam"]("Show Solution");Dhoom["FourNumbers"]["hoverCursor"]= Dhoom["loadParam"]("TDDP Mouse Cursor");Dhoom["FourNumbers"]["giveupInput"]= Dhoom["loadParam"]("Giveup Input")["toLowerCase"]();Dhoom["FourNumbers"]["undoInput"]= Dhoom["loadParam"]("Undo Input")["toLowerCase"]();Dhoom["FourNumbers"]["redoInput"]= Dhoom["loadParam"]("Redo Input")["toLowerCase"]();Dhoom["FourNumbers"]["operatorSymbols"]= Dhoom["loadParam"]("Operator Symbols");Dhoom["FourNumbers"]["giveupSymbol"]= Dhoom["loadParam"]("Giveup Symbol");Dhoom["FourNumbers"]["undoSymbol"]= Dhoom["loadParam"]("Undo Symbol");Dhoom["FourNumbers"]["redoSymbol"]= Dhoom["loadParam"]("Redo Symbol");Dhoom["FourNumbers"]["background"]= Dhoom["loadParam"]("Background Filename");Dhoom["FourNumbers"]["numberSetting"]= Dhoom["loadParam"]("Number Setting");Dhoom["FourNumbers"]["giveupSetting"]= Dhoom["loadParam"]("Giveup Setting");Dhoom["FourNumbers"]["operatorSetting"]= Dhoom["loadParam"]("Operator Setting");Dhoom["FourNumbers"]["undoRedoSetting"]= Dhoom["loadParam"]("Undo Redo Setting");Dhoom["FourNumbers"]["targetSetting"]= Dhoom["loadParam"]("Target Window");Dhoom["FourNumbers"]["previewSetting"]= Dhoom["loadParam"]("Preview Window");Dhoom["FourNumbers"]["winWindow"]= Dhoom["loadParam"]("Win Window");Dhoom["FourNumbers"]["giveupWindow"]= Dhoom["loadParam"]("Giveup Window");Dhoom["FourNumbers"]["timeBarSetting"]= Dhoom["loadParam"]("Time Bar");Dhoom["FourNumbers"]["numberPosition"]= Dhoom["loadParam"]("Numbers Position");Dhoom["FourNumbers"]["operatorPosition"]= Dhoom["loadParam"]("Operators Position");Dhoom["FourNumbers"]["giveupPosition"]= Dhoom["loadParam"]("Giveup Position");Dhoom["FourNumbers"]["undoPosition"]= Dhoom["loadParam"]("Undo Position");Dhoom["FourNumbers"]["redoPosition"]= Dhoom["loadParam"]("Redo Position");Dhoom["FourNumbers"]["targetPosition"]= Dhoom["loadParam"]("Target Position");Dhoom["FourNumbers"]["previewPosition"]= Dhoom["loadParam"]("Preview Position");Dhoom["FourNumbers"]["winPosition"]= Dhoom["loadParam"]("Win Window Position");Dhoom["FourNumbers"]["giveupWPosition"]= Dhoom["loadParam"]("Giveup Window Position");Dhoom["FourNumbers"]["timeBarPosition"]= Dhoom["loadParam"]("Time Bar Position");Dhoom["FourNumbers"]["winME"]= Dhoom["loadParam"]("Win ME");Dhoom["FourNumbers"]["failME"]= Dhoom["loadParam"]("Fail ME");Dhoom["FourNumbers"]["mainDir"]= "img/numbergame/";Dhoom["FourNumbers"]["generateRandomNumbers"]= _0x157B1;Dhoom["FourNumbers"]["solveNumbers"]= _0x157EE;if(!Imported["Quasi_Input"]){throw  new Error("Quasi Input plugin is required, and this plugin has to be under it.")};if( typeof TouchInput["_mouseX"]=== "undefined"){Dhoom["FourNumbers"]["TouchInput_clear"]= TouchInput["clear"];TouchInput["clear"]= _0x1582B;Object["defineProperty"](TouchInput,"mouseX",{get:_0x15868,configurable:true});Object["defineProperty"](TouchInput,"mouseY",{get:_0x158A5,configurable:true});Dhoom["FourNumbers"]["TouchInput_onMouseMove"]= TouchInput["_onMouseMove"];TouchInput["_onMouseMove"]= _0x158E2};Dhoom["FourNumbers"]["Bitmap_initialize"]= Bitmap["prototype"]["initialize"];Bitmap["prototype"]["initialize"]= _0x1591F;Dhoom["FourNumbers"]["Bitmap_makeFontNameText"]= Bitmap["prototype"]["_makeFontNameText"];Bitmap["prototype"]["_makeFontNameText"]= _0x1595C;Bitmap["prototype"]["changeTextStyle"]= _0x15999;Dhoom["FourNumbers"]["Bitmap_drawTextOutline"]= Bitmap["prototype"]["_drawTextOutline"];Bitmap["prototype"]["_drawTextOutline"]= _0x159D6;Dhoom["FourNumbers"]["Game_Interpreter_pluginCommand"]= Game_Interpreter["prototype"]["pluginCommand"];Game_Interpreter["prototype"]["pluginCommand"]= _0x15A13;_0x15A50["prototype"]= Object["create"](Window_Base["prototype"]);_0x15A50["prototype"]["constructor"]= _0x15A50;_0x15A50["prototype"]["initialize"]= _0x15A8D;_0x15A50["prototype"]["standardPadding"]= _0x15ACA;_0x15A50["prototype"]["createBackground"]= _0x15B07;_0x15A50["prototype"]["setText"]= _0x15B44;_0x15A50["prototype"]["refresh"]= _0x15B81;_0x15BBE["prototype"]= Object["create"](_0x15A50["prototype"]);_0x15BBE["prototype"]["constructor"]= _0x15BBE;_0x15BBE["prototype"]["initialize"]= _0x15BFB;_0x15A50["prototype"]["changeSet"]= _0x15C38;_0x15BBE["prototype"]["refresh"]= _0x15C75;_0x15BBE["prototype"]["update"]= _0x15CB2;_0x15CEF["prototype"]= Object["create"](Sprite_Base["prototype"]);_0x15CEF["prototype"]["constructor"]= _0x15CEF;_0x15CEF["prototype"]["initialize"]= _0x15D2C;_0x15CEF["prototype"]["refresh"]= _0x15D69;_0x15CEF["prototype"]["getBitmapFilename"]= _0x15DA6;_0x15CEF["prototype"]["text"]= _0x15DE3;_0x15CEF["prototype"]["update"]= _0x15E20;_0x15CEF["prototype"]["updateBitmap"]= _0x15E5D;_0x15CEF["prototype"]["isHovered"]= _0x15E9A;_0x15CEF["prototype"]["updateTone"]= _0x15ED7;_0x15CEF["prototype"]["updateInput"]= _0x15F14;_0x15CEF["prototype"]["setHandler"]= _0x15F51;_0x15CEF["prototype"]["isHandled"]= _0x15F8E;_0x15CEF["prototype"]["callInputHandler"]= _0x15FCB;_0x15CEF["prototype"]["isHandlerDisabled"]= _0x16008;_0x15CEF["prototype"]["isModified"]= _0x16045;_0x16082["prototype"]= Object["create"](Sprite["prototype"]);_0x16082["prototype"]["constructor"]= _0x16082;_0x16082["prototype"]["initialize"]= _0x160BF;_0x16082["prototype"]["createBackground"]= _0x160FC;_0x16082["prototype"]["createFill"]= _0x16139;_0x16082["prototype"]["createFillBitmap"]= _0x16176;_0x16082["prototype"]["createTextSprite"]= _0x161B3;_0x16082["prototype"]["update"]= _0x161F0;_0x16082["prototype"]["refresh"]= _0x1622D;_0x16082["prototype"]["maxValue"]= _0x1626A;_0x16082["prototype"]["value"]= _0x162A7;_0x162E4["prototype"]= Object["create"](Sprite["prototype"]);_0x162E4["prototype"]["constructor"]= _0x162E4;_0x162E4["prototype"]["initialize"]= _0x16321;_0x162E4["prototype"]["createBackground"]= _0x1635E;_0x162E4["prototype"]["createOperators"]= _0x1639B;_0x162E4["prototype"]["createNumbers"]= _0x163D8;_0x162E4["prototype"]["createGiveupButton"]= _0x16415;_0x162E4["prototype"]["createUndoButton"]= _0x16452;_0x162E4["prototype"]["createRedoButton"]= _0x1648F;_0x162E4["prototype"]["createTargetWindow"]= _0x164CC;_0x162E4["prototype"]["createPreviewWindow"]= _0x16509;_0x162E4["prototype"]["createTimeBar"]= _0x16546;_0x162E4["prototype"]["createGiveupWindow"]= _0x16583;_0x162E4["prototype"]["createWinWindow"]= _0x165C0;_0x162E4["prototype"]["update"]= _0x165FD;_0x162E4["prototype"]["updateButtons"]= _0x1663A;_0x162E4["prototype"]["updateCursor"]= _0x16677;_0x162E4["prototype"]["getOperator"]= _0x166B4;_0x162E4["prototype"]["getNumbers"]= _0x166F1;_0x162E4["prototype"]["currentNumbers"]= _0x1672E;_0x1676B["prototype"]= Object["create"](Scene_Base["prototype"]);_0x1676B["prototype"]["constructor"]= _0x1676B;_0x1676B["prototype"]["initialize"]= _0x167A8;_0x1676B["prototype"]["createSpriteset"]= _0x167E5;_0x1676B["prototype"]["update"]= _0x16822;_0x1676B["prototype"]["updateButtons"]= _0x1685F;_0x1676B["prototype"]["commandGiveup"]= _0x1689C;_0x1676B["prototype"]["commandUndo"]= _0x168D9;_0x1676B["prototype"]["commandRedo"]= _0x16916;_0x1676B["prototype"]["commandOperator"]= _0x16953;_0x1676B["prototype"]["commandNumber"]= _0x16990;_0x1676B["prototype"]["showSolution"]= _0x169CD
})();