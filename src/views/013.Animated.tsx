import {StyleSheet, Text, View, Animated, Button} from 'react-native'
import React, {useEffect, useRef} from 'react'
import { transformer } from '../../metro.config'
// React Native 4 个可以直接使用的动画
// Animated.View
// Animated.Text
// Animated.ScrollView
// Animated.Image
/**
 *
 * 01.如何创建动画
 *    Animated.Value() 透明度
 *    Animated.ValueXY() 元素位置 有x, y两个值
 * 02.将初始值绑定到动画组建上
 *    一般将其绑定到某个样式属性下 例如: opacity translate
 * 03.通过动画类型API, 一帧一帧的更改初始值
 *    Animated.decay()  加速效果
 *    Animated.spring() 弹跳效果
 *    Animated.timing() 时间渐变效果
 */
const Demo13 = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const moveAnim = useRef(new Animated.Value(0)).current
  useEffect(() => {
    scanMove()
  })
  const scanMove = () => {
    Animated.timing(moveAnim, {
      toValue: 198,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      moveAnim.setValue(0)
      scanMove()
    })
  }
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start()
  }

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start()
  }
  return (
    <View>
      <Text>动画组建使用</Text>
      <Animated.View
        style={[
          styl.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styl.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styl.buttonRow}>
        <Button title="淡入" onPress={fadeIn} />
        <Button title="淡出" onPress={fadeOut} />
      </View>
      <View style={styl.scanContainer}>
        <Animated.View
          style={[styl.line, {transform: [{translateY: moveAnim}]}]}
        />
      </View>
    </View>
  )
}

export default Demo13

const styl = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  // 模拟二维码扫描的样式
  scanContainer: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: 'skyblue',
    position: 'relative',
    left: '50%',
    transform: [{translateX: -100}],
  },
  line: {
    borderWidth: 1,
    borderColor: 'red',
  },
})
