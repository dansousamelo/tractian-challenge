import { FilterControls } from "@/app/components/filter-controls";
import { TreeViewClient } from "./tree-view-client";

export function FilteredTreeView() {
  return (
    <section className="flex flex-col flex-1 bg-gray-200 h-screen">
      <div className="flex flex-col flex-1 m-2 p-4 bg-white max-h-screen">
        <FilterControls />
        <TreeViewClient />
      </div>
    </section>
  );
}
