import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import i18n, { AppLocale, initI18n, setLocale as setLocaleImpl } from './i18n';

type I18nContextValue = {
  locale: AppLocale;
  t: (key: string, options?: any) => string;
  setLocale: (l: AppLocale) => Promise<void>;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<AppLocale>('en');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const l = await initI18n();
      setLocaleState(l);
      setReady(true);
    })();
  }, []);

  const setLocale = useCallback(async (l: AppLocale) => {
    await setLocaleImpl(l);
    setLocaleState(l);
  }, []);

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    t: (key, options) => i18n.t(key, options),
    setLocale,
  }), [locale, setLocale]);

  if (!ready) return null;

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}


