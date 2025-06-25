import prismaClient from "../../prisma";

//Tipagem - Pega do ProductRequest o id da categoria
interface ProductRequest{
  category_id: string;
}

class ListByCategoryService{
//Listar produtos com o id da categoria específico    
  async execute({ category_id }: ProductRequest){

/* Busca no banco de dados - findMany = filtrar dados com uma condicional */
    const findByCategory = await prismaClient.product.findMany({
      where:{
/* Onde category_id (no banco de dados) é igual à category_id (parâmetro utilizado
na função) */        
        category_id: category_id
      }
    })

    return findByCategory;

  }
}

export { ListByCategoryService }
