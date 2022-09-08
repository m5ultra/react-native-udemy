import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native'

export const CustomButton = () => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.customBtnBG}
      onPress={() => {
        Alert.alert('警告标题', '警告内容警告内容警告内容', [
          {
            text: '稍后在试',
            onPress: () => console.log('Ask me later pressed'),
            style: 'destructive',
          },
          {
            text: '取消',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: '确定',
            style: 'default',
            onPress: () => console.log('OK Pressed'),
          },
        ])
      }}>
      <Text style={styles.customBtnText}>自定义按钮</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Here style the text of your button */
  customBtnText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },

  /* Here style the background of your button */
  customBtnBG: {
    backgroundColor: '#007aff',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
  },
})
