import { create } from "zustand";
import { Asset } from "@/app/types";

interface AssetStore {
  selectedAsset: Asset;
  setSelectedAsset: (asset: Asset) => void;
}

export const useAssetStore = create<AssetStore>((set) => {
  return {
    selectedAsset: {} as Asset,
    setSelectedAsset: (asset: Asset) => {
      set({ selectedAsset: asset });
    },
  };
});
