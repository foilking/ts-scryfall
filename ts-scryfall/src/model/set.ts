export interface Set {
    code: string;
    name: string;
    set_type: string;
    card_count: number;
    parent_set_code: string;
    digital: boolean;
    foil: boolean;
    icon_svg_uri: string;
}

export interface SetsResponse {
    data: Set[]
}