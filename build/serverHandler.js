"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onError = exports.normalizePort = void 0;
function normalizePort(val) {
    var port = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
exports.normalizePort = normalizePort;
function onError(error, port) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.log(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
exports.onError = onError;
//# sourceMappingURL=serverHandler.js.map