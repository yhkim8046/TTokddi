import React, { useState } from "react";
import styled from "styled-components";
import StoreList from "../StoreList/StoreList";
import StoreDetail from "../StoreList/StoreDetail";
import { mapdata } from "../../data/mapdata";

export default function Content({ onSelect }) {
  const [selectedStore, setSelectedStore] = useState(null);

  const handleSelectStore = (store) => {
    setSelectedStore(store);
    onSelect && onSelect(store);
  };

  return (
    <>
      <Container>
        {selectedStore ? (
          <StoreDetail {...selectedStore} />
        ) : (
          mapdata.map((store) => (
            <StoreList
              key={store.phone}
              name={store.title}
              phone={store.phone}
              state={store.state}
              location={store.location}
              onClick={() => handleSelectStore(store)}
            />
          ))
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 24px;
  overflow: auto;
`;
