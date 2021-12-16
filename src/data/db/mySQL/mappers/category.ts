import { Mapper } from "../../../../application/base";
import { CategoryBaseModel } from "../../../entities";
import { CategoryMySQL } from "../models";

export class CategoryMapperMySQL extends Mapper<
  CategoryMySQL,
  CategoryBaseModel
> {
  mapFrom(param: CategoryMySQL): CategoryBaseModel {
    var ext =
      param.MimeType === null
        ? ""
        : param.MimeType.toString().indexOf("png") >= 0
        ? "png"
        : "jpg";
    return {
      id: param.Id.toString(),
      name: param.Name.toString(),
      seoFilename:
        typeof param.SeoFilename === undefined || param.SeoFilename === null
          ? "https://testinglab.netamx.app/images/thumbs/default-image_450.png"
          : `https://testinglab.netamx.app/images/thumbs/${param.PictureId?.toString().padStart(
              7,
              "0"
            )}_${param.SeoFilename?.toString()}_450.${ext}`,
      mimeType: param.MimeType?.toString(),
      createdOnUtc: param.CreatedOnUtc,
      updatedOnUtc: param.UpdatedOnUtc,
    };
  }
  mapTo(param: CategoryBaseModel): CategoryMySQL {
    return {
      Id: param.id.toString(),
      PictureId: param.id.toString(),
      Name: param.name.toString(),
      SeoFilename: param.seoFilename?.toString(),
      MimeType: param.seoFilename?.toString().split(".")[1],
      CreatedOnUtc: param.createdOnUtc,
      UpdatedOnUtc: param.updatedOnUtc,
    };
  }
}
