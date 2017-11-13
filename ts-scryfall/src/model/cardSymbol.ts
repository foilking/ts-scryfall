export interface CardSymbol {
    object: string;
    symbol: string;
    loose_variant: string;
    english: string;
    transposable: string;
    represents_mana: boolean;
    appears_in_mana_costs: boolean;
    cmc: number;
    funny: boolean;
    colors: string[];
}