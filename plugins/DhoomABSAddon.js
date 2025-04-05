//=============================================================================
// DhoomABSAddon.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_ABSAddon = "1.0";

var Dhoom = Dhoom || {};
Dhoom.ABSAddon = Dhoom.ABSAddon || {};
/*:
 * @plugindesc Dhoom ABSAddon FIX v1.0 - 01/12/2022
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @help 
Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

Dhoom.Parameters = $plugins.filter(function (obj) { return obj.description.match(/Dhoom ABSAddon/) })[0].parameters;
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
Dhoom.ABSAddon.loadParameters = function () {
    for (var name in Dhoom.Parameters) {
        var sym = name.replace(/\s+/g, '');
        sym = sym[0].toLowerCase() + sym.slice(1);
        Dhoom.ABSAddon[sym] = Dhoom.loadParam(name);
    }
};
Dhoom.ABSAddon.loadParameters();

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Interpreter
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.ABSAddon.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
	Dhoom.ABSAddon.Game_Interpreter_pluginCommand.call(this, command, args);
	if (command.toLowerCase() === 'dabs') {
		var target = args[0].toLowerCase() === 'player' ? $gamePlayer : this.character(Number(args[0]));
		if (!target) return;
		switch (args[1].toLowerCase()) {
            case 'bulletrange':
                target._DABSParams.bulletrange = Number(args[2]);
                break;
            case 'bulletangle':
                target._DABSParams.bulletangle = Number(args[2]);
                break;
		}
		target._isDABS = true;
	}
};