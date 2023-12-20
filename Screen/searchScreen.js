import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import orange from "../assets/orange.png";
import heart from "../assets/heart.png";
import grape from "../assets/grape.png";
import apple from "../assets/apple.png";
import stawberry from "../assets/stawberry.png";
import profile from "../ressources/profile.png";
import loupe from "../assets/loupe.png";
import stand1 from "../assets/stand1.png";
import stand from "../assets/stand.png";

const Search = () => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.location}>
          <Text>Your location</Text>
          <Text>3292 Olwen Thomas Drive,NY</Text>
          {/*must be a select option */}
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

      <View style={styles.header1}>
        <View style={styles.search}>
          <Image source={loupe} style={{ width: 30, height: 30 }}></Image>
          <TextInput
            style={{
              width: "50%",
              borderWidth: 0,
              marginLeft: 10,
              fontSize: 20,
            }}
            onChangeText={text => setValue(text)}
            value={value}
            placeholder="Search foods,grocercies"
          />
          <Image source={loupe} style={{ width: 30, height: 30 }}></Image>
        </View>
        <View style={styles.settings}>
          <Image></Image>
        </View>
      </View>

      <View style={styles.categories}>
        <View style={styles.title}>
          <Text style={{ fontWeight: "bold" }}>categories</Text>
          <Text>see all</Text>
        </View>
        <View style={styles.articles}>
          <View style={styles.catImg}>
            <Image></Image>
          </View>
          <Text>Vegetables</Text>
        </View>
        <View style={styles.articles}>
          <View style={styles.catImg}>
            <Image></Image>
          </View>
          <Text>Diaries</Text>
        </View>
        <View style={styles.articles}>
          <View style={styles.catImg}>
            <Image></Image>
          </View>
          <Text>Meats</Text>
        </View>
        <View style={styles.articles}>
          <View style={styles.catImg}>
            <Image></Image>
          </View>
          <Text>Fish</Text>
        </View>
        <View style={styles.articles}>
          <View style={styles.catImg}>
            <Image></Image>
          </View>
          <Text>fruits</Text>
        </View>
      </View>

      <View style={styles.deals}>
        <View style={styles.title}>
          <Text style={{ fontWeight: "bold" }}></Text> 
          <Text>see all</Text>
        </View>
        <View style={styles.offers}>
          <View>
            <Text style={{ fontWeight: "bold" }}>50% OFF</Text>
            <Text style={{ color: "gray" }}>on Grocercy Combo packs</Text>
            <View>
              <Text style={{ color: "green" }}>shop now</Text>
            </View>
          </View>
          <View style={styles.dealImg}></View>
        </View>
      </View>

      <View style={styles.title}>
        <Text style={{ fontWeight: "bold" }}>Popular items</Text>
        <Text>see all</Text>
      </View>
      <ScrollView style={styles.cards} horizontal={true}>
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
        </View>

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
        </View>

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
        </View>

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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
  header: {
    display: "flex",
    flexDirection: "row",
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
  header1: {
    display: "flex",
    flexDirection: "row",
  },
  search: {
    width: "90%",
    backgroundColor: "#fff",
    marginTop: 35,
    borderRadius: 10,
    display: "flex",
    padding: 10,
    flexDirection: "row",
  },
  title: {
    display: "flex",
    flexDirection: "row",
  },
  categories: {
    display: "flex",
    flexDirection: "row",
  },
  fruitId: {
    display: "flex",
    flexDirection: "column",
  },
  articles: {},
  catImg: {},
  deals: {},
  offers: {
    display: "flex",
    flexDirection: "row",
  },
  dealImg: {},
  popular: {},
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
});

export default Search;
