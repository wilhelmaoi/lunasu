// app/index
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Text } from "react-native-paper";

export default function Index() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const value = await AsyncStorage.getItem("onboardingComplete");
        if (value === "true") {
          router.replace('./(tabs)/divination');
        } else {
          router.navigate('./onboarding');
        }
      } finally {
        setChecking(false);
      }
    };
    checkOnboarding();
  }, [router]);

  if (!checking) return null;

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text  >nihao</Text>
      <ActivityIndicator />

    </View>
  );
}
