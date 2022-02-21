import { Locales } from "./locales";

import en from "./en.json";
import fin from "./fin.json";

export const messages = {
  [Locales.EN]: en,
  [Locales.FIN]: fin
};

export const defaultLocale = Locales.FIN;