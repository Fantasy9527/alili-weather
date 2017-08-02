import React from 'react';
import {StyleSheet, Text, View, ScrollView} from "react-native";

import Swiper from "react-native-swiper";
import {Ionicons} from '@expo/vector-icons';
import Dimensions from "Dimensions";
import {
    Button,
    Switcher,
    TabButton,
    P,
    H4,
    B,
    Progress
} from "nachos-ui";
var {height, width} = Dimensions.get("window");

export default function SwiperBox() {
    return <Swiper
                height = {300}
                style={style.Swiper}
                showsButtons={false}
                 buttonWrapperStyle={style.buttonWrapperStyle} 
                 paginationStyle={{
                    top: 0, left: 0, right: null
                    }} 
                 > 
        <View
            style={[
            style.slide, {
                flexDirection: 'row'
            }
        ]}>
            <View style={{
                flex: 1
            }}>
            <Text  style={{textAlign: "center"}}>明天</Text>
                <Ionicons
                    name="ios-sunny"
                    size={60}
                    color="#fff"
                    style={{
                    textAlign: "center"
                }}></Ionicons>
                <Text style={{textAlign: "center"}}>19℃ ~ 31℃</Text>
            </View>
            <View style={{
                flex: 1
            }}>
             <Text  style={{textAlign: "center"}}>明天</Text>
                <Ionicons
                    name="ios-sunny"
                    size={60}
                    color="#fff"
                    style={{
                    textAlign: "center"
                }}></Ionicons>
                <Text style={{textAlign: "center"}}>2</Text>
            </View>
            <View style={{
                flex: 1
            }}>
             <Text  style={{textAlign: "center"}}>明天</Text>
                <Ionicons
                    name="ios-sunny"
                    size={60}
                    color="#fff"
                    style={{
                    textAlign: "center"
                }}></Ionicons>
                <Text style={{textAlign: "center"}}>3</Text>
            </View>

        </View>
        <View style={[style.slide, style.slide2]}>
            <Ionicons
                name="ios-sunny"
                size={60}
                color="#fff"
                style={{
                textAlign: "center"
            }}></Ionicons>
        </View>
    </Swiper>
}

var style = StyleSheet.create({
    Swiper: {
        height: 10,
        marginTop: 80 ,
        marginBottom: 50
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 10,
        // backgroundColor: '#97CAE5',
        paddingHorizontal: 10
    },
    slide2: {
        // backgroundColor: '#ccc'
    },
    slide3: {
        // backgroundColor: 'red'
    },
    buttonWrapperStyle: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
