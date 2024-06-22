import { ReceiverWhereInput } from "./ReceiverWhereInput";
import { ReceiverOrderByInput } from "./ReceiverOrderByInput";

export type ReceiverFindManyArgs = {
  where?: ReceiverWhereInput;
  orderBy?: Array<ReceiverOrderByInput>;
  skip?: number;
  take?: number;
};
