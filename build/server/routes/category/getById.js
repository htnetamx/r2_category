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
exports.getByIdRoute = void 0;
const category_1 = require("../../../controller/category");
class getByIdRoute {
    constructor(server) {
        this.getById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield new category_1.CategoryController().getById(req.params.id);
                console.log("Result");
                console.log(result);
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
         *          description: The product creation date in UTC format.
         *        UpdatedOnUtc:
         *          type: Date
         *          description: The product update date in UTC format
         *      example:
         *        Id: 1
         *        Name: Limpieza del Hogar
         *        SeoFilename: 0
         *        CreatedOnUtc: 2021-07-22T23:10:59.000Z
         *        UpdatedOnUtc: 2021-10-19T19:18:59.000Z
         *    CategoryNotFound:
         *      type: object
         *      properties:
         *        msg:
         *          type: string
         *          description: A message for the not found category
         *      example:
         *        msg: Category was not found
         *
         *  parameters:
         *    categoryId:
         *      in: path
         *      name: id
         *      required: true
         *      schema:
         *        type: string
         *      description: The unique identifier of the category
         */
        /**
         * @swagger
         * tags:
         *  name: Category
         *  description: Category endpoint
         */
        /**
         * @swagger
         * /category/{id}:
         *  get:
         *    summary: Get a category by Id
         *    tags: [Category]
         *    parameters:
         *      - $ref: '#/components/parameters/categoryId'
         *    responses:
         *      200:
         *        description: The found Category
         *        content:
         *          application/json:
         *            schema:
         *            $ref: '#/components/schemas/CategoryBaseModel'
         *      404:
         *        description: The category was not found
         *        content:
         *          application/json:
         *            schema:
         *              $ref: '#/components/schemas/CategoryNotFound'
         */
        this.server.get(`${baseUrl}category/:id`, this.getById);
    }
}
exports.getByIdRoute = getByIdRoute;
