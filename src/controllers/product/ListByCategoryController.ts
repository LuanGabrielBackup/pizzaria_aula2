
import {Request, Response} from 'express'
import { ListByCategoryService } from '../../services/product/ListByCategoryService'

class ListByCategoryController{
  async handle(req: Request, res: Response){

//É preciso informar o tipo de category_id - string    
    const category_id = req.query.category_id as string;

    const listByCategory = new ListByCategoryService();

/* Será retornado na variável products, todos os produtos encontrados de determinada categoria */   
    const products = await listByCategory.execute({
      category_id
    });

    return res.json(products);

  }
}

export { ListByCategoryController }