//=============================================================================
// DhoomGSQuestSystemAddon.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_GSQSAddon = true;

var Dhoom = Dhoom || {};
Dhoom.GSQSAddon = Dhoom.GSQSAddon || {};
/*:
 * @plugindesc Dhoom GSQSAddon v1.0c
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Show Empty Filters
 * @type boolean
 * @default false
 * 
 * @param Left Button
 * @type struct<buttonSetting>
 * @default {"x":"25","y":"20","filename":"menu arrow left","frame":"3","wait":"15","cursor":"select"}
 * 
 * @param Right Button
 * @type struct<buttonSetting>
 * @default {"x":"260","y":"20","filename":"menu arrow right","frame":"3","wait":"15","cursor":"select"}
 *
 * @help
  Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

/*~struct~buttonSetting:
@param x
@text X
@type number
@min -99999
@max 99999
@default 

@param y
@text Y
@type number
@min -99999
@max 99999
@default 

@param filename
@text Filename
@type file
@dir img/system/
@default 

@param frame
@text Max Frame
@type number
@min 1
@default 1

@param wait
@text Frame Wait
@type number
@min 0

@param cursor
@text Hover Cursor
@desc TDDP Mouse System Ex is required.
@type file
@dir img/cursors/
@default select
*/

Dhoom.Parameters = PluginManager.parameters('DhoomGSQuestSystemAddon');
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

Dhoom.GSQSAddon.showEmptyFilters = Dhoom.loadParam('Show Empty Filters');
Dhoom.GSQSAddon.buttonLeft = Dhoom.loadParam('Left Button');
Dhoom.GSQSAddon.buttonRight = Dhoom.loadParam('Right Button');

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// TouchInput
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
if (typeof TouchInput._mouseX === 'undefined') {
    Dhoom.GSQSAddon.TouchInput_clear = TouchInput.clear;
    TouchInput.clear = function () {
        Dhoom.GSQSAddon.TouchInput_clear.call(this);
        this._mouseX = 0;
        this._mouseY = 0;
    };

    Object.defineProperty(TouchInput, 'mouseX', {
        get: function () {
            return this._mouseX;
        },
        configurable: true
    });

    Object.defineProperty(TouchInput, 'mouseY', {
        get: function () {
            return this._mouseY;
        },
        configurable: true
    });

    Dhoom.GSQSAddon.TouchInput_onMouseMove = TouchInput._onMouseMove;
    TouchInput._onMouseMove = function (event) {
        Dhoom.GSQSAddon.TouchInput_onMouseMove.call(this, event);
        this._mouseX = Graphics.pageToCanvasX(event.pageX);
        this._mouseY = Graphics.pageToCanvasY(event.pageY);
    };
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// DataManager
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.GSQSAddon.DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function (contents) {
    Dhoom.GSQSAddon.DataManager_extractSaveContents.call(this, contents);
    if ($gameQuests) $gameQuests.data.forEach(function (quest) {
        if (quest && quest.hasOwnProperty('name')) quest.setDefineProperties();
    })
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Quest
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Object.defineProperties(Game_Quest.prototype, {
    cat: { get: function () { return this.getData('cat'); }, configurable: false },
    name: { get: function () { return this.getData('name'); }, configurable: false },
    desc: { get: function () { return this.getData('desc'); }, configurable: false },
    icon: { get: function () { return this.getData('icon'); }, configurable: false },
    rewards: { get: function () { return this.getData('rewards'); }, configurable: false },
});

Game_Quest.prototype.getData = function (sym) {
    return $dataQuests[this.questId][sym];
};

Game_Quest.prototype.setDefineProperties = function () {
    Object.defineProperties(this, {
        cat: { get: function () { return this.getData('cat'); }, configurable: false },
        name: { get: function () { return this.getData('name'); }, configurable: false },
        desc: { get: function () { return this.getData('desc'); }, configurable: false },
        icon: { get: function () { return this.getData('icon'); }, configurable: false },
        rewards: { get: function () { return this.getData('rewards'); }, configurable: false },
    });
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_Quests
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.GSQSAddon.Window_Quests_refreshQuests = Window_Quests.prototype.refreshQuests;
Window_Quests.prototype.refreshQuests = function () {
    Dhoom.GSQSAddon.Window_Quests_refreshQuests.call(this);
    for (var i = 0; i < this.cats.length; i += 1) {
        this.expanded[i] = true;
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_QuestInfo
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Window_QuestInfo.prototype.drawQuestInfo = function (q) {
    if (!this._tempWindow) {
        this._tempWindow = new Window_Base(0, 0, 32, 32);
        this._tempWindow.move(0, 0, this.contentsWidth() + this._tempWindow.padding * 2, this.lineHeight() + this._tempWindow.padding * 2);
        this._tempWindow.createContents();
    }
    var headerX = 0;
    this.questBitmap.paintOpacity = 255;
    this.lineY = 0;
    if (q.icon > -1) {
        this.drawIcon(q.icon, 0, this.lineY);
        headerX = 40;
    }
    this.setFont(GSScripts["Config"]["QuestSystem"]["Quest Info Font"] || this.standardFontFace());
    this.setFontSize(GSScripts["Config"]["QuestSystem"]["Quest Info Font Size"] || this.standardFontSize());
    switch (q.status) {
        case "failed":
            this.questBitmap.textColor = GSScripts["Config"]["QuestSystem"]["Failed Quest Color"] || this.systemColor();
            break;
        case "completed":
            this.questBitmap.textColor = GSScripts["Config"]["QuestSystem"]["Complete Quest Color"] || this.systemColor();
            break;
        case "default":
        default:
            this.questBitmap.textColor = GSScripts["Config"]["QuestSystem"]["Quest Name Color"] || this.systemColor();
            break;
    }
    this.questBitmap.drawText(this.convertEscapeCharacters(q.name), headerX, this.lineY, this.contentsWidth() - headerX, this.lineHeight());
    this.write();
    this.questBitmap.textColor = GSScripts["Config"]["QuestSystem"]["Quest Description Color"] || this.normalColor();
    var lines = this.sliceText(this.convertEscapeCharacters(q.desc), this.contentsWidth());
    this._tempWindow.changeTextColor(this.questBitmap.textColor);
    for (var i = 0; i < lines.length; i += 1) {
        this._tempWindow.contents.clear();
        this._tempWindow.drawTextEx(lines[i], 0, 0);
        this.questBitmap.blt(this._tempWindow.contents, 0, 0, this.contentsWidth(), this.lineHeight(), 0, this.lineY);
        this.write();
    }
    this.drawHorzLine(this.lineY);
    this.write();
};

Window_QuestInfo.prototype.sliceText = function (text, width) {
    var texts = text.split(" ");
    var result = [];
    var current = "";
    while (texts.length > 0) {
        var word = texts.shift();
        if (word.contains('\n')) {
            var l = word.split('\n');
            if (this.textWidthEx((current + " " + l[0]).trim()) <= width) {
                result.push((current + " " + l.shift()).trim());
                current = "";
            } else {
                if (current.trim().length) result.push(current);
                current = l.shift();
            }
            for (var i = 0; i < l.length - 1; i++) {
                result.push((current + " " + l[i]).trim());
                current = "";
            }
            current = l[l.length - 1];
        } else if (this.textWidthEx((current + " " + word).trim()) <= width) {
            current = (current + " " + word).trim();
        } else {
            result.push(current);
            current = word;
        }
    }
    if (current.trim().length) result.push(current);
    return result;
};

Window_QuestInfo.prototype.textWidthEx = function (text) {
    return this.drawTextEx(text, 0, this.contents.height);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Window_Quests
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.GSQSAddon.Window_Quests_cursorRight = Window_Quests.prototype.cursorRight;
Window_Quests.prototype.cursorRight = function (wrap) {
    if (Dhoom.GSQSAddon.showEmptyFilters) {
        Dhoom.GSQSAddon.Window_Quests_cursorRight.call(this, wrap);
    } else {
        var empties = [];
        for (; ;) {
            if (++this.filterIndex > 3) this.filterIndex = 0;
            this.filter = this.qFilters[this.filterIndex];
            if (!empties.contains(this.filterIndex)) {
                empties.push(this.filterIndex);
                this.refreshQuests();
                var i;
                var arr = this.counter.clone();
                while ((i = arr.indexOf(0)) !== -1) {
                    arr.splice(i, 1);
                }
                if (arr.length) break;
            } else {
                this.filterIndex = parseInt(GSScripts["Config"]["QuestSystem"]["Default Filter"]) || 0;
                this.filter = this.qFilters[this.filterIndex];
                this.refreshQuests();
                break;
            }
        }
        this.parent.parent.setOldIndex(-1);
        this.refresh();
        this.select(0);
    }
};

Dhoom.GSQSAddon.Window_Quests_cursorLeft = Window_Quests.prototype.cursorLeft;
Window_Quests.prototype.cursorLeft = function (wrap) {
    if (Dhoom.GSQSAddon.showEmptyFilters) {
        Dhoom.GSQSAddon.Window_Quests_cursorLeft.call(this, wrap);
    } else {
        var empties = [];
        for (; ;) {
            if (--this.filterIndex < 0) this.filterIndex = 3;
            this.filter = this.qFilters[this.filterIndex];
            if (!empties.contains(this.filterIndex)) {
                empties.push(this.filterIndex);
                this.refreshQuests();
                var i;
                var arr = this.counter.clone();
                while ((i = arr.indexOf(0)) !== -1) {
                    arr.splice(i, 1);
                }
                if (arr.length) break;
            } else {
                this.filterIndex = parseInt(GSScripts["Config"]["QuestSystem"]["Default Filter"]) || 0;
                this.filter = this.qFilters[this.filterIndex];
                this.refreshQuests();
                break;
            }
        }
        this.parent.parent.setOldIndex(-1);
        this.refresh();
        this.select(0);
    }
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Sprite_GSQuestAButton
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Sprite_GSQuestAButton() {
    this.initialize.apply(this, arguments);
}

Sprite_GSQuestAButton.prototype = Object.create(Sprite.prototype);
Sprite_GSQuestAButton.prototype.constructor = Sprite_GSQuestAButton;

Sprite_GSQuestAButton.prototype.initialize = function (setting) {
    Sprite.prototype.initialize.call(this);
    this._setting = setting;
    this.x = this._setting.x;
    this.y = this._setting.y;
    this.refreshBitmap();
};

Sprite_GSQuestAButton.prototype.refreshBitmap = function () {
    this.bitmap = ImageManager.loadSystem(this._setting.filename);
    this._frameIndex = 0;
    this._frameWait = this._setting.wait;
    this.refreshFrame();
};

Sprite_GSQuestAButton.prototype.refreshFrame = function () {
    var max = this._setting.frame;
    var width = this.bitmap.width / max;
    if (!this.bitmap.isReady()) {
        width = 0;
        this._needRefresh = true;
    }
    this.setFrame(this._frameIndex * width, 0, width, this.bitmap.height);
};

Sprite_GSQuestAButton.prototype.update = function () {
    Sprite.prototype.update.call(this);
    this.updateFrame();
};

Sprite_GSQuestAButton.prototype.updateFrame = function () {
    if (this._needRefresh && this.bitmap.isReady()) {
        this.refreshFrame();
        this._needRefresh = false;
    }
    if (this._setting.frame > 1) {
        this._frameWait--;
        if (!this._frameWait) {
            this._frameIndex++;
            if (this._frameIndex >= this._setting.frame) this._frameIndex = 0;
            this.refreshFrame();
            this._frameWait = this._setting.wait;
        }
    }
};

Sprite_GSQuestAButton.prototype.isHovered = function () {
    if (!this.visible) return false;
    var x = (TouchInput._mouseX - this.parent.x) / this.parent.scale.x;
    var y = (TouchInput._mouseY - this.parent.y) / this.parent.scale.y;
    var tx = this.x;
    var ty = this.y;
    var w = this.width / this.parent.scale.x;
    var h = this.height / this.parent.scale.y;
    return x >= tx && y >= ty && x < tx + w && y < ty + h;
};

Sprite_GSQuestAButton.prototype.hoverCursor = function () {
    return this._setting.cursor;
};
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_Quest
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.GSQSAddon.Scene_Quest_create = Scene_Quest.prototype.create;
Scene_Quest.prototype.create = function () {
    Dhoom.GSQSAddon.Scene_Quest_create.call(this);
    this.createAddonButtons();
};

Scene_Quest.prototype.createAddonButtons = function () {
    this._buttonLeft = new Sprite_GSQuestAButton(Dhoom.GSQSAddon.buttonLeft);
    this.addChild(this._buttonLeft);
    this._buttonRight = new Sprite_GSQuestAButton(Dhoom.GSQSAddon.buttonRight);
    this.addChild(this._buttonRight);
};

Dhoom.GSQSAddon.Scene_Quest_update = Scene_Quest.prototype.update;
Scene_Quest.prototype.update = function () {
    Dhoom.GSQSAddon.Scene_Quest_update.call(this);
    this.updateAddonButtons();
};

Scene_Quest.prototype.updateAddonButtons = function () {
    var hovered = false;
    if (this._buttonLeft.isHovered()) {
        hovered = this._buttonLeft.hoverCursor();
        if (TouchInput.isTriggered()) {
            TouchInput.clear();
            SoundManager.playCursor();
            this.questWindow.cursorLeft();
        }
    }
    if (this._buttonRight.isHovered()) {
        hovered = this._buttonRight.hoverCursor();
        if (TouchInput.isTriggered()) {
            TouchInput.clear();
            SoundManager.playCursor();
            this.questWindow.cursorRight();
        }
    }
    if (Imported.TDDP_MouseSystemEx && TDDP_MouseSystemEx.useCustomCursor) {
        if (hovered) {
            TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(hovered));
        } else {
            TDDP_MouseSystemEx._resetCustomCursor();
        }
    }
};