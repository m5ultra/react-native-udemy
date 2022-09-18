import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {View, Text, StyleSheet, Button} from 'react-native'
import {DetailsProps, Props, RootStackParamList} from '../../types'

const Stack = createNativeStackNavigator<RootStackParamList>()
const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styl.main}>
      <Text>Hoooome</Text>
      <Button
        title={'Go to Detail'}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}
const DetailsScreen = ({navigation}: DetailsProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go back By Step" onPress={() => navigation.goBack()} />
      <Button title="Go back Dismiss" onPress={() => navigation.popToTop()} />
    </View>
  )
}
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Details'} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styl = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
