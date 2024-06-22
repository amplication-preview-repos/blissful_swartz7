import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const DeliveryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="deliveryDate" source="deliveryDate" />
        <TextInput label="deliveryMonth" source="deliveryMonth" />
        <DateTimeInput label="paymentDate" source="paymentDate" />
        <BooleanInput label="paymentReceived" source="paymentReceived" />
        <DateTimeInput label="paymentTime" source="paymentTime" />
        <TextInput label="thankYouMessage" multiline source="thankYouMessage" />
      </SimpleForm>
    </Edit>
  );
};
