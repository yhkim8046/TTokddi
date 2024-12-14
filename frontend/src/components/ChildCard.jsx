import React, { useState } from "react";
import styled from "styled-components";
import { style } from "framer-motion/client";
import uncheck from "../assets/uncheck.svg";
import check from "../assets/check.svg";

export default function ChildCard({ name, age, start_time, end_time }) {
  const [isArrived, setIsArrived] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
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
          <CheckCon>
            <Info>다음 항목을 확인 후 체크해주세요</Info>
            <Check>
              <Text>아이가 가게에 도착했나요?</Text>
              <Icon
                src={isArrived ? check : uncheck}
                onClick={() => setIsArrived(!isArrived)}
              />
            </Check>
            <Check>
              <Text>아이가 가게를 떠났나요?</Text>
              <Icon
                src={isLeft ? check : uncheck}
                onClick={() => setIsLeft(!isLeft)}
              />
            </Check>
          </CheckCon>
        </ContentContainer>
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
  background-color: #f0fff8;
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
  padding-top: 50px;
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
  border: solid 2px #b4eed5;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 700;
  color: #29805a;
  justify-content: center;
  align-items: center;
  background-color: #b4eed5;
`;

const CheckCon = styled.div`
  width: 316px;
  height: 214px;
  background-color: #f5f5f5;
  border-radius: 16px;
  margin-top: 20px;
  padding: 16px;
`;

const Info = styled.div`
  display: flex;
  color: 5C5C5C;
  font-size: 16px;
  font-weight: 400;
`;

const Check = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
  color: #29805a;
  font-size: 20px;
  font-weight: 600;
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
`;
