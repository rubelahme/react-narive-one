import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 92px;
  position: relative;
`;
const User = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const MenuProduct = ({ source }) => {
  return (
    <Container>
      <User source={source}></User>
    </Container>
  );
};

export default MenuProduct;
