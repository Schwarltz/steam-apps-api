import { Request, Response } from 'express';
import { ISteamSearchItem } from '../models/steamInterface';
import { getSteamAppDetails, getSteamSearchResults } from '../service/steam.service';
import { RetrieveDetailsSchema } from '../schema/steam.schema';
import log from '../utils/logger';


export interface Payload {
    name: string;
} 

export async function retrieveSteamAppDetailsHandler(
    req: Request<{}, {}, RetrieveDetailsSchema>, 
    res: Response
) {
    const name = req.query.name as string | undefined;
    if (!name) {
        log.error(`Could not retrieve name`);
        return res.status(400).send("Could not retrieve name");
    }
    const searchResults: ISteamSearchItem[] = await getSteamSearchResults(name);
    if (searchResults.length <= 0) {
        log.error(`Could not retrieve appid for ${name}`)
        return res.status(400).send(`Could not retrieve details for ${name}`);
    }

    const closestMatchAppId:string = searchResults[0].appid;
    const appDetails = await getSteamAppDetails(closestMatchAppId);

    res.send(appDetails);
}

