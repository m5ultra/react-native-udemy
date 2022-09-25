import type {NativeStackNavigationProp} from '@react-navigation/native-stack'
import type {RouteProp} from '@react-navigation/native'

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

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'Home'
>

export type DetailsScreenRouteProp = RouteProp<
  RootStackNavigatorParamList,
  'Details'
>

export type HomeScreenRouteProp = RouteProp<RootStackNavigatorParamList, 'Home'>
