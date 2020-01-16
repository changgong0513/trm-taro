import Taro, { Component } from '@tarojs/taro'
import { View, Image  } from '@tarojs/components'

import './food-detail.scss'

class FoodDetail extends Component {

    config = {
        navigationBarTitleText: '食物详情'
    }

    render () {
        return (
            <View className='at-row'>
                <View className='at-col at-col-9'>
                    <Image className='menu-image'
                    src='http://i8.meishichina.com/attachment/recipe/200910/200910120907019.jpg@!p800'
                    />
                </View>
                <View className='at-col at-col-3'>菜谱名称：</View>
               
            </View>
        )
    }
}

export default FoodDetail
