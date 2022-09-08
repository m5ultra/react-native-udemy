import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Demo06 = () => {
  return (
    <View style={styl.main}>
      <Text>Demo06</Text>
    </View>
  )
}

export default Demo06

const styl = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
