import nl from '../locales/nl.json'
import en from '../locales/en.json'

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'nl'
        resources: {
            nl: typeof nl
            en: typeof en
        }
    }
}