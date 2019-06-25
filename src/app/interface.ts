export interface Link {
    id: string;
    elink: string;
    name: string;
    picture: string;
}

export interface Recipe {
    id: string;
    picture: string;
    cooking: [];
    ingredients: [];
    extra: string;
    long: string;
    name: string;
    serve: string;
    short: string;
}
