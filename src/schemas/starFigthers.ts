import joi from "joi";

export const starSchema = joi.object({
    firstUser: joi.string().required(),
    secondUser: joi.string().required()
});