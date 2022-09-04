import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const styl = StyleSheet.create({
  main: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    marginTop: 55,
  },
})

const Root = () => {
  return (
    <View style={styl.main}>
      <Text>Hello Tsx</Text>
    </View>
  )
}

export default Root
