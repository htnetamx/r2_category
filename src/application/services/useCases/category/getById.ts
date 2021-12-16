import { CategoryBaseModel } from "data/entities";
import { UseCase } from "../../../base";
import { ITokenGenerator } from "../../../contracts/token";
import { Credential } from "../../../domain";
import { CategoryService } from "../../entities/category";

export class getByIdUseCase implements UseCase<any, CategoryBaseModel | null> {
  private _CategoryService: CategoryService;

  constructor() {
    this._CategoryService = new CategoryService();
  }

  public async execute(params: any): Promise<CategoryBaseModel | null> {
    const result = await this._CategoryService.getById(parseInt(params));
    console.log("useCase: ", result);
    return result;
  }
}
