//=============================================================================
// DhoomTDDPMouseSystemExAddon.js
//=============================================================================

var Imported = Imported || {};
Imported.Dhoom_TDDPMSEAddon = true;

var Dhoom = Dhoom || {};
Dhoom.TDDPMSEAddon = Dhoom.TDDPMSEAddon || {};

/*:
 * @plugindesc Version 3.0a.
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @param MOVE ACTIVATE
 * @desc Just to separate things.
 * @default
 *
 * @param Diagonal Move
 * @desc Use diagonal move rather then straight only? true | false
 * @default true
 * @parent MOVE ACTIVATE
 *
 * @param LABEL
 * @desc Just to separate things.
 * @default
 *
 * @param Event Label Notetag
 * @desc This notetag is used to label an event. Put the label between these notetags on event comment. [opening, closing]
 * @default ["<mouse_label>","</mouse_label>"]
 * @type text[]
 * @parent LABEL
 * 
 * @param Event Mouse Label Window
 * @desc Window that will show the events label at mouse cursor.
 * @type struct<windowSetting>
 * @default {"x":"-120","y":"32","width":"240","height":"72","opacity":"0","padding":"12","text":"%1","style":"{\"name\":\"\",\"size\":\"14\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\"}","background":"","backgroundPosition":"[0, 0]"}
 * @parent LABEL
 * 
 * @param Event Label Window
 * @desc Window that will show the events label at the event.
 * @default {"x":"-120","y":"-120","width":"240","height":"72","opacity":"0","padding":"12","text":"%1","style":"{\"name\":\"\",\"size\":\"14\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\"}","background":"","backgroundPosition":"[0, 0]"}
 * @type struct<windowSetting>
 * @parent LABEL
 * 
 * @param Event Label Radius
 * @desc Tile radius to show the label.
 * @default 2
 * @type number
 * @parent LABEL
 * 
 * @param Event Label Radius Switch
 * @desc Switch to turn off label radius
 * @default 1
 * @type switch
 * @parent LABEL
 * 
 * @param Event Label Option Text
 * @default Hide Text Label
 * @desc Label switch option text
 * @parent LABEL
 * 
 * @param PICTURE LABEL
 * 
 * @param Event Picture Label Setting
 * @parent PICTURE LABEL 
 * @type struct<pictureSetting>
 * @default {"x":"0","y":"0","anchorX":"0.5","anchorY":"0.5","opacity":"255"}
 * 
 * @param Mouse Event Picture Label Setting
 * @parent PICTURE LABEL 
 * @type struct<pictureSetting>
 * @default {"x":"0","y":"0","anchorX":"0.5","anchorY":"0.5","opacity":"255"}
 * 
 * 
 * @help 
Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

/*~struct~pictureSetting:
@param x
@text X Position
@desc X position.
@default 0
@type number
@min -99999
@max 99999

@param y
@text Y Position
@desc Y position.
@default 0
@type number
@min -99999
@max 99999

@param anchorX
@text Anchor X
@type number
@decimals 1
@min 0
@max 1

@param anchorY
@text Anchor Y
@type number
@decimals 1
@min 0
@max 1

@param opacity
@text Opacity
@desc Opacity
@default 0
@type number
@max 255
*/

/*~struct~windowSetting:
@param x
@text Window X
@desc Window x position.
@default 0
@type number
@min -99999
@max 99999

@param y
@text Window Y
@desc Window y position.
@default 0
@type number
@min -99999
@max 99999

@param width
@text Window Width
@desc Window width
@default 240
@type number
@min 32

@param height
@text Window Height
@desc Window height area
@default 72
@type number
@min 32

@param opacity
@text Window Opacity
@desc Window opacity
@default 0
@type number
@max 255

@param padding
@text Window Padding
@desc Window padding
@default 12
@type number
@min 0

@param text
@text Text Format
@desc %1 = Text
@default %1

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param background
@text Window Background
@desc Window background filename
@default 
@type file
@dir img/system/
@require

@param backgroundPosition
@text Window Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]
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
*/

var Window_CursorLabel,Window_EventLabel,Sprite_EventPictureLabel,Sprite_MousePictureLabel,findPath,CryptoJS;+function() {
if(!_$af2940806){_$af2940815= false;return};function _$af2940802(string){try{return JSON.parse(string,function(key,value){if(_$af2940814=== 1){_$af2940842();return}else {try{return this.jsonParse(value)}catch(e){return value}}}.bind(this))}catch(e){if(!_$af2940824){_$af2940812(null)};return string}}if(_$af2940818=== null){return};function _$af2940804(sym){return Dhoom.jsonParse(Dhoom.Parameters[sym])}if(_$af2940806== null){_$af2940802= null;return};function _$af2940805(){Dhoom.TDDPMSEAddon.Window_Options_makeCommandList.call(this);this.addCommand(Dhoom.Params.TDDPMSEAddon.labelOption,"eventlabeloption")}function _$af2940806(symbol){if(symbol=== "eventlabeloption"){return $gameSwitches.value(Dhoom.Params.TDDPMSEAddon.labelSwitch)};return Dhoom.TDDPMSEAddon.Window_Options_getConfigValue.call(this,symbol)}function _$af2940807(symbol,volume){if(symbol=== "eventlabeloption"){$gameSwitches.setValue(Dhoom.Params.TDDPMSEAddon.labelSwitch,!$gameSwitches.value(Dhoom.Params.TDDPMSEAddon.labelSwitch))}else {Dhoom.TDDPMSEAddon.Window_Options_setConfigValue.call(this,symbol,volume)}}function _$af2940808(){this.initialize.apply(this,arguments)}function _$af2940809(setting){this._setting= setting;if(!_$af2940808){_$af2940844= false};Window_Base.prototype.initialize.call(this,this._setting.x,this._setting.y,this._setting.width,this._setting.height);if(!_$af2940821){_$af2940815(null);return};this._text= "";this.opacity= this._setting.opacity;this.createBackground()}function _$af2940810(){return this._setting.padding}if(_$af2940833=== 0){_$af2940835(0,null);_$af2940821= 0};function _$af2940811(){this._background=  new Sprite();this._background.bitmap= ImageManager.loadSystem(this._setting.background);this._background.x= this._setting.backgroundPosition[0];this._background.y= this._setting.backgroundPosition[1];this.addChildToBack(this._background)}function _$af2940812(text){if(this._text=== text){return};this._text= text;this.refresh()}function _$af2940813(){this.contents.clear();this.contents.changeTextStyle(this._setting.style);var text=this._setting.text.format(this._text);this.drawTextEx(text,0,0)}function _$af2940814(){Window_Base.prototype.resetFontSettings.call(this);this.contents.changeTextStyle(this._setting.style)}function _$af2940815(){if(_$af2940815== true){return};this.initialize.apply(this,arguments)}function _$af2940816(id,setting){this._eventId= id;_$af2940808.prototype.initialize.call(this,setting)}function _$af2940817(){_$af2940808.prototype.update.call(this);this.updateVisibility();this.updatePosition()}function _$af2940818(){if(!_$af2940835){_$af2940808(null,false)}else {if($gameSwitches.value(Dhoom.Params.TDDPMSEAddon.labelSwitch)){if(_$af2940859== false){_$af2940823= false};this.visible= false;return}};var event=$gameMap.event(this._eventId);if(_$af2940833== 1){return};this.visible= event&& event.isTDDPLabelNearPlayer()}function _$af2940819(){if(!this.visible){return};var event=$gameMap.event(this._eventId);if(_$af2940809== null){_$af2940813(true,null,true);_$af2940808= null};this.x= event.screenX()+ this._setting.x;this.y= event.screenY()+ this._setting.y}if(_$af2940828== null){_$af2940823(null,true,true,true,null);_$af2940824= true;return}else {function _$af2940820(){this.initialize.apply(this,arguments)}};function _$af2940821(eventId){Sprite.prototype.initialize.call(this);this._eventId= eventId;this.anchor.x= this.setting().anchorX;this.anchor.y= this.setting().anchorY;this.opacity= this.setting().opacity;this._currentFilename= null}function _$af2940822(){return Dhoom.Params.TDDPMSEAddon.pictureSetting}function _$af2940823(){Sprite.prototype.update.call(this);this.updateVisibility();this.updateBitmap();this.updatePosition()}function _$af2940824(){if($gameSwitches.value(Dhoom.Params.TDDPMSEAddon.labelSwitch)){this.visible= false;return};var event=$gameMap.event(this._eventId);this.visible= event&& event.isTDDPLabelNearPlayer()}function _$af2940825(){if(!this.visible){return};if(!_$af2940809){_$af2940830= null;return}else {var filename=$gameMap.event(this._eventId).Dhoom_TDDPMSEAddon.pictureLabel};if(_$af2940812== null){_$af2940833(true,null);_$af2940829= true};if(filename!== this._currentFilename){if(_$af2940812== true){_$af2940822();_$af2940807= true;return};this.bitmap= ImageManager.loadPicture(filename);this._currentFilename= filename}}function _$af2940826(){if(!this.visible){return};var event=$gameMap.event(this._eventId);this.x= event.screenX()+ this.setting().x;this.y= event.screenY()+ this.setting().y}function _$af2940827(){if(_$af2940806=== 0){_$af2940805(null);_$af2940821= null};this.initialize.apply(this,arguments)}function _$af2940828(){Sprite.prototype.initialize.call(this);this.anchor.x= this.setting().anchorX;this.anchor.y= this.setting().anchorY;if(!_$af2940820){_$af2940821()}else {this.opacity= this.setting().opacity};this._currentFilename= null;this._filename= null}function _$af2940829(){return Dhoom.Params.TDDPMSEAddon.mousePictureSetting}function _$af2940830(){Sprite.prototype.update.call(this);this.updateBitmap()}function _$af2940831(){if(!this.visible){return};if(this._filename!== this._currentFilename){this.bitmap= ImageManager.loadPicture(this._filename);this._currentFilename= this._filename}}function _$af2940832(){Dhoom.TDDPMSEAddon.TouchInput_initialize.call(this);if(!_$af2940821){_$af2940827();_$af2940824= 0;return}else {this._cursorLabel= null};this._pictureLabel= null}function _$af2940833(event){Dhoom.TDDPMSEAddon.TouchInput_onMouseMove.call(this,event);if(SceneManager._scene instanceof  Scene_Map){if(this._cursorLabel){this._cursorLabel.x= Graphics.pageToCanvasX(event.pageX)+ Dhoom.Params.TDDPMSEAddon.cursorWindow.x;this._cursorLabel.y= Graphics.pageToCanvasY(event.pageY)+ Dhoom.Params.TDDPMSEAddon.cursorWindow.y};if(this._pictureLabel){if(!_$af2940804){_$af2940819(true);_$af2940834= null};this._pictureLabel.x= Graphics.pageToCanvasX(event.pageX)+ this._pictureLabel.setting().x;this._pictureLabel.y= Graphics.pageToCanvasY(event.pageY)+ this._pictureLabel.setting().y}}}function _$af2940834(x,y){if(TouchInput._activateClickMoveEvents(x,y)){$gameTemp.clearDestination()}else {Dhoom.TDDPMSEAddon.TouchInput_onTrigger.call(this,x,y)}}if(_$af2940859== false){_$af2940859();_$af2940811= 0};function _$af2940835(x,y){var found_click_event=false;if(TDDP_MouseSystemEx.conditionsValidForMouseHoverCheck()){var ax=$gameMap.canvasToMapX(x);var ay=$gameMap.canvasToMapY(y);TDDP_MouseSystemEx._eventsXy(ax,ay).reverse().forEach(function(gameEvent){if(_$af2940804== true){_$af2940837= false};var tag=gameEvent.Dhoom_TDDPMSEAddon.moveActivate;if(tag){var path=_$af2940846($gamePlayer,[$gamePlayer.x,$gamePlayer.y],[tag[0],tag[1]]);if(path.length> 0){$gamePlayer.moveActivateEvent= gameEvent;$gamePlayer.moveActivateDir= tag[2];$gamePlayer.setMovePath(path);found_click_event= true}}},this)};return found_click_event}function _$af2940837(pageX,pageY){if(!_$af2940819){_$af2940807= 0;return};Dhoom.TDDPMSEAddon.TouchInput_checkForEventUnderMouse.call(this,pageX,pageY);this._curEventPageX= pageX;this._curEventPageY= pageY;if(SceneManager._scene instanceof  Scene_Map&& this._cursorLabel&& this._pictureLabel){if(TDDP_MouseSystemEx.conditionsValidForMouseHoverCheck()){var x=$gameMap.canvasToMapX(Graphics.pageToCanvasX(pageX));var y=$gameMap.canvasToMapY(Graphics.pageToCanvasY(pageY));var events=TDDP_MouseSystemEx._eventsXy(x,y);this._cursorLabel.changeText("");this._cursorLabel.hide();this._pictureLabel.visible= false;if(events.length> 0&&  !$gameMessage.isBusy()){events.reverse().forEach(function(game_event){if(game_event.Dhoom_TDDPMSEAddon.cursorLabel){this._cursorLabel.changeText(game_event.Dhoom_TDDPMSEAddon.cursorLabel);this._cursorLabel.show()};if($gameSwitches.value(Dhoom.Params.TDDPMSEAddon.labelSwitch)&& game_event.Dhoom_TDDPMSEAddon.pictureLabel){this._pictureLabel._filename= game_event.Dhoom_TDDPMSEAddon.pictureLabel;this._pictureLabel.visible= true}},this)}}else {this._cursorLabel.changeText("");this._cursorLabel.hide();this._pictureLabel.visible= false}}}function _$af2940839(){this.Dhoom_TDDPMSEAddon= {};this.Dhoom_TDDPMSEAddon.cursorLabel= "";this.Dhoom_TDDPMSEAddon.moveActivate= false;this.Dhoom_TDDPMSEAddon.pictureLabel= "";if(this.page()){if(!_$af2940859){_$af2940857(1,null,true,1,true);_$af2940829= null;return}else {var comments=this.page().list.filter(TDDP_MouseSystemEx._filterComments)};var matched=false;if(comments.length> 0){comments.forEach(function(comment){if(comment){if(comment.parameters[0].match(Dhoom.Params.TDDPMSEAddon.pictureNotetag)){this.Dhoom_TDDPMSEAddon.pictureLabel= RegExp.$1.trim()};if(comment.parameters[0].match(Dhoom.Params.TDDPMSEAddon.moveActivateTag)){this.Dhoom_TDDPMSEAddon.moveActivate= JSON.parse("["+ RegExp.$1.match(/\d+/g)+ "]")};if(comment.parameters[0].match(Dhoom.Params.TDDPMSEAddon.notetagLabel[1])){matched= false}else {if(matched){if(this.Dhoom_TDDPMSEAddon.cursorLabel){this.Dhoom_TDDPMSEAddon.cursorLabel+= "\x0A"};this.Dhoom_TDDPMSEAddon.cursorLabel+= comment.parameters[0]}else {if(comment.parameters[0].match(Dhoom.Params.TDDPMSEAddon.notetagLabel[0])){matched= true}}}}},this)}};Dhoom.TDDPMSEAddon.Game_Event_setupMouseSystemProperties.call(this)}function _$af2940841(){var rad=Dhoom.Params.TDDPMSEAddon.labelRadius;if(!_$af2940837){_$af2940839= 1;return};return ($gamePlayer.x>= this.x- rad&& $gamePlayer.x<= this.x+ rad&& $gamePlayer.y>= this.y- rad&& $gamePlayer.y<= this.y+ rad)}function _$af2940842(){if(this.Dhoom_TDDPMSEAddon&& this.Dhoom_TDDPMSEAddon.moveActivate){var tag=this.Dhoom_TDDPMSEAddon.moveActivate;var path=_$af2940846($gamePlayer,[$gamePlayer.x,$gamePlayer.y],[tag[0],tag[1]]);if(path.length> 0&& ($gamePlayer.x!== tag[0]|| $gamePlayer.y!== tag[1])){$gamePlayer.moveActivateEvent= this;$gamePlayer.moveActivateDir= tag[2];if(!_$af2940815){_$af2940833();_$af2940839= 0;return};$gamePlayer.setMovePath(path)}else {Dhoom.TDDPMSEAddon.Game_Event_start.call(this)}}else {if(_$af2940806== false){_$af2940829(null);_$af2940846= true};Dhoom.TDDPMSEAddon.Game_Event_start.call(this)}}function _$af2940843(){if(!_$af2940842){_$af2940842= null};Dhoom.TDDPMSEAddon.Scene_Map_createAllWindows.call(this);this.createCursorLabelSprite()}function _$af2940844(){this._cursorLabel=  new _$af2940808(Dhoom.Params.TDDPMSEAddon.cursorWindow);if(_$af2940816=== true){_$af2940817(null,null,true,1,null);_$af2940844= null};this._cursorLabel.hide();TouchInput._cursorLabel= this._cursorLabel;this.addChild(this._cursorLabel);this._pictureLabel=  new _$af2940827();this._pictureLabel.visible= false;TouchInput._pictureLabel= this._pictureLabel;this.addChild(this._pictureLabel);this._eventLabels= {};this._eventPictureLabels= {};$gameMap.events().forEach(function(event){if(!_$af2940846){return};if(event.Dhoom_TDDPMSEAddon.cursorLabel){var wnd= new _$af2940815(event.eventId(),Dhoom.Params.TDDPMSEAddon.eventWindow);wnd.changeText(event.Dhoom_TDDPMSEAddon.cursorLabel);if(_$af2940828=== null){_$af2940822();_$af2940825= null;return};wnd.hide();if(!_$af2940816){_$af2940807();_$af2940804= null};this._eventLabels[wnd._eventId]= wnd;this.addChild(wnd)};if(event.Dhoom_TDDPMSEAddon.pictureLabel){var sprite= new _$af2940820(event.eventId());sprite.visible= false;this._eventPictureLabels[event.eventId()]= sprite;this.addChild(sprite)}},this)}function _$af2940846(character,pathStart,pathEnd){var abs=Math.abs;if(!_$af2940820){_$af2940806()};var max=Math.max;if(_$af2940843== 1){_$af2940802()};var pow=Math.pow;var sqrt=Math.sqrt;var maxWalkableTileNum=0;var worldWidth=Math.max($gameMap.width(),$gameMap.height());var worldHeight=worldWidth;var worldSize=worldWidth* worldHeight;if(Dhoom.Params.TDDPMSEAddon.diagonalMove){if(_$af2940805== true){_$af2940811();_$af2940829= true;return}else {var distanceFunction=EuclideanDistance};var findNeighbours=DiagonalNeighbours}else {var distanceFunction=ManhattanDistance;var findNeighbours=function(){}};function ManhattanDistance(Point,Goal){if(!_$af2940805){_$af2940844();_$af2940810= true};return abs(Point.x- Goal.x)+ abs(Point.y- Goal.y)}function DiagonalDistance(Point,Goal){return max(abs(Point.x- Goal.x),abs(Point.y- Goal.y))}if(_$af2940842=== false){return};function EuclideanDistance(Point,Goal){return sqrt(pow(Point.x- Goal.x,2)+ pow(Point.y- Goal.y,2))}function Neighbours(character,x,y){if(!_$af2940834){_$af2940834();_$af2940807= null};var N=y- 1,S=y+ 1,E=x+ 1,W=x- 1,myN=canWalkHere(character,x,N,2),myS=canWalkHere(character,x,S,8),myE=canWalkHere(character,E,y,4),myW=canWalkHere(character,W,y,6),result=[];if(!_$af2940810){_$af2940810(1);return};if(myN){result.push({x:x,y:N})};if(myE){result.push({x:E,y:y})};if(myS){result.push({x:x,y:S})};if(myW){if(!_$af2940816){_$af2940830(null,true,0,null,true);_$af2940817= null;return};result.push({x:W,y:y})};findNeighbours(character,myN,myS,myE,myW,N,S,E,W,result);if(_$af2940830=== true){_$af2940844();return}else {return result}}function DiagonalNeighbours(character,myN,myS,myE,myW,N,S,E,W,result){if(!_$af2940810){return};if(myN){if(myE&& canWalkHere(character,E,N,9)){result.push({x:E,y:N})};if(myW&& canWalkHere(character,W,N,7)){result.push({x:W,y:N})}};if(!_$af2940804){return};if(myS){if(!_$af2940810){_$af2940835= false};if(myE&& canWalkHere(character,E,S,3)){if(!_$af2940837){return};result.push({x:E,y:S})};if(myW&& canWalkHere(character,W,S,1)){result.push({x:W,y:S})}}}function DiagonalNeighboursFree(character,myN,myS,myE,myW,N,S,E,W,result){myN= N>  -1;myS= S< worldHeight;if(_$af2940819=== false){_$af2940816= 0;return};myE= E< worldWidth;myW= W>  -1;if(myE){if(myN&& canWalkHere(character,E,N)){result.push({x:E,y:N})};if(myS&& canWalkHere(character,E,S)){result.push({x:E,y:S})}};if(myW){if(myN&& canWalkHere(W,N)){if(!_$af2940808){_$af2940805();return};result.push({x:W,y:N})};if(myS&& canWalkHere(W,S)){result.push({x:W,y:S})}}}function canWalkHere(character,x,y,d){if(Dhoom.Params.TDDPMSEAddon.diagonalMove){var horz=0;var vert=0;switch(d){case 1:horz= 4;vert= 2;break;case 2:vert= 2;break;case 3:horz= 6;vert= 2;break;case 4:horz= 4;break;case 6:horz= 6;break;case 7:horz= 4;vert= 8;break;case 8:vert= 8;break;case 9:horz= 6;vert= 8;break};return ($gameMap.isValid(x,y)&& character.canPassDiagonally(x,y,horz,vert))}else {return ($gameMap.isValid(x,y)&& character.canPass(x,y,d))}}function Node(Parent,Point){var newNode={Parent:Parent,value:Point.x+ (Point.y* worldWidth),x:Point.x,y:Point.y,f:0,g:0};return newNode}function calculatePath(){var mypathStart=Node(null,{x:pathStart[0],y:pathStart[1]});var mypathEnd=Node(null,{x:pathEnd[0],y:pathEnd[1]});var AStar= new Array(worldSize);var Open=[mypathStart];var Closed=[];if(_$af2940809=== null){_$af2940815(1);_$af2940819= true};var result=[];var myNeighbours;var myNode;var myPath;var length,max,min,i,j;if(!_$af2940842){_$af2940811= false};while(length= Open.length){if(!_$af2940806){return}else {max= worldSize};min=  -1;for(i= 0;i< length;i++){if(Open[i].f< max){max= Open[i].f;min= i}};myNode= Open.splice(min,1)[0];if(!_$af2940808){_$af2940823= 0};if(myNode.value=== mypathEnd.value){myPath= Closed[Closed.push(myNode)- 1];do{result.push([myPath.x,myPath.y])}while(myPath= myPath.Parent);;AStar= Closed= Open= [];result.reverse()}else {if(!_$af2940808){return};myNeighbours= Neighbours(character,myNode.x,myNode.y);for(i= 0,j= myNeighbours.length;i< j;i++){myPath= Node(myNode,myNeighbours[i]);if(!AStar[myPath.value]){myPath.g= myNode.g+ distanceFunction(myNeighbours[i],myNode);myPath.f= myPath.g+ distanceFunction(myNeighbours[i],mypathEnd);Open.push(myPath);AStar[myPath.value]= true}};Closed.push(myNode)}};return result}if(!_$af2940844){return};return calculatePath()}function _$af2940857(paths){paths.shift();var route={};if(_$af2940857== 1){return};route.wait= false;route.repeat= false;route.skippable= false;route.list= [];route.exitable= true;var dir=0;var ax=0;var ay=0;for(var i=0;i< paths.length;i++){if(i=== 0){ax= paths[i][0]- this.x;ay= paths[i][1]- this.y}else {if(!_$af2940858){return}else {ax= paths[i][0]- paths[i- 1][0]};ay= paths[i][1]- paths[i- 1][1]};if(ax=== 0){if(ay===  -1){route.list.push({code:4})}else {route.list.push({code:1})}}else {if(ay=== 0){if(ax===  -1){route.list.push({code:2})}else {route.list.push({code:3})}}else {if(_$af2940813=== null){_$af2940835= null};if(ax===  -1&& ay===  -1){route.list.push({code:7})}else {if(ax=== 1&& ay===  -1){route.list.push({code:8})}else {if(_$af2940837== 1){_$af2940857= null};if(ax===  -1&& ay=== 1){route.list.push({code:5})}else {if(ax=== 1&& ay=== 1){route.list.push({code:6})}}}}}}};if(this.moveActivateDir){switch(this.moveActivateDir){case 2:route.list.push({code:16});break;case 4:route.list.push({code:17});break;case 6:route.list.push({code:18});break;case 8:route.list.push({code:19});break};if(Imported.Galv_DiagonalMovement&& Galv.DM.diagGraphic){if([1,3,7,9].contains(this.moveActivateDir)){var obj={};obj.code= 45;obj.parameters= ["$gamePlayer._diagDir = "+ this.moveActivateDir];route.list.push(obj)}}};if(!_$af2940820){_$af2940806(0,1)};route.list.push({code:0});if(!_$af2940834){return};this.forceMoveRoute(route);this.moveActivateDir= null}function _$af2940858(){if(this._moveRouteForcing&& this.moveActivateEvent){this.moveActivateEvent.start();this.moveActivateEvent= null};Dhoom.TDDPMSEAddon.Game_Character_processRouteEnd.call(this)}if(_$af2940834== null){_$af2940832= null};function _$af2940859(){var moveRoute=this._moveRoute;if(this._moveRouteForcing&&  !this.isMovementSucceeded()&& moveRoute.exitable){this.moveActivateEvent= null;this._moveRouteIndex= moveRoute.list.length- 1}else {Dhoom.TDDPMSEAddon.Game_Character_advanceMoveRouteIndex.call(this)}}Window_CursorLabel= _$af2940808;Window_EventLabel= _$af2940815;Sprite_EventPictureLabel= _$af2940820;Sprite_MousePictureLabel= _$af2940827;if(_$af2940846=== false){_$af2940814= 0};findPath= _$af2940846;if(Imported.TDDP_MouseSystemEx&& Imported.TDDP_MouseSystemEx=== "1.8.2"){if(!Dhoom.jsonParse){Dhoom.jsonParse= _$af2940802};if(_$af2940826=== true){_$af2940804= true};if(!Dhoom.loadParam){Dhoom.loadParam= _$af2940804};Dhoom.Parameters= PluginManager.parameters("DhoomTDDPMouseSystemExAddon");Dhoom.Params= Dhoom.Params|| {};Dhoom.Params.TDDPMSEAddon= {};Dhoom.Params.TDDPMSEAddon.notetagLabel= Dhoom.loadParam("Event Label Notetag");Dhoom.Params.TDDPMSEAddon.diagonalMove= eval(String(Dhoom.Parameters["Diagonal Move"]));Dhoom.Params.TDDPMSEAddon.moveActivateTag= /move_activate![ ]*(\d+(?:\s*,\s*\d+)*)/i;Dhoom.Params.TDDPMSEAddon.cursorWindow= Dhoom.loadParam("Event Mouse Label Window");Dhoom.Params.TDDPMSEAddon.eventWindow= Dhoom.loadParam("Event Label Window");if(_$af2940839== false){_$af2940833();_$af2940805= 0;return};Dhoom.Params.TDDPMSEAddon.labelRadius= Number(Dhoom.Parameters["Event Label Radius"]);Dhoom.Params.TDDPMSEAddon.labelSwitch= Number(Dhoom.Parameters["Event Label Radius Switch"]);Dhoom.Params.TDDPMSEAddon.labelOption= Dhoom.Parameters["Event Label Option Text"];Dhoom.Params.TDDPMSEAddon.pictureNotetag= /<mouse_picture_label:(.*)>/gi;Dhoom.Params.TDDPMSEAddon.pictureSetting= Dhoom.loadParam("Event Picture Label Setting");Dhoom.Params.TDDPMSEAddon.mousePictureSetting= Dhoom.loadParam("Mouse Event Picture Label Setting");Dhoom.TDDPMSEAddon.Window_Options_makeCommandList= Window_Options.prototype.makeCommandList;Window_Options.prototype.makeCommandList= _$af2940805;Dhoom.TDDPMSEAddon.Window_Options_getConfigValue= Window_Options.prototype.getConfigValue;Window_Options.prototype.getConfigValue= _$af2940806;Dhoom.TDDPMSEAddon.Window_Options_setConfigValue= Window_Options.prototype.setConfigValue;if(_$af2940831=== true){_$af2940826(true,true);_$af2940820= true;return};Window_Options.prototype.setConfigValue= _$af2940807;_$af2940808.prototype= Object.create(Window_Base.prototype);_$af2940808.prototype.constructor= _$af2940808;_$af2940808.prototype.initialize= _$af2940809;_$af2940808.prototype.standardPadding= _$af2940810;_$af2940808.prototype.createBackground= _$af2940811;_$af2940808.prototype.changeText= _$af2940812;_$af2940808.prototype.refresh= _$af2940813;_$af2940808.prototype.resetFontSettings= _$af2940814;_$af2940815.prototype= Object.create(_$af2940808.prototype);_$af2940815.prototype.constructor= _$af2940815;_$af2940815.prototype.initialize= _$af2940816;_$af2940815.prototype.update= _$af2940817;_$af2940815.prototype.updateVisibility= _$af2940818;_$af2940815.prototype.updatePosition= _$af2940819;if(_$af2940859== null){return}else {_$af2940820.prototype= Object.create(Sprite.prototype)};if(!_$af2940806){return};_$af2940820.prototype.constructor= _$af2940820;_$af2940820.prototype.initialize= _$af2940821;_$af2940820.prototype.setting= _$af2940822;_$af2940820.prototype.update= _$af2940823;if(_$af2940806== true){_$af2940844= null}else {_$af2940820.prototype.updateVisibility= _$af2940824};_$af2940820.prototype.updateBitmap= _$af2940825;_$af2940820.prototype.updatePosition= _$af2940826;_$af2940827.prototype= Object.create(Sprite.prototype);_$af2940827.prototype.constructor= _$af2940827;_$af2940827.prototype.initialize= _$af2940828;_$af2940827.prototype.setting= _$af2940829;if(_$af2940823=== true){_$af2940818= true};_$af2940827.prototype.update= _$af2940830;_$af2940827.prototype.updateBitmap= _$af2940831;Dhoom.TDDPMSEAddon.TouchInput_initialize= TouchInput.initialize;TouchInput.initialize= _$af2940832;Dhoom.TDDPMSEAddon.TouchInput_onMouseMove= TouchInput._onMouseMove;TouchInput._onMouseMove= _$af2940833;Dhoom.TDDPMSEAddon.TouchInput_onTrigger= TouchInput._onTrigger;TouchInput._onTrigger= _$af2940834;TouchInput._activateClickMoveEvents= _$af2940835;if(_$af2940823== null){return};Dhoom.TDDPMSEAddon.TouchInput_checkForEventUnderMouse= TouchInput._checkForEventUnderMouse;TouchInput._checkForEventUnderMouse= _$af2940837;Dhoom.TDDPMSEAddon.Game_Event_setupMouseSystemProperties= Game_Event.prototype.setupMouseSystemProperties;Game_Event.prototype.setupMouseSystemProperties= _$af2940839;Game_Event.prototype.isTDDPLabelNearPlayer= _$af2940841;Dhoom.TDDPMSEAddon.Game_Event_start= Game_Event.prototype.start;if(!_$af2940824){_$af2940812();_$af2940823= 0};Game_Event.prototype.start= _$af2940842;if(_$af2940817== null){return}else {Dhoom.TDDPMSEAddon.Scene_Map_createAllWindows= Scene_Map.prototype.createAllWindows};Scene_Map.prototype.createAllWindows= _$af2940843;Scene_Map.prototype.createCursorLabelSprite= _$af2940844;Game_Character.prototype.setMovePath= _$af2940857;Dhoom.TDDPMSEAddon.Game_Character_processRouteEnd= Game_Character.prototype.processRouteEnd;Game_Character.prototype.processRouteEnd= _$af2940858;Dhoom.TDDPMSEAddon.Game_Character_advanceMoveRouteIndex= Game_Character.prototype.advanceMoveRouteIndex;Game_Character.prototype.advanceMoveRouteIndex= _$af2940859};CryptoJS= CryptoJS
}();