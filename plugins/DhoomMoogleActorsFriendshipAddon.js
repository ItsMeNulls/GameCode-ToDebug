//=============================================================================
// DhoomMoogleActorsFriendshipAddon.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_MoogActFriendship = true;

var Dhoom = Dhoom || {};
Dhoom.MoogActFriendship = Dhoom.MoogActFriendship || {};
/*:
 * @plugindesc Dhoom MoogActFriendship v1.1
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Default Max Level
 * @desc This is the default value for max Confidence Level for all actors.
 * @default 10
 *
 * @param Default Exp for Level Up
 * @desc This is the default value for Confidence Points needed to level up.
 * @default 20
 *
 * @param Confidence Gain Each Battle
 * @desc Confidence Points gained for each active party members to other leaders in battle party.
 * @default 1
 *
 * @param Allows Level Down
 * @desc Decide whether Confidence Level can decrease or not. 1:Yes 0:No
 * @default 0
 * 
 * @param ---Confidence Level Text---
 * @default
 *
 * @param Confidence Level Text
 * @desc Change "Confidence Level" text in Window Friend List.
 * @default Confidence Level
 *
 * @param Show Confidence Level Text
 * @desc Decide whether to draw "Confidence Level" text in Window Friend List. 1:Yes 0:No
 * @default 1
 *
 * @param Confidence Level Text Color
 * @desc This is the color for "Confidence Level" text in Window Friend List.
 * @default 16
 *
 * @param Confidence Level Text Width
 * @desc This is the rectangle width for "Confidence Level" text in Window Friend List.
 * @default 200
 *
 * @param Confidence Level Text Alignment
 * @desc This is the text alignment for "Confidence Level" text in Window Friend List. (left center right)
 * @default left
 *
 * @param Confidence Level Text Offset X
 * @desc Change the offset X value of "Confidence Level" text in Window Friend List. (Positive: right; Negative: left)
 * @default 0
 *
 * @param Confidence Level Text Offset Y
 * @desc Change the offset Y value of "Confidence Level" text in Window Friend List. (Positive: down; Negative: up)
 * @default 72
 *
 * @param ---Confidence Level Number---
 * @default
 *
 * @param Show Confidence Level Number
 * @desc Decide whether to draw "Confidence Level" number in Window Friend List. 1:Yes 0:No
 * @default 1
 *
 * @param Confidence Level Number Color
 * @desc This is the color for "Confidence Level" number in Window Friend List.
 * @default 0
 *
 * @param Confidence Level Number Width
 * @desc This is the rectangle width for "Confidence Level" number in Window Friend List.
 * @default 40
 *
 * @param Confidence Level Number Alignment
 * @desc This is the text alignment for "Confidence Level" number in Window Friend List. (left center right)
 * @default right
 *
 * @param Confidence Level Number Offset X
 * @desc Change the offset X value of "Confidence Level" number in Window Friend List. (Positive: right; Negative: left)
 * @default 0
 *
 * @param Confidence Level Number Offset Y
 * @desc Change the offset Y value of "Confidence Level" number in Window Friend List. (Positive: down; Negative: up)
 * @default 72
 *
 * @param ---Confidence Gauge---
 * @default
 *
 * @param Show Confidence Gauge
 * @desc Decide whether to draw Confidence Gauge in Window Friend List. 1:Yes 0:No
 * @default 1
 *
 * @param Gauge Height
 * @desc This is the height of Confidence Gauge in Window Friend List.
 * @default 18
 *
 * @param Gauge Width
 * @desc This is the width of Confidence Gauge in Window Friend List.
 * @default 982
 *
 * @param Color 1
 * @desc This is the gradient color 1 of Confidence Gauge.
 * @default 24
 *
 * @param Color 2
 * @desc This is the gradient color 2 of Confidence Gauge.
 * @default 29
 *
 * @param Confidence Gauge Offset X
 * @desc Change the offset X value of Confidence Gauge in Window Friend List. (Positive: right; Negative: left)
 * @default 0
 *
 * @param Confidence Gauge Offset Y
 * @desc Change the offset Y value of Confidence Gauge in Window Friend List. (Positive: down; Negative: up)
 * @default 32
 *
 * @param Use Pretty Gauges Patch
 * @desc Activate compatibility patch for Rocketmancer's PrettyGauges plugin? 1:Yes 0:No
 * @default 0
 *
 * @param ---Current FP Text---
 * @default
 *
 * @param Current FP Text
 * @desc Change "Current FP" text in Window Friend List.
 * @default Current FP
 *
 * @param Show Current FP Text
 * @desc Decide whether to draw "Current FP" text in Window Friend List. 1:Yes 0:No
 * @default 0
 *
 * @param Current FP Text Color
 * @desc This is the color for "Current FP" text in Window Friend List.
 * @default 16
 *
 * @param Current FP Text Width
 * @desc This is the rectangle width for "Current FP" text in Window Friend List.
 * @default 200
 *
 * @param Current FP Text Alignment
 * @desc This is the text alignment for "Current FP" text in Window Friend List. (left center right)
 * @default left
 *
 * @param Current FP Text Offset X
 * @desc Change the offset X value of "Current FP" text in Window Friend List. (Positive: right; Negative: left)
 * @default 0
 *
 * @param Current FP Text Offset Y
 * @desc Change the offset Y value of "Current FP" text in Window Friend List. (Positive: down; Negative: up)
 * @default 0
 *
 * @param ---Current FP Number---
 * @default
 *
 * @param Show Current FP Number
 * @desc Decide whether to draw "Current FP" number in Window Friend List. 1:Yes 0:No
 * @default 0
 *
 * @param Current FP Number Color
 * @desc This is the color for "Current FP" number in Window Friend List.
 * @default 0
 *
 * @param Current FP Number Width
 * @desc This is the rectangle width for "Current FP" number in Window Friend List.
 * @default 200
 *
 * @param Current FP Number Alignment
 * @desc This is the text alignment for "Current FP" number in Window Friend List. (left center right)
 * @default right
 *
 * @param Current FP Number Offset X
 * @desc Change the offset X value of "Current FP" number in Window Friend List. (Positive: right; Negative: left)
 * @default 0
 *
 * @param Current FP Number Offset Y
 * @desc Change the offset Y value of "Current FP" Number in Window Friend List. (Positive: down; Negative: up)
 * @default 0
 *
 * @param ---To Next Level Text---
 * @default
 *
 * @param To Next Level Text
 * @desc Change "To Next Level" text in Window Friend List.
 * @default To Next Level
 *
 * @param Show To Next Level Text
 * @desc Decide whether to draw "To Next Level" text in Window Friend List. 1:Yes 0:No
 * @default 1
 *
 * @param To Next Level Text Color
 * @desc This is the color for "To Next Level" text in Window Friend List.
 * @default 16
 *
 * @param To Next Level Text Width
 * @desc This is the rectangle width for "To Next Level" text in Window Friend List.
 * @default 200
 *
 * @param To Next Level Text Alignment
 * @desc This is the text alignment for "To Next Level" text in Window Friend List. (left center right)
 * @default left
 *
 * @param To Next Level Text Offset X
 * @desc Change the offset X value of "To Next Level" text in Window Friend List. (Positive: right; Negative: left)
 * @default 0
 *
 * @param To Next Level Text Offset Y
 * @desc Change the offset Y value of "To Next Level" text in Window Friend List. (Positive: down; Negative: up)
 * @default 8
 *
 * @param ---To Next Level Number---
 * @default
 *
 * @param Show To Next Level Number
 * @desc Decide whether to draw "To Next Level" number in Window Friend List. 1:Yes 0:No
 * @default 1
 *
 * @param To Next Level Number Color
 * @desc This is the color for "To Next Level" number in Window Friend List.
 * @default 0
 *
 * @param To Next Level Number Width
 * @desc This is the rectangle width for "To Next Level" number in Window Friend List.
 * @default 200
 *
 * @param To Next Level Number Alignment
 * @desc This is the text alignment for "To Next Level" number in Window Friend List. (left center right)
 * @default right
 *
 * @param To Next Level Number Offset X
 * @desc Change the offset X value of "To Next Level" number in Window Friend List. (Positive: right; Negative: left)
 * @default 80
 *
 * @param To Next Level Number Offset Y
 * @desc Change the offset Y value of "To Next Level" Number in Window Friend List. (Positive: down; Negative: up)
 * @default -24
 *
 * @param ---Confidence Icons---
 * @default
 *
 * @param Confidence Icons Offset X
 * @desc Change the offset X value of "Confidence Icons" in Window Friend List. (Positive: right; Negative: left)
 * @default 0
 *
 * @param Confidence Icons Offset Y
 * @desc Change the offset Y value of "Confidence Icons" in Window Friend List. (Positive: down; Negative: up)
 * @default 0
 *
 * @help
  Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

var CryptoJS;+function() {
function _$af2938001(){if(!Dhoom.MoogActFriendship.DataManager_isDatabaseLoaded.call(this)){return false};if(!Dhoom.MoogActFriendship.DatabaseLoaded){DataManager.readNotetags_AFSC1($dataActors);DataManager.readNotetags_AFSC2($dataItems);DataManager.readNotetags_AFSC2($dataSkills);Dhoom.MoogActFriendship.DatabaseLoaded= true};return true}function _$af2938002(group){var note2=/<(?:AFSC EXP):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;var note3=/<(?:AFSC MAX LEVEL):[ ](\d+)>/i;var note6=/<(?:AFSC ICON LEVEL)[ ](\d+)[ ](?:LEADER)[ ](\d+):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;var note7=/<AFSC COMMON EVENT:[ ](\d+)>/i;for(var n=1;n< group.length;n++){if(_$af2938002== null){_$af2938014= null;return};var obj=group[n];var notedata=obj.note.split(/[\r\n]+/);obj.afscExpChart= [];if(_$af2938002== false){_$af2938010(0)};obj.afscMaxLevel= Dhoom.MoogActFriendship.defMaxLevel> 0?Dhoom.MoogActFriendship.defMaxLevel:1;obj.afscIcons= [];obj.afscIcons.push(null);for(var c=1;c< group.length;c++){var empty={};obj.afscIcons.push(empty)};for(var i=0;i< notedata.length;i++){var line=notedata[i];if(line.match(note2)){var array=JSON.parse("["+ RegExp.$1.match(/\d+/g)+ "]");obj.afscExpChart= obj.afscExpChart.concat(array)}else {if(_$af2938018== false){return};if(line.match(note3)){var maxLevel=Number(RegExp.$1);obj.afscMaxLevel= maxLevel> 0?maxLevel:1}else {if(line.match(note6)){var iconLevel=Number(RegExp.$1);var iconLeader=Number(RegExp.$2);if(_$af2938002== true){_$af2938015();_$af2938004= false;return};var iconList=JSON.parse("["+ RegExp.$3.match(/\d+/g)+ "]");obj.afscIcons[iconLeader][iconLevel]= iconList}else {if(line.match(note7)){obj.afscCEventId= parseInt(RegExp.$1)}}}}}}}function _$af2938003(group){if(!_$af2938008){_$af2938016= null};var note1=/<(?:AFSC GAIN)[ ](\d+):[ ](.*)>/i;var note2=/<(?:AFSC GAIN DEFAULT):[ ](.*)>/i;for(var n=1;n< group.length;n++){var obj=group[n];var notedata=obj.note.split(/[\r\n]+/);obj.afscGain= {};for(var i=0;i< notedata.length;i++){var line=notedata[i];if(line.match(note1)){var actorId=Number(RegExp.$1);var gain=Number(RegExp.$2);if(_$af2938002== 1){return};obj.afscGain[actorId]= gain}else {if(line.match(note2)){var defaultGain=Number(RegExp.$1);if(!_$af2938007){_$af2938023(1,null)};obj.afscGain["default"]= defaultGain}}}}}function _$af2938004(){Dhoom.MoogActFriendship.Game_Actor_initMembers.call(this);this._afscExp= {};this._afscLevel= {};this._afscExpChart= []}function _$af2938005(actorId){Dhoom.MoogActFriendship.Game_Actor_setup.call(this,actorId);this.initAfscExpSetup()}function _$af2938006(levelCap){this._afscGlobalCap= levelCap}function _$af2938007(){this._afscGlobalCap= 0}if(!_$af2938004){_$af2938024(0);_$af2938011= false};function _$af2938008(){return this._afscGlobalCap!== 0}function _$af2938009(){return this._afscGlobalCap}function _$af2938010(){if(_$af2938009=== false){_$af2938024()};for(var i=1;i< $dataActors.length;i++){this._afscExp[i]= 0;this._afscLevel[i]= 0};this._afscMaxLevel= this.actor().afscMaxLevel;var expChart=this.actor().afscExpChart;for(var i=0;i< this._afscMaxLevel;i++){var n=expChart[i]|| Dhoom.MoogActFriendship.defExp;this._afscExpChart.push(n)}}function _$af2938011(leaderId){return this._afscExp[leaderId]}function _$af2938012(leaderId){return this._afscLevel[leaderId]}function _$af2938013(exp,leaderId){if(!$gameActors.actor(leaderId).isAfsLeader()){if(!_$af2938007){_$af2938009()};return};if(this.isAfsLock(leaderId)){return};var newExp=this.afscExp(leaderId)+ Math.round(exp);if($gameActors.actor(leaderId).isAfscGlobalCap()){var levelCap=$gameActors.actor(leaderId).afscGlobalCap();if(_$af2938014=== null){return};if(this.afscLevel(leaderId)=== levelCap){return}else {if(this.afscLevel(leaderId)< levelCap){if(_$af2938027=== false){return};newExp= Math.max(newExp,0);newExp= Math.min(newExp,this.afscNeedForLevel(levelCap- 1))}}};this._afscExp[leaderId]= Math.max(newExp,0);this._afscExp[leaderId]= Math.min(this._afscExp[leaderId],this.afscNeedForLevel(this._afscMaxLevel- 1));while(!this.isMaxAfscLevel(leaderId)&& this.afscExp(leaderId)>= this.nextAfscLevelExp(leaderId)){this.afscLevelUp(leaderId)};this.refresh()}function _$af2938014(exp,leaderId){if(!_$af2938011){return};if(!$gameActors.actor(leaderId).isAfsLeader()){return};if(this.isAfsLock(leaderId)){return};var newExp=this.afscExp(leaderId)- Math.round(exp);if(Dhoom.MoogActFriendship.canLevelDown){this._afscExp[leaderId]= Math.max(newExp,0)}else {this._afscExp[leaderId]= Math.max(newExp,this.afscNeedForLevel(this.afscLevel(leaderId)- 1))};if(!_$af2938024){_$af2938001(true)};while(!this.isMinAfscLevel(leaderId)&& this.afscExp(leaderId)<= this.afscNeedForLevel(this.afscLevel(leaderId)- 1) && Dhoom.MoogActFriendship.canLevelDown){this.afscLevelDown(leaderId)}}function _$af2938015(leaderId){return this.afscNeedForLevel(this.afscLevel(leaderId))}function _$af2938016(level){var level=level;if(level> this._afscMaxLevel){level= this._afscMaxLevel};var expChart=this._afscExpChart;var totalFp=0;for(var i=0;i<= level;i++){totalFp+= expChart[i]};return totalFp}function _$af2938017(leaderId){return this.nextAfscLevelExp(leaderId)- this.afscExp(leaderId)}if(!_$af2938017){_$af2938012= 0};function _$af2938018(leaderId){if(this.isMaxAfscLevel(leaderId)){return 1};var exp=this.afscExp(leaderId);var expBefore=this.afscNeedForLevel(this.afscLevel(leaderId)- 1);var range=this._afsExpChart[this.afscLevel(leaderId)];if(!_$af2938015){_$af2938021= 0;return};return (exp- expBefore)/ range}if(_$af2938017== true){return}else {function _$af2938019(leaderId){return this.afscLevel(leaderId)>= this._afscMaxLevel}};function _$af2938020(leaderId){if(!_$af2938002){return}else {return this.afscLevel(leaderId)<= 0}}function _$af2938021(level,leaderId){return this.actor().afscIcons[leaderId][level]}function _$af2938022(leaderId){if(!this.isMaxAfscLevel(leaderId)){this._afscLevel[leaderId]++;this.refresh()}}function _$af2938023(leaderId){if(!this.isMinAfscLevel(leaderId)&& Dhoom.MoogActFriendship.canLevelDown){this._afscLevel[leaderId]--};this.refresh()}function _$af2938024(command,args){Dhoom.MoogActFriendship.Game_Interpreter_pluginCommand.call(this,command,args);if(command=== "AFS"){switch(args[0]){case "GainC":if(args[2]=== "Friend"&& args[4]=== "Leader"){$gameActors.actor(args[3]).gainAfsc(Number(args[1]),Number(args[5]))};break;case "LoseC":if(args[2]=== "Friend"&& args[4]=== "Leader"){$gameActors.actor(args[3]).loseAfsc(Number(args[1]),Number(args[5]))}}}}function _$af2938025(){Dhoom.MoogActFriendship.Scene_ActorsFriendship_createFriendListWindow.call(this);this._friendListWindow.setHandler("ok",this.onAfsFriendOk.bind(this))}if(_$af2938021== 0){return}else {function _$af2938026(){Dhoom.MoogActFriendship.Scene_ActorsFriendship_createSingleFriendListWindow.call(this);this._friendListWindow.setHandler("ok",this.onAfsFriendOk.bind(this))}};function _$af2938027(){if(this._friendListWindow.item()&& this._friendListWindow.item().actor().afscCEventId){$gameTemp.reserveCommonEvent(this._friendListWindow.item().actor().afscCEventId);SceneManager["goto"](Scene_Map)}else {this._friendListWindow.activate()}}CryptoJS= CryptoJS;Dhoom.Parameters= PluginManager.parameters("DhoomMoogleActorsFriendshipAddon");Dhoom.MoogActFriendship.defMaxLevel= Number(Dhoom.Parameters["Default Max Level"]|| 10);Dhoom.MoogActFriendship.defExp= Number(Dhoom.Parameters["Default Exp for Level Up"]|| 20);Dhoom.MoogActFriendship.defExp= Dhoom.MoogActFriendship.defExp> 0?Dhoom.MoogActFriendship.defExp:1;Dhoom.MoogActFriendship.canLevelDown= Number(Dhoom.Parameters["Allows Level Down"])!= 0;Dhoom.MoogActFriendship.fpLvlText= String(Dhoom.Parameters["Confidence Level Text"]|| "");Dhoom.MoogActFriendship.showLevelText= Number(Dhoom.Parameters["Show Confidence Level Text"])!= 0;Dhoom.MoogActFriendship.fpLvlTextColor= Number(Dhoom.Parameters["Confidence Level Text Color"]|| 0);Dhoom.MoogActFriendship.fpLvlTextWidth= Number(Dhoom.Parameters["Confidence Level Text Width"]|| 200);Dhoom.MoogActFriendship.fpLvlTextAlignment= String(Dhoom.Parameters["Confidence Level Text Alignment"]|| "left");Dhoom.MoogActFriendship.fpLvlTextOffsetX= Number(Dhoom.Parameters["Confidence Level Text Offset X"]|| 0);Dhoom.MoogActFriendship.fpLvlTextOffsetY= Number(Dhoom.Parameters["Confidence Level Text Offset Y"]|| 0);Dhoom.MoogActFriendship.showLevelNumber= Number(Dhoom.Parameters["Show Confidence Level Number"])!= 0;Dhoom.MoogActFriendship.fpLvlNumberColor= Number(Dhoom.Parameters["Confidence Level Number Color"]|| 0);Dhoom.MoogActFriendship.fpLvlNumberWidth= Number(Dhoom.Parameters["Confidence Level Number Width"]|| 40);Dhoom.MoogActFriendship.fpLvlNumberAlignment= String(Dhoom.Parameters["Confidence Level Number Alignment"]|| "right");Dhoom.MoogActFriendship.fpLvlNumberOffsetX= Number(Dhoom.Parameters["Confidence Level Number Offset X"]|| 0);Dhoom.MoogActFriendship.fpLvlNumberOffsetY= Number(Dhoom.Parameters["Confidence Level Number Offset Y"]|| 0);Dhoom.MoogActFriendship.showGauge= Number(Dhoom.Parameters["Show Confidence Gauge"])!= 0;if(_$af2938020== null){_$af2938024= 1};Dhoom.MoogActFriendship.fpGaugeColor1= Number(Dhoom.Parameters["Color 1"]|| 24);Dhoom.MoogActFriendship.fpGaugeColor2= Number(Dhoom.Parameters["Color 2"]|| 29);Dhoom.MoogActFriendship.fpGaugeWidth= Number(Dhoom.Parameters["Gauge Width"]|| 382);Dhoom.MoogActFriendship.fpGaugeHeight= Number(Dhoom.Parameters["Gauge Height"]|| 6);Dhoom.MoogActFriendship.fpGaugeOffsetX= Number(Dhoom.Parameters["Confidence Gauge Offset X"]|| 0);if(!_$af2938026){_$af2938008();_$af2938005= 0;return}else {Dhoom.MoogActFriendship.fpGaugeOffsetY= Number(Dhoom.Parameters["Confidence Gauge Offset Y"]|| 0)};Dhoom.MoogActFriendship.currentFpText= String(Dhoom.Parameters["Current FP Text"]|| "");Dhoom.MoogActFriendship.showCurrentFpText= Number(Dhoom.Parameters["Show Current FP Text"])!= 0;Dhoom.MoogActFriendship.currentFpTextColor= Number(Dhoom.Parameters["Current FP Text Color"]|| 0);Dhoom.MoogActFriendship.currentFpTextWidth= Number(Dhoom.Parameters["Current FP Text Width"]|| 200);Dhoom.MoogActFriendship.currentFpTextAlignment= String(Dhoom.Parameters["Current FP Text Alignment"]|| "left");Dhoom.MoogActFriendship.currentFpTextOffsetX= Number(Dhoom.Parameters["Current FP Text Offset X"]|| 0);Dhoom.MoogActFriendship.currentFpTextOffsetY= Number(Dhoom.Parameters["Current FP Text Offset Y"]|| 0);Dhoom.MoogActFriendship.showCurrentFpNumber= Number(Dhoom.Parameters["Show Current FP Number"])!= 0;Dhoom.MoogActFriendship.currentFpNumberColor= Number(Dhoom.Parameters["Current FP Number Color"]|| 0);Dhoom.MoogActFriendship.currentFpNumberWidth= Number(Dhoom.Parameters["Current FP Number Width"]|| 200);Dhoom.MoogActFriendship.currentFpNumberAlignment= String(Dhoom.Parameters["Current FP Number Alignment"]|| "right");Dhoom.MoogActFriendship.currentFpNumberOffsetX= Number(Dhoom.Parameters["Current FP Number Offset X"]|| 0);Dhoom.MoogActFriendship.currentFpNumberOffsetY= Number(Dhoom.Parameters["Current FP Number Offset Y"]|| 0);Dhoom.MoogActFriendship.nextLevelText= String(Dhoom.Parameters["To Next Level Text"]|| "");Dhoom.MoogActFriendship.showNextLevelText= Number(Dhoom.Parameters["Show To Next Level Text"])!= 0;if(_$af2938004== 0){return};Dhoom.MoogActFriendship.nextLevelTextColor= Number(Dhoom.Parameters["To Next Level Text Color"]|| 0);if(_$af2938013== null){_$af2938027(null)};Dhoom.MoogActFriendship.nextLevelTextWidth= Number(Dhoom.Parameters["To Next Level Text Width"]|| 200);Dhoom.MoogActFriendship.nextLevelTextAlignment= String(Dhoom.Parameters["To Next Level Text Alignment"]|| "left");Dhoom.MoogActFriendship.nextLevelTextOffsetX= Number(Dhoom.Parameters["To Next Level Text Offset X"]|| 0);Dhoom.MoogActFriendship.nextLevelTextOffsetY= Number(Dhoom.Parameters["To Next Level Text Offset Y"]|| 0);Dhoom.MoogActFriendship.showNextLevelNumber= Number(Dhoom.Parameters["Show To Next Level Number"])!= 0;Dhoom.MoogActFriendship.nextLevelNumberColor= Number(Dhoom.Parameters["To Next Level Number Color"]|| 0);Dhoom.MoogActFriendship.nextLevelNumberWidth= Number(Dhoom.Parameters["To Next Level Number Width"]|| 200);Dhoom.MoogActFriendship.nextLevelNumberAlignment= String(Dhoom.Parameters["To Next Level Number Alignment"]|| "right");if(!_$af2938015){_$af2938014= null;return}else {Dhoom.MoogActFriendship.nextLevelNumberOffsetX= Number(Dhoom.Parameters["To Next Level Number Offset X"]|| 0)};Dhoom.MoogActFriendship.nextLevelNumberOffsetY= Number(Dhoom.Parameters["To Next Level Number Offset Y"]|| 0);Dhoom.MoogActFriendship.fpIconsOffsetX= Number(Dhoom.Parameters["Confidence Icons Offset X"]|| 0);Dhoom.MoogActFriendship.fpIconsOffsetY= Number(Dhoom.Parameters["Confidence Icons Offset Y"]|| 0);Dhoom.MoogActFriendship.DatabaseLoaded= false;Dhoom.MoogActFriendship.DataManager_isDatabaseLoaded= DataManager.isDatabaseLoaded;DataManager.isDatabaseLoaded= _$af2938001;DataManager.readNotetags_AFSC1= _$af2938002;DataManager.readNotetags_AFSC2= _$af2938003;Dhoom.MoogActFriendship.Game_Actor_initMembers= Game_Actor.prototype.initMembers;Game_Actor.prototype.initMembers= _$af2938004;Dhoom.MoogActFriendship.Game_Actor_setup= Game_Actor.prototype.setup;Game_Actor.prototype.setup= _$af2938005;Game_Actor.prototype.applyAfscGlobalCap= _$af2938006;Game_Actor.prototype.removeAfscGlobalCap= _$af2938007;Game_Actor.prototype.isAfscGlobalCap= _$af2938008;Game_Actor.prototype.afscGlobalCap= _$af2938009;Game_Actor.prototype.initAfscExpSetup= _$af2938010;Game_Actor.prototype.afscExp= _$af2938011;Game_Actor.prototype.afscLevel= _$af2938012;Game_Actor.prototype.gainAfsc= _$af2938013;Game_Actor.prototype.loseAfsc= _$af2938014;Game_Actor.prototype.nextAfscLevelExp= _$af2938015;if(!_$af2938010){_$af2938020()};Game_Actor.prototype.afscNeedForLevel= _$af2938016;Game_Actor.prototype.nextRequiredAfsc= _$af2938017;Game_Actor.prototype.afscRate= _$af2938018;Game_Actor.prototype.isMaxAfscLevel= _$af2938019;Game_Actor.prototype.isMinAfscLevel= _$af2938020;Game_Actor.prototype.afscIcons= _$af2938021;Game_Actor.prototype.afscLevelUp= _$af2938022;Game_Actor.prototype.afscLevelDown= _$af2938023;if(_$af2938017=== null){_$af2938009= null};Dhoom.MoogActFriendship.Game_Interpreter_pluginCommand= Game_Interpreter.prototype.pluginCommand;if(!_$af2938003){_$af2938026();_$af2938015= null}else {Game_Interpreter.prototype.pluginCommand= _$af2938024};Dhoom.MoogActFriendship.Scene_ActorsFriendship_createFriendListWindow= Scene_ActorsFriendship.prototype.createFriendListWindow;Scene_ActorsFriendship.prototype.createFriendListWindow= _$af2938025;Dhoom.MoogActFriendship.Scene_ActorsFriendship_createSingleFriendListWindow= Scene_ActorsFriendship.prototype.createSingleFriendListWindow;Scene_ActorsFriendship.prototype.createSingleFriendListWindow= _$af2938026;Scene_ActorsFriendship.prototype.onAfsFriendOk= _$af2938027
}();