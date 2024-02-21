import {
  Parents,
  Consultants,
  EYFS_Leaders,
  EYFS_Practitioners,
  Nannies,
  Schools,
} from "@/assets";

import ScrollGallery from "./ScrollGallery";

const data = [
  {
    img: Parents,
    lead: "Parents",
    text: "Parents of children in the Early Years and/or Key Stage 1 can sign up for any of our courses for parents or book a consultation to seek professional advice regarding the learning and development of their early learners. They  can also access our learning tips and activities shared via blog posts or on our YouTube Channel.",
  },
  {
    img: EYFS_Practitioners,
    lead: "Early Years Practitioners",
    text: "Teachers, Teaching Assistant, support teachers or any one who works with children can sign up for any of our continuous professional development courses or book a mentorship session where they will be appropriately supported and equipped to become successful early years practitioners. They can also learn from our helpful tips, activities and ideas shared via blogposts.",
  },
  {
    img: EYFS_Leaders,
    lead: "Early Years Leaders",
    text: "School leaders, administrators, Curriculum leads or aspiring leaders who wish to improve their knowledge of the EYFS framework/Early childhood practices, update their knowledge and skills, and learn more about ways to offer support to their staff can sign up for our  Leadership courses. They can also access our blog posts, book us for in-house or virtual trainings for their teachers or for parents seminar in their schools.",
  },
  {
    img: Nannies,
    lead: "Childminders / Nannies",
    text: "Childminders and nannies can also sign up for one-to-one or group training/consultation sessions to equip themselves with needed skills for supporting early learning. They can also join our Mentorship Camp, register for trainings, sign up for required courses and access useful blog posts.",
  },
  {
    img: Consultants,
    lead: "Consultants",
    text: "Collaborations and partnership with Early Years Consultants or teacher trainers in different areas are also welcome for in-house or virtual trainings for schools, teachers, parent workshops or consultations. We are open for partnership all year round.",
  },
  {
    img: Schools,
    lead: "Schools",
    text: "We are available for Consultations and in house trainings in schools . Our trainings are designed to equip teachers in delivering quality and engaging lessons within the school and classroom environment. We also offer Curriculum planning, School improvement plan, Staff recruitment and a list of other consultation services for nurseries, daycare or any early years setting.",
  },
];

const TargetAudience = () => {
  return (
    <div className="py-20">
      <h2 className="text-center px-4">Target Audience</h2>
      <ScrollGallery data={data} />
      {/* <ul className="mt-20 px-6 flex gap-6 overflow-x-auto whitespace-nowrap w-full max-w-max pb-4">
        {data.map((item) => (
          <li
            key={item.lead}
            className="w-[300px] shrink-0 max-w-max whitespace-normal rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 0 30px rgba(0,0,0,.15)" }}
          >
            <Image
              src={item.img}
              alt={`${item.lead}'s image`}
              width={700}
              height={400}
              style={{ width: "100%", height: "160px" }}
            />
            <div className="px-4 py-2">
              <h4 className="text-xl mt-3">{item.lead}</h4>
              <p className="text-sm">{item.text}</p>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default TargetAudience;
