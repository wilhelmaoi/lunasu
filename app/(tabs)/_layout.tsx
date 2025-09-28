// app/(tabs)/_layout.tsx
import { useI18n } from '@/src/i18n/I18nProvider';
import { useTheme } from '@/src/theme/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";



export default function TabLayout() {
  const theme = useTheme(); // 🔥 获取主题颜色
  const { t } = useI18n();
  const insets = useSafeAreaInsets();
  
  return( 
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: theme.colors.primary, // 选中颜色
        tabBarInactiveTintColor: theme.colors.secondary, // 未选中颜色
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { 
          height: 60, // 动态高度，包含底部安全区域
          backgroundColor: theme.colors.background, // ✅ 动态背景色
          borderTopColor: theme.colors.outlineVariant, // 分隔线颜色
          elevation: 0,      // 安卓去阴影
         },
        tabBarPosition: "bottom",
      }}
    >
      {/* 
        星星：<MaterialCommunityIcons name="star-four-points" size={28} color={color} />
              <MaterialCommunityIcons name="orbit" size={28}  color={color}  />

        水晶球：<MaterialCommunityIcons name="crystal-ball" size={28} color={color} />
      */}
      <Tabs.Screen name="fate" options={{ 
        title: t('tabs.fate'), 
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="crystal-ball" size={28} color={color} />, 
        headerShown: false
      }} />
      <Tabs.Screen name="stellar" options={{ 
        title: t('tabs.stellar') ,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="weather-night" size={28}  color={color}  />, 
        headerShown: false
        }} />
      <Tabs.Screen name="divination" options={{ 
        title: t('tabs.divination'), tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cards-playing" size={28} color={color} />, 
        headerShown: false 
        }} />
      <Tabs.Screen name="mine" options={{ 
        title: t('tabs.mine') ,tabBarIcon: ({ color }) => <MaterialCommunityIcons name="star-four-points" size={28}  color={color}  />, 
        headerShown: false
        }} />
      {/* <Tabs.Screen name="(test)" options={{ 
        title: '测试' ,tabBarIcon: ({ color }) => <MaterialCommunityIcons name="orbit" size={28}  color={color}  />, 
        headerShown: false
        }} /> */}
    </Tabs>
  )
}
