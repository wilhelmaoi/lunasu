// app/(tabs)/_layout.tsx
import { useTheme } from '@/src/theme/ThemeContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from "expo-router";
import React from "react";



export default function TabLayout() {

  const theme = useTheme(); // 🔥 获取主题颜色
  
  return( 
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: theme.colors.primary, // 选中颜色
        tabBarInactiveTintColor: theme.colors.secondary, // 未选中颜色
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { 
          height: 60,
          backgroundColor: theme.colors.background, // ✅ 动态背景色
          borderTopColor: theme.colors.outlineVariant, // 分隔线颜色
          borderTopWidth: 0, // 可选，去掉上边框
          elevation: 0,      // 安卓去阴影
         },
        tabBarPosition: "bottom",
      }}
    >
      <Tabs.Screen name="divination" options={{ title: "占卜", tabBarIcon: ({ color }) => <AntDesign name="home" size={28} color={color} />, headerShown: false }} />
      <Tabs.Screen name="stellar" options={{ title: "星座" ,tabBarIcon: ({ color }) => <AntDesign name="user" size={28}  color={color}  />, headerShown: false}} />
      <Tabs.Screen name="fortune" options={{ title: "运势", tabBarIcon: ({ color }) => <AntDesign name="home" size={28} color={color} />, headerShown: false }} />
      <Tabs.Screen name="mine" options={{ title: "我的" ,tabBarIcon: ({ color }) => <AntDesign name="user" size={28}  color={color}  />, headerShown: false}} />
    </Tabs>
  )
}
