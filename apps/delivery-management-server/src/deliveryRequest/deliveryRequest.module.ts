import { Module } from "@nestjs/common";
import { DeliveryRequestModuleBase } from "./base/deliveryRequest.module.base";
import { DeliveryRequestService } from "./deliveryRequest.service";
import { DeliveryRequestController } from "./deliveryRequest.controller";
import { DeliveryRequestResolver } from "./deliveryRequest.resolver";

@Module({
  imports: [DeliveryRequestModuleBase],
  controllers: [DeliveryRequestController],
  providers: [DeliveryRequestService, DeliveryRequestResolver],
  exports: [DeliveryRequestService],
})
export class DeliveryRequestModule {}
