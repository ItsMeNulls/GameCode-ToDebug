//=============================================================================
// DhoomMessageFacePosition.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_MessageFacePosition = true;

var Dhoom = Dhoom || {};
Dhoom.MessageFacePosition = Dhoom.MessageFacePosition || {};
/*:
 * @plugindesc Dhoom MessageFacePosition v1.1
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Auto Reset Face Position
 * @desc Automatically reset face position to left when message window is closed. true or false.
 * @default true
 *
 * @help 
 Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

var CryptoJS;+function() {
function _$af2937168(){this._facePos= "left";Dhoom.MessageFacePosition.Window_Message_initialize.call(this)}function _$af2937169(text){text= Dhoom.MessageFacePosition.Window_Message_convertEscapeCharacters.call(this,text);text= text.replace(/\x1bFPL/gi,function(){this._facePos= "left";return ""}.bind(this));text= text.replace(/\x1bFPR/gi,function(){this._facePos= "right";return ""}.bind(this));text= text.replace(/\x1bFPT/gi,function(){this._facePos= this._facePos=== "right"?"left":"right";return ""}.bind(this));return text}if(!_$af2937176){_$af2937168(true,false,true,null,1)};function _$af2937173(){var x=this._facePos=== "left"?0:this.contents.width- Window_Base._faceWidth;this.drawFace($gameMessage.faceName(),$gameMessage.faceIndex(),x,0)}function _$af2937174(){if(!_$af2937168){_$af2937169= 0};if(Imported.YEP_MessageCore){return ($gameMessage.faceName()=== ""|| this._facePos=== "right")?0:eval(Yanfly.Param.MSGFaceIndent)}else {return ($gameMessage.faceName()=== ""|| this._facePos=== "right")?0:168}}function _$af2937175(){Dhoom.MessageFacePosition.Window_Message_close.call(this);if(Dhoom.MessageFacePosition.autoReset){this._facePos= "left"}}if(_$af2937174== null){_$af2937176= 1};function _$af2937176(textState){if(!_$af2937173){_$af2937169= true;return};if(!textState){return false};if(!this._wordWrap){return false};if(textState.text[textState.index]=== " "){var nextSpace=textState.text.indexOf(" ",textState.index+ 1);if(!_$af2937169){return}else {var nextBreak=textState.text.indexOf("\x0A",textState.index+ 1)};if(nextSpace< 0){nextSpace= textState.text.length+ 1};if(nextBreak> 0){nextSpace= Math.min(nextSpace,nextBreak)};var word=textState.text.substring(textState.index,nextSpace);if(_$af2937176== true){_$af2937175();return};var size=this.textWidthExCheck(word);var width=this._facePos=== "right"&& $gameMessage.faceName()?eval(Yanfly.Param.MSGFaceIndent):0};return (size+ textState.x> this.contents.width- width)}Dhoom.Parameters= PluginManager.parameters("DhoomMessageFacePosition");Dhoom.MessageFacePosition.autoReset= eval(Dhoom.Parameters["Auto Reset Face Position"].toLowerCase());Dhoom.MessageFacePosition.Window_Message_initialize= Window_Message.prototype.initialize;Window_Message.prototype.initialize= _$af2937168;Dhoom.MessageFacePosition.Window_Message_convertEscapeCharacters= Window_Message.prototype.convertEscapeCharacters;Window_Message.prototype.convertEscapeCharacters= _$af2937169;if(_$af2937176== null){_$af2937176()}else {Window_Message.prototype.drawMessageFace= _$af2937173};Window_Message.prototype.newLineX= _$af2937174;Dhoom.MessageFacePosition.Window_Message_close= Window_Message.prototype.close;Window_Message.prototype.close= _$af2937175;if(Imported.YEP_MessageCore){Window_Message.prototype.checkWordWrap= _$af2937176};CryptoJS= CryptoJS
}();