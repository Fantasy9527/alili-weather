import React from 'react';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Switcher, TabButton, P, H4, B, Progress } from "nachos-ui";
import Dimensions from "Dimensions";;

var { height, width } = Dimensions.get("window");

export default class App extends React.Component {
constructor(){
  super();
  this.state = { progressValue: 0.05, temphigh: "1", templow :"2"};
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
        <ScrollView style={{ paddingTop: 20, flex: 1 }}>
          <View style={style.weatherBox}>
            <View style={{ height: 20 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ textAlign: "center", color: "#fff", fontSize: 75 }}>
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
              <View />
            </View>
          </View>
        </ScrollView>

        <TabButtonBox />
      </View>;
  }
}

var style = StyleSheet.create({
  weatherBox: {
    height: height/2-20,
    flex: 2,
    backgroundColor: "#e8854c"
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




