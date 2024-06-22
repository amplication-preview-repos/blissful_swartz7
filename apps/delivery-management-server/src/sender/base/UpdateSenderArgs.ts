/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SenderWhereUniqueInput } from "./SenderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SenderUpdateInput } from "./SenderUpdateInput";

@ArgsType()
class UpdateSenderArgs {
  @ApiProperty({
    required: true,
    type: () => SenderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SenderWhereUniqueInput)
  @Field(() => SenderWhereUniqueInput, { nullable: false })
  where!: SenderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SenderUpdateInput,
  })
  @ValidateNested()
  @Type(() => SenderUpdateInput)
  @Field(() => SenderUpdateInput, { nullable: false })
  data!: SenderUpdateInput;
}

export { UpdateSenderArgs as UpdateSenderArgs };