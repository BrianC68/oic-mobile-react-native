import React from 'react';
import { Platform, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
// import HomeScreen from '../screens/HomeScreen';
import OICWebAppsScreen from '../screens/OICWebAppsScreen';
import BreakawayCrossfitScreen from '../screens/BreakAwayCrossfitScreen';
import ProgramsScreen from '../screens/ProgramsScreen';
import NorthScheduleScreen from '../screens/NorthScheduleScreen';
import SouthScheduleScreen from '../screens/SouthScheduleScreen';
import CombinedScheduleScreen from '../screens/CombinedScheduleScreen';
import ExploreScreen from '../screens/ExploreScreen';
import HockeyCampsScreen from '../screens/HockeyCampsScreen';
import ConcessionsScreen from '../screens/ConcessionsScreen';
import ContactUsScreen from '../screens/explore/ContactUsScreen';
import Covid19Screen from '../screens/explore/Covid19Screen';
import UserGroupsScreen from '../screens/explore/UserGroupsScreen';
import BirthdayPartyScreen from '../screens/explore/BirthdayPartyScreen';
import SocialScreen from '../screens/explore/SocialScreen';
import LearnToSkateScreen from '../screens/programs/LearnToSkateScreen';
import PublicSkateScreen from '../screens/programs/PublicSkateScreen';
import ProgramDetailScreen from '../screens/programs/ProgramDetailScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.darkBlue : 'white',
  },
  headerTitleStyle: {
    fontFamily: 'RussoOne',
    fontSize: 21,
  },
  headerBackTitleStyle: {
    fontFamily: 'LatoRegular',
  },
  headerTintColor: Platform.OS === 'android' ? Colors.chartreuse : Colors.darkBlue,
  // headerInactiveTintColor: Colors.chartreuse,
  headerTitleAlign: 'center',
};

const HomeScreenStackNavigator = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <HomeScreenStackNavigator.Navigator
      screenOptions={defaultNavOptions}
    >
      <HomeScreenStackNavigator.Screen
        name='Home'
        component={ScheduleTabsNavigator}
        options={({ navigation }) => (
          {
            title: 'OIC Schedule',
          })
        }
      />
    </HomeScreenStackNavigator.Navigator>
  )
};

const OICWebAppsScreenStackNavigator = createStackNavigator();

const OICWebAppsScreenNavigator = () => {
  return (
    <OICWebAppsScreenStackNavigator.Navigator
      screenOptions={defaultNavOptions}
    >
      <OICWebAppsScreenStackNavigator.Screen
        name='OICWebApps'
        component={OICWebAppsScreen}
        options={({ navigation }) => (
          {
            title: 'OIC Web Apps',
          })
        }
      />
    </OICWebAppsScreenStackNavigator.Navigator>
  )
};

const BreakawayScreenStackNavigator = createStackNavigator();

const BreakawayScreenNavigator = () => {
  return (
    <BreakawayScreenStackNavigator.Navigator
      screenOptions={defaultNavOptions}
    >
      <BreakawayScreenStackNavigator.Screen
        name='Breakaway'
        component={BreakawayCrossfitScreen}
        options={({ navigation }) => (
          {
            title: 'Breakaway Crossfit',
          })
        }
      />
    </BreakawayScreenStackNavigator.Navigator>
  )
};

const ProgramsScreenStackNavigator = createStackNavigator();

const ProgramsScreenNavigator = () => {
  return (
    <ProgramsScreenStackNavigator.Navigator
      screenOptions={defaultNavOptions}
    >
      <ProgramsScreenStackNavigator.Screen
        name='Programs'
        component={ProgramsScreen}
      />
      <ProgramsScreenStackNavigator.Screen
        name='Program Detail'
        component={ProgramDetailScreen}
      />
      <ProgramsScreenStackNavigator.Screen
        name='Birthday'
        component={BirthdayPartyScreen}
        options={
          {
            title: 'Birthday Parties',
          }
        }
      />
      <ProgramsScreenStackNavigator.Screen
        name='Learn to Skate'
        component={LearnToSkateScreen}
      />
      <ProgramsScreenStackNavigator.Screen
        name='Public Skate'
        component={PublicSkateScreen}
      />
    </ProgramsScreenStackNavigator.Navigator>
  )
};

const ScheduleScreenTabsNavigator =
  Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const ScheduleTabsNavigator = () => {
  return (
    <ScheduleScreenTabsNavigator.Navigator
      tabBarOptions={{
        activeBackgroundColor: Colors.darkBlue,
        inactiveBackgroundColor: Colors.green,
        activeTintColor: Colors.chartreuse,
        inactiveTintColor: Colors.darkBlue,
        // labelStyle: {
        //   fontFamily: 'RussoOne',
        // }
      }}
      activeColor={Colors.chartreuse}
      inactiveColor={Colors.darkBlue}
      shifting
    >
      <ScheduleScreenTabsNavigator.Screen
        name='CombinedSchedule'
        component={CombinedScheduleScreen}
        options={{
          tabBarIcon: () => <FontAwesome5 name="object-group" size={24} color={Colors.chartreuse} />,
          tabBarColor: Colors.darkGray,
          tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'LatoRegular', fontSize: 14 }}>Combined</Text> : 'Combined',
        }}
      />
      <ScheduleScreenTabsNavigator.Screen
        name='NorthSchedule'
        component={NorthScheduleScreen}
        options={{
          tabBarIcon: () => <FontAwesome5 name="arrow-circle-up" size={24} color={Colors.chartreuse} />,
          tabBarColor: Colors.darkBlue,
          tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'LatoRegular', fontSize: 14 }}>North Rink</Text> : 'North Rink',
        }}
      />
      <ScheduleScreenTabsNavigator.Screen
        name='SouthSchedule'
        component={SouthScheduleScreen}
        options={{
          tabBarIcon: () => <FontAwesome5 name="arrow-circle-down" size={24} color={Colors.chartreuse} />,
          tabBarColor: Colors.green,
          tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'LatoRegular', fontSize: 14 }}>South Rink</Text> : 'South Rink',
        }}
      />
    </ScheduleScreenTabsNavigator.Navigator>
  )
};

// const ScheduleScreenStackNavigator = createStackNavigator();

// const ScheduleScreenNavigator = () => {
//   return (
//     <ScheduleScreenStackNavigator.Navigator
//       screenOptions={defaultNavOptions}
//     >
//       <ScheduleScreenStackNavigator.Screen
//         name='Schedule'
//         component={ScheduleTabsNavigator}
//         options={
//           {
//             title: 'Rink Schedule',
//           }
//         }
//       />
//     </ScheduleScreenStackNavigator.Navigator>
//   )
// };

const ExploreScreenStackNavigator = createStackNavigator();

const ExploreScreenNavigator = () => {
  return (
    <ExploreScreenStackNavigator.Navigator
      screenOptions={defaultNavOptions}
    >
      <ExploreScreenStackNavigator.Screen
        name='Explore'
        component={ExploreScreen}
        options={
          {
            title: 'Explore',
          }
        }
      />
      <ExploreScreenStackNavigator.Screen
        name='Contact'
        component={ContactUsScreen}
        options={
          {
            title: 'Contact Us',
          }
        }
      />
      <ExploreScreenStackNavigator.Screen
        name='Covid-19'
        component={Covid19Screen}
        options={
          {
            title: 'Covid-19 Info',
          }
        }
      />
      <ExploreScreenStackNavigator.Screen
        name='Birthday'
        component={BirthdayPartyScreen}
        options={
          {
            title: 'Birthday Parties',
          }
        }
      />
      <ExploreScreenStackNavigator.Screen
        name='UserGroups'
        component={UserGroupsScreen}
        options={
          {
            title: 'User Groups',
          }
        }
      />
      <ExploreScreenStackNavigator.Screen
        name='Social'
        component={SocialScreen}
        options={
          {
            title: 'Social Media',
          }
        }
      />
    </ExploreScreenStackNavigator.Navigator>
  )
};

const HockeyCampsScreenStackNavigator = createStackNavigator();

const HockeyCampsScreenNavigator = () => {
  return (
    <HockeyCampsScreenStackNavigator.Navigator
      screenOptions={defaultNavOptions}
    >
      <HockeyCampsScreenStackNavigator.Screen
        name='Hockey Camps'
        component={HockeyCampsScreen}
        options={
          {
            title: 'Hockey Camps',
          }
        }
      />
    </HockeyCampsScreenStackNavigator.Navigator>
  )
};

const ConcessionsScreenStackNavigator = createStackNavigator();

const ConcessionsScreenNavigator = () => {
  return (
    <ConcessionsScreenStackNavigator.Navigator
      screenOptions={defaultNavOptions}
    >
      <ConcessionsScreenStackNavigator.Screen
        name='Concessions'
        component={ConcessionsScreen}
        options={
          {
            title: 'Concessions',
          }
        }
      />
      <ConcessionsScreenStackNavigator.Screen
        name='Birthday'
        component={BirthdayPartyScreen}
        options={
          {
            title: 'Birthday Parties',
          }
        }
      />
    </ConcessionsScreenStackNavigator.Navigator>
  )
};

// const PublicSkateScreenStackNavigator = createStackNavigator();

// const PublicSkateScreenNavigator = () => {
//   return (
//     <PublicSkateScreenStackNavigator.Navigator
//       screenOptions={defaultNavOptions}
//     >
//       <PublicSkateScreenStackNavigator.Screen
//         name='Public Skate'
//         component={PublicSkateScreen}
//       />
//     </PublicSkateScreenStackNavigator.Navigator>
//   )
// };

const ApplicationDrawerNavigator = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <ApplicationDrawerNavigator.Navigator
      drawerStyle={{
        backgroundColor: Colors.darkBlue,
        width: 320,
      }}
      drawerContentOptions={{
        activeBackgroundColor: Colors.green,
        activeTintColor: Colors.chartreuse,
        inactiveTintColor: Colors.chartreuse,
        labelStyle: { fontSize: 16, fontFamily: 'RussoOne' }
      }}
    >
      <ApplicationDrawerNavigator.Screen
        name='Schedule'
        component={HomeScreenNavigator}
        options={{
          drawerIcon: props =>
            <View style={{ marginRight: 2, marginLeft: 2 }}><FontAwesome5 name="calendar" size={28} color={Colors.chartreuse} /></View>,
        }}
      />
      <ApplicationDrawerNavigator.Screen
        name='OICWebApps'
        component={OICWebAppsScreenNavigator}
        options={{
          drawerIcon: props =>
            <View><FontAwesome5 name="cogs" size={24} color={Colors.chartreuse} /></View>,
        }}
      />
      <ApplicationDrawerNavigator.Screen
        name='Breakaway Crossfit'
        component={BreakawayScreenNavigator}
        options={{
          drawerIcon: props =>
            <FontAwesome5 name="dumbbell" size={24} color={Colors.chartreuse} />,
        }}
      />
      <ApplicationDrawerNavigator.Screen
        name='Concessions'
        component={ConcessionsScreenNavigator}
        options={{
          drawerIcon: props =>
            <View style={{ marginLeft: 1 }}><MaterialCommunityIcons name="food" size={30} color={Colors.chartreuse} /></View>,
        }}
      />
      <ApplicationDrawerNavigator.Screen
        name='Explore'
        component={ExploreScreenNavigator}
        options={{
          drawerIcon: props =>
            <View style={{ marginRight: 5, marginLeft: 1 }}><FontAwesome5 name="compass" size={28} color={Colors.chartreuse} /></View>,
        }}
      />
      <ApplicationDrawerNavigator.Screen
        name='Hockey Camps'
        component={HockeyCampsScreenNavigator}
        options={{
          drawerIcon: props =>
            <View style={{ marginRight: 4, marginLeft: 1 }}><MaterialCommunityIcons name="hockey-sticks" size={28} color={Colors.chartreuse} /></View>,
        }}
      />
      <ApplicationDrawerNavigator.Screen
        name='Programs'
        component={ProgramsScreenNavigator}
        options={{
          drawerIcon: props =>
            <View style={{ marginRight: 8, marginLeft: 1 }}><FontAwesome5 name="skating" size={28} color={Colors.chartreuse} /></View>,
        }}
      />
      {/* <ApplicationDrawerNavigator.Screen
        name='Public Skate'
        component={PublicSkateScreenNavigator}
        options={{
          drawerIcon: props =>
            <View style={{ marginRight: 2, marginLeft: 1 }}><MaterialCommunityIcons name="skate" size={30} color={Colors.chartreuse} /></View>,
        }}
      /> */}
      {/* <ApplicationDrawerNavigator.Screen
        name='Schedule'
        component={ScheduleScreenNavigator}
        options={{
          drawerIcon: props =>
            <View style={{ marginRight: 5, marginLeft: 2 }}><FontAwesome5 name="calendar" size={28} color={Colors.chartreuse} /></View>,
        }}
      /> */}
    </ApplicationDrawerNavigator.Navigator>
  )
}
