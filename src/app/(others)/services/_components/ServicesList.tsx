import Button from "@/components/form/Button";

const data = [
  {
    lead: "Training and Consultation",
    paragraph:
      "We offer a wide range of teacher training courses, curriculum planning and implementation, parent seminar and consultation services to schools, this can be done in-house or virtually. We also offer 1 to 1 personalised  support for parents and offer individual Continuous Professional Development (CPD) modules for parents and educators who are interested in learning at their own pace.",
    linkText: "Learn More",
    linkUrl: "/services/training-and-consultation",
  },
  {
    lead: "Elocution and Diction Services for Schools",
    paragraph:
      "We provide tailored elocution and diction services to help schools enhance communication and promote excellence in speech. These services include training educators to deliver clear and professional speech, developing and supporting the implementation of structured diction curricula, and offering personalised coaching to refine teachers' pronunciation, intonation, and articulation. Our goal is to empower teachers and create a lasting impact on communication standards within the classroom.",
    linkText: "Get Diction Service Proposal",
    linkUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdv4wnWirrPM80YAFZ9EGrfOUEP99LPHX_RmjkAtgQjcrIBLg/viewform",
  },
  {
    lead: "Mentorship for Teachers",
    paragraph:
      "We offer 1 to 1  and group mentorship for Early Years and Keystage 1 teachers who require guidance and direction in becoming exceptional practitioners. This mentorship is suited to the needs of the individual and scheduled to meet their timing. Teachers can also join the Early Years Learning Mentorship Camp  which is a free Whatsapp community for new, intending and current early years or Key stage one teachers who desire to equip themselves with needed skills and knowledge required to stand out.",
    linkText: "Learn More",
    linkUrl: "/services/mentorship",
  },
  {
    lead: "Video Lessons and Educational Shows on Youtube",
    paragraph:
      "Our YouTube Channel offers a variety of engaging lessons, meeting the required goals in early childhood education through lessons on phonics, numbers, shapes, science, language development etc. which can be used by parents, teachers or children during lessons. We also have an educational show where different educators are hosted, discussing on topical issues relating to Early Childhood Education.",
    linkText: "Watch YouTube Videos",
    linkUrl: "https://youtube.com/@earlyyearslearningtv",
  },
  {
    lead: "Voice Over and Event Host",
    paragraph:
      "We offer professional voiceover services for brands, including schools, specialising in commercials, e-learning, audiobooks, narration, and profile reading. With a clear and engaging voice, AMA brings scripts to life, creating lasting impressions for your audience. Additionally, I serve as a compere for educational shows, webinars, and conferences, ensuring seamless hosting and a captivating experience for your events.",
    linkText: "Book Voiceover Service",
    linkUrl: "https://wa.link/7sjt7y",
  },
];
const ServicesList = () => {
  return (
    <ul className="flex flex-col gap-20 my-20 max-w-4xl mx-auto px-4 text-center">
      {data.map((item) => (
        <li key={item.lead}>
          <h3 className="mb-6">{item.lead}</h3>
          <p className="mb-10">{item.paragraph}</p>
          <Button
            text={item.linkText}
            href={item.linkUrl}
            target={item.linkUrl.includes("https") ? "_blank" : ""}
          />
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
