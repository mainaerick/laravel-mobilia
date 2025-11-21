"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"



interface RoomInspirationHeroProps {
    slides: []
}

export default function RoomInspirationHero({ slides }: RoomInspirationHeroProps) {
    const [activeIndex, setActiveIndex] = useState(0)

    const goToPrevious = () => {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const goToSlide = (index: number) => {
        setActiveIndex(index)
    }

    const nextSlide = slides[(activeIndex + 1) % slides.length]

    return (
        <div className="flex items-stretch">
            {/* RIGHT SIDE - Carousel */}
            <div className="hidden lg:flex w-full items-center justify-center relative">
                <div className="w-full max-w-md">
                    {/* Main Carousel */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="relative rounded-2xl overflow-hidden shadow-lg"
                            >
                                <img
                                    src={slides[activeIndex] || "/placeholder.svg"}
                                    className="w-full aspect-square object-cover"
                                 alt={""}/>

                                {/* Next Slide Peek */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                    className="absolute top-6 right-0 w-32 h-40 rounded-xl overflow-hidden shadow-md transform translate-x-16"
                                >
                                    <img
                                        src={nextSlide || "/placeholder.svg"}
                                        alt="Next slide preview"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors z-10"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={goToNext}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors z-10"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === activeIndex ? "bg-[#C8A045] w-8 h-2" : "bg-slate-300 w-2 h-2 hover:bg-slate-400"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* MOBILE VERSION - Stacked Layout */}
            <div className="lg:hidden w-full">
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={slides[activeIndex] || "/placeholder.svg"}
                                className="w-full aspect-video object-cover"
                             alt={""}/>

                        </motion.div>
                    </AnimatePresence>

                    {/* Mobile Navigation */}
                    <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 pointer-events-none">
                        <button
                            onClick={goToPrevious}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700 pointer-events-auto hover:bg-slate-50"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={goToNext}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700 pointer-events-auto hover:bg-slate-50"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Mobile Pagination */}
                <div className="flex justify-center gap-2 mt-6 px-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === activeIndex ? "bg-[#C8A045] w-8 h-2" : "bg-slate-300 w-2 h-2 hover:bg-slate-400"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
