import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Demo = () => {
  return (
    <View style={styl.main}>
      {/* 01.行内样式 */}
      <Text style={{fontSize: 24}}>Hello Tsx</Text>
      {/* 02.数组方式声明样式 */}
      <Text style={[{color: 'red'}, {color: 'green'}]}>数组方式声明样式</Text>

      <View style={main}>
        <Text>002</Text>
      </View>
    </View>
  )
}

// 03.使用StyleSheet声明样式
const styl = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
})
const styl02 = StyleSheet.create({
  main: {
    backgroundColor: 'tomato',
    justifyContent: 'center',
  },
})

// @ts-ignore
const main = StyleSheet.compose(styl.main, styl02.main)
export default Demo
