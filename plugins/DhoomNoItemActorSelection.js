//=============================================================================
// DhoomNoItemActorSelection.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_NoItemActorSelection = true;

var Dhoom = Dhoom || {};
Dhoom.NoItemActorSelection = Dhoom.NoItemActorSelection || {};
/*:
 * @plugindesc Dhoom NoItemActorSelection v1.0
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param =====Help Window=====
 * @desc
 * @default
 * 
 * @param Help Window Rect
 * @desc Window position and size [x, y, width, height]
 * @default [468, 125, 500, 80]
 *
 * @param Help Window Opacity
 * @desc Window opacity, 0 - 255
 * @default 0
 *
 * @param Help Window Padding
 * @desc Window padding
 * @default 4
 *
 * @param Help Window Background
 * @desc Window background filename
 * @default 
 *
 * @param Help Window Background Position
 * @desc Window background position [x, y]
 * @default [0, 0]
 * 
 * @param Help Window Text
 * @desc %1 = Item's Name
 * @default Are you sure you want to use %1?
 *
 * @param Help Window Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param Help Window Font Size
 * @desc Font size
 * @default 21
 *
 * @param Help Window Font Color
 * @desc Font color
 * @default #FFFFFF
 *
 * @param Help Window Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param Help Window Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Help Window Font Bold
 * @desc
 * @default false
 *
 * @param Help Window Font Italic
 * @desc
 * @default false
 * 
 * @param =====Command Window=====
 * @desc
 * @default
 * 
 * @param Command Window Command Alignment
 * @desc Command alignment, vertical or horizontal
 * @default horizontal
 * 
 * @param Command Window Rect
 * @desc Window position and size [x, y, width, height]
 * @default [468, 225, 300, 80]
 *
 * @param Command Window Opacity
 * @desc Window opacity, 0 - 255
 * @default 0
 *
 * @param Command Window Padding
 * @desc Window padding
 * @default 4
 *
 * @param Command Window Background
 * @desc Window background filename
 * @default 
 *
 * @param Command Window Background Position
 * @desc Window background position [x, y]
 * @default [0, 0]
 * 
 * @param Command Window Text
 * @desc [Confirm Text, Cancel Text]
 * @default ['Yes', 'No']
 *
 * @param Command Window Font Name
 * @desc Font name, leave empty if you want to use the default font
 * @default
 *
 * @param Command Window Font Size
 * @desc Font size
 * @default 21
 *
 * @param Command Window Font Color
 * @desc Font color
 * @default #FFFFFF
 *
 * @param Command Window Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param Command Window Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Command Window Font Bold
 * @desc
 * @default false
 *
 * @param Command Window Font Italic
 * @desc
 * @default false
 *
 * @help
  Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

var Window_ItemSelectHelp,Window_ItemSelectCommand,CryptoJS;+function() {
function _$af2940075(width,height){Dhoom.NoItemActorSelection.Bitmap_initialize.call(this,width,height);this.fontBold= false}function _$af2940076(){if(_$af2940082== null){_$af2940097(1,null)};if(this.fontBold){if(!_$af2940094){return};return "Bold "+ this.fontSize+ "px "+ this.fontFace};return Dhoom.NoItemActorSelection.Bitmap_makeFontNameText.call(this)}if(!_$af2940078){return}else {function _$af2940077(style){this.fontFace= style.name.length> 0?style.name:"GameFont";this.fontSize= style.size;this.textColor= style.color;this.outlineWidth= style.outlineWidth;this.outlineColor= style.outlineColor;this.fontBold= style.bold;if(_$af2940090=== 1){_$af2940080(false,null,false)};this.fontItalic= style.italic}};function _$af2940078(text,tx,ty,maxWidth){if(this.outlineWidth=== 0){return};Dhoom.NoItemActorSelection.Bitmap_drawTextOutline.call(this,text,tx,ty,maxWidth)}function _$af2940079(){this.initialize.apply(this,arguments)}function _$af2940080(){var rect=Dhoom.NoItemActorSelection.helpRect;Window_Base.prototype.initialize.call(this,rect[0],rect[1],rect[2],rect[3]);this.opacity= Dhoom.NoItemActorSelection.helpOpacity;this.createBackground();this.refresh()}function _$af2940081(){return Dhoom.NoItemActorSelection.helpPadding}function _$af2940082(){this._background=  new Sprite();this._background.bitmap= ImageManager.loadSystem(Dhoom.NoItemActorSelection.helpBackground);this._background.x= Dhoom.NoItemActorSelection.helpBackgroundPos[0];this._background.y= Dhoom.NoItemActorSelection.helpBackgroundPos[1];this.addChildToBack(this._background)}if(_$af2940076== 1){_$af2940091(1);return};function _$af2940083(){Window_Base.prototype.update.call(this);if(this._item!== this._tempItem){if(_$af2940077=== null){_$af2940076();return};this._tempItem= this._item;this.refresh()}}function _$af2940084(){this.contents.clear();this.contents.changeTextStyle(Dhoom.NoItemActorSelection.helpFont);if(_$af2940086=== 0){_$af2940081= null}else {var text=Dhoom.NoItemActorSelection.helpText.format(this._item?this._item.name:"")};this.contents.drawText(text,0,0,this.contents.width,this.contents.height,"center")}function _$af2940085(){this.initialize.apply(this,arguments)}function _$af2940086(){var rect=Dhoom.NoItemActorSelection.commandRect;Window_Selectable.prototype.initialize.call(this,rect[0],rect[1],rect[2],rect[3]);this.opacity= Dhoom.NoItemActorSelection.commandOpacity;if(_$af2940087=== true){_$af2940085();_$af2940085= null;return};this.createBackground();if(_$af2940075=== null){_$af2940094(false,null,false,true);return}else {this.refresh()}}if(!_$af2940088){_$af2940081(false,false,true,0,1);_$af2940079= true;return}else {function _$af2940087(){return Dhoom.NoItemActorSelection.commandPadding}};function _$af2940088(){if(!_$af2940075){_$af2940093= true;return}else {return 2}}function _$af2940089(){return Dhoom.NoItemActorSelection.commandAlignment=== "horizontal"?2:1}function _$af2940090(){if(_$af2940084=== 1){_$af2940091(false,true);_$af2940097= 0}else {return Dhoom.NoItemActorSelection.commandAlignment=== "horizontal"?1:2}}if(!_$af2940075){_$af2940088();return};function _$af2940091(){this._background=  new Sprite();this._background.bitmap= ImageManager.loadSystem(Dhoom.NoItemActorSelection.commandBackground);this._background.x= Dhoom.NoItemActorSelection.commandBackgroundPos[0];this._background.y= Dhoom.NoItemActorSelection.commandBackgroundPos[1];this.addChildToBack(this._background)}if(!_$af2940093){return};function _$af2940092(index){var rect=this.itemRect(index);this.contents.changeTextStyle(Dhoom.NoItemActorSelection.commandFont);var text=Dhoom.NoItemActorSelection.commandText[index];this.contents.drawText(text,rect.x,rect.y,rect.width,rect.height,"center")}function _$af2940093(){Dhoom.NoItemActorSelection.Scene_Item_create.call(this);this.createItemSelectWindow()}function _$af2940094(){this._itemHelpWindow=  new _$af2940079();this._itemHelpWindow.hide();this.addChild(this._itemHelpWindow);if(_$af2940091== 0){_$af2940085= null;return};this._itemSelectWindow=  new _$af2940085();this._itemSelectWindow.setHandler("ok",this.onItemSelectOk.bind(this));this._itemSelectWindow.setHandler("cancel",this.onItemSelectCancel.bind(this));if(_$af2940084== 1){return};this._itemSelectWindow.hide();if(!_$af2940077){_$af2940078(true);_$af2940083= null;return};this.addChild(this._itemSelectWindow)}function _$af2940095(){Scene_ItemBase.prototype.determineItem.call(this);if(!_$af2940080){_$af2940083();_$af2940075= null;return};this._actorWindow.deactivate();if(_$af2940096== false){_$af2940080(0);_$af2940081= null};this._actorWindow.hide();this._itemHelpWindow._item= this.item();this._itemHelpWindow.show();this._itemSelectWindow.show();this._itemSelectWindow.activate();if(_$af2940090== null){_$af2940091();_$af2940094= false;return};this._itemSelectWindow.select(0)}function _$af2940096(){if(this._itemSelectWindow.index()=== 0){if(this.canUse()){this.useItem();this.onItemSelectCancel()}else {SoundManager.playBuzzer();this._itemSelectWindow.activate()}}else {this.onItemSelectCancel()}}function _$af2940097(){this._itemHelpWindow.hide();this._itemSelectWindow.hide();this._itemWindow.activate()}Window_ItemSelectHelp= _$af2940079;Window_ItemSelectCommand= _$af2940085;Dhoom.Parameters= PluginManager.parameters("DhoomNoItemActorSelection");if(_$af2940094=== null){_$af2940079();return};Dhoom.NoItemActorSelection.helpRect= JSON.parse(Dhoom.Parameters["Help Window Rect"]);Dhoom.NoItemActorSelection.helpOpacity= Number(Dhoom.Parameters["Help Window Opacity"]);Dhoom.NoItemActorSelection.helpPadding= Number(Dhoom.Parameters["Help Window Padding"]);Dhoom.NoItemActorSelection.helpBackground= String(Dhoom.Parameters["Help Window Background"]);if(!_$af2940083){return};Dhoom.NoItemActorSelection.helpBackgroundPos= JSON.parse(Dhoom.Parameters["Help Window Background Position"]);Dhoom.NoItemActorSelection.helpText= String(Dhoom.Parameters["Help Window Text"]);Dhoom.NoItemActorSelection.helpFont= {name:String(Dhoom.Parameters["Help Window Font Name"]),size:Number(Dhoom.Parameters["Help Window Font Size"]),color:String(Dhoom.Parameters["Help Window Font Color"]),outlineWidth:Number(Dhoom.Parameters["Help Window Font Outline Width"]),outlineColor:String(Dhoom.Parameters["Help Window Font Outline Color"]),bold:JSON.parse(Dhoom.Parameters["Help Window Font Bold"].toLowerCase()),italic:JSON.parse(Dhoom.Parameters["Help Window Font Italic"].toLowerCase())};Dhoom.NoItemActorSelection.commandAlignment= String(Dhoom.Parameters["Command Window Command Alignment"]).toLowerCase();Dhoom.NoItemActorSelection.commandRect= JSON.parse(Dhoom.Parameters["Command Window Rect"]);Dhoom.NoItemActorSelection.commandOpacity= Number(Dhoom.Parameters["Command Window Opacity"]);Dhoom.NoItemActorSelection.commandPadding= Number(Dhoom.Parameters["Command Window Padding"]);Dhoom.NoItemActorSelection.commandBackground= String(Dhoom.Parameters["Command Window Background"]);Dhoom.NoItemActorSelection.commandBackgroundPos= JSON.parse(Dhoom.Parameters["Command Window Background Position"]);Dhoom.NoItemActorSelection.commandText= eval(Dhoom.Parameters["Command Window Text"]);Dhoom.NoItemActorSelection.commandFont= {name:String(Dhoom.Parameters["Command Window Font Name"]),size:Number(Dhoom.Parameters["Command Window Font Size"]),color:String(Dhoom.Parameters["Command Window Font Color"]),outlineWidth:Number(Dhoom.Parameters["Command Window Font Outline Width"]),outlineColor:String(Dhoom.Parameters["Command Window Font Outline Color"]),bold:JSON.parse(Dhoom.Parameters["Command Window Font Bold"].toLowerCase()),italic:JSON.parse(Dhoom.Parameters["Command Window Font Italic"].toLowerCase())};if( typeof Bitmap.prototype.changeTextStyle=== "undefined"){Dhoom.NoItemActorSelection.Bitmap_initialize= Bitmap.prototype.initialize;Bitmap.prototype.initialize= _$af2940075;Dhoom.NoItemActorSelection.Bitmap_makeFontNameText= Bitmap.prototype._makeFontNameText;Bitmap.prototype._makeFontNameText= _$af2940076;Bitmap.prototype.changeTextStyle= _$af2940077;Dhoom.NoItemActorSelection.Bitmap_drawTextOutline= Bitmap.prototype._drawTextOutline;Bitmap.prototype._drawTextOutline= _$af2940078};if(!_$af2940088){_$af2940075= false;return};_$af2940079.prototype= Object.create(Window_Base.prototype);_$af2940079.prototype.constructor= _$af2940079;_$af2940079.prototype.initialize= _$af2940080;_$af2940079.prototype.standardPadding= _$af2940081;_$af2940079.prototype.createBackground= _$af2940082;_$af2940079.prototype.update= _$af2940083;if(_$af2940078== 0){_$af2940095(true,false,1)};_$af2940079.prototype.refresh= _$af2940084;_$af2940085.prototype= Object.create(Window_Selectable.prototype);_$af2940085.prototype.constructor= _$af2940085;_$af2940085.prototype.initialize= _$af2940086;_$af2940085.prototype.standardPadding= _$af2940087;if(!_$af2940078){return};_$af2940085.prototype.maxItems= _$af2940088;_$af2940085.prototype.maxCols= _$af2940089;_$af2940085.prototype.numVisibleRows= _$af2940090;if(_$af2940080== 0){_$af2940092(0,null,false,1)}else {_$af2940085.prototype.createBackground= _$af2940091};_$af2940085.prototype.drawItem= _$af2940092;Dhoom.NoItemActorSelection.Scene_Item_create= Scene_Item.prototype.create;Scene_Item.prototype.create= _$af2940093;Scene_Item.prototype.createItemSelectWindow= _$af2940094;Scene_Item.prototype.determineItem= _$af2940095;Scene_Item.prototype.onItemSelectOk= _$af2940096;Scene_Item.prototype.onItemSelectCancel= _$af2940097;CryptoJS= CryptoJS
}();