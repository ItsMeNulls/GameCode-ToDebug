//=============================================================================
// DhoomBoxing.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_Boxing = "1.1";

var Dhoom = Dhoom || {};
Dhoom.Boxing = Dhoom.Boxing || {};
/*:
 * @plugindesc Dhoom Boxing v1.1
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Show Debug
 * @type boolean
 * @default true
 * 
 * @param Result Switch
 * @desc This switch will be turned on when the player win the match.
 * @type switch
 * @default 0
 * 
 * @param Player Name
 * @type struct<textSetting>
 * @desc Accept escape characters.
 * @default {"text":"\\N[1]","x":"58","y":"24","width":"300","height":"34","style":"{\"name\":\"\",\"size\":\"24\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"3\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"left\"}"}
 * 
 * @param Player HP Bar
 * @type struct<barSetting>
 * @default {"x":"57","y":"58","back":"boxing_hp_bar_back","fill":"boxing_hp_bar_player","fillX":"2","fillY":"2","direction":"0","text":"{\"text\":\"%1/%2\",\"x\":\"0\",\"y\":\"0\",\"width\":\"473\",\"height\":\"35\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"3\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}"}
 * 
 * @param Player Stamina Bar
 * @type struct<barSetting>
 * @default {"x":"57","y":"105","back":"boxing_hp_bar_back","fill":"boxing_stamina_bar","fillX":"2","fillY":"2","direction":"0","text":"{\"text\":\"Stamina: %1/%2\",\"x\":\"0\",\"y\":\"0\",\"width\":\"473\",\"height\":\"35\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"3\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}"}
 * 
 * @param Player Stamina Depleted Bar
 * @type struct<barSetting>
 * @default {"x":"57","y":"105","back":"boxing_stamina_depleted_bar_back","fill":"boxing_stamina_depleted_bar","fillX":"2","fillY":"2","direction":"0","text":"{\"text\":\"STAMINA DEPLETED\",\"x\":\"0\",\"y\":\"0\",\"width\":\"473\",\"height\":\"35\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"3\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}"}
 * 
 * @param Enemy Name
 * @type struct<textSetting>
 * @desc Accept escape characters. %1 = Enemy name.
 * @default {"text":"%1","x":"936","y":"24","width":"300","height":"34","style":"{\"name\":\"\",\"size\":\"24\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"3\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"right\"}"}
 *  
 * @param Enemy HP Bar
 * @type struct<barSetting>
 * @default {"x":"767","y":"58","back":"boxing_hp_bar_back","fill":"boxing_hp_bar_enemy","fillX":"2","fillY":"2","direction":"1","text":"{\"text\":\"%1/%2\",\"x\":\"0\",\"y\":\"0\",\"width\":\"473\",\"height\":\"35\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"3\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}"}
 * 
 * @param Enemy Stamina Bar
 * @type struct<barSetting>
 * @default {"x":"767","y":"105","back":"boxing_hp_bar_back","fill":"boxing_stamina_bar","fillX":"2","fillY":"2","direction":"1","text":"{\"text\":\"Stamina: %1/%2\",\"x\":\"0\",\"y\":\"0\",\"width\":\"473\",\"height\":\"35\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"3\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}"}
 * 
 * @param Enemy Stamina Depleted Bar
 * @type struct<barSetting>
 * @default {"x":"767","y":"105","back":"boxing_stamina_depleted_bar_back","fill":"boxing_stamina_depleted_bar","fillX":"2","fillY":"2","direction":"1","text":"{\"text\":\"STAMINA DEPLETED\",\"x\":\"0\",\"y\":\"0\",\"width\":\"473\",\"height\":\"35\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"3\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}"}
 * 
 * @param Player Left Hit Area
 * @type struct<rectColorSetting>
 * @default {"x":"400","y":"200","width":"200","height":"400","color":"#00ff00","opacity":"200"}
 * 
 * @param Player Right Hit Area
 * @type struct<rectColorSetting>
 * @default {"x":"700","y":"200","width":"200","height":"400","color":"#ff0000","opacity":"200"}
 * 
 * @param Player Block Area
 * @type struct<rectColorSetting>
 * @default {"x":"400","y":"630","width":"500","height":"100","color":"#0000ff","opacity":"200"}
 * 
 * @param Player Model
 * @type struct<playerModelSetting>
 * @default {"x":"640","y":"600","scale":"1.00","modelName":"boxing_arm","hp":"100","leftDamage":"10","rightDamage":"5","leftPunch":"leftpunch","rightPunch":"rightpunch","block":"idle","blockDuration":"30","blockSE":"{\"name\":\"Knock\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","hit":"idle","leftPunchWait":"6","rightPunchWait":"6","leftPunchStartSE":"{\"name\":\"Sword1\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","rightPunchStartSE":"{\"name\":\"Sword1\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","leftPunchLandedSE":"{\"name\":\"Blow1\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","rightPunchLandedSE":"{\"name\":\"Blow3\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","winMotion":"leftpunch","loopWin":"true","loseMotion":"rightpunch","loopLose":"true"}
 * 
 * @param Enemy Models
 * @type struct<enemyModelSetting>[]
 * @default ["{\"background\":\"boxing_arena\",\"name\":\"Test\",\"hp\":\"100\",\"leftDamage\":\"10\",\"rightDamage\":\"5\",\"area\":\"{\\\"x\\\":\\\"280\\\",\\\"y\\\":\\\"380\\\",\\\"width\\\":\\\"700\\\",\\\"height\\\":\\\"40\\\"}\",\"timedBlockChance\":\"10\",\"blockAfterHitChance\":\"20\",\"blockChance\":\"30\",\"moveChance\":\"200\",\"stopChance\":\"15\",\"leftChance\":\"40\",\"rightChance\":\"40\",\"moveRange\":\"[50, 250]\",\"moveDuration\":\"[20, 60]\",\"stopDuration\":\"[20, 60]\",\"blockDuration\":\"[20, 60]\",\"scale\":\"1.00\",\"modelName\":\"boxing_arm2\",\"leftPunchM\":\"leftpunch\",\"leftPunchE\":\"\",\"rightPunchM\":\"rightpunch\",\"rightPunchE\":\"\",\"blockM\":\"idle\",\"blockE\":\"\",\"hitM\":\"idle\",\"hitE\":\"\",\"hitArea\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"140\\\",\\\"height\\\":\\\"320\\\"}\",\"stunDuration\":\"[20, 60]\",\"playerStunDuration\":\"[20, 60]\",\"blockSE\":\"{\\\"name\\\":\\\"Hammer\\\",\\\"volume\\\":\\\"90\\\",\\\"pitch\\\":\\\"100\\\",\\\"pan\\\":\\\"0\\\"}\",\"leftPunchWait\":\"15\",\"rightPunchWait\":\"15\",\"leftPunchStartSE\":\"{\\\"name\\\":\\\"Attack3\\\",\\\"volume\\\":\\\"50\\\",\\\"pitch\\\":\\\"100\\\",\\\"pan\\\":\\\"0\\\"}\",\"rightPunchStartSE\":\"{\\\"name\\\":\\\"Attack3\\\",\\\"volume\\\":\\\"50\\\",\\\"pitch\\\":\\\"100\\\",\\\"pan\\\":\\\"0\\\"}\",\"leftPunchLandedSE\":\"{\\\"name\\\":\\\"Blow1\\\",\\\"volume\\\":\\\"90\\\",\\\"pitch\\\":\\\"100\\\",\\\"pan\\\":\\\"0\\\"}\",\"rightPunchLandedSE\":\"{\\\"name\\\":\\\"Blow2\\\",\\\"volume\\\":\\\"90\\\",\\\"pitch\\\":\\\"100\\\",\\\"pan\\\":\\\"0\\\"}\",\"winMotion\":\"leftpunch\",\"loopWin\":\"true\",\"loseMotion\":\"rightpunch\",\"loopLose\":\"true\"}"]
 * 
 * @param Win ME
 * @type struct<meSetting>
 * @default {"name":"Victory1","volume":"90","pitch":"100","pan":"0"}
 * 
 * @param Lose ME
 * @type struct<meSetting>
 * @default {"name":"Defeat1","volume":"90","pitch":"100","pan":"0"}
 * 
 * @param Win Picture
 * @type file
 * @dir img/system/
 * @default boxing_win_pict
 * 
 * @param Lose Picture
 * @type file
 * @dir img/system/
 * @default boxing_lose_pict
 *
 * @help 
Boner Games © 2023 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */


/*~struct~rectColorSetting:
@param x
@text X
@desc X position
@default 0
@type number
@min -99999

@param y
@text Y
@desc Y position
@default 0
@type number
@min -99999

@param width
@text Width
@default 32
@type number
@min 1

@param height
@text Height
@default 32
@type number
@min 1

@param color
@text Color
@default #ffffff

@param opacity
@text Opacity
@type number
@min 0
@max 255
@default 200
*/

/*~struct~barSetting:
@param x
@text X Position
@type number
@min -999999
@default 0

@param y
@text Y Position
@type number
@min -999999
@default 0

@param back
@text Background Filename
@type file
@dir img/system/
@default 

@param fill
@text Fill Filename
@type file
@dir img/system/
@default 

@param fillX
@text Fill X Position
@type number
@min -99999
@default 0

@param fillY
@text Fill Y Position
@type number
@min -99999
@default 0

@param direction
@text Fill Direction
@type select
@option Left to Right
@value 0
@option Right to Left
@value 1
@option Up to Down
@value 2
@option Down to Up
@value 3
@default 

@param text
@text Text Setting
@desc %1 = Current value, %2 = Max value.
@type struct<textSetting>
*/

/*~struct~textSetting:
@param text
@text Text

@param x
@text X Position
@type number
@min -999999999
@default 0

@param y
@text Y Position
@type number
@min -999999999
@default 0

@param width
@text Text Area Width
@desc Width of text area.
@type number
@min 4

@param height
@text Text Area Height
@desc Height of text area.
@type number
@min 4

@param style
@text Text Style
@desc Style setting.
@type struct<FontStyle>
*/

/*~struct~FontStyle:
@param name
@text Font Name
@desc Font name, leave empty if you want to use the default font.
@default 

@param size
@text Font Size
@desc Font size
@default 32
@type number
@min 1

@param color
@text Font Color
@desc Font color
@default #FFFFFF

@param outlineWidth
@text Font Outline Width
@desc Font outline width
@default 1
@type number

@param outlineColor
@text Font Outline Color
@desc Font outline color
@default #000000

@param bold
@text Font Bold
@desc Font bold
@default false
@type boolean

@param italic
@text Font Italic
@desc Font italic
@default false
@type boolean

@param align
@text Text Alignment
@desc Text alignment
@default center
@type select
@option left
@option center
@option right
*/

/*~struct~enemyModelSetting:
@param background
@text Boxing Background Filename
@type file
@dir img/pictures/
@default 

@param name
@text Name
@desc Enemy name.

@param hp
@text Max HP
@type number
@min 1
@default 100

@param stamina
@text Max Stamina
@type number
@min 1
@default 100

@param staminaWaitDuration
@text Stamina Recover Wait Duration
@desc Wait duration after stamina used before recovering.
@type number
@min 0
@default 60

@param outOfStaminaDuration
@text Stamina Recover Depleted Wait Duration
@desc Wait duration after stamina has been depleted before recovering.
@type number
@min 0
@default 60

@param depletedFull
@text Wait for Stamina Full After Depleted?
@desc Can only use punches when stamina is full after depleted?
@type boolean
@default true

@param staminaRecoveryRate
@text Stamina Recovery Rate
@desc Stamina gain per second.
@type number
@decimals 2
@min 0
@default 2

@param staminaDepletedRecoveryRate
@text Stamina Depleted Recovery Rate
@desc Stamina gain per second after depleted.
@type number
@decimals 2
@min 0
@default 8

@param leftStamina
@text Left Punch Stamina Cost
@type number
@min 0
@default 25

@param rightStamina
@text Right Punch Stamina Cost
@type number
@min 0
@default 25

@param blockStamina
@text Block Stamina Cost
@type number
@min 0
@default 0

@param leftDamage
@text Left Punch Damage
@type number
@min 0
@default 10

@param rightDamage
@text Right Punch Damage
@type number
@min 0
@default 5

@param area
@text Position Area
@type struct<rect>
@default 

@param timedBlockChance
@text Timed Block Chance
@desc Block chance that is timed with the player input. 0 ~ 100.
@type number
@max 100
@default 100 

@param blockAfterHitChance
@text Block After Hit Chance
@desc Chance for the enemy to block after getting hit. 0 ~ 100.
@type number
@max 100
@default 20

@param blockChance
@text Block Chance
@type number
@min 0
@default 50

@param moveChance
@text Move Chance
@type number
@default 100

@param stopChance
@text Stop Chance
@type number
@default 100

@param leftChance
@text Left Punch Chance
@type number
@default 100

@param rightChance
@text Right Punch Chance
@type number
@default 100

@param moveRange
@text Move Range
@desc [min, max]
@default [20, 160]

@param moveDuration
@text Move Duration
@desc [min, max]
@default [20, 60]

@param stopDuration
@text Stop Duration
@desc [min, max]
@default [20, 60]

@param blockDuration
@text Block Duration
@desc [min, max]
@default [20, 60]

@param scale
@text Scale
@type number
@min 0
@max 10
@decimals 2
@default 1.00

@param modelName
@text Model Name

@param telegraphPunchM
@text Telegraph Punch Motion

@param telegraphPunchE
@text Telegraph Punch Expression

@param leftPunchM
@text Left Punch Motion

@param leftPunchE
@text Left Punch Expression

@param rightPunchM
@text Right Punch Motion

@param rightPunchE
@text Right Punch Expression

@param blockM
@text Block Motion

@param blockE
@text Block Expression

@param hitM
@text Hit Motion

@param hitE
@text Hit Expression

@param hitArea
@text Hitbox Area
@type struct<rect>

@param stunDuration
@text Stun Duration
@desc Received hit stun duration. [min, max].
@default [20, 60]

@param playerStunDuration
@text Player Stun Duration
@desc Punch stun duration to the player. [min, max].
@default [20, 60]

@param blockSE
@text Block SE
@type struct<seSetting>
@default {"name":"","volume":"90","pitch":"100","pan":"0"}

@param telegraphDuration
@text Telegraph Duration
@desc [min, max]
@default [20, 60]

@param leftPunchWait
@text Left Punch Wait
@desc Wait duration until the punch landed.
@type number
@min 1
@default 15

@param rightPunchWait
@text Right Punch Wait
@desc Wait duration until the punch landed.
@type number
@min 1
@default 15

@param leftPunchStartSE
@text Left Punch Start SE
@type struct<seSetting>

@param rightPunchStartSE
@text Right Punch Start SE
@type struct<seSetting>

@param leftPunchLandedSE
@text Left Punch Landed SE
@type struct<seSetting>

@param rightPunchLandedSE
@text Right Punch Landed SE
@type struct<seSetting>

@param winMotion
@text Win Motion

@param loopWin
@text Loop Win Motion?
@type boolean
@default true

@param loseMotion
@text Lose Motion

@param loopLose
@text Loop Lose Motion?
@type boolean
@default true

@param telegraphNegateDamage
@text Negate Incoming Damage On Telegraph?
@desc If set to true, when the enemy is on telegraph state, the incoming damage will be negated.
@type boolean
@default false

@param stopTelegraphOnHit
@text Stop Telegraph On Getting Hit?
@desc If set to true, telegraph will be stopped when getting hit.
@type boolean
@default false
*/

/*~struct~playerModelSetting:
@param x
@text X Position
@type number
@min -999999
@default 0

@param y
@text Y Position
@type number
@min -999999
@default 0

@param scale
@text Scale
@type number
@min 0
@max 10
@decimals 2
@default 1.00

@param modelName
@text Model Name

@param hp
@text Max HP
@type number
@min 1
@default 100

@param stamina
@text Max Stamina
@type number
@min 1
@default 100

@param staminaWaitDuration
@text Stamina Recover Wait Duration
@desc Wait duration after stamina used before recovering.
@type number
@min 0
@default 60

@param outOfStaminaDuration
@text Stamina Recover Depleted Wait Duration
@desc Wait duration after stamina has been depleted before recovering.
@type number
@min 0
@default 60

@param depletedFull
@text Wait for Stamina Full After Depleted?
@desc Can only use punches when stamina is full after depleted?
@type boolean
@default true

@param staminaRecoveryRate
@text Stamina Recovery Rate
@desc Stamina gain per second.
@type number
@decimals 2
@min 0
@default 2

@param staminaDepletedRecoveryRate
@text Stamina Depleted Recovery Rate
@desc Stamina gain per second after depleted.
@type number
@decimals 2
@min 0
@default 8

@param leftStamina
@text Left Punch Stamina Cost
@type number
@min 0
@default 25

@param rightStamina
@text Right Punch Stamina Cost
@type number
@min 0
@default 25

@param blockStamina
@text Block Stamina Cost
@type number
@min 0
@default 0

@param leftDamage
@text Left Punch Damage
@type number
@min 0
@default 10

@param rightDamage
@text Right Punch Damage
@type number
@min 0
@default 5

@param leftPunch
@text Left Punch Motion

@param rightPunch
@text Right Punch Motion

@param block
@text Block Motion

@param blockDuration
@text Block Duration
@type number
@min 0
@default 30

@param blockSE
@text Block SE
@type struct<seSetting>
@default {"name":"","volume":"90","pitch":"100","pan":"0"}

@param hit
@text Hit Motion

@param leftPunchWait
@text Left Punch Wait
@desc Wait duration until the punch landed.
@type number
@min 1
@default 15

@param rightPunchWait
@text Right Punch Wait
@desc Wait duration until the punch landed.
@type number
@min 1
@default 15

@param leftPunchStartSE
@text Left Punch Start SE
@type struct<seSetting>

@param rightPunchStartSE
@text Right Punch Start SE
@type struct<seSetting>

@param leftPunchLandedSE
@text Left Punch Landed SE
@type struct<seSetting>

@param rightPunchLandedSE
@text Right Punch Landed SE
@type struct<seSetting>

@param winMotion
@text Win Motion

@param loopWin
@text Loop Win Motion?
@type boolean
@default true

@param loseMotion
@text Lose Motion

@param loopLose
@text Loop Lose Motion?
@type boolean
@default true
*/

/*~struct~seSetting:
@param name
@text Filename
@type file
@dir audio/se/

@param volume
@text Volume
@type number
@max 100
@default 90

@param pitch
@text Pitch
@type number
@min 50
@max 150
@default 100

@param pan
@text Pan
@type number
@min -100
@max 100
@default 0
*/

/*~struct~meSetting:
@param name
@text Filename
@type file
@dir audio/me/

@param volume
@text Volume
@type number
@max 100
@default 90

@param pitch
@text Pitch
@type number
@min 50
@max 150
@default 100

@param pan
@text Pan
@type number
@min -100
@max 100
@default 0
*/

/*~struct~rect:
@param x
@text X
@desc X position
@default 0
@type number
@min -99999

@param y
@text Y
@desc Y position
@default 0
@type number
@min -99999

@param width
@text Width
@default 32
@type number
@min 1

@param height
@text Height
@default 32
@type number
@min 1
*/

Dhoom.Parameters = $plugins.filter(function (obj) { return obj.description.match(/Dhoom Boxing/) })[0].parameters;
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
Dhoom.Boxing.loadParameters = function () {
    for (var name in Dhoom.Parameters) {
        var sym = name.replace(/\s+/g, '');
        sym = sym[0].toLowerCase() + sym.slice(1);
        Dhoom.Boxing[sym] = Dhoom.loadParam(name);
    }
};
Dhoom.Boxing.loadParameters();

Dhoom.Utils = Dhoom.Utils || {};
Dhoom.Utils.randomInt = function (min, max) {
    return min + Math.randomInt(max - min + 1);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Sprite_Live2D
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.Boxing.init_Sprite_Live2D = function () {
    if (!this.__init_Sprite_Live2D) {
        Dhoom.Boxing.Sprite_Live2D_setExpression = Sprite_Live2D.prototype.setExpression;
        Sprite_Live2D.prototype.setExpression = function (name) {
            if (this._model.expressionManager) Dhoom.Boxing.Sprite_Live2D_setExpression.call(this, name);
            this._currentExpression = name;
        }

        Dhoom.Boxing.Sprite_Live2D_startMotion = Sprite_Live2D.prototype.startMotion;
        Sprite_Live2D.prototype.startMotion = function (name, no, priority, loop) {
            Dhoom.Boxing.Sprite_Live2D_startMotion.call(this, name, no, priority, loop);
            this._currentMotion = [name, no, priority, loop];
        }

        Dhoom.Boxing.Sprite_Live2D_update = Sprite_Live2D.prototype.update;
        Sprite_Live2D.prototype.update = function () {
            Dhoom.Boxing.Sprite_Live2D_update.call(this);
            this._currentMotion = this._model._currentMotion;
        };
    }
    this.__init_Sprite_Live2D = true;
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// LAppModel
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.Boxing.init_LAppModel = function () {
    if (!this.__init_LAppModel) {
        Dhoom.Boxing.LAppModel_setFadeInFadeOut = LAppModel.prototype.setFadeInFadeOut;
        LAppModel.prototype.setFadeInFadeOut = function (name, no, priority, motion) {
            Dhoom.Boxing.LAppModel_setFadeInFadeOut.call(this, name, no, priority, motion);
            this._currentMotion = [name, no, priority, motion];
        }
    }
    this.__init_LAppModel = true;
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// DataManager
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.Boxing.DataManager_loadDatabase = DataManager.loadDatabase;
DataManager.loadDatabase = function () {
    Dhoom.Boxing.init_Sprite_Live2D();
    Dhoom.Boxing.init_LAppModel();
    Dhoom.Boxing.DataManager_loadDatabase.call(this);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Interpreter
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.Boxing.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    Dhoom.Boxing.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command.toLowerCase() === 'boxing') {
        switch (args[0].toLowerCase()) {
            case 'start':
                var index = Number(args[1]);
                if (index >= 0) {
                    if (Dhoom.Boxing.enemyModels[index]) {
                        $gameTemp._boxingEnemyId = index;
                        SceneManager.push(Scene_Boxing);
                    } else {
                        console.warn('DhoomBoxing: There is no enemy with an index of ' + index);
                    }
                }
                break;
        }
    }
};


//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_BoxingCharacter
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function Game_BoxingCharacter() {
    this.initialize.apply(this, arguments);
}

Object.defineProperties(Game_BoxingCharacter.prototype, {
    hp: { get: function () { return this._hp; }, set: function (value) { this._hp = Math.max(0, Math.min(value, this._maxHp)); }, configurable: true },
    mhp: { get: function () { return this._maxHp }, configurable: true },
    stamina: { get: function () { return this._stamina }, set: function (value) { this._stamina = Math.max(0, Math.min(value, this._maxStamina)) }, configurable: true },
    maxStamina: { get: function () { return this._maxStamina }, configurable: true }
});

Game_BoxingCharacter.prototype.initialize = function (setting) {
    this._setting = setting;
    this.initParams();
};

Game_BoxingCharacter.prototype.setting = function () {
    return this._setting;
};

Game_BoxingCharacter.prototype.initParams = function () {
    this._name = this.setting().name || $gameParty.leader().name();
    this._maxHp = this.setting().hp;
    this._hp = this._maxHp;
    this._maxStamina = this.setting().stamina;
    this._stamina = this._maxStamina;
    this._staminaRecoverWait = 0;
    this._staminaDepleted = false;
};

Game_BoxingCharacter.prototype.update = function () {
    this.updateStamina();
};

Game_BoxingCharacter.prototype.updateStamina = function () {
    if (--this._staminaRecoverWait <= 0) {
        if (this._staminaDepleted) {
            this.gainStamina(this.setting().staminaDepletedRecoveryRate / 60);
        } else {
            this.gainStamina(this.setting().staminaRecoveryRate / 60);
        }
    }
};

Game_BoxingCharacter.prototype.gainStamina = function (value) {
    this._stamina += value;
    this._stamina = Math.max(0, Math.min(this._stamina, this.maxStamina));
    if (this._stamina === 0) {
        if (this.setting().depletedFull) this._staminaDepleted = true;
        this._staminaRecoverWait = this.setting().outOfStaminaDuration;
    }
    if (this._stamina === this.maxStamina) {
        this._staminaDepleted = false;
    }
};

Game_BoxingCharacter.prototype.loseStamina = function (value, wait) {
    if (value && wait) this._staminaRecoverWait = this.setting().staminaWaitDuration;
    this.gainStamina(-value);
};

Game_BoxingCharacter.prototype.gainHp = function (value) {
    this._hp += value;
    this._hp = Math.max(0, Math.min(this._hp, this.mhp));
};

Game_BoxingCharacter.prototype.loseHp = function (value) {
    this.gainHp(-value);
};

Game_BoxingCharacter.prototype.canUseBlock = function () {
    if (this.setting().blockStamina === 0) return true;
    if (this._staminaDepleted) return false;
    if (this.setting().depletedFull) return this.stamina > 0;
    return this.stamina >= this.setting().blockStamina;
};

Game_BoxingCharacter.prototype.canUseLeftPunch = function () {
    if (this.setting().leftStamina === 0) return true;
    if (this._staminaDepleted) return false;
    if (this.setting().depletedFull) return this.stamina > 0;
    return this.stamina >= this.setting().leftStamina;
}

Game_BoxingCharacter.prototype.canUseRightPunch = function () {
    if (this.setting().rightStamina === 0) return true;
    if (this._staminaDepleted) return false;
    if (this.setting().depletedFull) return this.stamina > 0;
    return this.stamina >= this.setting().rightStamina;
}

Game_BoxingCharacter.prototype.hpRate = function () {
    return this.hp / this.mhp;
};

Game_BoxingCharacter.prototype.state = function () {
    if (this._staminaDepleted) return 'exhausted';
    if (this.hpRate() === 0) return 'dead';
    if (this.hpRate() <= 0.25) return 'critical';
    return 'normal';
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Sprite_BoxingBar
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Sprite_BoxingBar extends Sprite {
    constructor() {
        super(...arguments);
    }

    initialize(setting, valueCall, maxValueCall) {
        super.initialize();
        this._setting = setting;
        this._currentValueCall = valueCall;
        this._maxValueCall = maxValueCall;
        this.x = this.setting().x;
        this.y = this.setting().y;
        this._tempRate = 0;
        this.loadBitmap();
        this.createFillSprite();
        this.createTextSprite();
        this.refresh();
    }

    setting() {
        return this._setting;
    }

    changeSetting(setting) {
        if (this._setting !== setting) {
            this._setting = setting;
            this.loadBitmap();
            this.createFillSprite();
            this.createTextSprite();
            this.refresh();
        }
    };

    loadBitmap() {
        this.bitmap = ImageManager.loadSystem(this.setting().back);
    }

    currentValue() {
        return this._currentValueCall();
    }

    maxValue() {
        return this._maxValueCall();
    }

    rate() {
        return Math.max(0, Math.min(1, this.currentValue() / this.maxValue()));
    }

    createFillSprite() {
        if (!this._fillSprite) {
            this._fillSprite = new Sprite();
            this.addChild(this._fillSprite);
        }
        this._fillSprite.bitmap = ImageManager.loadSystem(this.setting().fill);
        this._fillSprite.x = this.setting().fillX;
        this._fillSprite.y = this.setting().fillY;
    }

    createTextSprite() {
        if (!this._textSprite) {
            this._textSprite = new Sprite();
            this.addChild(this._textSprite);
        }
        this._textSprite.bitmap = new Bitmap(this.setting().text.width, this.setting().text.height);
        this._textSprite.x = this.setting().text.x;
        this._textSprite.y = this.setting().text.y;
    }

    update() {
        super.update();
        this.updateValue();
    }

    updateValue() {
        if ((this._needRefresh || this._tempRate !== this.rate()) && this._fillSprite.bitmap.isReady()) {
            this.refresh();
        }
    }

    refresh() {
        if (!this._fillSprite.bitmap.isReady()) {
            this._needRefresh = true;
            return;
        }
        this.refreshText();
        this.refreshFill();
    }

    refreshText() {
        this._textSprite.bitmap.clear();
        this._textSprite.bitmap.changeTextStyle(this.setting().text.style);
        var text = this.setting().text.text.format(Math.floor(this.currentValue()), Math.floor(this.maxValue()));
        this._textSprite.bitmap.drawText(text, 0, 0, this._textSprite.width, this._textSprite.height, this.setting().text.style.align);
    }

    refreshFill() {
        var speed = 0.01;
        var realRate = this.rate();
        if (this._tempRate < realRate) {
            this._tempRate = Math.min(this._tempRate + speed, realRate);
        } else {
            this._tempRate = Math.max(this._tempRate - speed, realRate);
        }
        var rate = this._tempRate;
        var x = this.setting().fillX;
        var y = this.setting().fillY;
        var w = this._fillSprite.bitmap.width;
        var h = this._fillSprite.bitmap.height;
        var ax = 0;
        var ay = 0;
        var aw = w;
        var ah = h;
        switch (this.setting().direction) {
            case 0:
                aw = Math.floor(w * rate);
                break;
            case 1:
                aw = Math.floor(w * rate);
                ax = w - aw;
                x += ax;
                break;
            case 2:
                ah = Math.floor(h * rate);
                break;
            case 3:
                ah = Math.floor(h * rate);
                ay = h - ah;
                y += ay;
                break;
        }
        this._fillSprite.setFrame(ax, ay, aw, ah);
        this._fillSprite.x = x;
        this._fillSprite.y = y;
    }
}

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Scene_Boxing
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
class Scene_Boxing extends Scene_Base {
    constructor() {
        super(...arguments);
    }

    setting() {
        return Dhoom.Boxing;
    }

    playerSetting() {
        return Dhoom.Boxing.playerModel;
    }

    enemySetting() {
        return Dhoom.Boxing.enemyModels[$gameTemp._boxingEnemyId || 0];
    }

    create() {
        super.create();
        this._playerCharacter = new Game_BoxingCharacter(this.playerSetting());
        this._enemyCharacter = new Game_BoxingCharacter(this.enemySetting());
        this.createBackgroundSprite();
        this.createDebugAreaSprite();
        this.createLive2DSpriteset();
        this.createBarSprites();
        this.createPlayerNameSprite();
        this.createEnemyNameSprite();
        $gameScreen.loadLive2DModel("boxingEnemy", this.enemySetting().modelName);
        $gameScreen.loadLive2DModel("boxingPlayer", this.playerSetting().modelName);
    }

    isReady() {
        if ($gameScreen.isBusy()) {
            if (this._live2DSpriteset) this._live2DSpriteset.update();
            return false;
        }
        return super.isReady();
    }

    createBackgroundSprite() {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.bitmap = ImageManager.loadPicture(this.enemySetting().background);
        this.addChild(this._backgroundSprite);
    }

    createDebugAreaSprite() {
        var debug = !!Dhoom.Boxing.showDebug;
        if (Dhoom.Boxing.showDebug) {
            this._debugSpriteset = new Sprite();
            this.addChild(this._debugSpriteset);
            var rect = this.enemySetting().area;
            var sprite = new Sprite();
            sprite.bitmap = new Bitmap(rect.width, rect.height);
            sprite.x = rect.x;
            sprite.y = rect.y;
            sprite.opacity = 128;
            sprite.bitmap.fillAll('#ff0000');
            this._debugSpriteset.addChild(sprite);
            this._debugEnemy = new Sprite();
            this._debugEnemy.bitmap = new Bitmap(200, 200);
            this._debugEnemy.bitmap.fontSize = 16;
            this._debugEnemy.x = Graphics.width - this._debugEnemy.width - 48;
            this._debugEnemy.y = Graphics.height - this._debugEnemy.height - 48;
            this._debugSpriteset.addChild(this._debugEnemy);
            this._debugPlayer = new Sprite();
            this._debugPlayer.bitmap = new Bitmap(200, 200);
            this._debugPlayer.bitmap.fontSize = 16;
            this._debugPlayer.x = 48
            this._debugPlayer.y = Graphics.height - this._debugPlayer.height - 48;
            this._debugSpriteset.addChild(this._debugPlayer);
        }
        var rect = this.setting().playerLeftHitArea;
        var sprite = new Sprite();
        sprite.bitmap = new Bitmap(rect.width, rect.height);
        sprite.x = rect.x;
        sprite.y = rect.y;
        sprite.opacity = rect.opacity;
        sprite.bitmap.fillAll(rect.color);
        this._playerLeftHitAreaSprite = sprite;
        this.addChild(sprite);
        rect = this.setting().playerRightHitArea;
        sprite = new Sprite();
        sprite.bitmap = new Bitmap(rect.width, rect.height);
        sprite.x = rect.x;
        sprite.y = rect.y;
        sprite.opacity = rect.opacity;
        sprite.bitmap.fillAll(rect.color);
        this._playerRightHitAreaSprite = sprite;
        this.addChild(sprite);
        rect = this.setting().playerBlockArea;
        sprite = new Sprite();
        sprite.bitmap = new Bitmap(rect.width, rect.height);
        sprite.x = rect.x;
        sprite.y = rect.y;
        sprite.opacity = rect.opacity;
        sprite.bitmap.fillAll(rect.color);
        this._playerBlockHitAreaSprite = sprite;
        this.addChild(sprite);
        this._debugHitBoxSprite = new Sprite();
        this._debugHitBoxSprite.bitmap = new Bitmap(this.enemySetting().hitArea.width, this.enemySetting().hitArea.height);
        this._debugHitBoxSprite.anchor.x = 0.5;
        this._debugHitBoxSprite.anchor.y = 0.5;
        this._debugHitBoxSprite.bitmap.fillAll('#0000ff');
        this._debugHitBoxSprite.opacity = 128;
        this._debugHitBoxSprite.visible = debug;
        this.addChild(this._debugHitBoxSprite);
    }

    createLive2DSpriteset() {
        this._live2DSpriteset = new Sprite_Live2D_Layer();
        this._live2DSpriteset.bitmap = new Bitmap(Graphics.width, Graphics.height);
        this.addChild(this._live2DSpriteset);
        $gameScreen.setLive2DSpriteset(this._live2DSpriteset);
    }

    createBarSprites() {
        this._playerHPBarSprite = new Sprite_BoxingBar(this.setting().playerHPBar, this.playerHp.bind(this), this.playerMaxHp.bind(this));
        this.addChild(this._playerHPBarSprite);
        this._playerStaminaBarSprite = new Sprite_BoxingBar(this.setting().playerStaminaBar, this.playerStamina.bind(this), this.playerMaxStamina.bind(this));
        this.addChild(this._playerStaminaBarSprite);
        this._enemyHPBarSprite = new Sprite_BoxingBar(this.setting().enemyHPBar, this.enemyHp.bind(this), this.enemyMaxHp.bind(this));
        this.addChild(this._enemyHPBarSprite);
        this._enemyStaminaBarSprite = new Sprite_BoxingBar(this.setting().enemyStaminaBar, this.enemyStamina.bind(this), this.enemyMaxStamina.bind(this));
        this.addChild(this._enemyStaminaBarSprite);
    }

    playerHp() {
        return this._playerCharacter.hp;
    }

    playerMaxHp() {
        return this._playerCharacter.mhp;
    }

    playerStamina() {
        return this._playerCharacter.stamina;
    }

    playerMaxStamina() {
        return this._playerCharacter.maxStamina;
    }

    enemyHp() {
        return this._enemyCharacter.hp;
    }

    enemyMaxHp() {
        return this._enemyCharacter.mhp;
    }

    enemyStamina() {
        return this._enemyCharacter.stamina;
    }

    enemyMaxStamina() {
        return this._enemyCharacter.maxStamina;
    }

    createPlayerNameSprite() {
        var setting = Dhoom.Boxing.playerName;
        this._playerNameSprite = new Sprite();
        this._playerNameSprite.bitmap = new Bitmap(setting.width, setting.height);
        this._playerNameSprite.x = setting.x;
        this._playerNameSprite.y = setting.y;
        this.addChild(this._playerNameSprite);
        this.refreshPlayerName();
    }

    refreshPlayerName() {
        var setting = Dhoom.Boxing.playerName;
        this._playerNameSprite.bitmap.changeTextStyle(setting.style);
        var wnd = new Window_Base(0, 0, 200, 200);
        var text = wnd.convertEscapeCharacters(setting.text);
        this._playerName = text;
        this._playerNameSprite.bitmap.drawText(text, 0, 0, setting.width, setting.height, setting.style.align);
    }

    createEnemyNameSprite() {
        var setting = Dhoom.Boxing.enemyName;
        this._enemyNameSprite = new Sprite();
        this._enemyNameSprite.bitmap = new Bitmap(setting.width, setting.height);
        this._enemyNameSprite.x = setting.x;
        this._enemyNameSprite.y = setting.y;
        this.addChild(this._enemyNameSprite);
        this.refreshEnemyName();
    }

    refreshEnemyName() {
        var setting = Dhoom.Boxing.enemyName;
        this._enemyNameSprite.bitmap.changeTextStyle(setting.style);
        var wnd = new Window_Base(0, 0, 200, 200);
        var text = wnd.convertEscapeCharacters(setting.text.format(this._enemyCharacter._name));
        this._enemyNameSprite.bitmap.drawText(text, 0, 0, setting.width, setting.height, setting.style.align);
    }

    start() {
        super.start();
        this._playerModel = $gameScreen.getLive2DModel("boxingPlayer");
        this._playerModel.viewScale = this.playerSetting().scale;
        this._playerModel.x = this.playerSetting().x;
        this._playerModel.y = this.playerSetting().y;
        if (this._playerModel._version === 2) {
            this._playerModel.x -= Math.round(Graphics.width / 2);
            this._playerModel.y -= Graphics.height;
        }
        this._playerModel.show();
        this._enemyModel = $gameScreen.getLive2DModel("boxingEnemy");
        this._enemyModel.viewScale = this.enemySetting().scale;
        this._enemyModel.x = this.enemySetting().area.x + Math.round(this.enemySetting().area.width / 2);
        this._enemyModel.y = this.enemySetting().area.y + Math.round(this.enemySetting().area.height / 2);
        if (this._enemyModel._version === 2) {
            this._enemyModel.x -= Math.round(Graphics.width / 2);
            this._enemyModel.y -= Graphics.height;
        }
        this._enemyModel.show();
    }

    update() {
        super.update();
        this._playerCharacter.update();
        this._enemyCharacter.update();
        this.updateCursor();
        this.updateEnemyAction();
        this.updatePlayer();
        this.updateInput();
        this.updateWinLose();
        this._playerStaminaBarSprite.changeSetting(this._playerCharacter._staminaDepleted ? this.setting().playerStaminaDepletedBar : this.setting().playerStaminaBar);
        this._enemyStaminaBarSprite.changeSetting(this._enemyCharacter._staminaDepleted ? this.setting().enemyStaminaDepletedBar : this.setting().enemyStaminaBar);
        this.updateDebug();
    }

    updateEnemyAction() {
        if (!this._enemyActionDuration) this.startEnemyAction();
        var isIdle = this.isEnemyIdling(); //this._enemyModel._currentMotion && this._enemyModel._currentMotion[0] === LAppDefine.MOTION_GROUP_IDLE;
        if (!this._ended) {
            if (!this.detectTimedBlock()) {
                switch (this._enemyAction) {
                    case 'move':
                        this.updateMovement();
                        this._enemyActionDuration--;
                        break;
                    case 'stop':
                        this._enemyActionDuration--;
                        break;
                    case 'block':
                        if (this._enemyModel._currentMotion[0] !== this.enemySetting().blockM) this._enemyModel.startMotion(this.enemySetting().blockM, 0, 3);
                        if (this.enemySetting().blockE && this._enemyModel._currentExpression !== this.enemySetting().blockE) this._enemyModel.setExpression(this.enemySetting().blockE);
                        this._enemyActionDuration--;
                        if (!this._enemyActionDuration) {
                            this.stopEnemyExpression();
                        }
                        break;
                    case 'telegraph':
                        if (this._enemyModel._currentMotion[0] !== this.enemySetting().telegraphPunchM) this._enemyModel.startMotion(this.enemySetting().telegraphPunchM, 0, 3);
                        if (this.enemySetting().telegraphPunchE && this._enemyModel._currentExpression !== this.enemySetting().telegraphPunchE) this._enemyModel.setExpression(this.enemySetting().telegraphPunchE);
                        this._enemyActionDuration--;
                        if (!this._enemyActionDuration) {
                            this.stopEnemyExpression();
                            if (this._punchType === 0) {
                                this.enemyStartPunchLeft();
                            } else {
                                this.enemyStartPunchRight();
                            }
                        }
                        break;
                    case "punchleft":
                        if (this._enemyPunch) {
                            if (--this._enemyPunch <= 0) {
                                this.onEnemyPunchLanded();
                                this._enemyPunch = false;
                            }
                        }
                        if (isIdle) {
                            this._enemyPunch = false;
                            this._enemyActionDuration = 0;
                            this.stopEnemyExpression();
                        }
                        break;
                    case "punchright":
                        if (this._enemyPunch) {
                            if (--this._enemyPunch <= 0) {
                                this.onEnemyPunchLanded();
                                this._enemyPunch = false;
                            }
                        }
                        if (isIdle) {
                            this._enemyPunch = false;
                            this._enemyActionDuration = 0;
                            this.stopEnemyExpression();
                        }
                        break;
                    case 'hit':
                        if (this.enemySetting().stunDuration) {
                            this._enemyActionDuration--;
                            if (!this._enemyActionDuration) {
                                this.stopEnemyExpression();
                            }
                        } else if (isIdle) {
                            this._enemyActionDuration = 0;
                            this.stopEnemyExpression();
                        }
                }
            }
        }
    }

    detectTimedBlock() {
        if (this._enemyCharacter.canUseBlock() && !['block', "punchleft", "punchright", 'hit'].contains(this._enemyAction) && this._playerIsPunching && !this._playerPunchBlocked) {
            this._playerPunchBlocked = true;
            if (this._playerPunch && ((this._playerPunch[0] === "punchleft" && this.touchedLeft()) || (this._playerPunch[0] === "punchright" && this.touchedRight())) &&
                Math.randomInt(100) <= this.enemySetting().timedBlockChance) {
                this.enemyStartBlock();
                return true;
            }
        }
        return false;
    }

    updateMovement() {
        var speed = this._enemyMoveSpeed;
        var x = this._enemyModel.x;
        var y = this._enemyModel.y;
        if (this._enemyModel._version === 2) {
            x += Math.round(Graphics.width / 2);
            y += Graphics.height;
        }
        if (this._enemyModelDir) {
            x += speed;
            if (x >= this.enemySetting().area.x + this.enemySetting().area.width) {
                x = this.enemySetting().area.x + this.enemySetting().area.width;
                this._enemyModelDir = false;
            }
        } else {
            x -= speed;
            if (x <= this.enemySetting().area.x) {
                x = this.enemySetting().area.x;
                this._enemyModelDir = true;
            }
        }
        y = this.enemySetting().area.y + Math.round(this.enemySetting().area.height / 2 + this.enemySetting().area.height / 2 * Math.sin(Graphics.frameCount / 10));
        this._enemyModel.x = x;
        this._enemyModel.y = y;
        if (this._enemyModel._version === 2) {
            this._enemyModel.x -= Math.round(Graphics.width / 2);
            this._enemyModel.y -= Graphics.height;
        }
    }

    startEnemyAction() {
        var block = this.enemySetting().blockChance;
        var move = this.enemySetting().moveChance;
        var stop = this.enemySetting().stopChance;
        var left = this.enemySetting().leftChance;
        var right = this.enemySetting().rightChance;
        var total = block + move + stop + left + right;
        var rand = Math.randomInt(total);
        if (((this._enemyAction === "hit" && Math.randomInt(101) <= this._enemyBlockHitChance) || rand <= block) && this._enemyCharacter.canUseBlock()) {
            this.enemyStartBlock();
        } else if (rand <= block + move) {
            this.enemyStartMove();
        } else if (rand <= block + move + stop) {
            this.enemyStartStop();
        } else if (rand <= block + move + stop + left && this.playerHp() > 0 && this._enemyCharacter.canUseLeftPunch()) {
            this._punchType = 0;
            this.enemyStartTelegraph();
            // this.enemyStartPunchLeft();
        } else if (this.playerHp() > 0 && this._enemyCharacter.canUseRightPunch()) {
            this._punchType = 1;
            this.enemyStartTelegraph();
            // this.enemyStartPunchRight();
        } else {
            this.enemyStartStop();
        }
    }

    enemyStartBlock() {
        this._enemyBlockHitChance = 0;
        this._enemyAction = "block";
        this._enemyActionDuration = Dhoom.Utils.randomInt(this.enemySetting().blockDuration[0], this.enemySetting().blockDuration[1]);
        this._enemyCharacter.loseStamina(this.enemySetting().blockStamina, true);
        this._enemyModel.startMotion(this.enemySetting().blockM, 0, 3);
        if (this.enemySetting().blockE) this._enemyModel.setExpression(this.enemySetting().blockE);
    }

    enemyStartMove() {
        this._enemyAction = "move";
        this._enemyActionDuration = Dhoom.Utils.randomInt(this.enemySetting().moveDuration[0], this.enemySetting().moveDuration[1]);
        var range = Dhoom.Utils.randomInt(this.enemySetting().moveRange[0], this.enemySetting().moveRange[1]);
        this._enemyMoveSpeed = range / this._enemyActionDuration;
        this._enemyModelDir = Math.randomInt(2) === 0;
    }

    enemyStartStop() {
        this._enemyAction = "stop";
        this._enemyActionDuration = Dhoom.Utils.randomInt(this.enemySetting().stopDuration[0], this.enemySetting().stopDuration[1]);
    }

    enemyStartPunch() {
        this._enemyActionDuration = 1;
    }

    enemyStartTelegraph() {
        this._enemyActionDuration = Dhoom.Utils.randomInt(this.enemySetting().telegraphDuration[0], this.enemySetting().telegraphDuration[1]);
        this._enemyAction = "telegraph";
        this._enemyModel.startMotion(this.enemySetting().telegraphPunchM, 0, 3);
        if (this.enemySetting().telegraphPunchE) this._enemyModel.setExpression(this.enemySetting().telegraphPunchE);
    }

    enemyStartPunchLeft() {
        this.enemyStartPunch();
        this._enemyAction = "punchleft";
        this._enemyPunch = this.enemySetting().leftPunchWait;
        AudioManager.playSe(this.enemySetting().leftPunchStartSE);
        this._enemyModel.startMotion(this.enemySetting().leftPunchM, 0, 3);
        if (this.enemySetting().leftPunchE) this._enemyModel.setExpression(this.enemySetting().leftPunchE);
        this._enemyCharacter.loseStamina(this.enemySetting().leftStamina, true);
    }

    enemyStartPunchRight() {
        this.enemyStartPunch();
        this._enemyAction = "punchright";
        this._enemyPunch = this.enemySetting().rightPunchWait;
        AudioManager.playSe(this.enemySetting().rightPunchStartSE);
        this._enemyModel.startMotion(this.enemySetting().rightPunchM, 0, 3);
        if (this.enemySetting().rightPunchE) this._enemyModel.setExpression(this.enemySetting().rightPunchE);
        this._enemyCharacter.loseStamina(this.enemySetting().rightStamina, true);
    }

    onEnemyPunchLanded() {
        if (this._playerIsBlocking) {
            AudioManager.playSe(this.playerSetting().blockSE);
        } else {
            if (this._enemyAction === "punchleft") {
                AudioManager.playSe(this.enemySetting().leftPunchLandedSE);
                this._playerCharacter.loseHp(this.enemySetting().leftDamage);
            } else {
                AudioManager.playSe(this.enemySetting().rightPunchLandedSE);
                this._playerCharacter.loseHp(this.enemySetting().rightDamage);
            }
            this._playerStunned = true;
            this._playerStunnedDuration = Dhoom.Utils.randomInt(this.enemySetting().playerStunDuration[0], this.enemySetting().playerStunDuration[1]);
            this._playerModel.startMotion(this.playerSetting().hit, 0, 3);
            this._playerIsPunching = false;
            this._playerPunch = undefined;
        }
    }

    cancelEnemyPunch() {
        this._enemyPunch = false;
    }

    refreshEnemyDebug() {
        if (Dhoom.Boxing.showDebug) {
            this._debugEnemy.bitmap.clear();
            var lh = this._debugEnemy.bitmap.fontSize + 4;
            var w = this._debugEnemy.width - 8;
            var y = 4;
            var texts = ["%1", "Action: %1", "Action duration: %1", "Can punch left: %1", "Can punch right: %1", "Can block: %1", "State: %1"];
            texts.forEach((text, i) => {
                this._debugEnemy.bitmap.drawText(text.format(this._enemyDebugStates[i]), 4, y, w, lh, 'right');
                y += lh;
            }, this);
        }
    }

    refreshPlayerDebug() {
        if (Dhoom.Boxing.showDebug) {
            this._debugPlayer.bitmap.clear();
            var lh = this._debugPlayer.bitmap.fontSize + 4;
            var w = this._debugPlayer.width - 8;
            var y = 4;
            var texts = ["%1", "Action: %1", "Action duration: %1", "Can input: %1", "Can punch left: %1", "Can punch right: %1", "Can block: %1", "State: %1"];
            texts.forEach((text, i) => {
                this._debugPlayer.bitmap.drawText(text.format(this._playerDebugStates[i]), 4, y, w, lh);
                y += lh;
            }, this);
        }
    }

    updateInput() {
        if (this._ended) {
            if (--this._endInputWait <= 0) {
                if (TouchInput.isTriggered() || TouchInput.isCancelled() || Input.isTriggered('ok') || Input.isTriggered('cancel')) {
                    SoundManager.playCancel();
                    this.popScene();
                }
            }
        } else {
            if (this._playerModel) {
                if (this.playerCanInput()) {
                    if (TouchInput.isTriggered()) {
                        if (this.isLeftAreaHovered()) {
                            if (this._playerCharacter.canUseLeftPunch()) {
                                this.startPlayerLeftPunch();
                            } else {
                                SoundManager.playBuzzer();
                            }
                        } else if (this.isRightAreaHovered()) {
                            if (this._playerCharacter.canUseRightPunch()) {
                                this.startPlayerRightPunch();
                            } else {
                                SoundManager.playBuzzer();
                            }
                        } else if (this.isBlockAreaHovered()) {
                            if (this._playerCharacter.canUseBlock()) {
                                this.startPlayerBlock();
                            } else {
                                SoundManager.playBuzzer();
                            }
                        }
                    }
                    if (Input.isTriggered('left')) {
                        if (this._playerCharacter.canUseLeftPunch()) {
                            this.startPlayerLeftPunch();
                        } else {
                            SoundManager.playBuzzer();
                        }
                    } else if (Input.isTriggered('right')) {
                        if (this._playerCharacter.canUseRightPunch()) {
                            this.startPlayerRightPunch();
                        } else {
                            SoundManager.playBuzzer();
                        }
                    } else if (Input.isRepeated('down')) {
                        if (this._playerCharacter.canUseBlock()) {
                            this.startPlayerBlock();
                        } else {
                            SoundManager.playBuzzer();
                        }
                    }
                }
            }
        }
    }

    playerCanInput() {
        return !this._playerStunned && this.isPlayerIdling() && !this._playerBlockDuration;
    }

    updateCursor() {
        if (Imported.TDDP_MouseSystemEx && TDDP_MouseSystemEx.useCustomCursor && !this._ended) {
            var hover = this.isLeftAreaHovered() || this.isRightAreaHovered() || this.isBlockAreaHovered();
            if (this._state !== hover) {
                if (hover) {
                    TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext("select"));
                } else {
                    TDDP_MouseSystemEx._resetCustomCursor();
                }
                this._state = hover;
            }
        }
    }

    isLeftAreaHovered() {
        var mx = TouchInput.mouseX;
        var my = TouchInput.mouseY;
        var aw = this.setting().playerLeftHitArea.width;
        var ah = this.setting().playerLeftHitArea.height;
        var ax = this.setting().playerLeftHitArea.x;
        var ay = this.setting().playerLeftHitArea.y;
        return mx >= ax && mx < ax + aw && my >= ay && my < ay + ah;
    }

    isRightAreaHovered() {
        var mx = TouchInput.mouseX;
        var my = TouchInput.mouseY;
        var aw = this.setting().playerRightHitArea.width;
        var ah = this.setting().playerRightHitArea.height;
        var ax = this.setting().playerRightHitArea.x;
        var ay = this.setting().playerRightHitArea.y;
        return mx >= ax && mx < ax + aw && my >= ay && my < ay + ah;
    }

    isBlockAreaHovered() {
        var mx = TouchInput.mouseX;
        var my = TouchInput.mouseY;
        var aw = this.setting().playerBlockArea.width;
        var ah = this.setting().playerBlockArea.height;
        var ax = this.setting().playerBlockArea.x;
        var ay = this.setting().playerBlockArea.y;
        return mx >= ax && mx < ax + aw && my >= ay && my < ay + ah;
    }

    startPlayerLeftPunch() {
        AudioManager.playSe(this.playerSetting().leftPunchStartSE);
        this._playerIsPunching = true;
        this._playerPunchBlocked = false;
        this._playerPunch = ["punchleft", this.playerSetting().leftPunchWait];
        this._playerModel.startMotion(this.playerSetting().leftPunch, 0, 3);
        this._playerCharacter.loseStamina(this.playerSetting().leftStamina, true);
    }

    startPlayerRightPunch() {
        AudioManager.playSe(this.playerSetting().rightPunchStartSE);
        this._playerIsPunching = true;
        this._playerPunchBlocked = false;
        this._playerPunch = ["punchright", this.playerSetting().rightPunchWait];
        this._playerModel.startMotion(this.playerSetting().rightPunch, 0, 3);
        this._playerCharacter.loseStamina(this.playerSetting().rightStamina, true);
    }

    startPlayerBlock() {
        this._playerBlockDuration = this.playerSetting().blockDuration;
        this._playerIsBlocking = true;
        this._playerModel.startMotion(this.playerSetting().block, 0, 3);
        this._playerCharacter.loseStamina(this.playerSetting().blockStamina, true);
    }

    updatePlayer() {
        if (this._playerIsPunching && !this.isPlayerPunching()) {
            this._playerIsPunching = false;
        }
        if (this._playerPunch) {
            if (--this._playerPunch[1] <= 0) {
                this._lastPunch = this._playerPunch[0];
                if (this._playerPunch[0] === "punchleft") {
                    if (this.touchedLeft()) this.onPlayerPunch();
                } else {
                    if (this.touchedRight()) this.onPlayerPunch();
                }
                this._playerPunch = undefined;
            }
        }
        if (this._playerBlockDuration) {
            if (--this._playerBlockDuration <= 0) {
                this._playerBlockDuration = false;
                this._playerIsBlocking = false;
            }
        }
        if (this._playerStunned) {
            if (--this._playerStunnedDuration <= 0) {
                this._playerStunned = false;
            }
        }
    }

    touchedLeft() {
        var hw = this._debugHitBoxSprite.width;
        var hh = this._debugHitBoxSprite.height;
        var hx = this._debugHitBoxSprite.x - hw * this._debugHitBoxSprite.anchor.x;
        var hy = this._debugHitBoxSprite.y - hh * this._debugHitBoxSprite.anchor.y;
        var aw = this.setting().playerLeftHitArea.width;
        var ah = this.setting().playerLeftHitArea.height;
        var ax = this.setting().playerLeftHitArea.x;
        var ay = this.setting().playerLeftHitArea.y;
        return (ax <= hx + hw && hx <= ax + aw && ay <= hy + hh && hy <= ay + ah);
    }

    touchedRight() {
        var hw = this._debugHitBoxSprite.width;
        var hh = this._debugHitBoxSprite.height;
        var hx = this._debugHitBoxSprite.x - hw * this._debugHitBoxSprite.anchor.x;
        var hy = this._debugHitBoxSprite.y - hh * this._debugHitBoxSprite.anchor.y;
        var aw = this.setting().playerRightHitArea.width;
        var ah = this.setting().playerRightHitArea.height;
        var ax = this.setting().playerRightHitArea.x;
        var ay = this.setting().playerRightHitArea.y;
        return (ax <= hx + hw && hx <= ax + aw && ay <= hy + hh && hy <= ay + ah);
    }

    onPlayerPunch() {
        if (this._enemyAction === "block") {
            AudioManager.playSe(this.enemySetting().blockSE);
        } else {
            this.onEnemyHit();
        }
    }

    onEnemyHit() {
        AudioManager.playSe(this._playerPunch[0] === "punchleft" ? this.playerSetting().leftPunchLandedSE : this.playerSetting().rightPunchLandedSE);
        if (this._enemyAction != 'telegraph' || !this.enemySetting().telegraphNegateDamage) {
            this._enemyCharacter.loseHp(this._playerPunch[0] === "punchleft" ? this.playerSetting().leftDamage : this.playerSetting().rightDamage);
        }
        if (this._enemyAction != 'telegraph' || this.enemySetting().stopTelegraphOnHit) {
            this._enemyAction = 'hit';
            this._enemyActionDuration = Dhoom.Utils.randomInt(this.enemySetting().stunDuration[0], this.enemySetting().stunDuration[1]);
            this._enemyModel.startMotion(this.enemySetting().hitM, 0, 3);
            if (this.enemySetting().hitE) this._enemyModel.setExpression(this.enemySetting().hitE);
            this.cancelEnemyPunch();
        }
        this._enemyBlockHitChance = this._enemyBlockHitChance || 0;
        this._enemyBlockHitChance += this.enemySetting().blockAfterHitChance;
    }

    updateDebug() {
        var x = this._enemyModel.x;
        var y = this._enemyModel.y;
        if (this._enemyModel._version === 2) {
            x += Math.round(Graphics.width / 2);
            y += Graphics.height;
        }
        this._debugHitBoxSprite.x = x + this.enemySetting().hitArea.x;
        this._debugHitBoxSprite.y = y + this.enemySetting().hitArea.y;
        var states = [this._enemyCharacter._name, this._enemyAction, ['punchleft', 'punchright'].contains(this._enemyAction) ? this._enemyPunch || "Wait for motion" : this._enemyActionDuration, this._enemyCharacter.canUseLeftPunch(),
        this._enemyCharacter.canUseRightPunch(), this._enemyCharacter.canUseBlock(), this._enemyCharacter.state()];
        if (!this._enemyDebugStates || !this._enemyDebugStates.equals(states)) {
            this._enemyDebugStates = states;
            this.refreshEnemyDebug();
        }
        var action = '-';
        var duration = 0;
        if (this.isPlayerIdling()) {
            action = 'idle';
        }
        if (this._playerIsBlocking) {
            action = 'block';
            duration = this._playerBlockDuration;
        }
        if (this._playerIsPunching) {
            if (this._playerPunch) {
                action = this._playerPunch[0];
                duration = this._playerPunch[1];
            } else {
                action = this._lastPunch;
                duration = "Wait for motion";
            }
        }
        if (this._playerStunned) {
            action = 'hit';
            duration = this._playerStunnedDuration;
        }
        states = [this._playerName, action, duration, this.playerCanInput(), this._playerCharacter.canUseLeftPunch(),
        this._playerCharacter.canUseRightPunch(), this._playerCharacter.canUseBlock(), this._playerCharacter.state()];
        if (!this._playerDebugStates || !this._playerDebugStates.equals(states)) {
            this._playerDebugStates = states;
            this.refreshPlayerDebug();
        }
    }

    stopEnemyExpression() {
        if (this._enemyModel._version === 3) {
            this._enemyModel.stopExpression();
        } else {
            this._enemyModel.setExpression("");
        }
    }

    updateWinLose() {
        if (this._ended) {
            if (!this._playerEndMotion) {
                if (this.isPlayerIdling()) {
                    if (this._ended === 'player') {
                        this._playerModel.startMotion(this.playerSetting().winMotion, 0, 3, this.playerSetting().loopWin);
                    } else {
                        this._playerModel.startMotion(this.playerSetting().loseMotion, 0, 3, this.playerSetting().loopLose);
                    }
                    this._playerEndMotion = true;
                }
            }
            if (!this._enemyEndMotion) {
                // var isIdle = this._enemyModel._currentMotion && this._enemyModel._currentMotion[0] === LAppDefine.MOTION_GROUP_IDLE;
                if (this.isEnemyIdling()) {
                    if (this._ended === 'enemy') {
                        this._enemyModel.startMotion(this.enemySetting().winMotion, 0, 3, this.enemySetting().loopWin);
                    } else {
                        this._enemyModel.startMotion(this.enemySetting().loseMotion, 0, 3, this.enemySetting().loopLose);
                    }
                    this._enemyEndMotion = true;
                }
            }
        } else {
            if (this.enemyHp() === 0 || this.playerHp() === 0) {
                this._ended = this.enemyHp() === 0 ? 'player' : 'enemy';
                if (this.enemyHp() === 0) {
                    AudioManager.playMe(Dhoom.Boxing.winME);
                } else {
                    AudioManager.playMe(Dhoom.Boxing.loseME);
                }
                TDDP_MouseSystemEx._resetCustomCursor();
                this._endPictureSprite = new Sprite();
                this._endPictureSprite.bitmap = ImageManager.loadSystem(this.enemyHp() === 0 ? this.setting().winPicture : this.setting().losePicture);
                this.addChild(this._endPictureSprite);
                this._endInputWait = 120;
                if (this.setting().resultSwitch) $gameSwitches.setValue(this.setting().resultSwitch, this.enemyHp() === 0);
            }
        }
    }

    isEnemyIdling() {
        return this._enemyModel._currentMotion && this._enemyModel._currentMotion[0] === LAppDefine.MOTION_GROUP_IDLE;
    }

    isPlayerIdling() {
        return this._playerModel._currentMotion && this._playerModel._currentMotion[0] === LAppDefine.MOTION_GROUP_IDLE;
    }

    isPlayerPunching() {
        return !this._playerModel._currentMotion || [this.playerSetting().leftPunch, this.playerSetting().rightPunch].contains(this._playerModel._currentMotion[0]);
    }
}