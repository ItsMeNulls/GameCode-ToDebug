//=============================================================================
// DhoomLoadGlobalInfo.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_LoadGlobalInfo = true;

var Dhoom = Dhoom || {};
Dhoom.LoadGlobalInfo = Dhoom.LoadGlobalInfo || {};
/*:
 * @plugindesc Dhoom LoadGlobalInfo v1.0
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @help 
 */

Dhoom.Parameters = PluginManager.parameters('DhoomLoadGlobalInfo');
if (!Dhoom.jsonParse) {
    Dhoom.jsonParse = function (string) {
        try {
            return JSON.parse(string, function (key, value) {
                try {
                    return this.jsonParse(value);
                } catch (e) {
                    return value;
                }
            }.bind(this))
        } catch (e) {
            return string;
        }
    };
}
if (!Dhoom.loadParam) {
    Dhoom.loadParam = function (sym) {
        return Dhoom.jsonParse(Dhoom.Parameters[sym]);
    };
}

DataManager.loadGlobalInfo = function() {
    console.log('loadGlobalInfo');
    var json;
    try {
        json = StorageManager.load(0);
    } catch (e) {
        console.error(e);
        return [];
    }
    if (json) {
        var globalInfo = JSON.parse(json);
        return globalInfo;
    } else {
        return [];
    }
};

DataManager.checkGlobalInfo = function() {
    console.log('checkGlobalInfo');
    var json;
    try {
        json = StorageManager.load(0);
    } catch (e) {
        console.error(e);
        return [];
    }
    if (json) {
        var globalInfo = JSON.parse(json);
        for (var i = 1; i <= this.maxSavefiles(); i++) {
            if (!StorageManager.exists(i)) {
                delete globalInfo[i];
            }
        }
        return globalInfo;
    } else {
        return [];
    }
};

Dhoom.LoadGlobalInfo.Scene_File_start = Scene_File.prototype.start;
Scene_File.prototype.start = function () {
    DataManager.checkGlobalInfo();
    Dhoom.LoadGlobalInfo.Scene_File_start.call(this);    
};