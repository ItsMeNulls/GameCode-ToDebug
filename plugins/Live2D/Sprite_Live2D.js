//=============================================================================
// Sprite_Live2D.js
//=============================================================================
function Sprite_Live2D() {
    this.initialize.apply(this, arguments);
}

var __debug_count = 0;

Sprite_Live2D.prototype = Object.create(Sprite_Base.prototype);
Sprite_Live2D.prototype.constructor = Sprite_Live2D;

Sprite_Live2D.prototype.initialize = function (modelSettingPath, display, key, callback) { //modelName, callback) {
    Sprite_Base.prototype.initialize.call(this);
    this._version = 2;
    this._keyName = key;
    if (typeof display == "function") {
        callback = display;
        display = true;
    }
    if (typeof display == "undefined") {
        display = true;
    }
    this._hiding = true;
    this._load = false;
    this._sleep = false;

    this._hash = '';

    this._modelSetting = new ModelSettingJson();
    this._modelHomeDir = modelSettingPath.substring(0, modelSettingPath.lastIndexOf("/") + 1);

    this._projMatrix = new L2DMatrix44();
    this._viewMatrix = new L2DViewMatrix();
    this._deviceToScreen = new L2DMatrix44();
    this._dragMgr = new L2DTargetPoint();

    this._lastMouseX = 0;
    this._lastMouseY = 0;
    this._lastViewX = 0;
    this._lastViewY = 0;

    this._calcuWidth = 0;
    this._calcuHeight = 0;

    this._drawSize = Graphics.width;
    this._scale = 1.0;

    this._anchorX = 0;
    this._anchorY = 0;

    this._cut = false;

    this._bleedingLine = new Sprite();
    this._bleedingLine.visible = false;

    this._bgColor = false;

    this.drag = false;
    this.tap = false;

    this.mouseEnable = false;
    // this._modelName = modelName;
    this._isLoading = true;
    this._flip = false;

    var thisRef = this;

    this._modelSetting.loadModelSetting(modelSettingPath, function () {

        var size = thisRef._modelSetting.getDisplaySetting('size');
        thisRef._drawSize = size;

        var anchorX = thisRef._modelSetting.getDisplaySetting('anchorX') || 0;
        var anchorY = thisRef._modelSetting.getDisplaySetting('anchorY') || 0;
        thisRef._anchorX = anchorX;
        thisRef._anchorY = anchorY;

        var width = size || Graphics.width;
        var height = size || Graphics.width;
        thisRef._calcuWidth = thisRef._modelSetting.getDisplaySetting('width') || width - anchorX;
        thisRef._calcuHeight = thisRef._modelSetting.getDisplaySetting('height') || height - anchorY;

        var scale = thisRef._modelSetting.getDisplaySetting('scale') || 1.0;
        thisRef._scale = scale;

        thisRef._bleedingLine.bitmap = new Bitmap(thisRef._calcuWidth, thisRef._calcuHeight);
        thisRef._bleedingLine.bitmap.fillAll("red");
        thisRef._bleedingLine.bitmap.clearRect(1, 1, thisRef._calcuWidth - 2, thisRef._calcuHeight - 2);
        thisRef.addChild(thisRef._bleedingLine);

        thisRef._projMatrix.multScale(scale, scale);

        var ratio = size / size;
        var left = LAppDefine.VIEW_LOGICAL_LEFT;
        var right = LAppDefine.VIEW_LOGICAL_RIGHT;
        var bottom = -ratio;
        var top = ratio;

        thisRef._viewMatrix.setScreenRect(left, right, bottom, top);


        thisRef._viewMatrix.setMaxScreenRect(LAppDefine.VIEW_LOGICAL_MAX_LEFT,
            LAppDefine.VIEW_LOGICAL_MAX_RIGHT,
            LAppDefine.VIEW_LOGICAL_MAX_BOTTOM,
            LAppDefine.VIEW_LOGICAL_MAX_TOP);

        thisRef._viewMatrix.setMaxScale(LAppDefine.VIEW_MAX_SCALE);
        thisRef._viewMatrix.setMinScale(LAppDefine.VIEW_MIN_SCALE);
        //thisRef._viewMatrix.saveDefaultScale();

        thisRef._deviceToScreen.multTranslate(-width / 2.0, -height / 2.0);
        thisRef._deviceToScreen.multScale(2 / width, -2 / width);

        if (Sprite_Live2D._drawCanvas === undefined) {
            Sprite_Live2D._drawCanvas = {};
        }

        // // clipping mask
        var cacheKey = modelSettingPath + ':' + thisRef._keyName;
        if (!Sprite_Live2D._drawCanvas[cacheKey] || !Sprite_Live2D._drawCanvas[cacheKey].gl || Sprite_Live2D._drawCanvas[cacheKey].gl.drawingBufferHeight !== Sprite_Live2D._drawCanvas[cacheKey]._canvas.height || Sprite_Live2D._drawCanvas[cacheKey].gl.drawingBufferWidth !== Sprite_Live2D._drawCanvas[cacheKey]._canvas.width) {
            var glbitmap = null;
            while (!glbitmap) {
                glbitmap = new GLBitmap(width, height);
                if (!glbitmap || !glbitmap.gl || glbitmap.gl.drawingBufferHeight !== glbitmap._canvas.height || glbitmap.gl.drawingBufferWidth !== glbitmap._canvas.width) {
                    glbitmap = null;
                    console.log('fail to create gl bitmap');
                }
            }
            // Sprite_Live2D._drawCanvas[modelSettingPath] = new GLBitmap(width, height);
            Sprite_Live2D._drawCanvas[cacheKey] = glbitmap;
            console.log(cacheKey + ' canvas cached.');
        } else {
            console.log(cacheKey + ' using canvas cache.');
        }

        // thisRef._l2d_bitmap = new GLBitmap(width, height); // Sprite_Live2D._drawCanvas[modelSettingPath];
        thisRef._l2d_bitmap = Sprite_Live2D._drawCanvas[cacheKey];
        // thisRef.gl = Graphics._renderer.gl;
        thisRef.gl = thisRef._l2d_bitmap.gl;
        thisRef.gl.__debug_path = modelSettingPath + (++__debug_count);
        Live2D.setGL(thisRef.gl);
        thisRef.gl.clearColor(0, 0, 0, 0);

        thisRef._model = new LAppModel();
        // thisRef._model.load(thisRef.gl, thisRef._modelSetting, thisRef._modelHomeDir, function() {
        thisRef._model.load(thisRef.gl, modelSettingPath, function () {
            thisRef.bitmap = thisRef._l2d_bitmap;
            var cut = thisRef._modelSetting.getDisplaySetting('cut') || false;
            thisRef.cut = cut;
            thisRef._load = true;
            thisRef._hiding = !display || false;
            if (callback) callback.call(thisRef);
        });
    });

    this._tween = [];
    this.pause = false;
    // {
    //     'attr': 'opacity',
    //     'wait': 0,
    //     'time': 0,
    //     'step': 0,
    //     'forward': 0,
    //     'callback': function() { }
    // }
};

Sprite_Live2D.prototype.tween = function (attr, value, time, wait, callback) {
    this._tween.push({
        'attr': attr,
        'value': value,
        'wait': wait || 0,
        'time': time || 60,
        'callback': callback,

        'step': (this[attr] - value) / (time || 60)
    });
};

Sprite_Live2D.prototype.update_tween = function () {
    if (this.pause) return;
    if (!this._tween.length) return;
    for (var i = 0; i < this._tween.length; i++) {
        var tween = this._tween[i];
        if (tween.time == 0) {
            this[tween.attr] = tween.value;
            if (tween.callback) tween.callback.call(this);
            this._tween.splice(i--, 1);
            continue;
        }
        this[tween.attr] -= tween.step;
        if (!tween.wait && tween.time) tween.time--;
        if (tween.wait) tween.wait--;
    }
};

Sprite_Live2D.prototype.clean_tween = function () {
    this._tween = [];
};

Object.defineProperty(Sprite_Live2D.prototype, 'cut', {
    get: function () {
        return this._cut;
    },
    set: function (value) {
        this._cut = value;
        if (value) {
            this.anchor.x = 0;
            this.anchor.y = 0;
            this.setFrame(this._anchorX, this._anchorY, this._calcuWidth, this._calcuHeight);
        } else {
            this.anchor.x = this._anchorX / this._drawSize;
            this.anchor.y = this._anchorY / this._drawSize;
            this.setFrame(0, 0, this._drawSize, this._drawSize);
        }
    },
    configurable: true
});

Object.defineProperty(Sprite_Live2D.prototype, 'bleedingLine', {
    get: function () {
        return this._bleedingLine.visible;
    },
    set: function (value) {
        this._bleedingLine.visible = value;
        this._refresh();
    },
    configurable: true
});

Object.defineProperty(Sprite_Live2D.prototype, 'bgColor', {
    get: function () {
        return this._bgColor;
    },
    set: function (value) {
        this._bgColor = value;
        value ? this.gl.clearColor(0.2, 0.2, 0.2, 0.2) : this.gl.clearColor(0, 0, 0, 0);
    },
    configurable: true
});

Object.defineProperty(Sprite_Live2D.prototype, 'width', {
    get: function () {
        return this._calcuWidth;
    },
    set: function (value) {
        this._frame.width = value;
        this._refresh();
    },
    configurable: true
});

Object.defineProperty(Sprite_Live2D.prototype, 'height', {
    get: function () {
        return this._calcuHeight;
    },
    set: function (value) {
        this._frame.height = value;
        this._refresh();
    },
    configurable: true
});

Object.defineProperty(Sprite_Live2D.prototype, 'sleep', {
    get: function () {
        return this._sleep;
    },
    set: function (value) {
        this._sleep = value;
    },
    configurable: true
});

Object.defineProperty(Sprite_Live2D.prototype, 'viewScale', {
    get: function () {
        return this._scale;
    },
    set: function (value) {
        this._scale = this._viewMatrix.changeScale(value, this._flip);
    },
    configurable: true
});

Sprite_Live2D.prototype.resetScale = function () {
    this.viewScale = 1.0;
}

Sprite_Live2D.prototype.update = function () {
    Sprite_Base.prototype.update.call(this);

    this.update_tween();
    if (this._load && !this._sleep) {

        this.followPointer();

        if (this.drag) {
            this._dragMgr.setPoint(this._lastViewX, this._lastViewY);
        } else {
            this._lastViewX = 0;
            this._lastViewY = 0;
            this._dragMgr.setPoint(0, 0);
        }

        if (this.hover && (!(SceneManager._scene instanceof Scene_Map) || $gamePlayer.canMove())) {
            var vx = this._transformViewX(TouchInput._mouseX - this.x + this._anchorX);
            var vy = this._transformViewY(TouchInput._mouseY - this.y + this._anchorY);
            this.hoverEvent(vx, vy);
        }
        if (this.tap && (!(SceneManager._scene instanceof Scene_Map) || $gamePlayer.canMove())) {
            var vx = this._transformViewX(TouchInput._mouseX - this.x + this._anchorX);
            var vy = this._transformViewY(TouchInput._mouseY - this.y + this._anchorY);
            this.tapEvent(vx, vy);
        }

        this._dragMgr.update();
        this.setDrag(this._dragMgr.getX(), this._dragMgr.getY());

        MatrixStack.reset();
        MatrixStack.loadIdentity();
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        MatrixStack.multMatrix(this._projMatrix.getArray());
        MatrixStack.multMatrix(this._viewMatrix.getArray());
        MatrixStack.push();

        if (this._model.initialized && !this._model.updating) {
            this._model.update();
            this._model.draw(this.gl);
        }

        MatrixStack.pop();

        this.bitmap._setDirty();
        this._refresh();
    }
    // if (!this._isLoading && this._keyName && $gameScreen.live2dPendingMethods[this._keyName].length > 0) {
    if (!this._isLoading && this._keyName && $gameScreen.live2dPendingMethods[this._keyName] && $gameScreen.live2dPendingMethods[this._keyName].length > 0) {
        while ($gameScreen.live2dPendingMethods[this._keyName].length > 0) {
            var curr = $gameScreen.live2dPendingMethods[this._keyName].shift();
            if (typeof curr === 'string') {
                eval(curr);
            } else if (curr) {
                curr[0].apply(this, curr[1]);
            }
        }
    }

    this.updateMouseCursor();
};

Sprite_Live2D.prototype.fadeIn = function (time) {
    var t = time || 30;
    this.clean_tween();
    this.opacity = 0;
    this.show();
    this.tween('opacity', 255, t);
}


Sprite_Live2D.prototype.fadeOut = function (time) {
    var t = time || 30;
    this.clean_tween();
    this.opacity = 255;
    this.show();
    this.tween('opacity', 0, t);
}

Sprite_Live2D.prototype._transformViewX = function (deviceX) {
    var screenX = this._deviceToScreen.transformX(deviceX);
    return this._viewMatrix.invertTransformX(screenX);
}


Sprite_Live2D.prototype._transformViewY = function (deviceY) {
    var screenY = this._deviceToScreen.transformY(deviceY);
    return this._viewMatrix.invertTransformY(screenY);
}


Sprite_Live2D.prototype._transformScreenX = function (deviceX) {
    return this._deviceToScreen.transformX(deviceX);
}


Sprite_Live2D.prototype._transformScreenY = function (deviceY) {
    return this._deviceToScreen.transformY(deviceY);
}

Sprite_Live2D.prototype.followPointer = function () {
    // if (!this.mouseEnable) return;
    if (!this.drag) return;
    var sx, sy, vx, vy;
    if (typeof TouchInput._mouseX === 'undefined') {
        sx = this._transformScreenX(TouchInput.x - this.x + this._anchorX);
        sy = this._transformScreenY(TouchInput.y - this.y + this._anchorY);
        vx = this._transformViewX(TouchInput.x - this.x + this._anchorX);
        vy = this._transformViewY(TouchInput.y - this.y + this._anchorY);
    } else {
        sx = this._transformScreenX(TouchInput._mouseX - this.x + this._anchorX);
        sy = this._transformScreenY(TouchInput._mouseY - this.y + this._anchorY);
        vx = this._transformViewX(TouchInput._mouseX - this.x + this._anchorX);
        vy = this._transformViewY(TouchInput._mouseY - this.y + this._anchorY);
    }

    // console.log("onMouseDown device( x:" + TouchInput.x + " y:" + TouchInput.y + " ) view( x:" + vx + " y:" + vy + ")");

    this._lastMouseX = sx;
    this._lastMouseY = sy;
    this._lastViewX = vx;
    this._lastViewY = vy;
}
Sprite_Live2D.prototype.setRandomExpression = function () {
    this._model.setRandomExpression();
}

Sprite_Live2D.prototype.setExpression = function (name) {
    this._model.setExpression(name);
}

Sprite_Live2D.prototype.startRandomMotion = function (name, priority, loop) {
    this._model.startRandomMotion(name, priority, loop);
    this._model._tappedMotionDuration = false;
    this._model._hoveredMotionDuration = false;
}

Sprite_Live2D.prototype.startMotion = function (name, no, priority, loop) {
    this._model.startMotion(name, no, priority, loop);
    this._model._tappedMotionDuration = false;
    this._model._hoveredMotionDuration = false;
}

Sprite_Live2D.prototype.setDrag = function (x, y) {
    this._model.setDrag(x, y);
}

Sprite_Live2D.prototype.release = function () {
    this._model.release(this.gl);
    delete this._model;
    delete this._l2d_bitmap;
}

Sprite_Live2D.prototype.tapEvent = function (x, y) {
    var hit = false;
    if (this._tapData) {
        for (var area in this._tapData) {
            if (!this._tapData.hasOwnProperty(area)) continue;
            if ((TouchInput.isTriggered() && this._model.hitTest(area, x, y)) || (this._tapData[area].keyInput && Input.isTriggered(this._tapData[area].keyInput))) {
                TouchInput.update();
                Input.update();
                hit = true;
                this._isTappedData[area] = true;
                if (LAppDefine.DEBUG_LOG) console.log("tapEvent view x:" + x + " y:" + y + " : Tap " + area);
                if (this._tapData[area].expression) this.setExpression(this._tapData[area].expression);
                var index = this._tapData[area].motionIndex >= 0 ? this._tapData[area].motionIndex : Math.randomInt(this._modelSetting.getMotionNum(this._tapData[area].motionName));
                this.startMotion(this._tapData[area].motionName, index, 3);
                this._model._tappedMotionData = JsonEx.makeDeepCopy(this._tapData[area]);
                this._model._tappedMotionData.motionIndex = index;
                this._model._tappedMotionDuration = this._tapData[area].loop;
                if (this._tapData[area].commonEvent) $gameTemp.reserveCommonEvent(this._tapData[area].commonEvent);
                break;
            }
        }
    }
    return hit;
};

Sprite_Live2D.prototype.hoverEvent = function (x, y) {
    var hit = false;
    if (this._hoverData) {
        for (var area in this._hoverData) {
            if (!this._hoverData.hasOwnProperty(area)) continue;
            if (this._isHoveredData[area]) {
                if (this._model.hitTest(area, x, y)) {
                    hit = true;
                    break;
                } else {
                    this._isHoveredData[area] = false;
                }
            } else {
                if (this._model.hitTest(area, x, y) || (this._hoverData[area].keyInput && Input.isTriggered(this._hoverData[area].keyInput))) {
                    hit = true;
                    this._isHoveredData[area] = true;
                    if (LAppDefine.DEBUG_LOG) console.log("hoverEvent view x:" + x + " y:" + y + " : Tap " + area);
                    if (this._hoverData[area].expression) this.setExpression(this._hoverData[area].expression);
                    var index = this._hoverData[area].motionIndex >= 0 ? this._hoverData[area].motionIndex : Math.randomInt(this._modelSetting.getMotionNum(this._hoverData[area].motionName));
                    this.startMotion(this._hoverData[area].motionName, index, 3);
                    this._model._hoveredMotionData = JsonEx.makeDeepCopy(this._hoverData[area]);
                    this._model._hoveredMotionData.motionIndex = index;
                    this._model._hoveredMotionDuration = this._hoverData[area].loop;
                    if (this._hoverData[area].commonEvent) $gameTemp.reserveCommonEvent(this._hoverData[area].commonEvent);
                    break;
                }
            }
        }
        if (this._model._hoveredMotionDuration === -1 && !hit) {
            this._model._hoveredMotionData = null;
            this._model._hoveredMotionDuration = 0;
        }
    }
    return hit;
};

Sprite_Live2D.prototype.setTap = function (hitArea, motion, no, exp, loopDuration, cursorName, commonEventId, input) {
    this.tap = true;
    this._isTappedData = this._isTappedData || {};
    this._tapData = this._tapData || {};
    this._tapData[hitArea] = {
        motionName: motion,
        motionIndex: no,
        expression: exp,
        loop: loopDuration,
        cursor: cursorName,
        commonEvent: commonEventId,
        keyInput: input
    };
};

Sprite_Live2D.prototype.isAreaTapped = function (area) {
    var vx = this._transformViewX(TouchInput._mouseX - this.x + this._anchorX);
    var vy = this._transformViewY(TouchInput._mouseY - this.y + this._anchorY);
    return TouchInput.isTriggered() && this._model.hitTest(area, vx, vy);
};

Sprite_Live2D.prototype.setHover = function (hitArea, motion, no, exp, loopDuration, cursorName, commonEventId, input) {
    this.hover = true;
    this._isHoveredData = this._isHoveredData || {};
    this._hoverData = this._hoverData || {};
    this._hoverData[hitArea] = {
        motionName: motion,
        motionIndex: no,
        expression: exp,
        loop: loopDuration,
        cursor: cursorName,
        commonEvent: commonEventId,
        keyInput: input
    };
};

Sprite_Live2D.prototype.isAreaHovered = function (area) {
    if (!this._hoverData || !this._hoverData[area]) return false;
    var vx = this._transformViewX(TouchInput._mouseX - this.x + this._anchorX);
    var vy = this._transformViewY(TouchInput._mouseY - this.y + this._anchorY);
    return (!(SceneManager._scene instanceof Scene_Map) || $gamePlayer.canMove()) && this.hover && this._model.hitTest(area, vx, vy);
};

Sprite_Live2D.prototype.updateMouseCursor = function () {
    var param = PluginManager.parameters('Live2D');
    var cursor = param['Mouse Cursor'];
    if ((!(SceneManager._scene instanceof Scene_Map) || $gamePlayer.canMove()) && this.visible && (this.tap || this.hover) && Imported.TDDP_MouseSystemEx && TDDP_MouseSystemEx.useCustomCursor) {
        var vx = this._transformViewX(TouchInput._mouseX - this.x + this._anchorX);
        var vy = this._transformViewY(TouchInput._mouseY - this.y + this._anchorY);
        for (var area in this._tapData) {
            if (this._model.hitTest(area, vx, vy)) {
                this._isHovered = true;
                var cur = this._tapData[area].cursor || cursor;
                if (this._hoverData && this._hoverData[area]) cur = this._hoverData[area].cursor || cur;
                TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(cur));
                return;
            }
        }
        for (var area in this._hoverData) {
            if (this._model.hitTest(area, vx, vy)) {
                this._isHovered = true;
                var cur = this._hoverData[area].cursor || cursor;
                TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(cur));
                return;
            }
        }
    }
    if (this._isHovered) {
        TDDP_MouseSystemEx._resetCustomCursor();
        this._isHovered = false;
    }
};