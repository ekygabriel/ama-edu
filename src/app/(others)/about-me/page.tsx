import { Metadata } from "next";
import Image from "next/image";

import { Anu2 } from "@/assets";
import Link from "next/link";
import TrainingGallery from "../services/training-and-consultation/_components/TrainingGallery";
import MyJourney from "./_component/MyJourney";
import WorkExperience from "./_component/WorkExperience";
import MCEComponent from "./_component/MCE";
import PhotoGallery from "./_component/PhotoGallery";

export const metadata: Metadata = {
  title: "About",
  description:
    "Anuoluwapo Michael-Ayeni, founder of Early Years Learning, an educational consult that is constantly improving the quality of educational practices by providing professional development, trainings, consultation and mentorship as well as support for early years teachers, schools and parents of children in the early years.",
};

const AboutPage = () => {
  return (
    <section className="OthersLayout mt-10 md:mt-28">
      <div className="flex gap-5 flex-col md:flex-row">
        <figure className="relative w-[330px] h-[400px] md:max-w-[350px] md:h-[450px] md:self-center md:flex-[4] mx-auto mb-6 md:mb-0">
          <Image
            src={Anu2}
            alt="Anuoluwapo Michael-Ayeni"
            priority
            fill
            // sizes="500vw"
            className="rounded-3xl md:rounded-s-none md:rounded-e-[40px]"
          />
        </figure>
        <div style={{ flex: "6", padding: "0 20px" }}>
          <h2 className="text-purple-light-2 text-5xl text-center md:text-left">
            About Me:
          </h2>
          <div className="text-justify max-w-3xl mx-auto md:mx-0 flex flex-col gap-3 pb-16">
            <p>
              Anuoluwapo is a distinguished Early Years Educator, boasting of
              over a decade of experience in the classroom and a certification
              in Elocution. She harbors a deep-seated passion for guiding
              children towards their utmost potential, alongside mentoring and
              supporting fellow educators and professionals in the field of
              Early Childhood Education.
            </p>
            <p>
              As the Founder of Early Years Learning, Anuoluwapo spearheads an
              educational consultancy dedicated to elevating the standards of
              educational practices. This endeavor involves offering
              professional development courses, training, consultation, and
              mentorship, benefiting early years educators, academic
              institutions, and parents of young learners. Her commitment is
              firmly rooted in enhancing the caliber of learning and development
              during the critical early years, ensuring comprehensive growth in
              all facets of education for both children and educators.
            </p>
            <p>
              Additionally, Anuoluwapo extends her expertise through a{" "}
              <Link
                href="https://youtube.com/@earlyyearslearningtv"
                target="_blank"
                className="underline font-semibold"
              >
                YouTube channel
              </Link>
              , where she crafts captivating educational content for young
              learners and imparts valuable insights for parents and educators.
            </p>
            <p>
              Beyond her professional pursuits, Anuoluwapo is a devout
              Christian, a devoted wife, and a proud mother of two beautiful
              daughters. Her personal and professional life is a testament to
              her commitment to nurturing growth and excellence in the realm of
              Early Childhood Education.
            </p>
          </div>
        </div>
      </div>
      <MyJourney />
      <WorkExperience />
      <MCEComponent />
      <PhotoGallery />
      {/* <TrainingGallery title="Photo Gallery" /> */}
    </section>
  );
};

export default AboutPage;
