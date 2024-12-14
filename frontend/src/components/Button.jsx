import React from "react";
import styled from "styled-components";

export default function Button({ text }) {
  return (
    <>
      <Btn>{text}</Btn>
    </>
  );
}

const Btn = styled.button`
  width: 327px;
  height: 54px;
  background-color: #36aa78;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 24px;
`;
