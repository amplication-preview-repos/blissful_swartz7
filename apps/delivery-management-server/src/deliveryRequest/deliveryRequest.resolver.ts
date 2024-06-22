import * as graphql from "@nestjs/graphql";
import { DeliveryRequestResolverBase } from "./base/deliveryRequest.resolver.base";
import { DeliveryRequest } from "./base/DeliveryRequest";
import { DeliveryRequestService } from "./deliveryRequest.service";

@graphql.Resolver(() => DeliveryRequest)
export class DeliveryRequestResolver extends DeliveryRequestResolverBase {
  constructor(protected readonly service: DeliveryRequestService) {
    super(service);
  }
}
