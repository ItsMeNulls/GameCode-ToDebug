//=============================================================================
// DhoomFullKeyboard.js
//=============================================================================
 
/*:
 * @plugindesc Access to full keyboard input.
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @help 
(c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
*/
 
 var Imported = Imported || {};
 Imported['DrDhoom Full Keyboard'] = '0.8';
 
(function() {
 
    var inputTable = {
        9: 'tab',
        13: 'enter',
        16: 'shift', 
        17: 'ctrl',
        18: 'alt',
        27: 'escape',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'insert',
        48: '0',
        49: '1',
        50: '2',
        51: '3',
        52: '4',
        53: '5',
        54: '6',
        55: '7',
        56: '8',
        57: '9',
        65: 'a',
        66: 'b',
        67: 'c',
        68: 'd',
        69: 'e',
        70: 'f',
        71: 'g',
        72: 'h',
        73: 'i',
        74: 'j',
        75: 'k',
        76: 'l',
        77: 'm',
        78: 'n',
        79: 'o',
        80: 'p',
        81: 'q',
        82: 'r',
        83: 's',
        84: 't',
        85: 'u',
        86: 'v',
        87: 'w',
        88: 'x',
        89: 'y',
        90: 'z',
        96: 'num0',
        97: 'num1',
        98: 'num2',
        99: 'num3',
        100: 'num4',
        101: 'num5',
        102: 'num6',
        103: 'num7',
        104: 'num8',
        105: 'num9',
        112: 'f1',
        113: 'f2',
        114: 'f3',
        115: 'f4',
        116: 'f5',
        117: 'f6',
        118: 'f7',
        119: 'f8',
        120: 'f9'
    };
 
    var _drd_fullkey_input_clear = 
    Input.clear;
    Input.clear = function(){
        _drd_fullkey_input_clear.call(this);
        this._drd_keystate = {};
        this._drd_pressedTime = 0;
        this._drd_lastKey = null;
        this._drd_prevState = {};
    };
 
    var _drd_fullkey_input_update = 
    Input.update;
    Input.update = function(){
        _drd_fullkey_input_update.call(this);
        if (this._drd_keystate[this._drd_lastKey]) {
            this._drd_pressedTime++;
        } else {
            this._drd_lastKey = null;
        }
        for (var name in this._drd_keystate) {
            if (this._drd_keystate[name] && !this._drd_prevState[name]) {
                this._drd_lastKey = name;
                this._drd_pressedTime = 0;
            }
            this._drd_prevState[name] = this._drd_keystate[name];
        }
    };
 
    var _drd_fullkey_input_onKeyDown =
    Input._onKeyDown;
    Input._onKeyDown = function(event) {
        var buttonName = inputTable[event.keyCode];
        if (buttonName) {
            this._drd_keystate[buttonName] = true;
        }
        _drd_fullkey_input_onKeyDown.call(this, event);        
    };
 
    var _drd_fullkey_input_onKeyUp =
    Input._onKeyUp;
    Input._onKeyUp = function(event) {
        var buttonName = inputTable[event.keyCode];
        if (buttonName) {
            this._drd_keystate[buttonName] = false;
        }
        _drd_fullkey_input_onKeyUp.call(this, event)        
    };
 
    Input.drdIsTriggered = function(keyName) {
        return this._drd_lastKey === keyName && this._drd_pressedTime === 0;
    };
})();