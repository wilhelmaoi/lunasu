// app/(tabs)/divination.tsx
import Tarot from "@/src/components/Tarot";
import { StyleSheet } from "react-native";
import { Surface } from "react-native-paper";



export default function divination() {

  return (
    <Surface style={styles.container}>
       <Tarot/>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
