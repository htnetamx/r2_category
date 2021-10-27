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
    } catch (e) {}
  };

  public configureEndPoints(baseUrl: string) {
    this.server.get(`${baseUrl}category/`, this.getAll);
  }
}
