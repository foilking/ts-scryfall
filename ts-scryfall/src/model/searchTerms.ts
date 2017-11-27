import { Set } from './set';

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

    name: string;
    oracle: string;
    type: string;
    allowPartialTypeMatch: boolean;
    colors: string[];
    requiresMulticolored: boolean;
    excludeUnselectedColors: boolean;
    allowPartialColorMatch: boolean;
    mana: string;
    formats: string[];
    commanderIdentity: string[];
    sets: Set[];
    rarities: string[];
    artist: string;
    flavor: string;
    lore: string;
    display: string;
    showAllPrints: boolean;
    includeFunny: boolean;
}