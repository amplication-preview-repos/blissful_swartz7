import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const DeliveryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deliveryDate" source="deliveryDate" />
        <TextField label="deliveryMonth" source="deliveryMonth" />
        <TextField label="ID" source="id" />
        <TextField label="paymentDate" source="paymentDate" />
        <BooleanField label="paymentReceived" source="paymentReceived" />
        <TextField label="paymentTime" source="paymentTime" />
        <TextField label="thankYouMessage" source="thankYouMessage" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
