import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home'
import NewsScreen from '../screens/News'
import SettingsScreen from '../screens/Settings'
import ProfileScreen from '../screens/Profile'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()
const BottomNavs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // headerShown: false,
        tabBarIcon: ({color, size}) => {
          let iconName = ''
          if (route.name === '首页') {
            iconName = 'home'
          } else if (route.name === '新闻') {
            iconName = 'book'
          } else if (route.name === '设置') {
            iconName = 'cog'
          } else if (route.name === '个人中心') {
            iconName = 'keypad'
          }
          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name={'首页'}
        component={HomeScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('TakePhotos')}>
              <Text style={[{color: 'white', marginRight: 12}]}>拍照</Text>
            </TouchableOpacity>
          ),
          headerStyle: {backgroundColor: '#00b38a'},
          headerTintColor: 'white',
        })}
      />
      <Tab.Screen name={'新闻'} component={NewsScreen} />
      <Tab.Screen name={'设置'} component={SettingsScreen} />
      <Tab.Screen name={'个人中心'} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomNavs
