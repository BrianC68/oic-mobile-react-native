import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';

import Colors from '../../constants/Colors';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const SplashAnimation = props => {
  const shrinkAnim = useRef(new Animated.Value(SCREEN_HEIGHT + 50)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    fadeAnimation();
    shrinkAnimation();
  }, []);

  const shrinkAnimation = () => {
    Animated.timing(shrinkAnim, {
      toValue: 0,
      duration: 3000,
      delay: 1000,
      useNativeDriver: false,
    }).start();
  };

  const fadeAnimation = () => {
    Animated.timing(fadeOut, {
      toValue: 0,
      duration: 2500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.screen}>
      <Animated.View style={[styles.shrinkingContainer,
      {
        height: shrinkAnim,
        width: shrinkAnim,
        borderRadius: shrinkAnim,
      }]}>
        <Animated.View style={[styles.animTextContainer,
        {
          opacity: fadeOut,
        }
        ]}>
          <Text
            style={styles.text}>Ozaukee Ice Center
          </Text>
        </Animated.View>
      </Animated.View>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    elevation: 12,
    position: 'absolute',
  },
  shrinkingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkBlue,
  },
  animTextContainer: {

  },
  text: {
    fontSize: 30,
    color: Colors.chartreuse,
    fontFamily: 'RussoOne',
  }
});

export default SplashAnimation;
