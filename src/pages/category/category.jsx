import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './category.scss'

class Category extends Component {

  config = {
    navigationBarTitleText: '分类'
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='category'>
        <View><Text>Hello, Category</Text></View>
      </View>
    )
  }
}

export default Category
