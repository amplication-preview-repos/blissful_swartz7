import { Sender as TSender } from "../api/sender/Sender";

export const SENDER_TITLE_FIELD = "name";

export const SenderTitle = (record: TSender): string => {
  return record.name?.toString() || String(record.id);
};
