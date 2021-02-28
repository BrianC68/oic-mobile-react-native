import React, { useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, Linking } from 'react-native';

import Colors from '../constants/Colors';
import DrawerToggle from '../components/UI/DrawerToggle';
import Schedule from '../components/breakaway/Schedule';
import Button from '../components/UI/Button';

const BreakawayCrossfitScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (() =>
        <DrawerToggle navigation={navigation} />
      )
    })
  }, [navigation]);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ alignItems: 'center' }}>
      <Text style={styles.text}>Located in the South Lobby</Text>
      <Image
        source={require('../assets/images/breakaway-crossfit.jpg')}
        style={styles.image}
      />
      <View style={styles.sheduleContainer}>
        <View style={styles.header}><Text style={styles.headerText}>Schedule</Text></View>
        <Schedule />
      </View>
      <Button
        buttonText='Visit Website'
        buttonStyles={{
          backgroundColor: Colors.darkGray,
        }}
        textStyles={{
          color: 'white',
        }}
        onPress={() => Linking.openURL('https://www.thebreakawayprogram.com/')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: Colors.green,
    fontFamily: 'LatoBold',
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    fontFamily: 'LatoRegular',
    fontSize: 20,
    color: Colors.darkBlue,
    letterSpacing: 2,
    marginTop: 20,
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'stretch',
    marginTop: 20,
  },
  sheduleContainer: {
    // flex: 1,
    marginTop: 20,
    width: '95%',
    paddingHorizontal: 20,
  },
  schedule: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default BreakawayCrossfitScreen;
