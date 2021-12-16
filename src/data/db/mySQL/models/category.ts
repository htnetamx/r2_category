import { CategoryBaseModel } from "data/entities";
export interface CategoryMySQL {
  Name: String;
  SeoFilename: String;
  MimeType: String;
  Id: String;
  PictureId: String;
  CreatedOnUtc: Date;
  UpdatedOnUtc: Date;
}

export class User {
  public static save() {}
  public static findOne() {}
}
