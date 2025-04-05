//=============================================================================
// DhoomAnimatedTitleBackground.js
//=============================================================================
 
/*:
 * @plugindesc Change Title Screen background. Added multiple layers and movements.
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @param Layer 1 Filename
 * @desc Filename that will be used for layer 1. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 1 Movement
 * @desc Layer 1 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 2 Filename
 * @desc Filename that will be used for layer 2. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 2 Movement
 * @desc Layer 2 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 3 Filename
 * @desc Filename that will be used for layer 3. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 3 Movement
 * @desc Layer 3 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 4 Filename
 * @desc Filename that will be used for layer 4 Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 4 Movement
 * @desc Layer 4 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 5 Filename
 * @desc Filename that will be used for layer 5. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 5 Movement
 * @desc Layer 5 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 6 Filename
 * @desc Filename that will be used for layer 6. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 6 Movement
 * @desc Layer 6 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 7 Filename
 * @desc Filename that will be used for layer 7. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 7 Movement
 * @desc Layer 7 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 8 Filename
 * @desc Filename that will be used for layer 8. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 8 Movement
 * @desc Layer 8 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 9 Filename
 * @desc Filename that will be used for layer 9. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 9 Movement
 * @desc Layer 9 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 10 Filename
 * @desc Filename that will be used for layer 10. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 10 Movement
 * @desc Layer 10 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
  * @param Layer 11 Filename
 * @desc Filename that will be used for layer 11. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 11 Movement
 * @desc Layer 11 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 12 Filename
 * @desc Filename that will be used for layer 12. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 12 Movement
 * @desc Layer 12 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 13 Filename
 * @desc Filename that will be used for layer 13. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 13 Movement
 * @desc Layer 13 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 14 Filename
 * @desc Filename that will be used for layer 14. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 14 Movement
 * @desc Layer 14 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 15 Filename
 * @desc Filename that will be used for layer 15. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 15 Movement
 * @desc Layer 15 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
 * @param Layer 16 Filename
 * @desc Filename that will be used for layer 16. Leave empty if didn't used. Put it in img/system/.
 * @default 
 * @param Layer 16 Movement
 * @desc Layer 16 movement. [start x, start y, end x, end y, duration, loop?]
 * @default [0, 0, 0, 0, 0, false]
 *
@help 
(c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
*/
 
+function() {
function _$af2904874(){var params=PluginManager.parameters("DhoomAnimatedTitleBackground");var maxLayers=16;var filenames=[];var movements=[];for(var i=0;i< maxLayers;i++){filenames[i]= String(params["Layer "+ (i+ 1)+ " Filename"]|| "");movements[i]= eval(params["Layer "+ (i+ 1)+ " Movement"]|| "[0, 0, 0, 0, 0, false]")};var _drd_animtit_sctit_createBackground=Scene_Title.prototype.createBackground;Scene_Title.prototype.createBackground= function(){if(!_$af2904874){return};_drd_animtit_sctit_createBackground.call(this);this._backSprite1.visible= false;this._backSprite2.visible= false;this._backgrounds_duration= [];this._backgrounds= [];for(var i=0;i< maxLayers;i++){this._backgrounds[i]=  new Sprite(ImageManager.loadSystem(filenames[i]));this._backgrounds[i].x= movements[i][0];this._backgrounds[i].y= movements[i][1];this._backgrounds_duration[i]= movements[i][4];this.addChild(this._backgrounds[i])}};var _drd_animtit_sctit_update=Scene_Title.prototype.update;Scene_Title.prototype.update= function(){_drd_animtit_sctit_update.call(this);this.drd_update_backgrounds()};Scene_Title.prototype.drd_update_backgrounds= function(){for(var i=0;i< maxLayers;i++){if(this._backgrounds_duration[i]<= 0){if(movements[i][5]){if(!_$af2904874){_$af2904874()};this._backgrounds[i].x= movements[i][0];if(_$af2904874=== true){_$af2904874(0,0)};this._backgrounds[i].y= movements[i][1];this._backgrounds_duration[i]= movements[i][4]}else {this._backgrounds[i].x= movements[i][2];this._backgrounds[i].y= movements[i][3];continue}};var d=this._backgrounds_duration[i];this._backgrounds[i].x= (this._backgrounds[i].x* (d- 1)+ movements[i][2])/ d;this._backgrounds[i].y= (this._backgrounds[i].y* (d- 1)+ movements[i][3])/ d;this._backgrounds_duration[i]--}}}(_$af2904874)()
}();