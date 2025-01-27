import Button from "@/components/form/Button";

const data = [
  {
    lead: "Take A Video Course",
    paragraph:
      "You can access series of courses to improve your knowledge of the Early years pedagody and offer appropriate support to young children, either as a teacher, childminder, parent or school leader. The courses are tailored to meet specific needs and can be taken at your own pace.",
    linkText: "Access Courses",
    linkUrl: "/learn-with-ama/courses",
  },
];
const CPD = () => {
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

export default CPD;
