import React from 'react';
import { Text, View, ScrollView, StyleSheet, } from 'react-native';

import Colors from '../../constants/Colors';

const FigureSkatingScreen = () => {
  return (
    <View style={styles.screen}>
      <View>
        <View style={styles.messageContainer}>
          <Text style={[styles.text, { color: Colors.darkBlue, marginVertical: 10, }]}>
            Due to Covid-19, there will be no public skate until further notice.{'\n\n'}
            Check back for more updates.
          </Text>
        </View>
        <Text style={styles.text}>
          Public skate is offered throughout the year, typically on Saturday's and Sunday's.
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
                Cost:
            </Text>
            </View>
            <View style={styles.colRight}>
              <Text style={[styles.text, { fontSize: 16, }]}>
                $4 Admission{'\n'}
                $3 Skate Rental
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.colLeft}>
              <Text style={styles.header}>
                Skate Sizes:
            </Text>
            </View>
            <View style={styles.colRight}>
              <Text style={[styles.text, { fontSize: 16, }]}>
                Toddler 6 to Adult 13
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
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
  },
  messageContainer: {
    backgroundColor: '#f8d7da',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default FigureSkatingScreen;
