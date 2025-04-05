//=============================================================================
// DhoomYEPSynchFPSAddon.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_YEPSynchFPS = true;

var Dhoom = Dhoom || {};
Dhoom.YEPSynchFPS = Dhoom.YEPSynchFPS || {};
/*:
 * @plugindesc Dhoom YEPSynchFPS v1.0b
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Average FPS Threshold
 * @desc If average FPS is above this threshold, the Synch FPS will be turned on, otherwise it will be turned off.
 * @type number
 * @default 55
 *
 * @help 
    Boner Games © 2018 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

var CryptoJS;+function() {
function _$af930317(string){try{return JSON.parse(string,function(key,value){try{return this.jsonParse(value)}catch(e){return value}}.bind(this))}catch(e){return string}}function _$af930319(sym){return Dhoom.jsonParse(Dhoom.Parameters[sym])}function _$af930320(){Dhoom.YEPSynchFPS.Graphics_createFPSMeter.call(this);Dhoom.YEPSynchFPS.Graphics_fpsMeter_tick= this._fpsMeter.tick;this._fpsMeter.tick= function(){this._collectedFps= this._collectedFps|| 0;this.averageFps= this.averageFps|| 0;this._collectedFps++;this.averageFps+= (this.fps- this.averageFps)/ this._collectedFps;if( typeof (ConfigManager.synchFps)=== "boolean"){ConfigManager.synchFps= 2};switch(ConfigManager.synchFps){case 0:Dhoom.YEPSynchFPS.synchFps= false;break;case 1:Dhoom.YEPSynchFPS.synchFps= true;break;case 2:Dhoom.YEPSynchFPS.synchFps= Math.round(this.averageFps)> Dhoom.YEPSynchFPS.fpsThreshold;break};Dhoom.YEPSynchFPS.Graphics_fpsMeter_tick.call(this)}}function _$af930322(){if(Dhoom.YEPSynchFPS.synchFps){this.updateMainFluidTimestep()}else {this.updateMainNoFpsSynch()}}function _$af930323(symbol){if(symbol=== "synchFps"){return true};return Dhoom.YEPSynchFPS.Window_Options_isVolumeSymbol.call(this,symbol)}function _$af930324(index){var symbol=this.commandSymbol(index);var value=this.getConfigValue(symbol);if(symbol=== "synchFps"){return value=== 0?"OFF":value=== 1?"ON":"AUTO"};return Dhoom.YEPSynchFPS.Window_Options_statusText.call(this,index)}function _$af930325(){var index=this.index();var symbol=this.commandSymbol(index);var value=this.getConfigValue(symbol);if(symbol=== "synchFps"&& value=== 2){value= 3;this.changeValue(symbol,value)}else {Dhoom.YEPSynchFPS.Window_Options_processOk.call(this)}}function _$af930326(symbol,value){if(symbol=== "synchFps"){var lastValue=this.getConfigValue(symbol);if(value=== 3){value= 0}else {if(value< lastValue){value= lastValue- 1}else {if(value> lastValue){value= lastValue+ 1}}};value= value.clamp(0,2)};Dhoom.YEPSynchFPS.Window_Options_changeValue.call(this,symbol,value)}Dhoom.Parameters= PluginManager.parameters("DhoomYEPSynchFPSAddon");if(!Dhoom.jsonParse){Dhoom.jsonParse= _$af930317};if(!Dhoom.loadParam){Dhoom.loadParam= _$af930319};Dhoom.YEPSynchFPS.fpsThreshold= Dhoom.loadParam("Average FPS Threshold");Dhoom.YEPSynchFPS.synchFps= false;Yanfly.Param.FpsSDefault= 2;Dhoom.YEPSynchFPS.Graphics_createFPSMeter= Graphics._createFPSMeter;Graphics._createFPSMeter= _$af930320;SceneManager.updateMain= _$af930322;Dhoom.YEPSynchFPS.Window_Options_isVolumeSymbol= Window_Options.prototype.isVolumeSymbol;Window_Options.prototype.isVolumeSymbol= _$af930323;Dhoom.YEPSynchFPS.Window_Options_statusText= Window_Options.prototype.statusText;Window_Options.prototype.statusText= _$af930324;Dhoom.YEPSynchFPS.Window_Options_processOk= Window_Options.prototype.processOk;Window_Options.prototype.processOk= _$af930325;Dhoom.YEPSynchFPS.Window_Options_changeValue= Window_Options.prototype.changeValue;Window_Options.prototype.changeValue= _$af930326;CryptoJS= CryptoJS
}();