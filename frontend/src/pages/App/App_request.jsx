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
        <div style={{ padding: 12 }}></div>

        <Label>
          <CheckboxContainer>
            <Label htmlFor="infoBlock">아이 정보 불러오기</Label>
            <CustomCheckbox id="infoBlock" type="checkbox" />
          </CheckboxContainer>
        </Label>
        <Label_R>아이 이름</Label_R>
        <InputField id="childName" placeholder="이름을 입력해주세요" />
        <TextCon>
          <TimeText_1>나이</TimeText_1>
          <Sex>성별</Sex>
        </TextCon>

        <BtnCon>
          <InputField placeholder="나이를 입력해주세요" />
          <BtnCon>
            <Btn>남아</Btn>
            <Btn>여아</Btn>
          </BtnCon>
        </BtnCon>
        <Label_R>특징</Label_R>
        <InputField placeholder="특징을 입력해주세요" />
        <Label>
          <CheckboxContainer>
            <CustomCheckbox id="privacyAgreement" type="checkbox" />
            <Label htmlFor="privacyAgreement">
              개인정보 수집·이용 동의(필수) &gt;
            </Label>
          </CheckboxContainer>
        </Label>
        <div style={{ padding: 16 }}></div>
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

const Sex = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-left: 164px;
`;

const InputField = styled.input`
  display: block;
  width: 100%;
  height: 52px;
  padding: 12px;
  border-width: 0;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  border-radius: 12px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #6aa6f8;
    box-shadow: 0 0 0 2px rgba(102, 175, 233, 0.6);
  }
`;

const BtnCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

const Btn = styled.button`
  display: flex;
  flex-direction: column;
  width: 71px;
  height: 52px;
  padding: 12px 20px;
  margin-left: 8px;
  border: none;
  background-color: #f5f5f5;
  color: #737373;
  font-size: 16px;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  justify-content: center;
  transition: background-color 0.3s ease;
  &:hover {
    border: solid 1px #69ddab;
    background-color: #ffffff;
    color: #69ddab;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: end;
`;

const CustomCheckbox = styled.input`
  margin-right: 8px;
  cursor: pointer;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  align-items: center;
  cursor: pointer;
  color: #8f8f8f;
`;

const Label_R = styled.label`
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 12px;
  margin-bottom: 8px;
`;
