import { ProductBaseModel } from "../../../data/entities/product";
import { IProductRepository } from "../../contracts/product";
import { ProductRepositoryMySQL } from "../../../data/db/mySQL";
import {
  ServiceResponse,
  IServiceResponse,
} from "../../base";

export interface IProductService {
  mySQL: IProductRepository;
}

export class ProductService {
  public repos: IProductService = {
    mySQL: new ProductRepositoryMySQL(),
  };

  async getByCategoryId(id: Number): Promise<ProductBaseModel[] | null> {
    try {
      var promises: Array<Promise<ProductBaseModel[] | null>> = [];
      const entries = Object.entries(this.repos);

      entries.forEach((entry) =>
        promises.push((<IProductRepository>entry[1]).getByCategoryId(id))
      );
      let result_promises = await Promise.all(promises);

      if (result_promises.length > 0) {
        result_promises = result_promises.filter((i) => i !== null);
        var succeses: Array<IServiceResponse<ProductBaseModel[] | null>> = [];
        var errores: Array<IServiceResponse<null>> = [];
        result_promises.forEach((result, index) =>
          result == null
            ? errores.push(
                new ServiceResponse(result, entries[index][0], index)
              )
            : succeses.push(
                new ServiceResponse(result, entries[index][0], index)
              )
        );
        console.log("r_promoesis: ", result_promises);
        return errores.length > 0 ? null : result_promises[0];
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
}
