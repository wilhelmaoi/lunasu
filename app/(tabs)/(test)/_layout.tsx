import { Stack } from "expo-router";
import React from "react";

export default function ScreenLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="notification" 
        options={{ 
          headerShown: false 
        }} 
      />
    </Stack>
  );
}
