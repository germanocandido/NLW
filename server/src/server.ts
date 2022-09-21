import express from 'express';
import {PrismaClient} from '@prisma/client';

const app = express();
const prisma = new PrismaClient()

app.get('/games', async(req, res) => {
    const games = await prisma.game.findMany({
        include:{
          _count:{
            select: {
                Ads: true,
            }
          }
        }
    })


        return res.json(games)
    });

app.post('/ads', (req, res) => {
        return res.status(201).json([])
    });


app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
            
        },
        where:{
            gameId,
        },
        orderBy: {
            createdAt: 'desc',
        }
    })
    



    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(',')
        }
    }));
})

app.get('/games/:id/discord', (request, response) => {
    return response.json([]);
})

app.listen(3333)