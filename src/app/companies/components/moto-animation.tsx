import React from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import animationData from "../../../../public/assets/animations/moto-animation.json";

interface MotoAnimationProps {
  width?: number;
  height?: number;
}

const MotoAnimation: React.FC<MotoAnimationProps> = ({
  width = 300,
  height = 300,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div className="filter invert-200 brightness-100 contrast-200 saturate-0">
        <Lottie options={defaultOptions} height={height} width={width} />
      </div>

      <h1 className="text-2xl font-semibold">Nada foi selecionado</h1>

      <p className="text-lg text-center">
        Por favor, selecione um ativo/componente para visualizar os detalhes.
      </p>
    </div>
  );
};

export default MotoAnimation;
