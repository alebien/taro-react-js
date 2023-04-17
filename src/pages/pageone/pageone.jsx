/*
 * @Author: sxw s9x9w9@163.com
 * @Date: 2023-04-17 10:58:12
 * @LastEditors: sxw s9x9w9@163.com
 * @LastEditTime: 2023-04-17 12:09:27
 * @FilePath: \taro-react-js\src\pages\pageone\pageone.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import './pageone.less';

export default class Pageone extends Component {
  toBack() {
    Taro.navigateBack();
  }

  render() {
    return (
      <View className="pageone">
        <Text> Page One! </Text>
        <button onClick={ this.toBack }>返回首页新</button>
      </View>
    );
  }
}
