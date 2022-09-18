import {NativeStackScreenProps} from '@react-navigation/native-stack'
export type RootParamsList = {
  Home: undefined
  Details: {itemId: number; otherParam?: string; query?: string}
}

export type HomeProps = NativeStackScreenProps<RootParamsList, 'Home'>
export type DetailsProps = NativeStackScreenProps<RootParamsList, 'Details'>
