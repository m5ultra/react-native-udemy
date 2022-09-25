import type {NativeStackNavigationProp} from '@react-navigation/native-stack'
import type {RouteProp, CompositeNavigationProp} from '@react-navigation/native'
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
export type RootStackNavigatorParamList = {
  Home: undefined
  Details: {
    name: string
    birthYear: string
  }
}

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'Details'
>

export type DetailsScreenRouteProp = RouteProp<
  RootStackNavigatorParamList,
  'Details'
>

export type HomeScreenRouteProp = RouteProp<RootStackNavigatorParamList, 'Home'>

export type BottomTabNavigatorParamList = {
  HomeStack: RootStackNavigatorParamList
  Feed: undefined
  Settings: undefined
}

export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackNavigatorParamList, 'Details'>,
  BottomTabNavigationProp<BottomTabNavigatorParamList, 'Feed'>
>
