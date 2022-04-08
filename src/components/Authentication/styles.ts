import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 40px 86px;
`;

export const Container = styled.div`
  color: #ffffff;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const ContainerItems = styled.div<{ primary?: boolean }>`
  width: 195px;
  &:after {
    content: " ";
    width: 195px;
    height: 10px;
    position: absolute;
    border-radius: 50px;
    background: ${(props) => (props.primary ? "#FC5842" : "#393939")};
  }
`;

export const Text = styled.p`
  font-family: "THICCCBOI";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
`;

export const HeaderItems = styled.div`
  width: 620px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
