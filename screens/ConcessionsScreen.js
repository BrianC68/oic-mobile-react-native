import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import DrawerToggle from '../components/UI/DrawerToggle';
import Card from '../components/Card';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const ConcessionsScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (() =>
        <DrawerToggle navigation={navigation} />
      )
    })
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <View style={styles.covid}>
        <FontAwesome5 name='exclamation-triangle' size={50} color='red' />
        <Text style={[styles.text, { color: Colors.darkBlue, marginBottom: 10, }]}>
          Due to Covid-19, concessions will be closed until further notice.
          </Text>
      </View>
      <Card
        title='Birthday Parties @ OIC!'
        titleColor={Colors.chartreuse}
        cardContainerStyles={{
          backgroundColor: Colors.green,
          borderColor: Colors.green,
          width: SCREEN_WIDTH * .9,
        }}
        iconName='birthday-cake'
        iconColor={Colors.darkBlue}
        onPress={() => navigation.navigate('Birthday')}
      />
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
    marginTop: 20,
  },
  covid: {
    width: '80%',
    backgroundColor: '#f8d7da',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    top: 20,
  },
});

export default ConcessionsScreen;
