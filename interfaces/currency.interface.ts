export enum Currency {
  USD = 'USD',
  RUB = 'RUB',
  EUR = 'EUR',
  CAD = 'CAD',
  JPY = 'JPY',
  AMD = 'AMD',
  GEL = 'GEL',
  BYN = 'BYN'
}

export const currencyLabel = {
  [Currency.RUB]: 'π·πΊ RUB',
  [Currency.USD]: 'πΊπΈ USD',
  [Currency.EUR]: 'πͺπΊ EUR',
  [Currency.CAD]: 'π¨π¦ CAD',
  [Currency.JPY]: 'π―π΅ JPY',
  [Currency.AMD]: 'π¦π² AMD',
  [Currency.GEL]: 'π¬πͺ GEL',
  [Currency.BYN]: 'π§πΎ BYN',
} as const;

export interface ICurrencyAPIResponse {
  query: {
    api: unknown
  }
  data: {
    [date: string]: CurrencySheet
  }
}

export type CurrencySheet = Record<Currency, number>;

export interface SheetDTO {
  currencies: CurrencySheet;
  lastUpdated: string;
}
