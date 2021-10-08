import { Content } from 'native-base';
import React from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
interface MainContentProps {
  loadingIndicator?: boolean;
  loadAction?: () => void;
}

const MainContent: React.FC<MainContentProps> = ({
  loadingIndicator,
  loadAction,
  children
}) => {
  const loading = loadingIndicator || false;

  const styles = StyleSheet.create({
    content: {
      flex: 1,
      padding: 10
    }
  });

  return (
    <Content
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={loadAction} />
      }
    >
      {children}
    </Content>
  );
};

export default MainContent;
