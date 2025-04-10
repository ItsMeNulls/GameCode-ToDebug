/**
 *
 *  You can modify and use this source freely
 *  only for the development of application related Live2D.
 *
 *  (c) Live2D Inc. All rights reserved.
 */

//============================================================
//============================================================
//  class PlatformManager     extend IPlatformManager
//============================================================
//============================================================
function PlatformManager() { }

//============================================================
//    PlatformManager # loadBytes()
//============================================================
PlatformManager.prototype.loadBytes = function (path /*String*/, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", path, true);
    request.responseType = "arraybuffer";
    request.onload = function () {
        switch (request.status) {
            case 0:
            case 200:
                callback(request.response);
                break;
            default:
                console.error("Failed to load (" + request.status + ") : " + path);
                break;
        }
    }
    request.onerror = function () {
        console.error("Failed to load (" + request.status + ") : " + path);
    }
    request.send(null);
    //return request;
}

//============================================================
//    PlatformManager # loadString()
//============================================================
PlatformManager.prototype.loadString = function (path /*String*/) {

    this.loadBytes(path, function (buf) {
        return buf;
    });

}

//============================================================
//    PlatformManager # loadLive2DModel()
//============================================================
PlatformManager.prototype.loadLive2DModel = function (modelSetting, path /*String*/, gl, callback) {
    // console.log(new Error().stack);
    var model = null;

    // load moc
    this.loadBytes(path, function (buf) {
        if (modelSetting.VERSION === 3) {
        } else {
            model = Live2DModelWebGL.loadModelwithGL(buf, gl);
            model._cubismVersion = 2;
        }
        callback(model);
    });

}

//============================================================
//    PlatformManager # loadTexture()
//============================================================
PlatformManager.prototype.loadTexture = function (gl, model /*ALive2DModel*/, no /*int*/, path /*String*/, callback) {
    if (Dhoom.Live2DContacts && Dhoom.Live2DContacts.isEncrypted(path)) {
        Dhoom.Live2DContacts.decryptL2DTexture(gl, model /*ALive2DModel*/, no /*int*/, path /*String*/, callback);
    } else {
        // load textures
        var loadedImage = new Image();
        loadedImage.src = path;

        var thisRef = this;
        loadedImage.onload = function () {

            // create texture                
            var texture = gl.createTexture();
            if (!texture) {
                console.error("Failed to generate gl texture name.");
                return -1;
            }

            if (model.isPremultipliedAlpha() == false) {
                // 乗算済アルファテクスチャ以外の場合
                gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
            }
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,
                gl.UNSIGNED_BYTE, loadedImage);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
            gl.generateMipmap(gl.TEXTURE_2D);



            model.setTexture(no, texture);

            // テクスチャオブジェクトを解放
            texture = null;

            if (typeof callback == "function") callback();
        };

        loadedImage.onerror = function () {
            console.error("Failed to load image : " + path);
        }
    }
}


//============================================================
//    PlatformManager # parseFromBytes(buf)

//============================================================
PlatformManager.prototype.jsonParseFromBytes = function (buf) {

    var jsonStr;



    var bomCode = new Uint8Array(buf, 0, 3);
    if (bomCode[0] == 239 && bomCode[1] == 187 && bomCode[2] == 191) {
        jsonStr = String.fromCharCode.apply(null, new Uint8Array(buf, 3));
    } else {
        jsonStr = String.fromCharCode.apply(null, new Uint8Array(buf));
    }

    var jsonObj = JSON.parse(jsonStr);

    return jsonObj;
};


//============================================================
//    PlatformManager # log()
//============================================================
PlatformManager.prototype.log = function (txt /*String*/) {
    console.log(txt);
}

Live2DFramework.setPlatformManager(new PlatformManager());

Live2D.init();
console.log('live2d Load');