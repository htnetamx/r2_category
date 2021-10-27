import { Mapper } from "../../../../application/base";
import { CategoryBaseModel } from "../../../entities";
import { CategoryMySQL } from "../models";

export class CategoryMapperMySQL extends Mapper<
  CategoryMySQL,
  CategoryBaseModel
> {
  mapFrom(param: CategoryMySQL): CategoryBaseModel {
    return {
      Id: param.Id.toString(),
      Name: param.Name.toString(),
      PictureId: param.PictureId.toString(),
      CreatedOnUtc: param.CreatedOnUtc,
      UpdatedOnUtc: param.UpdatedOnUtc,
    };
  }
  mapTo(param: CategoryBaseModel): CategoryMySQL {
    return {
      Id: param.Id.toString(),
      Name: param.Name.toString(),
      PictureId: param.PictureId.toString(),
      CreatedOnUtc: param.CreatedOnUtc,
      UpdatedOnUtc: param.UpdatedOnUtc,
    };
  }
}
