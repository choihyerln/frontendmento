export interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  cca3: string;
}

export interface DetailCountry {
  name: {
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
}
