import * as express from "express";
import CoustermsOrderController from "../Controller/CustomersOrders.controller";
import CategoriesController from "../Controller/menu.controller"
 
const route = express.Router();


  
route.get('/menu',CategoriesController.getAll);
route.get('/orders',CoustermsOrderController.getAll);

export default route;
