import { ICategoryRepository } from "../../../application/contracts";
import { IProductRepository } from "../../../application/contracts/product";
import { Credential } from "../../../application/domain/credential";
import { CategoryBaseModel } from "data/entities";
import { ProductBaseModel } from "data/entities/product";
import { CategoryMapperMySQL } from "./mappers";
import { ProductMapperMySQL } from "./mappers/product";
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
        "select c.Id,p.Id as PictureId,c.Name,p.SeoFilename,p.MimeType,c.CreatedOnUtc,c.UpdatedOnUtc from Category c left join Picture p on c.PictureId = p.Id;"
      );
      console.log(results);
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
        sql:
          "select c.Id,p.Id as PictureId,c.Name,p.SeoFilename,p.MimeType,c.CreatedOnUtc,c.UpdatedOnUtc from Category c left join Picture p on c.PictureId = p.Id where c.id=" +
          id +
          ";",
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

export class ProductRepositoryMySQL implements IProductRepository {
  private userMapper: ProductMapperMySQL;
  constructor() {
    this.userMapper = new ProductMapperMySQL();
  }

  async getByCategoryId(id: any): Promise<ProductBaseModel[] | null> {
    try {
      if (Connection.mySQL2Pool == null) return null;
      let [results, fields] = await Connection.mySQL2Pool.query({
        sql: `select po.Id,po.Name,po.Sku,po.CreatedOnUtc,po.UpdatedOnUtc,pi.SeoFileName,pi.MimeType,
                 po.Price, po.OldPrice,0 as CostPrice,po.OrderMinimumQuantity,po.OrderMaximumQuantity
          from 
            Product po 
              inner join Product_Category_Mapping pc on po.Id = pc.ProductId
              left join Product_Picture_Mapping ppm on po.Id = ppm.ProductId 
              left join Picture pi on ppm.PictureId = pi.Id 
              where pc.CategoryId=${id};`,
      });
      console.log(results);
      let data = Object.values(JSON.parse(JSON.stringify(results)));
      let result = data.map<ProductBaseModel>((r) => {
        return new ProductMapperMySQL().mapFrom(r as any);
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
