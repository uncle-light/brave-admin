export interface LocaleSetting {
  showPicker: boolean;
  // Current language
  locale: LocaleType;
  // default language
  fallback: LocaleType;
  // available Locales
  availableLocales: LocaleType[];
}
export type LocaleType = "zh_CN" | "en";

export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: "zh_CN",
  EN_US: "en",
};

export const localeSetting: LocaleSetting = {
  showPicker: true,
  // Locale
  locale: LOCALE.ZH_CN,
  // Default locale.ts
  fallback: LOCALE.ZH_CN,
  // available Locales
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US],
};

// // locale.ts list
export const localeList: any[] = [
  {
    label: "简体中文",
    key: LOCALE.ZH_CN,
  },
  {
    label: "English",
    key: LOCALE.EN_US,
  },
];
