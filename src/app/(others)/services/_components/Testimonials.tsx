import { Anu1, Danisa, Omowunmi, Quotes, Ututo } from "@/assets";
import TestimonialSlider from "./TestimonialSlider";
import Image from "next/image";
const data = [
  {
    id: "1",
    img: Omowunmi.src,
    text: "I joined the mentorship community last year, with little or no idea about what early years was all about, I kept following the WhatsApp discussions and webinars and I loved that each of session were enlightening. I was also able to get a better paying job in a more conducive setting. The confidence I had at the interview talking about the stages of development in the early years were all because of the training sessions with Mrs Michael-Ayeni and to think they all came in for free🥲. I really appreciate Mrs Ayeni and can never forget this in a jiffy. ",
    author: "Miss Omowunmi",
    place: "Member of Mentorship Community",
  },
  {
    id: "2",
    img: Danisa.src,
    text: "Mrs. Ayeni is a trained,  passionate, and seasoned Early Childhood Educator. I had the opportunity to witness firsthand her contribution and impact to the education ecosystem when she trained the teaching staff at the academic institution I preside over. Till date, the tools she taught and shared with my team are still very instrumental to curriculum formation and teachers' capacity development at our school.",
    author: "Mr Danisa",
    place: "School Owner",
  },
  {
    id: "3",
    img: Ututo.src,
    text: "I was glad I signed up for the Teach Your Child to Read phonics course for parents, the course was extremely well-planned with engaging materials and live sessions. What impressed me the most about this course is the engaging session with the tutor, it was also a chance for me to learn phonics too. I’ve never learned phonics as a child so I benefited from the lessons as well.",
    author: "Mrs Ututo",
    place: "Parent",
  },
];
const Testimonials = () => {
  return (
    <div className="bg-purple-light py-20 mt-20">
      <h2 className="text-center -mb-3">Testimonials</h2>
      <div className="w-full max-w-[800px] mx-auto pl-16 py-4">
        <Image
          src={Quotes}
          alt=""
          width={10}
          height={10}
          style={{ width: "80px" }}
        />
      </div>
      <TestimonialSlider slides={data} />
    </div>
  );
};

export default Testimonials;
