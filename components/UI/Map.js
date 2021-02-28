import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Linking from 'expo-linking';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Map = () => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        region={{
          latitude: 43.278680,
          longitude: -87.976150,
          latitudeDelta: 0.056288,
          longitudeDelta: 0.054620,
        }}
        style={{ flex: 1 }}
        cacheEnabled={true}
        scrollEnabled={false}
      >
        <Marker
          title='Ozaukee Ice Center'
          description='5505 W. Pioneer Road, Mequon, WI 53097'
          coordinate={{
            latitude: 43.278680,
            longitude: -87.976150,
          }}
        />
      </MapView>
    </View>
  )
};

const styles = StyleSheet.create({
  mapContainer: {
    width: SCREEN_WIDTH * .90,
    height: SCREEN_HEIGHT * .30,
  },
});

export default Map;
