import {NativeStackScreenProps} from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Detail: {name: string; age: number}
  Details: undefined
}

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>
export type DetailProps = NativeStackScreenProps<RootStackParamList, 'Detail'>

// move

export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'Details',
  'details'
>
