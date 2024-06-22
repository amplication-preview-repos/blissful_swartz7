import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const DeliveryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="deliveryDate" source="deliveryDate" />
        <TextInput label="deliveryMonth" source="deliveryMonth" />
        <DateTimeInput label="paymentDate" source="paymentDate" />
        <BooleanInput label="paymentReceived" source="paymentReceived" />
        <DateTimeInput label="paymentTime" source="paymentTime" />
        <TextInput label="thankYouMessage" multiline source="thankYouMessage" />
      </SimpleForm>
    </Create>
  );
};
