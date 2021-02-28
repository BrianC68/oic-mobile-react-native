import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import Colors from '../../constants/Colors';
import Button from '../../components/UI/Button';

const Covid19Screen = () => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>Keeping you safe and on the ice!</Text>
        <View style={styles.row}>
          <View style={styles.colLeft}>
            <FontAwesome5 name='comment-medical' size={20} color={Colors.green} />
          </View>
          <View style={styles.colRight}>
            <Text style={styles.text}>
              Daily+ disinfecting of all door handles, restrooms, locker rooms and benches
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.colLeft}>
            <FontAwesome5 name='comment-medical' size={20} color={Colors.green} />
          </View>
          <View style={styles.colRight}>
            <Text style={styles.text}>
              Weekly+ disinfecting of restrooms and locker rooms with ozone
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.colLeft}>
            <FontAwesome5 name='comment-medical' size={20} color={Colors.green} />
          </View>
          <View style={styles.colRight}>
            <Text style={styles.text}>
              Allowing for extra time between user groups to limit cross-contact, when possible
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.colLeft}>
            <FontAwesome5 name='comment-medical' size={20} color={Colors.green} />
          </View>
          <View style={styles.colRight}>
            <Text style={styles.text}>
              Limiting locker room use and/or extra locker room space for social distancing
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.colLeft}>
            <FontAwesome5 name='comment-medical' size={20} color={Colors.green} />
          </View>
          <View style={styles.colRight}>
            <Text style={styles.text}>
              Limiting traffic flow and spectators, when possible
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.colLeft}>
            <FontAwesome5 name='comment-medical' size={20} color={Colors.green} />
          </View>
          <View style={styles.colRight}>
            <Text style={styles.text}>
              Promoting that all patrons and employees follow Gov Evers Mask Order
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.colLeft}>
            <FontAwesome5 name='comment-medical' size={20} color={Colors.green} />
          </View>
          <View style={styles.colRight}>
            <Text style={styles.text}>
              Adhering to the Wash/Oz County Health Department Guidelines on Facility Capacity
            </Text>
          </View>
        </View>
        <Text style={styles.title}>When should I NOT enter the facility?</Text>
        <View style={{ paddingHorizontal: 30, paddingTop: 10 }}>
          <Text style={[styles.text, { fontSize: 14, fontFamily: 'LatoBold', color: 'red' }]}>You should NOT enter the facility if you have ...</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.colLeft}>
            <FontAwesome5 name='comment-medical' size={20} color={Colors.green} />
          </View>
          <View style={styles.colRight}>
            <Text style={styles.text}>
              A temperature of 100.4F or higher
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.colLeft}>
            <FontAwesome5 name='comment-medical' size={20} color={Colors.green} />
          </View>
          <View style={styles.colRight}>
            <Text style={styles.text}>
              New symptoms including Cough or Shortness of Breath
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.colLeft}>
            <FontAwesome5 name='comment-medical' size={20} color={Colors.green} />
          </View>
          <View style={styles.colRight}>
            <Text style={styles.text}>
              If you or someone in your household has a positive or pending test for Covid-19
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.colLeft}>
            <FontAwesome5 name='comment-medical' size={20} color={Colors.green} />
          </View>
          <View style={styles.colRight}>
            <Text style={styles.text}>
              Recently come in close contact with someone diagnosed with Covid-19
            </Text>
          </View>
        </View>
        <Text style={[styles.text, { color: 'red', fontFamily: 'LatoBold', marginBottom: 20 }]}>Thank you for helping keep the OIC safe and healthy!</Text>
        <Button
          buttonText='WI DHS Covid-19 Info'
          buttonStyles={{
            backgroundColor: Colors.green,
          }}
          textStyles={{
            color: 'white',
          }}
          onPress={() => Linking.openURL('https://www.dhs.wisconsin.gov/covid-19/index.htm')}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'RussoOne',
    fontSize: 16,
    color: Colors.green,
    paddingTop: 20,
    // paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    color: Colors.darkBlue,
    fontFamily: 'LatoRegular',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  colLeft: {
    width: '10%',
  },
  colRight: {
    width: '90%',
  },
});

export default Covid19Screen;
