import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import { router } from './routes';
import fileUpload from "express-fileupload";  

const app = express();

app.use(express.json());
app.use(cors());

app.use(fileUpload({
  //createParentPath: true,
  /* Cria o diretório pai se não existir */
  limits: { fileSize: 100 * 1024 * 1024 } 
  /* Limite de tamanho do arquivo (100MB) */
  //abortOnLimit: true
  /* Interrompe o upload se o limite for atingido */ 
}))

app.use(router);

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error){
    //Se for uma instancia do tipo error
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })

})

app.listen(process.env.PORT, () => console.log('Servidor online!!!!'))