import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import {useMobx} from '../../../mobx/index.mobx'
import {observer} from 'mobx-react-lite'
const Home = () => {
  const {
    count: {count: num, minus, double, reset, add},
  } = useMobx()
  return (
    <View style={styl.main}>
      <Text>{num}</Text>
      <Text>{double}</Text>
      <Button title={'minus'} onPress={() => minus()} />
      <Button title={'reset'} onPress={() => reset()} />
      <Button title={'add'} onPress={() => add(3)} />
    </View>
  )
}

export default observer(Home)

const styl = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
  },
})
