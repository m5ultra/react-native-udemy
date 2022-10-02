import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const News = () => {
  return (
    <View style={styl.main}>
      <Text>News</Text>
    </View>
  )
}

export default News

const styl = StyleSheet.create({main: {backgroundColor: 'pink', flex: 1}})
