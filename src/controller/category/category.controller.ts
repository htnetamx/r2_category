import { CategoryInputModel } from "../../application/domain";
import { getByIdUseCase } from "../../application/services/useCases/category/getById";
import { getProductsByCategoryIdUseCase } from "../../application/services/useCases/category/getProducts";
import { Token } from "../../token";
import { getAllUseCase } from "../../application/services/useCases/category/getAll";
import { CategoryBaseModel } from "data/entities/category";
import { ProductBaseModel } from "data/entities/product";

export class CategoryController {
  async getAll(): Promise<Array<CategoryBaseModel | null> | null> {
    const useCase = new getAllUseCase();
    const data = useCase.execute(null);
    return data;
  }

  async getById(id: any): Promise<CategoryBaseModel | null> {
    const useCase = new getByIdUseCase();
    const data = useCase.execute(id);
    console.log(data);
    return data;
  }

  async getProductsByCategoryId(id: any): Promise<ProductBaseModel[] | null> {
    const useCase = new getProductsByCategoryIdUseCase();
    const data = useCase.execute(id);
    console.log(data);
    return data;
  }
}
