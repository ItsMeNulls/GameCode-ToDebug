//=============================================================================
// DhoomCWSocialMediaAddon.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_CWSocialMedia = true;

var Dhoom = Dhoom || {};
Dhoom.CWSocialMedia = Dhoom.CWSocialMedia || {};

/*:
 * @plugindesc v1.0a - TDDP MouseSystemEx required
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @param Twitter Hover Cursor
 * @desc Cursor filename
 * @default select
 *
 * @param Facebook Hover Cursor
 * @desc Cursor filename
 * @default select
 *
 * @param Google+ Hover Cursor
 * @desc Cursor filename
 * @default select
 *
 * @param Website Hover Cursor
 * @desc Cursor filename
 * @default select
 *
 * @help 
(c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
*/

Dhoom.Parameters = PluginManager.parameters('DhoomCWSocialMediaAddon');

Dhoom.CWSocialMedia.cursorTwitter = String(Dhoom.Parameters['Twitter Hover Cursor']);
Dhoom.CWSocialMedia.cursorFacebook = String(Dhoom.Parameters['Facebook Hover Cursor']);
Dhoom.CWSocialMedia.cursorGoogle = String(Dhoom.Parameters['Google+ Hover Cursor']);
Dhoom.CWSocialMedia.cursorWebsite = String(Dhoom.Parameters['Website Hover Cursor']);

if (Imported.CW_SocialMediaButtons) {

	//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
	// TouchInput
	//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
	if (typeof TouchInput._mouseX === 'undefined') {
		Dhoom.CWSocialMedia.TouchInput_clear = TouchInput.clear;
		TouchInput.clear = function() {
			Dhoom.CWSocialMedia.TouchInput_clear.call(this);
			this._mouseX = 0;
			this._mouseY = 0;
		};

		Object.defineProperty(TouchInput, 'mouseX', {
			get: function() {
				return this._mouseX;
			},
			configurable: true
		});

		Object.defineProperty(TouchInput, 'mouseY', {
			get: function() {
				return this._mouseY;
			},
			configurable: true
		});

		Dhoom.CWSocialMedia.TouchInput_onMouseMove = TouchInput._onMouseMove;
		TouchInput._onMouseMove = function(event) {
			Dhoom.CWSocialMedia.TouchInput_onMouseMove.call(this, event);
			this._mouseX = Graphics.pageToCanvasX(event.pageX);
			this._mouseY = Graphics.pageToCanvasY(event.pageY);
		};
	}

	//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
	// Scene_Title
	//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
	Dhoom.CWSocialMedia.Scene_Title_update = Scene_Title.prototype.update;
	Scene_Title.prototype.update = function() {
		Dhoom.CWSocialMedia.Scene_Title_update.call(this);
		this.updateCWSocialMediaCursor();
	};

	Scene_Title.prototype.updateCWSocialMediaCursor = function() {
		if (!Imported.TDDP_MouseSystemEx || !TDDP_MouseSystemEx.useCustomCursor) return;
		if (this.checkButtonMouseHover(this._twitterButton)) {
			TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.CWSocialMedia.cursorTwitter));
			this._iconHovered = true;
		} else if (this.checkButtonMouseHover(this._facebookButton)) {
			TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.CWSocialMedia.cursorFacebook));
			this._iconHovered = true;
		} else if (this.checkButtonMouseHover(this._googleButton)) {
			TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.CWSocialMedia.cursorGoogle));
			this._iconHovered = true;
		} else if (this.checkButtonMouseHover(this._websiteButton)) {
			TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(Dhoom.CWSocialMedia.cursorWebsite));
			this._iconHovered = true;
		} else {
			if (this._iconHovered) {
				TDDP_MouseSystemEx._resetCustomCursor();
				this._iconHovered = false;
			}			
		}
	};

	Scene_Title.prototype.checkButtonMouseHover = function(sprite) {
		var x = sprite.canvasToLocalX(TouchInput._mouseX);
		var y = sprite.canvasToLocalY(TouchInput._mouseY);
		return x >= 0 && y >= 0 && x < sprite.width && y < sprite.height;
	};

}