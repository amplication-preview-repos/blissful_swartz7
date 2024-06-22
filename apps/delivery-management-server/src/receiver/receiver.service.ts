import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReceiverServiceBase } from "./base/receiver.service.base";

@Injectable()
export class ReceiverService extends ReceiverServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
