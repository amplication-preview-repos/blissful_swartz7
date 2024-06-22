import { DeliveryRequestWhereInput } from "./DeliveryRequestWhereInput";
import { DeliveryRequestOrderByInput } from "./DeliveryRequestOrderByInput";

export type DeliveryRequestFindManyArgs = {
  where?: DeliveryRequestWhereInput;
  orderBy?: Array<DeliveryRequestOrderByInput>;
  skip?: number;
  take?: number;
};
