import { Router } from 'express';
import BooksRoute from './books.router';

export default class IndexRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        // GET
        this.router.use('/books', new BooksRoute().router);
        
    }
}