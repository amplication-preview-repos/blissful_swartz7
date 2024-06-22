import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SenderServiceBase } from "./base/sender.service.base";

@Injectable()
export class SenderService extends SenderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
