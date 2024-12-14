import React from "react";
import styled from "styled-components";
import exit from "../../assets/exit.svg";
import guideui from "../../assets/guideui.svg";

export default function App_guide() {
  return (
    <>
      <Container>
        <Icon src={exit} />
        <UI src={guideui} />
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  max-width: 390px;
  margin: auto;
  top: 10%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1500;
  background-color: #ffffff;
  border-radius: 16px 16px 0 0;
  overflow: auto;
  padding: 16px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  margin-bottom: 28px;
  flex-grow: 1;
  display: flex;
`;

const UI = styled.img`
  margin: auto;
`;
