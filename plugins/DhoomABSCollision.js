//=============================================================================
// DhoomABSCollision.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_ABSCollision = "1.0";

var Dhoom = Dhoom || {};
Dhoom.ABSCollision = Dhoom.ABSCollision || {};
/*:
 * @plugindesc Dhoom ABSCollision v1.0
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @help 
Boner Games © 2023 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

Dhoom.Parameters = $plugins.filter(function (obj) { return obj.description.match(/Dhoom ABSCollision/) })[0].parameters;
if (!Dhoom.jsonParse) {
    Dhoom.jsonParse = function (string) {
        if (typeof string === 'string') {
            try {
                return JSON.parse(string, function (key, value) {
                    if (typeof value === 'string') {
                        try {
                            return this.jsonParse(value);
                        } catch (e) {
                            return value;
                        }
                    } else {
                        return value;
                    }
                }.bind(this))
            } catch (e) {
                return string;
            }
        } else {
            return string;
        }
    };
}
if (!Dhoom.loadParam) {
    Dhoom.loadParam = function (sym) {
        return Dhoom.jsonParse(Dhoom.Parameters[sym]);
    };
}
Dhoom.ABSCollision.loadParameters = function () {
    for (var name in Dhoom.Parameters) {
        var sym = name.replace(/\s+/g, '');
        sym = sym[0].toLowerCase() + sym.slice(1);
        Dhoom.ABSCollision[sym] = Dhoom.loadParam(name);
    }
};
Dhoom.ABSCollision.loadParameters();

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// ImageManager
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
ImageManager._bitmapVisibleRects = {};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Bitmap
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Bitmap.prototype.getVisibleRect = function (x, y, width, height) {
    if (!x || x < 0) x = 0;
    if (!y || y < 0) y = 0;
    if (!width || width > this.width) width = this.width;
    if (!height || height > this.height) height = this.height;
    var threshold = 72;
    var sym = "%1:%2:%3:%4:%5".format(this.url, x, y, width, height);
    if (this.url && ImageManager._bitmapVisibleRects[sym]) return ImageManager._bitmapVisibleRects[sym];
    var rect = new Rectangle(0, 0, 0, 0);
    // top
    var found = false;
    for (var ty = y; ty < y + height; ty++) {
        for (var tx = x; tx < x + width; tx++) {
            if (this.getAlphaPixel(tx, ty) >= threshold) {
                rect.y = ty;
                found = true;
                break;
            }
        }
        if (found) break;
    }
    // bottom
    found = false;
    for (var ty = y + height - 1; ty >= y; ty--) {
        for (var tx = x; tx < x + width; tx++) {
            if (this.getAlphaPixel(tx, ty) >= threshold) {
                rect.height = ty - rect.y;
                found = true;
                break;
            }
        }
        if (found) break;
    }
    // left
    found = false;
    for (var tx = x; tx < x + width; tx++) {
        for (var ty = y; ty < y + height; ty++) {
            if (this.getAlphaPixel(tx, ty) >= threshold) {
                rect.x = tx;
                found = true;
                break;
            }
        }
        if (found) break;
    }
    // right
    found = false;
    for (var tx = x + width - 1; tx >= x; tx--) {
        for (var ty = y; ty < y + height; ty++) {
            if (this.getAlphaPixel(tx, ty) >= threshold) {
                rect.width = tx - rect.x;
                found = true;
                break;
            }
        }
        if (found) break;
    }
    if (this.url) ImageManager._bitmapVisibleRects[sym] = rect;
    return rect;
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Sprite
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Sprite.prototype.getVisibleRect = function () {
    if (this.bitmap) {
        var rect = JsonEx.makeDeepCopy(this.bitmap.getVisibleRect(this._frame.x, this._frame.y, this._frame.width, this._frame.height));
        rect.x -= this._frame.x;
        rect.y -= this._frame.y;
        return rect;
    }
    return new Rectangle(0, 0, 0, 0);
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Game_Map
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Game_Map.prototype.canvasToMapXCeil = function (x) {
    var tileWidth = this.tileWidth();
    var originX = this._displayX * tileWidth;
    var mapX = Math.ceil((originX + x) / tileWidth);
    return this.roundX(mapX);
};

Game_Map.prototype.canvasToMapYCeil = function (y) {
    var tileHeight = this.tileHeight();
    var originY = this._displayY * tileHeight;
    var mapY = Math.ceil((originY + y) / tileHeight);
    return this.roundY(mapY);
};

Game_Map.prototype.eventsXyRect = function (x, y, width, height) {
    if (!width || !height) return [];
    var mx = this.canvasToMapX(x);
    var my = this.canvasToMapY(y);
    var mw = this.canvasToMapXCeil(x + width);
    var mh = this.canvasToMapYCeil(y + height);
    var range = 3;
    return this.events().filter(event => {
        var inc = false;
        if (Imported["Fogo_EventRadius"]) {
            for (var ax = mx; ax < mw; ax++) {
                for (var ay = my; ay < mh; ay++) {
                    if (Dhoom.ABS.containsEvent(ax, ay, event)) {
                        inc = true;
                        break;
                    }
                }
                if (inc) break;
            }
        } else {
            inc = event.x >= mx - range && event.x < mw + range && event.y >= my - range && event.y < mh + range;
        }
        if (inc) {
            var sprite = event.getSprite();
            if (sprite && sprite.bitmap) {
                var sr = sprite.getVisibleRect();
                var sx = sr.x + sprite.x - sprite.anchor.x * sprite.width;
                var sy = sr.y + sprite.y - sprite.anchor.y * sprite.height;
                if (sr.width && sr.height) {
                    return (x < sx + sr.width && x + width > sx && y < sy + sr.height && y + height > sy);
                }
            }
        }
        return false;
    });
};

Game_Map.prototype.eventsXyRectNt = function (x, y, width, height) {
    return this.eventsXyRect(x, y, width, height).filter(event => !event.isThrough());
};

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// DABSBullet
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
DABSBullet.prototype.update = function () {
    this._lastX = this._realX;
    this._lastY = this._realY;
    this.updateMovement();
    this.updateCollision();
    Game_Picture.prototype.update.call(this);
};

DABSBullet.prototype.updateMovement = function () {
    if (this._name === '') return;
    var x2, y2;
    switch (this._bullet_dir) {
        case 1:
            this._realY += this._speed;
            if (this._isRotate) this._angle = 270;
            break;
        case 2:
            this._realX -= this._speed;
            if (this._isRotate) this._angle = 180;
            break;
        case 3:
            this._realX += this._speed;
            if (this._isRotate) this._angle = 0;
            break;
        case 4:
            this._realY -= this._speed;
            if (this._isRotate) this._angle = 90;
            break;
        case 5:
            this._realX -= this._speed * 0.707;
            this._realY += this._speed * 0.707;
            if (this._isRotate) this._angle = 225;
            break;
        case 6:
            this._realX += this._speed * 0.707;
            this._realY += this._speed * 0.707;
            if (this._isRotate) this._angle = 315;
            break;
        case 7:
            this._realX -= this._speed * 0.707;
            this._realY -= this._speed * 0.707;
            if (this._isRotate) this._angle = 135;
            break;
        case 8:
            this._realX += this._speed * 0.707;
            this._realY -= this._speed * 0.707;
            if (this._isRotate) this._angle = 45;
            break;
        case 9:
            this._realX += this._dx;
            this._realY += this._dy;
            if (this._isRotate) this._angle = Math.atan2(this._dy, this._dx) * 180 / Math.PI;
            break;
        case 10:
            x2 = this._target._realX - this._source._realX;
            y2 = this._target._realY - this._source._realY;
            this._dx = this._speed / Math.sqrt(x2 * x2 + y2 * y2) * x2;
            this._dy = this._speed / Math.sqrt(x2 * x2 + y2 * y2) * y2;
            this._realX += this._dx;
            this._realY += this._dy;
            if (this._isRotate) this._angle = Math.atan2(this._dy, this._dx) * 180 / Math.PI;
            break;
        case 11:
            this._speed += this._curveAngle / 360 / 20;
            this._oriAngle += this._curveAngle;
            this._dx = this._speed * Math.cos(this._oriAngle * Math.PI / 180);
            this._dy = this._speed * Math.sin(this._oriAngle * Math.PI / 180);
            this._realX += this._dx;
            this._realY += this._dy;
            if (this._isRotate) this._angle = this._oriAngle;
            break;
    }
    var tw = $gameMap.tileWidth();
    this._x = Math.round((this._realX - $gameMap._displayX) * tw + tw / 2);
    var th = $gameMap.tileHeight();
    this._y = Math.round((this._realY - $gameMap._displayY) * th + th / 2);
};

DABSBullet.prototype.updateCollision = function () {
    if (this._name === '') return;
    if (Math.round(this._lastX) === Math.round(this._realX0) &&
        Math.round(this._lastY) === Math.round(this._realY0)) return;
    if (SceneManager._scene._testSprite) {
        if (SceneManager._scene._testSprite.parent !== SceneManager._scene) {
            SceneManager._scene.addChild(SceneManager._scene._testSprite);
        }
    } else {
        var sprite = new Sprite();
        sprite.bitmap = new Bitmap(Graphics.width, Graphics.height);
        sprite.opacity = 128;
        SceneManager._scene._testSprite = sprite;
        SceneManager._scene.addChild(sprite);
    }
    x2 = Math.round(this._realX);
    y2 = Math.round(this._realY);
    if (!this._bypassRegion.contains($gameMap.regionId(x2, y2)) && !$gameMap.checkPassage(x2, y2, 0x0f) && !$gameMap.isBoatPassable(x2, y2) || !this.isInRange()) {
        if ($gameMap.checkPassage(Math.round(this._lastX), Math.round(this._lastY), 0x0f)) {
            if (this._isToxic) {
                $gameMap.DABSCreateToxicTile(Math.round(this._lastX), Math.round(this._lastY), this._source.DABSParams('bullettile')[1], this._source, this._source.DABSParams('bullethitanim'), this._source.DABSParams('bullettile')[2], this._source.DABSParams('bullettile')[0]);
            } else if (this._isMud) {
                $gameMap.DABSCreateMudTile(Math.round(this._lastX), Math.round(this._lastY), this._source.DABSParams('bullettile')[1], this._source, this._source.DABSParams('bullettile')[2], this._source.DABSParams('bullettile')[0]);
            }
        }
        this.erase();
    } else {
        var coli = this._boxCollision ? this.boxCollisionPoint(x2, y2) : this.collisionPoint(x2, y2);
        if (coli) {
            if ((this._source.constructor === Game_Event && coli === $gamePlayer) || (this._source === $gamePlayer && coli.constructor === Game_Event) && coli.DABSParams('immunity') !== 'ranged' && coli.DABSParams('immunity') !== 'both') {
                coli.DABSTakeDamage(this._atk, this._critical, this._source.DABSParams('bullethitanim'));
                var dir = [0, 0];
                var cs = coli.getSprite();
                var cr = cs.getVisibleRect();
                var cx = cs.x - cs.anchor.x * cs.width + cr.x + cr.width / 2;
                var cy = cs.y - cs.anchor.y * cs.height + cr.y + cr.height / 2;
                var ss = this._sprite;
                var sr = ss.getVisibleRect();
                var sx = ss.x - ss.anchor.x * ss.width + sr.x + sr.width / 2;
                var sy = ss.y - ss.anchor.y * ss.height + sr.y + sr.height / 2;
                var threshold = 8;
                if (Math.abs(cx - sx) >= threshold) {
                    if (cx > sx) dir[0] = 6;
                    if (cx < sx) dir[0] = 4;
                }
                if (Math.abs(cy - sy) >= threshold) {
                    if (cy > sy) dir[1] = 2;
                    if (cy < sy) dir[1] = 8;
                }
                coli.DABSKnockback(dir, this._source.DABSParams('bulletknockbackpower'), this._source.DABSParams('bulletknockbackduration'));
                if (this._isToxic) {
                    $gameMap.DABSCreateToxicTile(x2, y2, this._source.DABSParams('bullettile')[1], this._source, this._source.DABSParams('bullethitanim'), this._source.DABSParams('bullettile')[2], this._source.DABSParams('bullettile')[0]);
                } else if (this._isMud) {
                    $gameMap.DABSCreateMudTile(x2, y2, this._source.DABSParams('bullettile')[1], this._source, this._source.DABSParams('bullettile')[2], this._source.DABSParams('bullettile')[0]);
                }
                this.erase();
            }
        } else if (!this._bypassRegion.contains($gameMap.regionId(x2, y2))) {
            var events = this.getCollidedEvents();
            for (var k = 0; k < events.length; k++) {
                if (events[k] !== this._source && events[k].isNormalPriority() && !events[k].isDABSEvent()) {
                    this.erase();
                    return;
                }
            }
        }
    }
    if (this._x <= 0 || this._x >= Graphics._width ||
        this._y <= 0 || this._y >= Graphics._height) {
        this.erase();
    }
};

DABSBullet.prototype.getCollidedEvents = function () {
    var sprite = this._sprite;
    if (!sprite) return [];
    var rect = sprite.getVisibleRect();
    var x = sprite.x + rect.x - sprite.anchor.x * sprite.width;
    var y = sprite.y + rect.y - sprite.anchor.y * sprite.height;
    var width = rect.width;
    var height = rect.height;
    return $gameMap.eventsXyRectNt(x, y, width, height);
};

DABSBullet.prototype.isCollidedWithPlayer = function () {
    var sprite = this._sprite;
    if (!sprite) return false;
    var rect = sprite.getVisibleRect();
    var x = sprite.x + rect.x - sprite.anchor.x * sprite.width;
    var y = sprite.y + rect.y - sprite.anchor.y * sprite.height;
    var width = rect.width;
    var height = rect.height;
    var playerSprite = $gamePlayer.getSprite();
    if (!playerSprite || !playerSprite.bitmap) return false;
    var sr = playerSprite.getVisibleRect();
    var sx = playerSprite.x + sr.x - playerSprite.anchor.x * playerSprite.width;
    var sy = playerSprite.y + sr.y - playerSprite.anchor.y * playerSprite.height;
    var sw = sr.width;
    var sh = sr.height;
    return (x < sx + sw && x + width > sx && y < sy + sh && y + height > sy);
};

DABSBullet.prototype.boxCollisionPoint = function (x, y) {
    if (this._source === $gamePlayer) {
        var events = this.getCollidedEvents();
        for (var k = 0; k < events.length; k++) {
            sprite = events[k].getSprite();
            if (events[k] !== this._source && events[k].isNormalPriority() && events[k].isDABSEvent()) {
                return events[k];
            }
        }
    } else {
        if (this.isCollidedWithPlayer()) return $gamePlayer;
    }
};