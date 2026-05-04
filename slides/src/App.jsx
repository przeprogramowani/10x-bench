import { useEffect, useMemo, useState } from "react";
import { slides } from "./deck/slides.jsx";

function getInitialSlide(total) {
  const fromHash = Number.parseInt(window.location.hash.replace("#", ""), 10);
  if (Number.isNaN(fromHash)) return 0;
  return Math.max(0, Math.min(fromHash - 1, total - 1));
}

export default function App() {
  const total = slides.length;
  const [current, setCurrent] = useState(() => getInitialSlide(total));
  const [cursorVisible, setCursorVisible] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);

  const navigation = useMemo(
    () => ({
      go(index) {
        setCurrent((previous) => {
          const next = Math.max(0, Math.min(index, total - 1));
          return next === previous ? previous : next;
        });
      },
      next() {
        setCurrent((previous) => Math.min(previous + 1, total - 1));
      },
      previous() {
        setCurrent((previous) => Math.max(previous - 1, 0));
      },
    }),
    [total],
  );

  useEffect(() => {
    window.history.replaceState(null, "", `#${current + 1}`);
  }, [current]);

  useEffect(() => {
    document.body.classList.toggle("cursor-visible", cursorVisible);
    return () => document.body.classList.remove("cursor-visible");
  }, [cursorVisible]);

  useEffect(() => {
    const showHint = window.setTimeout(() => setHintVisible(true), 800);
    const hideHint = window.setTimeout(() => setHintVisible(false), 5000);
    return () => {
      window.clearTimeout(showHint);
      window.clearTimeout(hideHint);
    };
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "ArrowRight" || event.key === " " || event.key === "Enter") {
        event.preventDefault();
        navigation.next();
      } else if (event.key === "ArrowLeft" || event.key === "Backspace") {
        event.preventDefault();
        navigation.previous();
      } else if (event.key === "Home") {
        event.preventDefault();
        navigation.go(0);
      } else if (event.key === "End") {
        event.preventDefault();
        navigation.go(total - 1);
      } else if (event.key === "f" || event.key === "F") {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [navigation, total]);

  useEffect(() => {
    let touchX = 0;

    function onTouchStart(event) {
      touchX = event.changedTouches[0].screenX;
    }

    function onTouchEnd(event) {
      const dx = event.changedTouches[0].screenX - touchX;
      if (Math.abs(dx) > 50) {
        dx < 0 ? navigation.next() : navigation.previous();
      }
    }

    function onClick(event) {
      if (event.clientX > window.innerWidth * 0.65) navigation.next();
      else if (event.clientX < window.innerWidth * 0.35) navigation.previous();
    }

    let cursorTimer;
    function onMouseMove() {
      setCursorVisible(true);
      window.clearTimeout(cursorTimer);
      cursorTimer = window.setTimeout(() => setCursorVisible(false), 2000);
    }

    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchend", onTouchEnd);
    document.addEventListener("click", onClick);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      window.clearTimeout(cursorTimer);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("click", onClick);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [navigation]);

  return (
    <>
      <main className="deck">
        {slides.map((slide, index) => (
          <div key={slide.id} className="contents">
            {slide.render(index === current)}
          </div>
        ))}
      </main>
      <div className="progress" style={{ width: `${((current + 1) / total) * 100}%` }} />
      <div className="counter">
        {current + 1} / {total}
      </div>
      <div className={`hint ${hintVisible ? "visible" : ""}`}>
        <kbd>&larr;</kbd> <kbd>&rarr;</kbd> nawigacja · <kbd>F</kbd> fullscreen
      </div>
    </>
  );
}
