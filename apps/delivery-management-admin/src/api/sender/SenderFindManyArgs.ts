import { SenderWhereInput } from "./SenderWhereInput";
import { SenderOrderByInput } from "./SenderOrderByInput";

export type SenderFindManyArgs = {
  where?: SenderWhereInput;
  orderBy?: Array<SenderOrderByInput>;
  skip?: number;
  take?: number;
};
