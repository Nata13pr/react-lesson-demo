import * as Joi from "joi";

const UserValidator = Joi.object({
    username: Joi.string()
        .min(1)
        .max(20)
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ\s]{1,20}$/)
        .required()
        .messages({
            "string.pattern.base": "Only Latin and Cyrillic letters are allowed &  must be at least 1 character.",
            "string.base": "Username must be a string.",
            "string.empty": "Username field cannot be empty.",
            "string.min": "Username must be at least 1 character long.",
            "string.max": "Username cannot exceed 20 characters.",
        }),
    password: Joi.number()
        .min(5)
        .max(10)
        .integer()
        .required()
        .messages({
            "number.min": "password can be at least 5",
            "number.max": "max password is 10",
            "number.integer": "password must be a whole number",
        }),
})

export default UserValidator;