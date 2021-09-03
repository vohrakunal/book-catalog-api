"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
var index_1 = require("../../services/index");
var index_2 = require("../../lib/joi/index");
var BooksController = /** @class */ (function () {
    function BooksController() {
    }
    BooksController.getAll = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var allBooks, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, index_1.BooksService.getAll()];
                    case 1:
                        allBooks = _a.sent();
                        if (allBooks) {
                            res.status(200).send(allBooks);
                        }
                        else {
                            res.status(404).send(allBooks);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        next(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BooksController.getById = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var book, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, index_1.BooksService.getById(req.params.bookId)];
                    case 1:
                        book = _a.sent();
                        if (book) {
                            res.status(200).send(book);
                        }
                        else {
                            res.status(404).send("No Book Found");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        next(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BooksController.addNew = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var validate, checkForExisting, rtnAddedval, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        validate = index_2.bookSchema.validate(req.body);
                        if (!!validate.error) return [3 /*break*/, 3];
                        return [4 /*yield*/, index_1.BooksService.getBookByTitle(req.body.title)];
                    case 1:
                        checkForExisting = _a.sent();
                        if (checkForExisting) {
                            return [2 /*return*/, res.status(403).send("Book already Exist")];
                        }
                        return [4 /*yield*/, index_1.BooksService.addNew(req.body.title, req.body.year, req.body.description)];
                    case 2:
                        rtnAddedval = _a.sent();
                        if (rtnAddedval) {
                            res.status(200).send("Created");
                        }
                        else {
                            res.status(403).send("Something went Wrong!");
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        res.status(403).send("Something went Wrong! All fields are required");
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_2 = _a.sent();
                        next(e_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    BooksController.addBatch = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var rejected, _a, _b, book, validate, checkForExisting, e_3_1, e_4;
            var e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 11, , 12]);
                        rejected = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 8, 9, 10]);
                        _a = __values(req.body.books), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 7];
                        book = _b.value;
                        validate = index_2.bookSchema.validate(book);
                        if (!!validate.error) return [3 /*break*/, 5];
                        return [4 /*yield*/, index_1.BooksService.getBookByTitle(book.title)];
                    case 3:
                        checkForExisting = _d.sent();
                        if (checkForExisting) {
                            rejected.push(book);
                        }
                        return [4 /*yield*/, index_1.BooksService.addNew(book.title, book.year, book.description)];
                    case 4:
                        _d.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        rejected.push(book);
                        _d.label = 6;
                    case 6:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        res.status(200).send({
                            msg: "Completed",
                            rejected: rejected
                        });
                        return [3 /*break*/, 12];
                    case 11:
                        e_4 = _d.sent();
                        next(e_4);
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    return BooksController;
}());
exports.BooksController = BooksController;
//# sourceMappingURL=books.controller.js.map