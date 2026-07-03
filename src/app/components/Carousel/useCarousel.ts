import { useState, useEffect } from "react";

export function useCarousel(length: number) {
    const [current, setCurrent] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    const prev = () => setCurrent((c) => (c === 0 ? length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === length - 1 ? 0 : c + 1));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((c) => (c === length - 1 ? 0 : c + 1));
        }, 8000);
        return () => clearInterval(interval);
    }, [length]);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX === null) return;
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
        setTouchStartX(null);
    };

    return { current, setCurrent, prev, next, handleTouchStart, handleTouchEnd };
}