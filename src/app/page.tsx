import Image from "next/image";
import React from "react";
import webKeyLogo from "./assets/webkey-logo-lg.png";
import image01 from "./assets/main-banner.png";
import Divider from "./components/Divider";
import Modal from "./components/Modal";
import WhyUsSection from "./sections/WhyUsSection";
import CtaButton from "./components/CtaButton";
import ScrollCallSection from "./sections/ScrollCallSection";
import FaqSection from "./sections/FaqSection";

export default function Home() {
  
  return (
    <main className="w-full h-full flex flex-col items-center bg-main-pattern">
      <Modal />
      <div className="bg-dark w-full h-fit flex justify-center">
        <Image className="w-[30%] my-2" src={webKeyLogo} alt="WebKey - Agência de Sites Profissionais" />
      </div>
      <Divider />
      <Image className=" my-2" src={image01} alt="Criação de sites profissionais em Belo Horizonte - WebKey" />
      <ScrollCallSection />
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
