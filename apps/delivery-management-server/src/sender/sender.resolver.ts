import * as graphql from "@nestjs/graphql";
import { SenderResolverBase } from "./base/sender.resolver.base";
import { Sender } from "./base/Sender";
import { SenderService } from "./sender.service";

@graphql.Resolver(() => Sender)
export class SenderResolver extends SenderResolverBase {
  constructor(protected readonly service: SenderService) {
    super(service);
  }
}
