import { motion } from "framer-motion";

interface AnimatedLetterProps {
  letter: string;
  delay: number;
  targetPosition: string;
}

const AnimatedLetter = ({
  letter,
  delay,
  targetPosition,
}: AnimatedLetterProps) => {
  const desktopAnimation = {
    rotate: [0, -5, 5, -3, 3, 0],
    x: [0, -5, 5, -3, 3, 0],
    y: [0, -2, 2, -1, 1, 0],
    backgroundPosition: `0% ${targetPosition}`,
    rotateX: [0, 5, -5, 0],
    rotateY: [0, 5, -5, 0],
    backgroundSize: "100% 120%",
    color: ["#FCFCFC", "#2188FF"],
    WebkitTextStrokeColor: ["#000", "#17192D", "#000"],
  };

  return (
    <motion.span
      className="relative inline-block text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[3rem] xl:text-[7rem] 2xl:text-[8rem] font-fascinate fascinate-inline cursor-pointer"
      style={{
        cursor: "default",
        display: "inline-block",
        background: "#FCFCFC",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextStroke: "2px #17192D",
        backgroundSize: "100% 200%",
        backgroundPosition: "0% 100%",
      }}
      animate={desktopAnimation}
      transition={{
        duration: 3,
        ease: "easeInOut",
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {letter}
    </motion.span>
  );
};

export default AnimatedLetter;
