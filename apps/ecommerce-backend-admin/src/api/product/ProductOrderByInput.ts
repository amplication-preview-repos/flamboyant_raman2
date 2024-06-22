import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  cartId?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  stock?: SortOrder;
  updatedAt?: SortOrder;
};
