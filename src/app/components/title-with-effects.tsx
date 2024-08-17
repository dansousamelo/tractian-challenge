"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLetter from "./animated-letter";

export default function TitleWithEffects() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [pageTurn, setPageTurn] = useState(false);
  const router = useRouter();

  const challengeText = [
    { letter: "T", targetPosition: "30%", delay: 0.3 },
    { letter: "R", targetPosition: "32%", delay: 0.45 },
    { letter: "A", targetPosition: "34%", delay: 0.6 },
    { letter: "C", targetPosition: "36%", delay: 0.75 },
    { letter: "T", targetPosition: "38%", delay: 0.9 },
    { letter: "I", targetPosition: "40%", delay: 1.05 },
    { letter: "A", targetPosition: "42%", delay: 1.2 },
    { letter: "N", targetPosition: "44%", delay: 1.35 },
    { letter: "-", targetPosition: "46%", delay: 1.5 },
    { letter: "C", targetPosition: "48%", delay: 1.65 },
    { letter: "H", targetPosition: "50%", delay: 1.8 },
    { letter: "A", targetPosition: "52%", delay: 1.95 },
    { letter: "L", targetPosition: "54%", delay: 2.1 },
    { letter: "L", targetPosition: "56%", delay: 2.25 },
    { letter: "E", targetPosition: "58%", delay: 2.4 },
    { letter: "N", targetPosition: "60%", delay: 2.55 },
    { letter: "G", targetPosition: "62%", delay: 2.7 },
    { letter: "E", targetPosition: "64%", delay: 2.85 },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "1rem";

    const timer = setTimeout(() => {
      setPageTurn(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (animationComplete) {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
  }, [animationComplete]);

  useEffect(() => {
    if (pageTurn) {
      const scrollTimer = setTimeout(() => {
        setAnimationComplete(true);
      }, 1500);

      return () => clearTimeout(scrollTimer);
    }
  }, [pageTurn]);

  const blueShades = ["#2188FF", "#68a3e6", "#023B78"];

  return (
    <section
      className={`flex overflow-x-hidden flex-col h-screen items-center justify-center py-20 relative ${
        !animationComplete
          ? "fixed inset-0 overflow-hidden w-full h-screen"
          : ""
      }`}
    >
      {!animationComplete && (
        <div className="fixed inset-0 bg-transparent z-50 pointer-events-none"></div>
      )}
      <motion.div
        className="flex"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
      >
        {challengeText.map((item, index) => (
          <AnimatedLetter
            key={index}
            letter={item.letter}
            delay={item.delay}
            targetPosition={item.targetPosition}
          />
        ))}
      </motion.div>

      <motion.h1
        className="text-5xl font-fascinate font-bold mt-10"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 3 }}
      >
        Daniel Veras
      </motion.h1>

      <AnimatePresence mode="wait" onExitComplete={() => setPageTurn(false)}>
        {pageTurn &&
          animationComplete &&
          blueShades.map((color, index) => (
            <motion.div
              key={index}
              className="fixed inset-0 z-40"
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1, backgroundColor: color }}
              exit={{ scaleY: 0, originY: 0, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              onAnimationComplete={() => {
                if (index === blueShades.length - 1) {
                  setPageTurn(false);
                  router.push("/companies/662fd0ee639069143a8fc387");
                }
              }}
            />
          ))}
      </AnimatePresence>
    </section>
  );
}
