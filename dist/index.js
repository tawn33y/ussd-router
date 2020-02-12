"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.goBack = function (str, keyword) {
    if (keyword === void 0) { keyword = '00'; }
    var strArray = str.split('*');
    var newStrArray = [];
    for (var i = 0; i < strArray.length; i += 1) {
        if (strArray[i] === keyword) {
            newStrArray = newStrArray.slice(0, -1);
        }
        else {
            newStrArray = __spreadArrays(newStrArray, [
                strArray[i],
            ]);
        }
    }
    return newStrArray.join('*');
};
exports.goToHome = function (str, keyword) {
    if (keyword === void 0) { keyword = '0'; }
    var strArray = str.split('*');
    var newStr = str;
    for (var i = strArray.length; i >= 0; i -= 1) {
        if (strArray[i] === keyword) {
            newStr = strArray.slice(i + 1).join('*');
            break;
        }
    }
    return newStr;
};
exports.ussdRouter = function (str, goToHomeKeyword, goBackKeyword) {
    if (goToHomeKeyword === void 0) { goToHomeKeyword = '0'; }
    if (goBackKeyword === void 0) { goBackKeyword = '00'; }
    return exports.goBack(exports.goToHome(str, goToHomeKeyword), goBackKeyword);
};
//# sourceMappingURL=index.js.map