import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Button from '../../components/UI/Button';
import Colors from '../../constants/Colors';

const FigureSkatingScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Image source={require('../../assets/images/figure-skating.jpg')} style={styles.image} resizeMethod='scale' />
      <View>
        <Text style={styles.text}>
          Figure skating is open to any competitive figure skater.  To participate in open figure skating sessions,
          you must register and pay using OICWebApps.
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
                15 Skaters
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
                $15 per session
            </Text>
            </View>
          </View>
        </View>
        <Button
          buttonText='OICWebApps'
          buttonStyles={{
            backgroundColor: Colors.green,
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
    marginBottom: 10,
    color: Colors.darkBlue,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
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
    color: Colors.green
  }
});

export default FigureSkatingScreen;
