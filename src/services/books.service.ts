import { BooksDao } from "../lib/dao/index"

export class BooksService {
    static async getAll() {
        try {
            const allBooks = await BooksDao.getAllBooks();
            return allBooks
        } catch (e) {
            console.log(e)
            return false
        }
    }

    static async getById(id: string){
        try{
            return await BooksDao.getBookById(id)
        }
        catch(e){
            console.log(e)
            return false
        }
    }

    static async addNew(title: string, year: number, description: string){
        try{
            return await BooksDao.addBook(title, year, description);
        }
        catch(e){
            console.log(e)
            return false
        }
    }

    static async getBookByTitle(title: string){
        try{
            return await BooksDao.getBookByTitle(title);
        }
        catch(e){
            console.log(e)
            return false
        }
    }
}