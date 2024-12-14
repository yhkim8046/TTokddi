import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const TimePickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UnifiedFrameContainer = styled.div`
  display: flex;
  background-color: #f5f8f9;
  border-radius: 12px;
  overflow: hidden;
`;

const FrameContainer = styled.div`
  height: 210px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  width: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SlideContent = styled.div`
  font-size: 16px;
  font-weight: medium;
  text-align: center;
  width: 100%;
  color: ${(props) => (props.active ? "#333333" : "#CCCCCC")};
  ${(props) =>
    props.active &&
    css`
      font-weight: 500;
    `}
`;

const TIME_HOURS = Array.from(Array(24).keys());
const TIME_MINUTES = Array(12)
  .fill(0)
  .map((_, i) => i * 5);
const AM_PM_OPTIONS = ["AM", "PM"];

const TimePicker = () => {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(0);
  const [ampm, setAmpm] = useState("AM");

  return (
    <TimePickerContainer>
      <UnifiedFrameContainer>
        <FrameContainer>
          <StyledSwiper
            direction="vertical"
            slidesPerView={7}
            mousewheel
            loopAdditionalSlides={3}
            slideToClickedSlide
            centeredSlides
            initialSlide={0}
            onSlideChange={(swiper) => setHours(swiper.realIndex)}
          >
            {TIME_HOURS.map((hour) => (
              <StyledSwiperSlide key={hour}>
                <SlideContent active={hours === hour}>
                  {hour.toString().padStart(2, "0")}
                </SlideContent>
              </StyledSwiperSlide>
            ))}
          </StyledSwiper>
        </FrameContainer>

        <FrameContainer>
          <StyledSwiper
            direction="vertical"
            slidesPerView={7}
            mousewheel
            loopAdditionalSlides={3}
            slideToClickedSlide
            centeredSlides
            onSlideChange={(swiper) => setMinutes(swiper.realIndex * 5)}
          >
            {TIME_MINUTES.map((minute, index) => (
              <StyledSwiperSlide key={index}>
                <SlideContent active={minutes === minute}>
                  {minute.toString().padStart(2, "0")}
                </SlideContent>
              </StyledSwiperSlide>
            ))}
          </StyledSwiper>
        </FrameContainer>

        <FrameContainer>
          <StyledSwiper
            direction="vertical"
            slidesPerView={7}
            mousewheel
            loopAdditionalSlides={3}
            slideToClickedSlide
            centeredSlides
            onSlideChange={(swiper) =>
              setAmpm(AM_PM_OPTIONS[swiper.realIndex % 2])
            }
          >
            {AM_PM_OPTIONS.map((option) => (
              <StyledSwiperSlide key={option}>
                <SlideContent active={ampm === option}>{option}</SlideContent>
              </StyledSwiperSlide>
            ))}
          </StyledSwiper>
        </FrameContainer>
      </UnifiedFrameContainer>
    </TimePickerContainer>
  );
};

export default TimePicker;
