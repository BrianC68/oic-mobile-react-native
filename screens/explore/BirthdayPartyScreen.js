import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Colors from '../../constants/Colors';
import Button from '../../components/UI/Button';

const BirthdayPartyScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View>
          <Text style={styles.titleText}>Birthday Parties @ OIC</Text>
          <View style={styles.covid}>
            <Text style={[styles.text, { color: Colors.darkBlue, marginBottom: 10, }]}>
              Due to Covid-19, we will not be hosting Birthday Parties until further notice.  If you would like to book a Private Party, please contact us.
          </Text>
            <Button
              buttonText='Contact OIC'
              buttonStyles={{
                backgroundColor: Colors.darkBlue,
              }}
              textStyles={{
                color: 'white',
              }}
              onPress={() => { navigation.navigate('Contact') }}
            />
          </View>
        </View>
        <Text style={styles.subTitle}>Celebrate your Birthday at the Ozaukee Ice Center!</Text>
        <View>
          <View style={styles.packageDetails}>
            <Text style={styles.subTitle}>Public Skate Party Package</Text>
            <Text style={styles.subTitle}>$100 Includes:</Text>
            <Text style={styles.text}>Invite up to 10 friends</Text>
            <Text style={styles.text}>Admission and skate rental</Text>
            <Text style={styles.text}>Two slices of pizza or one hotdog per person</Text>
            <Text style={styles.text}>Two pitchers of soda and popcorn</Text>
            <Text style={styles.text}>$10 each additional guest</Text>
          </View>
        </View>
        <View style={styles.contact}>
          <Text style={[styles.text, { marginBottom: 10, color: Colors.darkBlue }]}>For more information on Public Skate Party Package,
          or to inquire about a Private Party, please contact us.</Text>
          <Button
            buttonText='Contact OIC'
            buttonStyles={{
              backgroundColor: Colors.darkBlue,
            }}
            textStyles={{
              color: 'white',
            }}
            onPress={() => { navigation.navigate('Contact') }}
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
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  titleText: {
    fontFamily: 'RussoOne',
    fontSize: 20,
    color: Colors.green,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'LatoBold',
    color: Colors.darkBlue,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: 'LatoRegular',
    color: Colors.green,
    paddingVertical: 5,
  },
  packageDetails: {
    // justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.darkBlue,
    borderRadius: 5,
    padding: 10,
  },
  covid: {
    width: '80%',
    backgroundColor: '#f8d7da',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  contact: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  }
});

export default BirthdayPartyScreen;
