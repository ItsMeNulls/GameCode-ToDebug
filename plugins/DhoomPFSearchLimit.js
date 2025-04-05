//=============================================================================
// DhoomPFSearchLimit.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_PFSearchLimit = true;

var Dhoom = Dhoom || {};
Dhoom.PFSearchLimit = Dhoom.PFSearchLimit || {};
/*:
 * @plugindesc Dhoom PFSearchLimit v3.0c
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @param Default Limit
 * @desc Default search limit, higher number = better path & more lag. Default is 12.
 * @type number
 * @min 1
 * @default 4
 * 
 * @param Option
 * @desc
 * 
 * @param Option Text
 * @desc Text for option command
 * @default Pathfinding Search Limit
 * @type text
 * @parent Option
 * 
 * @param Option Value Text
 * @desc Value text for option command. %1 = Value.
 * @default %1
 * @type text
 * @parent Option
 * 
 * @param Option Min Value
 * @desc Min Value
 * @default 1
 * @min 1
 * @type number
 * @parent Option
 * 
 * @param Option Max Value
 * @desc Max Value
 * @default 12
 * @min 1
 * @type number
 * @parent Option
 * 
 * @help
   Boner Games © 2017 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

+function() {
function _$af870742(){this._pathfindingLimit= this._pathfindingLimit|| Dhoom.PFSearchLimit.defaultLimit;return this._pathfindingLimit}function _$af870743(value){this._pathfindingLimit= value}function _$af870744(){return $dataMap.meta.pathfindingLimit?$dataMap.meta.pathfindingLimit:ConfigManager.pathfindingLimit}function _$af870745(){Dhoom.PFSearchLimit.Window_Options_makeCommandList.call(this);this.addCommand(Dhoom.PFSearchLimit.optionText,"pathfindingLimit")}function _$af870746(symbol){if(symbol=== "pathfindingLimit"){return true};return Dhoom.PFSearchLimit.Window_Options_isVolumeSymbol.call(this,symbol)}function _$af870747(index){var symbol=this.commandSymbol(index);var value=this.getConfigValue(symbol);if(symbol=== "pathfindingLimit"){return Dhoom.PFSearchLimit.optionValue.format(value)};return Dhoom.PFSearchLimit.Window_Options_statusText.call(this,index)}function _$af870748(wrap){var index=this.index();var symbol=this.commandSymbol(index);var value=this.getConfigValue(symbol);if(symbol=== "pathfindingLimit"){value++;value= value.clamp(Dhoom.PFSearchLimit.optionMin,Dhoom.PFSearchLimit.optionMax);this.changeValue(symbol,value)}else {Dhoom.PFSearchLimit.Window_Options_cursorRight.call(this,wrap)}}function _$af870749(wrap){var index=this.index();var symbol=this.commandSymbol(index);var value=this.getConfigValue(symbol);if(symbol=== "pathfindingLimit"){value--;value= value.clamp(Dhoom.PFSearchLimit.optionMin,Dhoom.PFSearchLimit.optionMax);this.changeValue(symbol,value)}else {Dhoom.PFSearchLimit.Window_Options_cursorLeft.call(this,wrap)}}function _$af870750(){var index=this.index();var symbol=this.commandSymbol(index);var value=this.getConfigValue(symbol);if(symbol=== "pathfindingLimit"){value++;if(value> Dhoom.PFSearchLimit.optionMax){value= Dhoom.PFSearchLimit.optionMin};value= value.clamp(Dhoom.PFSearchLimit.optionMin,Dhoom.PFSearchLimit.optionMax);this.changeValue(symbol,value)}else {Dhoom.PFSearchLimit.Window_Options_processOk.call(this)}}Dhoom.Parameters= PluginManager.parameters("DhoomPFSearchLimit");Dhoom.PFSearchLimit.defaultLimit= Number(Dhoom.Parameters["Default Limit"]);Dhoom.PFSearchLimit.optionValue= String(Dhoom.Parameters["Option Value Text"]);Dhoom.PFSearchLimit.optionText= String(Dhoom.Parameters["Option Text"]);Dhoom.PFSearchLimit.optionMin= Number(Dhoom.Parameters["Option Min Value"]);Dhoom.PFSearchLimit.optionMax= Number(Dhoom.Parameters["Option Max Value"]);Object.defineProperty(ConfigManager,"pathfindingLimit",{get:_$af870742,set:_$af870743,configurable:true});Game_Character.prototype.searchLimit= _$af870744;Dhoom.PFSearchLimit.Window_Options_makeCommandList= Window_Options.prototype.makeCommandList;Window_Options.prototype.makeCommandList= _$af870745;Dhoom.PFSearchLimit.Window_Options_isVolumeSymbol= Window_Options.prototype.isVolumeSymbol;Window_Options.prototype.isVolumeSymbol= _$af870746;Dhoom.PFSearchLimit.Window_Options_statusText= Window_Options.prototype.statusText;Window_Options.prototype.statusText= _$af870747;Dhoom.PFSearchLimit.Window_Options_cursorRight= Window_Options.prototype.cursorRight;Window_Options.prototype.cursorRight= _$af870748;Dhoom.PFSearchLimit.Window_Options_cursorLeft= Window_Options.prototype.cursorLeft;Window_Options.prototype.cursorLeft= _$af870749;Dhoom.PFSearchLimit.Window_Options_processOk= Window_Options.prototype.processOk;Window_Options.prototype.processOk= _$af870750
}();