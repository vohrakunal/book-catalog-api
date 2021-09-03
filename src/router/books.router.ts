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
        this.router.get('/getBookById/:bookId', BooksController.getById);
        
        // Post
        this.router.post('/addBook', BooksController.addNew)
        this.router.post('/addBooksInBatch', BooksController.addBatch)

        // Put

        // Delete

    }
}
