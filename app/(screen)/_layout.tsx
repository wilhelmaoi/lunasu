import { Stack } from "expo-router";
import React from "react";

export default function ScreenLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="sponsor" 
        options={{ 
          headerShown: false 
        }} 
      />
    </Stack>
  );
}
