import { Request, Response } from "express";
import { Raw } from "typeorm";
import { print } from "util";
import { Categories } from "../src/entity/Categories";
import { Customers } from "../src/entity/Customers";
import { Menu } from "../src/entity/Menu";
import { errRes, okRes } from "../tools/checkResponseState";
export default class CoustermsOrderController
{
/**
   *
   * @param req
   * @param res
   * @returns
   */

static async getAll(req: Request, res: Response): Promise<object> {

  const customers = await Customers.find({relations:['orderItem']});

  return res.json({status:true ,customers});
}
}