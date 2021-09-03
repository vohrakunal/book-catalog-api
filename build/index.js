"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var http_1 = __importDefault(require("http"));
var serverHandler_1 = require("./serverHandler");
var environment_1 = require("./config/environment");
var SERVER = new server_1.Server();
var PORT = (0, serverHandler_1.normalizePort)(environment_1.CONFIG.PORT);
SERVER.app.set('port', PORT);
var server = http_1.default.createServer(SERVER.app);
server.listen(PORT);
// server handlers
server.on("error", function (error) { return (0, serverHandler_1.onError)(error, PORT); });
server.on("listening", function () {
    var addr = server.address();
    var bind = (typeof addr === 'string') ? "pipe " + addr : "port " + addr.port;
    console.log("Listening on " + bind);
});
//# sourceMappingURL=index.js.map