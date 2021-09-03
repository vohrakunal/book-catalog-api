"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.bookSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    year: joi_1.default.number().min(800).max(2030).required(),
    description: joi_1.default.string().required()
});
//# sourceMappingURL=books.joi.js.map