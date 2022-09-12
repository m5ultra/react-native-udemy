import {StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import React from 'react'

const Demo21 = () => {
  return (
    <View style={[styl.main]}>
      <View style={[styl.loading]}>
        <ActivityIndicator color={'green'} />
        <Text style={[styl.loadingTxt]}>加载中...</Text>
      </View>
    </View>
  )
}

export default Demo21

const styl = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#999',
  },
  loadingTxt: {
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
  },
})
