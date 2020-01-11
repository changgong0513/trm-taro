import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './mine.scss'

class Mine extends Component {

    config = {
    navigationBarTitleText: '我的'
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='mine'>
        <View><Text>Hello, Mine</Text></View>
      </View>
    )
  }
}

export default Mine
