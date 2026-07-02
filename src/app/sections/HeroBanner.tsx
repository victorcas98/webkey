import Image from "next/image";
import image01 from "../assets/main-banner.png";
import iconScroll from "../assets/icon-scroll.svg";

interface HeroBannerProps {
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

export default function HeroBanner({ scrollRef }: HeroBannerProps) {
  return (
    <>
      <Image className="my-2" src={image01} alt="main" />
      <button
        className="w-full bg-[#003D98] p-2 text-gray-200 text-xl flex flex-row items-center gap-2 justify-center"
        onClick={() => scrollRef.current?.scrollIntoView({ behavior: "smooth" })}
      >
        Dá uma olhada!
        <Image className="h-[15px] animate-bounce" src={iconScroll} alt="logo" />
      </button>
    </>
  );
}