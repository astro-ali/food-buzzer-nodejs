import * as express from "express";
import CategoriesController from "../Controller/menu.controller"
import MenuController from "../Controller/menu.controller";

const route = express.Router();

  
route.get('/menu',CategoriesController.getAll);
 
export default route;