import { Request, Response } from "express";
import * as starfigtherService from "../services/starfigthersService.js"

export async function battleStars(req: Request, res: Response) {
    const { firstUser, secondUser }: { firstUser: string, secondUser: string } = req.body;
    if (!firstUser || !secondUser) {
        return res.sendStatus(422);
      }
    const result = await starfigtherService.battleStars(firstUser, secondUser)
    console.log(result)
    res.status(200).send(result)
}
