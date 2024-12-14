import React from "react";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { mapdata } from "../../data/mapdata";
import BottomSheet from "../../components/bottomsheet/BottomSheet";
import Guide from "../../assets/guide.svg";

export default function App_main() {
  const center = { lat: 37.371421, lng: 127.104744 };

  return (
    <>
      <Container>
        <GuideBtn>
          <GuideIcon src={Guide} />
          가이드
        </GuideBtn>

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
        <BottomSheet />
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

const GuideBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 98px;
  height: 40px;
  background-color: #36aa78;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  z-index: 1000;
  cursor: pointer;
`;

const GuideIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
