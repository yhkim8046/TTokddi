import React from "react";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { mapdata } from "../../data/mapdata";

export default function App_main() {
  const center = { lat: 37.371421, lng: 127.104744 };

  return (
    <>
      <Container>
        <Map
          center={center}
          style={{ width: "390px", height: "100vh" }}
          level={2}
        >
          {mapdata.map((data) => (
            <MapMarker
              key={`${data.title}-${data.latlng}`}
              position={data.latlng}
              image={{
                src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                size: {
                  width: 24,
                  height: 35,
                },
              }}
              title={data.title}
            />
          ))}
        </Map>
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
