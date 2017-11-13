export interface ImageUris {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
}

export interface Legalities {
    standard: string;
    frontier: string;
    modern: string;
    pauper: string;
    legacy: string;
    penny: string;
    vintage: string;
    duel: string;
    commander: string;
    '1v1': string;
    future: string;
}

export interface RelatedUris {
    gatherer: string;
    tcgplayer_decks: string;
    edhrec: string;
    mtgtop8: string;
}

export interface PurchaseUris {
    amazon: string;
    ebay: string;
    tcgplayer: string;
    magiccardmarket: string;
    cardhoarder: string;
    card_kingdom: string;
    mtgo_traders: string;
    coolstuffinc: string;
}

export interface CardFace {
    object: string;
    name: string;
    mana_cost: string;
    type_line: string;
    oracle_text: string;
    colors: string[];
    color_indicator: any[];
    power: string;
    toughness: string;
    flavor_text: string;
    image_uris: ImageUris;
    loyalty: string;
}

export class Card {
    object: string;
    id: string;
    multiverse_id: number;
    multiverse_ids: number[];
    mtgo_id: number;
    name: string;
    uri: string;
    scryfall_uri: string;
    layout: string;
    highres_image: boolean;
    image_uri: string;
    image_uris: ImageUris;
    cmc: number;
    type_line: string;
    oracle_text: string;
    mana_cost: string;
    loyalty: string;
    colors: string[];
    color_indicator: any[];
    color_identity: string[];
    legalities: Legalities;
    reserved: boolean;
    reprint: boolean;
    set: string;
    set_name: string;
    set_uri: string;
    set_search_uri: string;
    scryfall_set_uri: string;
    prints_search_uri: string;
    collector_number: string;
    digital: boolean;
    rarity: string;
    artist: string;
    frame: string;
    full_art: boolean;
    border_color: string;
    timeshifted: boolean;
    colorshifted: boolean;
    futureshifted: boolean;
    usd: string;
    tix: string;
    eur: string;
    related_uris: RelatedUris;
    purchase_uris: PurchaseUris;
    power: string;
    toughness: string;
    flavor_text: string;
    edhrec_rank?: number;
    card_faces?: CardFace[];
}

export interface CardsResponse {
    total_cards: number;
    has_more: boolean;
    cards: Card[];
}

export interface CardResponse {
    card: Card;
}

export interface CardProps {
    card: Card;
}
    