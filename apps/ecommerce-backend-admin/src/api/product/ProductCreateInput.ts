import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductCreateInput = {
  cart?: CartWhereUniqueInput | null;
  category?: string | null;
  description?: string | null;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  stock?: number | null;
};
