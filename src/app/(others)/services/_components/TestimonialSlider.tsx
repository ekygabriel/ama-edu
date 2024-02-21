"use client";

import { useCallback, useEffect, useState } from "react";
import "./TestimonialSlider.scss";
import Image, { StaticImageData } from "next/image";
import { Quotes } from "@/assets";

interface TestimonialSlider {
  id: string;
  img: string | StaticImageData;
  text: string;
}

interface TestimonialSliderProps {
  slides: TestimonialSlider[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    timer = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => {
      clearInterval(timer);
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
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="text-center md:text-right max-w-[500px] md:max-w-[600px]">
              {slide.text}
            </p>
            <Image
              src={slide.img}
              alt="Author's image"
              width={160}
              height={160}
              className="rounded-full -order-1 md:order-1"
              style={{ width: "160px", height: "160px" }}
            />
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
