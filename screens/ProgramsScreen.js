import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import DrawerToggle from '../components/UI/DrawerToggle';
import Card from '../components/Card';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const ProgramsScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (() =>
        <DrawerToggle navigation={navigation} />
      )
    })
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <Card
          title='Figure Skating'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.darkBlue,
            borderColor: Colors.darkBlue,
          }}
          iconName='skating'
          iconColor={Colors.green}
          onPress={() => navigation.navigate('Program Detail', {
            programId: 3
          })}
        />
        <Card
          title='Stick and Puck'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.green,
            borderColor: Colors.green,
          }}
          iconName='hockey-puck'
          iconColor={Colors.darkBlue}
          onPress={() => navigation.navigate('Program Detail', {
            programId: 2
          })}
        />
      </View>
      <View style={styles.row}>
        <Card
          title='Bald Eagles'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.green,
            borderColor: Colors.green,
          }}
          icon={<MaterialCommunityIcons name='hockey-sticks' size={60} color={Colors.darkBlue} />}
          onPress={() => navigation.navigate('Program Detail', {
            programId: 9
          })}
        />
        <Card
          title='Lady Hawks'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.darkBlue,
            borderColor: Colors.darkBlue,
          }}
          icon={<MaterialIcons name='sports-hockey' size={60} color={Colors.green} />}
          onPress={() => navigation.navigate('Program Detail', {
            programId: 10
          })}
        />
      </View>
      <View style={styles.row}>
        <Card
          title='Learn to Skate'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.darkBlue,
            borderColor: Colors.darkBlue,
          }}
          icon={<MaterialCommunityIcons name='skate' size={60} color={Colors.green} />}
          onPress={() => navigation.navigate('Learn to Skate')}
        />
        <Card
          title='Public Skate'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.green,
            borderColor: Colors.green,
          }}
          iconName='skating'
          iconColor={Colors.darkBlue}
          onPress={() => navigation.navigate('Public Skate')}
        />
      </View>
      <View style={styles.row}>
        <Card
          title='Open Hockey'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.green,
            borderColor: Colors.green,
          }}
          icon={<MaterialCommunityIcons name='hockey-sticks' size={60} color={Colors.darkBlue} />}
          onPress={() => navigation.navigate('Program Detail', {
            programId: 1,
          })}
        />
        <Card
          title='Birthday Party'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.darkBlue,
            borderColor: Colors.darkBlue,
          }}
          iconName='birthday-cake'
          iconColor={Colors.green}
          onPress={() => navigation.navigate('Birthday')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    color: Colors.darkBlue,
  },
  row: {
    // flexDirection: Dimensions.get('screen').width < 321 ? 'column' : 'row',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: SCREEN_HEIGHT <= 600 ? 10 : 20,
  }
});

export default ProgramsScreen;
