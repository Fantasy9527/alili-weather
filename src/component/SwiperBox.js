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


var {height, width,} = Dimensions.get("window");

export default function SwiperBox(props) {
    let {daily,weatherIcon} = props;
    daily.shift();
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
        {daily.slice(0,3).map((daily,i)=>{
            if(i==0){
                daily.week="明天"
            }else if(i==1){
                daily.week="后天"
            }
            return <View style={{flex: 1}} key={i}>
            <Text style={style.weaterText}>{daily.week}</Text>
                <Ionicons
                    name={weatherIcon[daily.day.img]}
                    style={style.weaterIcons}></Ionicons>
                <Text style={style.weaterText}>{daily.day.temphigh}℃</Text>
            </View>
        }
        )}
        </View>

       <View
            style={[
            style.slide, {
                flexDirection: 'row'
            }
        ]}>
        {daily.slice(3,6).map((daily,i)=>
        <View style={{flex: 1}} key={i}>
            <Text style={style.weaterText}>{daily.week}</Text>
                <Ionicons
                    name={weatherIcon[daily.day.img]}
                    style={style.weaterIcons}></Ionicons>
                <Text style={style.weaterText}>{daily.day.temphigh}℃</Text>
            </View>
            )}
            
          

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
