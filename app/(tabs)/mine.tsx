// app/(tabs)/mine.tsx
import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import { useI18n } from "@/src/i18n/I18nProvider";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
import { Pressable, StyleSheet, } from 'react-native';
import { Button, Surface, Text } from "react-native-paper";

export default function Mine() {
  const { t } = useI18n();
  return (
    <Surface style={styles.container}>
      <Text variant="titleLarge">{t('mine.title')}</Text>
      <Text style={styles.text}>{t('mine.desc')}</Text>
      <LanguageSwitcher />
      <Pressable
        onPress={async () => {
          await AsyncStorage.removeItem("onboardingComplete");
          alert(t('mine.resetAlert'));
        }}
      >
        <Text style={styles.link}>{t('mine.resetOnboarding')}</Text>
      </Pressable>
      <Button mode='outlined' onPress={() => router.navigate('/(test)/notification')}>通知服务测试</Button>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    padding: 16,
    elevation: 4, // adds shadow for Surface
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
  link: {
    fontSize: 16,
    color: "#6200ee", // Paper's default primary color
    textDecorationLine: "underline",
  },
});
