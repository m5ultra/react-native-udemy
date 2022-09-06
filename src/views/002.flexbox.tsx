import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const FlexBox = () => {
  return (
    <View style={styl.main}>
      <Text style={[{lineHeight: 14}]}>Flex Direction</Text>
      <View>
        <Text style={[{fontSize: 14}]}>FlexDirection: 'column'</Text>
      </View>
    </View>
  )
}

const styl = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
  },
})
export default FlexBox
