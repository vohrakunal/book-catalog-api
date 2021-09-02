import mongoose from 'mongoose';
import { IServer } from '../lib/interfaces';
import dotenv from 'dotenv';
import { CONFIG } from './environment';
dotenv.config();

interface connectOptions {
    autoReconnect: boolean;
    loggerLevel?: string;
    reconnectTries: number; // Never stop trying to reconnect
    reconnectInterval: number;
    useNewUrlParser: Boolean;
}
const connectOptions: mongoose.ConnectOptions = {
    // autoReconnect: true,
    // reconnectTries: Number.MAX_VALUE,
    // reconnectInterval: 1000,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
export class DB {
    static async connect(server?: IServer) {
        try {
            console.log("Trying to connect to DB");
            await mongoose.connect(
                CONFIG.DB_CONNECTION_STRING!,
                connectOptions
            );
            if (server) {
                server.isDbConnected = true;
            }
            console.log('Connected To DB');

        } catch (error) {
            throw error;
        }
    }

}
