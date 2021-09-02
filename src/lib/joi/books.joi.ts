import Joi from 'joi';

export const bookSchema = Joi.object({
    title: Joi.string().required(),
    year: Joi.number().min(800).max(2030).required(),
    description: Joi.string().required()
})