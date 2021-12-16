import { CategoryBaseModel } from "../../../data/entities";
export interface ICategoryRepository {
  getAll(): Promise<Array<CategoryBaseModel | null> | null>;
  getById(id: Number): Promise<CategoryBaseModel | null>;
}
