export enum SearchOrder {
    Name = 'name',
    Set = 'set',
    Tix = 'tix',
    Usd = 'usd',
    Eur = 'eur',
    CMC = 'cmc',
    Pow = 'pow',
    Tou = 'tou',
    Rarity = 'rarity',
    Color = 'color',
    EDHRec = 'edhrec'
}

export interface SearchTerms {
    q: string;
    order: SearchOrder;
    page: number;
}