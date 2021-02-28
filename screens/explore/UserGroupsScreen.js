import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Colors from '../../constants/Colors';

const UserGroupsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/images/icedogs.jpg')}
              style={styles.image}
              resizeMode='contain'
            />
          </View>
          <Text style={[styles.title, { color: Colors.green, marginTop: 20 }]}>Ozaukee Ice Dogs</Text>
          <Text style={[styles.subTitle, { color: Colors.darkBlue }]}>Ozaukee Youth Hockey Association</Text>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/images/concordia.jpg')}
              style={styles.image}
            />
          </View>
          <Text style={[styles.title, { color: '#005596' }]}>Concordia University Falcons</Text>
          <Text style={[styles.subTitle, { color: '#9e9e9e' }]}>Men's and Women's Hockey</Text>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/images/chs-hockey.jpg')}
              style={styles.image}
              resizeMode='contain'
            />
          </View>
          <Text style={[styles.title, { color: '#ef6c00' }]}>Cedarburg High School</Text>
          <Text style={[styles.subTitle, { color: 'black' }]}>Boy's JV and Varsity Hockey</Text>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/images/hhs-hockey.jpg')}
              style={styles.image}
              resizeMode='contain'
            />
          </View>
          <Text style={[styles.title, { color: 'red', marginTop: 20 }]}>Homestead High School</Text>
          <Text style={[styles.subTitle, { color: 'black' }]}>Boy's JV and Varsity Hockey</Text>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/images/lakeshore-lightning.png')}
              style={styles.image}
              resizeMode='contain'
            />
          </View>
          <Text style={[styles.title, { color: 'blue', marginTop: 20 }]}>Lakeshore Lightning Coop</Text>
          <Text style={[styles.subTitle, { color: 'steelblue' }]}>Girl's High School JV and</Text>
          <Text style={[styles.subTitle, { color: 'steelblue' }]}>Varsity Coop Hockey</Text>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/images/mke-power.png')}
              style={styles.image}
              resizeMode='contain'
            />
          </View>
          <Text style={[styles.title, { color: 'black', marginTop: 20 }]}>Milwaukee Power</Text>
          <Text style={[styles.subTitle, { color: 'red' }]}>USA Hockey-sanctioned Tier III Junior</Text>
          <Text style={[styles.subTitle, { color: 'red' }]}> organization playing NA3HL</Text>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/images/OCHL-logo.jpg')}
              style={styles.image}
              resizeMode='contain'
            />
          </View>
          <Text style={[styles.title, { color: '#283593', marginTop: 20 }]}>Ozaukee County Hockey League</Text>
          <Text style={[styles.subTitle, { color: '#9e9e9e' }]}>Adult League Hockey</Text>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.container}>
          {/* <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/images/lakeshore-lightning.png')}
              style={styles.image}
              resizeMode='contain'
            />
          </View> */}
          <Text style={[styles.title, { color: 'maroon', marginTop: 20 }]}>Ozaukee Women's Hockey League</Text>
          <Text style={[styles.subTitle, { color: '#ef9a9a' }]}>Adult Women's League Hockey</Text>
        </View>
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
    paddingVertical: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'RussoOne',
    fontSize: 18,
  },
  subTitle: {
    fontFamily: 'LatoRegular',
    fontSize: 16,
  },
  imgContainer: {
    height: 150,
    width: 250,
  },
  image: {
    height: 150,
    width: '100%',
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbd',
    width: '90%',
    marginVertical: 20,
  }
});

export default UserGroupsScreen;
