import React from "react";
import styled from "styled-components/native";
import MenuProduct from "./Menu-Product";

const Container = styled.View`
  width: 100%;
  height: 92px;
`;
const Row = styled.View`
  flex-direction: row;
  background: #fff;
  width: 100%;
  padding: 0 5px;
  align-items: center;
`;
const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  padding: 0 8px;
`;

const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background: #f0f0f0;
`;
const Menu = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

const MenuText = styled.Text`
  padding-left: 11px;
  font-weight: 500;
  font-size: 12px;
`;

const Product = () => {
  return (
    <Container>
      <Row>
        <MenuProduct source={require("../img/images.jpg")}></MenuProduct>
        <Input placeholder="What's on your mind?" />
      </Row>
      <Divider></Divider>
      <Row>
        <Menu>
          <MenuText>Live</MenuText>
        </Menu>
      </Row>
    </Container>
  );
};

export default Product;
