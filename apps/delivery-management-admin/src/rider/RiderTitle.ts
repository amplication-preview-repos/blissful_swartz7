import { Rider as TRider } from "../api/rider/Rider";

export const RIDER_TITLE_FIELD = "name";

export const RiderTitle = (record: TRider): string => {
  return record.name?.toString() || String(record.id);
};
