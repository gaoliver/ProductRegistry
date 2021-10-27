import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  Text
} from 'react-native';
import Colors from '../constants/Colors';
import { IVerifyField } from '../utils/types';

interface IMainTextInputProps {
  value: string;
  label?: string;
  status?: IVerifyField;
  inputRef?: any;
  warningMessage?: string;
  onChangeText?: (text: string) => void;
  inputProps?: TextInputProps;
}

const translate = (props: IMainTextInputProps) => ({
  value: props.value ? props.value : '',
  label: props.label ? props.label : '',
  status: props.status ? props.status : IVerifyField.empty,
  inputRef: props.inputRef ? props.inputRef : null,
  warningMessage: props.warningMessage
    ? props.warningMessage
    : 'Campo obrigatório.',
  onChangeText: props.onChangeText ? props.onChangeText : () => {},
  inputProps: props.inputProps
});

const MainTextInput = (props: IMainTextInputProps) => {
  const {
    value,
    label,
    inputRef,
    status,
    warningMessage,
    onChangeText,
    inputProps
  } = translate(props);
  const [showWarning, setShowWarning] = useState(false);
  const [color, setColor] = useState(Colors.colors.grey);

  const verifyStatus = () => {
    if (status === IVerifyField.ok) {
      setColor(Colors.colors.primary);
      setShowWarning(false);
    } else if (status === IVerifyField.wrong) {
      setColor(Colors.colors.accent);
      setShowWarning(true);
    } else {
      setColor(Colors.colors.grey);
      setShowWarning(false);
    }
  };

  React.useEffect(() => {
    verifyStatus();
  }, [status]);

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 70,
      marginTop: 5
    },
    input: {
      height: 45,
      paddingHorizontal: 10,
      borderRadius: 5,
      fontSize: 16,
      borderBottomWidth: 2,
      borderBottomColor: color,
      backgroundColor: '#d5d5d5'
    },
    warning: {
      fontSize: 12,
      color: Colors.colors.accent,
      marginTop: 5
    }
  });

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder={label}
        style={styles.input}
        onChangeText={onChangeText}
        placeholderTextColor="#999"
        ref={inputRef}
        {...inputProps}
      />
      {showWarning && <Text style={styles.warning}>{warningMessage}</Text>}
    </View>
  );
};

export default MainTextInput;
