import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import {IconSettings} from '../../icons'
import {BottomTabNavigatorParamList} from './types'
import HomeStackNavigator from './HomeStack'
import FeedScreen from './FeedScreen'
import SettingsScreen from './SettingsScreen'

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList>()

const BottomTabs = () => {
  const activeColor = '#E4393C'
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: 'gray',
      }}>
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          title: '首页',
          headerShown: false,
          tabBarIcon: ({focused, size}) => {
            const focusedColor = focused ? activeColor : 'gray'
            return <Icon name={'home'} size={size} color={focusedColor} />
          },
        }}
      />
      <BottomTab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          title: '苹果',
          tabBarIcon: ({focused, size}) => {
            const focusedColor = focused ? activeColor : 'gray'
            return <Icon name={'logo-apple'} size={size} color={focusedColor} />
          },
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: '设置',
          tabBarIcon: ({focused}) => {
            const focusedColor = focused ? activeColor : 'gray'
            return <IconSettings size={20} color={focusedColor} />
          },
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabs
