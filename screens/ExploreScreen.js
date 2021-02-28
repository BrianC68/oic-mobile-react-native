import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors';
import DrawerToggle from '../components/UI/DrawerToggle';
import Card from '../components/Card';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const ExploreScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (() =>
        <DrawerToggle navigation={navigation} />
      )
    })
  }, [navigation]);

  const onPressCard = (screen) => {
    navigation.navigate(screen);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <Card
          title='Contact Us'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.darkBlue,
            borderColor: Colors.darkBlue,
          }}
          iconName='phone-square'
          iconColor={Colors.green}
          onPress={() => onPressCard('Contact')}
        />
        <Card
          title='Covid-19'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.green,
            borderColor: Colors.green,
          }}
          iconName='pump-medical'
          iconColor={Colors.darkBlue}
          onPress={() => onPressCard('Covid-19')}
        />
      </View>
      <View style={styles.row}>
        <Card
          title={SCREEN_WIDTH > 320 ? 'Celebrate Here' : 'Celebrate'}
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.green,
            borderColor: Colors.green,
          }}
          iconName='birthday-cake'
          iconColor={Colors.darkBlue}
          onPress={() => onPressCard('Birthday')}
        />
        <Card
          title='User Groups'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.darkBlue,
            borderColor: Colors.darkBlue,
          }}
          iconName='users'
          iconColor={Colors.green}
          onPress={() => onPressCard('UserGroups')}
        />
      </View>
      <View style={styles.row}>
        <Card
          title='Social'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.darkBlue,
            borderColor: Colors.darkBlue,
          }}
          iconName='people-arrows'
          iconColor={Colors.green}
          onPress={() => onPressCard('Social')}
        />
        {/* <Card
          title='Birthday Party'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.green,
            borderColor: Colors.green,
          }}
          iconName='birthday-cake'
          iconColor={Colors.darkBlue}
          onPress={() => onPressCard('Birthday')}
        /> */}
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
    marginVertical: 20,
  }
});

export default ExploreScreen;
