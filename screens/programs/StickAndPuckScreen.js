import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Button from '../../components/UI/Button';

const StickAndPuckScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.text}>
          {'Stick and Puck sessions are available for kids and adults of all ages.  To participate in Stick and Puck sessions, you must register and pay using OICWebApps.\r\n\r\nParents and Guardians may register minor children for stick and puck sessions once you have signed up for an OICWebApps account.'}
        </Text>
        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <View style={styles.colLeft}>
              <Text style={styles.header}>
                When:
              </Text>
            </View>
            <View style={styles.colRight}>
              <Text style={[styles.text, { fontSize: 16, }]}>
                Various dates and times throughout the year
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.colLeft}>
              <Text style={styles.header}>
                Limited to:
              </Text>
            </View>
            <View style={styles.colRight}>
              <Text style={[styles.text, { fontSize: 16, }]}>
                22 Skaters
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.colLeft}>
              <Text style={styles.header}>
                Cost:
              </Text>
            </View>
            <View style={styles.colRight}>
              <Text style={[styles.text, { fontSize: 16, }]}>
                Skaters $10, Goalies $10
              </Text>
            </View>
          </View>
        </View>
        <Button
          buttonText='OICWebApps'
          buttonStyles={{
            backgroundColor: Colors.darkBlue,
          }}
          textStyles={{
            color: 'white',
          }}
          onPress={() => navigation.navigate('OICWebApps')}
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
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  text: {
    fontFamily: 'LatoRegular',
    fontSize: 18,
    color: Colors.darkBlue,
    marginBottom: 10,
  },
  infoContainer: {
    borderColor: Colors.green,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
  colLeft: {
    width: '30%'
  },
  colRight: {
    width: '70%'
  },
  header: {
    fontFamily: 'LatoBold',
    fontSize: 16,
    color: Colors.green,
  }
});

export default StickAndPuckScreen;
