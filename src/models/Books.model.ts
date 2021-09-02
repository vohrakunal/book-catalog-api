import { Schema, Document, model } from 'mongoose';

export interface IBook extends Document {
    title: string,
    year: string,
    description: string,
    createdAt: Date,
}

const booksSchema = new Schema<IBook>({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default : ()=>Date.now()
    },
});

export default model<IBook>('books', booksSchema);