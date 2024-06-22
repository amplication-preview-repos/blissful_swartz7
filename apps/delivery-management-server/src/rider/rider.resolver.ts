import * as graphql from "@nestjs/graphql";
import { RiderResolverBase } from "./base/rider.resolver.base";
import { Rider } from "./base/Rider";
import { RiderService } from "./rider.service";

@graphql.Resolver(() => Rider)
export class RiderResolver extends RiderResolverBase {
  constructor(protected readonly service: RiderService) {
    super(service);
  }
}
