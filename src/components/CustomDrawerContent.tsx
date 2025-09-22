import { AntDesign } from "@expo/vector-icons";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Href, useRouter } from "expo-router";
import React from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Card, IconButton, Text } from "react-native-paper";
import { useAuthStore, useThemeStore } from "../context/store";
import { useTheme } from "../theme/ThemeContext";

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const theme = useTheme();
  const router = useRouter();
  const navigation = useNavigation();
  const { user, avatarUri } = useAuthStore();
  const { mode, toggleTheme } = useThemeStore();

  const [fontsLoaded] = useFonts({
    "mini-jian-huangcao": require("../assets/fonts/迷你简黄草.ttf"),
  });
  if (!fontsLoaded) return null; // 字体没加载好时不渲染

  // 导航到指定路径并关闭侧边栏
  const navigateToPath = (path: string) => {
    // navigation.dispatch(DrawerActions.closeDrawer());
    router.push(path as  Href);


    // try {
    //   router.push(path as Href);
      
    //   // 只有在导航到 tabs 页面时才关闭抽屉
    //   if (path.includes("/(tabs)/")) {
    //     setTimeout(() => {
    //       try {
    //         navigation.dispatch(DrawerActions.closeDrawer());
    //       } catch {
    //         // 静默处理错误，不输出日志
    //       }
    //     }, 100);
    //   }
    // } catch (error) {
    //   console.error("导航错误:", error);
    // }
  };

  // 处理扫描二维码
  const handleScanQRCode = () => {
    // router.push("./(screen)/scan-qr-code");
    // navigation.dispatch(DrawerActions.closeDrawer());
  };
  const STATUSBAR_HEIGHT =
  Platform.OS === "ios" ? 44 : StatusBar.currentHeight || 24;

  return (
    <ScrollView {...props} style={[styles.container, 
      { backgroundColor: theme.colors.background,
      paddingTop: STATUSBAR_HEIGHT + 0, // 状态栏高度 + 额外边距
    }, ]}>
       {/* 右上角按钮区域 */}
       <View style={styles.headerButtons}>
          <IconButton
            icon="qrcode-scan"
            iconColor={theme.colors.primary}
            size={22}
            onPress={handleScanQRCode}
          />
          <IconButton
            icon={mode === 'light' ? 'weather-night' : 'white-balance-sunny'}
            iconColor={theme.colors.primary}
            size={22}
            onPress={toggleTheme}
          />
        </View>

      {/* 用户信息区域 */}
      <Card
        style={[styles.userSection, { backgroundColor: theme.colors.primary }]}
      >
       
        <TouchableOpacity
          style={styles.userInfo}
          onPress={() => navigateToPath("/(tabs)/mine")}
        >
          <Avatar.Image
            source={
              avatarUri ? { uri: avatarUri } : require("../assets/images/avatar.jpg")
            }
            style={styles.avatar}
          />

          <View style={styles.userTextContainer}>
            <Text style={[styles.userName, { color: theme.colors.onPrimary }]}>
              {user?.nickname || "未登录"}
            </Text>
            <Text style={[styles.userEmail, { color: theme.colors.onPrimary }]}>
              {user?.email || "example@gmail.com"}
            </Text>
          </View>
        </TouchableOpacity>
      </Card>
      
      {/* 左侧大图标和文字 */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigateToPath("/(screen)/sponsor")}
      >
        <View
          style={{
            borderRadius: 15,
            marginTop: 20,
            height: 60,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#e85C8A",
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
              marginLeft: 10,
            }}
          >
            <View
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: "#E86A94FF", // 内层粉色
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 30,
                  fontFamily: "mini-jian-huangcao",
                }}
              >
                大
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>
              我的大会员
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 13,
                opacity: 0.85,
                marginTop: 2,
              }}
            >
              你所热爱的就是你的生活
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 13,
                marginLeft: 25,
                fontWeight: "bold",
              }}
            >
              赞助作者 &gt;
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* 菜单项 */}
      <View style={styles.menuSection}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigateToPath("/(tabs)/fortune")}
        >
          <AntDesign name="home" size={22} color={theme.colors.primary} />
          <Text style={[styles.menuText, { color: theme.colors.primary }]}>
            首页
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigateToPath("/(tabs)/mine")}
        >
          <AntDesign name="star" size={22} color={theme.colors.primary} />
          <Text style={[styles.menuText, { color: theme.colors.primary }]}>
            我的收藏
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigateToPath("/settings")}
        >
          <AntDesign name="setting" size={22} color={theme.colors.primary} />
          <Text style={[styles.menuText, { color: theme.colors.primary }]}>
            设置
          </Text>
        </TouchableOpacity>
      </View>

      {/* 底部区域 */}
      <View
        style={[
          styles.bottomSection,
          { borderTopColor: theme.colors.outlineVariant },
        ]}
      >
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigateToPath("/sign-in")}
        >
          <AntDesign name="logout" size={24} color={theme.colors.primary} />
          <Text style={[styles.menuText, { color: theme.colors.primary }]}>
            退出登录
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    // paddingTop: 16,
  },
  userSection: {
    margin: 16,
    borderRadius: 12,
    elevation: 4,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    marginRight: 12,
  },
  userTextContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    opacity: 0.8,
  },
  menuSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 12,
    fontWeight: "500",
  },
  bottomSection: {
    marginTop: "auto",
    paddingHorizontal: 16,
    paddingBottom: 20,
    borderTopWidth: 1,
    paddingTop: 20,
  },
});
