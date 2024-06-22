import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const DeliveryRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="approvalStatus" source="approvalStatus" />
        <TextInput label="requesterName" source="requesterName" />
        <DateTimeInput
          label="successfulDeliveryTime"
          source="successfulDeliveryTime"
        />
      </SimpleForm>
    </Edit>
  );
};
