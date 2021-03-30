import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DrawerToggle from '../components/UI/DrawerToggle';
import RinkScheduleCard from '../components/schedule/RinkScheduleCard';
import Colors from '../constants/Colors';

const NorthScheduleScreen = ({ navigation, schedule }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (() =>
        <DrawerToggle navigation={navigation} />
      )
    })
  }, [navigation]);

  const northSchedule = schedule.filter(event => event.rink.includes('North'));

  return (
    <View style={styles.screen}>
      {northSchedule.length === 0 &&
        <View style={styles.empty}>
          <Text style={styles.text}>Nothing on North Rink today</Text>
        </View>
      }
      <FlatList
        style={{ width: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={northSchedule}
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
  empty: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    fontFamily: 'RussoOne',
    fontSize: 20,
    color: Colors.green,
  }
});

NorthScheduleScreen.propTypes = {
  schedule: PropTypes.array,
}

const mapStateToProps = state => ({
  schedule: state.schedule.schedule,
});

export default connect(mapStateToProps)(NorthScheduleScreen);
