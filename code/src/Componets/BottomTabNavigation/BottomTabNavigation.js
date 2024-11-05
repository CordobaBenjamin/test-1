import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from '../../Helper/icons';
import ProfileScreen from '../../screens/ProfilScreen/ProfilScreen';
import SavedScreen from '../../screens/saved/SavedScreen';
import MessageScreen from '../../screens/MessageScreen/MessageScreen';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    // <View style={{backgroundColor:"red",height:50,width:'100%',position:"absolute",bottom:0}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: '#737373',
          tabBarActiveTintColor: '#0e0140',
          tabBarLabelStyle: {marginBottom: 15, fontSize: 13, fontWeight:'900'},
          tabBarStyle: {
            backgroundColor: '#fff',
            borderBottomWidth: 0,
            alignItems: 'center',
            position: 'absolute',
            borderColor: 'rgb(42, 58, 58)',
            borderWidth: 0.5,
            height: 70,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <Image
                source={icons.home}
                style={{
                  tintColor: focused ? '#0e0140' : '#bfbfbf',
                  height: 20,
                  width: 20,
                }}
              />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Message"
          options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({focused}) => (
              <Image
                source={icons.chat}
                style={{
                  tintColor: focused ? '#0e0140' : '#bfbfbf',
                  height: 20,
                  width: 20,
                }}
              />
            ),
          }}
          component={MessageScreen}
        />
        <Tab.Screen
          name="Saved"
          options={{
            tabBarLabel: 'Saved',
            tabBarIcon: ({focused}) => (
              <Image
                source={icons.save}
                style={{
                  tintColor: focused ? '#0e0140' : '#bfbfbf',
                  height: 20,
                  width: 20,
                }}
              />
            ),
          }}
          component={SavedScreen}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
              <Image
                source={icons.usera}
                style={{
                  tintColor: focused ? '#0e0140' : '#bfbfbf',
                  height: 20,
                  width: 20,
                }}
              />
            ),
          }}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    // </View>
  );
}

export default BottomTabNavigation