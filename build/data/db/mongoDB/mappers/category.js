"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMapperMongoDB = void 0;
const base_1 = require("../../../../application/base");
const models_1 = require("../models");
class CategoryMapperMongoDB extends base_1.Mapper {
    mapFrom(param) {
        return {
            id: "",
            name: "",
            seoFilename: "",
            mimeType: "",
            createdOnUtc: new Date(),
            updatedOnUtc: new Date(),
        };
    }
    mapTo(param) {
        return new models_1.Category({});
    }
}
exports.CategoryMapperMongoDB = CategoryMapperMongoDB;
