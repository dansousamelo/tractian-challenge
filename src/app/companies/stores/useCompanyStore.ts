import { create } from "zustand";
import { Company, Asset, Location } from "@/app/types";

type CompanyStore = {
  companyId: string;
  companies: Company[];
  locations: Location[];
  assets: Asset[];
  unit: Company;
  setCompanyId: (companyId: string) => void;
  setCompanies: (companies: Company[]) => void;
  setLocations: (locations: Location[]) => void;
  setAssets: (assets: Asset[]) => void;
  setUnit: (unit: Company) => void;
};

export const useCompanyStore = create<CompanyStore>((set) => ({
  companyId: "",
  companies: [],
  locations: [],
  assets: [],
  unit: {} as Company,
  setCompanyId: (companyId) => set({ companyId }),
  setCompanies: (companies) => set({ companies }),
  setLocations: (locations) => set({ locations }),
  setAssets: (assets) => set({ assets }),
  setUnit: (unit) => set({ unit }),
}));
