import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import SafeAreaView from './src/components/SafeAreaView'

const styl = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
})

const Root = () => {
  return (
    <SafeAreaView>
      <View style={styl.main}>
        <Text>Hello Tsx</Text>
      </View>
    </SafeAreaView>
  )
}

export default Root
