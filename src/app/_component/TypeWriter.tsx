"use client";

import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <div className="md:h-max flex text-center md:text-left">
      <div className="capitalize text-sm font-light sm:text-[20px] text-black max-w-[300px] relative w-full px-0 mx-0 font-kumbh">
        <Typewriter
          cursorBlinking
          loop
          cursor
          words={[
            "An Early Childhood Educator...",
            "A Teacher Trainer...",
            "An Educational Consultant...",
            "A Phonics/Reading Expert...",
            "An Elocutionist...",
          ]}
        />
      </div>
    </div>
  );
};

export default TypeWriter;
