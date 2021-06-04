import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Product from "../Product/Product";

export default function Header() {
  return (
    <View>
      <ImageBackground
        source={require("../../../img/one.jpg")}
        style={styles.container}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            color: "#9A9A9A",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 25,
              fontFamily: "aril",
              fontWeight: "700",
              paddingTop: 30,
              paddingBottom: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Ecommerce Product
          </Text>
        </View>
      </ImageBackground>
      <Product></Product>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 720,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
