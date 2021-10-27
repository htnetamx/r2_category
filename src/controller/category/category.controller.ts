import { CategoryInputModel } from "../../application/domain";
import { getByIdUseCase } from "../../application/services/useCases/category/getById";
import { Token } from "../../token";
import { getAllUseCase } from "../../application/services/useCases/category/getAll";
import { CategoryBaseModel } from "data/entities/category";

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
}
