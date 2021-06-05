import React from "react";
import { StyleSheet, Text, View } from "react-native";
import fakeData from "../fakeData";
import ItemProduct from "./ItemProduct";

export default function Items() {
  const item = fakeData.slice(10, 25);

  return (
    <View style={styles.Container}>
      {item.map((pd) => (
        <ItemProduct key={pd.id} data={pd}></ItemProduct>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});
