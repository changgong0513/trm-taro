import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

// taro-ui
import { AtSearchBar, AtTabs, AtTabsPane, AtGrid } from 'taro-ui'

import './category.scss'

class Category extends Component {

  config = {
    navigationBarTitleText: '分类'
  }
  
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
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

  render () {
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

        {/* 食材分类标签页 */}
        <view>
          <AtTabs
            current={this.state.current}
            scroll
            height='600px'
            tabDirection='vertical'
            tabList={[
              { title: '谷薯类及其制品' },
              { title: '豆类及其制品' },
              { title: '蔬菜类及其制品' },
              { title: '菌藻类' },
              { title: '水果类及其制品' },
              { title: '坚果、种子类' },
              { title: '畜禽肉类' },
              { title: '奶、蛋及其制品类' },
              { title: '鱼虾蟹贝类' },
              { title: '油脂类' }
            ]}
            onClick={this.handleClick.bind(this)}>
                <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
                  <view style='font-size:18px;text-align:center;'>
                  <AtGrid hasBorder={false} data={[
                        {
                          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                          value: '小麦'
                        },
                        {
                          image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                          value: '大米'
                        },
                        {
                          image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                          value: '小米'
                        },
                        {
                          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                          value: '大麦'
                        },
                        {
                          image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                          value: '荞麦'
                        },
                        {
                          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                          value: '燕麦'
                        },{
                          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                          value: '高粱米'
                        },
                        {
                          image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                          value: '玉米'
                        },
                        {
                          image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                          value: '薏米'
                        },
                        {
                          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                          value: '马铃薯'
                        },
                        {
                          image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                          value: '红薯'
                        },
                        {
                          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                          value: '菜花'
                        },
                        {
                          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                          value: '菜花'
                        },
                        {
                          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                          value: '菜花'
                        },
                        {
                          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                          value: '菜花'
                        },
                        {
                          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                          value: '菜花'
                        },
                        {
                          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                          value: '菜花'
                        },
                        {
                          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                          value: '菜花'
                        },
                        {
                          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                          value: '菜花'
                        },
                        {
                          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                          value: '菜花'
                        },
                        {
                          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                          value: '菜花'
                        }]} />
                        </view>
              </AtTabsPane>

            <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
              <View >豆类及其制品的内容</View>
            </AtTabsPane>
            <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
              <View >蔬菜类及其制品的内容</View>
            </AtTabsPane>
            <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
              <View >菌藻类的内容</View>
            </AtTabsPane>
            <AtTabsPane tabDirection='vertical' current={this.state.current} index={4}>
              <View >水果类及其制品的内容</View>
            </AtTabsPane>
            <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
              <View >坚果、种子类的内容</View>
            </AtTabsPane>
            <AtTabsPane tabDirection='vertical' current={this.state.current} index={6}>
              <View >畜禽肉类的内容</View>
            </AtTabsPane>
            <AtTabsPane tabDirection='vertical' current={this.state.current} index={6}>
              <View >奶、蛋及其制品类</View>
            </AtTabsPane>
            <AtTabsPane tabDirection='vertical' current={this.state.current} index={7}>
              <View >鱼虾蟹贝类的内容</View>
            </AtTabsPane>
            <AtTabsPane tabDirection='vertical' current={this.state.current} index={8}>
              <View >油脂类的内容</View>
            </AtTabsPane>
          </AtTabs>
        </view>
      </View>
    )
  }
}

export default Category
