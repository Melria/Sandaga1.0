import React from 'react';
import { View, Text, Image, StyleSheet,lineHeight,TouchableOpacity } from 'react-native';

import leftArrow1 from "../assets/leftArrow1.png";
import lock from "../assets/lock.png";

import broccoli from '../assets/broccoli.jpeg';
import carrot from '../assets/carrot.jpeg';

const Add = ({navigation}) => {
    return (
        <View style={styles.container}>
                <View style={styles.head}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <View style={{height:30,width:40,alignItems:'center',borderRadius:10,backgroundColor:'#fff',marginLeft:35}}>
                            <Image source={leftArrow1} style={{height:30,width:30,marginLeft:0}}></Image>
                        </View>
                    </TouchableOpacity>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <View style={{marginTop:3}}><Image source={lock} style={{height:50,width:70}}></Image></View>
                        <View style={{marginTop:3}}><Image source={lock} style={{height:50,width:70}}></Image></View>
                    </View>
                    </View>
                    <View style={styles.cardImg}>
                        <Image source={broccoli} style={{width:250,height:250}}></Image>
                </View>

                <View style={styles.order}>
                    <View style={styles.desc}>
                        <View style={{borderWidth:1,borderColor:'green',padding:1,alignItems:'center',borderRadius:5,width:65,}}><Text style={{fontSize:10}}>vegetables</Text></View>
                        <Text style={{fontWeight:'bold'}}>Broccoli</Text>
                        <Text style={{color:'grey'}}>approx 100 gm</Text>
                    </View>
                    <View style={styles.qty}>
                        <View style={{borderWidth:1,borderColor:'green',padding:1,alignItems:'center',borderRadius:5,height:35,width:35,marginTop:5}}><Text style={{fontSize:28,marginTop:-5,color:'green'}}>-</Text></View>
                        <Text style={{fontSize:16,marginTop:10}}>1</Text>
                        <View style={{borderWidth:1,borderColor:'green',padding:1,alignItems:'center',borderRadius:5,height:35,width:35,marginTop:5}}><Text  style={{fontSize:28,marginTop:-5,color:'green'}}>+</Text></View>
                    </View>
                </View>
                <View style={{width:'80%',borderWidth:1,borderColor:'gray',position:'relative',bottom:-50}}></View>
                <View style={styles.rate}>
                    <View style={styles.articleInfo}>
                        <View style={styles.infoImg}><Image  source={carrot} style={{width:50,height:50}}></Image></View>
                        <View style={{display:'flex',flexDirection:'column'}}>
                            <Text style={{fontWeight:'bold'}}>Agrifarm Inc</Text>
                            <Text style={{color:'gray'}}>F4RJ+FJF,ChairtaKol</Text>
                        </View>
                    </View>
                    <View style={styles.rank}>
                        <View style={styles.rateImg}><Image></Image></View>
                        <View style={{display:'flex',flexDirection:'row',marginTop:15}}>
                            <Text>4.9</Text>
                            <Text>(89)</Text>
                        </View>
                    </View>
                </View>
                <View style={{width:'80%',borderWidth:1,borderColor:'gray',position:'relative',top:-5}}></View>
                    <View style={styles.description}>
                        <Text style={{fontWeight:'bold',marginBottom:5,fontSize:24}}>Description</Text>
                        <Text style={{lineHeight:20,color:'gray'}}>Broccoli is an eligible green plant in the cabage family whose large flowering head ,stalk and small associated leaves are are Read more</Text>
                    </View>

                    <View style={{display:'flex',flexDirection:'row',position:'relative',top:60,}}>
                        <View><Image></Image></View>
                        <View style={{display:'flex',flexDirection:'row',color:'green',position:'relative',width:250,borderWidth:1,borderColor:'green',padding:10,left:30,borderRadius:10}}><Text style={{marginLeft:60, color:'green'}}>Add ta card</Text>
                            <Text style={{ color:'green'}}>$1.50</Text>
                        </View>
                    </View>    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#F5FCFF',
    },
    head:{
        display: "flex",
        flexDirection: "row",
        gap: 200,
        marginTop:-50 ,
        
    },
   order:{
    display: "flex",
    flexDirection: "row",
    gap:100,
    position:'relative',
    top:30
   },
   cardImg:{
    width:'100%',
    alignItems:'center'
   },
   desc:{

   },
   qty:{
    display: "flex",
    flexDirection: "row",
    gap:10
   },
   rate:{
    display: "flex",
    flexDirection: "row",
    gap:60,
    width:'90%',
    position:'relative',
    top:25,
    marginTop:30,
    marginBottom:30,
    
   },
   articleInfo:{
    display: "flex",
    flexDirection: "row",
   },
   rank:{
    display: "flex",
    flexDirection: "row",
    
   },
   rateImg:{
   },
   description:{
    marginLeft:20,
    position:'relative',
    top:15,
   },
   infoImg:{
    marginLeft:20
   }
});

export default Add;