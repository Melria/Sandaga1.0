import React, { forwardRef, useState, Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import orange from "../assets/orange.png";
import heart from "../assets/heart.png";
import grape from "../assets/grape.png";
import apple from "../assets/apple.png";
import stawberry from "../assets/stawberry.png";
import stand1 from "../assets/stand1.png";
import stand from "../assets/stand.png";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerOne}>
        <Text
          style={{
            paddingLeft: 25,
            marginTop: 50,
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          Discover Seasonal
        </Text>
        <Text style={{ paddingLeft: 25, fontSize: 24, fontWeight: 800 }}>
          Fruit ant Vegetables
        </Text>
      </View>

      <ScrollView
        style={styles.search}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={{ marginLeft: 25, fontSize: 18 }}>Vegetables</Text>
        <Text style={{ marginLeft: 35, fontSize: 18 }}>Meat</Text>
        <Text style={{ marginLeft: 35, fontSize: 18 }}>Fruits</Text>
        <Text style={{ marginLeft: 35, fontSize: 18 }}>Fish</Text>
        <Text style={{ marginLeft: 35, fontSize: 18 }}>Diaries</Text>

      </ScrollView>

      <ScrollView
        style={styles.cards}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
          <TouchableOpacity onPress={()=> navigation.navigate('Details')}>

            <View style={styles.orange}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  marginLeft: 175,
                  marginTop: 15,
                }}
              >
                <Image
                  source={heart}
                  style={{ width: 80, height: 30, marginLeft: -18, marginTop: 5 }}
                ></Image>
              </View>
              <View>
                <Image
                  source={orange}
                  style={{
                    width: 168,
                    height: 120,
                    marginLeft: 25,
                    marginTop: -20,
                  }}
                ></Image>
              </View>
              <View style={styles.fruitId}>
                <View>
                  <Text style={{ fontSize: 18, color: "orange" }}>Orange</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 18, color: "orange" }}>$10</Text>
                </View>
              </View>
              <TouchableOpacity onPress={()=> navigation.navigate('Basket')}>
                <View
                  style={{
                    width: 80,
                    marginLeft: 70,
                    marginTop: 20,
                    backgroundColor: "orange",
                    padding: 5,
                    borderRadius: 15,
                  }}
                >
                  <Text style={{ marginLeft: 20, color: "#fff" }}>ADD</Text>
                </View>
              </TouchableOpacity>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
            <View style={styles.grape}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  marginLeft: 175,
                  marginTop: 15,
                }}
              >
                <Image
                  source={heart}
                  style={{ width: 80, height: 30, marginLeft: -18, marginTop: 5 }}
                ></Image>
              </View>
              <View>
                <Image
                  source={grape}
                  style={{
                    width: 175,
                    height: 120,
                    marginLeft: 25,
                    marginTop: -15,
                  }}
                ></Image>
              </View>
              <View style={styles.fruitId}>
                <View>
                  <Text style={{ fontSize: 18, color: "#7D66D9" }}>Grape</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 18, color: "#7D66D9" }}>$10</Text>
                </View>
              </View>
              <TouchableOpacity onPress={()=> navigation.navigate('Basket')}>
              <View
                style={{
                  width: 80,
                  marginLeft: 70,
                  marginTop: 20,
                  backgroundColor: "#7D66D9",
                  padding: 5,
                  borderRadius: 15,
                }}
              >
                <Text style={{ marginLeft: 20, color: "#fff" }}>ADD</Text>
              </View>
              </TouchableOpacity>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
            <View style={styles.apple}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  marginLeft: 175,
                  marginTop: 15,
                }}
              >
                <Image
                  source={heart}
                  style={{ width: 80, height: 30, marginLeft: -18, marginTop: 5 }}
                ></Image>
              </View>
              <View>
                <Image
                  source={apple}
                  style={{
                    width: 120,
                    height: 120,
                    marginLeft: 35,
                    marginTop: -15,
                  }}
                ></Image>
              </View>
              <View style={styles.fruitId}>
                <View>
                  <Text style={{ fontSize: 18, color: "#71D083" }}>Apple</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 18, color: "#71D083" }}>$10</Text>
                </View>
              </View>
              <TouchableOpacity onPress={()=> navigation.navigate('Basket')}>
              <View
                style={{
                  width: 80,
                  marginLeft: 70,
                  marginTop: 20,
                  backgroundColor: "#71D083",
                  padding: 5,
                  borderRadius: 15,
                }}
              >
                <Text style={{ marginLeft: 20, color: "#fff" }}>ADD</Text>
              </View>
              </TouchableOpacity>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
            <View style={styles.stawberry}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  marginLeft: 175,
                  marginTop: 15,
                }}
              >
                <Image
                  source={heart}
                  style={{ width: 80, height: 30, marginLeft: -18, marginTop: 5 }}
                ></Image>
              </View>
              <View>
                <Image
                  source={stawberry}
                  style={{
                    width: 165,
                    height: 100,
                    marginLeft: 25,
                    marginTop: -10,
                  }}
                ></Image>
              </View>
              <View style={styles.fruitId}>
                <View>
                  <Text style={{ fontSize: 18, color: "#EC6142", marginTop: 15 }}>
                    Stawberry
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#EC6142",
                      marginLeft: -30,
                      marginTop: 15,
                    }}
                  >
                    $10
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={()=> navigation.navigate('Basket')}>
              <View
                style={{
                  width: 80,
                  marginLeft: 70,
                  marginTop: 20,
                  backgroundColor: "#EC6142",
                  padding: 5,
                  borderRadius: 15,
                }}
              >
                <Text style={{ marginLeft: 20, color: "#fff" }}>ADD</Text>
              </View>
              </TouchableOpacity>
            </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.foot}>
        <Text style={{ marginLeft: 10, fontSize: 20 }}>Nearby Shop</Text>
        <ScrollView style={styles.shop} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              width: 250,
              height: "55%",
              borderWidth: 1,
              borderColor: "#FFD6CEFB",
              display: "flex",
              flexDirection: "row",
              padding: 15,
              gap: 5,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFD6CEFB",
                width: "40%",
                borderRadius: 15,
                alignItems: "center",
              }}
            >
              <Image source={stand1}></Image>
            </View>
            <View>
              <Text style={{ fontSize: 16 }}>Xender Shop</Text>
              <Text>264 Rue Dumont</Text>
              <Text>9Am-7Pm</Text>
            </View>
          </View>
          <View
            style={{
              width: 250,
              height: "55%",
              borderWidth: 1,
              borderColor: "#FFD6CEFB",
              marginLeft: 15,
              marginRight: 10,
              display: "flex",
              flexDirection: "row",
              padding: 15,
              gap: 5,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFD6CEFB",
                width: "40%",
                borderRadius: 15,
                alignItems: "center",
                padding: 5,
              }}
            >
              <Image source={stand} style={{ height: 40 }}></Image>
            </View>
            <View>
              <Text style={{ fontSize: 16 }}>@Dev_MG Shop</Text>
              <Text>264 Rue Dumont</Text>
              <Text>9Am-7Pm</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    position: "relative",
    paddingTop: 10,
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
    marginTop: -15,
    marginBottom:5
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
    marginTop: 15,
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
export default HomeScreen;
