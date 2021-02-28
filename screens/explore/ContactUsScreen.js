import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import Map from '../../components/UI/Map';
import Button from '../../components/UI/Button';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const ContactUsScreen = () => {

  const addr = '5505 West Pioneer Road, Mequon, WI 53097';
  const url = Platform.OS === 'android' ? 'google.navigation:q=43.278680,-87.976150' : `maps://?daddr=${addr}`;

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.address}>
          <Text style={styles.text}>Ozaukee Ice Center</Text>
          <Text style={styles.text}>5505 W Pioneer Road</Text>
          <Text style={styles.text}>Mequon, WI 53097</Text>
        </View>
        <View style={styles.address}>
          <Text style={styles.text}>Chris Donovan</Text>
          <Text style={styles.text}>General Manager</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('tel:262-305-9981')}
            style={styles.phone}
          >
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'LatoRegular' }}>262-305-9981</Text>
            <FontAwesome5 name='phone-square' color={Colors.darkBlue} size={34} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('mailto:ozicecenter@gmail.com')}
            style={styles.phone}
          >
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'LatoRegular' }}>Email</Text>
            <FontAwesome5 name='envelope-square' color={Colors.darkBlue} size={34} />
          </TouchableOpacity>
        </View>
        <Map />
        <View style={styles.btnContainer}>
          <Button
            buttonText='Get Directions'
            buttonStyles={{
              backgroundColor: Colors.darkBlue,
            }}
            textStyles={{
              color: 'white',
            }}
            onPress={() => Linking.openURL(url)}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 120,
    paddingTop: 20,
    height: '100%'
  },
  text: {
    fontFamily: 'LatoRegular',
    fontSize: 18,
    color: Colors.darkBlue,
  },
  address: {
    alignItems: 'center',
    marginBottom: 30,
    width: SCREEN_WIDTH <= 320 ? '60%' : '50%',
  },
  btnContainer: {
    marginTop: 30,
  },
  phone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: Colors.green,
    marginTop: 20,
    borderRadius: 5,
    elevation: 10,
  }
});

export default ContactUsScreen;
