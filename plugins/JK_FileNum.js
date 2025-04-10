//=============================================================================
// JK_FileNum.js
//=============================================================================

/*:
* @plugindesc 
* @author Jackus
* 
* @plugindesc Allows you to change the maximum number of save files.
*
* @help 
* --------------------------------------------------------------------------------
* Version 1.0
* --------------------------------------------------------------------------------
*
* --------------------------------------------------------------------------------
* Version History
* --------------------------------------------------------------------------------
* 1.0 - Release
*
* @param Max save files
* @desc Set the max number of save files.
* @default 20
*/

(function() {
	var parameters = PluginManager.parameters('JK_FileNum');
	var JKsavefiles = Number(parameters['Max save files']) || 20;
	
	DataManager.maxSavefiles = function() {
	return JKsavefiles ;
	}
	
})();