import React from 'react';
import { Platform, View } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { FontAwesome5 } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const CustomHeaderButton = props => {
  return (
    <View style={{ marginLeft: 10 }}>
      <HeaderButton
        {...props}
        IconComponent={FontAwesome5}
        iconSize={24}
        color={Platform.OS === 'android' ? Colors.chartreuse : Colors.darkBlue}
      />
    </View>
  )
}

export default CustomHeaderButton;
