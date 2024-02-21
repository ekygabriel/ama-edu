import { Anu1, Omowunmi, Quotes } from "@/assets";
import TestimonialSlider from "./TestimonialSlider";
import Image from "next/image";
const data = [
  {
    id: "1",
    img: Omowunmi.src,
    text: "I remember joining the early years learning mentorship community last year, with little or no idea about what early years was all about, I kept following every of the free whatsapp discussions and webinars and I personally loved that each of this session took me from the beginner stage to an intermediate stage, I wouldn't want to say advance but at least the stage the class took me gave me a better paying job in a more conducive setting , you needed to see me in my interview talking about the stages of early years and all, I sincerely didn't have to read for the interview because I believed what I got from the training sessions with Mrs Michael-Ayeni were best practices and to think they all came in for free🥲. I really appreciate Mrs Ayeni and can never forget this in a jiffy.",
  },
  {
    id: "2",
    img: Anu1.src,
    text: "Early Years Learning Ng. has been a game-changer for my child's education. The personalized attention and innovative teaching methods have sparked a love for learning in my child that I had not seen before. The resources and guidance provided by their team are top-notch.",
  },
  {
    id: "3",
    img: Anu1.src,
    text: " As a parent, I feel more equipped and confident in supporting my child's educational journey. I am grateful for their unwavering commitment to early education excellence. Early Years Learning Ng. has been a game-changer for my child's education. The personalized attention and innovative teaching methods have sparked a love for learning in my child that I had not seen before. The resources and guidance provided by their team are top-notch. As a parent, I feel more equipped and confident in supporting my child's educational journey. I am grateful for their unwavering commitment to early education excellence",
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
