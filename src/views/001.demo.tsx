import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Demo = () => {
  return (
    <View style={styl.main}>
      <Text>Hello Tsx</Text>
    </View>
  )
}

const styl = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
})
export default Demo
