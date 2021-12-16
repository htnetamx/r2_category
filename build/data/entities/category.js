"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor(data) {
        this.id = data.Id;
        this.name = data.Name;
        this.seoFilename = data.SeoFilename;
        this.mimeType = data.MimeType;
        this.createdOnUtc = data.CreatedOnUtc;
        this.updatedOnUtc = data.UpdatedOnUtc;
    }
}
exports.Category = Category;
