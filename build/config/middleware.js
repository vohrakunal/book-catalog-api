"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var express_1 = __importDefault(require("express"));
var Middleware = /** @class */ (function () {
    function Middleware() {
    }
    Middleware.init = function (server) {
        // express middleware
        server.app.use(express_1.default.urlencoded({ extended: false }));
        server.app.use(express_1.default.json());
        server.app.use((0, cors_1.default)());
        server.app.use((0, morgan_1.default)('dev'));
        // mongoose.set('debug', true);
        // cors
        server.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS ');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,' +
                ' Content-Type, Accept,' +
                ' Authorization,' +
                ' Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            res.header('Access-Control-Allow-origin', req.headers.origin);
            next();
        });
    };
    return Middleware;
}());
exports.default = Middleware;
//# sourceMappingURL=middleware.js.map