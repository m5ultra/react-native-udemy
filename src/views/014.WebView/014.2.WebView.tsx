import {StyleSheet, View} from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'

const Demo142 = () => {
  return (
    <View style={styl.main}>
      <WebView
        originWhitelist={['*']}
        source={{
          html: `<h1>
                  Hello world
                  <p style="color: red; display: 'flex'; justify-content:'center'">Hello </p>
                </h1>`,
        }}
      />
    </View>
  )
}

export default Demo142

const styl = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
})
