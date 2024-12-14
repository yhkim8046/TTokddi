import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function StoreDetail({ title, state, phone, location }) {
  const navigate = useNavigate();

  const handleRequestClick = () => {
    navigate("/App_request");
  };

  return (
    <>
      <DetailContainer>
        <ListContainer>
          <Img />
          <InfoContainer>
            <BtnContainer>
              <StoreName>{title}</StoreName>
              <OPBtn state={state}>{state}</OPBtn>
            </BtnContainer>
            <Phone>{phone}</Phone>
            <Location>{location}</Location>
          </InfoContainer>
        </ListContainer>
        <Button text="요청 보내기" onClick={handleRequestClick} />
      </DetailContainer>
    </>
  );
}

const DetailContainer = styled.div`
  height: 80%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin-top: 20px;
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
