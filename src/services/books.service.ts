import { BooksDao } from "../lib/dao/index"

export class BooksService {
    static async getAll() {
        try {
            const allBooks = await BooksDao.getAllBooks();
            return allBooks
        } catch (error) {
            return error
        }
    }

    static async addNew(title: string, year: number, description: string){
        try{
            return await BooksDao.addBook(title, year, description);
        }
        catch(e){
            return e;
        }
    }

    static async getBookByTitle(title: string){
        try{
            return await BooksDao.getBookByTitle(title);
        }
        catch(e){
            return e;
        }
    }
}