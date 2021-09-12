import { Request, Response } from "express";
 
import { Customers } from "../src/entity/Customers";
import { OrderItem } from "../src/entity/Order";
import { errRes, okRes } from "../tools/checkResponseState";

export default class CoustermsController
{
/**
   *
   * @param req
   * @param res
   * @returns
   */

static async getCousterms(req: Request, res: Response): Promise<object> {

  const customers = await Customers.find();

  return res.json({status:true ,customers});
}

static async addCousterm(req: Request, res: Response): Promise<object> {

  var body = req.body;

  console.log(body);

  let order;
  let custeomer;
  try{
    custeomer = await Customers.create({
      ...body,});
      // order = await OrderItem.create({
      //   ...body,});



    await custeomer.save();
    console.log(custeomer)
  }catch(err)
  { 
    
    return errRes(res, "Error input");

  }

  return okRes(res, [{custeomer},{ order }]);  
}
}

 