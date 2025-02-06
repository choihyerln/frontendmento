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
