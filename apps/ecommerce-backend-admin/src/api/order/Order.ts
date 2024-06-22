import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  deliveryDate: Date | null;
  id: string;
  orderDate: Date | null;
  products?: Array<Product>;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
