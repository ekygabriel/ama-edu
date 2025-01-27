import { AnuStanding, Bar, Bar_Vert } from "@/assets";
import Image from "next/image";

const WorkExperience = () => {
  return (
    <div className="md:pt-40 sm:pt-32 py-20 text-center">
      <div className="relative">
        <Image
          src={AnuStanding}
          width={400}
          height={700}
          alt="Anu Standing"
          className="absolute right-2 bottom-[45%] hidden sm:block"
          sizes="500vw"
          style={{ width: "220px" }}
        />
        <h2 className="text-center px-4">Work Experience:</h2>
        <div className="max-w-5xl mx-auto px-4">
          <p className="max-w-3xl mx-auto">
            I have worked with a number of schools in Lagos, Nigeria as a Key
            stage 1 teacher, Early Years Teaching Assistant , Lead Teacher, Year
            Group coordinator and as a Nursery Manager. I am committed to
            ensuring quality delivery of the EYFS to enable children develop
            needed skills appropriately and a lifelong love for learning.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-5 items-center max-w-xl px-4 mx-auto my-10">
        <h2>Skills:</h2>
        <p className="text-center md:text-left">
          Teacher Training, Phonics/Diction Expert, Digital Resource Creator,
          Differentiation in Practice, Curriculum Development, Video/Content
          Creation.
        </p>
      </div>
      <div className="flex items-center justify-center md:flex-col gap-4 sm:gap-8 max-w-[600px] mx-auto px-4 md:max-w-4xl">
        <Image
          src={Bar_Vert}
          alt=""
          width={40}
          height={50}
          sizes="500vw"
          className="w-8 md:hidden"
        />
        <Image
          src={Bar}
          alt=""
          width={300}
          height={50}
          sizes="500vw"
          className="hidden md:block md:w-[600px] mx-auto -mb-6"
        />
        <div className="text-left flex flex-col md:flex-row gap-5">
          <div className="max-w-[300px]">
            <h4 className="mb-0 text-[20px] md:text-center">
              Early Years Practitioner
            </h4>
            <p className="text-sm leading-5 md:text-right">
              I educate early learners in and out of the classroom, setting a
              foundation for early learning and development in line with the
              EYFS framework.
            </p>
          </div>
          <div className="max-w-[300px]">
            <h4 className="mb-0 text-[20px] md:text-center">
              Diction/Elocution Coach
            </h4>
            <p className="text-sm leading-5 md:text-justify">
              As a certified Elocutionist, I am dedicated to helping children
              and adults master the English language with clarity and
              confidence. Through personalized coaching, I empower my students
              to articulate effectively, fostering communication skills that
              open doors to new opportunities.
            </p>
          </div>
          <div className="max-w-[300px]">
            <h4 className="mb-0 text-[20px] md:text-center">Consultant</h4>
            <p className="text-sm leading-5">
              As an Early Years Consultant, I work with educators, school
              leaders and parents by providing trainings, support and
              consultation services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
