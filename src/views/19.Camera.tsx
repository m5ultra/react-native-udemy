import {StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import {Camera, useCameraDevices} from 'react-native-vision-camera'
const Demo19 = () => {
  useEffect(() => {
    ;(async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus()
      const microphonePermission = await Camera.getMicrophonePermissionStatus()
      console.log(cameraPermission, microphonePermission)
    })()
  })
  const devices = useCameraDevices()
  const device = devices.back

  if (device == null) {
    return (
      <View>
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
  },
})
