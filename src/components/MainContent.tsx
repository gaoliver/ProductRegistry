import { Content, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

const MainContent: React.FC = ({ children }) => {
  const styles = StyleSheet.create({
    content: {
      flex: 1,
      padding: 10
    }
  });
  return <Content contentContainerStyle={styles.content}>{children}</Content>;
};

export default MainContent;
