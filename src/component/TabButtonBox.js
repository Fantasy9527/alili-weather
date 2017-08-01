import React from 'react';
import { StyleSheet, Text, View, ScrollView, } from "react-native";
import { Button, Switcher, TabButton, P, H4, B, Progress } from "nachos-ui";
import Dimensions from "Dimensions";
var { height, width } = Dimensions.get("window");

export default class TabButtonBox extends React.Component {
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
