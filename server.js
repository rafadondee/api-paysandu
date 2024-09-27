
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/paysandu', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createPaysandu(body);
    return reply.status(201).send();
})

// READ
server.get('/paysandu', async () => {
    const paysandu = await databasePostgres.listPaysandu();
    return paysandu;
});

// UPDATE
server.put('/paysandu/:id', async (request, reply) => {
    const paysanduID = request.params.id;
    const body = request.body;
    await databasePostgres.updatePaysandu(paysanduID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/paysandu/:id', async (request, reply) => {
    const paysanduID = request.params.id;
    await databasePostgres.deletePaysandu(paysanduID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
