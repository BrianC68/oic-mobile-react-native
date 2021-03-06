import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import DrawerToggle from '../components/UI/DrawerToggle';

const PublicSkateScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (() =>
        <DrawerToggle navigation={navigation} />
      )
    })
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Public Skate</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: Colors.darkBlue,
  }
});

export default PublicSkateScreen;
