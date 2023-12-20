import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    StatusBar,
    Text,
    ScrollView,
    TouchableOpacity,
    ProgressBarAndroid
  } from "react-native";
  import * as progress from 'react-native-progress'


  import orange from "../assets/orange.png";
  import leftArrow from "../assets/leftArrow.png";
  import share from "../assets/share.png";
  import heart from "../assets/coeur.png";

  const Details = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>

                <View style={{height:30,backgroundColor:'#f2a8a9',width:40,alignItems:'center',borderRadius:10}}><Image source={leftArrow} style={{height:30,width:30,marginLeft:5}}></Image></View>
            </TouchableOpacity>
                <View style={{marginTop:5}}><Text style={{marginRight:0,fontSize:18,fontWeight:600}}>Product Details</Text></View>
                <View style={{marginTop:3}}><Image source={share} style={{height:22,width:20}}></Image></View>
            </View>

            <View style={styles.text}>
                <Text style={{fontSize:24}}>Juicy Orange</Text>
                <Text style={{color:'#f2a8a9',marginBottom:5}}>Sweet and juicy</Text>
                <Text style={{lineHeight:19}}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ipsam cupiditate autem sapiente temporibus, voluptas laudantium quibusdam assumenda non ullam doloribus et maiores?

                </Text>
            </View>

            <View style={styles.button}> 
                <View style={{marginTop:25,marginLeft:30, borderWidth:1,padding:8,borderColor:'#f2a2a5',borderRadius:15}}><Image source={heart} style={{width:35,height:29}}></Image></View>
                <View style={{marginTop:25, borderWidth:1,padding:0,borderColor:'#f2a8a9',borderRadius:15,padding:0,width:230,backgroundColor:'#f2a8a9'}}><Text style={{textAlign:'center',marginTop:9,fontSize:17.5,color:'#fff'}}>Find Nearest Store</Text></View>
            </View>

            <View style={styles.image}>
                <Image source={orange} style={{width:200,height:190}}></Image>
            </View>

            <View style={styles.nutrition}>
                <Text style={{marginTop:100,marginBottom:12,fontSize:24,fontWeight:500}}>Nutrition Facts</Text>
                <View style={{marginBottom:15}}>
                    <View style={{display:'flex',flexDirection:'row',gap:210}}>
                        <View style={{display:'flex',flexDirection:'row',gap:18}}>
                            <Text style={{fontSize:18,color:'grey'}}>Fiber</Text>
                            <Text style={{fontSize:18,color:'grey'}}>3g</Text>
                        </View>
                        <Text style={{fontSize:18,color:'grey'}}>7%</Text>
                    </View>
                    {/* <ProgressBarAndroid styleAttr='Horizontal' indeterminate={false} progress={0.4} style={{color:'#ff9999'}}></ProgressBarAndroid> */}
                    <progress.Bar progress={0.3} color='#ff9999'borderWidth={0} backgroundColor='#e8e8e8' width={320}/>
                </View>
                <View>
                <View style={{display:'flex',flexDirection:'row',gap:150}}>
                        <View style={{display:'flex',flexDirection:'row',gap:20}}>
                            <Text style={{fontSize:18,color:'grey'}}>Good Fiber</Text>
                            <Text style={{fontSize:18,color:'grey'}}>12g</Text>
                        </View>
                        <Text style={{fontSize:18,color:'grey'}}>7%</Text>
                    </View>
                    <progress.Bar progress={0.7} color='#ff9999'borderWidth={0} backgroundColor='#e8e8e8' width={320}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fbd3cb',
    },
    head:{
        display: "flex",
        flexDirection: "row",
        gap: 70,
        position:'relative',
        top:55,
        marginLeft:20
    },
    text:{
        marginLeft: 17,
        position:'relative',
        top:80,
        marginLeft:20
    },
    button:{
        width:'100%',
        display: "flex",
        flexDirection: "row",
        gap: 5,
        position:'relative',
        top:100
    },
    image:{
        width:'100%',
        marginLeft: 150,
        position:'relative',
        top:150,
        zIndex:1
    },
    nutrition:{
        width:'100%',
        height:'40%',
        marginTop: '15%',
        backgroundColor:'#fff',
        padding:20,
        zIndex:-1,
        borderRadius:40
    }
});

export default Details;