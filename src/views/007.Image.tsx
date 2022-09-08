import {StyleSheet, Image, View} from 'react-native'
import React from 'react'

const Demo07 = () => {
  return (
    <View style={styl.main}>
      <Image style={[styl.img]} source={require('../imgs/1.png')} />
      {/* <Image
        style={styl.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      /> */}
      <Image
        style={styl.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styl.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </View>
  )
}

export default Demo07

const styl = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    width: 238.8,
    height: 159.2,
  },
  logo: {
    width: 66,
    height: 58,
  },
    tinyLogo: {
    width: 50,
    height: 50,
  },
})
