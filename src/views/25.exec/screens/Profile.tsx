import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styl.main}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styl = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
})
