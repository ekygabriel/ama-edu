import { Metadata } from "next";

import HeroBanner from "@/components/HeroBanner";

import { ServicesBanner, ServicesMobile } from "@/assets";
import ServicesList from "./_components/ServicesList";
import TargetAudience from "./_components/TargetAudience";
import Testimonials from "./_components/Testimonials";

export const metadata: Metadata = {
  title: "AMA Services",
  description: "Services rendered by Anuoluwapo Michael-Ayeni",
};

const AMAServicesPage = () => {
  return (
    <div className="OthersLayout">
      <div className="hidden md:block">
        <HeroBanner imageUrl={ServicesBanner} title="Services" color="black" />
      </div>
      <div className="md:hidden">
        <HeroBanner imageUrl={ServicesMobile} title="Services" color="black" />
      </div>
      <ServicesList />
      <Testimonials />
      <TargetAudience />
    </div>
  );
};

export default AMAServicesPage;
