import { ProductService } from "../../entities";
import { ProductBaseModel } from "data/entities";
import { UseCase } from "../../../base";

export class getProductsByCategoryIdUseCase
  implements UseCase<any, ProductBaseModel[] | null>
{
  private _ProductService: ProductService;

  constructor() {
    this._ProductService = new ProductService();
  }

  public async execute(params: any): Promise<ProductBaseModel[] | null> {
    const result = await this._ProductService.getByCategoryId(parseInt(params));
    console.log("useCase: ", result);
    return result;
  }
}
