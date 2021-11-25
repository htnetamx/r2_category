import { ProductBaseModel } from "../../../data/entities/product";
export interface IProductRepository {
  getByCategoryId(id: Number): Promise<ProductBaseModel[] | null>;
}
