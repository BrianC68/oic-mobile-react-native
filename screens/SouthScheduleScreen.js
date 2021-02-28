import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';
import DrawerToggle from '../components/UI/DrawerToggle';
import RinkScheduleCard from '../components/schedule/RinkScheduleCard';

const SouthScheduleScreen = ({ navigation, schedule }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (() =>
        <DrawerToggle navigation={navigation} />
      )
    })
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <ScrollView style={{ width: '100%' }}>
        {schedule.map(event => (
          event.rink.includes('North') ? null : // Do not map north rink events
            <RinkScheduleCard key={event.id} data={event} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    color: Colors.darkBlue,
  }
});

SouthScheduleScreen.propTypes = {
  schedule: PropTypes.array,
}

const mapStateToProps = state => ({
  schedule: state.schedule.schedule,
});

export default connect(mapStateToProps)(SouthScheduleScreen);
