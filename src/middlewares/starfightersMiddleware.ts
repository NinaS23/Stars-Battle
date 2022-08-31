import { NextFunction, Request, Response } from "express";
import { starSchema } from "../schemas/starFigthers.js";

export async function starfightersValidate(req: Request, res: Response, next: NextFunction) {
    const {firstUser,secondUser} : {firstUser: string, secondUser: string} = req.body;
   
    const { error } = starSchema.validate({firstUser,secondUser}, {abortEarly: false});
   
    if (error) {
        return res.status(422).send(error.details.map(detail => detail.message));
    }

    next();
}