import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// rest of the import statements remain same
import {RootStackNavigatorParamList} from './types'

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'

const HomeStack = createNativeStackNavigator<RootStackNavigatorParamList>()

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
