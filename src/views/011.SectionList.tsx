import React from 'react'
import {StyleSheet, Text, View, SectionList, StatusBar} from 'react-native'

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
]
type titleType = {title: string}
const Item = ({title}: titleType) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const Demo11 = () => (
  <SectionList
    sections={DATA}
    keyExtractor={(item, index) => item + index}
    renderItem={({item}) => <Item title={item} />} // Item
    renderSectionHeader={(
      {section: {title}}, // 每项的Header
    ) => <Text style={styles.header}>{title}</Text>}
    ItemSeparatorComponent={(v, v1) => {
      console.log(v, v1, 'H1')
      return (
        <View style={{borderBottomColor: 'skyblue', borderBottomWidth: 1}} />
      )
    }}
    ListEmptyComponent={() => <Text>空空如也!</Text>}
    // 下拉刷新
    refreshing={false} // 下拉刷新指示器 可以设置为false 自定义一个一个loading效果 通过状态控制显示和隐藏
    onRefresh={() => {
      console.log('下拉刷新')
    }}
    onEndReachedThreshold={0.1}
    onEndReached={() => console.log('没有更多内容了')}
    ListHeaderComponent={() => <Text>Header</Text>}
    ListFooterComponent={() => <Text>Footer</Text>}
  />
)

export default Demo11

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
})
