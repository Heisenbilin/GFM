

import React from 'react';
import { View,Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';


class Head extends React.Component{
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{flex: 1,flexDirection: 'row'}}>
        <View style={{flex: 2, backgroundColor: 'white'}} />
        <View style={{flex: 3, justifyContent: 'center',alignItems: 'center',backgroundColor: 'powderblue'}} >
          <Text>
            女友（1/1）
          </Text>
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue',flexDirection: 'row'}} >
          <View style={{flex: 3,justifyContent: 'center',alignItems: 'center'}} >
            <Svg width={24} height={24} class="icon" viewBox="0 0 1024 1024"  p-id="3888">
              <Path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z" fill="#5A5A68" p-id="3889"></Path><Path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z" fill="#5A5A68" p-id="3890">
              </Path>
            </Svg>
          </View>
          <View style={{flex: 3,justifyContent: 'center',alignItems: 'center'}}>
            <Svg width={28} height={28} class="icon" viewBox="0 0 1024 1024"  p-id="4637">
              <Path d="M546.133333 477.866667h136.533334v68.266666h-136.533334v136.533334h-68.266666v-136.533334h-136.533334v-68.266666h136.533334v-136.533334h68.266666v136.533334z m-34.133333 341.333333a307.2 307.2 0 1 0 0-614.4 307.2 307.2 0 0 0 0 614.4z m0 68.266667C304.64 887.466667 136.533333 719.36 136.533333 512S304.64 136.533333 512 136.533333s375.466667 168.106667 375.466667 375.466667-168.106667 375.466667-375.466667 375.466667z" fill="#5A5A68" p-id="4638">
              </Path></Svg>
          </View>
          <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}></View>
        </View>
      </View>
    );
  }
}

export default Head;
