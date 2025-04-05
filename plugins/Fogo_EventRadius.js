
//=============================================================================
// Event Radius (v1.0.6)
// by Fogomax
// Edited by DrDhoom (1.1a)
//=============================================================================

/*:
  * @author Fogomax
  * @plugindesc Increase the size of the events in all directions
  *
  * @help
  * ===========================================================================
  * œ Notetags
  * ===========================================================================
  * There is only one notetag:
  * * <EventSize: [left] [top-left] [top] [top-right] [right] [bottom-right] [bottom] [bottom-left] [passable(true or false)(optional)]>
  *
  * The values are in tiles. Example:
  * * <EventSize: 1 2 3 3 3 2 2 1>
  * * <EventSize: 0 0 2 0 1 0 3 0 true>
  *
*/

"use strict";

var Imported = Imported || {};
Imported["Fogo_EventRadius"] = "1.0.6";

var Fogo = Fogo || {};
Fogo.EventRadius = {};

(function ($) {
	var LEFT = 0;
	var TOP_LEFT = 1;
	var TOP = 2;
	var TOP_RIGHT = 3;
	var RIGHT = 4;
	var BOTTOM_RIGHT = 5;
	var BOTTOM = 6;
	var BOTTOM_LEFT = 7;

	//-----------------------------------------------------------------------------
	// Game_Map
	//

	Game_Map.prototype.eventsXy = function (x, y) {
		return this.events().filter(function (event) {
			return containsEvent(x, y, event);
		});
	};

	//-----------------------------------------------------------------------------
	// Game_Event
	//

	var _Game_Event_initialize = Game_Event.prototype.initialize;

	Game_Event.prototype.initialize = function (mapId, eventId) {
		this._customSize = [0, 0, 0, 0, 0, 0, 0, 0];
		this._customSizePassable = true;
		this._usingCustomSize = false;
		_Game_Event_initialize.call(this, mapId, eventId);
	};

	var _Game_Event_setupPage = Game_Event.prototype.setupPage;

	Game_Event.prototype.setupPage = function () {
		_Game_Event_setupPage.call(this);
		if (!this._erased && this.page()) {
			var pattern = /<EventSize: +(\d+) +(\d+) +(\d+) +(\d+) +(\d+) +(\d+) +(\d+) +(\d+) *(true|false)*>/i;
			var matched = false;

			for (var i = 0; i < this.page().list.length; i++) {
				if (this.page().list[i].code === 108 || this.page().list[i].code === 408) {
					var comment = this.page().list[i].parameters[0];
					var match = comment.match(pattern);
					if (match) {
						var param = match;
						match = match.map(function (x) { return parseInt(x); });
						matched = true;
						this._customSize[LEFT] = match[1];
						this._customSize[TOP_LEFT] = match[2];
						this._customSize[TOP] = match[3];
						this._customSize[TOP_RIGHT] = match[4];
						this._customSize[RIGHT] = match[5];
						this._customSize[BOTTOM_RIGHT] = match[6];
						this._customSize[BOTTOM] = match[7];
						this._customSize[BOTTOM_LEFT] = match[8];
						this._customSizePassable = param[9] ? eval(param[9]) : false;
						this._usingCustomSize = true;
					}
				}
			}

			if (!matched) {
				this._customSize = [0, 0, 0, 0, 0, 0, 0, 0];
				this._customSizePassable = true;
				this._usingCustomSize = false;
			}
		}
	};

	//-----------------------------------------------------------------------------
	// Game_Player
	//

	var _Game_Player_checkEventTriggerTouch = Game_Player.prototype.checkEventTriggerTouch;

	Game_Player.prototype.checkEventTriggerTouch = function (x, y) {
		if (this.canStartLocalEvents() && containsCustomSizeEvent(x, y) && $gameTemp.destinationX() && $gameTemp.destinationY()) {
			this.startMapEvent($gameTemp.destinationX(), $gameTemp.destinationY(), [0, 1, 2], true);
		} else {
			_Game_Player_checkEventTriggerTouch.call(this, x, y);
		}
	};

	var _Game_Player_triggerTouchActionD1 = Game_Player.prototype.triggerTouchActionD1;
	Game_Player.prototype.triggerTouchActionD1 = function(x1, y1) {
		this._isProcTriggerTouchActionD1 = true;
		var result = _Game_Player_triggerTouchActionD1.call(this, x1, y1);
		this._isProcTriggerTouchActionD1 = false;
		return result;
	};

	var _Game_Player_checkEventTriggerHere = Game_Player.prototype.checkEventTriggerHere;
	Game_Player.prototype.checkEventTriggerHere = function (triggers) {
		_Game_Player_checkEventTriggerHere.call(this, triggers);
		if (this._isProcTriggerTouchActionD1 && !$gameMap.setupStartingEvent() && this.canStartLocalEvents()) {
			this.startMapEvent(this.x, this.y, triggers, true);
			if ($gameMap.setupStartingEvent()) {
				this.turnTowardCharacter($gameMap.event($gameMap._interpreter.eventId()));
			}
		}
	};

	//-----------------------------------------------------------------------------
	// Game_CharacterBase
	//

	Game_CharacterBase.prototype.isCollidedWithEvents = function (x, y) {
		return isCollidedWithEvents(x, y);
	};

	//-----------------------------------------------------------------------------
	// Game_Event
	//

	var _Game_Event_initMembers = Game_Event.prototype.initMembers;

	Game_Event.prototype.initMembers = function () {
		_Game_Event_initMembers.call(this);
		this._ferValues = [0, [0, 0], 0, [0, 0], 0, [0, 0], 0, [0, 0]];
		this._lastFerValues = [0, 0];
		this._lastCustomSize = [];
	};

	var _Game_Event_update = Game_Event.prototype.update;

	Game_Event.prototype.update = function () {
		_Game_Event_update.call(this);
		if (this._lastFerValues[0] != this._x || this._lastFerValues[1] != this._y || !this._customSize.equals(this._lastCustomSize)) {
			this._ferValues[LEFT] = this._x - this._customSize[LEFT];
			this._ferValues[RIGHT] = this._x + this._customSize[RIGHT];
			this._ferValues[TOP] = this._y - this._customSize[TOP];
			this._ferValues[BOTTOM] = this._y + this._customSize[BOTTOM];
			this._ferValues[TOP_LEFT][0] = this._x - this._customSize[TOP_LEFT];
			this._ferValues[TOP_LEFT][1] = this._y - this._customSize[TOP_LEFT];
			this._ferValues[TOP_RIGHT][0] = this._x + this._customSize[TOP_RIGHT];
			this._ferValues[TOP_RIGHT][1] = this._y - this._customSize[TOP_RIGHT];
			this._ferValues[BOTTOM_LEFT][0] = this._x - this._customSize[BOTTOM_LEFT];
			this._ferValues[BOTTOM_LEFT][1] = this._y + this._customSize[BOTTOM_LEFT];
			this._ferValues[BOTTOM_RIGHT][0] = this._x + this._customSize[BOTTOM_RIGHT];
			this._ferValues[BOTTOM_RIGHT][1] = this._y + this._customSize[BOTTOM_RIGHT];
			this._lastFerValues[0] = this._x;
			this._lastFerValues[1] = this._y;
			this._lastCustomSize = this._customSize.clone();
		}
	};

	Game_Event.prototype.isCollidedWithEvents = function (x, y) {
		return isCollidedWithEvents(x, y);
	};

	var _Game_Event_canPass = Game_Event.prototype.canPass;

	Game_Event.prototype.canPass = function (x, y, d) {
		if (!this._customSizePassable) {
			x += d == 6 ? this._customSize[RIGHT] : d == 4 ? -this._customSize[LEFT] : 0;
			y += d == 2 ? this._customSize[BOTTOM] : d == 8 ? -this._customSize[TOP] : 0;
		}
		return _Game_Event_canPass.call(this, x, y, d);
	};

	//-----------------------------------------------------------------------------
	// General functions
	//

	var isCollidedWithEvents = function (x, y) {
		var events = $gameMap.events();
		return events.some(function (event) {
			return event.isNormalPriority() && !(event.isThrough() || event.isDebugThrough()) && containsEvent(x, y, event, event._customSizePassable);
		});
	};

	var containsEvent = function (x, y, event, through) {
		if (!event._usingCustomSize || through) return event.pos(x, y);
		return ((x >= event._ferValues[LEFT] && x <= event._ferValues[RIGHT] && y == event.y) ||
			(y >= event._ferValues[TOP] && y <= event._ferValues[BOTTOM] && x == event.x) ||
			(x >= event._ferValues[TOP_LEFT][0] && x < event.x && y >= event._ferValues[TOP_LEFT][1] && y < event.y) ||
			(x > event.x && x <= event._ferValues[TOP_RIGHT][0] && y >= event._ferValues[TOP_RIGHT][1] && y < event.y) ||
			(x >= event._ferValues[BOTTOM_LEFT][0] && x < event.x && y > event.y && y <= event._ferValues[BOTTOM_LEFT][1]) ||
			(x > event.x && x <= event._ferValues[BOTTOM_RIGHT][0] && y > event.y && y <= event._ferValues[BOTTOM_RIGHT][1]));
	};

	var containsCustomSizeEvent = function (x, y) {
		var events = $gameMap.eventsXy(x, y);
		return events.some(function (event) {
			return event._usingCustomSize;
		});
	};
})(Fogo.EventRadius);