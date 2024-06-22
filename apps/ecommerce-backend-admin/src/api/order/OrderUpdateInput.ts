import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  deliveryDate?: Date | null;
  orderDate?: Date | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  status?: "Option1" | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
