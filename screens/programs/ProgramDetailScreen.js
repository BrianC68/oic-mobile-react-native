import React, { useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button';
import Colors from '../../constants/Colors';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const ProgramDetailScreen = ({ navigation, route, programs }) => {
  const programId = route.params.programId;
  const program = programs.filter(prog => prog.id === programId)[0];

  useEffect(() => {
    // Set header title to the program name
    navigation.setOptions({ title: program.program_name });
  }, [navigation]);

  const message = (
    <View style={styles.messageContainer}>
      <Text style={[styles.text, { color: Colors.darkBlue, marginVertical: 10, }]}>
        {program.message}
      </Text>
    </View>
  )

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', backgroundColor: 'white' }}>
        <View style={styles.screen}>
          {program.id === 3 && (<Image source={require('../../assets/images/figure-skating.jpg')} style={styles.image} resizeMethod='scale' />)}
          {program.message && message}
          <Text style={styles.text}>
            {program.description}
          </Text>
          <View style={styles.infoContainer}>
            <View style={styles.row}>
              <View style={styles.colLeft}>
                <Text style={styles.header}>
                  When:
              </Text>
              </View>
              <View style={styles.colRight}>
                <Text style={[styles.text, { fontSize: 16, }]}>
                  {program.days_and_times}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.colLeft}>
                <Text style={styles.header}>
                  Limited to:
              </Text>
              </View>
              <View style={styles.colRight}>
                <Text style={[styles.text, { fontSize: 16, }]}>
                  {program.max_skaters} Skaters
                {program.max_goalies > 0 && `\n${program.max_goalies} Goalies`}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.colLeft}>
                <Text style={styles.header}>
                  Cost:
              </Text>
              </View>
              <View style={styles.colRight}>
                <Text style={[styles.text, { fontSize: 16, }]}>
                  {`$${program.skater_price}`} Skaters
                {program.goalie_price > 0 && `\n$${program.goalie_price} Goalies`}
                </Text>
              </View>
            </View>
          </View>
          <Button
            buttonText='OICWebApps'
            buttonStyles={{
              backgroundColor: Colors.green,
            }}
            textStyles={{
              color: 'white',
            }}
            onPress={() => navigation.navigate('OICWebApps')}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: SCREEN_WIDTH < 321 ? 10 : 20,
    paddingVertical: 20,
    height: '100%',
  },
  text: {
    fontFamily: 'LatoRegular',
    fontSize: 18,
    marginBottom: 10,
    color: Colors.darkBlue,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoContainer: {
    borderColor: Colors.green,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
  colLeft: {
    width: '30%'
  },
  colRight: {
    width: '70%'
  },
  header: {
    fontFamily: 'LatoBold',
    fontSize: 16,
    color: Colors.green
  },
  messageContainer: {
    width: '80%',
    backgroundColor: '#f8d7da',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

const mapStateToProps = state => ({
  programs: state.programs.programs,
});

export default connect(mapStateToProps)(ProgramDetailScreen);
