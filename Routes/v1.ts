import * as express from "express";
import CoustermsController from "../Controller/Coustomer.Controller";
import CoustermsOrderController from "../Controller/Orders.Controller";
import CategoriesController from "../Controller/menu.controller"
 
const route = express.Router();

route.get('/menu',CategoriesController.getAll);

route.get('/orders',CoustermsOrderController.getOrders);
route.post('/orders',CoustermsOrderController.addOrder);

route.post('/customers',CoustermsController.addCousterm);

export default route;
