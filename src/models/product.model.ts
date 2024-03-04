export interface Product {
  id: number;
  type: ImpactType;
  amount: number;
  action: ActionType;
  active: boolean;
  linked: boolean;
  selectedColor: Colors;
}

export type ImpactType = "carbon" | "plastic bottles" | "trees";

export type ActionType = "collects" | "plants" | "offsets";

export type Colors = "white" | "black" | "green" | "blue" | "beige";

export interface ColorSelector {
  identifier: Colors;
  value: string;
  isActive: boolean;
  id?: number;
}

export const availableColors: ColorSelector[] = [
  {
    identifier: "blue",
    value: "#2E3A8C",
    isActive: false,
  },
  { identifier: "green", value: "#3B755F", isActive: false },
  { identifier: "beige", value: "#F2EBDB", isActive: false },
  { identifier: "white", value: "#F9F9F9", isActive: false },
  { identifier: "black", value: "#212121", isActive: false },
];
