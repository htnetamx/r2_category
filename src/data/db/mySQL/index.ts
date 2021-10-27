import { ICategoryRepository } from "../../../application/contracts";
import { Credential } from "../../../application/domain/credential";
import { CategoryBaseModel } from "data/entities";
import { CategoryMapperMySQL } from "./mappers";
import { Connection } from "../../../connections/connection";

export class RepositoryMySQL implements ICategoryRepository {
  private userMapper: CategoryMapperMySQL;
  constructor() {
    this.userMapper = new CategoryMapperMySQL();
  }

  async getAll(): Promise<Array<CategoryBaseModel | null> | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query(
        "SELECT * from netamx.Category;"
      );
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      let result = data.map<CategoryBaseModel>((r) => {
        return new CategoryMapperMySQL().mapFrom(r as any);
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getById(id: any): Promise<CategoryBaseModel | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql: "SELECT * from netamx.Category where id=" + id + ";",
      });
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      let entity = new CategoryMapperMySQL().mapFrom(data[0] as any);
      console.log(entity);
      return entity;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
