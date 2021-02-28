import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import schedule from './ScheduleData';
import Colors from '../../constants/Colors';

// console.log(schedule)

const Schedule = props => {
  const [scheduleDay, setScheduleDay] = useState('Monday');

  return (
    <View style={styles.container}>
      <View style={styles.days}>
        <TouchableOpacity onPress={() => setScheduleDay('Monday')}>
          <Text style={[styles.headerText, scheduleDay === 'Monday' && styles.active]}>Monday</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScheduleDay('Tuesday')}>
          <Text style={[styles.headerText, scheduleDay === 'Tuesday' && styles.active]}>Tuesday</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScheduleDay('Wednesday')}>
          <Text style={[styles.headerText, scheduleDay === 'Wednesday' && styles.active]}>Wednesday</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScheduleDay('Thursday')}>
          <Text style={[styles.headerText, scheduleDay === 'Thursday' && styles.active]}>Thursday</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScheduleDay('Friday')}>
          <Text style={[styles.headerText, scheduleDay === 'Friday' && styles.active]}>Friday</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScheduleDay('Saturday')}>
          <Text style={[styles.headerText, scheduleDay === 'Saturday' && styles.active]}>Saturday</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.data}>
        {schedule[scheduleDay].map(event =>
          <View key={event.id} style={styles.classDetail}>
            <Text style={styles.dataText}>{event.time}</Text>
            <Text style={styles.dataText}>{event.class}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  days: {

  },
  headerText: {
    color: Colors.green,
    marginVertical: 5,
    fontSize: 18,
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.darkBlue,
  },
  data: {
    flex: 1,
    marginLeft: 60,
    marginTop: 10,
  },
  dataText: {
    fontFamily: 'LatoRegular',
    color: Colors.darkBlue,
    marginBottom: 5,
  },
  classDetail: {
    marginBottom: 5,
  }
});

export default Schedule;
