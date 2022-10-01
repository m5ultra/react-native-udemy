import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styl.main}>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styl = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
})
