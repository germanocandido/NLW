import express from 'express';
import {PrismaClient} from '@prisma/client';

const app = express();
const prisma = new PrismaClient()

app.get('/games', async(req, res) => {
    const games = await prisma.game.findMany()


        return res.json(games)
    });

app.post('/ads', (req, res) => {
        return res.status(201).json([])
    });


app.get('/games/:id/ads', (request, response) => {
    return response.json([
        {id: 1, name: 'Anuncio 1'},
        {id: 2, name: 'Anuncio 2'},
        {id: 3, name: 'Anuncio 3'},
        {name: 'sfdsdfsd'}
    ]);
})

app.get('/games/:id/discord', (request, response) => {
    return response.json([]);
})

app.listen(3333)