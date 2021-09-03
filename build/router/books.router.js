"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var BooksRouter = /** @class */ (function () {
    function BooksRouter() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    BooksRouter.prototype.routes = function () {
        // GET
        this.router.get('/getAllBooks', controllers_1.BooksController.getAll);
        this.router.get('/getBookById/:bookId', controllers_1.BooksController.getById);
        // Post
        this.router.post('/addBook', controllers_1.BooksController.addNew);
        this.router.post('/addBooksInBatch', controllers_1.BooksController.addBatch);
        // Put
        // Delete
    };
    return BooksRouter;
}());
exports.default = BooksRouter;
//# sourceMappingURL=books.router.js.map