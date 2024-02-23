"use client";

import { useCallback, useEffect, useState } from "react";
import "./TestimonialSlider.scss";
import Image, { StaticImageData } from "next/image";

interface TestimonialSlider {
  id: string;
  img: string | StaticImageData;
  text: string;
  author: string;
  place: string;
}

interface TestimonialSliderProps {
  slides: TestimonialSlider[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    timer = setInterval(() => {
      nextSlide();
    }, 10000);

    // Clear timer on hover (optional: clear only if autoplay is enabled)
    const pauseOnHover = true; // Set to true for hover-based pausing
    if (pauseOnHover && hoveredSlide !== null) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoveredSlide, currentSlide]);

  useEffect(() => {
    let startX: number | undefined;
    const swipeThreshold = 50; // Adjust as needed
    let swipeDirection: "left" | "right" | null = null;

    const handleTouchStart = (event: TouchEvent) => {
      startX = event.touches[0]?.clientX; // Use optional chaining
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (Math.abs(event.touches[0]?.clientX - startX!) > swipeThreshold) {
        swipeDirection = event.touches[0].clientX! < startX! ? "left" : "right";
      }
    };

    const handleTouchEnd = () => {
      if (swipeDirection) {
        if (swipeDirection === "left") {
          prevSlide();
        } else {
          nextSlide();
        }
        swipeDirection = null;
      }
    };

    // Add event listeners
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      // Remove event listeners
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  }, [slides]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider max-w-[800px] mx-auto px-4 min-h-[530px] md:min-h-[250px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          onMouseEnter={() => setHoveredSlide(index)}
          onMouseLeave={() => setHoveredSlide(null)}
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="text-center md:flex-[2] md:text-right max-w-[500px] md:max-w-[600px]">
              {slide.text}
            </p>
            <div className="flex flex-col items-center gap-3 md:flex-1">
              <Image
                src={slide.img}
                alt="Author's image"
                width={160}
                height={160}
                className="rounded-full -order-1 md:order-1"
                style={{ width: "160px", height: "160px" }}
              />
              <p className="leading-4 font-bold order-1 text-center text-purple-dark">
                {slide.author}
              </p>
              <small className="order-1 font-semibold -mt-4 text-center">
                {slide.place}
              </small>
            </div>
          </div>
        </div>
      ))}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
