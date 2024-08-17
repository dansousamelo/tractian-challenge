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
