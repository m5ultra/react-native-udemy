import React, {useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Button, View, Text} from 'react-native'
import {
  RootParamsList,
  HomeProps,
  DetailsProps,
} from '../../types/passingParams'
const Stack = createNativeStackNavigator<RootParamsList>()
function HomeScreen({navigation}: HomeProps) {
  console.log(navigation)
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
          })
        }}
      />
    </View>
  )
}

function DetailsScreen({route, navigation}: DetailsProps) {
  /* 2. Get the param */
  const {itemId, otherParam, query} = route.params

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Text>Q: {JSON.stringify(query)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => {
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
          navigation.setParams({
            query: 'someText',
          })
        }}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen
          initialParams={{otherParam: 'init Param'}}
          name={'Details'}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
