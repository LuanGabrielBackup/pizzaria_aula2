"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { PrismaClient } from '@prisma/client';
const client_1 = require("../generated/prisma/client");
const prismaClient = new client_1.PrismaClient();
exports.default = prismaClient;
