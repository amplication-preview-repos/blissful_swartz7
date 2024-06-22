import { SortOrder } from "../../util/SortOrder";

export type DeliveryRequestOrderByInput = {
  approvalStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  requesterName?: SortOrder;
  successfulDeliveryTime?: SortOrder;
  updatedAt?: SortOrder;
};
