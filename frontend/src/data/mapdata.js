export const mapdata = [
  {
    id: "1",
    title: "버터핑거 팬케익스 분당점",
    latlng: { lat: 37.372208, lng: 127.105593 },
    state: "요청 불가",
    phone: "010-0102-9876",
    location: "150m · 경기도 성남시 분당구",
  },
  {
    id: "2",
    title: "이마트 에브리데이 분당정자",
    latlng: { lat: 37.371887, lng: 127.106263 },
    state: "요청 가능",
    phone: "010-0231-6789",
    location: "150m · 경기도 성남시 분당구",
  },
  {
    id: "3",
    title: "이마트 에브리데이 분당정자점",
    latlng: { lat: 37.371887, lng: 127.106263 },
    state: "요청 가능",
    phone: "010-0231-6876",
    location: "150m · 경기도 성남시 분당구",
  },
];

const current심부름 = [];

// 백엔드 API가 나왔을 때
// App_request 여기서 요청을 보내면 post
// 백엔드에서는 현재 요청중인 심부름이 등록됨

// 메인페이지에서 진행 중인 심부름이 있는지 정보를 호출해봐야함. (get) 항상
// 등록된 가게정보를 받아올 수 있음.

// 안나왔을때 <- 사실 이게 유력
// 메인 -> 요청하기
// 데이터의 id를 /app_request 로 보냄
// current심부름 에 mapdata id를 저장
