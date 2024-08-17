import { useMemo, useState } from "react";
import { Location, Asset } from "@/app/types";

export const useExpandedNodes = (
  textFilter: string,
  filterByEnergy: boolean,
  filterByAlert: boolean,
  locations: Location[],
  assets: Asset[]
) => {
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>(
    {}
  );

  const allExpandedNodes = useMemo(() => {
    if (textFilter || filterByEnergy || filterByAlert) {
      const expandedState: Record<string, boolean> = {};
      locations.forEach((location) => {
        expandedState[location.id] = true;
      });
      assets.forEach((asset) => {
        expandedState[asset.id] = true;
      });
      return expandedState;
    }
    return expandedNodes;
  }, [
    textFilter,
    filterByEnergy,
    filterByAlert,
    locations,
    assets,
    expandedNodes,
  ]);

  const toggleNode = (id: string) => {
    setExpandedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return { allExpandedNodes, toggleNode };
};
