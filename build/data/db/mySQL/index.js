"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepositoryMySQL = exports.RepositoryMySQL = void 0;
const mappers_1 = require("./mappers");
const product_1 = require("./mappers/product");
const connection_1 = require("../../../connections/connection");
class RepositoryMySQL {
    constructor() {
        this.userMapper = new mappers_1.CategoryMapperMySQL();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (connection_1.Connection.mySQL2Pool == null)
                    return null;
                let [results, fields] = yield connection_1.Connection.mySQL2Pool.query("select c.Id,p.Id as PictureId,c.Name,p.SeoFilename,p.MimeType,c.CreatedOnUtc,c.UpdatedOnUtc from Category c left join Picture p on c.PictureId = p.Id;");
                console.log(results);
                let data = Object.values(JSON.parse(JSON.stringify(results)));
                let result = data.map((r) => {
                    return new mappers_1.CategoryMapperMySQL().mapFrom(r);
                });
                return result;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (connection_1.Connection.mySQL2Pool == null)
                    return null;
                let [results, fields] = yield connection_1.Connection.mySQL2Pool.query({
                    sql: "select c.Id,p.Id as PictureId,c.Name,p.SeoFilename,p.MimeType,c.CreatedOnUtc,c.UpdatedOnUtc from Category c left join Picture p on c.PictureId = p.Id where c.id=" +
                        id +
                        ";",
                });
                let data = Object.values(JSON.parse(JSON.stringify(results)));
                let entity = new mappers_1.CategoryMapperMySQL().mapFrom(data[0]);
                console.log(entity);
                return entity;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.RepositoryMySQL = RepositoryMySQL;
class ProductRepositoryMySQL {
    constructor() {
        this.userMapper = new product_1.ProductMapperMySQL();
    }
    getByCategoryId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (connection_1.Connection.mySQL2Pool == null)
                    return null;
                let [results, fields] = yield connection_1.Connection.mySQL2Pool.query({
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
                let result = data.map((r) => {
                    return new product_1.ProductMapperMySQL().mapFrom(r);
                });
                console.log(result);
                return result;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.ProductRepositoryMySQL = ProductRepositoryMySQL;
