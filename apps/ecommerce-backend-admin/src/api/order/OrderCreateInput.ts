import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  deliveryDate?: Date | null;
  orderDate?: Date | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  status?: "Option1" | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
