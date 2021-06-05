import React from "react";
import styled from "styled-components/native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
const Container = styled.View`
  width: 100%;
  height: 58px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: orange;
`;
const Text = styled.Text`
  color: #3a86e9;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;
const Row = styled.View`
  flex-direction: row;
`;
const Button = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eee;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;
export default function AppBar() {
  return (
    <Container>
      <Text>Ecommerce</Text>
      <Row>
        <Button>
          <Feather name="search" size={30} color="black" />
        </Button>
        <Button>
          <MaterialCommunityIcons
            name="menu"
            size={29}
          ></MaterialCommunityIcons>
        </Button>
      </Row>
    </Container>
  );
}
