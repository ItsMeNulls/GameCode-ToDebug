// ╒══════════════════════════════════════════════════════════════════════════════════╕
// █▐▐  Hudell | Orange Auto-Save - Extra Options
// ╞══════════════════════════════════════════════════════════════════════════════════╡
/*:
 *  @plugindesc [1.01] Additional options for Hudell's Orange Auto-Save plugin.
 *  @author Exhydra
 *
 *  @param ─ Auto-Save Options
 *  @desc 
 *  @default ───────────────
 *
 *  @param Slot Name
 *  @desc Name of the auto-save slot.
 *  @default Autosave
 *
 *  @param File Name
 *  @desc Name of the auto-save file. Leave blank to use default file name. 
 *  @default
 *
 *  @param Protect Slot
 *  @desc Disable saving to the auto-save slot. 
 *  @default false
 *
 *  @param ─────────
 *  @desc
 *  @default ───────────────
 *
 *  @param Plugin GID
 *  @desc Global identification tag for internal use only. Do not change.
 *  @default eXa-9Pj8cBcVE4HehtR
 *
 *  @help
 * ▄ Plugin                  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ ▄ ▄
 *
 *   ┌─ Version : 1.01
 *   ├─ Release : 27th July 2016
 *   ├─ Updated : 11th August 2016
 *   └─ License : Free for Commercial and Non-Commercial Usage
 *
 */
// ╘══════════════════════════════════════════════════════════════════════════════════╛

// ╒══════════════════════════════════════════════════════════════════════════════════╕
// ■ [Object] Plugin
// ╘══════════════════════════════════════════════════════════════════════════════════╛

var Imported = Imported || {};
Imported.exaOrangeAutoSave = 1.01;

var EXA     = EXA         || {};
EXA.HUD     = EXA.HUD     || {};
EXA.HUD.OAS = EXA.HUD.OAS || {};

(function() {
	
	'use strict';
  
	var exaParams = $plugins.filter(function(plugin) {
		return plugin.parameters['Plugin GID'] == 'eXa-9Pj8cBcVE4HehtR';
	})[0].parameters;

	EXA.HUD.OAS._slotName    = exaParams['Slot Name']                || 'Autosave';
	EXA.HUD.OAS._fileName    = exaParams['File Name']                || null;
	EXA.HUD.OAS._slotProtect = (exaParams['Protect Slot'] == 'true') || false;
	
})();

if (Imported.OrangeAutoSave) {

//  ╒═════════════════════════════════════════════════════════════════════════════════╕
//  ■ [Object] StorageManager
//  ╘═════════════════════════════════════════════════════════════════════════════════╛

//  ALIAS ────────────────────────────────────────────────────────────────────────────┐
//  □ [Function] localFilePath
//  └─────────────────────────────────────────────────────────────────────────────────┘
	
	var OAS_StorageManager_localFilePath = StorageManager.localFilePath;
	
	StorageManager.localFilePath = function(savefileId) {
		
		if (!Hudell.OrangeAutoSave.Param.autoSaveSlot && EXA.HUD.OAS._fileName) {
			if (Hudell.OrangeAutoSave.Parameters.saveSlot == savefileId) {
				var saveName = EXA.HUD.OAS._fileName.toLowerCase();
				return this.localFileDirectoryPath() + saveName + '.rpgsave';
			}
		}
		
		return OAS_StorageManager_localFilePath.call(this, savefileId);

	}; // StorageManager ‹‹ localFilePath
	
//  ╒═════════════════════════════════════════════════════════════════════════════════╕
//  ■ [Object] Window_SavefileList
//  ╘═════════════════════════════════════════════════════════════════════════════════╛
	
//  NEW ──────────────────────────────────────────────────────────────────────────────┐
//  □ [Function] isCurrentItemEnabled
//  └─────────────────────────────────────────────────────────────────────────────────┘
	
	Window_SavefileList.prototype.isCurrentItemEnabled = function() {

		if (this._mode == 'save' && EXA.HUD.OAS._slotProtect) {
			if (!Hudell.OrangeAutoSave.Param.autoSaveSlot) {
				if (Hudell.OrangeAutoSave.Parameters.saveSlot - 1 == this._index) {
					return false;
				}
			}
		}
		
		return Window_Selectable.prototype.isCurrentItemEnabled.call(this);
		
	}; // Window_SavefileList ‹‹ isCurrentItemEnabled

//  ALIAS ────────────────────────────────────────────────────────────────────────────┐
//  □ [Function] drawFileId
//  └─────────────────────────────────────────────────────────────────────────────────┘
	
	var OAS_Window_SavefileList_drawFileId = Window_SavefileList.prototype.drawFileId;
	
	Window_SavefileList.prototype.drawFileId = function(id, x, y) {
		
		if (!Hudell.OrangeAutoSave.Param.autoSaveSlot) {
			if (Hudell.OrangeAutoSave.Parameters.saveSlot == id) {
				this.drawText(EXA.HUD.OAS._slotName, x, y, 180);
			} else {
				OAS_Window_SavefileList_drawFileId.call(this, id - 1, x, y);
			}
			return;
		}
		
		OAS_Window_SavefileList_drawFileId.call(this, id, x, y);
		
	}; // Window_SavefileList ‹‹ drawFileId
	
} else {
  throw new Error('Orange Auto-Save plugin required!');
};

// ▌▌██████████████████████████████████████ EOF █████████████████████████████████████▐▐