import {StyleSheet, View} from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'

const Demo141 = () => {
  return (
    <View style={styl.main}>
      <WebView source={{uri: 'https://m.baidu.com/'}} style={{flex: 1}} />
    </View>
  )
}

export default Demo141

const styl = StyleSheet.create({
  main: {
    flex: 1,
  },
})
