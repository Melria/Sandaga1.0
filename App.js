import React, { forwardRef,  Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import menu from "./assets/menu.png";
import profile from "./ressources/profile.png";
import Profile4 from "./Screen/ProfileScreen4"

const Tab = createBottomTabNavigator();
 const stack =createStackNavigator(); 

import HomeScreen from "./Screen/homeScreen";
import Details from "./Screen/detailScreen";
import Basket from "./Screen/basketScreen";
import Search from "./Screen/searchScreen";
import Start from "./Screen/startedScreen";
import Add from "./Screen/addScreen";


function Navigation(){
  return(
    <Tab.Navigator>
        <Tab.Screen 
          name="home"
          component={HomeScreen}
          options={{
            headerTitle: ({ focused, color }) => {
              return (
                <View style={styles.header}>
                  <View style={styles.boxOne}>
                    <Image
                      style={{ width: 30, height: 20, marginTop: 10,marginLeft:-15 }}
                      source={menu}
                    />
                  </View>
                  <View style={styles.profil}>
                    <Image
                      source={profile}
                      style={{
                        width: 130,
                        height: 130,
                        marginTop: -36,
                        marginLeft: 2,
                      }}
                    ></Image>
                  </View>
                </View>
              );
            },
            tabBarLabel: ({ focused, color }) => {
              return (
                <View>
                  <Text style={{ color: color }}> </Text>
                </View>
              );
            },
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Image
                  source={require("./assets/home.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="search"
          component={Profile4}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused, color }) => {
              return (
                <View>
                  <Text style={{ color: color }}> </Text>
                </View>
              );
            },
            tabBarIcon: ({ focused, color, size }) => {
              return (
                // <TouchableOpacity onPress={() => console.log("Back")}>
                  <Image
                    source={require("./assets/panier.png")}
                    style={{ width: 22, height: 25, marginTop: 10 }}
                  />
                // </TouchableOpacity>
              );
            },
          }}
        />
        <Tab.Screen
          name="add"
          component={Add}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused, color }) => {
              return (
                <View>
                  <Text style={{ color: color }}> </Text>
                </View>
              );
            },
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Image
                  source={require("./assets/home.png")}
                  style={{ width: 30, height: 30,marginTop:5}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="start"
          component={Start}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused, color }) => {
              return (
                <View>
                  <Text style={{ color: color }}> </Text>
                </View>
              );
            },
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Image
                  source={require("./assets/loupe.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="nav">
        <stack.Screen name='nav' component={Navigation} options={{headerShown:false}}/>
        <stack.Screen name='Details' component={Details} options={{headerShown:false}}/>
        <stack.Screen name='Basket' component={Basket} options={{headerShown:false}}/>
        <stack.Screen name='home' component={HomeScreen} options={{headerShown:false}}/>
        <stack.Screen name='Navigation' component={Navigation} options={{headerShown:false}}/>
        <stack.Screen name='Add' component={Add} options={{headerShown:false}}/>
        
      </stack.Navigator>
    </NavigationContainer>
    // <StatusBar style="auto" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    position: "relative",
    paddingTop: 50,
    // bottom: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightBlue",
  },
  boxOne: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    alignItems: "center",
    marginLeft: 20,
    paddingTop: 7,
    borderRadius: 50,
  },
  boxTwo: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    alignItems: "center",
    marginRight: 20,
    paddingTop: 7,
    borderRadius: 10,
  },
  headerOne: {
    width: "100%",
    marginTop: 5,
  },

  stat: {
    backgroundColor: "#fff",
    width: 95,
    height: 20,
    marginTop: 30,
    marginLeft: 7,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 20,
  },
  search: {
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 35,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
  },
  cards: {
    height: 250,
    width: "100%",
    marginTop: 5,
    marginLeft: 40,
    marginRight: 50,
    display: "flex",
    flexDirection: "row",
  },
  orange: {
    width: 220,
    marginLeft: 20,
    height: "90%",
    backgroundColor: "#fce9c8",
    borderRadius: 20,
  },
  grape: {
    width: 220,
    height: "90%",
    marginLeft: 10,
    backgroundColor: "#E3DEFFFE",
    borderRadius: 20,
  },
  apple: {
    width: 220,
    height: "90%",
    marginLeft: 10,
    backgroundColor: "#CBFEE9F5",
    borderRadius: 20,
  },
  stawberry: {
    width: 220,
    height: "90%",
    marginLeft: 10,
    backgroundColor: "#FFD6CEFB",
    borderRadius: 20,
  },

  profil: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 8,
    margin: 15,
    marginTop: -2,
    borderRadius: 50,
  },

  bottomCard2: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    gap: 90,
  },
  foot: {
    width: "100%",
    height: "30%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingLeft: 8,
    paddingRight: 8,
  },
  fruitId: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 10,
    gap: 90,
  },
  shop: {
    width: "100%",
    height: 100,
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
  },
});

const CanvasWithRef = forwardRef((props, ref) => (
  <Canvas ref={ref} {...props} />
));
