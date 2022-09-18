import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

type RootParamsList = {
  Home: undefined
  Details: undefined
}
const Stack = createNativeStackNavigator<RootParamsList>()
type DetailProps = NativeStackScreenProps<
  RootParamsList,
  'Details',
  'MyDetailId'
>
type HomeProps = NativeStackScreenProps<RootParamsList, 'Home', 'MyHomeId'>
const HomeScreen = ({navigation}: HomeProps) => {
  return (
    <View style={styl.main}>
      <Text style={styl.txt}>Home</Text>
      <Button
        title="Go To Dtail"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

const DetailScreen = ({navigation}: DetailProps) => {
  const [count, setCount] = React.useState(0)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => setCount(c => c + 1)}
          title={'Updating' + count}
          touchSoundDisabled={true}
        />
      ),
      headerTitle: () => <Text>{count}</Text>,
    })
  }, [navigation, count])

  return (
    <View style={styl.main}>
      <Text style={styl.txt}>Count: {count}</Text>
    </View>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            headerTitle: 'My Title',
            headerRight: () => (
              <Button
                onPress={() => console.log('This is a button!')}
                title="Info"
                color="skyblue"
              />
            ),
          }}
        />
        <Stack.Screen name={'Details'} component={DetailScreen} />
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
  txt: {
    fontSize: 20,
  },
})
