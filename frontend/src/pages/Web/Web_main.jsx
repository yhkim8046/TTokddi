import React from "react";
import styled from "styled-components";
import RequestCard from "../../components/RequestCard";
import ChildCard from "../../components/ChildCard";

export default function Web_main() {
  return (
    <Container>
      <RequestCard
        name="김똑띠"
        age="4세 남아"
        start_time="14:25"
        end_time="14:30"
      />
      <ChildCard
        name="박순둥"
        age="5세 여아"
        start_time="14:25"
        end_time="14:30"
      />
      <ChildCard
        name="최우주"
        age="5세 남아"
        start_time="14:25"
        end_time="14:30"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  min-height: 100vh;
  padding: 20px;
`;
