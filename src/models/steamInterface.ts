export interface ISteamSearchItem {
    appid: string,
    name: string,
    icon: string,
    logo: string
}

export interface ICategory {
    id: string,
    description: string
}

export interface ISteamQuery {
    success: boolean,
    data: ISteamQueryInfo
}

export interface ISteamQueryInfo {
    categories: ICategory[]
}
