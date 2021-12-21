import { Express, Request, Response, NextFunction } from "express";
import { CategoryController } from "../../../controller/category";

export class getProductsByCategoryIdRoute {
  private server: Express;

  constructor(server: Express) {
    this.server = server;
  }

  public getProductsByCategoryId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await new CategoryController().getProductsByCategoryId(
        req.params.id
      );
      console.log("Result");
      console.log(result);
      res.status(200).send(result);
    } catch (e) {}
  };

  public configureEndPoints(baseUrl: string) {
    /**
     * @swagger
     * components:
     *  schemas:
     *    ProductBaseModel:
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
     *        Sku:
     *          type: string
     *          description: The identifier of the product
     *        Price:
     *          type: number
     *          description: Current price of product
     *        OldPrice:
     *          type: number
     *          description: Old price of product
     *        CostPrice:
     *          type: number
     *          description: Cost price of product
     *        OrderMinimumQuantity:
     *          type: number
     *          description: Minimum product quantity
     *        OrderMaximumQuantity:
     *          type: number
     *          description: Maximum product quantity
     *      example:
     *         Id: 1804
     *         Name: Shampoo Head & Shoulders alivio refrescante 375 ml
     *         SeoFilename: https://testinglab.netamx.app/images/thumbs/0001804_undefined_415.jpeg,
     *         CreatedOnUtc: 2021-11-12T20:56:13.000Z
     *         UpdatedOnUtc: 2021-12-01T21:31:38.000Z
     *         Sku: 10076
     *         Price: 45.9000
     *         OldPrice: 55.0000
     *         CostPrice: 0
     *         OrderMinimumQuantity: 1
     *         OrderMaximumQuantity: 30
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
     *  description: Product Category endpoint
     */
    /**
     * @swagger
     * /category/{id}/product:
     *  get:
     *    summary: Get a products for specific category
     *    tags: [Category]
     *    parameters:
     *      - $ref: '#/components/parameters/categoryId'
     *    responses:
     *      200:
     *        description: The list of categories
     *        content:
     *          application/json:
     *            schema:
     *              type: array
     *              items:
     *                $ref: '#/components/schemas/ProductBaseModel'
     *      404:
     *        description: The category was not found
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/CategoryNotFound'
     */
    this.server.get(
      `${baseUrl}category/:id/product`,
      this.getProductsByCategoryId
    );
  }
}
