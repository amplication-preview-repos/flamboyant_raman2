import { ProductUpdateManyWithoutCartsInput } from "./ProductUpdateManyWithoutCartsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartUpdateInput = {
  products?: ProductUpdateManyWithoutCartsInput;
  user?: UserWhereUniqueInput | null;
};
