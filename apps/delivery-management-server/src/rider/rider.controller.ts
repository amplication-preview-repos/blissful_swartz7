import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RiderService } from "./rider.service";
import { RiderControllerBase } from "./base/rider.controller.base";

@swagger.ApiTags("riders")
@common.Controller("riders")
export class RiderController extends RiderControllerBase {
  constructor(protected readonly service: RiderService) {
    super(service);
  }
}
