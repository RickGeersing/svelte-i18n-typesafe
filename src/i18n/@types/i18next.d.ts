import { resources } from ".."
import type { Writable } from "svelte/store";
import i18next from "i18next";

export type I18NStore = Writable<typeof i18next>;


declare module 'i18next' {
    interface CustomTypeOptions {
        resources: typeof resources['nl']
    }
}