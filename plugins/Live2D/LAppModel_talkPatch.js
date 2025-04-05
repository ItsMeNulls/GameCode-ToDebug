//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// LAppModel
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
LAppModel.prototype.startRandomTalkMotion = function (name, priority) {
    var max = this.modelSetting.getMotionNum(name);
    var no = parseInt(Math.random() * max);
    this.startTalkMotion(name, no, priority);
}

LAppModel.prototype.startTalkMotion = function (name, no, priority) {
    var motionName = this.modelSetting.getMotionFile(name, no);
    if (motionName == null || motionName == "") {
        if (LAppDefine.DEBUG_LOG)
            console.error("Failed to motion.");
        return;
    }
    if (priority == LAppDefine.PRIORITY_FORCE) {
        this.talkMotionManager.setReservePriority(priority);
    } else if (!this.talkMotionManager.reserveMotion(priority)) {
        if (LAppDefine.DEBUG_LOG)
            console.log("Motion is running.")
        return;
    }
    var thisRef = this;
    var motion;
    if (this.motions[name] == null) {
        this.loadMotion(null, this.modelHomeDir + motionName, function (mtn) {
            motion = mtn;
            thisRef.setTalkFadeInFadeOut(name, no, priority, motion);
        });
    } else {
        motion = this.motions[name];
        thisRef.setTalkFadeInFadeOut(name, no, priority, motion);
    }
}

LAppModel.prototype.setTalkFadeInFadeOut = function (name, no, priority, motion) {
    var motionName = this.modelSetting.getMotionFile(name, no);
    motion.setFadeIn(this.modelSetting.getMotionFadeIn(name, no));
    motion.setFadeOut(this.modelSetting.getMotionFadeOut(name, no));
    if (LAppDefine.DEBUG_LOG)
        console.log("Start motion : " + $gameScreen.getLive2DKeyFromModel(this) + ' : ' + motionName);
    if (this.modelSetting.getMotionSound(name, no) == null) {
        this.talkMotionManager.startMotionPrio(motion, priority);
    } else {
        var soundName = this.modelSetting.getMotionSound(name, no);
        this.playSe({ name: soundName, volume: 90, pitch: 100, pan: 0 });
        if (LAppDefine.DEBUG_LOG)
            console.log("Start sound : " + soundName);
        this.talkMotionManager.startMotionPrio(motion, priority);
    }
    var tempAutoBlink = this.live2DModel._autoBlink;
    this.live2DModel._autoBreath = true;
    this.live2DModel._autoBlink = true;
    this.talkMotionManager.motions[0]._$w0.motions.forEach(function (t) {
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