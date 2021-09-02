import express, { NextFunction, Request, Response } from 'express';
import { IServer } from '../lib/interfaces';
import IndexRouter from './index.router';

export default class RoutesInit {

    static init(server: IServer): void {

        // Health check
        server.app.get('/healthCheck', async (req: Request, res: Response, next: NextFunction) => {
            const healthcheck = {
                dbConnect: server.isDbConnected,
                uptime: process.uptime(),
                message: 'OK',
                time: new Date().toLocaleString()
            };
            try {
                res.send(healthcheck);
            } catch (e: any) {
                healthcheck.message = e;
                res.status(503).send(healthcheck);
            }
        });

        // Main Router
        server.app.use('/api/v1', new IndexRouter().router);

        server.app.use('*', (req,res)=>{
            res.sendStatus(404)
        })
    }
}
