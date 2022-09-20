import express from 'express';

const app = express();

app.get('/games', (req, res) => {
        return res.json([])
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