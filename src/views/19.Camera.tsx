import {StyleSheet, Text, View, Platform} from 'react-native'
import React, {useEffect} from 'react'
import {Camera, useCameraDevices} from 'react-native-vision-camera'
const Demo19 = () => {
  useEffect(() => {
    // 1.先获取权限
    // 2.如果用户没有获取过权限 使用requestCameraPermission
    // 3.如果获取过 用户点了 拒绝, 调用LinkAPI 重置
    ;(async () => {
      const newCameraPermission = await Camera.requestCameraPermission()
      const newMicrophonePermission = await Camera.requestMicrophonePermission()
      if (Platform.OS === 'ios') {
        console.log(newCameraPermission, newMicrophonePermission, 'ios')
      } else {
        console.log(newCameraPermission, newMicrophonePermission, 'android')
      }
    })()
  }, [])
  const devices = useCameraDevices()
  const device = devices.back

  if (device == null) {
    return (
      <View style={styl.main}>
        <Text>Loading</Text>
      </View>
    )
  }
  return (
    <View style={styl.main}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  )
}

export default Demo19

const styl = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    alignItems: 'center',
  },
})
