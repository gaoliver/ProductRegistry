import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import MainButton from './MainButton';
import ModalBox from './ModalBox';

interface IAlertBoxProps {
  isVisible: boolean;
  title?: string;
  message?: string;
  hideButton?: 'cancel' | 'ok' | 'both' | 'none';
  okButton?: string;
  onDismiss?: () => void;
  onOk?: () => void;
  onCancel?: () => void;
}

const translator = (props: IAlertBoxProps) => ({
  isVisible: props.isVisible ? props.isVisible : false,
  title: props.title ? props.title : '',
  message: props.message ? props.message : '',
  hideButton: props.hideButton ? props.hideButton : 'none',
  okButton: props.okButton ? props.okButton : 'ok',
  onDismiss: props.onDismiss ? props.onDismiss : () => {},
  onOk: props.onOk ? props.onOk : () => {},
  onCancel: props.onCancel ? props.onCancel : () => {}
});

const AlertBox = (props: IAlertBoxProps) => {
  const {
    isVisible,
    title,
    message,
    onDismiss,
    hideButton,
    okButton,
    onOk,
    onCancel
  } = translator(props);

  return (
    <ModalBox
      isVisible={isVisible}
      onDismiss={onDismiss}
      boxStyle={styles.boxStyle}
    >
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {message ? <Text style={styles.message}>{message}</Text> : null}
      {hideButton !== 'both' && (
        <View style={styles.buttons}>
          {hideButton !== 'cancel' && (
            <MainButton
              text="Cancelar"
              width="45%"
              type="accent"
              onPress={onCancel}
            />
          )}
          {hideButton !== 'ok' && (
            <MainButton text={okButton} width="45%" onPress={onOk} />
          )}
        </View>
      )}
    </ModalBox>
  );
};

export default AlertBox;

const styles = StyleSheet.create({
  boxStyle: {
    alignItems: 'flex-start'
  },
  title: {
    paddingBottom: 10,
    fontSize: 24,
    color: Colors.light.text
  },
  message: {
    fontSize: 16,
    color: Colors.light.text,
    marginBottom: 10
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-between'
  }
});
