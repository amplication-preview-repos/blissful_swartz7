import * as graphql from "@nestjs/graphql";
import { ReceiverResolverBase } from "./base/receiver.resolver.base";
import { Receiver } from "./base/Receiver";
import { ReceiverService } from "./receiver.service";

@graphql.Resolver(() => Receiver)
export class ReceiverResolver extends ReceiverResolverBase {
  constructor(protected readonly service: ReceiverService) {
    super(service);
  }
}
