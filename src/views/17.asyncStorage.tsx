import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Demo17 = () => {
  return (
    <View style={styl.main}>
      <Text>Demo17</Text>
    </View>
  )
}

export default Demo17

const styl = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'green',
  },
})
