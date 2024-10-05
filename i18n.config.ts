import en from "./i18n/en.json"
import id from "./i18n/id.json"
import ja from "./i18n/ja.json"

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: en,
    id: id,
    ja: ja
  }
}))
