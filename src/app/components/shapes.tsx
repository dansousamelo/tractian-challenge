"use client";

import { motion } from "framer-motion";

export default function Shapes() {
  return (
    <div className="flex space-x-4 items-center justify-center absolute top-1/3 md:top-[110px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className="relative w-10 h-10"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, rotate: 360 }}
        transition={{ type: "spring", duration: 2, delay: 0.2 }}
      >
        <div className="w-10 h-10 rounded-full bg-[#FCFCFC] border border-black"></div>
        <div className="absolute top-0 left-0 w-5 h-10 bg-black rounded-l-full"></div>
      </motion.div>

      <motion.div
        className="w-10 h-10 bg-blue-dark-tractian"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, scale: [1, 1.1, 1] }}
        transition={{
          type: "spring",
          duration: 2,
          delay: 0.4,
          scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      ></motion.div>

      <motion.div
        className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[34px] border-t-black"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, scale: [1, 1.1, 1] }}
        transition={{
          type: "spring",
          duration: 2,
          delay: 0.6,
          scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      ></motion.div>

      <motion.div
        className="w-10 h-10 bg-blue-dark-tractian"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, scale: [1, 1.1, 1] }}
        transition={{
          type: "spring",
          duration: 2,
          delay: 0.8,
          scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      ></motion.div>

      <motion.div
        className="relative w-10 h-10"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, rotate: 360 }}
        transition={{ type: "spring", duration: 2, delay: 1 }}
      >
        <div className="w-10 h-10 rounded-full bg-[#FCFCFC] border border-black"></div>
        <div className="absolute top-0 left-0 w-5 h-10 bg-black rounded-l-full"></div>
      </motion.div>
    </div>
  );
}
