//=============================================================================
// DhoomAccuracyMinigame.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_AccuracyMinigame = true;

var Dhoom = Dhoom || {};
Dhoom.AccuracyMinigame = Dhoom.AccuracyMinigame || {};
/*:
 * @plugindesc Dhoom AccuracyMinigame v1.0
 * @author Dhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Settings
 * @desc Minigame settings.
 * @type struct<minigameSetting>[]
 * @default ["{\"name\":\"Basket Ball\",\"successVar\":\"11\",\"failVar\":\"12\",\"x\":\"-264\",\"y\":\"-228\",\"filename\":\"basketball fail1\",\"successFilename\":\"{\\\"filename\\\":\\\"basketball score%1\\\",\\\"maxFrame\\\":\\\"18\\\",\\\"framerate\\\":\\\"5\\\"}\",\"failFilename\":\"{\\\"filename\\\":\\\"basketball fail%1\\\",\\\"maxFrame\\\":\\\"18\\\",\\\"framerate\\\":\\\"5\\\"}\",\"barBackground\":\"{\\\"x\\\":\\\"84\\\",\\\"y\\\":\\\"516\\\",\\\"filename\\\":\\\"accuracy background\\\"}\",\"barSetting\":\"{\\\"x\\\":\\\"96\\\",\\\"y\\\":\\\"528\\\",\\\"width\\\":\\\"624\\\",\\\"height\\\":\\\"24\\\",\\\"filename\\\":\\\"accuracy bar\\\",\\\"alignment\\\":\\\"horizontal\\\"}\",\"pointerSetting\":\"{\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"-14\\\",\\\"filename\\\":\\\"accuracy pointer\\\"}\",\"attemptGraphicSetting\":\"{\\\"x\\\":\\\"519\\\",\\\"y\\\":\\\"18\\\",\\\"alignment\\\":\\\"horizontal\\\",\\\"spacing\\\":\\\"84\\\",\\\"incoming\\\":\\\"basketball attempt next\\\",\\\"current\\\":\\\"basketball attempt current\\\",\\\"success\\\":\\\"basketball attempt success\\\",\\\"fail\\\":\\\"basketball attempt fail\\\"}\",\"attemptSetting\":\"{\\\"max\\\":\\\"3\\\",\\\"pointerSpeed\\\":\\\"[\\\\\\\"3.00\\\\\\\",\\\\\\\"5.00\\\\\\\",\\\\\\\"8.00\\\\\\\"]\\\",\\\"barSize\\\":\\\"[\\\\\\\"200\\\\\\\",\\\\\\\"150\\\\\\\",\\\\\\\"50\\\\\\\"]\\\"}\",\"hitSe\":\"{\\\"name\\\":\\\"Wind1\\\",\\\"volume\\\":\\\"100\\\",\\\"pitch\\\":\\\"100\\\",\\\"pan\\\":\\\"0\\\"}\",\"successSe\":\"{\\\"name\\\":\\\"Applause1\\\",\\\"volume\\\":\\\"100\\\",\\\"pitch\\\":\\\"100\\\",\\\"pan\\\":\\\"0\\\"}\",\"failSe\":\"{\\\"name\\\":\\\"Disappointment\\\",\\\"volume\\\":\\\"100\\\",\\\"pitch\\\":\\\"100\\\",\\\"pan\\\":\\\"0\\\"}\"}"]
 *
 * @help
   Boner Games © 2018 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

/*~struct~minigameSetting:
@param name
@text Name
@desc Minigame name, used in plugin command.

@param successVar
@text Success Variable
@desc Variable for storing successful attempt.
@type variable

@param failVar
@text Fail Variable
@desc Variable for storing failed attempt.
@type variable

@param x
@text X Position
@desc X position from event.
@type number
@min -99999
@max 99999

@param y
@text Y Position
@desc Y position from event.
@type number
@min -99999
@max 99999

@param filename
@text Filename
@desc Graphics that will be displayed on the event.
@type file
@dir img/pictures/

@param successFilename
@text Success Filename
@desc Graphics that will be displayed when the player successfully hit the bar.
@type struct<frameSetting>

@param failFilename
@text Fail Filename
@desc Graphics that will be displayed when the player unsuccessfully hit the bar.
@type struct<frameSetting>

@param barBackground
@text Bar Background
@type struct<barBackgroundSetting>

@param barSetting
@text Bar Setting
@type struct<barSetting>

@param pointerSetting
@text Pointer Setting
@type struct<pointerSetting>

@param attemptGraphicSetting
@text Attempt Graphic Setting
@type struct<attemptGraphicSetting>

@param attemptSetting
@text Attempt Setting
@type struct<attemptSetting>

@param hitSe
@text Hit SE
@desc SE that will be played when the player trigger the button.
@type struct<seSetting>

@param successSe
@text Success SE
@type struct<seSetting>

@param failSe
@text Fail SE
@type struct<seSetting>
*/

/*~struct~frameSetting:
@param filename
@text Filename
@desc %1 = Frame

@param maxFrame
@text Max Frame
@desc Maximum frame.
@type number
@min 1

@param framerate
@text Framerate
@desc How long for each frame to last.
@type number
*/

/*~struct~barSetting:
@param x
@text X Position
@type number
@min -99999

@param y
@text Y Position
@type number
@min -99999

@param width
@text Width
@type number

@param height
@text Height
@type number

@param filename
@text Filename
@type file
@dir img/pictures/

@param alignment
@text Alignment
@type select
@option Horizontal
@value horizontal
@option Vertical
@value vertical
*/

/*~struct~barBackgroundSetting:
@param x
@text X Position
@type number
@min -99999

@param y
@text Y Position
@type number
@min -99999

@param filename
@text Filename
@type file
@dir img/pictures/
*/

/*~struct~pointerSetting:
@param x
@text X Position
@type number
@min -99999

@param y
@text Y Position
@type number
@min -99999

@param filename
@text Filename
@type file
@dir img/pictures/
*/

/*~struct~attemptGraphicSetting:
@param x
@text X Position
@type number
@min -99999

@param y
@text Y Position
@type number
@min -99999

@param alignment
@text Alignment
@type select
@option Horizontal
@value horizontal
@option Vertical
@value vertical

@param spacing
@text Spacing
@desc Spacing between each sprite.
@type number
@min -99999

@param incoming
@text Incoming Filename
@desc Filename for incoming attempt.
@type file
@dir img/pictures/

@param current
@text Current Filename
@desc Filename for current attempt.
@type file
@dir img/pictures/

@param success
@text Success Filename
@desc Filename for successful attempt.
@type file
@dir img/pictures/

@param fail
@text Fail Filename
@desc Filename for failed attempt.
@type file
@dir img/pictures/
*/

/*~struct~attemptSetting:
@param max
@text Max Attempt
@type number
@min 1

@param pointerSpeed
@text Pointer Speed
@desc Pointer speed for each attempt.
@type number[]
@decimals 2
@min 0.01

@param barSize
@text Bar Size
@desc Bar size for each attempt.
@type number[]
@min 1
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
@min 0
@default 100

@param pitch
@text Pitch
@type number
@max 150
@min 50
@default 100

@param pan
@text Pan
@type number
@max 100
@min -100
@default 0
*/

var Spriteset_AccuracyMinigame;+function() {
function _$af868222(string){try{return JSON.parse(string,function(key,value){try{return this.jsonParse(value)}catch(e){return value}}.bind(this))}catch(e){return string}}function _$af868224(sym){return Dhoom.jsonParse(Dhoom.Parameters[sym])}function _$af868225(name){for(var i=0;i< this.settings.length;i++){if(this.settings[i].name=== name){return this.settings[i]}}}function _$af868226(){Dhoom.AccuracyMinigame.Game_Event_setupPageSettings.call(this);if(this._lastAccuracyMinigamePage!== this.page()){this.resetAccuracyMinigameParams();this.AccuracyMinigameScan();this.refresh()}}function _$af868227(){this._lastAccuracyMinigamePage= this.page();this._accuracyMinigameSetting= null}function _$af868228(){var page=this.page();for(var i=0;i< page.list.length;i++){var command=page.list[i];if(command.code=== 356){if(command.parameters[0].match(/AccuracyMinigame[ ](.+)/i)){this._accuracyMinigameSetting= Dhoom.AccuracyMinigame.searchSettingWithName(RegExp.$1)}}}}function _$af868229(setting){if(setting){this._accuracyMinigameSettingData= setting;this._accuracyMinigameAttempt= 0;this._accuracyMinigameSuccess= 0;this._accuracyMinigameFail= 0;this._accuracyMinigameResult= [];this._accuracyMinigameFramewait= 0;this._accuracyMinigameFrame= 0;this._accuracyMinigameFrameName= null;this._accuracyMinigamePointerDir= Math.randomInt(2);this._accuracyMinigamePointerPos= Math.randomInt(setting.barSetting.alignment=== "horizontal"?setting.barSetting.width:setting.barSetting.height);for(var i=1;i<= setting.successFilename.maxFrame;i++){ImageManager.loadPicture(setting.successFilename.filename.format(i))};for(i= 1;i<= setting.failFilename.maxFrame;i++){ImageManager.loadPicture(setting.failFilename.filename.format(i))}}}function _$af868230(){if(this._accuracyMinigameSettingData){$gameVariables.setValue(this._accuracyMinigameSettingData.successVar,this._accuracyMinigameSuccess);$gameVariables.setValue(this._accuracyMinigameSettingData.failVar,this._accuracyMinigameFail);this._accuracyMinigameSettingData= null}}function _$af868231(sceneActive){Dhoom.AccuracyMinigame.Game_Player_update.call(this,sceneActive);this.updateAccuracyMinigame()}function _$af868232(){if(this._accuracyMinigameSettingData){var setting=this._accuracyMinigameSettingData;if(this._accuracyMinigameWaitForResult){var spriteSetting=this._accuracyMinigameResult[this._accuracyMinigameAttempt]?setting.successFilename:setting.failFilename;if(this._accuracyMinigameFramewait> 0){this._accuracyMinigameFramewait--}else {this._accuracyMinigameFramewait= spriteSetting.framerate;this._accuracyMinigameFrame++;if(this._accuracyMinigameFrame> spriteSetting.maxFrame){this._accuracyMinigameFrameName= null;if(this._accuracyMinigameResult[this._accuracyMinigameAttempt]){AudioManager.playSe(setting.successSe)}else {AudioManager.playSe(setting.failSe)};this._accuracyMinigamePointerDir=  !Boolean(this._accuracyMinigamePointerDir);this._accuracyMinigamePointerPos= Math.randomInt(setting.barSetting.alignment=== "horizontal"?setting.barSetting.width:setting.barSetting.height);this._accuracyMinigameAttempt++;this._accuracyMinigameWaitForResult= false;if(this._accuracyMinigameAttempt>= setting.attemptSetting.max){this.endAccuracyMinigame()}}else {this._accuracyMinigameFrameName= spriteSetting.filename.format(this._accuracyMinigameFrame)}}}else {var speed=setting.attemptSetting.pointerSpeed[this._accuracyMinigameAttempt];var width=setting.barSetting.alignment=== "horizontal"?setting.barSetting.width:setting.barSetting.height;if(Input.isTriggered("ok")|| TouchInput.isTriggered()){Input.update();TouchInput.update();var size=setting.attemptSetting.barSize[this._accuracyMinigameAttempt];var tx=setting.barSetting.alignment=== "horizontal"?(setting.barSetting.width- size)/ 2:(setting.barSetting.height- size)/ 2;var sx=this._accuracyMinigamePointerPos;if(sx>= tx&& sx< tx+ size){this._accuracyMinigameResult.push(1);this._accuracyMinigameSuccess++}else {this._accuracyMinigameResult.push(0);this._accuracyMinigameFail++};AudioManager.playSe(setting.hitSe);this._accuracyMinigameWaitForResult= true;this._accuracyMinigameFrame= 0}else {if(this._accuracyMinigamePointerDir){this._accuracyMinigamePointerPos+= speed;if(this._accuracyMinigamePointerPos>= width){this._accuracyMinigamePointerPos= width;this._accuracyMinigamePointerDir= 0}}else {this._accuracyMinigamePointerPos-= speed;if(this._accuracyMinigamePointerPos<= 0){this._accuracyMinigamePointerPos= 0;this._accuracyMinigamePointerDir= 1}}}}}}function _$af868233(){return Dhoom.AccuracyMinigame.Game_Message_isBusy.call(this)|| $gamePlayer._accuracyMinigameSettingData}function _$af868234(command,args){Dhoom.AccuracyMinigame.Game_Interpreter_pluginCommand.call(this,command,args);if(command.toLowerCase()=== "accuracyminigame"){var name=args.join(" ");var setting=Dhoom.AccuracyMinigame.searchSettingWithName(name);if(setting){$gamePlayer.startAccuracyMinigame(setting);this.setWaitMode("message")}}}function _$af868235(){this.updateAccuracyMinigame();Dhoom.AccuracyMinigame.Sprite_Character_updateBitmap.call(this)}function _$af868236(){this._accuracyMinigameSetting= this._character._accuracyMinigameSetting;if(this._accuracyMinigameSetting){if(!this._accuracyMinigameSprite){this._accuracyMinigameSprite=  new Sprite();this.parent.addChildAt(this._accuracyMinigameSprite,this.parent.children.indexOf(this)- 1)};this._accuracyMinigameSprite.bitmap= ImageManager.loadPicture($gamePlayer._accuracyMinigameFrameName?$gamePlayer._accuracyMinigameFrameName:this._accuracyMinigameSetting.filename)}else {this.parent.removeChild(this._accuracyMinigameSprite);this._accuracyMinigameSprite= null}}function _$af868237(){Dhoom.AccuracyMinigame.Sprite_Character_updatePosition.call(this);if(this._accuracyMinigameSprite){this.updateAccuracyMinigameSpritePosition()}}function _$af868238(){this._accuracyMinigameSprite.x= this._accuracyMinigameSetting.x+ this.x;this._accuracyMinigameSprite.y= this._accuracyMinigameSetting.y+ this.y;this._accuracyMinigameSprite.z= this.z- 1}function _$af868239(){this.initialize.apply(this,arguments)}function _$af868240(){Sprite.prototype.initialize.call(this);this.createBarSprites();this.createAttemptSprites()}function _$af868241(){this._barBackground=  new Sprite();this.addChild(this._barBackground);this._barSprite=  new TilingSprite();this.addChild(this._barSprite);this._pointerSprite=  new Sprite();this._pointerSprite.anchor.x= 0.5;this._pointerSprite.anchor.y= 0.5;this.addChild(this._pointerSprite)}function _$af868242(){this._attemptSprites= []}function _$af868243(){Sprite.prototype.update.call(this);this.updateSprites()}function _$af868244(){if(this._accuracyMinigameSetting!== $gamePlayer._accuracyMinigameSettingData){this._accuracyMinigameSetting= $gamePlayer._accuracyMinigameSettingData;this.clearSprites();this.setupSprites()};if(this._accuracyMinigameSetting){var setting=this._accuracyMinigameSetting;var alignment=setting.barSetting.alignment;var width=alignment=== "horizontal"?setting.attemptSetting.barSize[$gamePlayer._accuracyMinigameAttempt]:setting.barSetting.width;var height=alignment=== "vertical"?setting.attemptSetting.barSize[$gamePlayer._accuracyMinigameAttempt]:setting.barSetting.height;this._barSprite.move(setting.barSetting.x+ (setting.barSetting.width- width)/ 2,setting.barSetting.y+ (setting.barSetting.height- height)/ 2,width,height);if(alignment=== "horizontal"){this._pointerSprite.x= setting.barSetting.x+ setting.pointerSetting.x+ $gamePlayer._accuracyMinigamePointerPos}else {this._pointerSprite.y= setting.barSetting.y+ setting.pointerSetting.y+ $gamePlayer._accuracyMinigamePointerPos};this.updateAttemptSprites()}}function _$af868245(){var setting=this._accuracyMinigameSetting.attemptGraphicSetting;var alignment=setting.alignment;for(var i=0;i< this._attemptSprites.length;i++){this._attemptSprites[i].x= setting.x+ (alignment=== "horizontal"?i* setting.spacing:0);this._attemptSprites[i].y= setting.y+ (alignment=== "vertical"?i* setting.spacing:0);var filename;if(i=== $gamePlayer._accuracyMinigameAttempt){filename= setting.current}else {if(i< $gamePlayer._accuracyMinigameAttempt){filename= $gamePlayer._accuracyMinigameResult[i]?setting.success:setting.fail}else {filename= setting.incoming}};this._attemptSprites[i].bitmap= ImageManager.loadPicture(filename)}}function _$af868246(){this._barBackground.bitmap= null;this._barSprite.bitmap= null;this._pointerSprite.bitmap= null;for(var i=0;i< this._attemptSprites.length;i++){this.removeChild(this._attemptSprites[i])};this._attemptSprites= []}function _$af868247(){if(this._accuracyMinigameSetting){var setting=this._accuracyMinigameSetting;this._barBackground.bitmap= ImageManager.loadPicture(setting.barBackground.filename);this._barBackground.x= setting.barBackground.x;this._barBackground.y= setting.barBackground.y;this._barSprite.bitmap= ImageManager.loadPicture(setting.barSetting.filename);this._barSprite.move(setting.barSetting.x,setting.barSetting.y,setting.barSetting.width,setting.barSetting.height);this._pointerSprite.bitmap= ImageManager.loadPicture(setting.pointerSetting.filename);this._pointerSprite.x= this._barSprite.x+ setting.pointerSetting.x;this._pointerSprite.y= this._barSprite.y+ setting.pointerSetting.y;for(var i=0;i< setting.attemptSetting.max;i++){var sprite= new Sprite();sprite.bitmap= ImageManager.loadPicture(setting.attemptGraphicSetting.incoming);this.addChild(sprite);this._attemptSprites.push(sprite)}}}function _$af868248(){Dhoom.AccuracyMinigame.Spriteset_Map_createUpperLayer.call(this);this.createAccuracyMinigameSpriteset()}function _$af868249(){this._accuracyMinigameSpriteset=  new _$af868239();this.addChildAt(this._accuracyMinigameSpriteset,this.children.indexOf(this._flashSprite)- 1)}Spriteset_AccuracyMinigame= _$af868239;Dhoom.Parameters= PluginManager.parameters("DhoomAccuracyMinigame");if(!Dhoom.jsonParse){Dhoom.jsonParse= _$af868222};if(!Dhoom.loadParam){Dhoom.loadParam= _$af868224};Dhoom.AccuracyMinigame.settings= Dhoom.loadParam("Settings");Dhoom.AccuracyMinigame.searchSettingWithName= _$af868225;Dhoom.AccuracyMinigame.Game_Event_setupPageSettings= Game_Event.prototype.setupPageSettings;Game_Event.prototype.setupPageSettings= _$af868226;Game_Event.prototype.resetAccuracyMinigameParams= _$af868227;Game_Event.prototype.AccuracyMinigameScan= _$af868228;Game_Player.prototype.startAccuracyMinigame= _$af868229;Game_Player.prototype.endAccuracyMinigame= _$af868230;Dhoom.AccuracyMinigame.Game_Player_update= Game_Player.prototype.update;Game_Player.prototype.update= _$af868231;Game_Player.prototype.updateAccuracyMinigame= _$af868232;Dhoom.AccuracyMinigame.Game_Message_isBusy= Game_Message.prototype.isBusy;Game_Message.prototype.isBusy= _$af868233;Dhoom.AccuracyMinigame.Game_Interpreter_pluginCommand= Game_Interpreter.prototype.pluginCommand;Game_Interpreter.prototype.pluginCommand= _$af868234;Dhoom.AccuracyMinigame.Sprite_Character_updateBitmap= Sprite_Character.prototype.updateBitmap;Sprite_Character.prototype.updateBitmap= _$af868235;Sprite_Character.prototype.updateAccuracyMinigame= _$af868236;Dhoom.AccuracyMinigame.Sprite_Character_updatePosition= Sprite_Character.prototype.updatePosition;Sprite_Character.prototype.updatePosition= _$af868237;Sprite_Character.prototype.updateAccuracyMinigameSpritePosition= _$af868238;_$af868239.prototype= Object.create(Sprite.prototype);_$af868239.prototype.constructor= _$af868239;_$af868239.prototype.initialize= _$af868240;_$af868239.prototype.createBarSprites= _$af868241;_$af868239.prototype.createAttemptSprites= _$af868242;_$af868239.prototype.update= _$af868243;_$af868239.prototype.updateSprites= _$af868244;_$af868239.prototype.updateAttemptSprites= _$af868245;_$af868239.prototype.clearSprites= _$af868246;_$af868239.prototype.setupSprites= _$af868247;Dhoom.AccuracyMinigame.Spriteset_Map_createUpperLayer= Spriteset_Map.prototype.createUpperLayer;Spriteset_Map.prototype.createUpperLayer= _$af868248;Spriteset_Map.prototype.createAccuracyMinigameSpriteset= _$af868249
}();