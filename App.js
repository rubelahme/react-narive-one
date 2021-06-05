import React from "react";
import styled from "styled-components/native";
import { StatusBar, ScrollView } from "react-native";
import AppBar from "./component/AppBar";
import Items from "./component/Items";

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
          <Items></Items>
        </ScrollView>
      </Container>
    </>
  );
};
export default App;
