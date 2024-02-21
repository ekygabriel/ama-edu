import Image, { StaticImageData } from "next/image";

interface ScrollGalleryProps {
  data: GalleryProps[];
  slim?: boolean;
}

interface GalleryProps {
  lead: string;
  text: string;
  img: StaticImageData | string;
}
const ScrollGallery: React.FC<ScrollGalleryProps> = ({ data, slim }) => {
  return (
    <ul className="mt-20 px-6 flex gap-6 overflow-x-auto whitespace-nowrap w-full max-w-max pb-8">
      {data.map((item) => (
        <li
          key={item.lead}
          className={`${
            slim ? "w-[250px]" : "w-[300px]"
          } shrink-0 max-w-max whitespace-normal rounded-2xl overflow-hidden bg-white`}
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
    </ul>
  );
};

export default ScrollGallery;
