import { useState } from "react";
import { BOTTOM_SHEET_HEIGHT } from "../../data/BottomOption";
import styled from "styled-components";
import { motion } from "framer-motion";
import useBottomSheet from "../../hooks/useBottomSheet";
import Header from "./Header";
import Content from "./Content";
import StoreDetail from "../StoreList/StoreDetail";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 390px;

  position: fixed;
  z-index: 1;
  top: calc(100% - 40px);
  margin: auto;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: transform 650ms ease-out;
`;

const BottomSheetContent = styled.div`
  height: 350px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function BottomSheet() {
  const { sheet, content } = useBottomSheet();
  const [clickedContent, setClickedContent] = useState(null);

  return (
    <Wrapper ref={sheet}>
      <Header />
      <BottomSheetContent ref={content}>
        <Content onSelect={setClickedContent} />
      </BottomSheetContent>
    </Wrapper>
  );
}

export default BottomSheet;
