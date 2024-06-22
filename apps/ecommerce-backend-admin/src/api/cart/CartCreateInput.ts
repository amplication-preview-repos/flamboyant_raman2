import { ProductCreateNestedManyWithoutCartsInput } from "./ProductCreateNestedManyWithoutCartsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartCreateInput = {
  products?: ProductCreateNestedManyWithoutCartsInput;
  user?: UserWhereUniqueInput | null;
};
