"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.game.create({
        data: {
            date: '2022-11-20T12:00:00.817Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'BR',
        }
    });
    await prisma.game.create({
        data: {
            date: '2022-11-23T12:00:00.817Z',
            firstTeamCountryCode: 'AR',
            secondTeamCountryCode: 'BR',
        }
    });
}
main();
