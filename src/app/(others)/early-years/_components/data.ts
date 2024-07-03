import {
  Conversations,
  PrivateTutor,
  PhonicsAndDiction,
  PhonicsIntervention,
  ElocutionCourse,
  ReadingIntervention,
} from "@/assets";

const whatsappLink = "https://wa.me/07033379771";
export const data = [
  {
    title: "One-to-One Elocution Course for Educators",
    img: ElocutionCourse,
    info: [
      "To improve your speaking skills from Fluency to Eloquence, sign up for our one-to-one elocution course for a 5 weeks practical class. You will learn to properly produce the British English sounds and enunciate words correctly. A certificate will be awarded after the completion of the course.",
    ],
    buttonText: "Register",
    buttonLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfVDZllIGMYqPukXU_lRiVlXzXz6wsVIQyuNhTVNDJ2JUS8VQ/viewform",
    tag: "Training",
  },
  {
    title: "Conversations With Anuoluwapo",
    img: Conversations,
    info: [
      "Watch new episodes of Conversations with Anuoluwapo every second Saturday of the month on YouTube as I discuss topical issues relating to early childhood care and education.",
    ],
    buttonText: "Watch Replays",
    buttonLink: "https://youtube.com/@earlyyearslearningtv",
    tag: "YouTube",
  },
  {
    title: "Phonics and Diction Club",
    img: PhonicsAndDiction,
    info: [
      "Register your child/(ren) for our Phonics and Diction Club, holding every Saturday from 11am - 12pm (WAT). Children will be taken through the rudiments of reading fluency, correct enunciation of words, creative writing using a variety of picture prompts to create their own detailed stories and instructional texts etc.",
    ],
    buttonText: "Register",
    buttonLink: whatsappLink,
    tag: "Book Club",
  },
  {
    title: "Phonics and Reading Intervention for Children",
    img: PhonicsIntervention,
    info: [
      "Children below age 12 who require specific reading support can sign up for our one-to-one reading intervention class for personalized support to aid their reading and spelling skills. Classes are scheduled as required by parents/learners.",
    ],
    buttonText: "Register",
    buttonLink: whatsappLink,
    tag: "Intervention",
  },
  {
    title: "Reading Intervention for Teens and Adults",
    img: ReadingIntervention,
    info: [
      "Teenagers and Adults with specific reading challenges can sign up for our one-to-one reading intervention class for personalized support to aid their reading and writing skills. They will also have access to a range of resources and tasks. Classes are scheduled as required by parents/learners.",
    ],
    buttonText: "Register",
    buttonLink: whatsappLink,
    tag: "Intervention",
  },
  {
    title: "Book a Private Tutoring Session",
    img: PrivateTutor,
    info: [
      "We offer home and online lessons to children aged 3 - 7 years old (Early Years and Key stage 1) We have a number of expert tutors who will deliver age appropriate lessons to meet specific needs of individual learners. Tutoring days and time are scheduled as required by parents.",
    ],
    buttonText: "Register",
    buttonLink: whatsappLink,
    tag: "Tutoring",
  },
];
