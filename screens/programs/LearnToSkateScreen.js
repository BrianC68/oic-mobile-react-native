import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';

import Button from '../../components/UI/Button';
import Colors from '../../constants/Colors';

const LearnToSkateScreen = () => {
  return (
    <View style={styles.screen}>
      <Button
        buttonText='Learn To Skate Information'
        buttonStyles={{
          backgroundColor: Colors.green,
        }}
        textStyles={{
          color: 'white',
        }}
        onPress={() => Linking.openURL('https://www.ozaukeeicecenter.org/page/show/1223152-learn-to-skate')}
      />
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
});

export default LearnToSkateScreen;
