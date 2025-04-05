function ModelSettingJson() {
    this.NAME = "name";
    this.ID = "id";
    this.MODEL = "model";
    this.TEXTURES = "textures";
    this.HIT_AREAS = "hit_areas";
    this.PHYSICS = "physics";
    this.POSE = "pose";
    this.EXPRESSIONS = "expressions";
    this.MOTION_GROUPS = "motions";
    this.SOUND = "sound";
    this.FADE_IN = "fade_in";
    this.FADE_OUT = "fade_out";
    this.LAYOUT = "layout";
    this.INIT_PARAM = "init_param";
    this.INIT_PARTS_VISIBLE = "init_parts_visible";
    this.VALUE = "val";
    this.FILE = "file";
    this.DISPLAY = "display";
    this.VERSION = 2;

    this.json = {};
}

ModelSettingJson.prototype.initCubism3Setting = function (path) {
    this.json.name = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.model3'));
    this.NAME = "Name";
    this.PATH = path.substring(0, path.lastIndexOf('/') + 1);
    this.ID = "Id";
    this.MOTION_GROUPS = "FileReferences.Motions";
    this.MODEL = "FileReferences.Moc";
    this.TEXTURES = "FileReferences.Textures";
    this.PHYSICS = "FileReferences.Physics";
    this.POSE = "FileReferences.Pose";
    this.EXPRESSIONS = "FileReferences.Expressions";
    this.MOTION_EXPRESSION = "Expression";
    this.FILE = "File";
    this.FADE_IN = "FadeIn";
    this.FADE_OUT = "FadeOut";
    this.FADE = "Fade"
    this.SOUND = "Sound";
    this.HIT_AREAS = "HitAreas";
    this.VERSION = 3;
};

ModelSettingJson.prototype.deepValue = function (obj, path) {
    for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
        if (obj) obj = obj[path[i]];
    };
    return obj;
};


ModelSettingJson.prototype.loadModelSetting = function (path, callback) {
    var thisRef = this;
    var pm = Live2DFramework.getPlatformManager();
    pm.loadBytes(path, function (buf) {
        var str = String.fromCharCode.apply(null, new Uint8Array(buf));
        thisRef.json = JSON.parse(str);
        if (thisRef.json.Version && thisRef.json.Version === 3) {
            thisRef.initCubism3Setting(path);
        }
        callback();
    });
};

ModelSettingJson.prototype.getDisplaySetting = function (n) {
    if (this.json[this.DISPLAY] == null || this.json[this.DISPLAY][n] == null)
        return null;

    return this.json[this.DISPLAY][n];
}


ModelSettingJson.prototype.getTextureFile = function (n) {
    var textures = this.deepValue(this.json, this.TEXTURES);
    if (textures == null || textures[n] == null)
        return null;

    return textures[n];
}


ModelSettingJson.prototype.getModelFile = function () {
    return this.deepValue(this.json, this.MODEL);
};


ModelSettingJson.prototype.getTextureNum = function () {
    var textures = this.deepValue(this.json, this.TEXTURES);
    if (textures == null) return 0;

    return textures.length;
}


ModelSettingJson.prototype.getHitAreaNum = function () {
    if (this.json[this.HIT_AREAS] == null)
        return 0;

    return this.json[this.HIT_AREAS].length;
}


ModelSettingJson.prototype.getHitAreaID = function (n) {
    if (this.json[this.HIT_AREAS] == null) return null;
    if (typeof n === "number") {
        if (this.json[this.HIT_AREAS][n] == null) return null;
    } else {
        var areas = this.json[this.HIT_AREAS];
        for (var i = 0; i < areas.length; i++) {
            if (areas[i][this.NAME] === n) {
                n = i;
                break;
            }
        }
    }
    return this.json[this.HIT_AREAS][n][this.ID];
}


ModelSettingJson.prototype.getHitAreaName = function (n) {
    if (this.json[this.HIT_AREAS] == null ||
        this.json[this.HIT_AREAS][n] == null)
        return null;

    return this.json[this.HIT_AREAS][n][this.NAME];
}


ModelSettingJson.prototype.getPhysicsFile = function () {
    return this.deepValue(this.json, this.PHYSICS);
}


ModelSettingJson.prototype.getPoseFile = function () {
    return this.deepValue(this.json, this.POSE);
}


ModelSettingJson.prototype.getExpressionNum = function () {
    var expressions = this.deepValue(this.json, this.EXPRESSIONS);
    return (expressions == null) ? 0 : expressions.length;
}


ModelSettingJson.prototype.getExpressionFile = function (n) {
    var expressions = this.deepValue(this.json, this.EXPRESSIONS);
    if (expressions == null) return null;
    return expressions[n][this.FILE];
}


ModelSettingJson.prototype.getExpressionName = function (n) {
    var expressions = this.deepValue(this.json, this.EXPRESSIONS);
    if (expressions == null) return null;
    return expressions[n][this.NAME];
}


ModelSettingJson.prototype.getLayout = function () {
    return this.json[this.LAYOUT];
}


ModelSettingJson.prototype.getInitParamNum = function () {
    return (this.json[this.INIT_PARAM] == null) ? 0 : this.json[this.INIT_PARAM].length;
}


ModelSettingJson.prototype.getMotionNum = function (name) {
    var motions = this.deepValue(this.json, this.MOTION_GROUPS);
    if (motions == null || motions[name] == null) return 0;
    return motions[name].length;
}


ModelSettingJson.prototype.getMotionFile = function (name, n) {
    var motions = this.deepValue(this.json, this.MOTION_GROUPS);
    if (motions == null || motions[name] == null || motions[name][n] == null)
        return null;

    return motions[name][n][this.FILE];
}


ModelSettingJson.prototype.getMotionSound = function (name, n) {
    var motions = this.deepValue(this.json, this.MOTION_GROUPS);
    if (motions == null || motions[name] == null || motions[name][n] == null ||
        motions[name][n][this.SOUND] == null) return null;

    return motions[name][n][this.SOUND];
}

ModelSettingJson.prototype.getMotionExpression = function (name, n) {
    var motions = this.deepValue(this.json, this.MOTION_GROUPS);
    if (motions == null || motions[name] == null || motions[name][n] == null)
        return null;

    return motions[name][n][this.MOTION_EXPRESSION];
};


ModelSettingJson.prototype.getMotionFadeIn = function (name, n) {
    var motions = this.deepValue(this.json, this.MOTION_GROUPS);
    if (motions == null || motions[name] == null || motions[name][n] == null ||
        (motions[name][n][this.FADE] == null && motions[name][n][this.FADE_IN] == null)) return this.getMotionFadeOut(name, n);

    return motions[name][n][this.FADE] ? motions[name][n][this.FADE] : motions[name][n][this.FADE_IN];
}


ModelSettingJson.prototype.getMotionFadeOut = function (name, n) {
    var motions = this.deepValue(this.json, this.MOTION_GROUPS);
    if (motions == null || motions[name] == null || motions[name][n] == null ||
        (motions[name][n][this.FADE] == null && motions[name][n][this.FADE_OUT] == null)) return 1000;

    return motions[name][n][this.FADE] ? motions[name][n][this.FADE] : motions[name][n][this.FADE_OUT];
}

ModelSettingJson.prototype.getAllMotions = function () {
    return this.deepValue(this.json, this.MOTION_GROUPS);
};

ModelSettingJson.prototype.getAllExpressions = function () {
    return this.deepValue(this.json, this.EXPRESSIONS);
};


ModelSettingJson.prototype.getInitParamID = function (n) {
    if (this.json[this.INIT_PARAM] == null ||
        this.json[this.INIT_PARAM][n] == null)
        return null;

    return this.json[this.INIT_PARAM][n][this.ID];
}


ModelSettingJson.prototype.getInitParamValue = function (n) {
    if (this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][n] == null)
        return NaN;

    return this.json[this.INIT_PARAM][n][this.VALUE];
}


ModelSettingJson.prototype.getInitPartsVisibleNum = function () {
    return (this.json[this.INIT_PARTS_VISIBLE] == null) ? 0 : this.json[this.INIT_PARTS_VISIBLE].length;
}


ModelSettingJson.prototype.getInitPartsVisibleID = function (n) {
    if (this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][n] == null)
        return null;
    return this.json[this.INIT_PARTS_VISIBLE][n][this.ID];
}


ModelSettingJson.prototype.getInitPartsVisibleValue = function (n) {
    if (this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][n] == null)
        return NaN;

    return this.json[this.INIT_PARTS_VISIBLE][n][this.VALUE];
}