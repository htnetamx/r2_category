import { CategoryBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ITokenGenerator } from "../../../contracts/token";
import { Credential } from "../../../domain";
import { ProductService } from "../../entities/category";

export class getAllUseCase
  implements UseCase<any, Array<CategoryBaseModel | null> | null>
{
  private _ProductService: ProductService;

  constructor() {
    this._ProductService = new ProductService();
  }

  public async execute(
    params: any
  ): Promise<Array<CategoryBaseModel | null> | null> {
    const result = await this._ProductService.getAll();
    return result;
  }
}
