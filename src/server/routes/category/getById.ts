import { Express, Request, Response, NextFunction } from "express";
import { CategoryController } from "../../../controller/category";

export class getByIdRoute {
  private server: Express;

  constructor(server: Express) {
    this.server = server;
  }

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await new CategoryController().getById(req.params.id);
      console.log("Result");
      console.log(result);
      res.status(200).send(result);
    } catch (e) { }
  };

  public configureEndPoints(baseUrl: string) {
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
      *        PictureId:
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
      *        PictureId: 0
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
