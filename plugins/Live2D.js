//=============================================================================
// Live2D.js
//=============================================================================

/*:
 * @plugindesc Add Live2D SDK. v2.0
 * @author Hitomi (Updated by DrDhoom/ Boner Games)
 *
 * @param path
 * @desc Directory for the models
 * @default live2d/
 * 
 * @param Mouse Cursor
 * @desc Cursor filename, TDDP Mouse System Ex required.
 * @type file
 * @dir img/cursors/
 * @default select
 *
  * @help 

 */


var Dhoom = Dhoom || {};
Dhoom.Live2D = Dhoom.Live2D || {};

(function () {
    // Patch Game System
    PluginManager.loadScript('Live2D/Patches/GLBitmap.js');
    // Load Live2D Library
    PluginManager.loadScript('Live2D/Libs/live2d.min.js');
    PluginManager.loadScript('Live2D/Framework/Live2DFramework.js');
    PluginManager.loadScript('Live2D/Libs/live2dcubismcore_3.3.js');
    PluginManager.loadScript('Live2D/Libs/live2dcubismframework_3.3.js');
    PluginManager.loadScript('Live2D/Libs/live2dcubismpixi_3.3.js');
    // Load Live2D Utils
    PluginManager.loadScript('Live2D/Framework/utils/MatrixStack.js');
    PluginManager.loadScript('Live2D/Framework/utils/ModelSettingJson.js');
    // Load Live2D System
    PluginManager.loadScript('Live2D/Framework/PlatformManager.js');
    PluginManager.loadScript('Live2D/Framework/LAppDefine.js');
    PluginManager.loadScript('Live2D/Framework/LAppModel.js');
    // Link Start
    PluginManager.loadScript('Live2D/Cubism3Model.js');
    PluginManager.loadScript('Live2D/Sprite_Live2D.js');
    PluginManager.loadScript('Live2D/Sprite_Live2D_Layer.js');
    // Make Command List
    PluginManager.loadScript('Live2D/Patches/Game_Screen.js');

    PluginManager.parameters('Live2D');
    var _Game_Interpreter_pluginCommand =


        Game_Interpreter.prototype.pluginCommand;
    var _Game_Interpreter_prototype_updateWait = Game_Interpreter.prototype.updateWait;

    Game_Interpreter.prototype.updateWait = function () {
        _Game_Interpreter_prototype_updateWait.call(this);
        return this.updateWaitCount() || this.updateWaitMode() || this.updateWaitLive2D();
    }

    Game_Interpreter.prototype.updateWaitLive2D = function () {
        return $gameScreen.isBusy();
    }

    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'Live2D') {
            var model, pending;
            switch (args[0]) {
                // 加载模型
                case 'load':
                    // TODO
                    $gameScreen.loadLive2DModel(args[1], args[2]);
                    break;
                // 显示模型
                case 'show':
                    // TODO
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    if (model) {
                        if (typeof model === "string" || model._isLoading) {
                            // pending.push('this.show()');
                            pending.push([Sprite_Live2D.prototype.show]);
                        } else {
                            model.show();
                        }
                    }
                    break;
                // 隐藏模型
                case 'hide':
                    // TODO
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    if (model) {
                        if (typeof model === "string" || model._isLoading) {
                            // pending.push('this.hide()');
                            pending.push([Sprite_Live2D.prototype.hide]);
                        } else {
                            model.hide();
                        }
                    }
                    break;
                // 显示模型
                case 'fadeIn':
                    // TODO
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    if (model) {
                        if (typeof model === "string" || model._isLoading) {
                            // pending.push('this.fadeIn(' + args[2] + ')');
                            pending.push([Sprite_Live2D.prototype.fadeIn, [args[2]]]);
                        } else {
                            model.fadeIn(args[2]);
                        }
                    }
                    break;
                // 隐藏模型
                case 'fadeOut':
                    // TODO
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    if (model) {
                        if (typeof model === "string" || model._isLoading) {
                            // pending.push('this.fadeOut(' + args[2] + ')');
                            pending.push([Sprite_Live2D.prototype.fadeOut, [args[2]]]);
                        } else {
                            model.fadeOut(args[2]);
                        }
                    }
                    break;
                // 动作
                case 'motion':
                    // TODO
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    if (model) {
                        if (args[3] && args[3].toLowerCase() === 'random') {
                            if (typeof model === "string" || model._isLoading) {
                                pending.push([Sprite_Live2D.prototype.startRandomMotion, [args[2], args[4] || 3]]);
                                // pending.push('this.startRandomMotion(' + args[2] + ',' + args[4] || 3 + ')');
                            } else {
                                model.startRandomMotion(args[2], args[4] || 3);
                            }
                        } else {
                            if (typeof model === "string" || model._isLoading) {
                                pending.push([Sprite_Live2D.prototype.startMotion, [args[2], args[3] || 0, args[4] || 3]]);
                                // pending.push('this.startMotion(' + args[2] + ',' + args[3] || 0 + ',' + args[4] || 3);
                            } else {
                                model.startMotion(args[2], args[3] || 0, args[4] || 3);
                            }
                        }
                    }
                    break;
                // 表情
                case 'loopmotion':
                    // TODO
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    if (model && args[3] && args[3].toLowerCase() === 'random') {
                        pending.push([Sprite_Live2D.prototype.startRandomMotion, [args[2], args[4] || 3, true]]);
                        // model.startRandomMotion(args[2], args[4] || 3, true);
                    } else if (model) {
                        pending.push([Sprite_Live2D.prototype.startMotion, [args[2], args[3] || 0, args[4] || 3, true]]);
                        // model.startMotion(args[2], args[3] || 0, args[4] || 3, true);
                    }
                    break;
                // 表情
                case 'expression':
                    // TODO
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    if (model) {
                        pending.push([Sprite_Live2D.prototype.setExpression, [args[2]]]);
                        // model.setExpression(args[2]);
                    }
                    break;
                // 移除LiveModel
                case 'scale':
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    if (model) {
                        if (args[2] === 'reset') {
                            if (typeof model === "string" || model._isLoading) {
                                pending.push([Sprite_Live2D.prototype.resetScale]);
                            } else {
                                model.resetScale();
                            }
                        } else {
                            if (typeof model === "string" || model._isLoading) {
                                pending.push('this.viewScale = ' + Number(args[2]));
                            } else {
                                model.viewScale = Number(args[2]);
                            }
                        }
                    }
                    break;
                case 'flip':
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    if (model) {
                        if (typeof model === "string" || model._isLoading) {
                            pending.push('this._flip = !this._flip; this.viewScale = this.viewScale');
                        } else {
                            model._flip = !model._flip;
                            model.viewScale = model.viewScale;
                        }
                    }
                    break;
                case 'sleep':
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    if (model) {
                        pending.push('this.sleep = ' + args[2]);
                        // if (args[2] === 'true') {
                        //     model.sleep = true;
                        // } else if (args[2] === 'false') {
                        //     model.sleep = false;
                        // }
                    }
                    break;
                case 'destroy':
                    {
                        model = $gameScreen.getLive2DModel(args[1]);
                        pending = $gameScreen.live2dPendingMethods[args[1]];
                        if (model) {
                            pending.push('$gameScreen.removeLive2DModel("' + args[1] + '")');
                            // $gameScreen.removeLive2DModel(args[1]);
                        }

                        break;
                    }
                // 清空表单
                case 'clearall':
                    {
                        $gameScreen.clear();

                        break;
                    }
                // 模型位置
                case 'pos':
                    // TODO
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    switch (args[2]) {
                        case 'left':
                            if (model) {
                                if (typeof model === "string" || model._isLoading) {
                                    pending.push('this.x = 0');
                                } else {
                                    model.x = 0;
                                }
                            }
                            break;
                        case 'right':
                            if (model) {
                                if (typeof model === "string" || model._isLoading) {
                                    pending.push('this.x = Graphics.width - this.width');
                                } else {
                                    model.x = Graphics.width - model.width;
                                }
                            }
                            break;
                        default:
                            if (model) {
                                if (typeof model === "string" || model._isLoading) {
                                    pending.push('this.x = ' + parseInt(args[2], 10));
                                    pending.push('this.y = ' + parseInt(args[3], 10));
                                } else {
                                    model.x = parseInt(args[2], 10);
                                    // 添加y坐标
                                    model.y = parseInt(args[3], 10);
                                }
                            }
                            break;
                    }
                    break;
                // 测试场景
                case 'mouse':
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    if (model) {
                        pending.push('this.drag = ' + args[2]);
                        // if (args[2] === 'true') {
                        //     model.drag = true;
                        // } else if (args[2] === 'false') {
                        //     model.drag = false;
                        // }
                    }
                    break;
                case 'test':
                    // TODO
                    SceneManager.goto(Scene_L2DTest);
                    break;

                case 'slide':
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    var x = Number(args[2]);
                    var y = Number(args[3]);
                    var dur = Number(args[4]);
                    if (model) {
                        if (typeof model === "string" || model._isLoading) {
                            pending.push('this.tween("x", ' + x + ', ' + dur + ')');
                            pending.push('this.tween("y", ' + y + ', ' + dur + ')');
                        } else {
                            model.tween('x', x, dur);
                            model.tween('y', y, dur);
                        }
                    }
                    break;
                case 'tap':
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    if (args[2].toLowerCase() === 'clear') {
                        if (typeof model === "string" || model._isLoading) {
                            pending.push('this.tap = false; this._tapData = null');
                        } else {
                            model.tap = false;
                            model._tapData = null;
                        }
                    } else {
                        if (args[3].toLowerCase() === 'false') {
                            if (typeof model === "string" || model._isLoading) {
                                pending.push("if (this._tapData) delete this._tapData[" + args[2] + "]");
                            } else {
                                if (model._tapData) delete model._tapData[args[2]];
                            }
                        } else {
                            var hitArea = args[2];
                            var motion = args[3];
                            var index = Number(args[4]);
                            if (Number.isNaN(index)) index = 0;
                            var exp = args[5] === "false" ? false : args[5];
                            var loop = (args[6] === "0" || args[6] === "false") ? false : Number(args[6]);
                            var cursor = (args[7] === undefined || args[7] === "false") ? false : args[7];
                            var commonEvent = args[8] ? Number(args[8]) : false;
                            var input = args[9];
                            if (typeof model === "string" || model._isLoading) {
                                pending.push([Sprite_Live2D.prototype.setTap, [hitArea, motion, index, exp, loop, cursor, commonEvent, input]]);
                            } else {
                                model.setTap(hitArea, motion, index, exp, loop, cursor, commonEvent, input);
                            }
                        }
                    }
                    break;
                case 'hover':
                    model = $gameScreen.getLive2DModel(args[1]);
                    pending = $gameScreen.live2dPendingMethods[args[1]];
                    if (args[2].toLowerCase() === 'clear') {
                        if (typeof model === "string" || model._isLoading) {
                            pending.push('this.hover = false; this._hoverData = null');
                        } else {
                            model.hover = false;
                            model._hoverData = null;
                        }
                    } else {
                        if (args[3].toLowerCase() === 'false') {
                            if (typeof model === "string" || model._isLoading) {
                                pending.push("if (this._hoverData) delete this._hoverData[" + args[2] + "]");
                            } else {
                                if (model._hoverData) delete model._hoverData[args[2]];
                            }
                        } else {
                            var hitArea = args[2];
                            var motion = args[3];
                            var index = Number(args[4]);
                            if (Number.isNaN(index)) index = 0;
                            var exp = args[5] === "false" ? false : args[5];
                            var loop = (args[6] === "0" || args[6] === "false") ? false : Number(args[6]);
                            var cursor = (args[7] === undefined || args[7] === "false") ? false : args[7];
                            var commonEvent = args[8] ? Number(args[8]) : false;
                            var input = args[9];
                            if (typeof model === "string" || model._isLoading) {
                                pending.push([Sprite_Live2D.prototype.setHover, [hitArea, motion, index, exp, loop, cursor, commonEvent, input]]);
                            } else {
                                model.setHover(hitArea, motion, index, exp, loop, cursor, commonEvent, input);
                            }
                        }
                    }
                    break;
            }
        }
    };

    //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    // TouchInput
    //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    if (typeof TouchInput._mouseX === 'undefined') {
        var _TouchInput_clear = TouchInput.clear;
        TouchInput.clear = function () {
            _TouchInput_clear.call(this);
            this._mouseX = 0;
            this._mouseY = 0;
        };

        Object.defineProperty(TouchInput, 'mouseX', {
            get: function () {
                return this._mouseX;
            },
            configurable: true
        });

        Object.defineProperty(TouchInput, 'mouseY', {
            get: function () {
                return this._mouseY;
            },
            configurable: true
        });

        var _TouchInput_onMouseMove = TouchInput._onMouseMove;
        TouchInput._onMouseMove = function (event) {
            _TouchInput_onMouseMove.call(this, event);
            this._mouseX = Graphics.pageToCanvasX(event.pageX);
            this._mouseY = Graphics.pageToCanvasY(event.pageY);
        };
    }
})();