import { Request, Response } from "express";
import { print } from "util";
 
import { Customers } from "../src/entity/Customers";
import { OrderItem } from "../src/entity/Order";
import { errRes, okRes } from "../tools/checkResponseState";
const accountSid='AC9ef3ffea92012cd829cc20430a434bd2';
const authToken='ec5b9d365be17cbd3829d5b28220d800';
const client= require('twilio')(accountSid,authToken);
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


static async deleteCousterm(req: Request, res: Response): Promise<object> {

 
    let id = req.params.id;
 
    let data;
    try {
      await Customers.delete({ CustomerId:parseInt(id)});

    } catch (error) {
 
      return errRes(res, error);
    }
    return okRes(res, { data });
  }
  static async sendSMSCousterm(req: Request, res: Response): Promise<object> {
 
    var phone=req.params.phone;
    let data;
    
  
    try {
      data= await Customers.findOne({where: {phone:phone}});

      console.log(data);

      console.log (data.phone);

      // client.messages
      // .create(
      //   {
      //     body: "Your order is done, Come to the casher",
      //     to:'+9647734360183',
      //     from:'+16176489503',
      //   }
      // ).then(() =>
      // data.notified=true
      // ).done();

      await data.save();
    } catch (error) {
 
      return errRes(res, error);
    }
     

   return okRes(res, { data });
  }
}


 