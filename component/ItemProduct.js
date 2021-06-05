import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function ItemProduct(props) {
  console.log(props);
  const { name, img, price, category, seller } = props.data;
  return (
    <View style={styles.Container}>
      <Text style={styles.item}>{category}</Text>
      <Text>{name}</Text>
      <Image
        source={img}
        style={{
          width: 100,
          height: 80,
          marginLeft: "100px",
          padding: "15px",
          marginBottom: "15px",
          marginTop: "15px",
        }}
      ></Image>
      <Text>
        <Text>{seller}</Text>
        <Text style={styles.menu}>${price}</Text>
        <Text>
          <Button
            icon={{
              size: 15,
              color: "green",
            }}
            title="Add Product"
          />
        </Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    border: "1px solid #333",
    padding: "10px",
  },
  menu: {
    color: "red",
    fontSize: 20,
    marginRight: "50px",
    margin: "15px",
  },
  button: {
    color: "green",
    fontSize: "13px",
  },
  item: {
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "aril",
  },
});
