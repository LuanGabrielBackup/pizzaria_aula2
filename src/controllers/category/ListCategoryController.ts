
import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
async handle(req: Request, res: Response) {

const listCategoryService = new ListCategoryService();

//Retorna o array dentro da variável category
const category = await listCategoryService.execute();

//Retorna os valores encontrados em formato .json
return res.json(category);
    }
}
export { ListCategoryController }