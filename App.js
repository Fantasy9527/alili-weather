import React from 'react';
import { StyleSheet, Text, View, ScrollView, } from "react-native";
import { Button, Switcher, TabButton, P, H4, B, Progress } from "nachos-ui";
import ViewPager from "react-native-viewpager"


import Dimensions from "Dimensions";
import { Ionicons } from '@expo/vector-icons';

var { height, width } = Dimensions.get("window");

var PAGES = [
  'Page 0',
  'Page 1',
  'Page 2',
];

export default class App extends React.Component {
constructor(){
  super();
  
   var dataSource = new ViewPager.DataSource({
      pageHasChanged: function(p1, p2) {return p1 !== p2 } ,
    });
    this.state = { progressValue: 0.05, temphigh: "1", templow :"2",dataSource:dataSource.cloneWithPages(PAGES)};
}
  componentWillMonunt(){
        let data;
        fetch(
          "https://way.jd.com/jisuapi/weather?city=杭州&citycode=101260301&appkey=4a35afd2f9f4642a39895948be231075"
        )
          .then(res => res.json())
          .then(res => {
            data = res;
            // console.log(data.code);
            
            this.setState({
              temphigh: 1,
              templow: 2
            });
            // this.setState({
            //   temphigh: data.result.result.daily[0].day.temphigh,
            //   templow: data.result.result.daily[0].night.templow
            // });
          });
          console.log(12121);

  }
  render() {

    return <View style={{ flex: 1 }}>
        <ScrollView style={{  flex: 1,backgroundColor:"#f5e7cc" }}>
          <View style={style.weatherBox}>
            <View style={{ height: 20 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ textAlign: "center", color: "#fff", fontSize: 45 }}>
                14℃
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  lineHeight: 16,
                  color: "#f99e67"
                }}
              >
                15° ~ 30°
              </Text>
              <Ionicons  name="ios-sunny" size={130} color="#fff" style={{ textAlign: "center"}}></Ionicons>
              
              <View />
            </View>
          </View>
            <Text style={{color:"#c64b44",textAlign:"center",marginTop:45,lineHeight:22}}>北京</Text>
            <Text style={{color:"#a6a48f",textAlign:"center",lineHeight:22}}>03/02 周四 9:30</Text>
            <Text style={{color:"#a6a48f",textAlign:"center",fontSize:10,lineHeight:20}}>空气质量:优</Text>


                <ViewPager dataSource={this.state.dataSource} renderPage={this._renderPage}/>
        </ScrollView>

        <TabButtonBox />
      </View>;
  }

    _renderPage (){
    return (
      <View>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
      </View>
    );
  }
}

var style = StyleSheet.create({
  weatherBox: {
    height: height/2-20,
    flex: 2,
    backgroundColor: "#e8854c",
    paddingTop: 20,
  }
});



class TabButtonBox extends React.Component {
  state = { valueOne: "walk", valueTwo: "volume" };
  render() {
    return (
      <Switcher
        onChange={valueOne =>
          this.setState({
            valueOne
          })}
        defaultSelected={this.state.valueOne}
      >
        <TabButton value="walk" text="Walk" iconName="md-walk" />
        <TabButton value="volume" text="Volume" iconName="md-volume-off" />
        <TabButton value="wine" text="Wine" iconName="md-wine" />
      </Switcher>
    );
  }
}




