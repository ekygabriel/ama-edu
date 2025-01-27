import { Metadata } from "next";

import HeroBanner from "@/components/HeroBanner";

import { LearnBanner, ServicesBanner, ServicesMobile } from "@/assets";
import CPD from "./_components/cpd";
import Calendar from "./_components/Calendar";
import UpcomingEvents from "./_components/UpcomingEvents";

export const metadata: Metadata = {
  title: "Learn with AMA",
  description: "Take a video course or join any of AMA's live classes",
};

const LearnWithAMAPage = () => {
  return (
    <div className="OthersLayout">
      <HeroBanner imageUrl={LearnBanner} title="Learn" />

      <CPD />
      <UpcomingEvents />
      <Calendar />
    </div>
  );
};

export default LearnWithAMAPage;
