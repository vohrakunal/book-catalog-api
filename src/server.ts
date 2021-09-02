import express from 'express';
import { DB } from './config/DB';
import Middleware from './config/middleware';
import ErrorHandler from './helper/error.handler';
import RoutesInit from './router/prefix.router';

export class Server {
    public app: express.Application;
    isDbConnected: boolean;
    constructor() {
        this.app = express();
        this.isDbConnected = false;

        // DB connection
        DB.connect(this);
        // Initializing app middlewares
        Middleware.init(this);

        // Intializing Routes
        RoutesInit.init(this);

        // Error handling
        ErrorHandler.init(this);

    }
}
