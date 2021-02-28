import React from 'react';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../../constants/Colors';

import HeaderButton from './HeaderButton';

const DrawerToggle = ({ navigation }) => {
  return (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Menu'
        iconName='bars'
        buttonStyle={{ color: Platform.OS === 'ios' ? Colors.green : Colors.chartreuse }}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </HeaderButtons>
  )
}

export default DrawerToggle;
