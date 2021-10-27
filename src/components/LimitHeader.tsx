import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Header } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Colors from '../constants/Colors';
import { StackParamList } from '../utils/types';

type NavigationProp = StackNavigationProp<StackParamList, 'MainHome'>;
interface ILimitHeaderProps {
  title: string;
}

const LimitHeader: React.FC<ILimitHeaderProps> = ({ title, children }) => {
  const navigation = useNavigation<NavigationProp>();

  const onGoBack = () => {
    navigation.goBack();
  };

  const styles = StyleSheet.create({
    headerContainer: {
      height: 150,
      flexDirection: 'column',
      paddingLeft: 0,
      paddingRight: 0,
      backgroundColor: Colors.light.header
    },
    largeSpace: {
      flex: 1,
      flexDirection: 'row',
      padding: 10
    },
    backContainer: {
      width: 35,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: Colors.colors.primary
    },
    back: {
      color: Colors.light.accentText
    },
    titleRow: {
      width: '100%',
      height: 40,
      backgroundColor: Colors.colors.primary,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.light.accentText
    }
  });

  return (
    <Header
      style={styles.headerContainer}
      androidStatusBarColor={Colors.light.statusbar}
    >
      <View style={styles.largeSpace}>
        <Pressable style={styles.backContainer} onPress={onGoBack}>
          <Text style={styles.back}>
            <Ionicons
              name="chevron-back"
              color={Colors.light.accentText}
              size={20}
            />
          </Text>
        </Pressable>
      </View>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Header>
  );
};

export default LimitHeader;
