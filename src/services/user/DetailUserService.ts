import prismaClient from "../../prisma";

class DetailUserService{
  async execute(user_id: string) {
    
  /* Busca o primeiro item no banco de dados com o usuário com o respectivo id
  Devolvendo todas as informações encontradas na variável user */

const user = await prismaClient.user.findFirst({
  where:{
    id: user_id
  }
})

return user;
  }
}

export { DetailUserService }