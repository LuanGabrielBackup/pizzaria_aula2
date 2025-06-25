
//import { prisma } from "@prisma/client";
import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

//Quando utilizar o método execute, deve-se receber a propriedade name
interface CategoryRequest {
name: string;
}
class CreateCategoryService {
    async execute({ name }: CategoryRequest) {
        if (name === '') {
        throw new Error("Nome inválido!!!");
        }

//Se o nome categoria não estiver vazio, cadastrar no banco de dados

const category = await prismaClient.category.create({
data: {
name: name,
},

//Campos que aparecerão ao cadastrar

select: {
id: true,name: true,
        }
    })
 }
}
export { CreateCategoryService }