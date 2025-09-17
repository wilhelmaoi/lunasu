// app/(tabs)/home/_layout.tsx
import CustomTopTabBar from "@/src/components/CustomTopTabBar";
import { useTheme } from "@/src/theme/ThemeContext";
import { Tabs } from "expo-router";
import React from "react";

export default function FortuneLayout() {
  const theme = useTheme();

  return (
    <Tabs
      tabBar={(props) => <CustomTopTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarPosition: "top",
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarLabelStyle: { fontSize: 16 },
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarShowLabel: true,
        tabBarIconStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen
        name="fortune"
        options={{
          title: "今日运势",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="hall"
        options={{
          title: "大厅",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

