//=============================================================================
// DhoomMessageSkin.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_MessageSkin = true;

var Dhoom = Dhoom || {};
Dhoom.MessageSkin = Dhoom.MessageSkin || {};

/*:
 * @plugindesc Dhoom MessageSkin v1.0b
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Keep Skin Setting
 * @desc Keep skin setting for every messages? When false, the skin revert to the default skin
 * @default true
 * 
 * @param Skin Setting 1
 * @desc Window skin filename, put it in img/system/
 * @default 
 * 
 * @param Skin Setting 2
 * @desc Window skin filename, put it in img/system/
 * @default 
 * 
 * @param Skin Setting 3
 * @desc Window skin filename, put it in img/system/
 * @default 
 * 
 * @param Skin Setting 4
 * @desc Window skin filename, put it in img/system/
 * @default 
 * 
 * @param Skin Setting 5
 * @desc Window skin filename, put it in img/system/
 * @default 
 * 
 * @param Skin Setting 6
 * @desc Window skin filename, put it in img/system/
 * @default 
 * 
 * @param Skin Setting 7
 * @desc Window skin filename, put it in img/system/
 * @default 
 * 
 * @param Skin Setting 8
 * @desc Window skin filename, put it in img/system/
 * @default 
 * 
 * @param Skin Setting 9
 * @desc Window skin filename, put it in img/system/
 * @default 
 * 
 * @param Skin Setting 10
 * @desc Window skin filename, put it in img/system/
 * @default 
 *
 * @help 
 Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

var i,CryptoJS;+function() {
function _$af2937415(){this.loadAllWindowskins();Dhoom.MessageSkin.Window_Message_initialize.call(this)}function _$af2937416(){for(var settingId in Dhoom.MessageSkin.settings){if(Dhoom.MessageSkin.settings.hasOwnProperty(settingId)){var filename=Dhoom.MessageSkin.settings[settingId];ImageManager.loadSystem(filename)}}}function _$af2937417(text){text= Dhoom.MessageSkin.Window_Message_convertEscapeCharacters.call(this,text);text= text.replace(/\x1bWS\[(\d+)\]/gi,function(){this.changeWindowSkin(parseInt(arguments[1]));return ""}.bind(this));text= text.replace(/\x1bNBS\[(\d+)\]/gi,function(){this.changeNameboxWindowSkin(parseInt(arguments[1]));return ""}.bind(this));return text}function _$af2937420(settingId){if(settingId=== 0){this.loadWindowskin()}else {this.windowskin= ImageManager.loadSystem(Dhoom.MessageSkin.settings[settingId])};this.changeNameboxWindowSkin(settingId)}function _$af2937421(settingId){if(this._nameWindow){if(!_$af2937416){_$af2937416(null,1);_$af2937421= null};if(settingId=== 0){this._nameWindow.loadWindowskin()}else {this._nameWindow.windowskin= ImageManager.loadSystem(Dhoom.MessageSkin.settings[settingId])}}}function _$af2937422(){if(!Dhoom.MessageSkin.keepSetting){this.changeWindowSkin(0)};Dhoom.MessageSkin.Window_Message_startMessage.call(this)}Dhoom.Parameters= PluginManager.parameters("DhoomMessageSkin");Dhoom.MessageSkin.keepSetting= JSON.parse(Dhoom.Parameters["Keep Skin Setting"]);Dhoom.MessageSkin.settings= {};for(i= 1;i<= 10;i++){Dhoom.MessageSkin.settings[i]= String(Dhoom.Parameters["Skin Setting "+ i])};if(!_$af2937417){_$af2937420();return};Dhoom.MessageSkin.Window_Message_initialize= Window_Message.prototype.initialize;if(!_$af2937415){_$af2937422(0,1);_$af2937421= null};Window_Message.prototype.initialize= _$af2937415;Window_Message.prototype.loadAllWindowskins= _$af2937416;Dhoom.MessageSkin.Window_Message_convertEscapeCharacters= Window_Message.prototype.convertEscapeCharacters;Window_Message.prototype.convertEscapeCharacters= _$af2937417;if(!_$af2937422){return};Window_Message.prototype.changeWindowSkin= _$af2937420;Window_Message.prototype.changeNameboxWindowSkin= _$af2937421;Dhoom.MessageSkin.Window_Message_startMessage= Window_Message.prototype.startMessage;Window_Message.prototype.startMessage= _$af2937422;CryptoJS= CryptoJS
}();