import { useI18n } from '@/src/i18n/I18nProvider';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <Button mode={locale === 'zh' ? 'contained' : 'outlined'} onPress={() => setLocale('zh')}>简体中文</Button>
      <Button mode={locale === 'en' ? 'contained' : 'outlined'} onPress={() => setLocale('en')}>English</Button>
      <Button mode={locale === 'ja' ? 'contained' : 'outlined'} onPress={() => setLocale('ja')}>日本語</Button>
    </View>
  );
}


