import React from "react";
import Top from "./_components/Top";
import UpcomingEvents from "./_components/UpcomingEvents";

const EarlyYearsPage = () => {
  return (
    <div className="OthersLayout relative overflow-x-hidden">
      <h3
        className={
          "absolute right-[70px] top-0 -rotate-90 text-purple-light opacity-40 text-[200px]"
        }
        style={{ transformOrigin: "right" }}
      >
        BRAND
      </h3>

      <div className="max-w-4xl mx-auto px-4 mt-20">
        <Top />
      </div>
      <UpcomingEvents />
    </div>
  );
};

export default EarlyYearsPage;
