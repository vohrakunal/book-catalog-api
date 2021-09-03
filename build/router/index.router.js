"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var books_router_1 = __importDefault(require("./books.router"));
var IndexRouter = /** @class */ (function () {
    function IndexRouter() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    IndexRouter.prototype.routes = function () {
        // GET
        this.router.use('/books', new books_router_1.default().router);
    };
    return IndexRouter;
}());
exports.default = IndexRouter;
//# sourceMappingURL=index.router.js.map