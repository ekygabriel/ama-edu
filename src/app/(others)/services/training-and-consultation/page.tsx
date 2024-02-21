import { Metadata } from "next";

import { Consultation } from "@/assets";
import HeroBanner from "@/components/HeroBanner";
import BreadCrumbs from "../_components/BreadCrumbs";
import Button from "@/components/form/Button";
import TrainingGallery from "./_components/TrainingGallery";
import Calendar from "./_components/Calendar";
import ForSchools from "./_components/ForSchools";

export const metadata: Metadata = {
  title: "Trainings and Consultations",
  description:
    " We organise a series of Workshops and Webinars for early years educators and parents every year. Individuals can sign up for any of our workshops for the year or book a one to one consultation session.",
};

const TrainingAndConsultation = () => {
  return (
    <div className="OthersLayout">
      <HeroBanner imageUrl={Consultation} title="Training & Consultation" />
      <BreadCrumbs />
      <div className="py-20 px-4 max-w-3xl text-center mx-auto">
        <h3 className="mb-10">For Individuals</h3>
        <p>
          We organise a series of Workshops and Webinars for early years
          educators and parents every year. Individuals can sign up for any of
          our workshops for the year or book a one to one consultation session.
        </p>
      </div>
      <div className="bg-yellow-light py-20 px-4">
        <div className="max-w-4xl flex gap-16 md:gap-8 flex-col md:flex-row justify-center mx-auto items-center md:items-start">
          <div className="max-w-[300px] text-center flex flex-col gap-4">
            <h3>
              School
              <br /> Improvement Plan
            </h3>
            <p className="mb-6">
              A 40 minutes consultation session to discuss school improvement
              plans and strategies.
            </p>
            <Button
              href="https://forms.gle/PTUBvNbcsyDwspeL9"
              text="Book a Session"
              target="_blank"
            />
          </div>
          <div className="max-w-[300px] text-center flex flex-col gap-4">
            <h3>
              Parent Consultation <br />
              and Assessment
            </h3>
            <p className="mb-6">
              A 40-minutes session with parents, to offer expert advice and
              assessment of child(ren)’s learning needs.
            </p>
            <Button
              href="https://forms.gle/PTUBvNbcsyDwspeL9"
              text="Book a Session"
              target="_blank"
            />
          </div>
        </div>
      </div>
      <Calendar />
      <ForSchools />

      <TrainingGallery title="Training Gallery" />
    </div>
  );
};

export default TrainingAndConsultation;
