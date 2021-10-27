import { CheckBox } from 'native-base';
import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Colors from '../constants/Colors';

interface ICheckboxInputProps {
  label: string;
  checked?: boolean;
  color?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const translate = (props: ICheckboxInputProps) => ({
  label: props.label ? props.label : '',
  checked: props.checked ? props.checked : false,
  color: props.color ? props.color : Colors.colors.primary,
  onPress: props.onPress ? props.onPress : () => {},
  style: props.style ? props.style : {}
});

const CheckboxInput = (props: ICheckboxInputProps) => {
  const { label, checked, color, onPress, style } = translate(props);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{label}</Text>
      <CheckBox
        style={styles.checkbox}
        color={color}
        checked={checked}
        onPress={onPress}
      />
    </View>
  );
};

export default CheckboxInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: Colors.light.text
  },
  checkbox: {
    borderRadius: 5,
    transform: [{ scale: 0.9 }]
  }
});
