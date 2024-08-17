export type FilterControlProps = {
  energyChecked: boolean;
  alertChecked: boolean;
  searchInput: string;
  handleEnergyChange: () => void;
  handleAlertChange: () => void;
  handleSearchSubmit: () => void;
  handleInputChange: (value: string) => void;
  handleKeyDown: (key: string) => void;
  clearSearch: () => void;
};

export function isEmptyObject(obj: unknown): obj is Record<string, never> {
  return (
    typeof obj === "object" &&
    obj !== null &&
    !Array.isArray(obj) &&
    Object.keys(obj).length === 0
  );
}
