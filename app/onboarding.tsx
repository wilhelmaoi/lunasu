import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { Dimensions, FlatList, Pressable, StatusBar, Text, View } from "react-native";

const { width } = Dimensions.get("window");

type Card = {
  key: string;
  title: string;
  description: string;
};

const CARDS: Card[] = [
  {
    key: "c1",
    title: "欢迎使用 LunaSu",
    description: "一个使用 Expo 构建的示例应用。左滑继续",
  },
  {
    key: "c2",
    title: "快速上手",
    description: "跨平台运行，热重载开发更高效。",
  },
  {
    key: "c3",
    title: "开始探索",
    description: "完成引导后进入主界面。",
  },
];

export default function Onboarding() {
  const router = useRouter();
  const listRef = useRef<FlatList<Card>>(null);
  const [index, setIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems?.length > 0) {
      setIndex(viewableItems[0].index ?? 0);
    }
  }).current;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const goNext = useCallback(() => {
    if (index < CARDS.length - 1) {
      listRef.current?.scrollToIndex({ index: index + 1, animated: true });
    }
  }, [index]);

  const complete = useCallback(async () => {
    await AsyncStorage.setItem("onboardingComplete", "true");
    router.replace('./(main)');
  }, [router]);

  const renderItem = useCallback(({ item }: { item: Card }) => {
    return (
      <View
        style={{
          width,
          flex: 1,
          paddingHorizontal: 24,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 12 }}>
          {item.title}
        </Text>
        <Text style={{ fontSize: 16, color: "#444", textAlign: "center" }}>
          {item.description}
        </Text>
      </View>
    );
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar translucent barStyle="dark-content" />
      <FlatList
        ref={listRef}
        data={CARDS}
        keyExtractor={(i) => i.key}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
      />
      <View
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          paddingHorizontal: 24,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable onPress={complete} hitSlop={10}>
          <Text style={{ color: "#4a56e2", fontWeight: "600" }}>跳过</Text>
        </Pressable>
        <View style={{ flexDirection: "row", gap: 8 }}>
          {CARDS.map((_, i) => (
            <View
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                backgroundColor: i === index ? "#111" : "#bbb",
              }}
            />)
          )}
        </View>
        {index < CARDS.length - 1 ? (
          <Pressable onPress={goNext} hitSlop={10}>
            <Text style={{ color: "#4a56e2", fontWeight: "600" }}>继续</Text>
          </Pressable>
        ) : (
          <Pressable onPress={complete} hitSlop={10}>
            <Text style={{ color: "#4a56e2", fontWeight: "600" }}>开始使用</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}


