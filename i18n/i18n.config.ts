import en from './locales/en.json';
import id from './locales/id.json';
import ja from './locales/ja.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      ...en,
      awardplace: (ctx: { named: (arg0: string) => number }) => {
        const number = ctx.named('count');

        const suffixes: Record<number, string> = {
          1: 'st place',
          2: 'nd place',
          3: 'rd place',
        };
        const suffix = suffixes[number % 10] || 'th place';

        return `${number}${suffix}`;
      },
    },
    id: id,
    ja: ja,
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD',
        notation: 'standard',
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      percent: {
        style: 'percent',
        useGrouping: false,
      },
    },
    id: {
      currency: {
        style: 'currency',
        currency: 'IDR',
        notation: 'standard',
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      percent: {
        style: 'percent',
        useGrouping: false,
      },
    },
    ja: {
      currency: {
        style: 'currency',
        currency: 'JPY',
        useGrouping: true,
        currencyDisplay: 'symbol',
      },
      decimal: {
        style: 'decimal',
        minimumSignificantDigits: 3,
        maximumSignificantDigits: 5,
      },
      percent: {
        style: 'percent',
        useGrouping: false,
      },
    },
  },
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
      },
    },
    id: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
      },
    },
    ja: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      },
    },
  },
}));
