//=============================================================================
// DhoomHurdleMinigame.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_HurdleMinigame = true;

var Dhoom = Dhoom || {};
Dhoom.HurdleMinigame = Dhoom.HurdleMinigame || {};
/*:
 * @plugindesc Dhoom HurdleMinigame v1.0
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Result Switch ID
 * @desc Switch ID for storing the last game result.
 * @default 1
 * @type switch
 * @parent General
 * 
 * @param Default Value
 * 
 * @param Scroll Speed
 * @type number
 * @min 1
 * @default 4
 * @parent Default Value
 * 
 * @param Jump Distance
 * @type number
 * @min 1
 * @parent Default Value
 * @default 96
 * 
 * @param Jump Height
 * @type number
 * @min 1
 * @default 64
 * @parent Default Value
 * 
 * @param Obstacle Amount
 * @desc How many obstacle that the player has to pass.
 * @min 1
 * @default 20
 * @parent Default Value
 * 
 * @param Minimum Distance
 * @desc Minimum distance between each obstacles.
 * @type number
 * @min 1
 * @default 96
 * @parent Default Value
 * 
 * @param Maximum Distance
 * @desc Maximum distance between each obstacles.
 * @type number
 * @min 1
 * @default 480
 * @parent Default Value
 * 
 * @param Appearance
 * 
 * @param Scene Background
 * @desc Filename for scene background.
 * @type file
 * @dir img/numbergame/
 * @default hurdle menu bg
 * @parent Appearance
 * 
 * @param Background Setting
 * @type struct<backgroundSetting>
 * @default {"x":"0","y":"192","width":"816","height":"240","filename":"hurdle bg"}
 * @parent Appearance
 * 
 * @param Status Setting
 * @type struct<statusSetting>
 * @default {"x":"78","y":"565","filename":"hurdle status bg","cursorX":"0","cursorY":"-6","cursorFilename":"hurdle status cursor"}
 * @parent Appearance
 * 
 * @param Character Setting
 * @type struct<characterSetting>
 * @default {"x":"408","y":"312","frame":"4","frameDuration":"8","run":"hurdle run","runCollision":"hurdle run collision","jump":"hurdle jump","jumpCollision":"hurdle jump collision"}
 * @parent Appearance
 * 
 * @param Obstacle Setting
 * @type struct<obstacleSetting>
 * @default {"y":"250","filename":"hurdle pole","collision":"hurdle pole collision"}
 * @parent Appearance
 * 
 * @param Win Setting
 * @type struct<imageSetting>
 * @default {"x":"0","y":"0","name":"hurdle win background"}
 * @parent Appearance
 * 
 * @param Lose Setting
 * @type struct<imageSetting>
 * @default {"x":"0","y":"0","name":"hurdle lose background"}
 * @parent Appearance
 * 
 * @param Sound
 * 
 * @param Jump SE
 * @type struct<seSetting>
 * @parent Sound
 * @default {"name":"Jump1","volume":"90","pitch":"100","pan":"0"}
 * 
 * @param Win ME
 * @type struct<meSetting>
 * @parent Sound
 * @default {"name":"Fanfare2","volume":"90","pitch":"100","pan":"0"}
 * 
 * @param Lose ME
 * @type struct<meSetting>
 * @parent Sound
 * @default {"name":"Curse1","volume":"90","pitch":"100","pan":"0"}
 *
 * @help
    Boner Games © 2018 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

/*~struct~statusSetting:
@param x
@text X Position
@type number
@min -999999
@max 999999
@default 0

@param y
@text Y Position
@type number
@min -999999
@max 999999
@default 0

@param filename
@text Background Filename
@type file
@dir img/numbergame/
@default

@param cursorX
@text Cursor X Position
@type number
@min -999999
@max 999999
@default 0

@param cursorY
@text Cursor Y Position
@type number
@min -999999
@max 999999
@default 0

@param cursorFilename
@text Cursor Filename
@type file
@dir img/numbergame/
@default
*/

/*~struct~imageSetting:
@param x
@text X Position
@type number
@min -999999
@max 999999
@default 0

@param y
@text Y Position
@type number
@min -999999
@max 999999
@default 0

@param name
@text Filename
@type file
@dir img/numbergame/
@default
*/

/*~struct~seSetting:
@param name
@text Filename
@type file
@dir audio/se/

@param volume
@text Volume
@type number
@min 0
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
@min 0
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

/*~struct~backgroundSetting:
@param x
@text X Position
@type number
@min -999999
@max 999999
@default 

@param y
@text Y Position
@type number
@min -999999
@max 999999
@default 

@param width
@text Width
@type number
@min 1
@max 999999
@default 

@param height
@text Height
@type number
@min 1
@max 999999
@default 

@param filename
@text Filename
@type file
@dir img/numbergame/
*/

/*~struct~characterSetting:
@param x
@text X Position
@type number
@min -999999
@max 999999
@default 

@param y
@text Y Position
@type number
@min -999999
@max 999999
@default 

@param frame
@text Total Frame
@desc Total frame of Running sprite.
@type number
@min 1

@param frameDuration
@text Frame Wait Duration
@desc Wait duration for each running sprite frame.
@desc Wait duration in frame.
@type number
@min 0

@param run
@text Run Filename
@type file
@dir img/numbergame/

@param runCollision
@text Run Collision Filename
@type file
@dir img/numbergame/

@param jump
@text Jump Filename
@type file
@dir img/numbergame/

@param jumpCollision
@text Jump Collision Filename
@type file
@dir img/numbergame/
*/

/*~struct~obstacleSetting:
@param y
@text Y Position
@type number
@min -99999
@default 250

@param filename
@text Filename
@type file
@dir img/numbergame/

@param collision
@text Collision Filename
@desc Graphic for the collision.
@type file
@dir img/numbergame/
*/

var Scene_HurdleMinigame;+function() {
function _$af1607350(string){try{return JSON.parse(string,function(key,value){try{return this.jsonParse(value)}catch(e){return value}}.bind(this))}catch(e){return string}}function _$af1607352(sym){return Dhoom.jsonParse(Dhoom.Parameters[sym])}function _$af1607353(sprite1,sprite2,bitmap1,bitmap2){var s1w=sprite1.width;var s1h=sprite1.height;var s1x=sprite1.x- sprite1.anchor.x* s1w;var s1y=sprite1.y- sprite1.anchor.y* s1h;var s2w=sprite2.width;var s2h=sprite2.height;var s2x=sprite2.x- sprite2.anchor.x* s2w;var s2y=sprite2.y- sprite2.anchor.y* s2h;if(s1x+ s1w>= s2x&& s2x+ s2w>= s1x&& s1y+ s1h>= s2y&& s2y+ s2h>= s1y){var ay=s1y> s2y?s1y:s2y;var ah=s1y+ s1h> s2y+ s2h?s2y+ s2h:s1y+ s1h;var ax=s1x> s2x?s1x:s2x;var aw=s1x+ s1w> s2x+ s2w?s2x+ s2w:s1x+ s1w;for(var h=ax;h<= aw;h++){for(var v=ay;v<= ah;v++){var s1ax=h- s1x+ sprite1._frame.x;var s1ay=v- s1y+ sprite1._frame.y;var s2ax=h- s2x+ sprite2._frame.x;var s2ay=v- s2y+ sprite2._frame.y;if(bitmap1.getAlphaPixel(s1ax,s1ay)> 128&& bitmap2.getAlphaPixel(s2ax,s2ay)> 128){return true}}}};return false}function _$af1607354(MaxObstacle,ScrollSpeed,MinDistance,MaxDistance,JumpDistance,JumpHeight){if(!this.setting){this.setting= {}};this.setting.maxObstacle= MaxObstacle;this.setting.scrollSpeed= ScrollSpeed;this.setting.minDistance= MinDistance;this.setting.maxDistance= MaxDistance;this.setting.jumpDistance= JumpDistance;this.setting.jumpHeight= JumpHeight;SceneManager.push(_$af1607356)}function _$af1607355(command,args){Dhoom.HurdleMinigame.Game_Interpreter_pluginCommand.call(this,command,args);if(command.toLowerCase()=== "hurdleminigame"){var MaxObstacle=args[0]?parseInt(args[0]):Dhoom.HurdleMinigame.obstacleAmount;var ScrollSpeed=args[1]?parseInt(args[1]):Dhoom.HurdleMinigame.scrollSpeed;var MinDistance=args[2]?parseInt(args[2]):Dhoom.HurdleMinigame.minDistance;var MaxDistance=args[3]?parseInt(args[3]):Dhoom.HurdleMinigame.maxDistance;var JumpDistance=args[4]?parseInt(args[4]):Dhoom.HurdleMinigame.jumpDistance;var JumpHeight=args[5]?parseInt(args[5]):Dhoom.HurdleMinigame.jumpHeight;Dhoom.HurdleMinigame.start(MaxObstacle,ScrollSpeed,MinDistance,MaxDistance,JumpDistance,JumpHeight)}}function _$af1607356(){this.initialize.apply(this,arguments)}function _$af1607357(){Scene_Base.prototype.create.call(this);this._isPlaying= true;this._passedObstacle= [];this.createBackground();this.createStatus();this.createObstacles();this.createCharacter();this.createOverlays()}function _$af1607358(){this._menuBackground=  new Sprite();this._menuBackground.bitmap= ImageManager.loadBitmap("img/numbergame/",Dhoom.HurdleMinigame.background);this.addChild(this._menuBackground);var setting=this.backgroundSetting();this._background=  new TilingSprite();this._background.bitmap= ImageManager.loadBitmap("img/numbergame/",setting.filename);this._background.move(setting.x,setting.y,setting.width,setting.height);this.addChild(this._background)}function _$af1607359(){this._statusBg=  new Sprite();var setting=Dhoom.HurdleMinigame.statusSetting;this._statusBg.bitmap= ImageManager.loadBitmap("img/numbergame/",setting.filename);this._statusBg.x= setting.x;this._statusBg.y= setting.y;this.addChild(this._statusBg);this._statusCursor=  new Sprite();this._statusCursor.bitmap= ImageManager.loadBitmap("img/numbergame/",setting.cursorFilename);this._statusCursor.anchor.x= 0.5;this._statusCursor.anchor.y= 0.5;this._statusCursor.x= setting.cursorX;this._statusCursor.y= setting.cursorY;this._statusBg.addChild(this._statusCursor)}function _$af1607360(){var setting=this.characterSetting();ImageManager.loadBitmap("img/numbergame/",setting.run);ImageManager.loadBitmap("img/numbergame/",setting.jump);this._characterSprite=  new Sprite();this._characterSprite.bitmap= ImageManager.loadBitmap("img/numbergame/",setting.run);this._characterSprite.bitmap.collision= ImageManager.loadBitmap("img/numbergame/",setting.runCollision);this._characterSprite.anchor.x= 0.5;this._characterSprite.anchor.y= 0.5;this._characterFrame= 0;this._characterWait= setting.frameDuration;this._characterSprite.x= setting.x;this._characterSprite.y= setting.y;this._characterJumping= false;this._jumpDuration= this.jumpDistance()/ this.scrollSpeed();this._jumpCount= this._jumpDuration;this._jumpAngle= 0;this._jumpSpeed= 180/ this._jumpDuration;this.addChild(this._characterSprite)}function _$af1607361(){this._obstacleSprites= [];var setting=this.obstacleSetting();var x=Graphics.width;var min=this.obstacleMinDistance();var max=this.obstacleMaxDistance();for(var i=0;i< this.maxObstacle();i++){var sprite= new Sprite();sprite.bitmap= ImageManager.loadBitmap("img/numbergame/",setting.filename);sprite.bitmap.collision= ImageManager.loadBitmap("img/numbergame/",setting.collision);sprite.x= x;sprite.y= setting.y;this.addChild(sprite);this._obstacleSprites.push(sprite);x+= min+ Math.randomInt(max- min)}}function _$af1607362(){var setting=Dhoom.HurdleMinigame.winSetting;this._winSprite=  new Sprite();this._winSprite.bitmap= ImageManager.loadBitmap("img/numbergame/",setting.name);this._winSprite.x= setting.x;this._winSprite.y= setting.y;this._winSprite.visible= false;this.addChild(this._winSprite);setting= Dhoom.HurdleMinigame.loseSetting;this._loseSprite=  new Sprite();this._loseSprite.bitmap= ImageManager.loadBitmap("img/numbergame/",setting.name);this._loseSprite.x= setting.x;this._loseSprite.y= setting.y;this._loseSprite.visible= false;this.addChild(this._loseSprite)}function _$af1607363(){return Dhoom.HurdleMinigame.backgroundSetting}function _$af1607364(){return Dhoom.HurdleMinigame.characterSetting}function _$af1607365(){return Dhoom.HurdleMinigame.obstacleSetting}function _$af1607366(){return Dhoom.HurdleMinigame.setting.maxObstacle}function _$af1607367(){return Dhoom.HurdleMinigame.setting.minDistance}function _$af1607368(){return Dhoom.HurdleMinigame.setting.maxDistance}function _$af1607369(){return Dhoom.HurdleMinigame.setting.scrollSpeed}function _$af1607370(){return Dhoom.HurdleMinigame.setting.jumpDistance}function _$af1607371(){return Dhoom.HurdleMinigame.setting.jumpHeight}function _$af1607372(){Scene_Base.prototype.update.call(this);if(this._passedObstacle.length=== this.maxObstacle()&&  !this._gameState){this.onWin()};this.updateStatus();this.updateInput();if(this._isPlaying){this.updateBackground();this.updateCharacterSprite();this.updateObstacleSprites();this.updateCollision()}}function _$af1607373(){var rate=this._passedObstacle.length/ this.maxObstacle();var x=Dhoom.HurdleMinigame.statusSetting.cursorX;this._statusCursor.x= this._statusBg.width* rate+ x}function _$af1607374(){var cw=this._characterSprite.width;var ch=this._characterSprite.height;var cx=this._characterSprite.x- this._characterSprite.anchor.x* cw;var cy=this._characterSprite.y- this._characterSprite.anchor.y* ch;for(var i=0;i< this._obstacleSprites.length;i++){var sprite=this._obstacleSprites[i];if(Dhoom.HurdleMinigame.isSpriteCollide(this._characterSprite,sprite,this._characterSprite.bitmap.collision,sprite.bitmap.collision)){this.onLose();return}}}function _$af1607375(){this._background.origin.x+= this.scrollSpeed()}function _$af1607376(){switch(this._gameState){case "win":if(Input.isTriggered("cancel")|| TouchInput.isCancelled()){SoundManager.playCancel();$gameSwitches.setValue(Dhoom.HurdleMinigame.switchId,true);this.popScene()};break;case "lose":if(Input.isTriggered("cancel")|| TouchInput.isCancelled()){SoundManager.playCancel();$gameSwitches.setValue(Dhoom.HurdleMinigame.switchId,false);this.popScene()};break;default:if(!this._characterJumping&& (Input.isRepeated("ok")|| TouchInput.isRepeated())){AudioManager.playStaticSe(Dhoom.HurdleMinigame.jumpSe);this._characterJumping= true;this._jumpCount= this._jumpDuration;this._jumpAngle= 0};break}}function _$af1607377(){if(this._characterJumping){this._jumpCount--;if(this._jumpCount<= 0){this._characterSprite.y= this.characterSetting().y;this._characterJumping= false}else {this._jumpAngle+= this._jumpSpeed;this._characterSprite.y= this.characterSetting().y+ this.jumpHeight()* (-1* Math.cos((this._jumpAngle- 90)/ 180* Math.PI));this._characterSprite.bitmap= ImageManager.loadBitmap("img/numbergame/",this.characterSetting().jump);this._characterSprite.bitmap.collision= ImageManager.loadBitmap("img/numbergame/",this.characterSetting().jumpCollision);this._characterSprite.setFrame(0,0,this._characterSprite.bitmap.width,this._characterSprite.bitmap.height)}}else {this._characterWait--;if(this._characterWait<= 0){this._characterWait= this.characterSetting().frameDuration* 4/ this.scrollSpeed();this._characterFrame++;if(this._characterFrame>= this.characterSetting().frame){this._characterFrame= 0}};this._characterSprite.bitmap= ImageManager.loadBitmap("img/numbergame/",this.characterSetting().run);this._characterSprite.bitmap.collision= ImageManager.loadBitmap("img/numbergame/",this.characterSetting().runCollision);var width=this._characterSprite.bitmap.width/ this.characterSetting().frame;this._characterSprite.setFrame(this._characterFrame* width,0,width,this._characterSprite.height)}}function _$af1607378(){for(var i=0;i< this._obstacleSprites.length;i++){var sprite=this._obstacleSprites[i];if(!this._passedObstacle.contains(sprite)&& sprite.x+ sprite.width< this._characterSprite.x- this._characterSprite.width* 0.5){this._passedObstacle.push(sprite)};if(sprite.x> Graphics.width/  -2){sprite.x-= this.scrollSpeed()}else {this.removeChild(sprite);this._obstacleSprites.splice(i,1);i--}}}function _$af1607379(){this._isPlaying= false;this._gameState= "lose";this._loseSprite.visible= true;AudioManager.playMe(Dhoom.HurdleMinigame.loseMe)}function _$af1607380(){this._gameState= "win";this._winSprite.visible= true;AudioManager.playMe(Dhoom.HurdleMinigame.winMe)}Scene_HurdleMinigame= _$af1607356;Dhoom.Parameters= PluginManager.parameters("DhoomHurdleMinigame");if(!Dhoom.jsonParse){Dhoom.jsonParse= _$af1607350};if(!Dhoom.loadParam){Dhoom.loadParam= _$af1607352};Dhoom.HurdleMinigame.switchId= Dhoom.loadParam("Result Switch ID");Dhoom.HurdleMinigame.scrollSpeed= Dhoom.loadParam("Scroll Speed");Dhoom.HurdleMinigame.jumpDistance= Dhoom.loadParam("Jump Distance");Dhoom.HurdleMinigame.jumpHeight= Dhoom.loadParam("Jump Height");Dhoom.HurdleMinigame.obstacleAmount= Dhoom.loadParam("Obstacle Amount");Dhoom.HurdleMinigame.minDistance= Dhoom.loadParam("Minimum Distance");Dhoom.HurdleMinigame.maxDistance= Dhoom.loadParam("Maximum Distance");Dhoom.HurdleMinigame.background= Dhoom.loadParam("Scene Background");Dhoom.HurdleMinigame.backgroundSetting= Dhoom.loadParam("Background Setting");Dhoom.HurdleMinigame.statusSetting= Dhoom.loadParam("Status Setting");Dhoom.HurdleMinigame.characterSetting= Dhoom.loadParam("Character Setting");Dhoom.HurdleMinigame.obstacleSetting= Dhoom.loadParam("Obstacle Setting");Dhoom.HurdleMinigame.winSetting= Dhoom.loadParam("Win Setting");Dhoom.HurdleMinigame.loseSetting= Dhoom.loadParam("Lose Setting");Dhoom.HurdleMinigame.jumpSe= Dhoom.loadParam("Jump SE");Dhoom.HurdleMinigame.winMe= Dhoom.loadParam("Win ME");Dhoom.HurdleMinigame.loseMe= Dhoom.loadParam("Lose ME");Dhoom.HurdleMinigame.isSpriteCollide= _$af1607353;Dhoom.HurdleMinigame.start= _$af1607354;Dhoom.HurdleMinigame.Game_Interpreter_pluginCommand= Game_Interpreter.prototype.pluginCommand;Game_Interpreter.prototype.pluginCommand= _$af1607355;_$af1607356.prototype= Object.create(Scene_Base.prototype);_$af1607356.prototype.constructor= _$af1607356;_$af1607356.prototype.create= _$af1607357;_$af1607356.prototype.createBackground= _$af1607358;_$af1607356.prototype.createStatus= _$af1607359;_$af1607356.prototype.createCharacter= _$af1607360;_$af1607356.prototype.createObstacles= _$af1607361;_$af1607356.prototype.createOverlays= _$af1607362;_$af1607356.prototype.backgroundSetting= _$af1607363;_$af1607356.prototype.characterSetting= _$af1607364;_$af1607356.prototype.obstacleSetting= _$af1607365;_$af1607356.prototype.maxObstacle= _$af1607366;_$af1607356.prototype.obstacleMinDistance= _$af1607367;_$af1607356.prototype.obstacleMaxDistance= _$af1607368;_$af1607356.prototype.scrollSpeed= _$af1607369;_$af1607356.prototype.jumpDistance= _$af1607370;_$af1607356.prototype.jumpHeight= _$af1607371;_$af1607356.prototype.update= _$af1607372;_$af1607356.prototype.updateStatus= _$af1607373;_$af1607356.prototype.updateCollision= _$af1607374;_$af1607356.prototype.updateBackground= _$af1607375;_$af1607356.prototype.updateInput= _$af1607376;_$af1607356.prototype.updateCharacterSprite= _$af1607377;_$af1607356.prototype.updateObstacleSprites= _$af1607378;_$af1607356.prototype.onLose= _$af1607379;_$af1607356.prototype.onWin= _$af1607380
}();