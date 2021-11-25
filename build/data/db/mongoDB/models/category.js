"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.CategorySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.CategorySchema = new mongoose_1.default.Schema({
    Id: String,
    Name: String,
    SeoFilename: String,
    MimeType: String,
    CreatedOnUtc: Date,
    UpdatedOnUtc: Date
}, {
    timestamps: true,
    versionKey: false,
});
const Category = mongoose_1.default.model("Category", exports.CategorySchema);
exports.Category = Category;
