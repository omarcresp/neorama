import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function WeAre() {
  const words = ["Creatividad", "Estrategia", "Innovación", "Neorama"]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000) // Change word every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid w-fit text-center mx-auto items-center justify-center gap-24 grid-flow-row md:grid-flow-col text-5xl font-bold mt-20">
      <span className="text-white w-48 mx-auto">Somos</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-[#fa69ff] w-80"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
