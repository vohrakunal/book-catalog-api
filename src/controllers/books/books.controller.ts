import { NextFunction, Request, Response } from "express";
import { BooksService } from "../../services/index";

import { bookSchema } from "../../lib/joi/index";


export class BooksController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const allBooks = await BooksService.getAll();
            res.status(200).send(allBooks)
        } catch (error) {
            next(error)
        }
    }

    static async addNew(req: Request, res: Response, next: NextFunction) {
        try{
            const validate = bookSchema.validate(req.body)
            if(!validate.error){
                const checkForExisting = await BooksService.getBookByTitle(req.body.title);
                if(checkForExisting){
                    return res.status(403).send("Book already Exist");
                }
                res.status(200).send("Created");
            }   
            else{
                res.status(403).send("Something went Wrong! All fields are required")
            }
        }
        catch(e){
            next(e)
        }
    }

}