import React from "react";
import styled from "styled-components";

export default function Progress({ name, contact, address }) {

  return (
    <>
      <Container>
        <InfoContainer>
          <StoreName>{name}</StoreName>
          <Phone>{contact}</Phone>
          <Location>{address}</Location>
        </InfoContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 327px;
  height: 172px;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 24px;
  z-index: 1;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
  gap: 12px;
`;

const StoreName = styled.div`
  width: 144px;
  flex-flow: row wrap;
  font-size: 16px;
  font-weight: 700;
`;

const Phone = styled.div`
  font-size: 16px;
  color: #5c5c5c;
`;

const Location = styled.div`
  font-size: 16px;
  color: #5c5c5c;
`;
