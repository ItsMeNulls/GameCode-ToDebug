//=============================================================================
// DhoomHideMessage.js
//=============================================================================
 
/*:
 * @plugindesc v.1.1a Hide message window with customized input.
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @param Hide Input
 * @desc input, input, ... Inputs for hiding the message window.
 * @default rmouse, ctrl
 *
 * @param Show Input
 * @desc input, input, ... Inputs for showing the message window.
 * @default rmouse, ctrl
 *
 * @param Help Text
 * @desc Help text that is shown when the message window is hidden.
 * @default 
 *
 * @param Help X
 * @desc Help text X coordinate
 * @default 0
 * @param Help Y
 * @desc Help text Y coordinate
 * @default 0
 * @param Help Width
 * @desc Help text width
 * @default 32
 * @param Help Height
 * @desc Help text height
 * @default 32
 * @param Help Font
 * @desc Help text font name
 * @default Arial
 * @param Help Color
 * @desc Help text color hex code
 * @default #ffffff
 * @param Help Outline Color
 * @desc Help text outline color hex code
 * @default #000000
 * @param Help Outline Width
 * @desc Help text outline width
 * @default 2
 *
 * @help Available Input : a-z, 0-9, num0-num9, lmouse, rmouse, ctrl, alt, shift, tab.
 * Input is not case sensitive.
 *
 * Boner Games © 2016 BonerGames.com - All rights reserved.
 */
 
 var Imported = Imported || {};
 Imported['DrDhoom Hide Message'] = '1.1a';
 if (!Imported['DrDhoom Full Keyboard']){
    throw new Error('DrDhoom Hide Message: DrDhoom Full Keboard is required!');
 }
 
+function() {
function _$af2935804(){var params=PluginManager.parameters("DhoomHideMessage");var hideInput=String(params["Hide Input"]|| "").toLowerCase();hideInput= hideInput.replace(/\s+/g,"").split(",");var showInput=String(params["Show Input"]|| "").toLowerCase();showInput= showInput.replace(/\s+/g,"").split(",");var helpX=Number(params["Help X"]|| 0);var helpY=Number(params["Help Y"]|| 0);var helpW=Number(params["Help Width"]|| 32);var helpH=Number(params["Help Height"]|| 32);var helpRect= new Rectangle(helpX,helpY,helpW,helpH);var helpText=String(params["Help Text"]|| "");var helpFont=String(params["Help Font"]|| "GameFont");if(_$af2935804== false){_$af2935804();return};var helpColor=String(params["Help Color"]|| "#ffffff");var helpOutColor=String(params["Help Outline Color"]|| "#000000");var helpOutWidth=Number(params["Help Outline Width"]|| 4);var _drd_hidemsg_wndmsg_startMessage=Window_Message.prototype.startMessage;Window_Message.prototype.startMessage= function(){if(!_$af2935804){_$af2935804= 1;return};_drd_hidemsg_wndmsg_startMessage.call(this);this.visible= true};if(!_$af2935804){_$af2935804= false;return};var _drd_hidemsg_scmap_initialize=Scene_Map.prototype.initialize;var _drd_hidemsg_scmap_createDisplayObjects=Scene_Map.prototype.createDisplayObjects;Scene_Map.prototype.createDisplayObjects= function(){_drd_hidemsg_scmap_createDisplayObjects.call(this);this.createHideMessageHelp()};if(_$af2935804== null){_$af2935804= null;return};Scene_Map.prototype.createHideMessageHelp= function(){bitmap=  new Bitmap(helpRect.width,helpRect.height);this._hideMessageSprite=  new Sprite(bitmap);this._hideMessageSprite.x= helpRect.x;this._hideMessageSprite.y= helpRect.y;if(_$af2935804=== null){_$af2935804(null);return}else {this._hideMessageSprite.bitmap.fontFace= helpFont};if(!_$af2935804){_$af2935804= null;return};this._hideMessageSprite.bitmap.fontSize= helpRect.height;this._hideMessageSprite.bitmap.textColor= helpColor;this._hideMessageSprite.bitmap.outlineColor= helpOutColor;this._hideMessageSprite.bitmap.outlineWidth= helpOutWidth;this._hideMessageSprite.bitmap.drawText(helpText,0,0,helpRect.width,helpRect.height,"center");this._hideMessageSprite.visible= false;this.addChild(this._hideMessageSprite)};if(_$af2935804=== null){_$af2935804()};var _drd_hidemsg_scmap_update=Scene_Map.prototype.update;Scene_Map.prototype.update= function(){_drd_hidemsg_scmap_update.call(this);this.update_window_message_input()};Scene_Map.prototype.update_window_message_input= function(){if(this._messageWindow.visible){hideInput.forEach(function(input){if(input=== "lmouse"){if(TouchInput.isTriggered()){this._messageWindow.visible= false}}else {if(input=== "rmouse"){if(TouchInput.isCancelled()){this._messageWindow.visible= false}}else {if(Input.drdIsTriggered(input)){this._messageWindow.visible= false}}}},this)}else {showInput.forEach(function(input){if(input=== "lmouse"){if(TouchInput.isTriggered()){this._messageWindow.visible= true}}else {if(input=== "rmouse"){if(TouchInput.isCancelled()){this._messageWindow.visible= true}}else {if(Input.drdIsTriggered(input)){this._messageWindow.visible= true}}}},this)};if(!this._messageWindow.visible&& this._messageWindow.isOpen()){this._hideMessageSprite.visible= true}else {if(_$af2935804=== null){_$af2935804();_$af2935804= null;return};this._hideMessageSprite.visible= false}};if(Imported.YEP_MessageCore){var _drd_hidemsg_wndmsg_update=Window_Message.prototype.update;Window_Message.prototype.update= function(){_drd_hidemsg_wndmsg_update.call(this);this._nameWindow.visible= this.visible&& (this.isOpen()|| this._openness> 0)&& this._nameWindow.active}}}(_$af2935804)()
}();