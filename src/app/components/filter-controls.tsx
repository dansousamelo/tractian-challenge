import { FilterControlProps } from "@/types";
import Image from "next/image";
import { useCompanyStore } from "../companies/stores/useCompanyStore";
import { useFilterStore } from "../companies/stores/useFilterStore";

export function FilterControls() {
  const unit = useCompanyStore((state) => state.unit);

  const { energyChecked, alertChecked, handleEnergyChange, handleAlertChange } =
    useFilterStore();

  return (
    <div className="flex gap-2 mb-3 items-center justify-between bg-white rounded">
      <div className="flex gap-x-2 items-center">
        <h1 className="font-semibold text-xl">Ativos</h1>
        <span className="text-sm text-gray-500">/ {unit.name} Unit</span>
      </div>

      <div className="flex gap-x-4">
        <button
          className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded border ${
            energyChecked
              ? "bg-blue-tractian text-white"
              : "bg-white border-gray-300 text-[#77818C]"
          }`}
          onClick={handleEnergyChange}
        >
          <Image
            src="/assets/icons/energy-icon.svg"
            alt="Energy Sensor"
            width={16}
            height={16}
            className={energyChecked ? "filter invert brightness-0" : ""}
          />
          Sensor de Energia
        </button>
        <button
          className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded border ${
            alertChecked
              ? "bg-blue-tractian text-white"
              : "bg-white border-gray-300 text-[#77818C]"
          }`}
          onClick={handleAlertChange}
        >
          <Image
            src="/assets/icons/alert-icon.svg"
            alt="Alert Status"
            width={16}
            height={16}
            className={alertChecked ? "filter invert brightness-0" : ""}
          />
          Crítico
        </button>
      </div>
    </div>
  );
}
