"use client";

import { motion } from "framer-motion";
import { FilteredTreeView } from "./filtered-tree-view";
import Header from "./header";
import { useCompanyStore } from "../stores/useCompanyStore";
import { Company, Asset, Location } from "@/app/types";

type CompanyClientPageProps = {
  companies: Company[];
  locations: Location[];
  assets: Asset[];
  unit: Company;
  companyId: string;
};

export default function CompanyClientPage({
  companies,
  locations,
  assets,
  unit,
  companyId,
}: CompanyClientPageProps) {
  useCompanyStore.setState({
    companies,
    locations,
    assets,
    unit,
    companyId,
  });

  return (
    <motion.main
      className="flex flex-col flex-1 h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <FilteredTreeView />
    </motion.main>
  );
}
