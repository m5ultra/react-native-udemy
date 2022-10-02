import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import Camera from '../../19.Camera'

import TabNavs from './Tabs'
const Stack = createNativeStackNavigator()
const StackNavs = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={'Home'}
          component={TabNavs}
        />
        <Stack.Screen
          name={'TakePhotos'}
          component={Camera}
          options={{title: '拍照'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavs
