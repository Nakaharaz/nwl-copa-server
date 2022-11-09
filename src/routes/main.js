"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoute = void 0;
async function mainRoute(fastify) {
    fastify.get('/', () => {
        return "Olá! Bem vindo ao meu projeto nlw copa!";
    });
}
exports.mainRoute = mainRoute;
