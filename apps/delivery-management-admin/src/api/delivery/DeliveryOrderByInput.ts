import { SortOrder } from "../../util/SortOrder";

export type DeliveryOrderByInput = {
  createdAt?: SortOrder;
  deliveryDate?: SortOrder;
  deliveryMonth?: SortOrder;
  id?: SortOrder;
  paymentDate?: SortOrder;
  paymentReceived?: SortOrder;
  paymentTime?: SortOrder;
  thankYouMessage?: SortOrder;
  updatedAt?: SortOrder;
};
