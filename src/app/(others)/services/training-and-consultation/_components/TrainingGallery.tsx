import {
  TrainingGal1,
  TrainingGal2,
  TrainingGal3,
  TrainingGal4,
  TrainingGal5,
  TrainingGal6,
} from "@/assets";

import ScrollGallery from "../../_components/ScrollGallery";

const data = [
  {
    img: TrainingGal1,
    lead: "Dress Up",
    text: "Being an early years practitioner affords me the opportunity to dress up and be different characters in order to bring our learning to life.",
  },
  {
    img: TrainingGal2,
    lead: "SEN Awards - Most Inclusive Teacher",
    text: "In 2021, The SEN Department of Meadow Hall School awarded me as the most Inclusive Teacher in the EYFS section.",
  },
  {
    img: TrainingGal3,
    lead: "Virtual Classroom",
    text: "Here is one of the welcome boards I created for my virtual class during the Lockdown.",
  },
  {
    img: TrainingGal4,
    lead: "Book Club",
    text: "I run book clubs in schools to develop reading skills and interest in young learners.",
  },
  {
    img: TrainingGal5,
    lead: "Math Activity",
    text: "My lessons are always practical and engaging for my learners.",
  },
  {
    img: TrainingGal6,
    lead: "Outdoor Learning",
    text: "Through outdoor learning I ensure that all my learners are engaged and participate actively in learning activities.",
  },
];

const TrainingGallery = ({ title }: { title: string }) => {
  return (
    <div className="bg-purple-light py-20 mt-20">
      <h2 className="text-center">{title}</h2>
      <ScrollGallery data={data} slim />
    </div>
  );
};

export default TrainingGallery;
