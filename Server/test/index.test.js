const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    xit("GET /rickandmorty/character/:id", async () => {
        const response = await request(server).get("/");
        expect(response.statusCode).toEqual(200);
    });
});

describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
        await agent.get('/rickandmorty/character/1').expect(200);
    });
    // it("Si hay un error responde con status: 500", async () => {
    //     await agent.get('/rickandmorty/character/1').expect(200);
    // });
});
