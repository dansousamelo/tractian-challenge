import BlueCircles from "./components/blue-circles";
import Shapes from "./components/shapes";
import TitleWithEffects from "./components/title-with-effects";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full bg-[#FCFCFC]">
      <Shapes />
      <BlueCircles />
      <TitleWithEffects />
    </main>
  );
}
