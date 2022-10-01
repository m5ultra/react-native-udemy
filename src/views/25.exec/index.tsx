import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Exec = () => {
  return (
    <View style={styl.main}>
      <Text>Exec</Text>
    </View>
  )
}

export default Exec

const styl = StyleSheet.create({
  main: {
    flex: 1,
  },
})
