"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const pool_1 = require("./routes/pool");
const game_1 = require("./routes/game");
const auth_1 = require("./routes/auth");
const guess_1 = require("./routes/guess");
const user_1 = require("./routes/user");
const main_1 = require("./routes/main");
async function bootstrap() {
    const fastify = (0, fastify_1.default)({
        logger: true,
    });
    await fastify.register(cors_1.default, {
        origin: true,
    });
    await fastify.register(jwt_1.default, {
        secret: 'nlwmykenxoinaka777',
    });
    await fastify.register(auth_1.authRoutes);
    await fastify.register(game_1.gameRoutes);
    await fastify.register(guess_1.guessRoutes);
    await fastify.register(pool_1.poolRoutes);
    await fastify.register(user_1.userRoutes);
    await fastify.register(main_1.mainRoute);
    await fastify.listen({ port: 3333, host: '0.0.0.0' });
}
bootstrap();
