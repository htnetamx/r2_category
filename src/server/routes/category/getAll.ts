import { Express, Request, Response, NextFunction } from "express";
import { CategoryController } from "../../../controller/category";

export class getAllRoute {
  private server: Express;

  constructor(server: Express) {
    this.server = server;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await new CategoryController().getAll();
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
     *          description: The category creation date in UTC format.
     *        UpdatedOnUtc:
     *          type: Date
     *          description: The category update date in UTC format
     *      example:
     *        Id: 2
     *        Name: Cuidado Personal
     *        PictureId: 0
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
