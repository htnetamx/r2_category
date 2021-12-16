import { ICategoryRepository } from "../../../application/contracts";
import { Credential } from "../../../application/domain";
import { CategoryBaseModel } from "../../entities";
import { CategoryMapperMongoDB } from "./mappers";

export class RepositoryMongoDB implements ICategoryRepository {
  private static instance: RepositoryMongoDB = new RepositoryMongoDB();
  private userMapper: CategoryMapperMongoDB;

  constructor() {
    this.userMapper = new CategoryMapperMongoDB();
  }

  async getAll(): Promise<Array<CategoryBaseModel | null> | null> {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }

  async getById(params: any): Promise<CategoryBaseModel | null> {
    try {
      return null;
    } catch (error) {
      return null;
    }
  }
}
