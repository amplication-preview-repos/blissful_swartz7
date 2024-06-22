import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SenderList } from "./sender/SenderList";
import { SenderCreate } from "./sender/SenderCreate";
import { SenderEdit } from "./sender/SenderEdit";
import { SenderShow } from "./sender/SenderShow";
import { RiderList } from "./rider/RiderList";
import { RiderCreate } from "./rider/RiderCreate";
import { RiderEdit } from "./rider/RiderEdit";
import { RiderShow } from "./rider/RiderShow";
import { DeliveryList } from "./delivery/DeliveryList";
import { DeliveryCreate } from "./delivery/DeliveryCreate";
import { DeliveryEdit } from "./delivery/DeliveryEdit";
import { DeliveryShow } from "./delivery/DeliveryShow";
import { ReceiverList } from "./receiver/ReceiverList";
import { ReceiverCreate } from "./receiver/ReceiverCreate";
import { ReceiverEdit } from "./receiver/ReceiverEdit";
import { ReceiverShow } from "./receiver/ReceiverShow";
import { DeliveryRequestList } from "./deliveryRequest/DeliveryRequestList";
import { DeliveryRequestCreate } from "./deliveryRequest/DeliveryRequestCreate";
import { DeliveryRequestEdit } from "./deliveryRequest/DeliveryRequestEdit";
import { DeliveryRequestShow } from "./deliveryRequest/DeliveryRequestShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Delivery Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Sender"
          list={SenderList}
          edit={SenderEdit}
          create={SenderCreate}
          show={SenderShow}
        />
        <Resource
          name="Rider"
          list={RiderList}
          edit={RiderEdit}
          create={RiderCreate}
          show={RiderShow}
        />
        <Resource
          name="Delivery"
          list={DeliveryList}
          edit={DeliveryEdit}
          create={DeliveryCreate}
          show={DeliveryShow}
        />
        <Resource
          name="Receiver"
          list={ReceiverList}
          edit={ReceiverEdit}
          create={ReceiverCreate}
          show={ReceiverShow}
        />
        <Resource
          name="DeliveryRequest"
          list={DeliveryRequestList}
          edit={DeliveryRequestEdit}
          create={DeliveryRequestCreate}
          show={DeliveryRequestShow}
        />
      </Admin>
    </div>
  );
};

export default App;
