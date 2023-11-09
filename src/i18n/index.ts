import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";
import en from './locales/en.json';
import nl from './locales/nl.json';
import type { Writable } from "svelte/store";

export type WritableTranslation = Writable<typeof i18next>;

i18next.init({
  lng: 'en',
  defaultNS: 'translation',
  resources: {
    en: {
      translation: en
    },
    nl: {
      translation: nl
    }
  },
  interpolation: {
    escapeValue: false, // not needed for svelte as it escapes by default
  }
});

export default () => createI18nStore(i18next);