export interface PaisInterface {
    flags:        Flags;
    name:         Name;
    cca2:         string;
    cioc:         string;
    capital:      string[];
    altSpellings: string[];
    population:   number;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    spa: SPA;
}

export interface SPA {
    official: string;
    common:   string;
}
