import React from "react";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function App_main() {
  const center = { lat: 37.371421, lng: 127.104744 };
  return (
    <>
      <Container>
        <Map
          center={center}
          style={{ width: "390px", height: "100vh" }}
          level={2}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 390px;
  position: relative;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: auto;
  justify-content: center;
`;
