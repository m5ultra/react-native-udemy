import React, {PropsWithChildren} from 'react'
import {StyleSheet, Platform, StatusBar, SafeAreaView} from 'react-native'

export default (props: PropsWithChildren) => (
  <SafeAreaView style={styl.AndroidSafeArea} {...props}>
    {props.children}
  </SafeAreaView>
)

const styl = StyleSheet.create({
  AndroidSafeArea: {
    // android 设备上部增加 paddingTop
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
})
