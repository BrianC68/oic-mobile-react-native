import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DrawerToggle from '../components/UI/DrawerToggle';
import RinkScheduleCard from '../components/schedule/RinkScheduleCard';

import SplashAnimation from '../components/UI/SplashAnimation';
import { getSchedule } from '../actions/scheduleActions';
import { getPrograms } from '../actions/programsActions';

const CombinedScheduleScreen = ({ navigation, schedule, getSchedule, getPrograms }) => {
  const [isReloading, setIsReloading] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getSchedule();
      getPrograms();
    }
    return () => mounted = false;
  }, [getSchedule, getPrograms]);

  useEffect(() => {
    navigation.dangerouslyGetParent().setOptions({
      headerLeft: (() =>
        <DrawerToggle navigation={navigation} />
      ),
    })
  }, [navigation]);

  const reloadSchedule = async () => {
    setIsReloading(true);
    await getSchedule();
    setIsReloading(false);
  };

  return (
    <View style={styles.screen}>
      <SplashAnimation />
      <FlatList
        onRefresh={reloadSchedule}
        refreshing={isReloading}
        style={{ width: '100%', height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={schedule}
        keyExtractor={event => String(event.id)}
        renderItem={event =>
          <RinkScheduleCard
            data={event.item}
            combined={true}
          />
        }
      />
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
