//=============================================================================
// DhoomNameInputHelp.js
//=============================================================================

var Imported = Imported || {};
Imported.Dhoom_NameInputHelp = true;

var Dhoom = Dhoom || {};
Dhoom.NameInputHelp = Dhoom.NameInputHelp || {};

/*:
 * @plugindesc Show help when inputting name.
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @param Window Rect
 * @desc Window position and size. [x, y, width, height]
 * @default [0, 0, 300, 48]
 *
 * @param Window Opacity
 * @desc Window opacity.
 * @default 255
 *
 * @param Window Text Line 1
 * @desc Text that will be shown.
 * @default Line 1
 * 
 * @param Window Text Line 2
 * @desc Text that will be shown.
 * @default Line 2
 * 
 * @param Window Text Line 3
 * @desc Text that will be shown.
 * @default
 * 
 * @param Window Text Line 4
 * @desc Text that will be shown.
 * @default
 * 
 * @param Window Text Line 5
 * @desc Text that will be shown.
 * @default
 * 
 * @help
  Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

var i,text,Window_NameInputHelp,CryptoJS;+function() {
function _$af2938373(){this.initialize.apply(this,arguments)}function _$af2938374(){Window_Base.prototype.initialize.apply(this,Dhoom.Params.NameInputHelp.windowRect);this.opacity= Dhoom.Params.NameInputHelp.windowOpacity;var text="";for(var i=0;i< Dhoom.Params.NameInputHelp.windowTexts.length;i++){text+= Dhoom.Params.NameInputHelp.windowTexts[i]+ "\x0A"};this.setText(text)}function _$af2938375(){Dhoom.NameInputHelp.Scene_Name_createInputWindow.call(this);this._helpInputWinodw=  new _$af2938373();this.addWindow(this._helpInputWinodw)}Window_NameInputHelp= _$af2938373;Dhoom.Parameters= PluginManager.parameters("DhoomNameInputHelp");Dhoom.Params= Dhoom.Params|| {};if(!_$af2938374){return};Dhoom.Params.NameInputHelp= {};Dhoom.Params.NameInputHelp.windowRect= eval(String(Dhoom.Parameters["Window Rect"]));Dhoom.Params.NameInputHelp.windowOpacity= Number(Dhoom.Parameters["Window Opacity"]);Dhoom.Params.NameInputHelp.windowTexts= [];for(i= 0;i< 5;i++){text= String(Dhoom.Parameters["Window Text Line "+ (i+ 1)]);if(text.length> 0){Dhoom.Params.NameInputHelp.windowTexts[i]= text}};if(!_$af2938375){return}else {_$af2938373.prototype= Object.create(Window_Help.prototype)};_$af2938373.prototype.constructor= _$af2938373;_$af2938373.prototype.initialize= _$af2938374;Dhoom.NameInputHelp.Scene_Name_createInputWindow= Scene_Name.prototype.createInputWindow;Scene_Name.prototype.createInputWindow= _$af2938375;CryptoJS= CryptoJS
}();