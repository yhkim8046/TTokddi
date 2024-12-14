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
    const handleTouchStart = (e) => {
      const { touchStart } = metrics.current;
      touchStart.sheetY = sheet.current.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];
      touchMove.prevTouchY = touchMove.prevTouchY || touchStart.touchY;
      touchMove.movingDirection =
        touchMove.prevTouchY < currentTouch.clientY ? "down" : "up";

      if (canUserMoveBottomSheet()) {
        e.preventDefault();
        const touchOffset = currentTouch.clientY - touchStart.touchY;
        let nextSheetY = touchStart.sheetY + touchOffset;
        nextSheetY = Math.max(MIN_Y, Math.min(nextSheetY, MAX_Y));

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
      if (sheet.current.getBoundingClientRect().y !== MIN_Y) {
        const translateY =
          metrics.current.touchMove.movingDirection === "down"
            ? 0
            : MIN_Y - MAX_Y;
        sheet.current.style.setProperty(
          "transform",
          `translateY(${translateY}px)`
        );
      }
      resetMetrics();
    };

    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;
      if (!isContentAreaTouched) return true;
      if (sheet.current.getBoundingClientRect().y !== MIN_Y) return true;
      return (
        touchMove.movingDirection === "down" && content.current.scrollTop <= 0
      );
    };

    const resetMetrics = () => {
      metrics.current = {
        touchStart: { sheetY: 0, touchY: 0 },
        touchMove: { prevTouchY: 0, movingDirection: "none" },
        isContentAreaTouched: false,
      };
    };

    if (sheet.current) {
      sheet.current.addEventListener("touchstart", handleTouchStart);
      sheet.current.addEventListener("touchmove", handleTouchMove);
      sheet.current.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (sheet.current) {
        sheet.current.removeEventListener("touchstart", handleTouchStart);
        sheet.current.removeEventListener("touchmove", handleTouchMove);
        sheet.current.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  useEffect(() => {
    const handleTouchStart = () => {
      metrics.current.isContentAreaTouched = true;
    };

    if (content.current) {
      content.current.addEventListener("touchstart", handleTouchStart);
    }

    return () => {
      if (content.current) {
        content.current.removeEventListener("touchstart", handleTouchStart);
      }
    };
  }, []);

  return { sheet, content };
}
