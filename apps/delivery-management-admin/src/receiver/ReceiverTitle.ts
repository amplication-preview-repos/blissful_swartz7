import { Receiver as TReceiver } from "../api/receiver/Receiver";

export const RECEIVER_TITLE_FIELD = "name";

export const ReceiverTitle = (record: TReceiver): string => {
  return record.name?.toString() || String(record.id);
};
