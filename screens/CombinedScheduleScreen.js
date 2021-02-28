import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';
import DrawerToggle from '../components/UI/DrawerToggle';
import RinkScheduleCard from '../components/schedule/RinkScheduleCard';

import SplashAnimation from '../components/UI/SplashAnimation';
import { getSchedule } from '../actions/scheduleActions';
import {getPrograms} from '../actions/programsActions';

const CombinedScheduleScreen = ({ navigation, schedule, getSchedule, getPrograms }) => {
  useEffect(() => {
    getSchedule();
    getPrograms();
  }, [getSchedule, getPrograms]);

  useEffect(() => {
    navigation.dangerouslyGetParent().setOptions({
      headerLeft: (() =>
        <DrawerToggle navigation={navigation} />
      ),
    })
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <SplashAnimation />
      <ScrollView style={{ width: '100%' }}>
        {schedule.map(event => (
          <RinkScheduleCard key={event.id} data={event} combined={true} />
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

CombinedScheduleScreen.propTypes = {
  getSchedule: PropTypes.func.isRequired,
  getPrograms: PropTypes.func.isRequired,
  schedule: PropTypes.array,
}

const mapStateToProps = state => ({
  schedule: state.schedule.schedule,
});

export default connect(mapStateToProps, { getSchedule, getPrograms })(CombinedScheduleScreen);
