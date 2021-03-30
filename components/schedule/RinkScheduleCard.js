import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const RinkSchedule = ({ data, combined = false }) => {
  const [countDownHours, setCountDownHours] = useState(0);
  const [countDownMins, setCountDownMins] = useState(0);
  const [countDownSecs, setCountDownSecs] = useState(0);
  let homeTeam = '';
  let visitorTeam = '';
  let teams = [];
  if (data.event.includes(' vs ')) {
    teams = data.event.split(' vs ');
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

  var countDownDate = new Date(data.countdown_time.replace(/-/g, '/')).getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountDownHours(hours);
    setCountDownMins(minutes);
    setCountDownSecs(seconds);

    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  const multipleTeams = (
    <View style={{ alignItems: 'center' }}>
      <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>{homeTeam}</Text>
      {!data.home_locker_room ? null : <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>Locker Room: {data.home_locker_room}</Text>}
      <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>vs.</Text>
      <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>{visitorTeam}</Text>
      {!data.visitor_locker_room ? null : <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>Locker Room: {data.visitor_locker_room}</Text>}
    </View>
  )

  const singleTeam = (
    <View style={{ alignItems: 'center' }}>
      <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>{data.event.length > 28 ? data.event.substring(0, 28) + '...' : data.event}</Text>
      {!data.home_locker_room ? null :
        <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>
          Locker Rooms: {data.home_locker_room}{data.visitor_locker_room && `, ${data.visitor_locker_room}`}
        </Text>}
    </View>
  )

  return (
    <View key={data.id} style={styles.container}>
      <View style={[styles.card, data.rink.includes('North') && { backgroundColor: Colors.green }]}>
        {combined && <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>{data.rink}</Text>}
        <Text style={[styles.text, data.rink.includes('North') && { color: 'white' }]}>{formatTime(data.start_time)} to {formatTime(data.end_time)}</Text>
        {countDownMins > 0 ?
          <Text style={[styles.text, { fontSize: 12 }, data.rink.includes('North') && { color: 'white' }]}>
            Starts in {countDownHours > 0 && countDownHours + ' hours '}{countDownMins} mins
          </Text> :
          null}
        {teams.length === 0 ?
          singleTeam
          :
          multipleTeams
        }
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
});

export default RinkSchedule;
