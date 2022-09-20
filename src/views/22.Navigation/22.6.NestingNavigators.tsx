import {StyleSheet, Text, View, Button} from 'react-native'
import React, {createContext, useContext} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const ctx = createContext('testCtx')

const Feed = () => {
  return (
    <View style={styl.main}>
      <Text>Feed</Text>
    </View>
  )
}
const Messages = () => {
  const res = useContext(ctx)
  console.log(res, 'ctx') // {"des": "从Profile传递给Home中组建", "iPhone": "iPhone 14 Pro"}
  return (
    <View>
      <Text>Messages</Text>
    </View>
  )
}
// 验证第一个问题: .Each navigator keeps its own navigation history(每个导航器保存自己的导航历史记录(历史记录栈))
// 例如: 当您在嵌套堆栈导航器中的屏幕内按下后退按钮时
// 它将返回到嵌套堆栈内的上一个屏幕，即使有另一个导航器作为父级
// Stack.Navigator
//  Home (Tab.Navigator)
//     Feed (Screen)
//     Messages (Screen)
//  Profile (Screen)
//  Settings (Screen)
// 验证步骤: 可以把Profile设置为首屏幕 在Profile(Stack) 跳转到 Home(Stack => 里边嵌套了 Tab导航器) 在Home中点击 Messages导航 点击返回按钮
//         会直接返回到 Profile 不是返回到 Feed

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title={'Go to Home'}
        onPress={() =>
          navigation.navigate('Home', {
            des: '从Profile传递给Home中组建',
            iPhone: 'iPhone 14 Pro',
          })
        }
      />
    </View>
  )
}

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

const Home = ({route}) => {
  return (
    <ctx.Provider value={route.params}>
      {/* screenOptions={{headerShown: false}} */}
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} options={{title: 'My Feed'}} />
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
    </ctx.Provider>
  )
}
// 02. Each navigator has its own options
// For example, specifying a title option in a screen
// nested in a child navigator won't affect the title shown in a parent navigator.
// 如果想要实现在子导航器中设置Title属性, 影响到父导航器中的Title 请看实现方案:
// TODO
// https://reactnavigation.org/docs/screen-options-resolution#setting-parent-screen-options-based-on-child-navigators-state
const NestingNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen
          options={{title: 'MyHome'}}
          name={'Home'}
          component={Home}
        />
        <Stack.Screen name={'Profile'} component={Profile} />
        <Stack.Screen name={'Settings'} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NestingNavigation

const styl = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
})
