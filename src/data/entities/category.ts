import { CategoryInputModel } from "../../application/domain";

export interface CategoryBaseModel {
  Id: string;
  Name: string;
  PictureId: string;
  CreatedOnUtc: Date;
  UpdatedOnUtc: Date;
}

export class Category implements CategoryBaseModel {
  public Id: string;
  public Name: string;
  public PictureId: string;

  public CreatedOnUtc: Date;
  public UpdatedOnUtc: Date;

  constructor(data: CategoryInputModel) {
    this.Id = data.Id;
    this.Name = data.Name;
    this.PictureId = data.PictureId;
    this.CreatedOnUtc = data.CreatedOnUtc;
    this.UpdatedOnUtc = data.UpdatedOnUtc;
  }
}
