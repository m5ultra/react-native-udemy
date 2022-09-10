import React, {useState} from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native'

type ItemType = {id: string; title: string}
const data: ItemType[] = [
  {
    id: '01',
    title: '娱乐',
  },
  {
    id: '02',
    title: '文艺',
  },
  {
    id: '03',
    title: '军事',
  },
  {
    id: '04',
    title: '动作',
  },
  {
    id: '05',
    title: '爱情',
  },
  {
    id: '06',
    title: '动漫',
  },
  {
    id: '07',
    title: '时尚',
  },
  {
    id: '08',
    title: '财经',
  },
  {
    id: '09',
    title: '科技',
  },
  {
    id: '10',
    title: '咨询',
  },
]
const handleGetNextPages = () => {
  // 获取下一页的数据
}
const handleRefresh = () => {
  // 获取下一页的数据
}
type titleType = {title: string; index?: number}

const Demo12 = () => {
  const [selIdx, setSelIdx] = useState<number>(0)
  const handleItemClick = (index: number) => {
    setSelIdx(index)
  }
  const Item = ({title, index}: titleType) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {title} + {index} + {selIdx}
      </Text>
    </View>
  )

  const renderItem = ({item, index}: {item: ItemType; index: number}) => {
    return (
      <TouchableOpacity onPress={() => handleItemClick(index)}>
        <Item title={item.title} index={index} />
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => (
          // Item的分割线
          <View style={{borderBottomColor: 'skyblue', borderBottomWidth: 1}} />
        )}
        ListEmptyComponent={() => <Text>内容为空时显示</Text>}
        // 下拉刷新
        refreshing={false}
        onRefresh={() => handleRefresh()}
        // 上拉加载更多
        onEndReachedThreshold={0.1}
        onEndReached={handleGetNextPages}
        ListHeaderComponent={() => <Text>Header</Text>}
        ListFooterComponent={() => <Text>Footer</Text>}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        inverted={false} // 反转列表
        horizontal={false} //水平列表
        initialScrollIndex={0} // 列表滚动到那个位置 IOS好像无效
        initialNumToRender={4} // 先加载前4条 可以指定第一屏幕自动加载
        numColumns={0} // 多列 不支持瀑布流
        extraData={selIdx}
      />
    </SafeAreaView>
  )
}

export default Demo12

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})
