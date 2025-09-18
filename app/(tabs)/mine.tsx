// app/(tabs)/mine.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, StyleSheet, } from 'react-native';
import { Surface, Text } from "react-native-paper";
export default function mine() {
  return (
    <Surface style={styles.container}>
      <Text variant="titleLarge">主页面</Text>
      <Text style={styles.text}>这是完成引导后的主界面。</Text>
      <Pressable
        onPress={async () => {
          await AsyncStorage.removeItem("onboardingComplete");
          alert("已清除引导完成标记，下次将再次显示引导页");
        }}
      >
        <Text style={styles.link}>重置引导</Text>
      </Pressable>
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
