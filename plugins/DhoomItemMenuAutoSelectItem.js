//=============================================================================
// DhoomItemMenuAutoSelectItem.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_ItemAutoSelectItem = true;

var Dhoom = Dhoom || {};
Dhoom.ItemAutoSelectItem = Dhoom.ItemAutoSelectItem || {};
/*:
 * @plugindesc Dhoom ItemAutoSelectItem v1.0
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @help 
    Boner Games © 2017 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

Dhoom.Parameters = PluginManager.parameters('DhoomItemMenuAutoSelectItem');

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_Item
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.ItemAutoSelectItem.Scene_Item_create = Scene_Item.prototype.create;
Scene_Item.prototype.create = function () {
    Dhoom.ItemAutoSelectItem.Scene_Item_create.call(this);
    this._categoryWindow.select(0);
    this._categoryWindow.deactivate();
    this.onCategoryOk();
};

Dhoom.ItemAutoSelectItem.Scene_Item_createItemWindow = Scene_Item.prototype.createItemWindow;
Scene_Item.prototype.createItemWindow = function () {
    Dhoom.ItemAutoSelectItem.Scene_Item_createItemWindow.call(this);
    this._itemWindow.setHandler('cancel', this.popScene.bind(this));
};