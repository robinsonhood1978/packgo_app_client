// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import 'react-native-gesture-handler';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DemosScreen from './demos';
import MultipleImagesScreen from './multiple_images';
import UpdatePersonScreen from './update_person';
import Icon from 'src/components/Icon';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#633689',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
        name="FirstPage"
        component={DemosScreen}
        options={{
          tabBarLabel: 'Demos',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="SecondPage"
        component={MultipleImagesScreen}
        options={{
          tabBarLabel: 'Images',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="ThirdPage"
        component={UpdatePersonScreen}
        options={{
          tabBarLabel: 'Profile',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}

function Taps(props) {
  const {navigation} = props;
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          headerStyle: {backgroundColor: '#633689'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{
            title: 'Tab Stack',
            headerLeft: () => (
              <Icon
                name="arrow-left"
                onPress={() => navigation.goBack()}
                isRotateRTL
              />
            ),
            headerStyle: {
              backgroundColor: '#633689',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Taps;
