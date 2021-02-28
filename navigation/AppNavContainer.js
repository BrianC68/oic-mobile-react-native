import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { DrawerNavigator } from './OICMobileNavigation';
import { Platform } from 'react-native';

const AppNavContainer = props => {
  return (
    <NavigationContainer>
      <StatusBar style={Platform.OS === 'android' ? 'light' : 'dark'} />
      <DrawerNavigator />
    </NavigationContainer>
  )
}

AppNavContainer.propTypes = {

}

export default AppNavContainer;
