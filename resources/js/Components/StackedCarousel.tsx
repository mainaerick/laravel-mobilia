"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface StackedCarouselProps {
    items: ReactNode[]
    height?: string
}

export default function StackedCarousel({ items, height = "300px" }: StackedCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    }

    // Get indices for cards to display
    const getCardIndices = () => {
        const indices = []
        for (let i = 0; i < 3; i++) {
            indices.push((currentIndex + i) % items.length)
        }
        return indices
    }

    const cardIndices = getCardIndices()

    return (
        <div className="flex flex-col items-center justify-center w-full gap-8">
            {/* Carousel Container */}
            <div className="relative w-full max-w-sm mx-auto" style={{ height }}>
                {/* Cards Stack */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                        {cardIndices.map((index, position) => (
                            <motion.div
                                key={`card-${index}`}
                                className="absolute w-full h-full"
                                style={{ height }}
                                initial={{
                                    scale: 0.85 + position * 0.05,
                                    opacity: 1 - position * 0.15,
                                    y: position * 20,
                                    zIndex: 10 - position,
                                }}
                                animate={{
                                    scale: 0.85 + position * 0.05,
                                    opacity: 1 - position * 0.15,
                                    y: position * 20,
                                    zIndex: 10 - position,
                                }}
                                exit={{
                                    scale: 0.8,
                                    opacity: 0,
                                    y: -50,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.32, 0.72, 0, 1],
                                }}
                            >
                                <div
                                    className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 flex items-center justify-center overflow-hidden"
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    {items[index]}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4">
                <motion.button
                    onClick={handlePrev}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </motion.button>

                <div className="flex gap-2">
                    {items.map((_, index) => (
                        <motion.button
                            key={`indicator-${index}`}
                            onClick={() => setCurrentIndex(index)}
                            className={`rounded-full transition-all ${
                                index === currentIndex
                                    ? "bg-slate-900 dark:bg-slate-100 w-8 h-2"
                                    : "bg-slate-300 dark:bg-slate-600 w-2 h-2 hover:bg-slate-400 dark:hover:bg-slate-500"
                            }`}
                            whileHover={{ scale: 1.2 }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </motion.button>
            </div>
        </div>
    )
}
