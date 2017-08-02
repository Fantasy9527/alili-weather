import React from 'react';
import { StyleSheet, Text, View, ScrollView, } from "react-native";
import { Button, Switcher, TabButton, P, H4, B, Progress } from "nachos-ui";

import Dimensions from "Dimensions";
import { Ionicons } from '@expo/vector-icons';

import TabButtonBox from "./src/component/TabButtonBox";
import SwiperBox from "./src/component/SwiperBox";
import WeatherMain from "./src/component/WeatherMain";


var { height, width } = Dimensions.get("window");


export default class App extends React.Component {
constructor(){
  super();
    this.state = { progressValue: 0.05, temphigh: "1", templow :"2"};
}

  componentWillMonunt(){
        let data;
        fetch("https://way.jd.com/jisuapi/weather?city=杭州&citycode=101260301&appkey=4a35afd2f9f4642a39895948be231075")
          .then(res => res.json())
          .then(res => { 
            data = res;
            alert(data)
            this.setState({
              temphigh: 1,
              templow: 2,
              //temphigh: data.result.result.daily[0].day.temphigh,
              //templow: data.result.result.daily[0].night.templow
            })
          }).catch((error) => {
            alert(error)
        console.error(error);
      });
  }
  render() {
    return <View style={{ flex: 1 }}>
        <ScrollView style={{  flex: 1,backgroundColor:"#f5e7cc" }}>
          <WeatherMain></WeatherMain>
          <View style={{height:10}}>
            <Text style={{color:"#c64b44",textAlign:"center",marginTop:45,lineHeight:22}}>北京</Text>
            <Text style={{color:"#a6a48f",textAlign:"center",lineHeight:22}}>03/02 周四 9:30</Text>
            <Text style={{color:"#a6a48f",textAlign:"center",fontSize:10,lineHeight:20}}>空气质量:优</Text>
          </View>
            <SwiperBox></SwiperBox>
        </ScrollView>
        {/* <TabButtonBox /> */}
      </View>;
  }

}

var style = StyleSheet.create({

});






 