import { ISteamSearchItem } from "../models/steamInterface";

export async function getSteamSearchResults(name: string):Promise<ISteamSearchItem[]> {
    const uriName = encodeURIComponent(name.trim());

    return fetch(`https://steamcommunity.com/actions/SearchApps/${uriName}`)
        .then(res => res.json())
        .then(res => {
            return res as ISteamSearchItem[];
        })
}

export async function getSteamAppDetails(appid: string) {
    // return fetch(`https://store.steampowered.com/api/appdetails?filters=categories&appids=${appid}`)
    return fetch(`https://store.steampowered.com/api/appdetails?filters=basic&appids=${appid}`)
    .then(res => res.json())
    .then(res => {
        return res[appid].data;
    })
}