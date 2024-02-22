import ScrollGallery from "../../_components/ScrollGallery";

const TrainingGallery = ({ title, data }: { title: string; data: any[] }) => {
  return (
    <div className="bg-purple-light py-20 mt-20">
      <h2 className="text-center">{title}</h2>
      <ScrollGallery data={data} slim />
    </div>
  );
};

export default TrainingGallery;
