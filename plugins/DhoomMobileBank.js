//=============================================================================
// DhoomMobileBank.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_MobileBank = true;

var Dhoom = Dhoom || {};
Dhoom.MobileBank = Dhoom.MobileBank || {};
/*:
 * @plugindesc Dhoom MobileBank v1.0
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param General
 * 
 * @param Available Switch
 * @desc Switch for determining wether the menu is available or not.
 * @type switch
 * @default 1
 * @parent General
 * 
 * @param Daily Interest Formula
 * @desc Formula for daily interest.
 * @default 5 + Math.randomInt(5) 
 * @parent General
 * 
 * @param Hold Money Duration
 * @desc Money on hold duration when stored in days.
 * @type number
 * @min 0
 * @max 9999999
 * @default 7
 * @parent General
 * 
 * @param Hover Mouse Cursor
 * @desc Mouse cursor when hovering over commands
 * @default select
 * @dir img/cursors/
 * @type file
 * 
 * @param Unavailable Menu Background
 * @desc Menu background filename when the menu is unavailable.
 * @default menu bank background unavailable
 * @dir img/system/
 * @type file
 * 
 * @param Menu Background
 * @desc Menu background filename
 * @default menu bank background
 * @dir img/system/
 * @type file
 * 
 * @param Menu Cursor Filename
 * @desc Selection cursor filename
 * @default menu cursor
 * @dir img/system/
 * @type file
 * 
 * @param Menu Cursor Use Mog
 * @desc Use Mog's menu cursor instead?
 * @default true
 * @type boolean
 * 
 * @param Buttons
 * 
 * @param Deposit Button
 * @desc Deposit button setting.
 * @type struct<buttonSetting>
 * @parent Buttons
 * @default {"x":"491","y":"453","filename":"menu bank button","text":"{\"x\":\"0\",\"y\":\"0\",\"width\":\"246\",\"height\":\"42\",\"text\":\"Deposit Money\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"26\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}"}
 * 
 * @param Withdraw Button
 * @desc Withdraw button setting.
 * @type struct<buttonSetting>
 * @parent Buttons
 * @default {"x":"491","y":"503","filename":"menu bank button","text":"{\"x\":\"0\",\"y\":\"0\",\"width\":\"246\",\"height\":\"42\",\"text\":\"Withdraw Money\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"26\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}"}
 * 
 * @param Stats
 * 
 * @param Total Deposit
 * @desc Total deposit stats.
 * @type struct<infoSetting>
 * @default {"title":"{\"x\":\"496\",\"y\":\"272\",\"width\":\"138\",\"height\":\"24\",\"text\":\"Total Deposit\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"left\\\"}\"}","value":"{\"x\":\"638\",\"y\":\"272\",\"width\":\"93\",\"height\":\"24\",\"text\":\"$%1\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"right\\\"}\"}"}
 * @parent Stats
 * 
 * @param Total Profit
 * @desc Total profit stats.
 * @type struct<infoSetting>
 * @default {"title":"{\"x\":\"496\",\"y\":\"298\",\"width\":\"138\",\"height\":\"24\",\"text\":\"Total Profit\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"left\\\"}\"}","value":"{\"x\":\"638\",\"y\":\"298\",\"width\":\"93\",\"height\":\"24\",\"text\":\"$%1\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"right\\\"}\"}"}
 * @parent Stats
 * 
 * @param Total Amount
 * @desc Total deposit + total profit stats.
 * @type struct<infoSetting>
 * @default {"title":"{\"x\":\"496\",\"y\":\"324\",\"width\":\"138\",\"height\":\"24\",\"text\":\"Total Amount\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"left\\\"}\"}","value":"{\"x\":\"638\",\"y\":\"324\",\"width\":\"93\",\"height\":\"24\",\"text\":\"$%1\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"right\\\"}\"}"}
 * @parent Stats
 * 
 * @param Total Hold
 * @desc Total deposit on hold including profit.
 * @type struct<infoSetting>
 * @default {"title":"{\"x\":\"496\",\"y\":\"350\",\"width\":\"138\",\"height\":\"24\",\"text\":\"Total Hold\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"left\\\"}\"}","value":"{\"x\":\"638\",\"y\":\"350\",\"width\":\"93\",\"height\":\"24\",\"text\":\"$%1\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"right\\\"}\"}"}
 * @parent Stats
 * 
 * @param Previous Interest Rate
 * @desc 
 * @type struct<infoSetting>
 * @default {"title":"{\"x\":\"496\",\"y\":\"376\",\"width\":\"138\",\"height\":\"24\",\"text\":\"Previous Interest\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"left\\\"}\"}","value":"{\"x\":\"638\",\"y\":\"376\",\"width\":\"93\",\"height\":\"24\",\"text\":\"%1%\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"right\\\"}\"}"}
 * @parent Stats
 * 
 * @param Current Interest Rate
 * @desc 
 * @type struct<infoSetting>
 * @default {"title":"{\"x\":\"496\",\"y\":\"402\",\"width\":\"138\",\"height\":\"24\",\"text\":\"Current Interest\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"left\\\"}\"}","value":"{\"x\":\"638\",\"y\":\"402\",\"width\":\"93\",\"height\":\"24\",\"text\":\"%1%\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"24\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"right\\\"}\"}"}
 * @parent Stats 
 * 
 * @param Deposit
 * 
 * @param Deposit Help Text
 * @type struct<textSetting>
 * @default {"x":"508","y":"268","width":"225","height":"30","text":"Input deposit amount","style":"{\"name\":\"\",\"size\":\"24\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}"}
 * @parent Deposit
 * 
 * @param Deposit Amount Text
 * @type struct<textSetting>
 * @default {"x":"508","y":"299","width":"225","height":"30","text":"$%1","style":"{\"name\":\"\",\"size\":\"30\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\",\"align\":\"center\"}"}
 * @parent Deposit
 * 
 * @param Deposit Buttons
 * @type struct<depositButtons>
 * @default {"p1":"{\"x\":\"508\",\"y\":\"335\",\"filename\":\"menu bank button small\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"108\\\",\\\"height\\\":\\\"39\\\",\\\"text\\\":\\\"+1\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","p10":"{\"x\":\"508\",\"y\":\"379\",\"filename\":\"menu bank button small\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"108\\\",\\\"height\\\":\\\"39\\\",\\\"text\\\":\\\"+10\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","p100":"{\"x\":\"508\",\"y\":\"423\",\"filename\":\"menu bank button small\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"108\\\",\\\"height\\\":\\\"39\\\",\\\"text\\\":\\\"+100\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","p1000":"{\"x\":\"508\",\"y\":\"467\",\"filename\":\"menu bank button small\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"108\\\",\\\"height\\\":\\\"39\\\",\\\"text\\\":\\\"+1000\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","m1":"{\"x\":\"624\",\"y\":\"335\",\"filename\":\"menu bank button small\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"108\\\",\\\"height\\\":\\\"39\\\",\\\"text\\\":\\\"-1\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","m10":"{\"x\":\"624\",\"y\":\"379\",\"filename\":\"menu bank button small\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"108\\\",\\\"height\\\":\\\"39\\\",\\\"text\\\":\\\"-10\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","m100":"{\"x\":\"624\",\"y\":\"423\",\"filename\":\"menu bank button small\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"108\\\",\\\"height\\\":\\\"39\\\",\\\"text\\\":\\\"-100\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","m1000":"{\"x\":\"624\",\"y\":\"467\",\"filename\":\"menu bank button small\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"108\\\",\\\"height\\\":\\\"39\\\",\\\"text\\\":\\\"-1000\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","ok":"{\"x\":\"508\",\"y\":\"511\",\"filename\":\"menu bank button green\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"108\\\",\\\"height\\\":\\\"39\\\",\\\"text\\\":\\\"OK\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}","clear":"{\"x\":\"624\",\"y\":\"511\",\"filename\":\"menu bank button red\",\"text\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\",\\\"width\\\":\\\"108\\\",\\\"height\\\":\\\"39\\\",\\\"text\\\":\\\"CLEAR\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"24\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"center\\\\\\\"}\\\"}\"}"}
 * @parent Deposit
 * 
 * @param Withdraw
 * 
 * @param Withdraw Window Setting
 * @type struct<withdrawWindowSetting>
 * @default {"x":"475","y":"278","width":"286","height":"298","padding":"12","opacity":"0","background":"","backgroundPos":"[0, 0]","col":"1","itemWidth":"262","itemHeight":"62","itemBackground":"menu bank withdraw back","itemBackgroundPos":"[0, 0]","spacing":"4","texts":"[\"{\\\"x\\\":\\\"4\\\",\\\"y\\\":\\\"4\\\",\\\"width\\\":\\\"254\\\",\\\"height\\\":\\\"16\\\",\\\"text\\\":\\\"#%9 %3/%4/%5 - %6/%7/%8\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"16\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"left\\\\\\\"}\\\",\\\"condition\\\":\\\"\\\"}\",\"{\\\"x\\\":\\\"4\\\",\\\"y\\\":\\\"4\\\",\\\"width\\\":\\\"254\\\",\\\"height\\\":\\\"16\\\",\\\"text\\\":\\\"ON HOLD\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"16\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FF0000\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"right\\\\\\\"}\\\",\\\"condition\\\":\\\"data.onHold\\\"}\",\"{\\\"x\\\":\\\"4\\\",\\\"y\\\":\\\"24\\\",\\\"width\\\":\\\"127\\\",\\\"height\\\":\\\"32\\\",\\\"text\\\":\\\"$%1\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFFFF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"left\\\\\\\"}\\\",\\\"condition\\\":\\\"\\\"}\",\"{\\\"x\\\":\\\"131\\\",\\\"y\\\":\\\"24\\\",\\\"width\\\":\\\"127\\\",\\\"height\\\":\\\"32\\\",\\\"text\\\":\\\"$%2\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"32\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#FFFF00\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"left\\\\\\\"}\\\",\\\"condition\\\":\\\"\\\"}\",\"{\\\"x\\\":\\\"4\\\",\\\"y\\\":\\\"4\\\",\\\"width\\\":\\\"254\\\",\\\"height\\\":\\\"16\\\",\\\"text\\\":\\\"WITHDRAWN\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"16\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#0000FF\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"right\\\\\\\"}\\\",\\\"condition\\\":\\\"data.withdrawn\\\"}\",\"{\\\"x\\\":\\\"4\\\",\\\"y\\\":\\\"4\\\",\\\"width\\\":\\\"254\\\",\\\"height\\\":\\\"16\\\",\\\"text\\\":\\\"AVAILABLE\\\",\\\"style\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size\\\\\\\":\\\\\\\"16\\\\\\\",\\\\\\\"color\\\\\\\":\\\\\\\"#00FF00\\\\\\\",\\\\\\\"outlineWidth\\\\\\\":\\\\\\\"2\\\\\\\",\\\\\\\"outlineColor\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"bold\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"italic\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"align\\\\\\\":\\\\\\\"right\\\\\\\"}\\\",\\\"condition\\\":\\\"!data.onHold && !data.withdrawn\\\"}\"]"}
 * @parent Withdraw
 *
 * @help 
 Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

/*~struct~withdrawWindowSetting:
@param x
@text X
@type number
@min -999999
@max 99999
@default 0

@param y
@text Y
@type number
@min -999999
@max 99999
@default 0

@param width
@text Width
@default 187
@type number
@min 1

@param height
@text Height
@default 21
@type number
@min 1

@param padding
@text Padding
@type number

@param opacity
@text Opacity
@type number
@max 255

@param background
@text Background Filename
@type file
@dir img/system/

@param backgroundPos
@text Background Position
@desc [x, y]
@default [0, 0]

@param col
@text Max Column
@type number
@min 1
@default 1

@param itemWidth
@text Item Width
@type number
@min 1

@param itemHeight
@text Item Height
@type number
@min 1

@param itemBackground
@text Item Background
@dir img/system/
@type file

@param itemBackgroundPos
@text Item Background Position
@desc [x, y]

@param spacing
@text Spacing
@type number
@min 0

@param texts
@text Texts Setting
@desc 
@type struct<textSetting2>[]
*/

/*~struct~depositButtons:
@param p1
@text Plus 1
@type struct<buttonSetting>

@param p10
@text Plus 10
@type struct<buttonSetting>

@param p100
@text Plus 100
@type struct<buttonSetting>

@param p1000
@text Plus 1000
@type struct<buttonSetting>

@param m1
@text Min 1
@type struct<buttonSetting>

@param m10
@text Min 10
@type struct<buttonSetting>

@param m100
@text Min 100
@type struct<buttonSetting>

@param m1000
@text Min 1000
@type struct<buttonSetting>

@param ok
@text Ok
@type struct<buttonSetting>

@param clear
@text Clear
@type struct<buttonSetting>
*/

/*~struct~infoSetting:
@param title
@text Title Text
@type struct<textSetting>
@default

@param value
@text Value Text
@desc %1 = Value
@type struct<textSetting>
@default
*/

/*~struct~buttonSetting:
@param x
@text X
@type number
@min -999999
@max 99999
@default 0

@param y
@text Y
@type number
@min -999999
@max 99999
@default 0

@param filename
@text Button Filename
@type file
@dir img/system/

@param text
@text Button Text Setting
@type struct<textSetting>
@default
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

/*~struct~textSetting:
@param x
@text Text X
@desc Text X position
@default 86
@type number
@min -999999

@param y
@text Text Y
@desc Text Y position
@default 17
@type number
@min -999999

@param width
@text Text Width
@desc Text width area
@default 187
@type number
@min 1

@param height
@text Text Height
@desc Text height area
@default 21
@type number
@min 1

@param text
@text Text Format
@desc %1 = Data1, %2 = Data2, ..., %n = DataN
@default %1

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>
*/

/*~struct~textSetting2:
@param x
@text Text X
@desc Text X position
@default 86
@type number
@min -999999

@param y
@text Text Y
@desc Text Y position
@default 17
@type number
@min -999999

@param width
@text Text Width
@desc Text width area
@default 187
@type number
@min 1

@param height
@text Text Height
@desc Text height area
@default 21
@type number
@min 1

@param text
@text Text Format
@desc %1 = Data1, %2 = Data2, ..., %n = DataN
@default %1

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param condition
@text Condition
@desc Script condition.
*/

var Sprite_BankButton,Sprite_BankStats,Window_BankWithdraw,Scene_MobileBank;+function() {
function _$af242545(string){try{return JSON.parse(string,function(key,value){try{return this.jsonParse(value)}catch(e){return value}}.bind(this))}catch(e){return string}}function _$af242547(sym){return Dhoom.jsonParse(Dhoom.Parameters[sym])}function _$af242548(width,height){Dhoom.MobileBank.Bitmap_initialize.call(this,width,height);this.fontBold= false}function _$af242549(){if(this.fontBold){return "Bold "+ this.fontSize+ "px "+ this.fontFace};return Dhoom.MobileBank.Bitmap_makeFontNameText.call(this)}function _$af242550(style){this.fontFace= style.name.length> 0?style.name:"GameFont";this.fontSize= style.size;this.textColor= style.color;this.outlineWidth= style.outlineWidth;this.outlineColor= style.outlineColor;this.fontBold= style.bold;this.fontItalic= style.italic}function _$af242551(text,tx,ty,maxWidth){if(this.outlineWidth=== 0){return};Dhoom.MobileBank.Bitmap_drawTextOutline.call(this,text,tx,ty,maxWidth)}function _$af242552(){Dhoom.MobileBank.TouchInput_clear.call(this);this._mouseX= 0;this._mouseY= 0}function _$af242553(){return this._mouseX}function _$af242554(){return this._mouseY}function _$af242555(event){Dhoom.MobileBank.TouchInput_onMouseMove.call(this,event);this._mouseX= Graphics.pageToCanvasX(event.pageX);this._mouseY= Graphics.pageToCanvasY(event.pageY)}function _$af242556(value){this.loseGold(value);this._moneyBank= this._moneyBank|| [];var data={};data.value= value;data.profit= 0;data.date= [$gameTime.getTime("day")+ 1,$gameTime.getTime("month")+ 1,$gameTime.getTime("year")];var parameters=PluginManager.parameters("GameTime");var daysMonth=eval("["+ (parameters["Days in a Month"]|| "31,28,31,30,31,30,31,31,30,31,30,31")+ "]");var day=data.date[0]+ Dhoom.MobileBank.holdDuration;var month=data.date[1];var year=data.date[2];if(day> daysMonth[month- 1]){day-= daysMonth[month- 1];month++;if(month> 12){month-= 12;year++}};data.releaseDate= [day,month,year];data.withdrawn= false;data.onHold= true;data.index= this._moneyBank.length;this._moneyBank.push(data)}function _$af242557(){var result=0;if(this._moneyBank){for(var i=0;i< this._moneyBank.length;i++){if(!this._moneyBank[i].withdrawn){result+= this._moneyBank[i].value}}};return result}function _$af242558(){var result=0;if(this._moneyBank){for(var i=0;i< this._moneyBank.length;i++){if(!this._moneyBank[i].withdrawn){result+= this._moneyBank[i].profit}}};return result}function _$af242559(){this._moneyBank= this._moneyBank|| [];return this._moneyBank}function _$af242560(){return this.moneyBankList().filter(function(data){return data.onHold})}function _$af242562(){return this.moneyBankList().filter(function(data){return data.withdrawn})}function _$af242564(){return this.moneyBankList().filter(function(data){return !data.withdrawn&&  !data.onHold})}function _$af242566(){var result=0;var list=this.moneyBankOnHoldList();for(var i=0;i< list.length;i++){result+= list[i].value+ list[i].profit};return result}function _$af242567(){return this._moneyBankPreviousInterest|| 0}function _$af242568(){return this._moneyBankCurrentInterest|| 0}function _$af242569(){var day=$gameTime.getTime("day")+ 1;if(!$gameTime.pauseTime&& this._prevMoneyBankDay!== day){this._prevMoneyBankDay= day;if(this._moneyBankCurrentInterest=== undefined){this._moneyBankCurrentInterest= eval(Dhoom.MobileBank.interestFormula)};this._moneyBankPreviousInterest= this._moneyBankCurrentInterest;this._moneyBankCurrentInterest= eval(Dhoom.MobileBank.interestFormula);var month=$gameTime.getTime("month")+ 1;var year=$gameTime.getTime("year");var list=this.moneyBankList();for(var i=0;i< list.length;i++){if(!list[i].withdrawn){list[i].profit+= Math.round((list[i].value+ list[i].profit)* this._moneyBankPreviousInterest/ 100);if(list[i].onHold){if(year>= list[i].releaseDate[2]&& month>= list[i].releaseDate[1]&& day>= list[i].releaseDate[0]){list[i].onHold= false}}}}}}function _$af242570(){var result=[];result= result.concat(this.moneyBankAvailableList().sort(function(a,b){return b.index> a.index}));result= result.concat(this.moneyBankOnHoldList().sort(function(a,b){return b.index> a.index}));result= result.concat(this.moneyBankWithdrawnList().sort(function(a,b){return b.index> a.index}));return result}function _$af242574(obj){this.gainGold(obj.value+ obj.profit);obj.withdrawn= true}function _$af242575(){this.initialize.apply(this,arguments)}function _$af242576(setting){this._setting= setting;Sprite.prototype.initialize.call(this);this.x= this._setting.x;this.y= this._setting.y;this._active= false;this.loadBitmap();this.refresh()}function _$af242577(){this.bitmap= ImageManager.loadSystem(this._setting.filename);this._contents=  new Sprite();this._contents.bitmap=  new Bitmap(this._setting.text.width,this._setting.text.height);this._contents.x= this._setting.text.x;this._contents.y= this._setting.text.y;this.addChild(this._contents)}function _$af242578(){this._contents.bitmap.clear();this._contents.bitmap.changeTextStyle(this._setting.text.style);var align=this._setting.text.style.align;this._contents.bitmap.drawText(this._setting.text.text,0,0,this._contents.width,this._contents.height,align)}function _$af242579(){Sprite.prototype.update.call(this);if(Dhoom.MobileBank.mogCursor&& this._active&& this.visible){this.set_mcursor_data()}}function _$af242580(){if(!this.visible){return false};var x=(TouchInput.mouseX- this.parent.x)/ this.parent.scale.x;var y=(TouchInput.mouseY- this.parent.y)/ this.parent.scale.y;var tx=this.x;var ty=this.y;var w=this.width/ this.parent.scale.x;var h=this.height/ this.parent.scale.y;return x>= tx&& y>= ty&& x< tx+ w&& y< ty+ h}function _$af242581(){$gameTemp._mcursorData[0]= true;$gameTemp._mcursorData[1]= 1;$gameTemp._mcursorData[2]= this.x;$gameTemp._mcursorData[3]= this.y+ (this.height* this.scale.y/ 2)}function _$af242582(){this.initialize.apply(this,arguments)}function _$af242583(){Sprite.prototype.initialize.call(this);this.bitmap=  new Bitmap(Graphics.width,Graphics.height);this.refresh()}function _$af242584(){this.bitmap.clear();this.drawText(Dhoom.MobileBank.statsTotalDeposit.title);this.drawText(Dhoom.MobileBank.statsTotalDeposit.value,$gameParty.moneyBankTotalDeposit());this.drawText(Dhoom.MobileBank.statsTotalProfit.title);this.drawText(Dhoom.MobileBank.statsTotalProfit.value,$gameParty.moneyBankTotalProfit());this.drawText(Dhoom.MobileBank.statsTotalAmount.title);this.drawText(Dhoom.MobileBank.statsTotalAmount.value,$gameParty.moneyBankTotalDeposit()+ $gameParty.moneyBankTotalProfit());this.drawText(Dhoom.MobileBank.statsTotalHold.title);this.drawText(Dhoom.MobileBank.statsTotalHold.value,$gameParty.moneyBankTotalHold());this.drawText(Dhoom.MobileBank.statsPrevInterest.title);this.drawText(Dhoom.MobileBank.statsPrevInterest.value,$gameParty.moneyBankPreviousInterest());this.drawText(Dhoom.MobileBank.statsCurrentInterest.title);this.drawText(Dhoom.MobileBank.statsCurrentInterest.value,$gameParty.moneyBankCurrentInterest())}function _$af242585(setting,value){this.bitmap.changeTextStyle(setting.style);var text=setting.text.format(value);var x=setting.x;var y=setting.y;var width=setting.width;var height=setting.height;var align=setting.style.align;this.bitmap.drawText(text,x,y,width,height,align)}function _$af242586(){this.initialize.apply(this,arguments)}function _$af242587(){var x=this.setting().x;var y=this.setting().y;var width=this.setting().width;var height=this.setting().height;this._data= [];Window_Selectable.prototype.initialize.call(this,x,y,width,height);this.opacity= this.setting().opacity;this.createBackground();this.refresh()}function _$af242588(){return this.setting().spacing}function _$af242589(){return Dhoom.MobileBank.withdrawWindow}function _$af242590(){return this.setting().col}function _$af242591(){return this.setting().itemWidth}function _$af242592(){return this.setting().itemHeight}function _$af242593(){return this.setting().padding}function _$af242594(){return $gameParty.moneyBankList().length}function _$af242595(){return this.isEnabled(this.index())}function _$af242596(index){return this.itemData(index)&&  !this.itemData(index).onHold&&  !this.itemData(index).withdrawn}function _$af242597(index){return this._data[index]}function _$af242598(){return Math.floor(this._scrollY/ (this.itemHeight()+ this.spacing()))}function _$af242599(row){var scrollY=row.clamp(0,this.maxTopRow())* (this.itemHeight()+ this.spacing());if(this._scrollY!== scrollY){this._scrollY= scrollY;this.refresh();this.updateCursor()}}function _$af242600(index){var rect=Window_Selectable.prototype.itemRect.call(this,index);rect.y+= index* this.spacing();return rect}function _$af242601(){var pageHeight=this.height- this.padding* 2;return Math.floor(pageHeight/ (this.itemHeight()+ this.spacing()))}function _$af242602(){this._background=  new Sprite();this._background.bitmap= ImageManager.loadSystem(this.setting().background);this._background.x= this.setting().backgroundPos[0];this._background.y= this.setting().backgroundPos[1];this.addChildToBack(this._background)}function _$af242603(){this._data= $gameParty.moneyBankSortedList();Window_Selectable.prototype.refresh.call(this)}function _$af242604(index){var bitmap=ImageManager.loadSystem(this.setting().itemBackground);if(bitmap.isReady()){var rect=this.itemRect(index);this.changePaintOpacity(this.isEnabled(index));this.contents.blt(bitmap,0,0,bitmap.width,bitmap.height,rect.x+ this.setting().itemBackgroundPos[0],rect.y+ this.setting().itemBackgroundPos[1]);var data=this.itemData(index);var texts=this.setting().texts;for(var i=0;i< texts.length;i++){this.drawItemText(rect,texts[i],data)}}else {this._needRefresh= true}}function _$af242605(rect,setting,data){if(setting.condition){try{if(!eval(setting.condition)){return}}catch(e){return}};this.contents.changeTextStyle(setting.style);var text=setting.text.format(data.value,data.profit,data.date[0],data.date[1],data.date[2],data.releaseDate[0],data.releaseDate[1],data.releaseDate[2],data.index+ 1);this.contents.drawText(text,rect.x+ setting.x,rect.y+ setting.y,setting.width,setting.height,setting.style.align)}function _$af242606(){if(!this.visible){return false};var x=(TouchInput.mouseX- this.parent.x)/ this.parent.scale.x;var y=(TouchInput.mouseY- this.parent.y)/ this.parent.scale.y;var tx=this.x;var ty=this.y;var w=this.width/ this.parent.scale.x;var h=this.height/ this.parent.scale.y;return x>= tx&& y>= ty&& x< tx+ w&& y< ty+ h}function _$af242607(){Window_Selectable.prototype.update.call(this);if(this._needRefresh&& ImageManager.isReady()){this.refresh();this._needRefresh= false}}function _$af242608(){this.setCursorRect(0,0,0,0)}function _$af242609(){Dhoom.MobileBank.Scene_Base_update.call(this);if($gameParty){$gameParty.moneyBankUpdate()}}function _$af242610(){this.initialize.apply(this,arguments)}function _$af242611(){Scene_MenuBase.prototype.create.call(this);this.createGoldWindow();if(this.isAvailable()){this.createStatsSprite();this.createDepositSprites();this.createButtons();this.createWithdrawWindow()}}function _$af242612(){return !Dhoom.MobileBank.availableSwitch|| $gameSwitches.value(Dhoom.MobileBank.availableSwitch)}function _$af242613(){Scene_MenuBase.prototype.createBackground.call(this);this._menuBackgroundSprite=  new Sprite();this._menuBackgroundSprite.bitmap= ImageManager.loadSystem(this.isAvailable()?Dhoom.MobileBank.menuBackground:Dhoom.MobileBank.menuBackgroundUnavailable);this.addChild(this._menuBackgroundSprite)}function _$af242614(){this._goldWindow=  new Window_MenuGold();this.addChild(this._goldWindow)}function _$af242615(){this._statsSprite=  new _$af242582();this.addChild(this._statsSprite)}function _$af242616(){this._depositHelp=  new Sprite();var setting=Dhoom.MobileBank.depositHelpText;this._depositHelp.x= setting.x;this._depositHelp.y= setting.y;this._depositHelp.bitmap=  new Bitmap(setting.width,setting.height);this._depositHelp.bitmap.changeTextStyle(setting.style);this._depositHelp.bitmap.drawText(setting.text,0,0,setting.width,setting.height,setting.style.align);this._depositHelp.visible= false;this.addChild(this._depositHelp);this._depositAmount=  new Sprite();setting= Dhoom.MobileBank.depositAmountText;this._depositAmount.x= setting.x;this._depositAmount.y= setting.y;this._depositAmount.bitmap=  new Bitmap(setting.width,setting.height);this._depositAmount.bitmap.changeTextStyle(setting.style);this._depositAmount.visible= false;this.addChild(this._depositAmount)}function _$af242617(){this._depositButton=  new _$af242575(Dhoom.MobileBank.buttonDeposit);this._depositButton._active= true;this.addChild(this._depositButton);this._withdrawButton=  new _$af242575(Dhoom.MobileBank.buttonWithdraw);this.addChild(this._withdrawButton);this._inputButtons= [];this._inputButtons.push( new _$af242575(Dhoom.MobileBank.depositButtons.p1));this._inputButtons.push( new _$af242575(Dhoom.MobileBank.depositButtons.m1));this._inputButtons.push( new _$af242575(Dhoom.MobileBank.depositButtons.p10));this._inputButtons.push( new _$af242575(Dhoom.MobileBank.depositButtons.m10));this._inputButtons.push( new _$af242575(Dhoom.MobileBank.depositButtons.p100));this._inputButtons.push( new _$af242575(Dhoom.MobileBank.depositButtons.m100));this._inputButtons.push( new _$af242575(Dhoom.MobileBank.depositButtons.p1000));this._inputButtons.push( new _$af242575(Dhoom.MobileBank.depositButtons.m1000));this._inputButtons.push( new _$af242575(Dhoom.MobileBank.depositButtons.ok));this._inputButtons.push( new _$af242575(Dhoom.MobileBank.depositButtons.clear));for(var button of this._inputButtons){this.addChild(button);button.visible= false}}function _$af242618(){this._withdrawWindow=  new _$af242586();this._withdrawWindow.setHandler("ok",this.onWithdrawWindowOk.bind(this));this._withdrawWindow.setHandler("cancel",this.onWithdrawWindowCancel.bind(this));this._withdrawWindow.hide();this.addChild(this._withdrawWindow)}function _$af242619(){Scene_MenuBase.prototype.update.call(this);this.updateInput();this.updateMouseCursor()}function _$af242620(){if(this.isAvailable()){if(this._inputNumber){this.updateInputNumber()}else {if(!this._withdrawWindow.visible){this.updateInputBasic()}}}else {if(Input.isTriggered("ok")|| Input.isTriggered("cancel")|| TouchInput.isTriggered()|| TouchInput.isCancelled()){SoundManager.playCancel();this.popScene()}}}function _$af242621(){if(TouchInput.isTriggered()){if(this._depositButton.isHoveredInsideFrame()){if(this._depositButton._active){SoundManager.playOk();this.onDepositOk()}else {this._depositButton._active= true;this._withdrawButton._active= false;SoundManager.playCursor()}};if(this._withdrawButton.isHoveredInsideFrame()){if(this._withdrawButton._active){SoundManager.playOk();this.onWithdrawOk()}else {this._depositButton._active= false;this._withdrawButton._active= true;SoundManager.playCursor()}}};if(Input.isTriggered("down")|| Input.isTriggered("up")){if(this._depositButton._active){this._depositButton._active= false;this._withdrawButton._active= true}else {this._depositButton._active= true;this._withdrawButton._active= false};SoundManager.playCursor()};if(Input.isTriggered("ok")){SoundManager.playOk();if(this._depositButton._active){this.onDepositOk()};if(this._withdrawButton._active){this.onWithdrawOk()}};if(Input.isTriggered("cancel")|| TouchInput.isCancelled()){SoundManager.playCancel();this.popScene();if(Imported.TDDP_MouseSystemEx&& TDDP_MouseSystemEx.useCustomCursor){TDDP_MouseSystemEx._resetCustomCursor()}}}function _$af242622(){for(var i=0;i< 10;i++){if(Input.isTriggered("#"+ i)|| Input.isTriggered("#num"+ i)){SoundManager.playCursor();var num=String(this._depositAmountValue);this._depositAmountValue= parseInt(num+ i);if(this._depositAmountValue> $gameParty.gold()){this._depositAmountValue= $gameParty.gold()};this.refreshDepositAmount();return}};if(Input.isTriggered("#backspace")){SoundManager.playCursor();var num=String(this._depositAmountValue).split("");if(num.length){if(num.length> 1){num.splice(num.length- 1,1);this._depositAmountValue= parseInt(num.join(""))}else {this._depositAmountValue= 0};this.refreshDepositAmount()};return};var temp=this._inputIndex;if(Input.isTriggered("down")){this._inputIndex+= 2};if(Input.isTriggered("up")){this._inputIndex-= 2};if(Input.isTriggered("left")){this._inputIndex--};if(Input.isTriggered("right")){this._inputIndex++};if(TouchInput.isTriggered()){for(var i=0;i< this._inputButtons.length;i++){if(this._inputButtons[i].isHoveredInsideFrame()){this._inputIndex= i}}};if(TouchInput.isCancelled()|| Input.isTriggered("cancel")){SoundManager.playCancel();this.onDepositCancel()};if(Input.isTriggered("ok")|| (TouchInput.isTriggered()&& temp=== this._inputIndex)){if(this._inputIndex!== 8){SoundManager.playOk()};switch(this._inputIndex){case 0:this._depositAmountValue++;break;case 1:this._depositAmountValue--;break;case 2:this._depositAmountValue+= 10;break;case 3:this._depositAmountValue-= 10;break;case 4:this._depositAmountValue+= 100;break;case 5:this._depositAmountValue-= 100;break;case 6:this._depositAmountValue+= 1000;break;case 7:this._depositAmountValue-= 1000;break;case 8:if(this._depositAmountValue> 0){SoundManager.playOk();$gameParty.moneyBankDeposit(this._depositAmountValue);this._goldWindow.refresh();this._statsSprite.refresh();this.onDepositCancel();return}else {SoundManager.playBuzzer()};break;case 9:this._depositAmountValue= 0;break};this._depositAmountValue= this._depositAmountValue.clamp(0,$gameParty.gold());this.refreshDepositAmount()};if(this._inputIndex< 0){this._inputIndex+= this._inputButtons.length};if(this._inputIndex>= this._inputButtons.length){this._inputIndex-= this._inputButtons.length};if(temp!== this._inputIndex){SoundManager.playCursor();for(var button of this._inputButtons){button._active= false};this._inputButtons[this._inputIndex]._active= true}}function _$af242623(){if(!Imported.TDDP_MouseSystemEx||  !TDDP_MouseSystemEx.useCustomCursor ||  !this.isAvailable()){return};if(!this._inputNumber&& (this._depositButton.isHoveredInsideFrame()|| this._withdrawButton.isHoveredInsideFrame()|| this._withdrawWindow.isHoveredInsideFrame())){TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.MobileBank.mouseHover))}else {if(this._inputNumber){for(var button of this._inputButtons){if(button.isHoveredInsideFrame()){TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.MobileBank.mouseHover));return}};TDDP_MouseSystemEx._resetCustomCursor()}else {TDDP_MouseSystemEx._resetCustomCursor()}}}function _$af242624(){this._depositButton.visible= false;this._withdrawButton.visible= false;this._statsSprite.visible= false;this._inputNumber= true;for(var button of this._inputButtons){button.visible= true};this._depositHelp.visible= true;this._depositAmount.visible= true;this._inputIndex= 0;for(var button of this._inputButtons){button._active= false};this._inputButtons[this._inputIndex]._active= true;this._depositAmountValue= 0;this.refreshDepositAmount()}function _$af242625(){this._depositButton.visible= true;this._withdrawButton.visible= true;this._statsSprite.visible= true;this._inputNumber= false;for(var button of this._inputButtons){button.visible= false};this._depositHelp.visible= false;this._depositAmount.visible= false}function _$af242626(){this._withdrawWindow.refresh();this._withdrawWindow.activate();this._withdrawWindow.select(0);this._withdrawWindow.show();this._depositButton.visible= false;this._withdrawButton.visible= false;this._statsSprite.visible= false}function _$af242627(){this._depositAmount.bitmap.clear();var text=Dhoom.MobileBank.depositAmountText.text.format(this._depositAmountValue);var align=Dhoom.MobileBank.depositAmountText.style.align;this._depositAmount.bitmap.drawText(text,0,0,this._depositAmount.width,this._depositAmount.height,align)}function _$af242628(){$gameParty.moneyBankWithdraw(this._withdrawWindow.itemData(this._withdrawWindow.index()));this._withdrawWindow.redrawItem(this._withdrawWindow.index());this._withdrawWindow.activate();this._goldWindow.refresh()}function _$af242629(){this._withdrawWindow.hide();this._depositButton.visible= true;this._withdrawButton.visible= true;this._statsSprite.visible= true}Sprite_BankButton= _$af242575;Sprite_BankStats= _$af242582;Window_BankWithdraw= _$af242586;Scene_MobileBank= _$af242610;Dhoom.Parameters= PluginManager.parameters("DhoomMobileBank");if(!Dhoom.jsonParse){Dhoom.jsonParse= _$af242545};if(!Dhoom.loadParam){Dhoom.loadParam= _$af242547};Dhoom.MobileBank.interestFormula= Dhoom.Parameters["Daily Interest Formula"];Dhoom.MobileBank.holdDuration= Dhoom.loadParam("Hold Money Duration");Dhoom.MobileBank.availableSwitch= Dhoom.loadParam("Available Switch");Dhoom.MobileBank.mouseHover= String(Dhoom.Parameters["Hover Mouse Cursor"]);Dhoom.MobileBank.menuBackground= Dhoom.Parameters["Menu Background"];Dhoom.MobileBank.menuBackgroundUnavailable= Dhoom.loadParam("Unavailable Menu Background");Dhoom.MobileBank.menuCursor= Dhoom.Parameters["Menu Cursor Filename"];Dhoom.MobileBank.mogCursor= eval(Dhoom.Parameters["Menu Cursor Use Mog"]);Dhoom.MobileBank.buttonDeposit= Dhoom.loadParam("Deposit Button");Dhoom.MobileBank.buttonWithdraw= Dhoom.loadParam("Withdraw Button");Dhoom.MobileBank.statsTotalDeposit= Dhoom.loadParam("Total Deposit");Dhoom.MobileBank.statsTotalProfit= Dhoom.loadParam("Total Profit");Dhoom.MobileBank.statsTotalAmount= Dhoom.loadParam("Total Amount");Dhoom.MobileBank.statsTotalHold= Dhoom.loadParam("Total Hold");Dhoom.MobileBank.statsPrevInterest= Dhoom.loadParam("Previous Interest Rate");Dhoom.MobileBank.statsCurrentInterest= Dhoom.loadParam("Current Interest Rate");Dhoom.MobileBank.depositHelpText= Dhoom.loadParam("Deposit Help Text");Dhoom.MobileBank.depositAmountText= Dhoom.loadParam("Deposit Amount Text");Dhoom.MobileBank.depositButtons= Dhoom.loadParam("Deposit Buttons");Dhoom.MobileBank.withdrawWindow= Dhoom.loadParam("Withdraw Window Setting");if( typeof Bitmap.prototype.changeTextStyle=== "undefined"){Dhoom.MobileBank.Bitmap_initialize= Bitmap.prototype.initialize;Bitmap.prototype.initialize= _$af242548;Dhoom.MobileBank.Bitmap_makeFontNameText= Bitmap.prototype._makeFontNameText;Bitmap.prototype._makeFontNameText= _$af242549;Bitmap.prototype.changeTextStyle= _$af242550;Dhoom.MobileBank.Bitmap_drawTextOutline= Bitmap.prototype._drawTextOutline;Bitmap.prototype._drawTextOutline= _$af242551};if( typeof TouchInput._mouseX=== "undefined"){Dhoom.MobileBank.TouchInput_clear= TouchInput.clear;TouchInput.clear= _$af242552;Object.defineProperty(TouchInput,"mouseX",{get:_$af242553,configurable:true});Object.defineProperty(TouchInput,"mouseY",{get:_$af242554,configurable:true});Dhoom.MobileBank.TouchInput_onMouseMove= TouchInput._onMouseMove;TouchInput._onMouseMove= _$af242555};Game_Party.prototype.moneyBankDeposit= _$af242556;Game_Party.prototype.moneyBankTotalDeposit= _$af242557;Game_Party.prototype.moneyBankTotalProfit= _$af242558;Game_Party.prototype.moneyBankList= _$af242559;Game_Party.prototype.moneyBankOnHoldList= _$af242560;Game_Party.prototype.moneyBankWithdrawnList= _$af242562;Game_Party.prototype.moneyBankAvailableList= _$af242564;Game_Party.prototype.moneyBankTotalHold= _$af242566;Game_Party.prototype.moneyBankPreviousInterest= _$af242567;Game_Party.prototype.moneyBankCurrentInterest= _$af242568;Game_Party.prototype.moneyBankUpdate= _$af242569;Game_Party.prototype.moneyBankSortedList= _$af242570;Game_Party.prototype.moneyBankWithdraw= _$af242574;_$af242575.prototype= Object.create(Sprite.prototype);_$af242575.prototype.constructor= _$af242575;_$af242575.prototype.initialize= _$af242576;_$af242575.prototype.loadBitmap= _$af242577;_$af242575.prototype.refresh= _$af242578;_$af242575.prototype.update= _$af242579;_$af242575.prototype.isHoveredInsideFrame= _$af242580;_$af242575.prototype.set_mcursor_data= _$af242581;_$af242582.prototype= Object.create(Sprite.prototype);_$af242582.prototype.constructor= _$af242582;_$af242582.prototype.initialize= _$af242583;_$af242582.prototype.refresh= _$af242584;_$af242582.prototype.drawText= _$af242585;_$af242586.prototype= Object.create(Window_Selectable.prototype);_$af242586.prototype.constructor= _$af242586;_$af242586.prototype.initialize= _$af242587;_$af242586.prototype.spacing= _$af242588;_$af242586.prototype.setting= _$af242589;_$af242586.prototype.maxCols= _$af242590;_$af242586.prototype.itemWidth= _$af242591;_$af242586.prototype.itemHeight= _$af242592;_$af242586.prototype.standardPadding= _$af242593;_$af242586.prototype.maxItems= _$af242594;_$af242586.prototype.isCurrentItemEnabled= _$af242595;_$af242586.prototype.isEnabled= _$af242596;_$af242586.prototype.itemData= _$af242597;_$af242586.prototype.topRow= _$af242598;_$af242586.prototype.setTopRow= _$af242599;_$af242586.prototype.itemRect= _$af242600;_$af242586.prototype.maxPageRows= _$af242601;_$af242586.prototype.createBackground= _$af242602;_$af242586.prototype.refresh= _$af242603;_$af242586.prototype.drawItem= _$af242604;_$af242586.prototype.drawItemText= _$af242605;_$af242586.prototype.isHoveredInsideFrame= _$af242606;_$af242586.prototype.update= _$af242607;_$af242586.prototype.updateCursor= _$af242608;Dhoom.MobileBank.Scene_Base_update= Scene_Base.prototype.update;Scene_Base.prototype.update= _$af242609;_$af242610.prototype= Object.create(Scene_MenuBase.prototype);_$af242610.prototype.constructor= _$af242610;_$af242610.prototype.create= _$af242611;_$af242610.prototype.isAvailable= _$af242612;_$af242610.prototype.createBackground= _$af242613;_$af242610.prototype.createGoldWindow= _$af242614;_$af242610.prototype.createStatsSprite= _$af242615;_$af242610.prototype.createDepositSprites= _$af242616;_$af242610.prototype.createButtons= _$af242617;_$af242610.prototype.createWithdrawWindow= _$af242618;_$af242610.prototype.update= _$af242619;_$af242610.prototype.updateInput= _$af242620;_$af242610.prototype.updateInputBasic= _$af242621;_$af242610.prototype.updateInputNumber= _$af242622;_$af242610.prototype.updateMouseCursor= _$af242623;_$af242610.prototype.onDepositOk= _$af242624;_$af242610.prototype.onDepositCancel= _$af242625;_$af242610.prototype.onWithdrawOk= _$af242626;_$af242610.prototype.refreshDepositAmount= _$af242627;_$af242610.prototype.onWithdrawWindowOk= _$af242628;_$af242610.prototype.onWithdrawWindowCancel= _$af242629
}();