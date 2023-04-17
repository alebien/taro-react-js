import { Component } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.less";

export default class Index extends Component {
  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidShow() {
    console.log("componentDidShow");
  }

  componentDidHide() {
    console.log("componentDidHide");
  }

  toPageone() {
    Taro.navigateTo({ url: "/pages/pageone/pageone" });
    console.log(123);
  }

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <button onClick={this.toPageone}>
          to Page One
        </button>
      </View>
    );
  }
}
