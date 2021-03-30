import React from 'react';
import { ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import Colors from './constants/Colors';
import AppNavContainer from './navigation/AppNavContainer';
import store from './store';

export default function App() {
  const [fontsLoaded] = useFonts({
    RussoOne: require('./assets/fonts/RussoOne-Regular.ttf'),
    LatoBold: require('./assets/fonts/Lato-Bold.ttf'),
    LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <ActivityIndicator size={Platform.OS === 'android' ? 20 : 'large'} color={Colors.darkBlue} />
    )
  }

  return (
    <Provider store={store}>
      <AppNavContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
