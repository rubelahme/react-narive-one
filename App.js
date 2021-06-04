import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import Home from "./comprnents/Home/Home/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
