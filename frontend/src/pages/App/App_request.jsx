import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import back from "../../assets/back.svg";
import TimePicker from "../../components/TimePicker";

export default function App_request() {
  return (
    <>
      <Container>
        <Header>
          <Icon src={back} />
          <Title>요청서 작성</Title>
        </Header>
        <TextCon>
          <TimeText_1>출발 시간</TimeText_1>
          <TimeText_2>도착 예정 시간</TimeText_2>
        </TextCon>

        <TimeCon>
          <TimePicker />
          <TimePicker />
        </TimeCon>

        <Button text="요청 보내기" />
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  max-width: 390px;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: auto;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  position: relative;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 0;
`;

const Title = styled.div`
  flex: 1;
  text-align: center;
  padding: 0 50px;
`;

const TimeCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const TextCon = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 12px;
`;

const TimeText_1 = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-left: 8px;
`;

const TimeText_2 = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-left: 120px;
`;
