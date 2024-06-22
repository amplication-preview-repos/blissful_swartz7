import { Module } from "@nestjs/common";
import { RiderModuleBase } from "./base/rider.module.base";
import { RiderService } from "./rider.service";
import { RiderController } from "./rider.controller";
import { RiderResolver } from "./rider.resolver";

@Module({
  imports: [RiderModuleBase],
  controllers: [RiderController],
  providers: [RiderService, RiderResolver],
  exports: [RiderService],
})
export class RiderModule {}
