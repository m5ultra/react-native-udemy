import {createContext, useContext} from 'react'
import count from './Counter.mobx'
const RootMox = {
  count,
}
const Context = createContext(RootMox)
export const useMobx = () => useContext(Context)
