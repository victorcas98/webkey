"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import iconScroll from "@/app/assets/icon-scroll.svg";
import { useCarousel } from "./useCarousel";

const Carousel: React.FC<{
    items?: Array<React.ReactNode>;
}> = ({ items = [] }) => {
    const { current, setCurrent, prev, next, handleTouchStart, handleTouchEnd } = useCarousel(items.length);

    return (
        <div className="flex flex-col items-center w-[95%]">
            <div
                className="relative w-full flex items-center justify-center"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <button
                    onClick={prev}
                    aria-label="Previous"
                    className="absolute left-2 z-10 hidden md:flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <Image className="h-[20px] rotate-90" src={iconScroll} alt="logo" />
                </button>

                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {items.map((item, index) => (
                            <div key={index} className="min-w-full flex justify-center">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={next}
                    aria-label="Next"
                    className="absolute right-2 z-10 hidden md:flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <Image className="h-[20px] -rotate-90" src={iconScroll} alt="logo" />
                </button>
            </div>

            <div className="flex gap-2 mt-4">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        aria-label={`Ir para slide ${index + 1}`}
                        className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-web-green scale-125" : "bg-light opacity-40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;