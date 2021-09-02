import { Router } from 'express';
import { BooksController } from '../controllers';

export default class BooksRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        // GET
        this.router.get('/getAllBooks', BooksController.getAll);
        
        // Post
        this.router.post('/addBook', BooksController.addNew)

        // Put

        // Delete

    }
}
