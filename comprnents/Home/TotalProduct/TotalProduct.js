import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function TotalProduct(props) {
  console.log(props);
  const { name, img, category, price } = props.data;
  return (
    <View>
      <Text
        style={{
          padding: 20,
          paddingLeft: 3,
          fontSize: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {name}
      </Text>
      <Image
        style={{
          width: 720,
          height: 500,
          alignItems: "center",
          justifyContent: "center",
        }}
        source={{ uri: img }}
      />
      <Text>
        <Text
          style={{
            paddingRight: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {category}
        </Text>
        <Text
          style={{
            paddingRight: 50,
            fontSize: 30,
            alignItems: "center",
            fontWeight: 500,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ${price}
        </Text>
        <Button
          style={{
            padding: 20,
            fontSize: 30,
            alignItems: "center",
            fontWeight: 500,
            alignItems: "center",
            justifyContent: "center",
          }}
          title="Add Product"
        />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
