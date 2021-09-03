"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwError = void 0;
function throwError(message, statusCode) {
    var newError = new Error(message || 'Internal Server Error');
    newError['status'] = statusCode || 500;
    throw newError;
}
exports.throwError = throwError;
//# sourceMappingURL=functions.js.map