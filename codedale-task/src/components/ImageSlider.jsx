import { useState, useRef, useEffect } from "react";
import { circadianIssues } from "../data/circadianIssues.js";
import SlideCard from "./cards/SlideCard.jsx";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const ACTIVE_WIDTH = 460;
  const INACTIVE_WIDTH = 300;
  const GAP = 14;

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex === circadianIssues.length - 1;

  const getTranslateX = () => {
    let offset = 0;

    for (let i = 0; i < activeIndex; i++) {
      offset += INACTIVE_WIDTH + GAP;
    }

    offset -= (containerWidth - ACTIVE_WIDTH) / 2;
    return Math.max(offset, 0);
  };

  return (
    <section className="relative overflow-hidden py-20">
      <div ref={containerRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(-${getTranslateX()}px)`,
          }}
        >
          {circadianIssues.map((item, index) => (
            <SlideCard
              key={item.id}
              data={item}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-10 flex gap-3">
        <button
          onClick={() => setActiveIndex((i) => Math.max(i - 1, 0))}
          disabled={isPrevDisabled}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition
            ${
              isPrevDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
        >
          <GoArrowLeft />
        </button>

        <button
          onClick={() =>
            setActiveIndex((i) => Math.min(i + 1, circadianIssues.length - 1))
          }
          disabled={isNextDisabled}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition
            ${
              isNextDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
        >
          <GoArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
