import { useTheme } from "@/src/theme/ThemeContext";
import { Directory, File, Paths } from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Card, Text } from "react-native-paper";

const sponsorTiers = [
  { price: 2.88, label: "小额支持", desc: "请作者喝一杯柠檬水" },
  { price: 5.88, label: "进阶支持", desc: "请作者吃一顿拼好饭" },
  { price: 9.88, label: "超级支持", desc: "请作者喝一杯奶茶" },
];

const alipayQRCodes = [
  "https://sunote.s3.cn-south-1.jdcloud-oss.com/sponsor/sponsor2.88.jpg",
  "https://sunote.s3.cn-south-1.jdcloud-oss.com/sponsor/sponsor5.88.jpg",
  "https://sunote.s3.cn-south-1.jdcloud-oss.com/sponsor/sponsor9.88.jpg",
];

export default function SponsorScreen() {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentQR, setCurrentQR] = useState(0);
  const [permission, requestPermission] = MediaLibrary.usePermissions();

  const handleSponsor = (idx: number) => {
    setCurrentQR(idx);
    setModalVisible(true);
  };

  const handleLongPress = async () => {
    try {
      const { granted } = await MediaLibrary.requestPermissionsAsync();
      if (!granted) {
        Alert.alert("权限不足", "请在设置中允许访问相册权限");
        return;
      }
  
      // 缓存目录
      const cacheDir = new Directory(Paths.cache);
      const file = new File(cacheDir, `qr_${currentQR}.jpg`);
  
      // 下载
      const result = await File.downloadFileAsync(alipayQRCodes[currentQR], file);
      if (!result.exists) throw new Error("下载失败");
  
      // 保存到相册
      await MediaLibrary.saveToLibraryAsync(file.uri);
      Alert.alert("保存成功", "二维码已保存到相册");
    } catch (e) {
      console.error("保存错误:", e);
      Alert.alert("保存失败", "无法保存二维码");
    }
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={styles.title}>赞助作者</Text>
      <Text style={styles.tip}>lunasu可能会倒闭，但永远不会变质</Text>

      {sponsorTiers.map((tier, idx) => (
        <Card key={tier.price} style={styles.card}>
          <Card.Content>
            <Text style={styles.price}>¥{tier.price}</Text>
            <Text style={styles.label}>{tier.label}</Text>
            <Text style={styles.desc}>{tier.desc}</Text>
            <TouchableOpacity style={styles.payBtn} onPress={() => handleSponsor(idx)}>
              <Text style={styles.payBtnText}>支付宝支付</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      ))}

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBg}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>请用支付宝扫码支付</Text>
            <TouchableOpacity activeOpacity={1} onLongPress={handleLongPress} delayLongPress={400}>
              <Image
                source={{ uri: alipayQRCodes[currentQR] }}
                style={styles.qrImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.hint}>长按二维码可保存到相册</Text>
            <TouchableOpacity style={[styles.payBtn, { width: 200 }]} onPress={() => setModalVisible(false)}>
              <Text style={styles.payBtnText}>关闭</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  tip: { fontSize: 14, color: "#888", marginBottom: 20, textAlign: "center" },
  card: { marginBottom: 18, borderRadius: 12, elevation: 2 },
  price: { fontSize: 22, fontWeight: "bold", color: "#E85C8A", marginBottom: 6 },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 2 },
  desc: { fontSize: 13, color: "#666", marginBottom: 10 },
  payBtn: {
    backgroundColor: "#E85C8A",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 6,
  },
  payBtnText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  modalBg: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" },
  modalContent: { backgroundColor: "#fff", borderRadius: 16, padding: 20, alignItems: "center" },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#333" },
  qrImage: { width: 220, height: 220, borderRadius: 12, marginBottom: 10 },
  hint: { color: "#888", fontSize: 13, marginBottom: 10 },
});
