"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var DB_1 = require("./config/DB");
var middleware_1 = __importDefault(require("./config/middleware"));
var error_handler_1 = __importDefault(require("./helper/error.handler"));
var prefix_router_1 = __importDefault(require("./router/prefix.router"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.isDbConnected = false;
        // DB connection
        DB_1.DB.connect(this);
        // Initializing app middlewares
        middleware_1.default.init(this);
        // Intializing Routes
        prefix_router_1.default.init(this);
        // Error handling
        error_handler_1.default.init(this);
    }
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map