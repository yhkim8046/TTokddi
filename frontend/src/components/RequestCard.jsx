import React from "react";
import styled from "styled-components";
import { style } from "framer-motion/client";

export default function RequestCard({ name, age, start_time, end_time }) {
  return (
    <>
      <Card>
        <ContentContainer>
          <Name>{name}</Name>
          <Age>{age}</Age>
          <TimeCon>
            <Time>{start_time}</Time>
            <Time>{end_time}</Time>
          </TimeCon>
        </ContentContainer>
        <BtnCon>
          <Btn label="거절">거절</Btn>
          <Btn label="수락">수락</Btn>
        </BtnCon>
      </Card>
    </>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 362px;
  height: 468px;
  border-radius: 20px;
  background-color: #69ddab;
  padding: 24px;
`;

const ContentContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Name = styled.div`
  font-size: 36px;
  font-weight: 700;
  padding-top: 80px;
  padding-left: 24px;
`;

const Age = styled.div`
  font-size: 20px;
  font-weight: 400;
  padding-left: 24px;
`;

const TimeCon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-left: 24px;
  margin-top: 30px;
`;

const Time = styled.div`
  display: flex;
  width: 70px;
  height: 40px;
  border: solid 2px #29805a;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 700;
  color: #29805a;
  justify-content: center;
  align-items: center;
`;

const BtnCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 54px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.label === "수락" ? "#36AA78" : "#ffffff"};
  color: ${(props) => (props.label === "수락" ? "#ffffff" : "#000000")};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.label === "수락" ? "#2e9a66" : "#f0f0f0"};
    color: ${(props) => (props.label === "수락" ? "#ffffff" : "#000000")};
  }
`;
