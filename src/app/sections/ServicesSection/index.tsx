import React from "react";
import Card from "@/app/components/Card";
import Carousel from "@/app/components/Carousel";
import { packages, carouselData } from "./data";

export default function ServicesSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-[95%] lg:w-[70%] gap-10 justify-center items-center my-10">
        {packages.map((item, index) => (
        <Card key={index} title={item.title} list={item.list} onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(item.whatsappMessage)}`, "_blank")} />
      ))}
      </div>
      <Carousel
        items={[
          <Card key={0}  title={carouselData[0].title} list={carouselData[0].list} />,
          <Card key={1} title={carouselData[1].title} list={carouselData[1].list} />,
          <Card key={2} title={carouselData[2].title} list={carouselData[2].list} />,
        ]}
      />
    </>
  );
}