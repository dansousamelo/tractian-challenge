import { Location, Asset } from "@/app/types";
import Image from "next/image";
import { useHighlightText } from "./useHighlightText";

export const useTreeRendering = (
  locations: Location[],
  assets: Asset[],
  allExpandedNodes: Record<string, boolean>,
  toggleNode: (id: string) => void,
  onSelectItem: (item: Asset | Location) => void,
  textFilter: string,
  selectedAssetId: string | null
) => {
  const { highlightText } = useHighlightText();

  const renderTree = (parentId: string | null) => {
    const filteredLocations = locations.filter(
      (loc) => loc.parentId === parentId
    );
    const filteredAssets = assets.filter(
      (asset) =>
        (asset.locationId === parentId && asset.parentId === null) ||
        (asset.locationId === null && asset.parentId === parentId)
    );

    return (
      <>
        {filteredLocations.map((location) => {
          const hasChildren =
            locations.some((loc) => loc.parentId === location.id) ||
            assets.some((asset) => asset.locationId === location.id);

          return (
            <li key={location.id} className="mb-2">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => hasChildren && toggleNode(location.id)}
              >
                {hasChildren && (
                  <span className="mr-2">
                    {allExpandedNodes[location.id] ? (
                      <Image
                        src="/assets/icons/arrow-down-icon.svg"
                        alt="Operating"
                        width={10}
                        height={10}
                        className="ml-1"
                      />
                    ) : (
                      <Image
                        src="/assets/icons/arrow-right-icon.svg"
                        alt="Operating"
                        width={10}
                        height={10}
                        className="ml-1"
                      />
                    )}
                  </span>
                )}
                <Image
                  src="/assets/icons/location-icon.png"
                  alt="Location Icon"
                  width={22}
                  height={22}
                  className="mr-2"
                />
                <span className="font-medium text-sm font-roboto">
                  {highlightText(location.name, textFilter)}
                </span>
              </div>
              {allExpandedNodes[location.id] && (
                <ul className="pl-10 mt-1 border-l border-gray-300">
                  {renderTree(location.id)}
                </ul>
              )}
            </li>
          );
        })}

        {filteredAssets.map((asset) => {
          const hasChildren = assets.some((a) => a.parentId === asset.id);
          const isSelected = selectedAssetId === asset.id;

          return (
            <li key={asset.id} className="mb-2">
              <div
                className={`flex items-center cursor-pointer ${
                  isSelected ? "bg-blue-tractian p-1 text-white" : ""
                }`}
                onClick={() => {
                  hasChildren && toggleNode(asset.id);
                  onSelectItem(asset);
                }}
              >
                {hasChildren && (
                  <span className="mr-2">
                    {allExpandedNodes[asset.id] ? (
                      <Image
                        src="/assets/icons/arrow-down-icon.svg"
                        alt="Operating"
                        width={10}
                        height={10}
                        className={`"ml-1 ${
                          isSelected ? "filter invert brightness-0" : ""
                        }`}
                      />
                    ) : (
                      <Image
                        src="/assets/icons/arrow-right-icon.svg"
                        alt="Operating"
                        width={10}
                        height={10}
                        className={`"ml-1 ${
                          isSelected ? "filter invert brightness-0" : ""
                        }`}
                      />
                    )}
                  </span>
                )}
                <Image
                  src={
                    asset.sensorType
                      ? "/assets/icons/component-icon.png"
                      : "/assets/icons/asset-icon.png"
                  }
                  alt={asset.sensorType ? "Component Icon" : "Asset Icon"}
                  width={22}
                  height={22}
                  className={`mr-2 ${
                    isSelected ? "filter invert brightness-0" : ""
                  }`}
                />
                <span className="font-medium text-sm font-roboto">
                  {highlightText(asset.name, textFilter)}
                </span>
                {asset.status === "operating" && (
                  <Image
                    src="/assets/icons/bolt-icon.svg"
                    alt="Operating"
                    width={9}
                    height={12}
                    className="ml-1"
                  />
                )}
                {asset.status === "alert" && (
                  <span className="ml-2 text-red-500">●</span>
                )}
              </div>
              {allExpandedNodes[asset.id] && (
                <ul className="pl-10 mt-1 border-l border-gray-300">
                  {renderTree(asset.id)}
                </ul>
              )}
            </li>
          );
        })}
      </>
    );
  };

  return { renderTree };
};
