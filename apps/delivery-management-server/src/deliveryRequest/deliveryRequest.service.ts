import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryRequestServiceBase } from "./base/deliveryRequest.service.base";

@Injectable()
export class DeliveryRequestService extends DeliveryRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
