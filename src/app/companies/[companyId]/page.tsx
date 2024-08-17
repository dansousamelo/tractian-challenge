import { Company } from "@/app/types";
import { fetchAssets, fetchCompanies, fetchLocations } from "@/utils/api";
import { notFound } from "next/navigation";
import CompanyClientPage from "../components/company-client-page";

type CompanyPageProps = {
  params: {
    companyId: string;
  };
  searchParams: {
    selectedAssetId?: string;
  };
};

export default async function CompanyPage({
  params: { companyId },
  searchParams: { selectedAssetId },
}: CompanyPageProps) {
  const companies = await fetchCompanies();
  const locations = await fetchLocations(companyId);
  const assets = await fetchAssets(companyId);

  const selectedAsset =
    assets.find((asset) => asset.id === selectedAssetId) || null;

  if (selectedAssetId && !selectedAsset) {
    notFound();
  }

  const unit = companies.find((company) => company.id === companyId) as Company;

  return (
    <CompanyClientPage
      companies={companies}
      locations={locations}
      assets={assets}
      unit={unit}
      companyId={companyId}
    />
  );
}
