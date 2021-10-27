import { Content } from 'native-base';
import React from 'react';
import { RefreshControl, StyleProp, StyleSheet, ViewStyle } from 'react-native';
interface IMainContentProps {
  loadingIndicator?: boolean;
  loadAction?: () => void;
  contentStyle?: StyleProp<ViewStyle>;
}

const translator = (props: IMainContentProps) => ({
  loadingIndicator: props.loadingIndicator ? props.loadingIndicator : false,
  loadAction: props.loadAction ? props.loadAction : () => {},
  contentStyle: props.contentStyle ? props.contentStyle : {}
});

const MainContent: React.FC<IMainContentProps> = (props) => {
  const { contentStyle, loadAction, loadingIndicator } = translator(props);
  const loading = loadingIndicator || false;

  const styles = StyleSheet.create({
    content: {
      flex: 1,
      padding: 10
    }
  });

  return (
    <Content
      contentContainerStyle={[styles.content, contentStyle]}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={loadAction} />
      }
    >
      {props.children}
    </Content>
  );
};

export default MainContent;
