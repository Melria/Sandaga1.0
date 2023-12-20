import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button } from 'react-native';
//import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native-web';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Progress from 'react-native-progress';
;
import  ananas from '../assets/image/ananas.png';
import  lock from '../assets/image/lock.png';
import  orange from '../assets/image/orange.png';
import  coeur from '../assets/image/coeur.png';
import  raisin from '../assets/image/raisin.png';
import  plante from '../assets/image/plante.png';
import  share from '../assets/image/share.png';
import  lait from '../assets/image/lait.png';
import  delet from '../assets/image/delete.png';
import  straw from '../assets/image/straw.png';
import  meat from '../assets/image/meat.png';
import  pp from '../ressources/profile.png';
import  search from '../assets/image/search.png';
import  basket from '../assets/image/basket.png';
import  bete from '../assets/image/bete.jpeg';
import  brocolli from '../assets/image/brocolli.jpg';


export default function Profile4() {

    const [text, setText] = useState('');

    return (
        <View style={styles.body}>
            <View style={styles.app}>

                <View style={styles.sousHeader}>
                    <View style={styles.lo}>
                        <Text>Your Location</Text>
                        <Text>3892 Olen Thomas Drive,NY </Text>
                    </View>
                    <View >
                        <Image source={pp} style={styles.pp} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', flex: 1, paddingLeft: 40, borderRadius: 10, marginTop: '10px', marginBottom: '10px', backgroundColor: '#fff' }}
                        onChangeText={text => setText(text)}
                        value={text}
                        placeholder="Search foods , groceries"
                    />
                    <Image source={search} style={{ width: 20, height: 20, margin: 5, position: 'absolute', left: 5 }} />
                </View>
                <View>
                    <Text style={styles.titre1}>Categories</Text>
                </View>


                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                    <View>
                        <View style={{
                            flexDirection: 'row',gap:30
                        }}>
                           
                            <Image source={plante} style={styles.img}></Image>
                            <Image source={raisin} style={styles.img}></Image>
                            <Image source={lait} style={styles.img}></Image>
                            <Image source={meat} style={styles.img}></Image>
                            
                        </View>
                        <View style={{
                            flexDirection: 'row',gap:30,
                            justifyContent: 'space-evenly',

                        }}>
                           
                            <Text>Vegetables</Text>
                            <Text>Grape</Text>
                            <Text>Milk</Text>
                            <Text>Meat</Text>
                            
                        </View>
                    </View>
                </ScrollView>


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 15,
                    position:'relative',
                    top:-20
                }}>
                    <Text style={styles.titre1}>Deals</Text>
                    <Text style={{ color: '#3dbc8c'}}>See all</Text>
                </View>


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginBottom: 100,
                    position:'relative',
                    top:-10,
                    backgroundColor: '#def3ea',
                    height:150,
                    padding:35,
                    width:'90%',
                    left:19,
                    gap:35,
                    borderRadius:10
                }}>
                    <View style={{

                    }}>
                        <Text style={styles.titre1}>50% OFF</Text>
                        <Text style={styles.para}>On Grocery Combo Packs</Text>
                        <View style={{borderWidth:1,width:65,borderColor:'#3dbc8c'}}>
                            <Text style={{ color: '#3dbc8c', fontSize: 12 }}>Shop now</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={basket} style={styles.basket}></Image>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    bottom:72
                   
                }}>
                    <Text style={styles.titre1}>Popular items</Text>
                    <Text style={{ color: '#3dbc8c'}}>See all</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    bottom:52,
                    //backgroundColor: 'red'
                }}>
                    <Image source={bete} style={styles.basket}></Image>
                    <Image source={brocolli} style={styles.basket}></Image>
                    <Image source={orange} style={{width:60,height:60}}></Image>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    bottom:40
                }}>
                    <View>
                        <Text style={styles.titre1}>Bitroot</Text>
                        <Text style={styles.titre1}>$1.25</Text>
                    </View>

                    <View>
                        <Text style={styles.titre1}>Broccoli</Text>
                        <Text style={styles.titre1}>$1.50</Text>
                    </View>

                    <View>
                        <Text style={styles.titre1}>Orange</Text>
                        <Text style={styles.titre1}>$1.90</Text>
                    </View>
                </View>
            </View>

        </View >


    )
};


const styles = StyleSheet.create({


    body: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',

    },
    app: {

        height: 'fit-content',
        width: '100%',
        flex: 1,
        // marginTop: 20,
        // marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        paddingLeft: '2%',
        paddingRight: '2%',
    },

    pp: {
        marginTop: 0,
        width: 70,
        height: 100,
        marginLeft: 100,
        alignContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',
    },
    sousHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    lo: {
        borderRadius: 10,
        borderColor: 'black',
        padding: 5,
        marginTop:15
    },
    titre1: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    titre2: {

        fontSize: 28,
        fontWeight: 'bold',
    },
    titre3: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#f6c6c8"
    },
    para:
    {
        fontSize: 14,
    },
    car: {
        marginTop: 13,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between'
    },
    menu: {
        marginLeft: 10,
        padding: '8px',
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
    },
    prec: {
        marginLeft: 10,
        padding: '8px',
        width: 25,
        height: 25,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
    },

    fruits: {
        backgroundColor: '#fce9c8',
        width: 60,
        height: 55,
        borderRadius: 12
    },
    fruits2: {
        backgroundColor: '#f8bfbb',
        width: 60,
        height: 55,
        borderRadius: 12
    },
    fruits3: {
        backgroundColor: '#cffca1',
        width: 60,
        height: 55,
        borderRadius: 12
    },
    fruits4: {
        backgroundColor: '#d9defe',
        width: 60,
        height: 55,
        borderRadius: 12
    },

    hea: {
        backgroundColor: 'red',
    },
    coeur: {
        marginTop: 20,
        marginLeft: 20,
        backgroundColor: 'red',
        height: 60,
        width: 60,
        borderRadius: 20,
        borderColor: '#f2a8a9',
        borderStyle: 'solid',
        borderWidth: 1,
    },

    prix: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    soustitre: {

        flexDirection: 'row'
    },
    titre4: {
        color: 'white',
        width: 200,
        padding: 20,
        marginTop: 21,
        marginLeft: 13,
        backgroundColor: '#f2a8a9',
        borderRadius: 15,
        fontWeight: "bold",
    },



    img: {
        height: 50,
        width: 50,
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    basket: {
        height: 70,
        width: 70,
    },

});
