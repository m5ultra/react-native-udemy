import React from 'react'
import {StatusBar} from 'react-native'

import RootNavigator from './Navs'

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar />
    </>
  )
}
