import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View style={styl.main}>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings

const styl = StyleSheet.create({main: {flex: 1, backgroundColor: 'purple'}})
