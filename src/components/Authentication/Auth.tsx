import React, { FunctionComponent } from "react";
import { Container, ContainerItems, HeaderItems, Text } from "./styles";
interface IItems {
  text: string;
  color?: boolean;
}

const MenuItems: FunctionComponent<IItems> = ({ text, color }) => {
  return (
    <ContainerItems primary={color}>
      <Text>{text}</Text>
    </ContainerItems>
  );
};

const Auth: FunctionComponent = () => {
  const menuItems = [
    { text: "Create account", color: true },
    { text: "Log in" },
    { text: "Checkout" },
  ];

  return (
    <Container>
      <HeaderItems>
        {menuItems.map((item, key) => (
          <MenuItems text={item.text} color={item.color} />
        ))}
      </HeaderItems>
    </Container>
  );
};

export default Auth;
