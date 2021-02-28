import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import DrawerToggle from '../components/UI/DrawerToggle';
import Colors from '../constants/Colors';

const OICWebAppsScreen = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (() =>
        <DrawerToggle navigation={navigation} />
      )
    })
  }, [navigation]);

  const loading = () => {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size='large' color={Colors.green} />
      </View>
    )
  }

  return (
    <WebView startInLoadingState={true} renderLoading={() => { return loading() }} source={{ uri: 'https://www.oicwebapps.com' }} />
  )
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 150,
    backgroundColor: 'white',
    height: '100%',
  },
});

export default OICWebAppsScreen;
