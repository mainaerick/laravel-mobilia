"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImagePreviewCarouselProps {
    images: string[]
    height?: string
}

export default function ImagePreviewCarousel({ images, height = "500px" }: ImagePreviewCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    const nextIndex = (currentIndex + 1) % images.length

    return (
        <div className="w-full bg-[#F6F3EF]">
            {/* Main carousel container */}
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ height }}>
                {/* Active slide */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={`main-${currentIndex}`}
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Preview slide container - positioned absolutely on the right */}
                <div className="absolute inset-0 flex items-center justify-end pr-4 md:pr-6 lg:pr-8 pointer-events-none">
                    <div className="relative" style={{ height: "80%" }}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={`preview-${nextIndex}`}
                                src={images[nextIndex]}
                                alt={`Preview slide`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6 }}
                                className="h-full rounded-lg shadow-md object-cover"
                                style={{ width: "auto", maxWidth: "40%" }}
                            />
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Navigation and pagination - below the carousel */}
            <div className="flex items-center justify-center gap-6 mt-8">
                {/* Previous button */}
                <button
                    onClick={goToPrevious}
                    className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </button>

                {/* Pagination dots */}
                <div className="flex gap-2">
                    {images.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="rounded-full transition-colors"
                            style={{
                                width: index === currentIndex ? 32 : 8,
                                height: 8,
                                backgroundColor: index === currentIndex ? "#2C2C2C" : "#D4D4D4",
                            }}
                            whileHover={{ scale: 1.1 }}
                            animate={{
                                width: index === currentIndex ? 32 : 8,
                            }}
                            transition={{ duration: 0.3 }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Next button */}
                <button
                    onClick={goToNext}
                    className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </button>
            </div>
        </div>
    )
}
