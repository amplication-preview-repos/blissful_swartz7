import { Module } from "@nestjs/common";
import { SenderModuleBase } from "./base/sender.module.base";
import { SenderService } from "./sender.service";
import { SenderController } from "./sender.controller";
import { SenderResolver } from "./sender.resolver";

@Module({
  imports: [SenderModuleBase],
  controllers: [SenderController],
  providers: [SenderService, SenderResolver],
  exports: [SenderService],
})
export class SenderModule {}
