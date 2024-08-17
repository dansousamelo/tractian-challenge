export interface Company {
  id: string;
  name: string;
}

export interface Location {
  id: string;
  name: string;
  parentId?: string | null;
}

export interface Asset {
  id: string;
  name: string;
  parentId?: string | null;
  locationId?: string | null;
  sensorId?: string | null;
  sensorType?: "energy" | "vibration" | null;
  status?: "operating" | "alert" | null;
}
