import Taro, { Component } from '@tarojs/taro'

// taro内置ui
import { View } from '@tarojs/components'

// taro-ui
import { AtSearchBar, AtTabs, AtTabsPane, AtGrid, AtCard } from 'taro-ui'

import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      current: 0,
    }
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onChange (value) {
    this.setState({
      value: value
    })
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  openFoodDetail(item) {
    console.log(item.value);
    console.log(item.index);
    
    // 跳转到目的页面，打开新页面
    Taro.navigateTo({ url: '/pages/food-detail/food-detail'})
  }

  render () {
    const tabList = [{ title: '食材' }, { title: '菜谱' }]

    return (
      <View>
        {/* 搜索栏 */}
        <View className='at-row'>
          <View className='at-col'>
            <AtSearchBar 
              value={this.state.value}
              onChange={this.onChange.bind(this)}
            />
          </View>
        </View>

        {/* 标签页 */}
        <View className='at-row'>
          <View className='at-col'>
            <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
              <AtTabsPane current={this.state.current} index={0} >
                <View style='background-color: #FAFBFC;text-align: center;' >
                <AtGrid onClick={this.openFoodDetail.bind(this.item)} data={[
                    {
                      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                      value: '土豆',
                      index: 0
                    },
                    {
                      image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                      value: '鸡肉'
                    },
                    {
                      image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                      value: '猪肉'
                    },
                    {
                      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                      value: '牛肉'
                    },
                    {
                      image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                      value: '鱼肉'
                    },
                    {
                      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                      value: '黄瓜'
                    },{
                      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                      value: '鸡蛋'
                    },
                    {
                      image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                      value: '芸豆'
                    },
                    {
                      image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                      value: '豇豆'
                    },
                    {
                      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                      value: '蒜薹'
                    },
                    {
                      image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                      value: '韭菜'
                    },
                    {
                      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                      value: '菜花'
                    }]} />
                </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1} >
                <View className='example-item example-item--card' style='padding-top:5px;'>
                  <AtCard
                    note='小Tips'
                    extra='额外信息'
                    title='这是个标题1'
                    thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                  >
                    菜谱介绍1
                  </AtCard>
                </View>
                <View className='example-item example-item--card' style='padding-top:5px;'>
                  <AtCard
                    note='小Tips'
                    extra='额外信息'
                    title='这是个标题2'
                    thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                  >
                    菜谱介绍2
                  </AtCard>
                </View>
                <View className='example-item example-item--card' style='padding-top:5px;'>
                  <AtCard
                    note='小Tips'
                    extra='额外信息'
                    title='这是个标题3'
                    thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                  >
                    菜谱介绍3
                  </AtCard>
                </View>
                <View className='example-item example-item--card' style='padding-top:5px;'>
                  <AtCard
                    note='小Tips'
                    extra='额外信息'
                    title='这是个标题4'
                    thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                  >
                    菜谱介绍4
                  </AtCard>
                </View>
                <View className='example-item example-item--card' style='padding-top:5px;'>
                  <AtCard
                    note='小Tips'
                    extra='额外信息'
                    title='这是个标题5'
                    thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                  >
                    菜谱介绍5
                  </AtCard>
                </View>
                <View className='example-item example-item--card' style='padding-top:5px;'>
                  <AtCard
                    note='小Tips'
                    extra='额外信息'
                    title='这是个标题6'
                    thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                  >
                    菜谱介绍6
                  </AtCard>
                </View>
              </AtTabsPane>
            </AtTabs>
          </View>
        </View>

      </View>
    )
  }
}

export default Index
