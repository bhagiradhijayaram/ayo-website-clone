import React from "react";
import carouselInfo from "../data/carouselInfo.json";

const ImageCarousel = () => {
  if (!carouselInfo?.length) return null;

  const items = [...carouselInfo];

  return (
    <div className="w-full overflow-hidden py-5">
      <div
        className="flex w-max animate-carousel gap-6"
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {items.map((item, idx) => (
          <div key={idx} className="overflow-hidden flex gap-6 items-center">
            <img
              src={item.image}
              alt={item.title || "carousel image"}
              className="h-8 object-contain"
              loading="lazy"
            />
            <p className="max-w-[300px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
