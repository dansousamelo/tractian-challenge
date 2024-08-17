import { create } from "zustand";
import { Asset } from "@/app/types";

interface AssetStore {
  selectedAsset: Asset;
  setSelectedAsset: (asset: Asset) => void;
  clearSelectedAsset: () => void;
}

export const useAssetStore = create<AssetStore>((set) => ({
  selectedAsset: {} as Asset,
  setSelectedAsset: (asset: Asset) => {
    set({ selectedAsset: asset });
  },
  clearSelectedAsset: () => {
    set({ selectedAsset: {} as Asset });
  },
}));
