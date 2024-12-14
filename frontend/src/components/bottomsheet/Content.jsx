import React from "react";
import styled from "styled-components";
import StoreList from "../StoreList/StoreList";

export default function Content() {
  return (
    <>
      <Container>
        <StoreList
          name="가게 이름이 너무 길어요;;;;;;"
          phone="010-0000-0000"
          state="요청 가능"
          location="위치위치위치"
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 24px;
`;
