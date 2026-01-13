import * as Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().min(1)
        .max(20)
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ\s]{1,20}$/).required().messages({
            "string.pattern.base": "Only Latin and Cyrillic letters are allowed &  must be at least 1 character.",
            "string.base": "Brand must be a string.",
            "string.empty": "Brand field cannot be empty.",
            "string.min": "Brand must be at least 1 character long.",
            "string.max": "Brand cannot exceed 20 characters.",
        }),
    price: Joi.number().min(0).max(1000000).integer().required().messages({
        "number.min": "price can be at least 0",
        "number.max": "max price is 1000000",
        "number.integer": "Price must be a whole number",
    }),
    year: Joi.number().integer().min(1990).max(2025).required().messages({
        "number.min": "Year must be at least 1999",
        "number.max": "Year cannot exceed 2026",
        "number.integer": "Year must be a whole number",
        "any.required": "This field is required"
    })
})

export default carValidator;