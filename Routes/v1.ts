import * as express from "express";
import CoustermsController from "../Controller/Coustomer.Controller";
// import CoustermsOrderController from "../Controller/Orders.Controller";
import CategoriesController from "../Controller/menu.controller"
import OrderController from "../Controller/Order.Controller";
 
const route = express.Router();

route.get('/menu',CategoriesController.getAll);

route.get('/orders',OrderController.getOrders);
route.post('/customers',CoustermsController.addCousterm);
route.delete('/customers/:id',CoustermsController.deleteCousterm);
route.get('/customers/:phone',CoustermsController.sendSMSCousterm);

export default route;
