import React from 'react';
import { StyleSheet, Text, View, ScrollView, } from "react-native";
import { Button, Switcher, TabButton, P, H4, B, Progress } from "nachos-ui";

import { Ionicons } from '@expo/vector-icons';
import Dimensions from "Dimensions";
var { height, width } = Dimensions.get("window");

export default function WeatherMain(){
    return <View style={style.weatherBox}>
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
        <Ionicons name="ios-sunny" size={130} color="#fff" style={{ textAlign: "center" }}></Ionicons>
        <View />
    </View>
</View>
} 




var style = StyleSheet.create({
  weatherBox: {
    height: height / 2 - 20,
    flex: 2,
    backgroundColor: "#e8854c",
    paddingTop: 20,
  }
});
