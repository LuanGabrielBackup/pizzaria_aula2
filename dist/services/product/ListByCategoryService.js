"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListByCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListByCategoryService {
    //Listar produtos com o id da categoria específico    
    execute({ category_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            /* Busca no banco de dados - findMany = filtrar dados com uma condicional */
            const findByCategory = yield prisma_1.default.product.findMany({
                where: {
                    /* Onde category_id (no banco de dados) é igual à category_id (parâmetro utilizado
                    na função) */
                    category_id: category_id
                }
            });
            return findByCategory;
        });
    }
}
exports.ListByCategoryService = ListByCategoryService;
