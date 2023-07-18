export interface IHeader {
  id: number;
  name: string;
  path: string;
  icon?: number;
  submenu?: {
    id: number;
    name: string;
    icon: number;
  }[];
}
