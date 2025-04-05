LIVE2DCUBISMPIXI.Model.prototype.initialize = function (modelSettingPath) {
    this._version = 3;
    this._sleep = false;
    this._hash = '';
    this._modelHomeDir = modelSettingPath.substring(0, modelSettingPath.lastIndexOf("/") + 1);
    this._lastMouseX = 0;
    this._lastMouseY = 0;
    this._lastViewX = 0;
    this._lastViewY = 0;
    this._scale = 1.0;
    this._anchorX = 0;
    this._anchorY = 0;
    this._cut = false;
    this.drag = false;
    this.tap = false;
    this.mouseEnable = false;
    this._flip = false;
    this._tween = [];
    this.pause = false;
    this.resetScale();
    this.x = this.width / 2;
    this.y = this.height / 2;
    this.cut = false;
    this._isTappedData = {};
    this._tapData = {};
    this._isHoveredData = {};
    this._hoverData = {};
    this.hide();
    this._isLoading = true;
    this._breathJson = {
        "Version": 3,
        "Meta": {
            "Duration": 3.967,
            "Fps": 30.0,
            "Loop": true,
            "AreBeziersRestricted": true,
            "CurveCount": 1,
            "TotalSegmentCount": 4,
            "TotalPointCount": 13,
            "UserDataCount": 0,
            "TotalUserDataSize": 0
        },
        "Curves": [
            {
                "Target": "Parameter",
                "Id": "ParamBreath",
                "Segments": [
                    0,
                    0,
                    1,
                    0.089,
                    0,
                    0.178,
                    0,
                    0.267,
                    0,
                    1,
                    0.756,
                    0,
                    1.244,
                    1,
                    1.733,
                    1,
                    1,
                    1.844,
                    1,
                    1.956,
                    1,
                    2.067,
                    1,
                    1,
                    2.7,
                    1,
                    3.333,
                    0.034,
                    3.967,
                    0.001
                ]
            }
        ]
    }
    this._emptyAnimationJson = {
        "Version": 3,
        "Meta": {
            "Duration": 1.000,
            "Fps": 30.0,
            "Loop": false,
            "CurveCount": 0,
            "TotalSegmentCount": 0,
            "TotalPointCount": 0
        },
        "Curves": []
    };
    this.preloadPose();
    this.preloadMotionGroups();
    this.preloadExpressions();
    this._app = new PIXI.Application(Graphics.width, Graphics.height);
    var thisRef = this;
    this._app.ticker.add(function (deltaTime) {
        if (thisRef.opacity > 0 && thisRef.visible && !thisRef._sleep) {
            thisRef.update(deltaTime);
            thisRef.masks.update(Graphics._renderer);
            thisRef._lastDeltaTime = deltaTime;
        }
    });
    this.masks.resize(this._app.view.width, this._app.view.height);
    this._animationDuration = 0;
    this._eyeBlink = new L2DC3EyeBlink();
    this._autoBreath = false;
    this.startTimeMSec = UtSystem.getUserTimeMSec();
    this.visible = false;
    this._tappedMotionDuration = false;
    this._hoveredMotionDuration = false;
};

Dhoom.Live2D.LIVE2DCUBISMPIXI_Model_destroy = LIVE2DCUBISMPIXI.Model.prototype.destroy;
LIVE2DCUBISMPIXI.Model.prototype.destroy = function (options) {
    this._app.ticker.destroy();
    Dhoom.Live2D.LIVE2DCUBISMPIXI_Model_destroy.call(this, options);
}

LIVE2DCUBISMPIXI.Model.prototype.initializePose = function () {
    this._poseIndex = 0;
    this.setPose(this._poseIndex);
};

LIVE2DCUBISMPIXI.Model.prototype.preloadPose = function () {
    var loader = new PIXI.loaders.Loader();
    this._poseData = null;
    var pose = this._modelSetting.getPoseFile();
    if (pose) {
        loader.add('pose', this._modelHomeDir + pose, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        var thisRef = this;
        loader.load(function (loader, resources) {
            thisRef._poseData = resources.pose.data;
            thisRef._posePreloaded = true;
        });
    } else {
        this._posePreloaded = true;
    }
}

LIVE2DCUBISMPIXI.Model.prototype.preloadMotionGroups = function () {
    var loader = new PIXI.loaders.Loader();
    this._motionsData = {};
    var groups = this._modelSetting.getAllMotions();
    if (groups) {
        for (var name in groups) {
            this._motionsData[name] = [];
            var motions = groups[name];
            for (var i = 0; i < motions.length; i++) {
                loader.add(name + ':' + i, this._modelHomeDir + this._modelSetting.getMotionFile(name, i), { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
            }
        }
        var thisRef = this;
        loader.load(function (loader, resources) {
            for (var sym in resources) {
                var ref = sym.split(':');
                thisRef._motionsData[ref[0]][Number(ref[1])] = resources[sym].data;
            }
            thisRef._motionPreloaded = true;
        });
    } else {
        this._motionPreloaded = true;
    }
}

LIVE2DCUBISMPIXI.Model.prototype.preloadExpressions = function () {
    var loader = new PIXI.loaders.Loader();
    this._expressionsData = {};
    var groups = this._modelSetting.getAllExpressions();
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            var name = groups[i].Name;
            this._expressionsData[name] = [];
            loader.add(name, this._modelHomeDir + groups[i].File, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        }
        var thisRef = this;
        loader.load(function (loader, resources) {
            for (var sym in resources) {
                thisRef._expressionsData[sym] = resources[sym].data;
            }
            thisRef._expressionPreloaded = true;
        });
    } else {
        this._expressionPreloaded = true;
    }
}

LIVE2DCUBISMPIXI.Model.prototype.hide = function () {
    this._hiding = true;
    this.updateVisibility();
};

LIVE2DCUBISMPIXI.Model.prototype.show = function () {
    this._hiding = false;
    this.updateVisibility();
};

LIVE2DCUBISMPIXI.Model.prototype.updateVisibility = function () {
    this.visible = !this._hiding && !this._isLoading;
};

LIVE2DCUBISMPIXI.Model.prototype.tween = function (attr, value, time, wait, callback) {
    this._tween.push({
        'attr': attr,
        'value': value,
        'wait': wait || 0,
        'time': time || 60,
        'callback': callback,

        'step': (this[attr] - value) / (time || 60)
    });
};

LIVE2DCUBISMPIXI.Model.prototype.update_tween = function () {
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

LIVE2DCUBISMPIXI.Model.prototype.clean_tween = function () {
    this._tween = [];
};

Object.defineProperty(LIVE2DCUBISMPIXI.Model.prototype, 'opacity', {
    get: function () {
        return Math.min(Math.max(this.alpha * 255, 0), 255);
    },
    set: function (value) {
        this.alpha = Math.min(Math.max(value / 255, 0), 255);
    },
    configurable: true
});

Object.defineProperty(LIVE2DCUBISMPIXI.Model.prototype, 'cut', {
    get: function () {
        return this._cut;
    },
    set: function (value) {
        this._cut = value;
    },
    configurable: true
});

Object.defineProperty(LIVE2DCUBISMPIXI.Model.prototype, 'bleedingLine', {
    get: function () {
        return this._bleedingLine.visible;
    },
    set: function (value) {
        this._bleedingLine.visible = value;
        this._refresh();
    },
    configurable: true
});

Object.defineProperty(LIVE2DCUBISMPIXI.Model.prototype, 'bgColor', {
    get: function () {
        return this._bgColor;
    },
    set: function (value) {
        this._bgColor = value;
        value ? this.gl.clearColor(0.2, 0.2, 0.2, 0.2) : this.gl.clearColor(0, 0, 0, 0);
    },
    configurable: true
});

Object.defineProperty(LIVE2DCUBISMPIXI.Model.prototype, 'sleep', {
    get: function () {
        return this._sleep;
    },
    set: function (value) {
        this._sleep = value;
    },
    configurable: true
});

Object.defineProperty(LIVE2DCUBISMPIXI.Model.prototype, 'viewScale', {
    get: function () {
        return this._scale;
    },
    set: function (value) {
        this._scale = value;
        this.scale.x = this._scale * 400;
        this.scale.y = this._scale * 400;
    },
    configurable: true
});

Object.defineProperty(LIVE2DCUBISMPIXI.Model.prototype, '_model', {
    get: function () {
        return this;
    },
    configurable: true
});

Object.defineProperty(LIVE2DCUBISMPIXI.Model.prototype, 'modelSetting', {
    get: function () {
        return this._modelSetting;
    },
    configurable: true
});

LIVE2DCUBISMPIXI.Model.prototype.resetScale = function () {
    this.viewScale = 1.0;
}

Dhoom.Live2D.LIVE2DCUBISMPIXI_Model_update = LIVE2DCUBISMPIXI.Model.prototype.update;
LIVE2DCUBISMPIXI.Model.prototype.update = function (delta) {
    if (delta) {
        Dhoom.Live2D.LIVE2DCUBISMPIXI_Model_update.call(this, delta);
        return;
    }
    this.children.forEach(function (child) {
        if (child.update) {
            child.update();
        }
    });
    this._isLoading = (!this._motionPreloaded || !this._expressionPreloaded || !this._posePreloaded);
    this.updateVisibility();
    this.updatePosition();
    this.update_tween();
    if (!this._isLoading && !this._sleep) {
        this.updateMotion();
        if (this.tap && (!(SceneManager._scene instanceof Scene_Map) || $gamePlayer.canMove())) {
            this.tapEvent(TouchInput._mouseX, TouchInput._mouseY);
        }
        if (this.hover && (!(SceneManager._scene instanceof Scene_Map) || $gamePlayer.canMove())) {
            this.hoverEvent(TouchInput._mouseX, TouchInput._mouseY);
        }
    }
    if (!this._isLoading && this._keyName && $gameScreen.live2dPendingMethods[this._keyName] && $gameScreen.live2dPendingMethods[this._keyName].length > 0) {
        while ($gameScreen.live2dPendingMethods[this._keyName].length > 0) {
            var curr = $gameScreen.live2dPendingMethods[this._keyName].shift();
            if (typeof curr === 'string') {
                curr = curr.replace("Sprite_Live2D", "LIVE2DCUBISMPIXI.Model");
                eval(curr);
            } else if (curr) {
                if (curr[0] === Sprite_Live2D.prototype.setTap) curr[0] = this.setTap;
                if (curr[0] === Sprite_Live2D.prototype.setExpression) curr[0] = this.setExpression;
                if (curr[0] === Sprite_Live2D.prototype.startRandomMotion) curr[0] = this.startRandomMotion;
                if (curr[0] === Sprite_Live2D.prototype.startMotion) curr[0] = this.startMotion;
                curr[0].apply(this, curr[1]);
            }
        }
    }
    this.updateMouseCursor();
};

LIVE2DCUBISMPIXI.Model.prototype.updatePosition = function () {
    if (this._initialMotionPlayed) {
        if (typeof this._tempX === "number") {
            this.x = this._tempX;
            this.y = this._tempY;
            this._tempX = null;
            this._tempY = null;
        }
    } else {
        if (this.x !== -Graphics.width && this.y !== Graphics.height) {
            this._tempX = this.x;
            this._tempY = this.y;
        }
        this.x = -Graphics.width;
        this.y = -Graphics.height;
    }
};

LIVE2DCUBISMPIXI.Model.prototype.updateMotion = function () {
    if (this._talkMotion) {
        this.updateTalkMotion();
    } else if (this._tappedMotionDuration) {
        this.updateTapMotion();
    } else if (this._hoveredMotionDuration) {
        this.updateHoverMotion();
    } else {
        this.updateIdleMotion();
    }
    this.updateEyeBlink();
    this.updateAutoBreath();
    this.updateLookAt();
    this.updatePose();
    if (this._tappedMotionDuration > 0) this._tappedMotionDuration--;
    if (this._hoveredMotionDuration > 0) this._hoveredMotionDuration--;
};

LIVE2DCUBISMPIXI.Model.prototype.updateTalkMotion = function () {
    var layer = this.animator.getLayer("motion");
    var isNotTalking = !$gameMessage._messageStarted || !$gameTemp._l2dTalkModel || !$gameTemp._l2dTalkModel.names.contains(this.modelSetting.json.name) || !$gameTemp._l2dTalkModel.keys.contains($gameScreen.getLive2DKeyFromModel(this));
    if (isNotTalking) {
        this._talkMotion = null;
        layer._animation = null;
        this.updateIdleMotion();
        return;
    }
    if (this._initialMotionStarted && !this._initialMotionPlayed) this._initialMotionPlayed = layer.currentTime > 0;
    if (this._fadeDuration) {
        if (!layer._goalAnimation) {
            this._fadeDuration = null;
        } else {
            return;
        }
    }
    if (!this._animationDuration || layer.currentTime >= this._animationDuration) {
        if (this._initialMotionStarted) this._initialMotionPlayed = true;
        this._animationDuration = null;
        this._currentMotionPriority = 0;
        if (!isNotTalking) {
            if (this._talkMotion[1] >= 0) {
                this.startMotion(this._talkMotion[0], this._talkMotion[1], 3, false);
            } else {
                this.startRandomMotion(this._talkMotion[0], 3, false);
            }
        } else {
            this._talkMotion = null;
            layer._animation = null;
            this.updateIdleMotion();
        }
    }
};

LIVE2DCUBISMPIXI.Model.prototype.updateTapMotion = function () {
    var layer = this.animator.getLayer("motion");
    if (this._initialMotionStarted && !this._initialMotionPlayed) this._initialMotionPlayed = layer.currentTime > 0;
    if (this._fadeDuration) {
        if (!layer._goalAnimation) {
            this._fadeDuration = null;
        } else {
            return;
        }
    }
    if (!this._animationDuration || layer.currentTime >= this._animationDuration) {
        if (this._initialMotionStarted) this._initialMotionPlayed = true;
        this._animationDuration = null;
        this._currentMotionPriority = 0;
        if (this._tappedMotionData) {
            var temp = this._tappedMotionDuration;
            if (this._tappedMotionData.expression) this.setExpression(this._tappedMotionData.expression);
            if (this._tappedMotionData.motionIndex >= 0) {
                this.startMotion(this._tappedMotionData.motionName, this._tappedMotionData.motionIndex, 3, false);
            } else {
                this.startRandomMotion(this._tappedMotionData.motionName, 3, false);
            }
            this._tappedMotionDuration = temp;
        }
    }
    if (!this._tappedMotionDuration) {
        this._tappedMotionData = null;
    }
};

LIVE2DCUBISMPIXI.Model.prototype.updateHoverMotion = function () {
    var layer = this.animator.getLayer("motion");
    if (this._initialMotionStarted && !this._initialMotionPlayed) this._initialMotionPlayed = layer.currentTime > 0;
    if (this._fadeDuration) {
        if (!layer._goalAnimation) {
            this._fadeDuration = null;
        } else {
            return;
        }
    }
    if (!this._animationDuration || layer.currentTime >= this._animationDuration) {
        if (this._initialMotionStarted) this._initialMotionPlayed = true;
        this._animationDuration = null;
        this._currentMotionPriority = 0;
        if (this._hoveredMotionData) {
            var temp = this._hoveredMotionDuration;
            if (this._hoveredMotionData.expression) this.setExpression(this._hoveredMotionData.expression);
            if (this._hoveredMotionData.motionIndex >= 0) {
                this.startMotion(this._hoveredMotionData.motionName, this._hoveredMotionData.motionIndex, 3, false);
            } else {
                this.startRandomMotion(this._hoveredMotionData.motionName, 3, false);
            }
            this._hoveredMotionDuration = temp;
        }
    }
    if (!this._hoveredMotionDuration) {
        this._hoveredMotionData = null;
    }
};

LIVE2DCUBISMPIXI.Model.prototype.updateIdleMotion = function () {
    var layer = this.animator.getLayer("motion");
    if (this._initialMotionStarted && !this._initialMotionPlayed) this._initialMotionPlayed = layer.currentTime > 0;
    if (this._fadeDuration) {
        if (!layer._goalAnimation) {
            this._fadeDuration = null;
        } else {
            return;
        }
    }
    if (!this._animationDuration || layer.currentTime >= this._animationDuration) {
        if (this._initialMotionStarted) this._initialMotionPlayed = true;
        this._animationDuration = null;
        this._currentMotionPriority = 0;
        if (this._savedLoopMotion && !this._loopMotion) this._loopMotion = this._savedLoopMotion;
        if (this._loopMotion) {
            this.startMotion(this._loopMotion[0], this._loopMotion[1], this._loopMotion[2], true);
        } else {
            if (!this.startRandomMotion(LAppDefine.MOTION_GROUP_IDLE, LAppDefine.PRIORITY_IDLE, false, this.animator.getLayer("base"))) {
                this.startRandomMotion("Idle", LAppDefine.PRIORITY_IDLE, false, this.animator.getLayer("base"));
            }
        }
    }
};

LIVE2DCUBISMPIXI.Model.prototype.updateEyeBlink = function () {
    this._eyeBlink.updateParam(this);
};

LIVE2DCUBISMPIXI.Model.prototype.updateAutoBreath = function () {
    if (this._autoBreath) {
        if (!this._breathAnimation) this._breathAnimation = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(this._breathJson);
        var layer = this.animator.getLayer('breath');
        if (!layer.isPlaying) layer.play(this._breathAnimation);
    } else {
        this.animator.getLayer('breath').stop();
    }
};

LIVE2DCUBISMPIXI.Model.prototype.updateLookAt = function () {
    if (this.drag && this.groups.getGroupById("LookAt")) {
        var groups = this.groups.getGroupById("LookAt");
        var mx = TouchInput.x;
        var my = TouchInput.y;
        if (typeof TouchInput._mouseX !== 'undefined') {
            mx = TouchInput._mouseX;
            my = TouchInput._mouseY;
        }
        var ax = this.x - mx;
        var ay = this.y - my;
        var height = Graphics.height;
        var width = Graphics.width;
        var scale = 1.0 - (height / this.scale.y);
        var sx = -ax / height;
        var sy = (-(ay / width) + scale) * -1;
        if (!this._lookAtAnimation) this._lookAtAnimation = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(this._emptyAnimationJson);
        this._lookAtAnimation.evaluate = function (time, weight, blend, target) {
            groups.ids.forEach(function (id, i) {
                var n = target.parameters.ids.indexOf(id);
                if (n >= 0) {
                    var min = target.parameters.minimumValues[n];
                    var max = target.parameters.maximumValues[n];
                    var value = groups.axes[i] === "X" ? sx : sy;
                    target.parameters.values[n] = blend(target.parameters.values[n], value * max, 0, weight);
                }
            });
        };
        this.animator.getLayer("lookat").play(this._lookAtAnimation);
    }
};

LIVE2DCUBISMPIXI.Model.prototype.updatePose = function () {
    return;
    if (!this._poseAnimation) {
        this._poseAnimation = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(this._emptyAnimationJson);
        var thisRef = this;
        this._poseAnimation.evaluate = function (delta, weight, blend, target) {
            var epsilon = 0.001;
            var fade = thisRef._poseData.FadeInTime || 0.5;
            var opacities = [];
            var visibleIndexes = [];
            var phi = 0.5;
            var backOpacityThreshold = 0.15;
            for (var i = 0; i < thisRef._poseData.Groups.length; i++) {
                visibleIndexes[i] = -1;
                opacities[i] = 1;
                thisRef._poseData.Groups[i].forEach(function (data, j) {
                    var n = thisRef.parts.ids.indexOf(data.Id);
                    if (n >= 0 && thisRef.parts.opacities[n] > epsilon) {
                        visibleIndexes[i] = j;
                        opacities[i] = thisRef.parts.opacities[n];
                        opacities[i] += (delta / fade);
                        if (opacities[i] > 1.0) opacities[i] = 1.0;
                    }
                });
                if (visibleIndexes[i] < 0) {
                    visibleIndexes[i] = 0;
                    opacities[i] = 1.0;
                }
                thisRef._poseData.Groups[i].forEach(function (data, j) {
                    var n = thisRef.parts.ids.indexOf(data.Id);
                    if (n >= 0) {
                        if (visibleIndexes[i] === j) {
                            thisRef.parts.opacities[n] = opacities[i];
                        } else {
                            var opacity = thisRef.parts.opacities[n];
                            var a1 = 0;
                            if (opacities[i] < phi) {
                                a1 = opacities[i] * (phi - 1) / phi + 1.0;
                            }
                            else {
                                a1 = (1 - opacities[i]) * phi / (1.0 - phi);
                            }
                            var backOpacity = (1.0 - a1) * (1.0 - opacities[i]);
                            if (backOpacity > backOpacityThreshold) {
                                a1 = 1.0 - backOpacityThreshold / (1.0 - opacities[i]);
                            }
                            if (opacity > a1) {
                                opacity = a1;
                            }
                            thisRef.parts.opacities[n] = opacity;
                        }
                    }
                });
            }
        }
        this.animator.getLayer("pose").play(this._poseAnimation);
    }
};

LIVE2DCUBISMPIXI.Model.prototype.fadeIn = function (time) {
    var t = time || 30;
    this.clean_tween();
    this.opacity = 0;
    this.show();
    this.tween('opacity', 255, t);
}


LIVE2DCUBISMPIXI.Model.prototype.fadeOut = function (time) {
    var t = time || 30;
    this.clean_tween();
    this.opacity = 255;
    this.show();
    this.tween('opacity', 0, t);
}

LIVE2DCUBISMPIXI.Model.prototype.setRandomExpression = function () {
    var names = Object.keys(this._expressionsData);
    if (this._currentExpression) names.splice(names.indexOf(this._currentExpression), 1);
    if (names.length > 0) this.setExpression(names[Math.randomInt(names.length)]);
}

LIVE2DCUBISMPIXI.Model.prototype.setExpression = function (name, duration) {
    if (this._currentExpression === name) return;
    if (name == null || name == "" || !this._expressionsData || !this._expressionsData[name]) {
        if (LAppDefine.DEBUG_LOG) console.error("Failed to expression.");
        return;
    }
    this._currentExpression = name;
    this._expressionDuration = duration;
    var data = this._expressionsData[name];
    var expDuration = 0.05;
    if (data.Parameters) {
        var add = JsonEx.makeDeepCopy(this._emptyAnimationJson);
        add.Meta.Duration = duration || 1;
        var override = JsonEx.makeDeepCopy(this._emptyAnimationJson);
        override.Meta.Duration = duration || 1;
        var multiply = JsonEx.makeDeepCopy(this._emptyAnimationJson);
        multiply.Meta.Duration = duration || 1;
        data.Parameters.forEach(function (c, i) {
            var obj = {};
            obj.Target = "Parameter";
            obj.Id = c.Id;
            var n = this.parameters.ids.indexOf(c.Id);
            obj.Segments = [0, 0, 0, expDuration, 0];
            var target;
            switch (c.Blend) {
                case "Add":
                    target = add;
                    obj.Segments[4] = c.Value;
                    break;
                case "Overwrite":
                    target = override;
                    obj.Segments[1] = c.Value;
                    obj.Segments[4] = c.Value;
                    break;
                case "Multiply":
                    target = multiply;
                    obj.Segments[1] = 1;
                    obj.Segments[4] = c.Value;
                    break;
            }
            if (target) {
                target.Meta.CurveCount++;
                target.Curves.push(obj);
            }
        }, this);
        this.stopExpression();
        if (add.Curves.length > 0) {
            var animation = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(add);
            this.animator.getLayer("expressionAdd").play(animation, 0, expDuration);
        }
        if (override.Curves.length > 0) {
            var animation = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(override);
            this.animator.getLayer("expressionOver").play(animation, 0, expDuration);
        }
        if (multiply.Curves.length > 0) {
            var animation = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(multiply);
            this.animator.getLayer("expressionMult").play(animation, 0, expDuration);
        }
        if (LAppDefine.DEBUG_LOG) console.log("Start expression : " + this._modelSetting.getExpressionFile(name));
    } else {
        this._expressionDuration = null;
        return false;
    }
    return true;
}

LIVE2DCUBISMPIXI.Model.prototype.stopExpression = function () {
    this.animator.getLayer("expressionAdd").stop();
    this.animator.getLayer("expressionOver").stop();
    this.animator.getLayer("expressionMult").stop();
    this._currentExpression = null;
};


LIVE2DCUBISMPIXI.Model.prototype.startRandomMotion = function (name, priority, loop, layer) {
    var max = this._modelSetting.getMotionNum(name);
    var no = Math.randomInt(max);
    return this.startMotion(name, no, priority, loop, layer);
}

LIVE2DCUBISMPIXI.Model.prototype.startMotion = function (name, no, priority, loop, layer) {
    if (this._talkMotion && name !== this._talkMotion[0]) return;
    if (this._loopMotion) this._savedLoopMotion = this._loopMotion;
    var motionName = this._modelSetting.getMotionFile(name, no);
    if (motionName == null || motionName == "") {
        if (LAppDefine.DEBUG_LOG) console.error("Failed to motion.");
        return;
    }
    if (!this._motionsData || !this._motionsData[name] || !this._motionsData[name][no]) return;
    if (this._currentMotionPriority && this._currentMotionPriority > priority) return;
    if (!layer) layer = this.animator.getLayer("motion");
    if (this._currentMotion && this._currentMotion[0] === name && this._currentMotion[1] === no && layer.currentTime < this._animationDuration) {
        if (LAppDefine.DEBUG_LOG) console.log("Motion is running.");
        return;
    }
    this._currentMotionPriority = priority;
    this._currentMotion = [name, no];
    var data = JsonEx.makeDeepCopy(this._motionsData[name][no]);
    data.Meta.Loop = !!loop;
    var fade = this._modelSetting.getMotionFadeIn(name, no) / 1000;
    this._animationDuration = data.Meta.Duration;
    this._fadeDuration = fade;
    var animation = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(data);
    layer.play(animation, fade);
    if (LAppDefine.DEBUG_LOG) console.log("Start motion : " + motionName);
    var exp = this._modelSetting.getMotionExpression(name, no);
    if (exp) this.setExpression(exp, this._animationDuration);
    this.playSe(this._modelSetting.getMotionSound(name, no));
    this._loopMotion = loop ? [name, no, priority] : null;
    this._initialMotionStarted = true;
    this._tappedMotionDuration = false;
    this._hoveredMotionDuration = false;
    return true;
}

LIVE2DCUBISMPIXI.Model.prototype.startTalkMotion = function (motion, index) {
    if (index >= 0) {
        this.startMotion(motion, index, 3);
    } else {
        this.startRandomMotion(motion, 3, false);
    }
    this._talkMotion = [motion, index];
};

LIVE2DCUBISMPIXI.Model.prototype.setDrag = function (x, y) {
    this._model.setDrag(x, y);
}

LIVE2DCUBISMPIXI.Model.prototype.release = function () { }

LIVE2DCUBISMPIXI.Model.prototype.tapEvent = function (x, y) {
    var hit = false;
    if (this._tapData) {
        for (var area in this._tapData) {
            if (hit || !this._tapData.hasOwnProperty(area)) continue;
            if ((TouchInput.isTriggered() && this.isHit(area, x, y)) || (this._tapData[area].keyInput && Input.isTriggered(this._tapData[area].keyInput))) {
                TouchInput.update();
                Input.update();
                hit = true;
                this._isTappedData[area] = true;
                if (LAppDefine.DEBUG_LOG) console.log("tapEvent view x:" + x + " y:" + y + " : Tap " + area);
                if (this._tapData[area].expression) this.setExpression(this._tapData[area].expression);
                var index = this._tapData[area].motionIndex >= 0 ? this._tapData[area].motionIndex : Math.randomInt(this._modelSetting.getMotionNum(this._tapData[area].motionName));
                this.startMotion(this._tapData[area].motionName, index, 3, false);
                this._tappedMotionData = JsonEx.makeDeepCopy(this._tapData[area]);
                this._tappedMotionData.motionIndex = index;
                this._tappedMotionDuration = this._tapData[area].loop;
                if (this._tapData[area].commonEvent) $gameTemp.reserveCommonEvent(this._tapData[area].commonEvent);
                break;
            }
        }
    }
    return hit;
};

LIVE2DCUBISMPIXI.Model.prototype.hoverEvent = function (x, y) {
    var hit = false;
    if (this._hoverData) {
        for (var area in this._hoverData) {
            if (!this._hoverData.hasOwnProperty(area)) continue;
            if (this._isHoveredData[area]) {
                if (this.isHit(area, x, y)) {
                    hit = true;
                    break;
                } else {
                    this._isHoveredData[area] = false;
                }
            } else {
                if (this.isHit(area, x, y) || (this._hoverData[area].keyInput && Input.isTriggered(this._hoverData[area].keyInput))) {
                    hit = true;
                    this._isHoveredData[area] = true;
                    if (LAppDefine.DEBUG_LOG) console.log("hoverEvent view x:" + x + " y:" + y + " : Tap " + area);
                    if (this._hoverData[area].expression) this.setExpression(this._hoverData[area].expression);
                    var index = this._hoverData[area].motionIndex >= 0 ? this._hoverData[area].motionIndex : Math.randomInt(this._modelSetting.getMotionNum(this._hoverData[area].motionName));
                    this.startMotion(this._hoverData[area].motionName, index, 3);
                    this._hoveredMotionData = JsonEx.makeDeepCopy(this._hoverData[area]);
                    this._hoveredMotionData.motionIndex = index;
                    this._hoveredMotionDuration = this._hoverData[area].loop;
                    if (this._hoverData[area].commonEvent) $gameTemp.reserveCommonEvent(this._hoverData[area].commonEvent);
                    break;
                }
            }
        }
        if (this._hoveredMotionDuration === -1 && !hit) {
            this._hoveredMotionData = null;
            this._hoveredMotionDuration = 0;
        }
    }
    return hit;
};

LIVE2DCUBISMPIXI.Model.prototype.isAreaTapped = function (area) {
    var vx = TouchInput._mouseX;
    var vy = TouchInput._mouseY;
    return TouchInput.isTriggered() && this.isHit(area, vx, vy);
};

LIVE2DCUBISMPIXI.Model.prototype.isHit = function (name, mx, my) {
    name = this._modelSetting.getHitAreaID(name);
    var drawIndex = this.drawables.ids.indexOf(name);
    if (drawIndex < 0) {
        name = this._modelSetting.getHitAreaName(name);
        drawIndex = this.drawables.ids.indexOf(name);
        if (drawIndex < 0) return false;
    }
    var count = this.drawables.vertexCounts[drawIndex];
    var vertices = this.drawables.vertexPositions[drawIndex];
    var left = vertices[0];
    var right = vertices[0];
    var top = vertices[1];
    var bottom = vertices[1];
    for (var j = 1; j < count; ++j) {
        var x = vertices[j * 2];
        var y = vertices[j * 2 + 1];
        if (x < left) {
            left = x; // Min x
        }
        if (x > right) {
            right = x; // Max x
        }
        if (y < top) {
            top = y; // Min y
        }
        if (y > bottom) {
            bottom = y; // Max y
        }
    }
    var ax = this.x + left * this.scale.x;
    var ay = this.y - bottom * this.scale.y;
    var aw = (right - left) * this.scale.x;
    var ah = (bottom - top) * this.scale.y;
    return mx >= ax && mx <= ax + aw && my >= ay && my <= ay + ah;
};

LIVE2DCUBISMPIXI.Model.prototype.setTap = function (hitArea, motion, no, exp, loopDuration, cursorName, commonEventId, input) {
    this.tap = true;
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

LIVE2DCUBISMPIXI.Model.prototype.setHover = function (hitArea, motion, no, exp, loopDuration, cursorName, commonEventId, input) {
    this.hover = true;
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

LIVE2DCUBISMPIXI.Model.prototype.updateMouseCursor = function () {
    var param = PluginManager.parameters('Live2D');
    var cursor = param['Mouse Cursor'];
    if ((!(SceneManager._scene instanceof Scene_Map) || $gamePlayer.canMove()) && this.visible && (this.tap || this.hover) && Imported.TDDP_MouseSystemEx && TDDP_MouseSystemEx.useCustomCursor) {
        var vx = TouchInput._mouseX;
        var vy = TouchInput._mouseY;
        for (var area in this._tapData) {
            if (this.isHit(area, vx, vy)) {
                this._isHovered = true;
                var cur = this._tapData[area].cursor || cursor;
                if (this._hoverData && this._hoverData[area]) cur = this._hoverData[area].cursor || cur;
                TDDP_MouseSystemEx._setCustomCursor(TDDP_MouseSystemEx._ext(cur));
                return;
            }
        }
        for (var area in this._hoverData) {
            if (this.isHit(area, vx, vy)) {
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

LIVE2DCUBISMPIXI.Model.prototype.playSe = function (name) {
    if (name) {
        var se = {};
        se.name = name.substring(name.lastIndexOf('/') + 1);
        se.volume = 90;
        se.pitch = 100;
        se.pan = 0;
        if (this._lastSe) this._lastSe.stop();
        var buffer = this.createBuffer(name.substring(0, name.lastIndexOf('/') + 1), se.name);
        this.updateBufferParameters(buffer, AudioManager._seVolume, se);
        buffer.play(false);
        this._lastSe = buffer;
    }
};

LIVE2DCUBISMPIXI.Model.prototype.updateBufferParameters = function (buffer, configVolume, audio) {
    if (buffer && audio) {
        buffer.volume = configVolume * (audio.volume || 0) / 10000;
        buffer.pitch = (audio.pitch || 0) / 100;
        buffer.pan = (audio.pan || 0) / 100;
    }
};

LIVE2DCUBISMPIXI.Model.prototype.createBuffer = function (folder, name) {
    var url = this._modelHomeDir + folder + encodeURIComponent(name);
    return new WebAudio(url);
};

function L2DC3EyeBlink() {
    this.nextBlinkTime = null /* TODO NOT INIT */; // 
    this.stateStartTime = null /* TODO NOT INIT */; // 
    this.blinkIntervalMsec = null /* TODO NOT INIT */; // 
    this.eyeState = EYE_STATE.STATE_FIRST;
    this.blinkIntervalMsec = 4000;
    this.closingMotionMsec = 100;
    this.closedMotionMsec = 50;
    this.openingMotionMsec = 150;
    this.closeIfZero = true;
}

//============================================================
//    L2DC3EyeBlink # calcNextBlink()
//============================================================
L2DC3EyeBlink.prototype.calcNextBlink = function () {
    var time /*long*/ = UtSystem.getUserTimeMSec();
    var r /*Number*/ = Math.random();
    return  /*(long)*/ (time + r * (2 * this.blinkIntervalMsec - 1));
}

//============================================================
//    L2DC3EyeBlink # setInterval()
//============================================================
L2DC3EyeBlink.prototype.setInterval = function (blinkIntervalMsec /*int*/) {
    this.blinkIntervalMsec = blinkIntervalMsec;
}

//============================================================
//    L2DC3EyeBlink # setEyeMotion()
//============================================================
L2DC3EyeBlink.prototype.setEyeMotion = function (closingMotionMsec/*int*/, closedMotionMsec/*int*/, openingMotionMsec/*int*/) {
    this.closingMotionMsec = closingMotionMsec;
    this.closedMotionMsec = closedMotionMsec;
    this.openingMotionMsec = openingMotionMsec;
}

//============================================================
//    L2DC3EyeBlink # updateParam()
//============================================================
L2DC3EyeBlink.prototype.updateParam = function (model/*ALive2DModel*/) {
    var time /*:long*/ = UtSystem.getUserTimeMSec();
    var eyeParamValue /*:Number*/;
    var t /*:Number*/ = 0;
    switch (this.eyeState) {
        case EYE_STATE.STATE_CLOSING:
            t = (time - this.stateStartTime) / this.closingMotionMsec;
            if (t >= 1) {
                t = 1;
                this.eyeState = EYE_STATE.STATE_CLOSED;
                this.stateStartTime = time;
            }
            eyeParamValue = 1 - t;
            break;
        case EYE_STATE.STATE_CLOSED:
            t = (time - this.stateStartTime) / this.closedMotionMsec;
            if (t >= 1) {
                this.eyeState = EYE_STATE.STATE_OPENING;
                this.stateStartTime = time;
            }
            eyeParamValue = 0;
            break;
        case EYE_STATE.STATE_OPENING:
            t = (time - this.stateStartTime) / this.openingMotionMsec;
            if (t >= 1) {
                t = 1;
                this.eyeState = EYE_STATE.STATE_INTERVAL;
                this.nextBlinkTime = this.calcNextBlink();
            }
            eyeParamValue = t;
            break;
        case EYE_STATE.STATE_INTERVAL:
            if (this.nextBlinkTime < time) {
                this.eyeState = EYE_STATE.STATE_CLOSING;
                this.stateStartTime = time;
            }
            eyeParamValue = 1;
            break;
        case EYE_STATE.STATE_FIRST:
        default:
            this.eyeState = EYE_STATE.STATE_INTERVAL;
            this.nextBlinkTime = this.calcNextBlink();
            eyeParamValue = 1;
            break;
    }
    if (!this.closeIfZero) eyeParamValue = -eyeParamValue;
    if (!this._animation) this._animation = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(model._emptyAnimationJson);
    var groups = model.groups.getGroupById("EyeBlink");
    this._animation.evaluate = function (time, weight, blend, target) {
        groups.ids.forEach(function (id, i) {
            var n = target.parameters.ids.indexOf(id);
            if (n >= 0) {
                target.parameters.values[n] = blend(target.parameters.maximumValues[n], eyeParamValue, weight);
            }
        });
    };
    model.animator.getLayer("blink").play(this._animation);
}