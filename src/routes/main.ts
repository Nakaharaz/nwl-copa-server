import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";

export async function mainRoute(fastify: FastifyInstance) {
    fastify.get('/', () => {
        return "Olá! Bem vindo ao meu projeto nlw copa!"
    })
}