"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.init = function (server) {
        server.app.use(function (error, req, res, next) {
            console.log(error, 'In error handler');
            // Mongo Error
            if (error.name == 'MongoError') {
                if (error.code == 11000) {
                    res.status(400).send(Object.values(error.keyValue)[0] + " already exists in the system");
                }
                else {
                    res.status(400).send("Bad Request");
                }
            }
            res.status(500).send(error.message || "Internal server error");
        });
    };
    return ErrorHandler;
}());
exports.default = ErrorHandler;
//# sourceMappingURL=error.handler.js.map