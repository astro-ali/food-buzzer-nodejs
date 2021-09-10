import { Request, Response } from "express";
 
import { Customers } from "../src/entity/Customers";
 
export default class CoustermsOrderController
{
/**
   *
   * @param req
   * @param res
   * @returns
   */

static async getOrder(req: Request, res: Response): Promise<object> {

  const customers = await Customers.find({relations:['orderItem']});

  return res.json({status:true ,customers});
}
}