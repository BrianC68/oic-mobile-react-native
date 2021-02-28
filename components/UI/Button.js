import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet
} from 'react-native';

const CustomButton = ({ onPress, buttonStyles, textStyles, buttonText }) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.btnContainer}>
      <ButtonComponent onPress={onPress}>
        <View style={[styles.btn, buttonStyles]}>
          <Text style={[styles.text, textStyles]}>{buttonText}</Text>
        </View>
      </ButtonComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 10,
    marginVertical: 20,
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'LatoBold',
    fontSize: 18,
  }
});

export default CustomButton;
