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
    let dot = <View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
    let activeDot = <View style={{backgroundColor: '#c64b44', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />    
        return <Swiper
                height = {300}
                style={style.Swiper}
                showsButtons={false}
                buttonWrapperStyle={style.buttonWrapperStyle} 
                activeDot={activeDot}
                paginationStyle={style.paginationStyle}
                 > 
        <View
            style={[
            style.slide, {
                flexDirection: 'row'
            }
        ]}>
            <View style={{flex: 1}}>
            <Text style={style.weaterText}>明天</Text>
                <Ionicons
                    name="ios-sunny"
                    style={style.weaterIcons}></Ionicons>
                <Text style={style.weaterText}>19℃ ~ 31℃</Text>
            </View>
            <View style={{
                flex: 1
            }}>
             <Text style={style.weaterText}>明天</Text>
                <Ionicons
                    name="ios-sunny"
                    style={style.weaterIcons}></Ionicons>
                <Text style={style.weaterText}>2</Text>
            </View>
            <View style={{
                flex: 1
            }}>
             <Text  style={style.weaterText}>明天</Text>
                <Ionicons
                    name="ios-sunny"
                    style={style.weaterIcons}></Ionicons>
                <Text style={style.weaterText}>3</Text>
            </View>

        </View>
        <View style={[style.slide, style.slide2]}>
            <Ionicons
                name="ios-sunny"
                style={style.icons}></Ionicons>
        </View>
    </Swiper>
}

var style = StyleSheet.create({
    Swiper: {
       // height: 10,
       marginTop: 105 ,
    //    marginBottom: 50
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 10,
        paddingHorizontal: 10
    },
    slide2: {
    },
    slide3: {
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
    },
    paginationStyle:{
        top: 0, left: 0, right: 0
    },
    weaterIcons:{
        textAlign: "center",
        color:'#c64b44',
        fontSize:60,
        paddingTop:8
    },
    weaterText:{
        color:"#29555e",
        textAlign: "center",
    }
    
});
