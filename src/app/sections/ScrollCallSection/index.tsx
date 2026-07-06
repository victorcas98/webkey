'use client'

import React from "react";
import iconScroll from "../../assets/icon-scroll.svg"
import ServicesSection from "./../ServicesSection";
import Image from "next/image";

export default function ScrollCallSection() {
    const texto = "Olá! eu quero fazer um orçamento de website.";
    const scrollRef = React.useRef<HTMLDivElement | null>(null);

    return (
        < >
            <button
                className="w-full bg-web-blue p-2 text-gray-200 text-xl flex flex-row items-center gap-2 justify-center"
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
        </>
    )
}