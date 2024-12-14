import { useRef, useEffect } from "react";
import { MIN_Y, MAX_Y } from "../data/BottomOption";

export default function useBottomSheet() {
  const sheet = useRef(null);
  const content = useRef(null);
  const metrics = useRef({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: "none",
    },
    isContentAreaTouched: false,
  });

  useEffect(() => {
    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;

      if (!isContentAreaTouched) {
        return true;
      }

      if (sheet.current.getBoundingClientRect().y !== MIN_Y) {
        return true;
      }

      if (touchMove.movingDirection === "down") {
        return content.current.scrollTop <= 0;
      }
      return false;
    };

    const handleTouchStart = (e) => {
      const { touchStart } = metrics.current;
      touchStart.sheetY = sheet.current.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY === 0) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY < currentTouch.clientY) {
        touchMove.movingDirection = "down";
      }

      if (touchMove.prevTouchY > currentTouch.clientY) {
        touchMove.movingDirection = "up";
      }

      if (canUserMoveBottomSheet()) {
        e.preventDefault();
        const touchOffset = currentTouch.clientY - touchStart.touchY;
        let nextSheetY = touchStart.sheetY + touchOffset;

        if (nextSheetY <= MIN_Y) {
          nextSheetY = MIN_Y;
        }

        if (nextSheetY >= MAX_Y) {
          nextSheetY = MAX_Y;
        }

        sheet.current.style.setProperty(
          "transform",
          `translateY(${nextSheetY - MAX_Y}px)`
        );
      } else {
        document.body.style.overflowY = "hidden";
      }
    };

    const handleTouchEnd = () => {
      document.body.style.overflowY = "auto";
      const { touchMove } = metrics.current;
      const currentSheetY = sheet.current.getBoundingClientRect().y;

      if (currentSheetY !== MIN_Y) {
        if (touchMove.movingDirection === "down") {
          sheet.current.style.setProperty("transform", "translateY(0)");
        }

        if (touchMove.movingDirection === "up") {
          sheet.current.style.setProperty(
            "transform",
            `translateY(${MIN_Y - MAX_Y}px)`
          );
        }
      }

      metrics.current = {
        touchStart: {
          sheetY: 0,
          touchY: 0,
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: "none",
        },
        isContentAreaTouched: false,
      };
    };

    sheet.current.addEventListener("touchstart", handleTouchStart);
    sheet.current.addEventListener("touchmove", handleTouchMove);
    sheet.current.addEventListener("touchend", handleTouchEnd);

    return () => {
      sheet.current.removeEventListener("touchstart", handleTouchStart);
      sheet.current.removeEventListener("touchmove", handleTouchMove);
      sheet.current.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    const handleTouchStart = () => {
      metrics.current.isContentAreaTouched = true;
    };
    content.current.addEventListener("touchstart", handleTouchStart);

    return () => {
      content.current.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return { sheet, content };
}
