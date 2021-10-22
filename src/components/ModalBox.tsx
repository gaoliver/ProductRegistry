import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';

import MainBox from './MainBox';

interface IProps {
  isVisible: boolean;
  onDismiss: () => void;
  boxStyle?: StyleProp<ViewStyle>;
}

const translator = (props: IProps) => ({
  isVisible: props.isVisible ? props.isVisible : false,
  boxStyle: props.boxStyle ? props.boxStyle : {},
  onDismiss: props.onDismiss ? props.onDismiss : () => {}
});

const ModalBox: React.FC<IProps> = (props) => {
  const { isVisible, onDismiss, boxStyle } = translator(props);

  return (
    <ReactNativeModal
      isVisible={isVisible}
      style={styles.modal}
      onDismiss={onDismiss}
    >
      <MainBox boxStyle={[styles.modalBox, boxStyle]}>
        <View style={styles.modalHeader}>
          <Pressable onPress={onDismiss}>
            <AntDesign name="close" size={20} />
          </Pressable>
        </View>
        <View style={styles.body}>{props.children}</View>
      </MainBox>
    </ReactNativeModal>
  );
};

export default ModalBox;

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalBox: {
    padding: 0,
    paddingBottom: 10,
    paddingHorizontal: 10,
    minHeight: 0,
    justifyContent: 'flex-start'
  },
  modalHeader: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'flex-end'
  },
  body: {
    minHeight: 50,
    justifyContent: 'center'
  },
  title: {},
  message: {}
});
