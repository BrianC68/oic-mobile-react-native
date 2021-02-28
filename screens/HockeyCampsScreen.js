import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Linking
} from 'react-native';

import Colors from '../constants/Colors';
import DrawerToggle from '../components/UI/DrawerToggle';

const TouchableComponent = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;

const HockeyCampsScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (() =>
        <DrawerToggle navigation={navigation} />
      )
    })
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingTop: 20 }}>
        <Text style={styles.title}>Spring Hockey Camps 2021</Text>
        <View style={styles.campCardContainer}>
          <Text style={styles.cardTitle}>Monday Night Game Play</Text>
          <View style={styles.campCard}>
            <Text style={styles.text}>Game Play in varying formats to give players different looks and to promote creativity.</Text>
            <View style={styles.row}>
              <View style={styles.colLeft}>
                <Text style={styles.header}>Dates:</Text>
              </View>
              <View style={styles.colRight}>
                <Text style={styles.text}>Mondays, April 5 to May 24</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.colLeft}>
                <Text style={styles.header}>Age Levels:</Text>
              </View>
              <View style={styles.colRight}>
                <Text style={styles.text}>2011/2012: 6:10-7:10pm</Text>
                <Text style={styles.text}>2009/2010: 7:20-8:20pm</Text>
                <Text style={styles.text}>2007/2008: 8:30-9:30pm</Text>
                <Text style={styles.text}>Limit 36 skaters and 4 Goalies/Session</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.colLeft}>
                <Text style={styles.header}>Cost:</Text>
              </View>
              <View style={styles.colRight}>
                <Text style={styles.text}>$150/player, Goalies $75</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.campCardContainer}>
          <Text style={styles.cardTitle}>Thursday Night Powerskate</Text>
          <View style={styles.campCard}>
            <Text style={styles.text}>Total focus on powerskating to challenge players and push them out of their comfort zone.</Text>
            <View style={styles.row}>
              <View style={styles.colLeft}>
                <Text style={styles.header}>Dates:</Text>
              </View>
              <View style={styles.colRight}>
                <Text style={styles.text}>Thursdays, April 8 to May 27</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.colLeft}>
                <Text style={styles.header}>Age Levels:</Text>
              </View>
              <View style={styles.colRight}>
                <Text style={styles.text}>2010/2011/2012: 6:15-7:00pm</Text>
                <Text style={styles.text}>2007/2008/2009: 7:00-7:45pm</Text>
                <Text style={styles.text}>Limit 35 Skaters per session</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.colLeft}>
                <Text style={styles.header}>Lead Coaches:</Text>
              </View>
              <View style={styles.colRight}>
                <Text style={[styles.text, { fontFamily: 'LatoBold' }]}>Tony Navarre:</Text>
                <Text style={styles.text}>Head Coach, Homestead High School</Text>
                <Text style={[styles.text, { fontFamily: 'LatoBold' }]}>Brady Ament:</Text>
                <Text style={styles.text}>OYHA LTP/Mite Skills Coach Assistant Coach, Homestead High School</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.colLeft}>
                <Text style={styles.header}>Cost:</Text>
              </View>
              <View style={styles.colRight}>
                <Text style={styles.text}>$160</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableComponent onPress={() => Linking.openURL('https://ozaukeeicecenter.sportngin.com/register/form/899012115')} activeOpacity={0.5}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Register</Text>
            </View>
          </TouchableComponent>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingTop: 20,
  },
  campCardContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkBlue,
    borderRadius: 5,
    borderColor: Colors.green,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 20,
  },
  campCard: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    // justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: 'RussoOne',
    color: Colors.green,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'RussoOne',
    color: Colors.chartreuse,
    paddingVertical: 10,
  },
  header: {
    fontFamily: 'LatoBold',
    fontSize: 16,
    color: Colors.darkBlue,
  },
  text: {
    color: Colors.green,
    fontSize: 16,
    fontFamily: 'LatoRegular',
  },
  row: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  colLeft: {
    width: '25%'
  },
  colRight: {
    width: '75%',
  },
  btnContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
    width: '60%',

    elevation: 10,
  },
  btn: {
    backgroundColor: Colors.darkBlue,
    padding: 10,
    alignItems: 'center',
  },
  btnText: {
    color: Colors.chartreuse,
    fontFamily: 'RussoOne',
    fontSize: 16,
  }
});

export default HockeyCampsScreen;
