import * as React from 'react'
import {View, Text, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

type RootStackParamList = {
  Home: undefined
  Details: {GoodsId: string}
}
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

function HomeScreen({navigation, route}: Props) {
  console.log(route, 'v')
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {GoodsId: 'Nul.778899'})}
      />
    </View>
  )
}
function DetailScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
    </View>
  )
}
const Stack = createNativeStackNavigator<RootStackParamList>()

function stackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          initialParams={{GoodsId: 'Nul.1122334455'}}
          name="Details"
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default stackNav
