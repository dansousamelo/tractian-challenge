import { Asset, Company, Location } from "@/app/types";

export async function fetchCompanies(): Promise<Company[]> {
  try {
    const response = await fetch("https://fake-api.tractian.com/companies", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch companies");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchLocations(companyId: string): Promise<Location[]> {
  try {
    const response = await fetch(
      `https://fake-api.tractian.com/companies/${companyId}/locations`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch locations");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchAssets(companyId: string): Promise<Asset[]> {
  try {
    const response = await fetch(
      `https://fake-api.tractian.com/companies/${companyId}/assets`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch assets");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
