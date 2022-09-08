import {StyleSheet, View, StatusBar, Switch, StatusBarStyle} from 'react-native'
import React, {useState} from 'react'
const STYLES = ['default', 'dark-content', 'light-content']
const TRANSITIONS = ['fade', 'slide', 'none']
type transitionType = 'fade' | 'slide' | 'none' | null | undefined
const Demo05 = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0])
  const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0])

  const toggleSwitch = () => {
    setIsEnabled(v => !v)
    changeStatusBarStyle()
    changeStatusBarTransition()
  }
  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0])
    } else {
      setStatusBarStyle(STYLES[styleId])
    }
  }

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0])
    } else {
      setStatusBarTransition(TRANSITIONS[transition])
    }
  }

  return (
    <View style={styl.main}>
      <StatusBar
        animated={true}
        barStyle={statusBarStyle as StatusBarStyle}
        showHideTransition={statusBarTransition as transitionType}
        backgroundColor="#61dafb" // android才有效果
        hidden={isEnabled}
      />
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default Demo05

const styl = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
