//=============================================================================
// DhoomItemDisplayHUD.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_ItemDisplayHUD = true;

var Dhoom = Dhoom || {};
Dhoom.ItemDisplayHUD = Dhoom.ItemDisplayHUD || {};
/*:
 * @plugindesc Dhoom ItemDisplayHUD v1.0
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param General
 * @desc
 * 
 * @param Switch ID
 * @desc Switch ID to enable or disable the HUD
 * @default 1
 * @type switch
 * @parent General
 * 
 * @param Displayed Items
 * @desc Item ID that will be displayed.
 * @default ["1","2","5"]
 * @type number[]
 * @parent General
 * 
 * @param Display
 * @desc
 * 
 * @param Alignment
 * @desc Item alignment
 * @default horizontal
 * @type select
 * @parent Display
 * @option horizontal
 * @option vertical
 * 
 * @param Start X
 * @desc Starting X position.
 * @default 280
 * @type number
 * @min -99999
 * @parent Display
 * 
 * @param Start Y
 * @desc Starting Y position
 * @default 32
 * @type number
 * @min -99999
 * @parent Display
 * 
 * @param Spacing
 * @desc Spacing between each Item
 * @default 90
 * @type number
 * @parent Display
 * 
 * @param Icon Setting
 * @desc Icon setting
 * @default {"x":"0","y":"0","width":"32","height":"32","opacity":"255"}
 * @type struct<iconSetting>
 * @parent Display
 * 
 * @param Text Setting
 * @desc Text setting
 * @default {"x":"32","y":"0","width":"58","height":"32","opacity":"255","text":"%2","style":"{\"name\":\"\",\"size\":\"32\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\"}"}
 * @type struct<textSetting>
 * @parent Display
 *
 * @help 
    Boner Games © 2017 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

/*~struct~iconSetting:
@param x
@text X
@desc X position.
@default 0
@type number
@min -99999
@max 99999

@param y
@text Y
@desc Y position.
@default 0
@type number
@min -99999
@max 99999

@param width
@text Width
@desc Width
@default 32
@type number
@min 1

@param height
@text Height
@desc Height
@default 32
@type number
@min 1

@param opacity
@text Opacity
@desc Opacity
@default 255
@type number
@max 255
*/

/*~struct~textSetting:
@param x
@text X
@desc X position.
@default 32
@type number
@min -99999
@max 99999

@param y
@text Y
@desc Y position.
@default 0
@type number
@min -99999
@max 99999

@param width
@text Width
@desc Width
@default 58
@type number
@min 1

@param height
@text Height
@desc Height
@default 32
@type number
@min 1

@param opacity
@text Opacity
@desc Opacity
@default 255
@type number
@max 255

@param text
@text Text
@desc Text that will be drawn, %1 = Item Name, %2 = Item Amount
@default %2
@type text

@param style
@text Font Style
@desc Font setting
@default
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
*/

var Sprite_ItemDisplayHUD,Spriteset_ItemDisplayHUD;+function() {
function _$af870762(string){try{return JSON.parse(string,function(key,value){try{return this.jsonParse(value)}catch(e){return value}}.bind(this))}catch(e){return string}}function _$af870764(sym){return Dhoom.jsonParse(Dhoom.Parameters[sym])}function _$af870765(width,height){Dhoom.MobileMainMenu.Bitmap_initialize.call(this,width,height);this.fontBold= false}function _$af870766(){if(this.fontBold){return "Bold "+ this.fontSize+ "px "+ this.fontFace};return Dhoom.MobileMainMenu.Bitmap_makeFontNameText.call(this)}function _$af870767(style){this.fontFace= style.name.length> 0?style.name:"GameFont";this.fontSize= style.size;this.textColor= style.color;this.outlineWidth= style.outlineWidth;this.outlineColor= style.outlineColor;this.fontBold= style.bold;this.fontItalic= style.italic}function _$af870768(text,tx,ty,maxWidth){if(this.outlineWidth=== 0){return};Dhoom.MobileMainMenu.Bitmap_drawTextOutline.call(this,text,tx,ty,maxWidth)}function _$af870769(){this.initialize.apply(this,arguments)}function _$af870770(itemId){Sprite.prototype.initialize.call(this);this._itemId= itemId;this.createSprites();this.refresh()}function _$af870771(){this.createIconSprite();this.createTextSprite()}function _$af870772(){this._iconSprite=  new Sprite();this._iconSprite.bitmap=  new Bitmap(this.iconSetting().width,this.iconSetting().height);this._iconSprite.x= this.iconSetting().x;this._iconSprite.y= this.iconSetting().y;this._iconSprite.opacity= this.iconSetting().opacity;this.addChild(this._iconSprite)}function _$af870773(){this._textSprite=  new Sprite();this._textSprite.bitmap=  new Bitmap(this.textSetting().width,this.textSetting().height);this._textSprite.x= this.textSetting().x;this._textSprite.y= this.textSetting().y;this._textSprite.opacity= this.textSetting().opacity;this.addChild(this._textSprite)}function _$af870774(){return Dhoom.ItemDisplayHUD.iconSetting}function _$af870775(){return Dhoom.ItemDisplayHUD.textSetting}function _$af870776(){this.refreshIconSprite();this.refreshTextSprite();this._needRefresh=  !ImageManager.isReady();this._tempValue= $gameParty.numItems($dataItems[this._itemId])}function _$af870777(){this._iconSprite.bitmap.clear();var bitmap=ImageManager.loadSystem("IconSet");var item=$dataItems[this._itemId];if(!item){return};var iconIndex=item.iconIndex;var pw=Window_Base._iconWidth;var ph=Window_Base._iconHeight;var sx=iconIndex% 16* pw;var sy=Math.floor(iconIndex/ 16)* ph;this._iconSprite.bitmap.blt(bitmap,sx,sy,pw,ph,0,0,this._iconSprite.width,this._iconSprite.height)}function _$af870778(){this._textSprite.bitmap.clear();this._textSprite.bitmap.changeTextStyle(this.textSetting().style);var item=$dataItems[this._itemId];if(!item){return};var text=this.textSetting().text.format(item.name,$gameParty.numItems(item));this._textSprite.bitmap.drawText(text,0,0,this._textSprite.width,this._textSprite.height)}function _$af870779(){Sprite.prototype.update.call(this);if((this._needRefresh&& ImageManager.isReady())|| this._tempValue!== $gameParty.numItems($dataItems[this._itemId])){this.refresh()}}function _$af870780(){this.initialize.apply(this,arguments)}function _$af870781(){Sprite.prototype.initialize.call(this);this.x= Dhoom.ItemDisplayHUD.startX;this.y= Dhoom.ItemDisplayHUD.startY;this.createSprites()}function _$af870782(){this._sprites= [];for(var i=0;i< Dhoom.ItemDisplayHUD.items.length;i++){var itemId=Dhoom.ItemDisplayHUD.items[i];var sprite= new _$af870769(itemId);if(Dhoom.ItemDisplayHUD.align=== "horizontal"){sprite.x= Dhoom.ItemDisplayHUD.spacing* i}else {sprite.y= Dhoom.ItemDisplayHUD.spacing* i};this._sprites.push(sprite);this.addChild(sprite)}}function _$af870783(){Sprite.prototype.update.call(this);this.visible= $gameSwitches.value(Dhoom.ItemDisplayHUD.switchId)}function _$af870784(){Dhoom.ItemDisplayHUD.Spriteset_Map_createUpperLayer.call(this);this.createItemDisplayHUD()}function _$af870785(){this._spritesetItemDisplay=  new _$af870780();this.addChild(this._spritesetItemDisplay)}Sprite_ItemDisplayHUD= _$af870769;Spriteset_ItemDisplayHUD= _$af870780;Dhoom.Parameters= PluginManager.parameters("DhoomItemDisplayHUD");if(!Dhoom.jsonParse){Dhoom.jsonParse= _$af870762};if(!Dhoom.loadParam){Dhoom.loadParam= _$af870764};Dhoom.ItemDisplayHUD.switchId= Dhoom.loadParam("Switch ID");Dhoom.ItemDisplayHUD.items= Dhoom.loadParam("Displayed Items");Dhoom.ItemDisplayHUD.align= Dhoom.loadParam("Alignment");Dhoom.ItemDisplayHUD.startX= Dhoom.loadParam("Start X");Dhoom.ItemDisplayHUD.startY= Dhoom.loadParam("Start Y");Dhoom.ItemDisplayHUD.spacing= Dhoom.loadParam("Spacing");Dhoom.ItemDisplayHUD.iconSetting= Dhoom.loadParam("Icon Setting");Dhoom.ItemDisplayHUD.textSetting= Dhoom.loadParam("Text Setting");if( typeof Bitmap.prototype.changeTextStyle=== "undefined"){Dhoom.MobileMainMenu.Bitmap_initialize= Bitmap.prototype.initialize;Bitmap.prototype.initialize= _$af870765;Dhoom.MobileMainMenu.Bitmap_makeFontNameText= Bitmap.prototype._makeFontNameText;Bitmap.prototype._makeFontNameText= _$af870766;Bitmap.prototype.changeTextStyle= _$af870767;Dhoom.MobileMainMenu.Bitmap_drawTextOutline= Bitmap.prototype._drawTextOutline;Bitmap.prototype._drawTextOutline= _$af870768};_$af870769.prototype= Object.create(Sprite.prototype);_$af870769.prototype.constructor= _$af870769;_$af870769.prototype.initialize= _$af870770;_$af870769.prototype.createSprites= _$af870771;_$af870769.prototype.createIconSprite= _$af870772;_$af870769.prototype.createTextSprite= _$af870773;_$af870769.prototype.iconSetting= _$af870774;_$af870769.prototype.textSetting= _$af870775;_$af870769.prototype.refresh= _$af870776;_$af870769.prototype.refreshIconSprite= _$af870777;_$af870769.prototype.refreshTextSprite= _$af870778;_$af870769.prototype.update= _$af870779;_$af870780.prototype= Object.create(Sprite.prototype);_$af870780.prototype.constructor= _$af870780;_$af870780.prototype.initialize= _$af870781;_$af870780.prototype.createSprites= _$af870782;_$af870780.prototype.update= _$af870783;Dhoom.ItemDisplayHUD.Spriteset_Map_createUpperLayer= Spriteset_Map.prototype.createUpperLayer;Spriteset_Map.prototype.createUpperLayer= _$af870784;Spriteset_Map.prototype.createItemDisplayHUD= _$af870785
}();