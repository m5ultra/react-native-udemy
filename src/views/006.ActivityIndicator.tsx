import {StyleSheet, View, Dimensions, ActivityIndicator} from 'react-native'
import React from 'react'

const Demo06 = () => {
  return (
    <View style={styl.main}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  )
}

export default Demo06

const vw = Dimensions.get('window').width - 10
const styl = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 5,
    width: vw,
    backgroundColor: 'skyblue',
  },
})
