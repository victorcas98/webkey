'use client'

import Image from "next/image";
import React from "react";
import webKeyLogo from "./assets/webkey-logo-lg.png";
import image01 from "./assets/main-banner.png";
import iconScroll from "./assets/icon-scroll.svg";
import Divider from "./components/Divider";
import Modal from "./components/Modal";
import ServicesSection from "./sections/ServicesSection";
import WhyUsSection from "./sections/WhyUsSection";
import CtaButton from "./components/CtaButton";

export default function Home() {
  const texto = "Olá! eu quero fazer um orçamento de website.";
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <main className="w-full h-full flex flex-col items-center bg-main-pattern">
      <Modal />
      <div className="bg-dark w-full h-fit flex justify-center">
        <Image className="w-[30%] my-2" src={webKeyLogo} alt="logo" />
      </div>
      <Divider />
      <Image className=" my-2" src={image01} alt="main" />
      <button
        className="w-full bg-[#003D98] p-2 text-gray-200 text-xl flex flex-row items-center gap-2 justify-center"
        onClick={() => {
          scrollRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Dá uma olhada!
        <Image className="h-[15px] animate-bounce" src={iconScroll} alt="logo" />
      </button>
      <div ref={scrollRef} className="flex flex-col w-full my-10 items-center justify-center" >
        <ServicesSection />
      </div>
      <CtaButton variant="rounded">
        ENTRE EM CONTATO! FAÇA UM ORÇAMENTO GRATUITO!
      </CtaButton>
      <WhyUsSection />
      <CtaButton variant="square">
        QUERO FAZER MEU ORÇAMENTO GRATUITO AGORA!
      </CtaButton>
    </main>
  );
}
