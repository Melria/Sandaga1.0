import React from 'react';
import { View, Text, Image, StyleSheet ,TouchableOpacity,} from 'react-native';

import sac from "../assets/image/sac.png"

const Start= ({navigation}) => {
    return (
        <View style={styles.container}>
           <View style={{height:'50%',marginTop:200}}>
                <Image source={sac} style={{width:150, height:300}}></Image>
           </View>  
           <View style={styles.order}>
            <Text style={{fontSize:28,fontWeight:'bold',width:250,textAlign:'center',marginBottom:50,marginTop:-35}}>Order Grocercies and Get delivered in few minutes</Text>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                 <View style={{borderWidth:1,borderColor:'green',padding:10,borderRadius:10,width:150,alignItems:'center'}}><Text style={{color:'green'}}>Get Started</Text></View>
                 </TouchableOpacity>
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BBFFDFF0',
        display:'flex',
        flexDirection:'column'
    },
    order:{
       position:'relative',
       bottom: 100,
        backgroundColor:'#fff',
        width:'100%',
        height:'45%',
        alignItems:'center',
       marginTop:100,
    justifyContent:'center',
    borderRadius:50
    }
});

export default Start;