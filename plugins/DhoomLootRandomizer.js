//=============================================================================
// DhoomLootRandomizer.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_LootRandomizer = true;

var Dhoom = Dhoom || {};
Dhoom.LootRandomizer = Dhoom.LootRandomizer || {};
/*:
 * @plugindesc Dhoom LootRandomizer v1.1
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Show Text
 * @desc Show text message for loot item?
 * @type boolean
 * @default true
 * 
 * @param Amount Text Format
 * @desc \LIA text format. %1 = Amount. Will be empty instead if the amount is less than 2.
 * @default (%1x)
 * 
 * @param Text Format
 * @desc \LIC = Item icon, \LIN = Item name, \LIA = Item amount
 * @default \WS[4]Received \LIC\C[3]\LIN\C \LIA
 * 
 * @param Message Position
 * @desc Message position
 * @type select
 * @option Top
 * @option Middle
 * @option Bottom
 * @default Middle
 * 
 * @param Message Background
 * @desc Message background type
 * @type select
 * @option Window
 * @option Dim
 * @option Transparent
 * @default Window
 * 
 * @param Settings
 * 
 * @param Setting 1
 * @type struct<lootSetting>
 * @parent Settings
 * @default {"max":"v[1] + r[3] + 1","rate":"[\"1: 20\",\"2: v[1] * 5\",\"3: r[50]\",\"6: 50\"]","cond":"[\"2: v[1] >= 2\",\"3: v[1] > 1 && s[1]\"]"}
 * 
 * @param Setting 2
 * @type struct<lootSetting>
 * @parent Settings
 * @default {"max":"v[1] + r[3] + 1","rate":"[\"1: 20\",\"2: v[1] * 5\",\"3: r[50]\",\"6: 50\"]","cond":"[\"2: v[1] >= 2\",\"3: v[1] > 1 && s[1]\"]"}
 * 
 * @param Setting 3
 * @type struct<lootSetting>
 * @parent Settings
 * @default {"max":"v[1] + r[3] + 1","rate":"[\"1: 20\",\"2: v[1] * 5\",\"3: r[50]\",\"6: 50\"]","cond":"[\"2: v[1] >= 2\",\"3: v[1] > 1 && s[1]\"]"}
 * 
 * @param Setting 4
 * @type struct<lootSetting>
 * @parent Settings
 * @default {"max":"v[1] + r[3] + 1","rate":"[\"1: 20\",\"2: v[1] * 5\",\"3: r[50]\",\"6: 50\"]","cond":"[\"2: v[1] >= 2\",\"3: v[1] > 1 && s[1]\"]"}
 * 
 * @param Setting 5
 * @type struct<lootSetting>
 * @parent Settings
 * @default {"max":"v[1] + r[3] + 1","rate":"[\"1: 20\",\"2: v[1] * 5\",\"3: r[50]\",\"6: 50\"]","cond":"[\"2: v[1] >= 2\",\"3: v[1] > 1 && s[1]\"]"}
 * 
 * @param Setting 6
 * @type struct<lootSetting>
 * @parent Settings
 * @default {"max":"v[1] + r[3] + 1","rate":"[\"1: 20\",\"2: v[1] * 5\",\"3: r[50]\",\"6: 50\"]","cond":"[\"2: v[1] >= 2\",\"3: v[1] > 1 && s[1]\"]"}
 * 
 * @param Setting 7
 * @type struct<lootSetting>
 * @parent Settings
 * @default {"max":"v[1] + r[3] + 1","rate":"[\"1: 20\",\"2: v[1] * 5\",\"3: r[50]\",\"6: 50\"]","cond":"[\"2: v[1] >= 2\",\"3: v[1] > 1 && s[1]\"]"}
 * 
 * @param Setting 8
 * @type struct<lootSetting>
 * @parent Settings
 * @default {"max":"v[1] + r[3] + 1","rate":"[\"1: 20\",\"2: v[1] * 5\",\"3: r[50]\",\"6: 50\"]","cond":"[\"2: v[1] >= 2\",\"3: v[1] > 1 && s[1]\"]"}
 * 
 * @param Setting 9
 * @type struct<lootSetting>
 * @parent Settings
 * @default {"max":"v[1] + r[3] + 1","rate":"[\"1: 20\",\"2: v[1] * 5\",\"3: r[50]\",\"6: 50\"]","cond":"[\"2: v[1] >= 2\",\"3: v[1] > 1 && s[1]\"]"}
 * 
 * @param Setting 10
 * @type struct<lootSetting>
 * @parent Settings
 * @default {"max":"v[1] + r[3] + 1","rate":"[\"1: 20\",\"2: v[1] * 5\",\"3: r[50]\",\"6: 50\"]","cond":"[\"2: v[1] >= 2\",\"3: v[1] > 1 && s[1]\"]"}
 *
 * @help
  Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

/*~struct~lootSetting:
@param max
@text Max Item Formula
@desc v = Variable, r = Random Number (Max). Ex. v[4] = Variable 4, r[3] = Random number from 0 to 3.
@default v[1] + r[3] + 1
@type text

@param rate
@text Item Drop Rate
@desc Item ID: formula. v = Variable, r = Random Number (Max).
@type text[]

@param cond
@text Item Drop Condition
@desc Item ID: condition. v = Variable, s = Switch, r = Random Number (Max). Excluded item always available.
@type text[]
*/

var i;+function() {
function _$af870238(string){try{return JSON.parse(string,function(key,value){try{return this.jsonParse(value)}catch(e){return value}}.bind(this))}catch(e){return string}}function _$af870240(sym){return Dhoom.jsonParse(Dhoom.Parameters[sym])}function _$af870241(array){var currentIndex=array.length,temporaryValue,randomIndex;while(0!== currentIndex){randomIndex= Math.floor(Math.random()* currentIndex);currentIndex-= 1;temporaryValue= array[currentIndex];array[currentIndex]= array[randomIndex];array[randomIndex]= temporaryValue};return array}function _$af870242(settingId){var setting=Dhoom.LootRandomizer.settings[settingId];var max;try{max= Math.floor(eval(this.convertEscapeCharacters(setting.max)))}catch(e){console.log("Max loot randomizer formula error for Setting "+ settingId);console.log(e);max= 0};var result={};if(max){var blocked=[];var items=[];var maxRate=0;for(var i=0;i< setting.cond.length;i++){if(setting.cond[i].match(/(\d+):(.+)/i)){var id=parseInt(RegExp.$1);if(!eval(this.convertEscapeCharacters(RegExp.$2))){blocked.push(id)}}};for(var i=0;i< setting.rate.length;i++){if(setting.rate[i].match(/(\d+):(.+)/i)){var id=parseInt(RegExp.$1);if(!blocked.contains(id)){var rate=Math.floor(eval(this.convertEscapeCharacters(RegExp.$2)))|| 0;items.push([id,rate]);maxRate+= rate}}};for(var i=0;i< max;i++){var rand=Math.randomInt(maxRate);var curr=0;for(var j=0;j< items.length;j++){curr+= items[j][1];if(rand< curr){result[items[j][0]]= result[items[j][0]]|| 0;result[items[j][0]]++;break}}}};return result}function _$af870243(text){text= text.replace(/v\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))});text= text.replace(/r\[(\d+)\]/gi,function(){return Math.randomInt(parseInt(arguments[1])+ 1)});text= text.replace(/s\[(\d+)\]/gi,function(){return $gameSwitches.value(parseInt(arguments[1]))});return text}function _$af870247(command,args){Dhoom.LootRandomizer.Game_Interpreter_pluginCommand.call(this,command,args);if(command.toLowerCase()=== "lootrandomizer"){var items=Dhoom.LootRandomizer.randomize(parseInt(args[0]));if(Object.keys(items).length> 0){var messages=[];for(var key in items){var item=$dataItems[key];$gameParty.gainItem(item,items[key]);var text=Dhoom.LootRandomizer.textFormat;text= text.replace(/\\LIC/gi,"\\I["+ item.iconIndex+ "]");text= text.replace(/\\LIN/gi,item.name);text= text.replace(/\\LIA/gi,items[key]> 1?Dhoom.LootRandomizer.amountFormat.format(items[key]):"");messages.push(text+ "\x0C")};if(Dhoom.LootRandomizer.showText){messages= Dhoom.LootRandomizer.shuffleArray(messages);$gameMessage.setPositionType(["Top","Middle","Bottom"].indexOf(Dhoom.LootRandomizer.msgPos));$gameMessage.setBackground(["Window","Dim","Transparent"].indexOf(Dhoom.LootRandomizer.msgBgType));for(var i=0;i< messages.length;i++){$gameMessage.add(messages[i])};this.setWaitMode("message")}}}}Dhoom.Parameters= PluginManager.parameters("DhoomLootRandomizer");if(!Dhoom.jsonParse){Dhoom.jsonParse= _$af870238};if(!Dhoom.loadParam){Dhoom.loadParam= _$af870240};Dhoom.LootRandomizer.settings= [];for(i= 1;i<= 10;i++){Dhoom.LootRandomizer.settings[i]= Dhoom.loadParam("Setting "+ i)};Dhoom.LootRandomizer.showText= Dhoom.loadParam("Show Text");Dhoom.LootRandomizer.textFormat= Dhoom.loadParam("Text Format");Dhoom.LootRandomizer.amountFormat= Dhoom.loadParam("Amount Text Format");Dhoom.LootRandomizer.msgPos= Dhoom.loadParam("Message Position");Dhoom.LootRandomizer.msgBgType= Dhoom.loadParam("Message Background");Dhoom.LootRandomizer.shuffleArray= _$af870241;Dhoom.LootRandomizer.randomize= _$af870242;Dhoom.LootRandomizer.convertEscapeCharacters= _$af870243;Dhoom.LootRandomizer.Game_Interpreter_pluginCommand= Game_Interpreter.prototype.pluginCommand;Game_Interpreter.prototype.pluginCommand= _$af870247
}();