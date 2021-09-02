import e from "cors";
import BookModal from "../../models/Books.model";

export class BooksDao {
    static async getBookById(id: string) {
        return await BookModal.findOne({ _id: id });
    }
    static async getAllBooks(){
        return await BookModal.find();
    }

    static async addBook(title: string, year: number, description: string){
        const newBook = new BookModal({
            title,
            year,
            description
        })
        const rtnVal = await newBook.save();
        return rtnVal;
    }

    static async getBookByTitle(title: string){
        return await BookModal.findOne({title: title}, 'title description year createdOn');
    }
}