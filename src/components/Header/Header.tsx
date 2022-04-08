import React, { FunctionComponent } from "react";
import { Logo, LogoTxt } from "..";

import { HeaderContainer, Container } from "./styles";

const Header: FunctionComponent = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo />
        <LogoTxt style={{ marginLeft: 10 }} />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
