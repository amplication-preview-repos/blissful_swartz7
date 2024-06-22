import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const DeliveryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Deliveries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="deliveryDate" source="deliveryDate" />
        <TextField label="deliveryMonth" source="deliveryMonth" />
        <TextField label="ID" source="id" />
        <TextField label="paymentDate" source="paymentDate" />
        <BooleanField label="paymentReceived" source="paymentReceived" />
        <TextField label="paymentTime" source="paymentTime" />
        <TextField label="thankYouMessage" source="thankYouMessage" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
