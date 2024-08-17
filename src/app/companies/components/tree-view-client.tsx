import { useState } from "react";
import { useRouter } from "next/navigation";
import { Asset } from "@/app/types";
import { DetailPanel } from "./detail-panel";
import { SearchInput } from "./search-input";
import { TreeView } from "./tree-view";
import { useFilterStore } from "../stores/useFilterStore";

export const TreeViewClient = () => {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const {
    searchInput,
    handleSearchSubmit,
    formattedData,
    handleInputChange,
    textFilter,
    filterByEnergy,
    filterByAlert,
    clearSearch,
  } = useFilterStore();

  const router = useRouter();

  const handleSelectItem = (item: Asset) => {
    setSelectedAsset(item);
    router.push(`?selectedAssetId=${item.id}`, undefined);
  };

  return (
    <div className="flex gap-x-2">
      <section className="w-1/3 ">
        <SearchInput
          value={searchInput}
          onChange={handleInputChange}
          onSubmit={handleSearchSubmit}
          onClear={clearSearch}
          placeholder="Buscar Ativo ou Local"
        />
        <TreeView
          locations={formattedData().locationFormatted}
          assets={formattedData().assetsFormatted}
          onSelectItem={handleSelectItem}
          textFilter={textFilter}
          filterByEnergy={filterByEnergy}
          filterByAlert={filterByAlert}
          selectedAssetId={selectedAsset?.id || null}
        />
      </section>
      <section className="w-2/3">
        <DetailPanel asset={selectedAsset} />
      </section>
    </div>
  );
};
