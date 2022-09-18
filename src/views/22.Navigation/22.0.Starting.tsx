import * as React from 'react'
import {View, Text, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {RootStackParamList, Props, DetailProps} from '../../types'

/**
 * 01.Getting Started
 * @react-navigation/native  对外暴漏 NavigationContainer
 * react-native-screens (native-stack的依赖) react-native-safe-area-context (安全区)
 *
 * cd ios && pod install
 *
 * @react-navigation/native-stack
 *    @react-navigation/native-stack depends on react-native-screens and the other libraries that we installed in Getting started.
 *    If you haven't installed those yet, head over to that page and follow the installation instructions.
 */

const Stack = createNativeStackNavigator<RootStackParamList>()

const HomeScreen = ({navigation, route}: Props) => {
  console.log(route)
  const handleGoToDetail = () => {
    navigation.navigate('Detail', {name: 'Dendi', age: 88})
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title={'Go To Detail'} onPress={handleGoToDetail} />
    </View>
  )
}
function DetailsScreen({navigation, route}: DetailProps) {
  console.log(navigation, route)
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  )
}
export default function GettingStarted() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen options={{headerShown: false}} name={'Detail'}>
          {props => <DetailsScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
