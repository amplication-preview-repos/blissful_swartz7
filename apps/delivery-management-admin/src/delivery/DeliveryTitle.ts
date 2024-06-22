import { Delivery as TDelivery } from "../api/delivery/Delivery";

export const DELIVERY_TITLE_FIELD = "deliveryMonth";

export const DeliveryTitle = (record: TDelivery): string => {
  return record.deliveryMonth?.toString() || String(record.id);
};
