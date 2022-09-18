import React from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

type RootParamsList = {
  Home: undefined
  Detail: {detailTitle: string}
  CustomStyl: undefined
  CustomTitle: undefined
}
type HomeProps = NativeStackScreenProps<RootParamsList, 'Home'>
type DetailProps = NativeStackScreenProps<RootParamsList, 'Detail'>
const HomeScreen = ({navigation}: HomeProps) => {
  return (
    <View style={styl.main}>
      <Text>Conf Header Bar</Text>
      <Button
        title={'Go To Detail'}
        onPress={() =>
          navigation.navigate('Detail', {detailTitle: 'Custrom Detail Title'})
        }
      />
      <Button
        title="Custom Header Style"
        onPress={() => navigation.navigate('CustomStyl')}
      />
      <Button
        title="Custom Title"
        onPress={() => navigation.navigate('CustomTitle')}
      />
    </View>
  )
}
const DetailScreen = ({navigation}: DetailProps) => {
  return (
    <View style={styl.main}>
      <Text>Details</Text>
      <Button
        title="Update the title"
        onPress={() =>
          navigation.setOptions({
            title: 'Updated Detail Title!',
            headerTintColor: 'red',
          })
        }
      />
    </View>
  )
}

const CustomHeaderStyle = () => {
  return (
    <View style={styl.main}>
      <Text> Custom Header Style</Text>
    </View>
  )
}
const CustomTitle = () => {
  return (
    <View style={styl.main}>
      <Text> CustomTitle </Text>
    </View>
  )
}
const Stack = createNativeStackNavigator<RootParamsList>()
function LogoTitle() {
  return (
    // include at least width and height!
    <Image
      style={{
        width: 20,
        height: 20,
        resizeMode: 'contain',
      }}
      source={{
        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
      }}
    />
  )
}
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 12,
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen
          name={'Detail'}
          component={DetailScreen}
          // navigation
          options={({route}) => ({
            title: route.params.detailTitle,
          })}
        />
        {/* Adjusting header styles​ */}
        <Stack.Screen
          name={'CustomStyl'}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={CustomHeaderStyle}
        />
        {/* Replacing the title with a custom component​ */}
        <Stack.Screen
          name={'CustomTitle'}
          options={{
            headerTitle: () => <LogoTitle />,
          }}
          component={CustomTitle}
        />
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
