import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const RinkSchedule = ({ data, combined = false }) => {
  let homeTeam = '';
  let visitorTeam = '';
  if (data.event.includes('vs')) {
    const teams = data.event.split(' vs ');
    homeTeam = teams[0];
    visitorTeam = teams[1];
  }

  const formatTime = (time) => {
    // Strip any leading 0's from time
    let newTime;
    if (time.charAt(0) === '0') {
      newTime = time.substring(1)
      return newTime
    }
    return time
  }

  const homeLockerRoom = (
    <View style={styles.lockerRoomRows}>
      <View>
        <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>Home Locker Room: </Text>
      </View>
      <View>
        <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>{data.home_locker_room}</Text>
      </View>
    </View>
  )

  const visitorLockerRoom = (
    <View style={styles.lockerRoomRows}>
      <View>
        <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>Visitor Locker Room: </Text>
      </View>
      <View>
        <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>{data.visitor_locker_room}</Text>
      </View>
    </View>
  )

  return (
    <View key={data.id} style={styles.container}>
      <View style={[styles.card, data.rink.includes('North') && { backgroundColor: Colors.green }]}>
        {combined && <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>{data.rink}</Text>}
        <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>{formatTime(data.start_time)} to {formatTime(data.end_time)}</Text>
        <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>{data.event}</Text>
        <View style={styles.lockerroom}>
          {!data.home_locker_room ? null : homeLockerRoom}
          {!data.visitor_locker_room ? null : visitorLockerRoom}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    width: 300,
    marginVertical: 10,
    padding: 20,
    backgroundColor: Colors.darkBlue,
    borderRadius: 10,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.36,
    elevation: 10,
  },
  text: {
    fontFamily: 'RussoOne',
    color: Colors.chartreuse,
    fontSize: 16,
  },
  // timer: {
  //   fontFamily: 'RussoOne',
  //   color: 'white',
  //   fontSize: 16,
  // },
  lockerroom: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    width: '100%',
  },
  lockerRoomRows: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
});

export default RinkSchedule;
