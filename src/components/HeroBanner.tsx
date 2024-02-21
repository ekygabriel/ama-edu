import Image, { StaticImageData } from "next/image";

interface IProps {
  className?: string;
  imageUrl: string | StaticImageData;
  title?: string;
  bannerHeightStyle?: object;
  color?: "white" | "black";
  rider?: string;
}

const HeroBanner: React.FC<IProps> = ({
  className,
  imageUrl,
  title,
  bannerHeightStyle,
  color,
  rider,
}) => {
  const style = !!rider
    ? {}
    : {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        lineHeight: "60px",
        color: color || "white",
      };
  return (
    <header className={`relative w-4/10 xl:w-3/10 ${className || ""}`}>
      <figure
        className="relative w-full"
        style={bannerHeightStyle || { height: "50vh" }}
      >
        <Image
          src={imageUrl}
          alt={title || "Banner"}
          fill
          sizes="500vw"
          priority
          className="absolute"
          style={{ objectFit: "cover" }}
        />
      </figure>
      {title && (
        <div className="absolute text-center md:min-w-[700px]" style={style}>
          <h2 className={`px-2 text-4xl md:text-5xl font-bold`}>{title}</h2>
          {rider && <p className="text-2xl">{rider}</p>}
        </div>
      )}
    </header>
  );
};

export default HeroBanner;
