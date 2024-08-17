import Image from "next/image";
import MotoAnimation from "./moto-animation";
import { useAssetStore } from "../stores/useAssetStore";

export const DetailPanel = () => {
  const { selectedAsset } = useAssetStore();

  if (!selectedAsset) {
    return (
      <div className="flex flex-1 items-start justify-center h-full p-4 border border-gray-300 rounded  bg-white">
        <MotoAnimation />
      </div>
    );
  }

  return (
    <div className="p-4 border border-gray-300 rounded  bg-white h-full">
      <h2 className="text-2xl font-bold flex items-center">
        {selectedAsset.name}
        {selectedAsset.status === "operating" && (
          <Image
            src="/assets/icons/bolt-icon.svg"
            alt="Close icon"
            width={15}
            height={18}
            className="ml-2"
          />
        )}
        {selectedAsset.status === "alert" && (
          <span className="ml-2 text-red-500">●</span>
        )}
      </h2>

      <div className="mt-4 flex">
        <Image
          src="/assets/images/gereric.webp"
          alt={selectedAsset.name}
          width={336}
          height={226}
          className="rounded-lg"
        />
        <div className="ml-6">
          <div className="pt-6">
            <p className="text-gray-600 font-semibold mb-2">
              Tipo de Equipamento
            </p>
            <div className="flex items-center">
              <p className="text-gray-400">Motor Elétrico (Trifásico)</p>{" "}
            </div>
          </div>
          <div className="border-b border-gray-300 w-[300%] mt-6" />
          <div className="pt-6">
            <p className="text-gray-600 font-semibold mb-2">Responsáveis</p>
            <div className="flex items-center">
              <Badge
                letter={selectedAsset.sensorType == "energy" ? "E" : "M"}
              />
              <p className="text-gray-400">
                {selectedAsset.sensorType == "energy" ? "Elétrica" : "Mecânica"}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-300">
        <div className="pt-6">
          <p className="text-gray-600 font-semibold mb-2">Sensor</p>

          <div className="flex items-center">
            <Image
              src="/assets/icons/sensor-icon.svg"
              alt="Sensor icon"
              width={20}
              height={20}
              className="mr-1"
            />
            <p className="text-gray-400">{selectedAsset.sensorId || "N/A"}</p>
          </div>
        </div>
        <div className="pt-6">
          <p className="text-gray-600 font-semibold mb-2">Receptor</p>
          <div className="flex items-center">
            <Image
              src="/assets/icons/receptor-icon.svg"
              alt="Receptor icon"
              width={20}
              height={20}
              className="mr-1"
            />
            <p className="text-gray-400">EUH4R27</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

const Badge = ({ letter }: { letter: string }) => (
  <div className="flex justify-center items-center bg-blue-tractian text-white font-bold w-8 h-8 rounded-full mr-2">
    {letter}
  </div>
);
