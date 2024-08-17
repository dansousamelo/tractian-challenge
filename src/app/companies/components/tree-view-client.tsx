import React, { memo } from "react";
import { DetailPanel } from "./detail-panel";
import { SearchInput } from "./search-input";
import { TreeView } from "./tree-view";

const SearchInputMemo = memo(SearchInput);
const TreeViewMemo = memo(TreeView);
const DetailPanelMemo = memo(DetailPanel);

export const TreeViewClient = () => {
  return (
    <div className="flex gap-x-2">
      <section className="w-1/3">
        <SearchInputMemo placeholder="Buscar Ativo ou Local" />
        <TreeViewMemo />
      </section>
      <section className="w-2/3">
        <DetailPanelMemo />
      </section>
    </div>
  );
};
