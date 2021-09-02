import * as dotenv from "dotenv";
dotenv.config();

export const CONFIG = {
    PORT: process.env.PORT || 4000,
    BASE_URL: 'http://localhost:4000',
    NODE_ENV: process.env.NODE_ENV,
    DB_CONNECTION_STRING: process.env.DB_STRING || "mongodb://localhost:27017/books-catalog",
}