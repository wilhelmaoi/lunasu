// app/_layout.tsx
import { ThemeProvider, useTheme } from "@/src/theme/ThemeContext";
import { Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const theme = useTheme();

  const pathname = usePathname();
  // 从路径中提取当前标签名
  useEffect(() => {
    console.log("当前路径：", pathname);
  }, [pathname]);

  
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1,backgroundColor:theme.colors.background  }} edges={['bottom']}>
      <StatusBar
        style={"dark"}
        translucent={true}
      />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      </SafeAreaView>
    </ThemeProvider>
  );
}
