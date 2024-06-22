import { RiderWhereInput } from "./RiderWhereInput";
import { RiderOrderByInput } from "./RiderOrderByInput";

export type RiderFindManyArgs = {
  where?: RiderWhereInput;
  orderBy?: Array<RiderOrderByInput>;
  skip?: number;
  take?: number;
};
