import { DeliveryRequest as TDeliveryRequest } from "../api/deliveryRequest/DeliveryRequest";

export const DELIVERYREQUEST_TITLE_FIELD = "requesterName";

export const DeliveryRequestTitle = (record: TDeliveryRequest): string => {
  return record.requesterName?.toString() || String(record.id);
};
