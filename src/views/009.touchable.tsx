import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import React from 'react'

const Demo09 = () => {
  return (
    <View style={styl.main}>
      <TouchableHighlight
        activeOpacity={0.7} // 对Text中文字有影响
        underlayColor="skyblue"
        style={{
          width: '50%',
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          borderRadius: 22.5,
        }}
        onPress={() => console.log('触碰高亮显示')}>
        <Text>触碰高亮</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={styl.btn}
        onPress={() => console.log('触碰透明度变化')}>
        <Text>触碰透明度</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback
        style={styl.btn}
        onPress={() => console.log('触碰无响应')}>
        <Text>触碰无响应</Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Demo09

const styl = StyleSheet.create({
  main: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    width: '50%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 22.5,
  },
})
