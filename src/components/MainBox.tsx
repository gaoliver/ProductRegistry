import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface IMainBoxProps {
  boxStyle?: StyleProp<ViewStyle>;
}

const MainBox: React.FC<IMainBoxProps> = ({ boxStyle, children }) => {
  return <View style={[styles.form, boxStyle]}>{children}</View>;
};

export default MainBox;

const styles = StyleSheet.create({
  form: {
    width: '80%',
    minHeight: 235,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ddd',
    elevation: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 3,
    shadowOpacity: 0.3
  }
});
