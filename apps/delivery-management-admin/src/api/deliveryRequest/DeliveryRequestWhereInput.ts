import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DeliveryRequestWhereInput = {
  approvalStatus?: BooleanNullableFilter;
  id?: StringFilter;
  requesterName?: StringNullableFilter;
  successfulDeliveryTime?: DateTimeNullableFilter;
};
