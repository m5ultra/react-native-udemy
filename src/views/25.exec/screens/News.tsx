import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {observer} from 'mobx-react-lite'
import {useMobx} from '../../../mobx/index.mobx'

const News = () => {
  const {
    count: {count: num},
  } = useMobx()
  return (
    <View style={styl.main}>
      <Text>News</Text>
      <Text>{num}</Text>
    </View>
  )
}

export default observer(News)

const styl = StyleSheet.create({main: {backgroundColor: 'pink', flex: 1}})
