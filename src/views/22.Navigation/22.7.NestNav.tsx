import {StyleSheet, View, Text, Button} from 'react-native'
import React from 'react'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer'
import {CompositeNavigationProp} from '@react-navigation/native'

type DrawerParamsList = {
  Home: undefined
  Profile: undefined
  Settings: undefined
}

type StackParamsList = {
  Root: DrawerParamsList
  Feed: undefined
}

const Stack = createNativeStackNavigator<StackParamsList>()
const Drawer = createDrawerNavigator<DrawerParamsList>()

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

type ProfileScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerParamsList, 'Profile'>,
  NativeStackNavigationProp<StackParamsList>
>

const Feed = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  return (
    <View style={[styl.main]}>
      <Text style={{color: 'red', fontSize: 20}}>Feed</Text>
      <View style={{width: 40, height: 40, backgroundColor: 'red'}} />
      <Button
        title={'Go to Root'}
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'Profile',
            params: {name: 'Dendi', age: 88},
          })
        }
      />
    </View>
  )
}

function Root() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  )
}

const NestNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NestNav

const styl = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
})
