import React from 'react';
import { Platform } from 'react-native'

import { MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Depoiments } from '../screens/Depoiments';
import { Clock } from '../screens/Clock';
import { Map } from '../screens/Map';
import { User } from '../screens/User';
import { Action } from '../screens/Action';
import { Details } from '../screens/Depoiments/Details';

import { TabButton } from '../components/TabButton'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  const DepoimentsScreen = () => (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerTintColor: theme.colors.black,
        headerStyle: {
          backgroundColor: theme.colors.white,
          height: 100,
        },
        headerTitleStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: 17,
        },
        headerBackTitleStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: 17,
        },
      }}
    >
      <Stack.Screen
        name="Depoiments"
        component={Depoiments}
        options={{
          title: 'Depoimentos',
        }}
      />
      <Stack.Screen 
        name="Details"
        component={Details}
        options={{
          title: 'Depoimentos',
        }}
      />
    </Stack.Navigator>
  );

  return (    
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.secondary,
        inactiveTintColor: theme.colors.primary,
        showLabel: false,
        labelStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: 16,
        },
        style: {
          paddingHorizontal: 20,
          borderTopColor: 'transparent',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: Platform.OS === 'ios' ? 100 : 75,
          marginTop: -40,
        }
      }}
      >
      <Tabs.Screen
        name='Clock'
        component={Clock}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialCommunityIcons
            name="clock"
            size={size}
            color={color}
            />
            ))
          }}
          />
      <Tabs.Screen
          name='Cadastrar'
          component={DepoimentsScreen}
          options={{
            tabBarIcon: (({ size, color }) => (
              <MaterialCommunityIcons
              name="message"
              size={size}
              color={color}
              />
              ))
            }}
            />
      <Tabs.Screen
        name='Action'
        component={Action}
        options={{
          tabBarIcon: (({ focused, size }) => (
            <TabButton
              size={size}
              focused={focused}
            />
          ))
        }}
      />
      <Tabs.Screen
        name='Map'
        component={Map}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Feather
              name="map"
              size={size}
              color={color}
            />
          ))
        }}
      />
      <Tabs.Screen
        name='User'
        component={User}
        options={{
          tabBarIcon: (({ size, color }) => (
            <FontAwesome5
              name="user-alt"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </Tabs.Navigator>
  );
}