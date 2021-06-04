import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import fakeData from "../../../fakeData";
import TotalProduct from "../TotalProduct/TotalProduct";

export default function Product() {
  //   const { users, setUsers } = useState([]);
  //   useEffect(() => {
  //     setUsers(fakeData);
  //   }, [users]);

  const item = fakeData.slice(20, 32);
  return (
    <View>
      {item.map((pd) => (
        <TotalProduct data={pd}></TotalProduct>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
