import {Dimensions, StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Dim = () => {
  const list = ['扫一扫', '付款码', '卡包', '出行']
  return (
    <View style={styl.main}>
      {list.map(v => (
        <Text style={[styl.item]} key={v}>
          {v}
        </Text>
      ))}
    </View>
  )
}

export default Dim
const w = Dimensions.get('window').width - 6
const styl = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: w / 3,
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: 'tomato',
    marginBottom: 5,
  },
})
