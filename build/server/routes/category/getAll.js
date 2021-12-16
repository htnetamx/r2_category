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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRoute = void 0;
const category_1 = require("../../../controller/category");
class getAllRoute {
    constructor(server) {
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield new category_1.CategoryController().getAll();
                res.status(200).send(result);
            }
            catch (e) { }
        });
        this.server = server;
    }
    configureEndPoints(baseUrl) {
        /**
         * @swagger
         * components:
         *  schemas:
         *    CategoryBaseModel:
         *      type: object
         *      properties:
         *        Id:
         *          type: string
         *          description: The unique identifier of the category.
         *        Name:
         *          type: string
         *          description: Category name.
         *        SeoFilename:
         *          type: string
         *          description: The identifier of the picture.
         *        CreatedOnUtc:
         *          type: Date
         *          description: The category creation date in UTC format.
         *        UpdatedOnUtc:
         *          type: Date
         *          description: The category update date in UTC format
         *      example:
         *        Id: 2
         *        Name: Cuidado Personal
         *        SeoFilename: 0
         *        CreatedOnUtc: 2021-07-22T23:05:41.000Z
         *        UpdatedOnUtc: 2021-07-22T23:05:17.000Z
         */
        /**
         * @swagger
         * tags:
         *  name: Category
         *  description: Category endpoint
         */
        /**
         * @swagger
         * /category/:
         *  get:
         *    summary: Returns a list of categories
         *    tags: [Category]
         *    responses:
         *      200:
         *        description: The list of categories
         *        content:
         *          application/json:
         *            schema:
         *              type: array
         *              items:
         *                $ref: '#/components/schemas/CategoryBaseModel'
         *      500:
         *        description: Some server error
         */
        this.server.get(`${baseUrl}category/`, this.getAll);
    }
}
exports.getAllRoute = getAllRoute;
