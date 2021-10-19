import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

interface IProps {
  text: string;
  onPress?: () => void;
  type?: 'primary' | 'accent' | 'other';
  color?: string;
}

const translate = (props: IProps) => ({
  text: props.text ? props.text : 'Button',
  onPress: props.onPress ? props.onPress : () => {},
  type: props.type ? props.type : 'other',
  color: props.color ? props.color : Colors.colors.primary
});

const MainButton = (props: IProps) => {
  const { text, onPress, type, color } = translate(props);

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
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: getType(),
      borderRadius: 5
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.light.accentText
    }
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
