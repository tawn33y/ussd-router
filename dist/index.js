"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goBack = function (str) {
    var strArray = str.split('*');
    return strArray.reduce(function (acc, curr) {
        if (curr === '00') {
            return acc.split('*').slice(0, -1).join('*');
        }
        if (acc === '') {
            return curr;
        }
        return acc + "*" + curr;
    }, '');
};
exports.goToHome = function (str) {
    var updatedStr = str;
    var strArray = str.split('*');
    for (var i = strArray.length; i >= 0; i -= 1) {
        if (strArray[i] === '0') {
            updatedStr = strArray.slice(i + 1).join('*');
            break;
        }
    }
    return updatedStr;
};
exports.ussdRouter = function (str) { return exports.goBack(exports.goToHome(str)); };
//# sourceMappingURL=index.js.map