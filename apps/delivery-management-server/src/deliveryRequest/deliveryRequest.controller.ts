import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryRequestService } from "./deliveryRequest.service";
import { DeliveryRequestControllerBase } from "./base/deliveryRequest.controller.base";

@swagger.ApiTags("deliveryRequests")
@common.Controller("deliveryRequests")
export class DeliveryRequestController extends DeliveryRequestControllerBase {
  constructor(protected readonly service: DeliveryRequestService) {
    super(service);
  }
}
