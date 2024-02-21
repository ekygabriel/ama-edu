"use client";

import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <div className="md:h-max flex text-center md:text-left">
      <div className="capitalize text-lg sm:text-[20px] text-black max-w-[300px] relative w-full px-0 mx-0">
        <Typewriter
          cursorBlinking
          loop
          cursor
          words={[
            "An Early Childhood Educator...",
            "A Teacher Trainer...",
            "An Educational Consultant...",
            "A Phonics/Diction Expert...",
          ]}
        />
      </div>
    </div>
  );
};

export default TypeWriter;
