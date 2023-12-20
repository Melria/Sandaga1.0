import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    ScrollView
  } from "react-native";

  import orange from "../assets/orange.png";
  import leftArrow1 from "../assets/leftArrow1.png";
  import lock from "../assets/lock.png";
  import trash from "../assets/trash.png";
  import grape from "../assets/grape.png";  
  import apple from "../assets/apple.png";
  import stawberry from "../assets/stawberry.png";

  const Basket = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                <View style={{height:30,width:40,alignItems:'center',borderRadius:10,backgroundColor:'#fff',marginLeft:35}}><Image source={leftArrow1} style={{height:30,width:30,marginLeft:0}}></Image></View>
                </TouchableOpacity>
                <View style={{marginTop:3}}><Image source={lock} style={{height:50,width:70}}></Image></View>
            </View>

            <View style={styles.text}>
                <Text style={{fontSize:24}}>My</Text>
                <Text style={{fontSize:24}}>Order</Text>
            </View>

            <View style={styles.list}> 
                <View style={styles.fruitInfo}>
                    <View style={styles.orange}><Image source={orange} style={{width:65,height:60}}></Image></View>
                    <View><Text style={{position:'relative',right:20,top:20}}>1X</Text></View>
                    <View style={{display:'flex',flexDirection:'column'}}>
                        <Text style={{position:'relative',top:20,left:10}}>Orange</Text>
                        <Text style={{position:'relative',top:20,left:10}}>$10</Text>
                    </View>
                    <View style={{position:'relative',left:70,top:25}}><Image source={trash} style={{width:15,height:20}}></Image></View>
                </View>
                <View style={styles.fruitInfo}>
                    <View style={styles.stawberry}><Image source={stawberry} style={{width:75,height:70}}></Image></View>
                    <View><Text style={{position:'relative',left:-25,top:25}}>1X</Text></View>
                    <View style={{display:'flex',flexDirection:'column'}}>
                        <Text style={{position:'relative',top:20,left:10}}>Stawberry</Text>
                        <Text style={{position:'relative',top:20,left:10}}>$12</Text>
                        </View>
                    <View style={{position:'relative',left:55,top:25}}><Image source={trash} style={{width:15,height:20}}></Image></View>
                </View>
                <View style={styles.fruitInfo}>
                    <View style={styles.apple}><Image source={apple} style={{width:60,height:60}}></Image></View>
                    <View><Text style={{position:'relative',left:-10,top:20}}>1X</Text></View>
                    <View style={{display:'flex',flexDirection:'column'}}>
                        <Text style={{position:'relative',top:15,left:25}}>Apple</Text>
                        <Text style={{position:'relative',top:15,left:25}}>$19</Text>
                        </View>
                    <View style={{position:'relative',left:90,top:25}}><Image source={trash} style={{width:15,height:20}}></Image></View>
                </View>
                <View style={styles.fruitInfo}>
                    <View style={styles.grape}><Image source={grape} style={{width:85,height:70}}></Image></View>
                    <View><Text style={{position:'relative',left:-25,top:20}}>1X</Text></View>
                    <View style={{display:'flex',flexDirection:'column'}}>
                        <Text style={{position:'relative',top:15,left:15}}>Grape</Text>
                        <Text style={{position:'relative',top:15,left:15}}>$11</Text>
                    </View>
                    <View style={{position:'relative',left:70,top:25}}><Image source={trash} style={{width:15,height:20}}></Image></View>
                </View>
            </View>
            <View style={styles.foot}>
                <View style={styles.fText}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Total price</Text>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>$50</Text>
                </View>
                <View style={styles.btn}><Text style={{color:'#fff',fontSize:18,marginLeft:50}}>Payment</Text></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    head:{
        display: "flex",
        flexDirection: "row",
        gap: 250,
        display: "flex",
        marginTop:-30  
    },
    text:{
        marginRight:250,
        gap:2,
        marginTop:-5   
    },
    list:{
        display: "flex",
        flexDirection: "column",
        gap:5,
        position:'relative',
        top: 25,
        marginBottom:55
    },
    orange:{
        position:'relative',
        right:50,
        backgroundColor: "#fce9c8",
        borderRadius: 20,
        padding:5
    },
    stawberry:{
        position:'relative',
        right:50,
        backgroundColor: "#FFD6CEFB",
       borderRadius: 20,
    },
    apple:{
        position:'relative',
        right:50,
        backgroundColor: "#CBFEE9F5",
        borderRadius: 20,
        padding:5
    },
    grape:{
        position:'relative',
        right:50,
        backgroundColor: "#E3DEFFFE",
       borderRadius: 20,
    },
   fruitInfo:{
    display: "flex",
    flexDirection: "row",
    gap: 15,
    marginBottom:25
   },
   fText:{
    display: "flex",
    flexDirection: "row",
    gap: 170,
    position:'relative',
    top:0,
   },
   btn:{
    width: 190,
    marginLeft: 60,
    position:'relative',
    top:40,
    backgroundColor: "#f2a8a9",
    padding: 10,
    borderRadius: 5,
   },
   imgTrash:{

   } ,
   
   label1:{

   }
});

export default Basket;