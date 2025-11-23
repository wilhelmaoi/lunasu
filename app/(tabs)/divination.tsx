// app/(tabs)/divination.tsx
import Tarot from "@/src/components/Tarot";
import { useI18n } from "@/src/i18n/I18nProvider";
import { useTheme } from "@/src/theme/ThemeContext";
import React, { useState } from "react";
import { Modal, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Surface, Text } from "react-native-paper";

interface QuestionItem {
  key: string;
  icon?: string;
}

const questionKeys: QuestionItem[] = [
  { key: 'today' },
  { key: 'love' },
  { key: 'career' },
  { key: 'health' },
  { key: 'finance' },
  { key: 'relationship' },
];

export default function Divination() {
  const { t } = useI18n();
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const handleQuestionPress = (questionKey: string) => {
    setSelectedQuestion(questionKey);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedQuestion(null);
  };

  return (
    <Surface style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title, { color: theme.colors.onSurface }]}>
          {t('divination.title')}
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.onSurface }]}>
          {t('divination.subtitle')}
        </Text>

        <View style={styles.questionsContainer}>
          {questionKeys.map((item) => (
            <TouchableOpacity
              key={item.key}
              onPress={() => handleQuestionPress(item.key)}
              activeOpacity={0.7}
            >
              <Card 
                style={[
                  styles.questionCard,
                  { backgroundColor: theme.colors.surface }
                ]}
              >
                <Card.Content style={styles.cardContent}>
                  <Text style={[styles.questionText, { color: theme.colors.onSurface }]}>
                    {t(`divination.questions.${item.key}`)}
                  </Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBg}>
          <View style={[styles.modalContent, { backgroundColor: theme.colors.surface }]}>
            {selectedQuestion && (
              <Text style={[styles.modalTitle, { color: theme.colors.onSurface }]}>
                {t(`divination.questions.${selectedQuestion}`)}
              </Text>
            )}
            <View style={styles.tarotContainer}>
              <Tarot />
            </View>
            <TouchableOpacity
              style={[styles.closeButton, { backgroundColor: theme.colors.primary }]}
              onPress={handleCloseModal}
            >
              <Text style={styles.closeButtonText}>
                {t('divination.close')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    opacity: 0.7,
  },
  questionsContainer: {
    gap: 16,
  },
  questionCard: {
    marginBottom: 0,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxWidth: 500,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    maxHeight: '90%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tarotContainer: {
    width: '100%',
    minHeight: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
