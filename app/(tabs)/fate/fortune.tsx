// app/(tabs)/Fortune.tsx

import { StyleSheet } from 'react-native';
import { Surface, Text } from "react-native-paper";


export default function Fortune() {

  // useFocusEffect(
  //   useCallback(() => {
  //     const parent = navigation.getParent(); // Drawers
  //     parent?.setOptions({ swipeEnabled: false });

  //     return () => {
  //       parent?.setOptions({ swipeEnabled: true }); // 离开时恢复
  //     };
  //   }, [navigation])
  // );
  return (
    <Surface style={styles.container}>
      {/* <Tarot/> */}
      <Text>Tab [Home|Settings]</Text>
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
