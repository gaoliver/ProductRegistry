import { Spinner } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

interface IMainButtonProps {
  text: string;
  onPress?: () => void;
  type?: 'primary' | 'accent' | 'other';
  color?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  width?: any;
}

const translate = (props: IMainButtonProps) => ({
  text: props.text ? props.text : 'Button',
  type: props.type ? props.type : 'other',
  color: props.color ? props.color : Colors.colors.primary,
  onPress: props.onPress ? props.onPress : () => {},
  isLoading: props.isLoading ? props.isLoading : false,
  fullWidth: props.fullWidth ? props.fullWidth : false,
  width: props.width ? props.width : 'auto'
});

const MainButton = (props: IMainButtonProps) => {
  const { text, onPress, type, color, isLoading, fullWidth, width } =
    translate(props);

  const getType = () => {
    switch (type) {
      case 'primary':
        return Colors.colors.primary;
      case 'accent':
        return Colors.colors.accent;
      case 'other':
        return color;
      default:
        return color;
    }
  };

  const styles = StyleSheet.create({
    container: {
      width: fullWidth ? '100%' : width,
      minHeight:40,
      paddingVertical: 10,
      paddingHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: getType(),
      borderRadius: 5
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.light.accentText
    },
    spinner: {
      height: 0
    }
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {isLoading ? (
        <Spinner size={10} style={styles.spinner} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;
