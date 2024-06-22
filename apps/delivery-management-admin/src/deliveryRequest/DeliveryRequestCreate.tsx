import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const DeliveryRequestCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="approvalStatus" source="approvalStatus" />
        <TextInput label="requesterName" source="requesterName" />
        <DateTimeInput
          label="successfulDeliveryTime"
          source="successfulDeliveryTime"
        />
      </SimpleForm>
    </Create>
  );
};
