"use client";

import { motion } from "framer-motion";

const BlueCircles = () => {
  const circles = [
    { size: "90vw", opacity: 0.2, maxSize: "1300px" },
    { size: "80vw", opacity: 0.3, maxSize: "1200px" },
    { size: "70vw", opacity: 0.4, maxSize: "1100px" },
    { size: "60vw", opacity: 0.5, maxSize: "1000px" },
    { size: "50vw", opacity: 0.6, maxSize: "900px" },
    { size: "40vw", opacity: 0.7, maxSize: "800px" },
    { size: "30vw", opacity: 0.8, maxSize: "700px" },
    { size: "20vw", opacity: 0.9, maxSize: "600px" },
    { size: "10vw", opacity: 1, maxSize: "500px" },
  ];

  return (
    <div className="absolute bottom-0 md:bottom-[-10rem] left-[50%] transform -translate-x-1/2 flex items-center justify-center z-0">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-tractian"
          style={{
            width: circle.size,
            height: circle.size,
            maxWidth: circle.maxSize,
            maxHeight: circle.maxSize,
            opacity: circle.opacity,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: circle.opacity }}
          transition={{
            duration: 1.5,
            delay: index * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BlueCircles;
