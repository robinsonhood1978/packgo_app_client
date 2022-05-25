import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../home';

const Stack = createStackNavigator();

const HamburgerIcon = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={{
            uri:
              'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
          }}
          style={{width: 25, height: 25, marginLeft: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: 'Home Screen',
          headerLeft: () => <HamburgerIcon navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
