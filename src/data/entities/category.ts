import { CategoryInputModel } from "../../application/domain";

export interface CategoryBaseModel {
  id: string;
  name: string;
  seoFilename: string;
  mimeType: string;
  createdOnUtc: Date;
  updatedOnUtc: Date;
}

export class Category implements CategoryBaseModel {
  public id: string;
  public name: string;
  public seoFilename: string;
  public mimeType: string;

  public createdOnUtc: Date;
  public updatedOnUtc: Date;

  constructor(data: CategoryInputModel) {
    this.id = data.Id;
    this.name = data.Name;
    this.seoFilename = data.SeoFilename;
    this.mimeType = data.MimeType;
    this.createdOnUtc = data.CreatedOnUtc;
    this.updatedOnUtc = data.UpdatedOnUtc;
  }
}
