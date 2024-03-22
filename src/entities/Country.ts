export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  independent: boolean;
  borders: string[];
  idd: {
    root: string;
    suffixes: string[];
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  capital: string[];
  region: string;
  cca2: string;
  population: number;
  subregion: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
