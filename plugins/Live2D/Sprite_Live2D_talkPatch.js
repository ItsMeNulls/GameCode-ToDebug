//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Sprite_Live2D
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
Dhoom.L2DTalk.Sprite_Live2D_startRandomMotion = Sprite_Live2D.prototype.startRandomMotion;
Sprite_Live2D.prototype.startRandomMotion = function (name, priority, loop) {
    this._model._talkMotion = null;
    Dhoom.L2DTalk.Sprite_Live2D_startRandomMotion.call(this, name, priority, loop);
}

Dhoom.L2DTalk.Sprite_Live2D_startMotion = Sprite_Live2D.prototype.startMotion;
Sprite_Live2D.prototype.startMotion = function (name, no, priority, loop) {
    this._model._talkMotion = null;
    Dhoom.L2DTalk.Sprite_Live2D_startMotion.call(this, name, no, priority, loop);
}

Sprite_Live2D.prototype.setTalkMotion = function (motion, index) {
    if (!this._model.talkMotionManager) this._model.talkMotionManager = new L2DMotionManager();
    // if (index >= 0) {
    //     this.startMotion(motion, index, 3);
    // } else {
    //     this.startRandomMotion(motion, 3, false);
    // }
    if (index >= 0) {
        this.startTalkMotion(motion, index, 3);
    } else {
        this.startRandomTalkMotion(motion, 3, false);
    }
    this._model._talkMotion = [motion, index];
};

Sprite_Live2D.prototype.startRandomTalkMotion = function (name, priority, loop) {
    this._model.startRandomTalkMotion(name, priority, loop);
}

Sprite_Live2D.prototype.startTalkMotion = function (name, no, priority, loop) {
    this._model.startTalkMotion(name, no, priority, loop);
}