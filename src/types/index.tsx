import { IconType } from "react-icons";

export declare type RecordTypes = "income" | "expense";

export declare type Record = {
  type?: RecordTypes;
  value: number;
  description: string;
  parcels: number;
};

export declare type Finances = {
  incomes: Record[];
  expenses: Record[];
};

export declare type SidebarMenu = {
  icon: IconType;
  route: string;
};
