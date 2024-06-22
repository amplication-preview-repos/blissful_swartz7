import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RiderServiceBase } from "./base/rider.service.base";

@Injectable()
export class RiderService extends RiderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
