import { Request, Response } from "express";
import { Categories } from "../src/entity/Categories";
export default class MenuController
{
/**
   *
   * @param req
   * @param res
   * @returns
   */

static async getAll(req: Request, res: Response): Promise<object> {

  const categories = await Categories.find({relations:['item']});

  return res.json({status:true ,categories});
}
}