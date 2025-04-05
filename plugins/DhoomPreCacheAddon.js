//=============================================================================
// DhoomPreCacheAddon.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_PreCacheAddon = "1.0";

var Dhoom = Dhoom || {};
Dhoom.PreCacheAddon = Dhoom.PreCacheAddon || {};
/*:
 * @plugindesc Dhoom PreCacheAddon v1.0 - 09/18/2023
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @help 
 */

Dhoom.Parameters = $plugins.filter(function (obj) { return obj.description.match(/Dhoom PreCacheAddon/) })[0].parameters;
if (!Dhoom.jsonParse) {
    Dhoom.jsonParse = function (string) {
        if (typeof string === 'string') {
            try {
                return JSON.parse(string, function (key, value) {
                    if (typeof value === 'string') {
                        try {
                            return this.jsonParse(value);
                        } catch (e) {
                            return value;
                        }
                    } else {
                        return value;
                    }
                }.bind(this))
            } catch (e) {
                return string;
            }
        } else {
            return string;
        }
    };
}
if (!Dhoom.loadParam) {
    Dhoom.loadParam = function (sym) {
        return Dhoom.jsonParse(Dhoom.Parameters[sym]);
    };
}
Dhoom.PreCacheAddon.loadParameters = function () {
    for (var name in Dhoom.Parameters) {
        var sym = name.replace(/\s+/g, '');
        sym = sym[0].toLowerCase() + sym.slice(1);
        Dhoom.PreCacheAddon[sym] = Dhoom.loadParam(name);
    }
};
Dhoom.PreCacheAddon.loadParameters();

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Interpreter
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

Game_Interpreter.prototype.autoCachePictures = function () {
    for (var j = 0; j < this._list.length; j++) {
        if (this._list[j].code === 231) {
            var filename = 'img/pictures/' + encodeURIComponent(this._list[j].parameters[1]).toLowerCase() + '.png:0';
            if (!ImageManager._imageCache.get(filename) || ImageManager._imageCache.get(filename)._loadingState !== "loaded") {
                ImageManager.loadPicture(this._list[j].parameters[1]);
                console.log('Picture cached: ' + this._list[j].parameters[1]);
                this._lastCachedPictures.push(this._list[j].parameters[1]);
            }
        }
    }
};

Game_Interpreter.prototype.cachePictureImages = function (limit) {
    var count = 0;
    for (var j = this._index + 1; j < this._list.length; j++) {
        if (this._list[j].code === 231 && (!limit || count < limit)) {
            var filename = 'img/pictures/' + encodeURIComponent(this._list[j].parameters[1]).toLowerCase() + '.png:0';
            if (!ImageManager._imageCache.get(filename) || ImageManager._imageCache.get(filename)._loadingState !== "loaded") {
                ImageManager.loadPicture(this._list[j].parameters[1]);
                console.log('Picture cached: ' + this._list[j].parameters[1]);
                this._lastCachedPictures.push(this._list[j].parameters[1]);
                count++;
            }
        }
    }
};