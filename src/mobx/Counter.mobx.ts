import {makeAutoObservable} from 'mobx'

class Counter {
  count = 10

  constructor() {
    makeAutoObservable(this, undefined, {autoBind: true})
  }

  minus() {
    this.count--
  }

  reset() {
    this.count = 0
  }

  add(val: number) {
    this.count += val
  }
  // 计算属性
  get double() {
    return this.count * 2
  }
}

export default new Counter()
