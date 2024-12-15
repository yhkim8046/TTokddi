import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const RadioGroup = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  font-size: 1em;
  cursor: pointer;

  input {
    margin-right: 10px;
  }
`;

const InputField = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  background-color: #ccc;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`;

const ReviewForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [customInput, setCustomInput] = useState('');

  const handleSubmit = () => {
    const review = selectedOption === 'custom' ? customInput : selectedOption;
    alert(`리뷰: ${review}`);
  };

  return (
    <Container>
      <Title>가게에 힘이 되는 리뷰를 남겨 주세요</Title>
      <RadioGroup>
        <RadioOption>
          <input
            type="radio"
            name="review"
            value="친절한 응대 감사해요"
            checked={selectedOption === '친절한 응대 감사해요'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          친절한 응대 감사해요
        </RadioOption>
        <RadioOption>
          <input
            type="radio"
            name="review"
            value="덕분에 아이가 사회성을 배웠어요"
            checked={selectedOption === '덕분에 아이가 사회성을 배웠어요'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          덕분에 아이가 사회성을 배웠어요
        </RadioOption>
        <RadioOption>
          <input
            type="radio"
            name="review"
            value="다음에 함께 재방문할게요"
            checked={selectedOption === '다음에 함께 재방문할게요'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          다음에 함께 재방문할게요
        </RadioOption>
        <RadioOption>
          <input
            type="radio"
            name="review"
            value="아이가 용기를 얻었어요"
            checked={selectedOption === '아이가 용기를 얻었어요'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          아이가 용기를 얻었어요
        </RadioOption>
        <RadioOption>
          <input
            type="radio"
            name="review"
            value="custom"
            checked={selectedOption === 'custom'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          직접 입력
        </RadioOption>
        {selectedOption === 'custom' && (
          <InputField
            type="text"
            placeholder="리뷰를 입력하세요"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
          />
        )}
      </RadioGroup>
      <SubmitButton onClick={handleSubmit}>입력 완료</SubmitButton>
    </Container>
  );
};

export default ReviewForm;
