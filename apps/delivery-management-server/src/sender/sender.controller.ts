import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SenderService } from "./sender.service";
import { SenderControllerBase } from "./base/sender.controller.base";

@swagger.ApiTags("senders")
@common.Controller("senders")
export class SenderController extends SenderControllerBase {
  constructor(protected readonly service: SenderService) {
    super(service);
  }
}
