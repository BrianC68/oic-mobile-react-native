import React, { useEffect } from 'react';
import { View, StyleSheet, Button, Platform } from 'react-native';
import * as Linking from 'expo-linking';

import Colors from '../constants/Colors';
import DrawerToggle from '../components/UI/DrawerToggle';
import Map from '../components/UI/Map';
import SplashAnimation from '../components/UI/SplashAnimation';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (() =>
        <DrawerToggle navigation={navigation} />
      )
    })
  }, [navigation]);

  const addr = '5505 West Pioneer Road, Mequon, WI 53097';
  const url = Platform.OS === 'android' ? 'google.navigation:q=43.278680,-87.976150' : `maps://?daddr=${addr}`;

  return (
    <View style={styles.screen}>
      <SplashAnimation />
      <Map />
      <View style={styles.btnContainer}>
        <Button
          title='Get Directions'
          color={Colors.darkBlue}
          onPress={() => Linking.openURL(url)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    color: Colors.darkBlue,
  },
  btnContainer: {
    marginTop: 50,
  },
});

export default HomeScreen;
