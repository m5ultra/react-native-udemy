import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const FlexBox = () => {
  const list = ['刘备', '关羽', '张飞']
  return (
    <View style={styl.main}>
      <Text style={[styl.h2, {width: '100%'}]}>主轴方向</Text>
      <View
        style={{width: '100%', padding: 3, paddingTop: 0, paddingBottom: 0}}>
        <Text style={[styl.h3]}>FlexDirection: 'column' 默认</Text>
        <View style={[styl.list]}>
          {list.map(v => (
            <Text style={styl.itemBase} key={v}>
              {v}
            </Text>
          ))}
        </View>
        <Text style={[styl.h3]}>FlexDirection: 'column-reverse'</Text>
        <View style={[styl.list, {flexDirection: 'column-reverse'}]}>
          {list.map(v => (
            <Text style={styl.itemBase} key={v}>
              {v}
            </Text>
          ))}
        </View>
        <Text style={[styl.h3]}>FlexDirection: 'row'</Text>
        <View style={[styl.list, {flexDirection: 'row'}]}>
          {list.map(v => (
            <Text style={[styl.itemBase, {width: 'auto'}]} key={v}>
              {v}
            </Text>
          ))}
        </View>
        <Text style={[styl.h3]}>FlexDirection: 'row-reverse'</Text>
        <View style={[styl.list, {flexDirection: 'row-reverse'}]}>
          {list.map(v => (
            <Text style={[styl.itemBase, {width: 'auto'}]} key={v}>
              {v}
            </Text>
          ))}
        </View>
      </View>
    </View>
  )
}

const styl = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    width: '100%',
  },
  list: {
    height: 120,
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: '#ddd',
    width: '100%',
  },
  h3: {
    fontSize: 24,
  },
  h2: {
    fontSize: 30,
  },
  itemBase: {
    height: 30,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#dfb',
    padding: 4,
    width: '100%',
  },
})
export default FlexBox
