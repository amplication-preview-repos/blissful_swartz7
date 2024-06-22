import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type DeliveryWhereInput = {
  deliveryDate?: DateTimeNullableFilter;
  deliveryMonth?: StringNullableFilter;
  id?: StringFilter;
  paymentDate?: DateTimeNullableFilter;
  paymentReceived?: BooleanNullableFilter;
  paymentTime?: DateTimeNullableFilter;
  thankYouMessage?: StringNullableFilter;
};
