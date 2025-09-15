import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pressable } from "react-native";
import { ThemedText } from "../../app-example/components/ThemedText";
import { ThemedView } from "../../app-example/components/ThemedView";

export default function MainIndex() {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 12 }}
    >
      <ThemedText type="title">主页面</ThemedText>
      <ThemedText>这是完成引导后的主界面。</ThemedText>
      <Pressable
        onPress={async () => {
          await AsyncStorage.removeItem("onboardingComplete");
          alert("已清除引导完成标记，下次将再次显示引导页");
        }}
      >
        <ThemedText type="link">重置引导</ThemedText>
      </Pressable>
    </ThemedView>
  );
}


