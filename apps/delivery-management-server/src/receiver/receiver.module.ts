import { Module } from "@nestjs/common";
import { ReceiverModuleBase } from "./base/receiver.module.base";
import { ReceiverService } from "./receiver.service";
import { ReceiverController } from "./receiver.controller";
import { ReceiverResolver } from "./receiver.resolver";

@Module({
  imports: [ReceiverModuleBase],
  controllers: [ReceiverController],
  providers: [ReceiverService, ReceiverResolver],
  exports: [ReceiverService],
})
export class ReceiverModule {}
