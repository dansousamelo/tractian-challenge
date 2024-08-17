import { Asset, Location } from "@/app/types";
import { useExpandedNodes } from "../hooks/useExpandedNodes";
import { useTreeRendering } from "../hooks/useTreeRendering";

type TreeViewProps = {
  locations: Location[];
  assets: Asset[];
  onSelectItem: (item: Asset | Location) => void;
  textFilter: string;
  filterByEnergy: boolean;
  filterByAlert: boolean;
  selectedAssetId: string | null;
};

export const TreeView = ({
  locations,
  assets,
  onSelectItem,
  textFilter,
  filterByEnergy,
  filterByAlert,
  selectedAssetId,
}: TreeViewProps) => {
  const { allExpandedNodes, toggleNode } = useExpandedNodes(
    textFilter,
    filterByEnergy,
    filterByAlert,
    locations,
    assets
  );

  const { renderTree } = useTreeRendering(
    locations,
    assets,
    allExpandedNodes,
    toggleNode,
    onSelectItem,
    textFilter,
    selectedAssetId
  );

  return (
    <div className="border py-2 border-gray-300 border-t-0 rounded-b-lg h-[75vh] overflow-y-auto">
      <ul className="pl-4 border-l border-gray-300">{renderTree(null)}</ul>
    </div>
  );
};
