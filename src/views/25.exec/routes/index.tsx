import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home'
import NewsScreen from '../screens/News'
import SettingsScreen from '../screens/Settings'
import ProfileScreen from '../screens/Profile'

const BottomTab = createBottomTabNavigator()
const Navs = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen name={'首页'} component={HomeScreen} />
        <BottomTab.Screen name={'新闻'} component={NewsScreen} />
        <BottomTab.Screen name={'设置'} component={SettingsScreen} />
        <BottomTab.Screen name={'个人中心'} component={ProfileScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default Navs
