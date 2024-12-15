import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Emoji = styled.div`
  font-size: 4em;
  margin-bottom: 20px;
`;

const TipContainer = styled.div`
  background-color: #f6f6f6;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
  text-align: left;
`;

const TipTitle = styled.p`
  font-size: 0.9em;
  font-weight: bold;
  color: #4caf50;
  margin-bottom: 10px;
`;

const TipContent = styled.p`
  font-size: 0.9em;
  margin-bottom: 5px;
`;

const Example = styled.p`
  font-size: 0.9em;
  font-style: italic;
  color: #666;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const PraisePage = () => {
  const handleButtonClick = () => {
    alert('서비스를 종료합니다.');
  };

  return (
    <Container>
      <Title>오늘도 성장한 우리아이에게 격려와 칭찬을 해주세요</Title>
      <Emoji>👍✨</Emoji>
      <TipContainer>
        <TipTitle>이렇게 칭찬해주세요</TipTitle>
        <TipContent>급전적인 보상보다는 행동에 집중한 칭찬을 해주세요!</TipContent>
        <Example>“힘들 수도 있었는데 끝까지 노력해서 성공했네! 대단해~”</Example>
      </TipContainer>
      <Button onClick={handleButtonClick}>서비스 종료</Button>
    </Container>
  );
};

export default PraisePage;
