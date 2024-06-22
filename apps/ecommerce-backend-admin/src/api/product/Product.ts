import { Cart } from "../cart/Cart";
import { Order } from "../order/Order";

export type Product = {
  cart?: Cart | null;
  category: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  order?: Order | null;
  price: number | null;
  stock: number | null;
  updatedAt: Date;
};
