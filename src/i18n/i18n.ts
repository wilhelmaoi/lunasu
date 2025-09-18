import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import en from './locales/en';
import ja from './locales/ja';
import zh from './locales/zh';

// 语言代码常量
export type AppLocale = 'zh' | 'en' | 'ja';
const STORAGE_KEY = 'app_locale';

// 加载词典（按需扩展）

const i18n = new I18n({ zh, en, ja } as any);
i18n.enableFallback = true;
i18n.defaultLocale = 'en';

function normalizeToSupportedLocale(localeTag?: string): AppLocale {
  const tag = (localeTag || '').toLowerCase();
  if (tag.startsWith('zh')) return 'zh';
  if (tag.startsWith('ja')) return 'ja';
  return 'en';
}

export async function initI18n(): Promise<AppLocale> {
  // 优先读取持久化设置
  const saved = await AsyncStorage.getItem(STORAGE_KEY);
  let locale: AppLocale | null = null;
  if (saved === 'zh' || saved === 'en' || saved === 'ja') {
    locale = saved;
  }
  if (!locale) {
    const [sys] = Localization.getLocales();
    locale = normalizeToSupportedLocale(sys?.languageTag);
  }
  i18n.locale = locale;
  return locale;
}

export async function setLocale(locale: AppLocale) {
  i18n.locale = locale;
  await AsyncStorage.setItem(STORAGE_KEY, locale);
}

export function t(key: string, options?: Parameters<I18n['t']>[1]): string {
  try {
    return i18n.t(key, options);
  } catch {
    return key;
  }
}

export function getLocale(): AppLocale {
  return normalizeToSupportedLocale(String(i18n.locale));
}

export default i18n;


