import { Metadata } from "next";

import { Mentorship } from "@/assets";
import HeroBanner from "@/components/HeroBanner";
import Button from "@/components/form/Button";
import BreadCrumbs from "../_components/BreadCrumbs";

export const metadata: Metadata = {
  title: "AMA Services",
  description:
    "We offer one to one and group mentorship sessions for new, intending or current early years practitioners who would like to learn about best practices in the early childhood education and be supported through their teaching journey an early childhood expert.",
};

const MentorshipPage = () => {
  return (
    <div className="OthersLayout">
      <HeroBanner imageUrl={Mentorship} title="Mentorship For Teachers" />
      <BreadCrumbs />
      <div className="text-center max-w-4xl px-4 mx-auto my-20">
        <p>
          We offer one to one and group mentorship sessions for new, intending
          or current early years practitioners who would like to learn about
          best practices in the early childhood education and be supported
          through their teaching journey by an early childhood expert.
        </p>
        <p>
          These mentorship session covers guidance and support in lesson
          planning, understanding different curriculum areas, terminologies ,
          developmental milestones etc. and other aspects of early childhood
          education required for their success.
        </p>
        <p>
          Each mentee is taken through the process with the aim of ensuring that
          they become transformed from ordinary to exceptional practitioners.
        </p>
      </div>
      <div className="bg-yellow-light py-20 px-4">
        <div className="max-w-4xl flex gap-16 md:gap-8 flex-col md:flex-row justify-center mx-auto items-center md:items-start">
          <div className="max-w-[300px] text-center flex flex-col gap-4">
            <h3>1-to-1 Mentorship</h3>
            <p className="mb-6">
              Our one-to-one mentorship offers personalised support to
              individuals who are looking to be supported through their practice
              as early years practitioners. This is an 8 weeks one-to-one
              session where classes are scheduled to suit the individuals
              availability.
            </p>
            <Button
              href="https://forms.gle/PTUBvNbcsyDwspeL9"
              text="Book a Session"
              target="_blank"
            />
          </div>
          <div className="max-w-[300px] text-center flex flex-col gap-4">
            <h3>Group Mentorship</h3>
            <p className="mb-6">
              Our small group mentorship sessions are held quarterly for a
              period of 8 weeks, offering personalised support to new, intending
              or current early years practitioners in a small group of not more
              than 10 persons. (See calendar for the next group mentorship start
              date)
            </p>
            <Button href="/learn-with-ama#calendar" text="Go to Calendar" />
          </div>
        </div>
      </div>
      <div className="px-4 py-20 text-center mx-auto max-w-4xl">
        <h5 className="font-bold text-3xl ">
          Join the free mentorship community for early years educators on
          Whatsapp. Here you would have access to:
        </h5>
        <ul className="font-kumbh my-10">
          <li>Live Training sessions (quarterly).</li>
          <li>
            Training and development opportunities (course recommendations).
          </li>
          <li>Mentorship and support.</li>
          <li>Teaching and learning activities and ideas.</li>
          <li>Conversations, Q and A sessions.</li>
          <li> Discounted training fees.</li>
          <li>Job referrals / recommendations.</li>
          <li>Career branding. Interview tips etc.</li>
        </ul>
        <p className="mb-16">
          You will also learn from other experienced early years practitioners
          and have access to 1 to 1 career and personal development planning
          meetings with me.
        </p>
        <Button
          text="Register to Become a Member"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeswXrYvQM0b2LtD2wvDaQOds9-IWSv9Qz9yn_PlmKbELgRqA/viewform"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default MentorshipPage;
