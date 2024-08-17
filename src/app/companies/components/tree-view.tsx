"use client";

import { memo, useEffect, useState } from "react";
import { Asset } from "@/app/types";
import { useExpandedNodes } from "../hooks/useExpandedNodes";
import { useTreeRendering } from "../hooks/useTreeRendering";
import { useAssetStore } from "../stores/useAssetStore";
import { useFilterStore } from "../stores/useFilterStore";

const TreeViewComponent = () => {
  const { selectedAsset, setSelectedAsset } = useAssetStore();
  const { textFilter, filterByEnergy, filterByAlert, formattedData } =
    useFilterStore();

  const [isRendering, setIsRendering] = useState(true);

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

  useEffect(() => {
    const renderTimeout = setTimeout(() => {
      setIsRendering(false);
    }, 0);

    return () => clearTimeout(renderTimeout);
  }, [formattedData]);

  if (isRendering) {
    return (
      <div className="flex justify-center items-center h-[75vh]">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
        <span className="ml-2 text-blue-500">Loading Tree...</span>
      </div>
    );
  }

  return (
    <div className="border py-2 border-gray-300 border-t-0 rounded-b-lg h-[75vh] overflow-y-auto">
      <ul className="pl-4 border-l border-gray-300">{renderTree(null)}</ul>
    </div>
  );
};

export const TreeView = memo(TreeViewComponent);
