import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import './analysis.scss'

class Analysis extends Component {

    config = {
    navigationBarTitleText: '分析'
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='analysis'>
        <View><Text>Hello, Analysis</Text></View>
      </View>
    )
  }
}

export default Analysis
