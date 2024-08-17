import { create } from "zustand";
import { z } from "zod";
import { useCompanyStore } from "./useCompanyStore";
import { Asset, Location } from "@/app/types";
import { useAssetStore } from "./useAssetStore";

const textFilterSchema = z
  .string()
  .min(3, "O texto de pesquisa deve conter ao menos 1 caractere")
  .max(50, "O texto de pesquisa não pode ter mais que 50 caracteres");

type FilterStore = {
  textFilter: string;
  filterByEnergy: boolean;
  filterByAlert: boolean;
  searchInput: string;
  energyChecked: boolean;
  alertChecked: boolean;
  setTextFilter: (filter: string) => void;
  setFilterByEnergy: (filter: boolean) => void;
  setFilterByAlert: (filter: boolean) => void;
  setSearchInput: (input: string) => void;
  handleEnergyChange: () => void;
  handleAlertChange: () => void;
  handleSearchSubmit: (input: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  clearSearch: () => void;
  resetFilterOptions: () => void;
  formattedData: () => {
    assetsFormatted: Asset[];
    locationFormatted: Location[];
  };
};

export const useFilterStore = create<FilterStore>((set, get) => ({
  textFilter: "",
  filterByEnergy: false,
  filterByAlert: false,
  searchInput: "",
  energyChecked: false,
  alertChecked: false,

  setTextFilter: (filter) => set({ textFilter: filter }),
  setFilterByEnergy: (filter) => set({ filterByEnergy: filter }),
  setFilterByAlert: (filter) => set({ filterByAlert: filter }),
  setSearchInput: (input) => set({ searchInput: input }),

  handleEnergyChange: () => {
    const { energyChecked, setFilterByEnergy } = get();
    const newValue = !energyChecked;
    set({ energyChecked: newValue });
    setFilterByEnergy(newValue);
  },

  handleAlertChange: () => {
    const { alertChecked, setFilterByAlert } = get();
    const newValue = !alertChecked;
    set({ alertChecked: newValue });
    setFilterByAlert(newValue);
  },

  handleSearchSubmit: (input: string) => {
    if (!input.trim()) {
      get().clearSearch();
      return;
    }
    const result = textFilterSchema.safeParse(input);
    if (result.success) {
      get().setTextFilter(input);
    }
  },

  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      get().handleSearchSubmit(get().searchInput);
    }
  },

  clearSearch: () => {
    set({ searchInput: "" });
    set({ textFilter: "" });
    get().setTextFilter("");
    get().setSearchInput("");
  },

  resetFilterOptions: () => {
    const clearSelectedAsset = useAssetStore.getState().clearSelectedAsset;

    set({
      filterByEnergy: false,
      filterByAlert: false,
      energyChecked: false,
      alertChecked: false,
      searchInput: "",
      textFilter: "",
    });

    get().setTextFilter("");
    get().setSearchInput("");
    clearSelectedAsset();
  },

  formattedData: () => {
    const assets = useCompanyStore.getState().assets;
    const locations = useCompanyStore.getState().locations;
    const { textFilter, filterByEnergy, filterByAlert } = get();

    if (!textFilter && !filterByEnergy && !filterByAlert) {
      return {
        assetsFormatted: assets,
        locationFormatted: locations,
      };
    }

    const filteredAssets = assets.filter((asset) => {
      const matchesTextFilter = textFilter
        ? asset.name.toLowerCase().includes(textFilter.toLowerCase())
        : true;
      const matchesEnergyFilter = filterByEnergy
        ? asset.sensorType === "energy"
        : true;
      const matchesAlertFilter = filterByAlert
        ? asset.status === "alert"
        : true;

      return matchesTextFilter && matchesEnergyFilter && matchesAlertFilter;
    });

    const assetIdsToKeep = new Set<string>();

    filteredAssets.forEach((asset) => {
      let currentAsset: Asset | null = asset;
      while (currentAsset) {
        assetIdsToKeep.add(currentAsset.id);
        currentAsset =
          assets.find((parent) => parent.id === currentAsset?.parentId) || null;
      }
    });

    let assetsFormatted = assets.filter((asset) =>
      assetIdsToKeep.has(asset.id)
    );

    if (textFilter) {
      const matchingLocations = locations.filter((location) =>
        location.name.toLowerCase().includes(textFilter.toLowerCase())
      );

      if (assetsFormatted.length === 0 || matchingLocations.length > 0) {
        const locationIdsToKeep = new Set<string>();

        matchingLocations.forEach((location) => {
          locationIdsToKeep.add(location.id);
          let currentLocation: Location | null = location;
          while (currentLocation) {
            locationIdsToKeep.add(currentLocation.id);
            currentLocation =
              locations.find(
                (parentLocation) =>
                  parentLocation.id === currentLocation?.parentId
              ) || null;
          }
        });

        assetsFormatted = assets.filter(
          (asset) =>
            locationIdsToKeep.has(asset.locationId || "") ||
            assetIdsToKeep.has(asset.id)
        );

        const additionalLocations = locations.filter((location) =>
          locationIdsToKeep.has(location.id)
        );

        return {
          assetsFormatted,
          locationFormatted: additionalLocations,
        };
      }
    }

    const locationIdsToKeep = new Set<string>();

    assetsFormatted.forEach((asset) => {
      if (asset.locationId) {
        locationIdsToKeep.add(asset.locationId);
      }
    });

    locations.forEach((location) => {
      if (locationIdsToKeep.has(location.id)) {
        let currentLocation: Location | null = location;
        while (currentLocation) {
          locationIdsToKeep.add(currentLocation.id);
          currentLocation =
            locations.find(
              (parentLocation) =>
                parentLocation.id === currentLocation?.parentId
            ) || null;
        }
      }
    });

    const locationFormatted = locations.filter((location) =>
      locationIdsToKeep.has(location.id)
    );

    return {
      assetsFormatted,
      locationFormatted,
    };
  },
}));
