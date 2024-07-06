import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import Homesectioncard from "../Homesectioncarosulxcard/homesectioncard/homesectioncard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const SectionCa = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    700: { items: 3 },
    1024: { items: 5 },
  };

  const items = data.slice(0, 10).map((item) => (
    <Homesectioncard key={item.id} product={item} />
  ));

  const slidePrev = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);
    carouselRef.current.slideTo(newIndex);
  };

  const slideNext = () => {
    const newIndex = Math.min(activeIndex + 1, items.length - 1);
    setActiveIndex(newIndex);
    carouselRef.current.slideTo(newIndex);
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="">
      <h2 className="text-2xl font-extrabold">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
        />

        {activeIndex < items.length - 5 && (
          <button
            className="absolute hover:bg-sky-700 z-50 bg-white shadow-lg"
            style={{ top: "50%", right: "1rem", transform: "translateY(-50%) rotate(90deg)" }}
            onClick={slideNext}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon style={{ color: "black", transform: "rotate(90deg)" }} />
          </button>
        )}

        {activeIndex > 0 && (
          <button
            className="absolute z-50 bg-white shadow-lg"
            style={{ top: "50%", left: "1rem", transform: "translateY(-50%) rotate(-90deg)" }}
            onClick={slidePrev}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon style={{ color: "black", transform: "rotate(90deg)" }} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionCa;
