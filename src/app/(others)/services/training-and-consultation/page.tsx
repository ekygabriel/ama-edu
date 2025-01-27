import { Metadata } from "next";

import {
  Consultation,
  Training1,
  Training2,
  Training3,
  Training4,
  Training5,
  TrainingGal7,
  TrainingGal8,
} from "@/assets";
import HeroBanner from "@/components/HeroBanner";
import BreadCrumbs from "../_components/BreadCrumbs";
import Button from "@/components/form/Button";
import ForSchools from "./_components/ForSchools";
import TrainingGallery from "./_components/TrainingGallery";

export const metadata: Metadata = {
  title: "Trainings and Consultations",
  description:
    " We organise a series of Workshops and Webinars for early years practitioners and parents every year. Individuals can sign up for any of our workshops for the year or book a one to one consultation session.",
};

const data = [
  {
    img: Training5,
    lead: "Onboarding Session",
    text: "Conducting an onboarding session with the new team at Mini Treasures Preparatory School, Lagos. To familiarise new staff members with the school policies and procedures.",
  },
  {
    img: Training2,
    lead: "Jolly Phonics Training",
    text: "A Jolly Phonics training for parents of Child's Right International School, Lagos. We took them through all the letter sounds and actions and discussed ways that reading can be taught to children at home.",
  },
  {
    img: Training3,
    lead: "Elocution Training",
    text: "A diction training for the staff of IQ Plus School in Lagos, the teachers were taken through speech sounds and their various links to letters.",
  },
  {
    img: Training1,
    lead: "EYFS and Phonics Training",
    text: "Facilitating an EYFS and phonics training session at Mary Rose School, Lagos.",
  },
  {
    img: Training4,
    lead: "In-house Training",
    text: "Facilitating a training session with colleagues in the Foundation Stage section as a staff of Children's International School, Lagos.",
  },
  {
    img: TrainingGal7,
    lead: "Live Training Session",
    text: "A virtual training session for members of the Free Mentorship Community.",
  },
  {
    img: TrainingGal8,
    lead: "Mentorship Session",
    text: "After a training session at Progressive Steps School, Lagos, I had a one to one mentorship session with some teachers in the early years and key stage one.",
  },
];

const TrainingAndConsultation = () => {
  return (
    <div className="OthersLayout">
      <HeroBanner imageUrl={Consultation} title="Training & Consultation" />
      <BreadCrumbs />
      <div className="py-20 px-4 max-w-3xl text-center mx-auto">
        <h3 className="mb-10">For Individuals</h3>
        <p>
          We organise a series of Workshops and Webinars for early years
          practitioners and parents every year. Individuals can sign up for any
          of our workshops for the year or book a one to one consultation
          session.
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
              A 30 minutes consultation session to discuss school improvement
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
              A 30-minutes session with parents, to offer expert advice and
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
      <ForSchools />

      <TrainingGallery title="Training Gallery" data={data} />
    </div>
  );
};

export default TrainingAndConsultation;
