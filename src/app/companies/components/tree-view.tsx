"use client";

import { memo } from "react";
import { Asset } from "@/app/types";
import { useExpandedNodes } from "../hooks/useExpandedNodes";
import { useTreeRendering } from "../hooks/useTreeRendering";
import { useAssetStore } from "../stores/useAssetStore";
import { useFilterStore } from "../stores/useFilterStore";

const TreeViewComponent = () => {
  const { selectedAsset, setSelectedAsset } = useAssetStore();
  const { textFilter, filterByEnergy, filterByAlert, formattedData } =
    useFilterStore();

  const handleSelectItem = (item: Asset) => {
    setSelectedAsset(item);
  };

  const { allExpandedNodes, toggleNode } = useExpandedNodes(
    textFilter,
    filterByEnergy,
    filterByAlert,
    formattedData().locationFormatted,
    formattedData().assetsFormatted
  );

  const { renderTree } = useTreeRendering(
    formattedData().locationFormatted,
    formattedData().assetsFormatted,
    allExpandedNodes,
    toggleNode,
    handleSelectItem,
    textFilter,
    selectedAsset?.id || ""
  );

  return (
    <div className="border py-2 border-gray-300 border-t-0 rounded-b-lg h-[75vh] overflow-y-auto">
      <ul className="pl-4 border-l border-gray-300">{renderTree(null)}</ul>
    </div>
  );
};

export const TreeView = memo(TreeViewComponent);
