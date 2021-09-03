"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var booksSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: function () { return Date.now(); }
    },
});
exports.default = (0, mongoose_1.model)('books', booksSchema);
//# sourceMappingURL=Books.model.js.map