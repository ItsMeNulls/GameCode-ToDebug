//============================================================
//============================================================
//  class LAppModel     extends L2DBaseModel         
//============================================================
//============================================================
function LAppModel() {
    //L2DBaseModel.apply(this, arguments);
    L2DBaseModel.prototype.constructor.call(this);

    this.modelHomeDir = "";
    this.modelSetting = null;
    this.tmpMatrix = [];
}

LAppModel.prototype = new L2DBaseModel();


LAppModel.prototype.load = function (gl, modelSettingPath, callback) {
    this.setUpdating(true);
    this.setInitialized(false);

    this.modelHomeDir = modelSettingPath.substring(0, modelSettingPath.lastIndexOf("/") + 1);

    this.modelSetting = new ModelSettingJson();

    this._seVolume = 90;
    this._lastSe = null;

    var thisRef = this;

    this.modelSetting.loadModelSetting(modelSettingPath, function () {

        var path = thisRef.modelHomeDir + thisRef.modelSetting.getModelFile();
        thisRef.loadModelData(thisRef.modelSetting, path, gl, function (model) {

            for (var i = 0; i < thisRef.modelSetting.getTextureNum(); i++) {

                var texPaths = thisRef.modelHomeDir +
                    thisRef.modelSetting.getTextureFile(i);

                //console.log(gl, i, texPaths);

                thisRef.loadTexture(gl, i, texPaths, function () {

                    if (thisRef.isTexLoaded) {

                        if (thisRef.modelSetting.getExpressionNum() > 0) {

                            thisRef.expressions = {};

                            for (var j = 0; j < thisRef.modelSetting.getExpressionNum(); j++) {
                                var expName = thisRef.modelSetting.getExpressionName(j);
                                var expFilePath = thisRef.modelHomeDir +
                                    thisRef.modelSetting.getExpressionFile(j);

                                thisRef.loadExpression(expName, expFilePath);
                            }
                        }
                        else {
                            thisRef.expressionManager = null;
                            thisRef.expressions = {};
                        }



                        if (thisRef.eyeBlink == null) {
                            thisRef.eyeBlink = new L2DEyeBlink();
                        }


                        if (thisRef.modelSetting.getPhysicsFile() != null) {
                            thisRef.loadPhysics(thisRef.modelHomeDir +
                                thisRef.modelSetting.getPhysicsFile());
                        }
                        else {
                            thisRef.physics = null;
                        }



                        if (thisRef.modelSetting.getPoseFile() != null) {
                            thisRef.loadPose(
                                thisRef.modelHomeDir +
                                thisRef.modelSetting.getPoseFile(),
                                function () {
                                    thisRef.pose.updateParam(thisRef.live2DModel);
                                }
                            );
                        }
                        else {
                            thisRef.pose = null;
                        }



                        if (thisRef.modelSetting.getLayout() != null) {
                            var layout = thisRef.modelSetting.getLayout();
                            if (layout["width"] != null)
                                thisRef.modelMatrix.setWidth(layout["width"]);
                            if (layout["height"] != null)
                                thisRef.modelMatrix.setHeight(layout["height"]);

                            if (layout["x"] != null)
                                thisRef.modelMatrix.setX(layout["x"]);
                            if (layout["y"] != null)
                                thisRef.modelMatrix.setY(layout["y"]);
                            if (layout["center_x"] != null)
                                thisRef.modelMatrix.centerX(layout["center_x"]);
                            if (layout["center_y"] != null)
                                thisRef.modelMatrix.centerY(layout["center_y"]);
                            if (layout["top"] != null)
                                thisRef.modelMatrix.top(layout["top"]);
                            if (layout["bottom"] != null)
                                thisRef.modelMatrix.bottom(layout["bottom"]);
                            if (layout["left"] != null)
                                thisRef.modelMatrix.left(layout["left"]);
                            if (layout["right"] != null)
                                thisRef.modelMatrix.right(layout["right"]);
                        }

                        for (var j = 0; j < thisRef.modelSetting.getInitParamNum(); j++) {

                            thisRef.live2DModel.setParamFloat(
                                thisRef.modelSetting.getInitParamID(j),
                                thisRef.modelSetting.getInitParamValue(j)
                            );
                        }

                        for (var j = 0; j < thisRef.modelSetting.getInitPartsVisibleNum(); j++) {

                            thisRef.live2DModel.setPartsOpacity(
                                thisRef.modelSetting.getInitPartsVisibleID(j),
                                thisRef.modelSetting.getInitPartsVisibleValue(j)
                            );
                        }


                        thisRef.live2DModel._autoBreath = false;
                        thisRef.live2DModel.saveParam();
                        // thisRef.live2DModel.setGL(gl);


                        thisRef.preloadMotionGroup(LAppDefine.MOTION_GROUP_IDLE);
                        thisRef.mainMotionManager.stopAllMotions();

                        thisRef.setUpdating(false);
                        thisRef.setInitialized(true);

                        if (typeof callback == "function") callback();

                    }
                });
            }
        });
    });
};



LAppModel.prototype.release = function (gl) {
    this.live2DModel.deleteTextures();
    var pm = Live2DFramework.getPlatformManager();
    for (var i = 0; i < pm.textureCache.length; i++) {
        delete pm.textureCache[i];
    }
    pm.textureCache = [];
}



LAppModel.prototype.preloadMotionGroup = function (name) {
    var thisRef = this;

    for (var i = 0; i < this.modelSetting.getMotionNum(name); i++) {
        var file = this.modelSetting.getMotionFile(name, i);
        this.loadMotion(file, this.modelHomeDir + file, function (motion) {
            motion.setFadeIn(thisRef.modelSetting.getMotionFadeIn(name, i));
            motion.setFadeOut(thisRef.modelSetting.getMotionFadeOut(name, i));
        });

    }
}


LAppModel.prototype.update = function () {
    // console.log("--> LAppModel.update()");

    if (this.live2DModel == null) {
        if (LAppDefine.DEBUG_LOG) console.error("Failed to update.");

        return;
    }

    var timeMSec = UtSystem.getUserTimeMSec() - this.startTimeMSec;
    var timeSec = timeMSec / 1000.0;
    var t = timeSec * 2 * Math.PI;

    if (this._tappedMotionDuration > 0) this._tappedMotionDuration--;
    if (this._hoveredMotionDuration > 0) this._hoveredMotionDuration--;

    if (this.mainMotionManager.isFinished()) {
        if (this._tappedMotionDuration) {
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
            if (this._tappedMotionDuration === 0) {
                this._tappedMotionDuration = false;
                this._tappedMotionData = null;
            }
        } else if (this._hoveredMotionDuration) {
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
            if (this._hoveredMotionDuration === 0) {
                this._hoveredMotionDuration = false;
                this._hoveredMotionData = null;
            }
        } else {
            if (this._savedLoopMotion && !this._loopMotion) this._loopMotion = this._savedLoopMotion;
            if (this._loopMotion) {
                this.startMotion(this._loopMotion[0], this._loopMotion[1], this._loopMotion[2], true);
            } else {
                this.startRandomMotion(LAppDefine.MOTION_GROUP_IDLE, LAppDefine.PRIORITY_IDLE);
            }
        }
    }

    //-----------------------------------------------------------------		


    this.live2DModel.loadParam();

    var update = this.mainMotionManager.updateParam(this.live2DModel);

    if (this.talkMotionManager) {
        if (this._talkMotion) {
            if ($gameMessage._messageStarted && $gameTemp._l2dTalkModel && $gameTemp._l2dTalkModel.names.contains(this.modelSetting.json.name) && $gameTemp._l2dTalkModel.keys.contains($gameScreen.getLive2DKeyFromModel(this))) {
                if (this.talkMotionManager.isFinished()) {
                    if (this._talkMotion[1] >= 0) {
                        this.startTalkMotion(this._talkMotion[0], this._talkMotion[1], 3);
                    } else {
                        this.startRandomTalkMotion(this._talkMotion[0], 3);
                    }
                }
            } else {
                this._talkMotion = null;
            }
        }
        if (!this._talkMotion && this.talkMotionManager.motions.length) {
            this.talkMotionManager.stopAllMotions();
            this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y", 0);
            this.live2DModel.setParamFloat("PARAM_N_MOUTH", 0);
            this.live2DModel.setParamFloat("PARAM_MC_MOUTH", 0);
            this.live2DModel.setParamFloat("PARAM_FMOUTH_OPEN", 0);
            this.live2DModel.setParamFloat("PARAM_NMOUTH_OPEN", 0);
            this.live2DModel.setParamFloat("PARAM_FB_MOUTH_OPEN", 0);
            this.live2DModel.setParamFloat("PARAM_AB_MOUTH_OPEN", 0);
            this.live2DModel.setParamFloat("PARAM_NICOLE_MOUTH_OPEN", 0);
            this.live2DModel.setParamFloat("PARAM_NATALIE_MOUTH_OPEN", 0);
            this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN", 0);
            this.live2DModel.setParamFloat("PARAM_S_MOUTH", 0);
            this.live2DModel.setParamFloat("PARAM_S_MOUTH_OPEN", 0);
            this.live2DModel.setParamFloat("PARAM_V_MOUTH_OPEN", 0);
        }
        if (!this.talkMotionManager.isFinished()) {
            this.talkMotionManager.updateParam(this.live2DModel);
        }
    }


    // if (!update) {

    if (this.eyeBlink != null && this.live2DModel._autoBlink) {
        this.eyeBlink.updateParam(this.live2DModel);
    }
    // }


    this.live2DModel.saveParam();

    //-----------------------------------------------------------------		


    if (this.expressionManager != null &&
        this.expressions != null &&
        !this.expressionManager.isFinished()) {
        this.expressionManager.updateParam(this.live2DModel);
    }



    this.live2DModel.addToParamFloat("PARAM_ANGLE_X", this.dragX * 30, 1);
    this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", this.dragY * 30, 1);
    this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", (this.dragX * this.dragY) * -30, 1);



    this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", this.dragX * 10, 1);



    this.live2DModel.addToParamFloat("PARAM_EYE_BALL_X", this.dragX, 1);
    this.live2DModel.addToParamFloat("PARAM_EYE_BALL_Y", this.dragY, 1);



    this.live2DModel.addToParamFloat("PARAM_ANGLE_X",
        Number((15 * Math.sin(t / 6.5345))), 0.5);
    this.live2DModel.addToParamFloat("PARAM_ANGLE_Y",
        Number((8 * Math.sin(t / 3.5345))), 0.5);
    this.live2DModel.addToParamFloat("PARAM_ANGLE_Z",
        Number((10 * Math.sin(t / 5.5345))), 0.5);
    this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X",
        Number((4 * Math.sin(t / 15.5345))), 0.5);
    if (this.live2DModel._autoBreath) {
        this.live2DModel.setParamFloat("PARAM_BREATH",
            Number((0.5 + 0.5 * Math.sin(t / 3.2345))), 1);
    }

    if (this.physics != null) {
        this.physics.updateParam(this.live2DModel);
    }


    if (this.lipSync == null) {
        this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y",
            this.lipSyncValue);
    }


    if (this.pose != null) {
        this.pose.updateParam(this.live2DModel);
    }

    this.live2DModel.update();
};



LAppModel.prototype.setRandomExpression = function () {
    var tmp = [];
    for (var name in this.expressions) {
        tmp.push(name);
    }

    var no = parseInt(Math.random() * tmp.length);

    this.setExpression(tmp[no]);
}



LAppModel.prototype.startRandomMotion = function (name, priority, loop) {
    var max = this.modelSetting.getMotionNum(name);
    var no = parseInt(Math.random() * max);
    this.startMotion(name, no, priority, loop);
}



LAppModel.prototype.startMotion = function (name, no, priority, loop) {

    if (this._loopMotion) this._savedLoopMotion = this._loopMotion;
    // console.log("startMotion : " + name + " " + no + " " + priority);    
    var motionName = this.modelSetting.getMotionFile(name, no);

    if (motionName == null || motionName == "") {
        if (LAppDefine.DEBUG_LOG)
            console.error("Failed to motion.");
        return;
    }

    if (priority == LAppDefine.PRIORITY_FORCE) {
        this.mainMotionManager.setReservePriority(priority);
    }
    else if (!this.mainMotionManager.reserveMotion(priority)) {
        if (LAppDefine.DEBUG_LOG)
            console.log("Motion is running.")
        return;
    }

    var thisRef = this;
    var motion;

    if (this.motions[name] == null) {
        this.loadMotion(null, this.modelHomeDir + motionName, function (mtn) {
            motion = mtn;


            thisRef.setFadeInFadeOut(name, no, priority, motion);

        });
    }
    else {
        motion = this.motions[name];


        thisRef.setFadeInFadeOut(name, no, priority, motion);
    }
    this._loopMotion = loop ? [name, no, priority] : null;
}


LAppModel.prototype.setFadeInFadeOut = function (name, no, priority, motion) {
    var motionName = this.modelSetting.getMotionFile(name, no);

    motion.setFadeIn(this.modelSetting.getMotionFadeIn(name, no));
    motion.setFadeOut(this.modelSetting.getMotionFadeOut(name, no));


    if (LAppDefine.DEBUG_LOG)
        console.log("Start motion : " + $gameScreen.getLive2DKeyFromModel(this) + ' : ' + motionName);

    if (this.modelSetting.getMotionSound(name, no) == null) {
        this.mainMotionManager.startMotionPrio(motion, priority);
    }
    else {
        var soundName = this.modelSetting.getMotionSound(name, no);
        // var player = new Sound(this.modelHomeDir + soundName);

        this.playSe({ name: soundName, volume: 90, pitch: 100, pan: 0 });

        if (LAppDefine.DEBUG_LOG)
            console.log("Start sound : " + soundName);

        this.mainMotionManager.startMotionPrio(motion, priority);
    }



    var tempAutoBlink = this.live2DModel._autoBlink;
    this.live2DModel._autoBreath = true;
    this.live2DModel._autoBlink = true;
    this.mainMotionManager.motions[0]._$w0.motions.forEach(function (t) {
        if (t._$4P === 'PARAM_BREATH') {
            this.live2DModel._autoBreath = false;
        }
        if (t._$4P === 'PARAM_EYE_R_OPEN' || t._$4P === 'PARAM_EYE_L_OPEN') {
            this.live2DModel._autoBlink = false;
        }
    }, this);
    if (!tempAutoBlink && this.live2DModel._autoBlink) {
        this.eyeBlink.eyeState = 'STATE_OPENING';
    }


}

LAppModel.prototype.playSe = function (se) {
    if (se.name) {
        if (this._lastSe) this._lastSe.stop();
        var buffer = this.createBuffer(se.name);
        this.updateBufferParameters(buffer, this._seVolume, se);
        buffer.play(false);
        this._lastSe = buffer;
    }
};

LAppModel.prototype.updateBufferParameters = function (buffer, configVolume, audio) {
    if (buffer && audio) {
        buffer.volume = configVolume * (audio.volume || 0) / 10000;
        buffer.pitch = (audio.pitch || 0) / 100;
        buffer.pan = (audio.pan || 0) / 100;
    }
};
LAppModel.prototype.createBuffer = function (name) {
    var ext = this.audioFileExt();
    var url = this.modelHomeDir + encodeURIComponent(name) + ext;
    if (this.shouldUseHtml5Audio() && folder === 'bgm') {
        Html5Audio.setup(url);
        return Html5Audio;
    } else {
        return new WebAudio(url);
    }
};

LAppModel.prototype.shouldUseHtml5Audio = function () {
    // We use HTML5 Audio to play BGM instead of Web Audio API
    // because decodeAudioData() is very slow on Android Chrome.
    return Utils.isAndroidChrome();
};

LAppModel.prototype.audioFileExt = function () {
    if (WebAudio.canPlayOgg() && !Utils.isMobileDevice()) {
        return '.ogg';
    } else {
        return '.m4a';
    }
};


LAppModel.prototype.setExpression = function (name) {
    var motion = this.expressions[name];

    if (LAppDefine.DEBUG_LOG)
        console.log("Expression : " + name);

    this.expressionManager.startMotion(motion, false);
}



LAppModel.prototype.draw = function (gl) {
    //console.log("--> LAppModel.draw()");

    // if(this.live2DModel == null) return;


    MatrixStack.push();

    MatrixStack.multMatrix(this.modelMatrix.getArray());

    this.tmpMatrix = MatrixStack.getMatrix()
    this.live2DModel.setMatrix(this.tmpMatrix);
    this.live2DModel.draw();

    MatrixStack.pop();

};



LAppModel.prototype.hitTest = function (id, testX, testY) {
    var len = this.modelSetting.getHitAreaNum();
    for (var i = 0; i < len; i++) {
        if (id == this.modelSetting.getHitAreaName(i)) {
            var drawID = this.modelSetting.getHitAreaID(i);

            return this.hitTestSimple(drawID, testX, testY);
        }
    }

    return false;
}
