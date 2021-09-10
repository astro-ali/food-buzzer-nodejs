import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import {Menu} from "./entity/Menu";
import * as cors from "cors";
import webv1 from "../Routes/v1";
import notFound from "../Middlewares/notFound.middleware";
import { Categories } from "./entity/Categories";

const app = express();
const port =process.env.PORT ||5000;
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const categories = new Categories();
    const menu = new Menu();
    
 

    app.use(express.json());
    app.use(cors());
    app.use("/v1", webv1);
     app.use(notFound);
    console.log("Saved a new user with id: " + categories.categoryId);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(Categories);
    console.log("Loaded users: ", Categories);

    console.log("Here you can setup and run express/koa/any other framework.");
    app.listen(port, () =>
    console.log(`Your server is running on port ${port}`)
  );

}).catch(error => console.log(error));
