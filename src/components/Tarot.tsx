import React, { useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    Extrapolate,
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const CARD_WIDTH = 120;
const CARD_HEIGHT = 180;

function TarotCard({ id }: { id: number }) {
  const rotate = useSharedValue(0);
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    const next = flipped ? 0 : 180;
    rotate.value = withTiming(next, { duration: 600 });
    setFlipped(!flipped);
  };

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      let newValue = Math.min(Math.max(0, rotate.value + e.translationX / 2), 180);
      rotate.value = newValue;
    })
    .onEnd(() => {
      if (rotate.value > 90) {
        rotate.value = withTiming(180, { duration: 300 });
        runOnJS(setFlipped)(true);
      } else {
        rotate.value = withTiming(0, { duration: 300 });
        runOnJS(setFlipped)(false);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotate.value}deg` }],
  }));

  const backStyle = useAnimatedStyle(() => ({
    opacity: interpolate(rotate.value, [0, 90], [1, 0], Extrapolate.CLAMP),
  }));

  const frontStyle = useAnimatedStyle(() => ({
    opacity: interpolate(rotate.value, [90, 180], [0, 1], Extrapolate.CLAMP),
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <TouchableWithoutFeedback onPress={flipCard}>
        <Animated.View style={[styles.card, animatedStyle]}>
          {/* 背面 */}
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              styles.cardFace,
              styles.back,
              backStyle,
            ]}
          >
            <Text style={styles.text}>🔮</Text>
          </Animated.View>

          {/* 正面 */}
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              styles.cardFace,
              styles.front,
              frontStyle,
            ]}
          >
            <Text style={styles.text}>🌟 {id}</Text>
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </GestureDetector>
  );
}

export default function TarotScene() {
  const data = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      {/* 神秘背景：Lottie 星光 */}
      {/* <LottieView
        source={require("../assets/animation/stars.json")} // 你需要准备一个星空/粒子 Lottie 动画文件
        autoPlay
        loop
        style={StyleSheet.absoluteFillObject}
      /> */}

      {/* 多张牌 */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-around", marginBottom: 20 }}
        contentContainerStyle={{ paddingVertical: 50 }}
        renderItem={({ item }) => <TarotCard id={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "transparent",
    transform: [{ perspective: 1000 }], // 3D 透视效果
  },
  
  cardFace: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
    borderRadius: 12,
  },
  back: {
    backgroundColor: "#333",
  },
  front: {
    backgroundColor: "#c49bff",
    transform: [{ rotateY: "180deg" }],
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
