import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Card = props => {
  const { cardContainerStyles, iconName, iconColor, titleColor, title, onPress, icon } = props;
  const Touchable = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View>
      <Touchable onPress={onPress} useForeground>
        <View style={{ ...styles.cardContainer, ...cardContainerStyles }}>
          <View style={styles.card}>
            <View style={styles.icon}>
              {icon ? icon :
                <FontAwesome5 name={iconName} color={iconColor} size={60} />}
            </View>
          </View>
          <Text style={{ ...styles.title, color: titleColor }}>{title}</Text>
        </View>
      </Touchable>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width / 2.5,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 18,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.36,
    elevation: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  title: {
    fontFamily: 'RussoOne',
    fontSize: 18,
  }
});

export default Card
