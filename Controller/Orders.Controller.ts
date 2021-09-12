import { Request, Response } from "express";
 
import { Customers } from "../src/entity/Customers";
import { OrderItem } from "../src/entity/Order";
import { errRes, okRes } from "../tools/checkResponseState";

export default class OrderController
{
/**
   *
   * @param req
   * @param res
   * @returns
   */

static async getOrders(req: Request, res: Response): Promise<object> {

  const customers = await Customers.find({relations:['orderItem']});

  return res.json({status:true ,customers});
}

static async addOrder(req: Request, res: Response): Promise<object> {

  var body = req.body;

  console.log(body);

  let data;
  try{
    data = await OrderItem.create({
      ...body,CustomerId: req.body.Customer});

 

    await data.save();
    console.log(data);
  }catch(err)
  { 
    
    return errRes(res, "Error input");

  }

  return okRes(res, { data });  
}
}

 