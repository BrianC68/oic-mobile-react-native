import React from 'react';
import { View, Text, StyleSheet, Dimensions, Linking } from 'react-native';

import Colors from '../../constants/Colors';
import Card from '../../components/Card';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const SocialScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Follow OIC on...</Text>
      <View style={styles.cardHolder}>
        <Card
          title='Twitter'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.green,
            borderColor: Colors.green,
            width: SCREEN_WIDTH * .9,
          }}
          iconName='twitter'
          iconColor={Colors.darkBlue}
          onPress={() => Linking.openURL('https://twitter.com/OzaukeeIce')}
        />
      </View>
      <View style={styles.cardHolder}>
        <Card
          title='Facebook'
          titleColor={Colors.chartreuse}
          cardContainerStyles={{
            backgroundColor: Colors.darkBlue,
            borderColor: Colors.darkBlue,
            width: SCREEN_WIDTH * .9,
          }}
          iconName='facebook'
          iconColor={Colors.darkBlue}
          onPress={() => Linking.openURL('https://www.facebook.com/ozaukeeicecenter')}
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
    color: 'white',

  },
  title: {
    fontSize: 20,
    color: Colors.green,
    fontFamily: 'RussoOne',
  },
  cardHolder: {
    marginVertical: 20
  }
});

export default SocialScreen;
