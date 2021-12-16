"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const getProducts_1 = require("./category/getProducts");
const getById_1 = require("./category/getById");
const getAll_1 = require("./category/getAll");
const welcome_1 = require("./index/welcome");
class Routes {
    constructor(server) {
        this.baseUrl = "/api/v1/";
        this.server = server;
        this.getByIdRoute = new getById_1.getByIdRoute(server);
        this.getAllRoute = new getAll_1.getAllRoute(server);
        this.indexRoute = new welcome_1.IndexRoute(server);
        this.getProductsRoute = new getProducts_1.getProductsByCategoryIdRoute(server);
        this.configureApiEndPoints(this.baseUrl);
    }
    configureApiEndPoints(baseUrl) {
        this.indexRoute.configureEndPoints(baseUrl);
        this.getByIdRoute.configureEndPoints(baseUrl);
        this.getAllRoute.configureEndPoints(baseUrl);
        this.getProductsRoute.configureEndPoints(baseUrl);
    }
}
exports.Routes = Routes;
