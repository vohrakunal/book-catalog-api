import { NextFunction, Request, Response } from "express";
import { BooksService } from "../../services/index";

import { bookSchema } from "../../lib/joi/index";
import { IBook } from "../../models";


export class BooksController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const allBooks = await BooksService.getAll();
            if(allBooks){
                res.status(200).send(allBooks)
            }
            else{
                res.status(404).send(allBooks)
            }
        } catch (error) {
            next(error)
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction){
        try{
            const book = await BooksService.getById(req.params.bookId)
            if(book){
                res.status(200).send(book);
            }
            else{
                res.status(404).send("No Book Found")
            }
        }
        catch(e){
            next(e)
        }
    }


    static async addNew(req: Request, res: Response, next: NextFunction) {
        try {
            const validate = bookSchema.validate(req.body)
            if (!validate.error) {
                const checkForExisting = await BooksService.getBookByTitle(req.body.title);
                if (checkForExisting) {
                    return res.status(403).send("Book already Exist");
                }
                const rtnAddedval = await BooksService.addNew(req.body.title, req.body.year, req.body.description);
            
                if(rtnAddedval){
                    res.status(200).send("Created");
                }
                else{
                    res.status(403).send("Something went Wrong!")
                }
            }
            else {
                res.status(403).send("Something went Wrong! All fields are required")
            }
        }
        catch (e) {
            next(e)
        }
    }

    static async addBatch(req: Request, res: Response, next: NextFunction) {
        try {
            const rejected: IBook[] = [];
            for (let book of req.body.books) {
                const validate = bookSchema.validate(book);
                if (!validate.error) {
                    const checkForExisting = await BooksService.getBookByTitle(book.title);
                    if (checkForExisting) {
                        rejected.push(book);
                    }
                    await BooksService.addNew(book.title, book.year, book.description);
                }
                else {
                    rejected.push(book)
                }
            }
            res.status(200).send({
                msg: "Completed",
                rejected: rejected
            })
        }
        catch (e) {
            next(e)
        }
    }
}