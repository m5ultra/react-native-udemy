import {StyleSheet, Text, View, Platform} from 'react-native'
import React, {useEffect} from 'react'
import Geolocation from '@react-native-community/geolocation'
const Demo18 = () => {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      geo => {
        if (Platform.OS === 'ios') {
          return console.log(geo, 'ios')
        } else {
          return console.log(geo, 'android')
        }
      },
      e => {
        if (Platform.OS === 'ios') {
          return console.log(e, 'ios')
        } else {
          return console.log(e, 'android')
        }
      },
      {
        timeout: 30000,
        maximumAge: 20000,
        enableHighAccuracy: true,
      },
    )
  })
  return (
    <View style={[styl.main]}>
      <Text>GeoLocation</Text>
    </View>
  )
}

export default Demo18

const styl = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
})
