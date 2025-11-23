import React, { useMemo, useState } from "react";
import { Dimensions, Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { TarotCardData, cardBackImage, getRandomCards } from "./tarotCards";

const { width } = Dimensions.get("window");
const CARD_WIDTH = 120;
const CARD_HEIGHT = 180;

interface TarotCardProps {
  card: TarotCardData;
}

function TarotCard({ card }: TarotCardProps) {
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

  const backStyle = useAnimatedStyle(() => {
    const opacity = interpolate(rotate.value, [0, 90], [1, 0], Extrapolate.CLAMP);
    const scale = interpolate(rotate.value, [0, 90], [1, 0.8], Extrapolate.CLAMP);
    return {
      opacity,
      transform: [{ scale }],
    };
  });

  const frontStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(rotate.value, [90, 180], [0, 1], Extrapolate.CLAMP),
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <TouchableWithoutFeedback onPress={flipCard}>
        <Animated.View style={[styles.card, animatedStyle]}>
          {/* 背面 */}
          <Animated.View
            style={[
              styles.cardFace,
              styles.back,
              backStyle,
            ]}
          >
            <Image 
              source={cardBackImage} 
              style={styles.cardImage}
              resizeMode="cover"
            />
          </Animated.View>

          {/* 正面 */}
          <Animated.View
            style={[
              styles.cardFace,
              styles.front,
              frontStyle,
            ]}
          >
            <Image 
              source={card.imagePath} 
              style={styles.cardImage}
              resizeMode="cover"
              onError={(error) => {
                console.error('图片加载失败:', card.name, card.imagePath, error);
              }}
              onLoad={() => {
                console.log('图片加载成功:', card.name);
              }}
            />
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </GestureDetector>
  );
}

export default function TarotScene() {
  // 随机选择3张卡牌
  const selectedCards = useMemo(() => getRandomCards(3), []);

  return (
    <View style={styles.container}>
      {/* 神秘背景：Lottie 星光 */}
      {/* <LottieView
        source={require("../assets/animation/stars.json")} // 你需要准备一个星空/粒子 Lottie 动画文件
        autoPlay
        loop
        style={StyleSheet.absoluteFillObject}
      /> */}

      {/* 三张随机塔罗牌 */}
      <View style={styles.cardsContainer}>
        {selectedCards.map((card) => (
          <TarotCard key={card.id} card={card} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "transparent",
    transform: [{ perspective: 1000 }], // 3D 透视效果
  },
  cardFace: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    overflow: "hidden",
  },
  back: {
    backgroundColor: "#333",
  },
  front: {
    backgroundColor: "#c49bff",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
});
