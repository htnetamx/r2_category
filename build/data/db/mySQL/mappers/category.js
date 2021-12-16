"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMapperMySQL = void 0;
const base_1 = require("../../../../application/base");
class CategoryMapperMySQL extends base_1.Mapper {
    mapFrom(param) {
        var _a, _b, _c;
        var ext = param.MimeType === null
            ? ""
            : param.MimeType.toString().indexOf("png") >= 0
                ? "png"
                : "jpg";
        return {
            id: param.Id.toString(),
            name: param.Name.toString(),
            seoFilename: typeof param.SeoFilename === undefined || param.SeoFilename === null
                ? "https://testinglab.netamx.app/images/thumbs/default-image_450.png"
                : `https://testinglab.netamx.app/images/thumbs/${(_a = param.PictureId) === null || _a === void 0 ? void 0 : _a.toString().padStart(7, "0")}_${(_b = param.SeoFilename) === null || _b === void 0 ? void 0 : _b.toString()}_450.${ext}`,
            mimeType: (_c = param.MimeType) === null || _c === void 0 ? void 0 : _c.toString(),
            createdOnUtc: param.CreatedOnUtc,
            updatedOnUtc: param.UpdatedOnUtc,
        };
    }
    mapTo(param) {
        var _a, _b;
        return {
            Id: param.id.toString(),
            PictureId: param.id.toString(),
            Name: param.name.toString(),
            SeoFilename: (_a = param.seoFilename) === null || _a === void 0 ? void 0 : _a.toString(),
            MimeType: (_b = param.seoFilename) === null || _b === void 0 ? void 0 : _b.toString().split(".")[1],
            CreatedOnUtc: param.createdOnUtc,
            UpdatedOnUtc: param.updatedOnUtc,
        };
    }
}
exports.CategoryMapperMySQL = CategoryMapperMySQL;
