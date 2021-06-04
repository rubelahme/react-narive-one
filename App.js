import React from "react";
import styled from "styled-components/native";
import { StatusBar, ScrollView } from "react-native";
import AppBar from "./component/AppBar";
import Product from "./component/Product";
const Container = styled.SafeAreaView`
  flex: 1;
`;

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content"></StatusBar>
      <Container>
        <ScrollView>
          <AppBar></AppBar>
          <Product></Product>
        </ScrollView>
      </Container>
    </>
  );
};
export default App;
