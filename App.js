import React from 'react';
import { StyleSheet, Text, View, ScrollView, } from "react-native";
import { Button, Switcher, TabButton, P, H4, B, Progress } from "nachos-ui";
import moment from 'moment';

import Dimensions from "Dimensions";
import { Ionicons } from '@expo/vector-icons';

import TabButtonBox from "./src/component/TabButtonBox";
import SwiperBox from "./src/component/SwiperBox";
import WeatherMain from "./src/component/WeatherMain";
import weatherIcon from './src/data/weatherIcon';
moment.locale("zh-cn");

var { height, width } = Dimensions.get("window");


export default class App extends React.Component {
constructor(){
  super();
    this.state = { temphigh:null,templow:null};
    
}

  componentWillMount(){
        let data;
        fetch("https://way.jd.com/jisuapi/weather?city=杭州&citycode=101260301&appkey=4a35afd2f9f4642a39895948be231075")
          .then(res => res.json())
          .then(res => { 
            data = res.result.result;
            this.setState({
              temphigh: data.temphigh,
              templow: data.templow,
              temp:data.temp,
              img:data.img,
              data:data

            })
          }).catch((error) => {           
            console.error(error);
      });
  }
  render() {
    let {data} = this.state;
    return <View style={{ flex: 1 }}>
        <ScrollView style={{  flex: 1,backgroundColor:"#f5e7cc" }}>
          <WeatherMain {...this.state} weatherIcon={weatherIcon}></WeatherMain>
          <View style={{height:10}}>
            <Text style={{color:"#c64b44",textAlign:"center",marginTop:45,lineHeight:22}}>{(data||{city:null}).city}</Text>
            <Text style={{color:"#a6a48f",textAlign:"center",lineHeight:22}}>{moment((data||{updatetime:''}).updatetime).format("MM/DD dddd h:mm")}</Text>
            <Text style={{color:"#a6a48f",textAlign:"center",fontSize:10,lineHeight:20}}>空气质量:{(data||{aqi:"优"}).aqi.quality}</Text>
          </View>
            <SwiperBox daily={(data||{daily:[]}).daily} weatherIcon={weatherIcon}></SwiperBox>
        </ScrollView>
        {/* <TabButtonBox /> */}
      </View>;
  }

}

var style = StyleSheet.create({

});






 