// app/_layout.tsx
import CustomDrawerContent from "@/src/components/CustomDrawerContent";
import { useThemeStore } from "@/src/context/store";
import { ThemeProvider, useTheme } from "@/src/theme/ThemeContext";
import { usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


const SCREEN_WIDTH = Dimensions.get('window').width;

export default function RootLayout() {
  const theme = useTheme();
  const mode = useThemeStore((state) => state.mode);

  const pathname = usePathname();
  // 从路径中提取当前标签名
  useEffect(() => {
    console.log("当前路径：", pathname);
  }, [pathname]);

  
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1,backgroundColor:theme.colors.background  }} edges={['bottom']}>
      <StatusBar
        style={mode === "dark" ? "light" : "dark"}
        translucent={true}
      />
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
              drawerContent={(props) => <CustomDrawerContent {...props} />}
              screenOptions={{
                headerShown: false,
                drawerStyle: {
                  backgroundColor: theme.colors.background,
                  width: SCREEN_WIDTH * 0.8,
                },
                drawerType: "front",
                overlayColor: 'rgba(0,0,0,0.5)',
                swipeEnabled: true,
                swipeEdgeWidth: 30,
                drawerPosition: "left",
                drawerStatusBarAnimation: "slide",
              }}
            >
          <Drawer.Screen name="index" options={{ headerShown: false }} />
          <Drawer.Screen name="onboarding" options={{ headerShown: false, swipeEnabled: false, }} />
          <Drawer.Screen name="(tabs)" options={{ 
            headerShown: false,
            // swipeEnabled: false,
          }} />

          <Drawer.Screen 
          name="sponsor" 
          options={{
            drawerLabel: "打米",
            swipeEnabled: false,
          }}
        />
        </Drawer>
      </GestureHandlerRootView>
      </SafeAreaView>
    </ThemeProvider>
  );
}
