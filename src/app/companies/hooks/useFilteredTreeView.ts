import { useState, useMemo } from "react";
import { Location, Asset } from "@/app/types";

export function useFilteredTreeView(locations: Location[], assets: Asset[]) {
  const [textFilter, setTextFilter] = useState("");
  const [filterByEnergy, setFilterByEnergy] = useState(false);
  const [filterByAlert, setFilterByAlert] = useState(false);

  const formattedData = useMemo(() => {
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
  }, [textFilter, filterByEnergy, filterByAlert, assets, locations]);

  return {
    formattedData,
    textFilter: setTextFilter,
    filterByEnergy: setFilterByEnergy,
    filterByAlert: setFilterByAlert,
  };
}
