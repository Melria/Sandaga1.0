import React, { forwardRef, useState , Component} from 'react';
import { SafeAreaView, Image, StyleSheet, View, StatusBar,TextInput,Text,ScrollView,ImageBackground} from 'react-native';
import Canvas from 'react-native-canvas';
import { LineChart } from 'react-native-chart-kit';
//import * as Animatable from 'react-native-animatable';
//import CanvasJSReact from '@canvasjs/react-charts';
import calendar from './ressources/calendrier.png';
import notification from './ressources/notification.png';
import flecheHaut from './ressources/flècheHaut.png';
import ajouter from './ressources/ajouter.png';
import loupe from './ressources/loupe.png';
import edit from './ressources/modifier.png';
import flecheDroite from './ressources/flècheDroite.png';
import flecheBas from './ressources/flècheBas.png';
import stat from './ressources/statistique.png';
import profile from './ressources/profile.png'



export default function App() {
   const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.boxOne}><Image style={{width: 30, height: 30}} source={calendar} /></View>  
        <View style={styles.boxTwo}><Image style={{width: 30, height: 30}} source={notification}></Image></View>
      </View>

      <View style={styles.headerOne}>
        <View style={{marginTop: 10}}>
            <View style={styles.appointments}>
                <View style={styles.number}><Text style={{fontSize: 50, fontWeight:'bold'}}>12</Text></View>
                <View style={styles.stat}><Image source={flecheHaut} style={{width: 20, height: 18}}></Image><Text style={{fontWeight: 900}}>2%</Text><Text style={{color:'grey'}}>today</Text></View>
            </View>
            <Text style={{marginLeft: -20,}}>patient appointments</Text>
        </View> 
        <View style={styles.add}>
          <Image source={ajouter} style={{width: 70, height:70,marginRight: -35,marginTop: 30}}></Image>
          </View>
      </View>

      <View style={styles.search}>
        <Image source={loupe} style={{width: 30, height:30}}></Image>
            <TextInput
            style={{width: '90%', borderWidth: 0, marginLeft: 10, fontSize: 20 }}
            onChangeText={text => setValue(text)}
            value={value}  placeholder='Search' 
          />         
      </View>

      <ScrollView style={styles.cards} horizontal={true}>
          <View style={styles.template}>
            <View style={styles.edit}>
              <Image source ={edit}></Image>
            </View>
            <Text style={{paddingTop:5,paddingLeft:15,fontSize:20,fontWeight:500}}>Write Prescription</Text>
            <Text style={{paddingLeft:15}}>to patient</Text>
            <View style={styles.bottomCard}>
              <Text style={{paddingLeft:15}}>Template</Text>
              <Image source={flecheDroite} style={{width: 70,height:70,marginRight:30, position:'relative',bottom: 30, right: 35}}></Image>
            </View>
          </View>
          <View style={styles.reminder}>
          <View style={styles.edit}>
            {/* <ImageBackground source={profile} style={{width: 80,height:80, resizeMode: 'cover'}}>

            </ImageBackground> */}
              <Image source ={profile} style={{width: 155,height: 155,marginTop:-46,marginLeft:2}}></Image> 
            </View>
            <Text style={{paddingTop:5,paddingLeft:15,fontSize:20,fontWeight:500}}>Meli Gloria</Text>
            <Text style={{paddingLeft:15}}>full Stack Develloper</Text>
            <Text style={{paddingLeft:15}}>Web/Mobile</Text>

            <View style={styles.bottomCard2}>
              <Text style={{paddingLeft:15}}>Reminder</Text>
              <Image source={flecheDroite} style={{width: 70,height:70,marginRight:30, position:'relative',bottom: 30, right: 35}}></Image>
            </View>
          </View>
      </ScrollView>  
      <View style={styles.foot}>
          <Text style={{padding:5,fontSize: 15,fontWeight:500}}>Patient statistics</Text>
          <View style={styles.bHead}>

          <View style={{marginTop: 10}}>
            <View style={styles.appointments2}>
                <View style={styles.number}><Text style={{fontSize: 50, fontWeight:'bold'}}>12</Text></View>
                <View style={styles.stat1}><Image source={flecheBas} style={{width: 20, height: 18}}></Image><Text style={{fontWeight: 900}}>11%</Text><Text style={{color:'grey'}}>week</Text></View>
            </View>
            <Text style={{marginLeft: 10,}}>New patient</Text>
        </View> 

            <View>
            <View style={{marginTop: 10}}>
            <View style={styles.appointments3}>
                <View style={styles.number1}><Text style={{fontSize: 50, fontWeight:'bold'}}>24</Text></View>
                <View style={styles.stat}><Image source={stat} style={{width: 70, height: 30,marginTop: -5}}></Image></View>
            </View>
            <Text style={{marginLeft: -20,}}>Insurance patients</Text>
        </View> 
            </View>
          </View>
          <View>
          <SafeAreaView style={{}}>
          <View style={{marginTop: 10 ,marginLeft:-65}}>
  <LineChart
    data={{
      //labels: ["Atlanta 1996", "Sydney 2000"],
      datasets: [
        {
          data: [ 0,30, 70, 45, 60],
        },
        {
          data: [ 60, 40, 52, 40, 65],
        }
      ],
    }}
    width={500}
    height={220}
    //yAxisLabel="Number of Medals"
    chartConfig={{
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff",
      color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
    }}
    bezier
  />
</View> 
      </SafeAreaView> 
          </View>
       </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f5',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  header: {
    width: '100%',
    position: 'relative',
    paddingTop: 20,
   // bottom: 300,
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
   backgroundColor: 'lightBlue',
  },
  boxOne:{
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    alignItems: 'center',
    marginLeft: 20,
    paddingTop: 7,
    borderRadius: 50
  },
  boxTwo:{
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    alignItems: 'center',
    marginRight: 20,
    paddingTop: 7,
    borderRadius: 10
  },
  headerOne:{
    width: '100%',
    marginTop: 5,
    //backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  appointments:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  number:{
    float: 'left',
    marginLeft: -30
  },
  stat:{
    backgroundColor: '#fff',
    width: 95,
    height: 20,
    marginTop: 30,
    marginLeft:7,
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-around',
   borderRadius: 20
  },
search:{
width: '90%',
backgroundColor: "#fff",
marginTop: 35,
borderRadius: 10,
display: 'flex',
padding: 10,
flexDirection: 'row',
  },
  cards:{
    height: 250,
    width: '100%',
    marginTop: 30,
    marginLeft: 40,
    //backgroundColor:'grey',
    display: 'flex',
   flexDirection: 'row',
   
  },
  template:{
    width: 220,
    height:'90%',
    backgroundColor: '#87e6a1',
    borderRadius:20
  },
  reminder:{
    width: 220,
    height:'90%',
    marginLeft: 10,
    backgroundColor: 'violet',
    borderRadius:20
  },
  edit:{
    width: 50,
    height:50,
    backgroundColor:"#fff",
   alignItems: 'center',
   paddingTop: 8,
   margin: 15,
   borderRadius: 50
  },
  bottomCard:{
    marginTop: 50,
    display: 'flex',
   flexDirection: 'row',
   gap: 90
  },
  bottomCard2:{
    marginTop: 30,
    display: 'flex',
   flexDirection: 'row',
   gap: 90
  },
  foot:{
    width: '100%',
   height: '30%',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingLeft:8,
    paddingRight:8
  },
bHead:{
  display: 'flex',
   flexDirection: 'row',
   gap: 90,
   marginTop:-8
},
appointments2:{
  display: 'flex',
    flexDirection: 'row',
    paddingLeft: 30,
    justifyContent: 'space-around',
},
appointments3:{
  display: 'flex',
    flexDirection: 'row',
    paddingLeft: -60,
    justifyContent: 'space-around',
},
number1:{
  float: 'left',
  marginLeft: -30
},
stat1:{
  backgroundColor: '#f2f3f5',
  width: 95,
  height: 20,
  marginTop: 30,
  marginLeft:5,
 display: 'flex',
 flexDirection: 'row',
 justifyContent: 'space-around',
 borderRadius: 20 
}
});

const CanvasWithRef = forwardRef((props, ref) => (
  <Canvas ref={ref} {...props} />
));
