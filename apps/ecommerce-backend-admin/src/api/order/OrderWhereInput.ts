import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  deliveryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  products?: ProductListRelationFilter;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
