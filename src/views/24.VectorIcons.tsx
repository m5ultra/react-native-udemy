import {StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import IconFont from '../icons'
const VectorIcons = () => {
  return (
    <View style={styl.main}>
      <Text style={{fontSize: 20, alignSelf: 'flex-start'}}>图标库图标</Text>
      <Icon name="home" />
      <Icon name="hardware-chip" size={26} />
      <Icon
        name="hardware-chip"
        size={40}
        color={'skyblue'}
        onPress={e => console.log(e)}
      />
      <Text style={{fontSize: 20, alignSelf: 'flex-start'}}>自定义图标</Text>
      <IconFont name="gongwenbao" size={50} />
      <IconFont name="view-detail" size={50} />
      <IconFont name="wecode" size={50} />
      <IconFont name="star" size={50} />
      <IconFont name="guanbi" size={20} color={'skyblue'} />
    </View>
  )
}

export default VectorIcons

const styl = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
})
