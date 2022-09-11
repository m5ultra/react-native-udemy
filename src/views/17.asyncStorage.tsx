import React, {useState, useEffect, useCallback} from 'react'
import {View, Text, Button, Platform} from 'react-native'
import {useAsyncStorage} from '@react-native-async-storage/async-storage'

export default function Demo17() {
  const [value, setValue] = useState('value')
  const {getItem, setItem} = useAsyncStorage('@storage_key')

  const readItemFromStorage = useCallback(async () => {
    const item = await getItem()
    setValue(item as string)
  }, [getItem])

  const writeItemToStorage = async (newValue: string) => {
    if (Platform.OS === 'ios') {
      console.log(newValue, 'ios')
    } else {
      console.log(newValue, 'android')
    }
    await setItem(newValue)
    setValue(newValue)
  }

  useEffect(() => {
    readItemFromStorage()
  }, [readItemFromStorage])

  return (
    <View style={{margin: 40}}>
      <Text>Current value: {value}</Text>
      <Button
        onPress={() =>
          writeItemToStorage(Math.random().toString(36).substr(2, 5))
        }
        title={'Update Value'}
      />
    </View>
  )
}
