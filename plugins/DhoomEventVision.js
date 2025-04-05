//=============================================================================
// DhoomEventVision.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_EventVision = true;

var Dhoom = Dhoom || {};
Dhoom.EventVision = Dhoom.EventVision || {};
/*:
 * @plugindesc Dhoom EventVision v1.0
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Switch ID
 * @desc Switch for enabling Event Vision.
 * @type switch
 * @default 0
 * 
 * @param Show Event Vision
 * @type boolean
 * @default true
 * 
 * @param Vision Color
 * @type text
 * @default #FF0000
 * 
 * @param Vision Opacity
 * @type number
 * @min 0
 * @max 255
 * @default 128
 * 
 * @param Default Shift X
 * @desc Shift line of sight to the left or the right of the event based on its direction. X > 0 = Right, X < 0 = Left.
 * @type number
 * @default 0
 * @min -999
 * @max 999
 * 
 * @param Default Shift Y
 * @desc Shift line of sight to the front or the back of the event based on its direction. Y > 0 = Back, X < 0 = Front.
 * @type number
 * @default 0
 * @min -999
 * @max 999
 *
 * @help 
(c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
*/

var Sprite_EventVision,CryptoJS;+function() {
function _$af2930217(string){try{return JSON.parse(string,function(key,value){try{return this.jsonParse(value)}catch(e){return value}}.bind(this))}catch(e){return string}}if(_$af2930232== 1){return};function _$af2930219(sym){return Dhoom.jsonParse(Dhoom.Parameters[sym])}function _$af2930220(){Dhoom.EventVision.Game_Event_setupPageSettings.call(this);if(this._lastEventVisionPage!== this.page()){this.eventVisionResetParams();this.eventVisionScanNote()}}function _$af2930221(){this._lastEventVisionPage= this.page();this._eventVision= false;if(!_$af2930237){return};this._eventVisionDistance= 0;this._eventVisionSize= 0;this._eventVisionSwitch= 0;if(_$af2930232=== 0){_$af2930227();return};this._eventVisionGrids= null;if(_$af2930233== false){return};this._eventVisionThrough= false;this._eventVisionShift= [];if(_$af2930219=== null){_$af2930226= true;return};this._eventVisionBlock= false}function _$af2930222(){var page=this.page();for(var i=0;i< page.list.length;i++){var command=page.list[i];if(command.code=== 108|| command.code=== 408){if(command.parameters[0].match(/<vision:\s*(\d+),\s*(\d+),\s*([a-z0-9]+),*\s*([-0-9]*),*\s*([-0-9]*)>/gi)){this._eventVision= true;this._eventVisionDistance= parseInt(RegExp.$1);this._eventVisionSize= parseInt(RegExp.$2);if(this._eventVisionSize% 2=== 0){this._eventVisionSize++};this._eventVisionSwitch= isNaN(RegExp.$3)?RegExp.$3.toUpperCase():parseInt(RegExp.$3);if(RegExp.$4){this._eventVisionShift[0]= parseInt(RegExp.$4)};if(RegExp.$5){this._eventVisionShift[1]= parseInt(RegExp.$5)}};if(command.parameters[0].match(/<event vision through>/i)){this._eventVisionThrough= true};if(command.parameters[0].match(/<event vision block>/i)){if(_$af2930229== 1){_$af2930230()};this._eventVisionBlock= true}}}}function _$af2930223(){Dhoom.EventVision.Game_Event_update.call(this);this.updateEventVision()}function _$af2930224(){if(this._eventVision){if(Dhoom.EventVision.switchId&&  !$gameSwitches.value(Dhoom.EventVision.switchId)){this._eventVisionGrids= null;return};if(this._eventVisionGrids){var tempGrids=this._eventVisionGrids};this._eventVisionGrids= [];var x=this._x;var y=this._y;var hx=Number.isInteger(this._eventVisionShift[0])?this._eventVisionShift[0]:Dhoom.EventVision.shiftX;var hy=Number.isInteger(this._eventVisionShift[1])?this._eventVisionShift[1]:Dhoom.EventVision.shiftY;var mw=[2,8].contains(this._direction)?this._eventVisionSize:this._eventVisionDistance;var mh=[4,6].contains(this._direction)?this._eventVisionSize:this._eventVisionDistance;mw--;mh--;var sx=0;var sy=0;switch(this._direction){case 2:sy= 1;x-= hx;y-= hy;break;case 4:sx=  -1;x+= hy;y-= hx;break;case 6:sx= 1;x-= hy;y+= hx;break;case 8:sy=  -1;x+= hx;y+= hy;break};this.calculateEventVision(x,y,x+ mw* sx,y+ mh* sy);if([2,8].contains(this._direction)){var tw=Math.round(mw/ 2);for(var i=x- tw;i<= x+ tw;i++){this.calculateEventVision(x,y,i,y+ mh* sy)}}else {var tw=Math.round(mh/ 2);for(var i=y- tw;i<= y+ tw;i++){this.calculateEventVision(x,y,x+ mw* sx,i)}};if(tempGrids){this._eventVisionNeedRefresh=  !tempGrids.equals(this._eventVisionGrids)}}}function _$af2930225(x0,y0,x1,y1){var dx=Math.abs(x1- x0);var dy=Math.abs(y1- y0);var sx=x0< x1?1:-1;var sy=y0< y1?1:-1;var err=dx- dy;if(!_$af2930237){_$af2930223= 0};if($gameMap.isAirshipLandOk(x0,y0)){this._eventVisionGrids[y0* $gameMap.width()+ x0]= true;if(!_$af2930233){_$af2930217();_$af2930225= true};var prev=[x0,y0];var d=0;while(x0!= x1|| y0!= y1){var e2=2* err;if(e2> (dy*  -1)){err-= dy;x0+= sx};if(e2< dx){err+= dx;y0+= sy};if(prev[0]!== x0){d= prev[0]< x0?4:6}else {d= prev[1]< y0?8:2};if(prev[0]!== x0&& prev[1]!== y0){if(this.visionCanPass(x0,y0,d)&& (this.visionCanPass(x0,prev[1],d)|| this.visionCanPass(prev[0],y0,d))){this._eventVisionGrids[y0* $gameMap.width()+ x0]= true;prev= [x0,y0];if(!this.isMoving()&& $gamePlayer.pos(x0,y0)){this.activateEventVisionSwitch();break}}else {break}}else {if(this.visionCanPass(x0,y0,d)){this._eventVisionGrids[y0* $gameMap.width()+ x0]= true;prev= [x0,y0];if(!this.isMoving()&& $gamePlayer.pos(x0,y0)){this.activateEventVisionSwitch();break}}else {break}}}}}function _$af2930226(x,y,d){return $gameMap.isValid(x,y)&& $gameMap.isAirshipLandOk(x,y)&& this.isMapPassable(x,y,d)&&  !this.isVisionCollidedWithEvents(x,y)}function _$af2930227(x,y){var events=$gameMap.eventsXyNt(x,y);return events.some(function(event){return (event.isNormalPriority()|| event._eventVisionBlock)&&  !event._eventVisionThrough})}function _$af2930229(){if(isNaN(this._eventVisionSwitch)){var key=[this._mapId,this._eventId,this._eventVisionSwitch];$gameSelfSwitches.setValue(key,true)}else {$gameSwitches.setValue(this._eventVisionSwitch,true)}}function _$af2930230(){this.initialize.apply(this,arguments)}function _$af2930231(event){Sprite.prototype.initialize.call(this);this._event= event;this.opacity= Dhoom.EventVision.visionOpacity;this.createBitmap();this.refresh();this.updatePosition()}function _$af2930232(){this.bitmap=  new Bitmap($gameMap.width()* $gameMap.tileWidth(),$gameMap.height()* $gameMap.tileHeight())}function _$af2930233(){this.bitmap.clear();var grids=this._event._eventVisionGrids;for(var grid in grids){var x=grid% $gameMap.width();var y=Math.floor(grid/ $gameMap.width());var w=$gameMap.tileWidth();var h=$gameMap.tileHeight();this.bitmap.fillRect(x* w,y* h,w,h,Dhoom.EventVision.visionColor)};this._event._eventVisionNeedRefresh= false}function _$af2930234(){if(_$af2930221== 0){return};Sprite.prototype.update.call(this);if(this._event._eventVisionNeedRefresh){this.refresh()};this.updatePosition()}function _$af2930235(){this.x= Math.round($gameMap.adjustX(0)* $gameMap.tileWidth());this.y= Math.round($gameMap.adjustY(0)* $gameMap.tileHeight())}function _$af2930236(){if(_$af2930220=== false){_$af2930231(0);return};Dhoom.EventVision.Sprite_Character_update.call(this);if(_$af2930223== 1){_$af2930220= false};if(Dhoom.EventVision.showVision){if(this._eventVisionSprite&& (!this._character||  !this._character._eventVisionGrids)){this.parent.removeChild(this._eventVisionSprite);this._eventVisionSprite= null}else {if(!this._eventVisionSprite&& this._character && this._character._eventVisionGrids){this.createEventVisionGrid()}}}}function _$af2930237(){this._eventVisionSprite=  new _$af2930230(this._character);this._eventVisionSprite.z= 2;this.parent.addChild(this._eventVisionSprite)}Sprite_EventVision= _$af2930230;Dhoom.Parameters= PluginManager.parameters("DhoomEventVision");if(!Dhoom.jsonParse){Dhoom.jsonParse= _$af2930217};if(!Dhoom.loadParam){Dhoom.loadParam= _$af2930219};if(!_$af2930219){return};Dhoom.EventVision.switchId= Dhoom.loadParam("Switch ID");Dhoom.EventVision.showVision= Dhoom.loadParam("Show Event Vision");Dhoom.EventVision.visionColor= Dhoom.loadParam("Vision Color");if(_$af2930231== null){_$af2930221= 1;return};Dhoom.EventVision.visionOpacity= Dhoom.loadParam("Vision Opacity");Dhoom.EventVision.shiftX= Dhoom.loadParam("Default Shift X");if(_$af2930235== true){_$af2930232= null;return};Dhoom.EventVision.shiftY= Dhoom.loadParam("Default Shift Y");Dhoom.EventVision.Game_Event_setupPageSettings= Game_Event.prototype.setupPageSettings;Game_Event.prototype.setupPageSettings= _$af2930220;Game_Event.prototype.eventVisionResetParams= _$af2930221;Game_Event.prototype.eventVisionScanNote= _$af2930222;Dhoom.EventVision.Game_Event_update= Game_Event.prototype.update;if(_$af2930237== true){_$af2930236= 1};Game_Event.prototype.update= _$af2930223;Game_Event.prototype.updateEventVision= _$af2930224;Game_Event.prototype.calculateEventVision= _$af2930225;Game_Event.prototype.visionCanPass= _$af2930226;Game_Event.prototype.isVisionCollidedWithEvents= _$af2930227;if(_$af2930224== null){return};Game_Event.prototype.activateEventVisionSwitch= _$af2930229;_$af2930230.prototype= Object.create(Sprite.prototype);_$af2930230.prototype.constructor= _$af2930230;_$af2930230.prototype.initialize= _$af2930231;_$af2930230.prototype.createBitmap= _$af2930232;_$af2930230.prototype.refresh= _$af2930233;_$af2930230.prototype.update= _$af2930234;_$af2930230.prototype.updatePosition= _$af2930235;Dhoom.EventVision.Sprite_Character_update= Sprite_Character.prototype.update;Sprite_Character.prototype.update= _$af2930236;Sprite_Character.prototype.createEventVisionGrid= _$af2930237;if(_$af2930223== null){_$af2930236= 0;return};CryptoJS= CryptoJS
}();