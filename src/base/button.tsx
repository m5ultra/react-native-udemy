import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'

export const CustomButton = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.customBtnBG} onPress={() => {}}>
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
