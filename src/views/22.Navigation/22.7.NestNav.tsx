import {StyleSheet, View, Text} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const Home = () => {
  return (
    <View style={[styl.main]}>
      <Text>Home</Text>
    </View>
  )
}

const Profile = () => {
  return (
    <View style={[styl.main]}>
      <Text>Profile</Text>
    </View>
  )
}

const Settings = () => {
  return (
    <View style={[styl.main]}>
      <Text>Settings</Text>
    </View>
  )
}

const Feed = () => {
  return (
    <View style={[styl.main]}>
      <Text>Settings</Text>
    </View>
  )
}

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  )
}

const NestNav = () => {
  return (
    <View style={styl.main}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Feed" component={Feed} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default NestNav

const styl = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
