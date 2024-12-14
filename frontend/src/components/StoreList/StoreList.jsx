import React from "react";
import styled from "styled-components";

export default function StoreList({ name, state, phone, location }) {
  return (
    <>
      <ListContainer>
        <Img />
        <InfoContainer>
          <BtnContainer>
            <StoreName>{name}</StoreName>
            <OPBtn state={state}>{state}</OPBtn>{" "}
          </BtnContainer>
          <Phone>{phone}</Phone>
          <Location>{location}</Location>
        </InfoContainer>
      </ListContainer>
    </>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const Img = styled.div`
  width: 100px;
  height: 100px;
  border: solid 1px #d3d3d3;
  border-radius: 12px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
  gap: 12px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StoreName = styled.div`
  width: 144px;
  flex-flow: row wrap;
  font-size: 16px;
  font-weight: 700;
`;

const OPBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  width: 68px;
  height: 32px;
  background-color: #ffffff;
  border: solid 1px
    ${(props) => (props.state === "요청 가능" ? "#3496FF" : "#FF6868")};
  border-radius: 20px;
  color: ${(props) => (props.state === "요청 가능" ? "#3496FF" : "#FF6868")};
  font-size: 12px;
  font-weight: 600;
`;

const Phone = styled.div`
  font-size: 16px;
  color: #5c5c5c;
`;

const Location = styled.div`
  font-size: 16px;
  color: #5c5c5c;
`;
