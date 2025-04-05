//=============================================================================
// DhoomGameTimePatch.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_GameTimePatch = true;

var Dhoom = Dhoom || {};
Dhoom.GameTimePatch = Dhoom.GameTimePatch || {};
/*:
 * @plugindesc Dhoom GameTimePatch v1.0
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @help 
(c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
*/

Dhoom.Parameters = PluginManager.parameters('DhoomGameTimePatch');

Dhoom.GameTimePatch.Scene_Map_callMenu = Scene_Map.prototype.callMenu;
Scene_Map.prototype.callMenu = function() {    
    Dhoom.GameTimePatch.Scene_Map_callMenu.call(this);
    if (this._gameTimeWindow) this._gameTimeWindow.hide();
};