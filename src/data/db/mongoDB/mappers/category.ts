import { Mapper } from "../../../../application/base";
import { CategoryBaseModel } from "../../../entities";
import { Category, CategoryMongoDB } from "../models";

export class CategoryMapperMongoDB extends Mapper<
  CategoryMongoDB,
  CategoryBaseModel
> {
  mapFrom(param: CategoryMongoDB): CategoryBaseModel {
    return {
      Id: "",
      Name: "",
      PictureId: "",
      CreatedOnUtc: new Date(),
      UpdatedOnUtc: new Date(),
    };
  }
  mapTo(param: CategoryBaseModel): CategoryMongoDB {
    return new Category({});
  }
}
