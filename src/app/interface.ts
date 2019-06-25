export interface Link {
    id: string;
    elink: string;
    name: string;
    picture: string;
}

export interface Recipe {
    id: string;
    picture: string;
    steps: [];
    ingredients: [];
    extra: string;
    long: string;
    name: string;
    serve: string;
    short: string;
}
