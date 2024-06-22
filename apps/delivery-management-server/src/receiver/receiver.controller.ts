import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReceiverService } from "./receiver.service";
import { ReceiverControllerBase } from "./base/receiver.controller.base";

@swagger.ApiTags("receivers")
@common.Controller("receivers")
export class ReceiverController extends ReceiverControllerBase {
  constructor(protected readonly service: ReceiverService) {
    super(service);
  }
}
