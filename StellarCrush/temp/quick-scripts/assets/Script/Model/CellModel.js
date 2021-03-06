(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Model/CellModel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'dae88GCevBMaK7lQqhume8G', 'CellModel', __filename);
// Script/Model/CellModel.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CellModel;

var _ConstValue = require("./ConstValue");

function CellModel() {
    this.type = null;
    this.status = _ConstValue.CELL_STATUS.COMMON;
    this.x = 1;
    this.y = 1;
    this.startX = 1;
    this.startY = 1;
    this.cmd = [];
    this.isDeath = false;
    this.objecCount = Math.floor(Math.random() * 1000);
}

CellModel.prototype.init = function (type) {
    this.type = type;
};

CellModel.prototype.isEmpty = function () {
    return this.type == _ConstValue.CELL_TYPE.EMPTY;
};

CellModel.prototype.setEmpty = function () {
    this.type = _ConstValue.CELL_TYPE.EMPTY;
};
CellModel.prototype.setXY = function (x, y) {
    this.x = x;
    this.y = y;
};

CellModel.prototype.setStartXY = function (x, y) {
    this.startX = x;
    this.startY = y;
};

CellModel.prototype.setStatus = function (status) {
    this.status = status;
};

CellModel.prototype.moveToAndBack = function (pos) {
    var srcPos = cc.v2(this.x, this.y);
    this.cmd.push({
        action: "moveTo",
        keepTime: _ConstValue.ANITIME.TOUCH_MOVE,
        playTime: 0,
        pos: pos
    });
    this.cmd.push({
        action: "moveTo",
        keepTime: _ConstValue.ANITIME.TOUCH_MOVE,
        playTime: _ConstValue.ANITIME.TOUCH_MOVE,
        pos: srcPos
    });
};

CellModel.prototype.moveTo = function (pos, playTime) {
    var srcPos = cc.v2(this.x, this.y);
    this.cmd.push({
        action: "moveTo",
        keepTime: _ConstValue.ANITIME.TOUCH_MOVE,
        playTime: playTime,
        pos: pos
    });
    this.x = pos.x;
    this.y = pos.y;
};

CellModel.prototype.toDie = function (playTime) {
    this.cmd.push({
        action: "toDie",
        playTime: playTime,
        keepTime: _ConstValue.ANITIME.DIE
    });
    this.isDeath = true;
};

CellModel.prototype.toShake = function (playTime) {
    this.cmd.push({
        action: "toShake",
        playTime: playTime,
        keepTime: _ConstValue.ANITIME.DIE_SHAKE
    });
};

CellModel.prototype.setVisible = function (playTime, isVisible) {
    this.cmd.push({
        action: "setVisible",
        playTime: playTime,
        keepTime: 0,
        isVisible: isVisible
    });
};

CellModel.prototype.moveToAndDie = function (pos) {};

CellModel.prototype.isBird = function () {
    return this.type == _ConstValue.CELL_TYPE.BIRD;
};
module.exports = exports["default"];

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=CellModel.js.map
        