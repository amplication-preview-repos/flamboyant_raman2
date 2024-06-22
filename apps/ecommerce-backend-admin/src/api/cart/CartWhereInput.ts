import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartWhereInput = {
  id?: StringFilter;
  products?: ProductListRelationFilter;
  user?: UserWhereUniqueInput;
};
