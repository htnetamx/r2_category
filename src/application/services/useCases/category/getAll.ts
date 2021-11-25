import { CategoryBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ITokenGenerator } from "../../../contracts/token";
import { Credential } from "../../../domain";
import { CategoryService } from "../../entities/category";

export class getAllUseCase
  implements UseCase<any, Array<CategoryBaseModel | null> | null>
{
  private _CategoryService: CategoryService;

  constructor() {
    this._CategoryService = new CategoryService();
  }

  public async execute(
    params: any
  ): Promise<Array<CategoryBaseModel | null> | null> {
    const result = await this._CategoryService.getAll();
    return result;
  }
}
