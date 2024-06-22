/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SenderService } from "../sender.service";
import { SenderCreateInput } from "./SenderCreateInput";
import { Sender } from "./Sender";
import { SenderFindManyArgs } from "./SenderFindManyArgs";
import { SenderWhereUniqueInput } from "./SenderWhereUniqueInput";
import { SenderUpdateInput } from "./SenderUpdateInput";

export class SenderControllerBase {
  constructor(protected readonly service: SenderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Sender })
  async createSender(@common.Body() data: SenderCreateInput): Promise<Sender> {
    return await this.service.createSender({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Sender] })
  @ApiNestedQuery(SenderFindManyArgs)
  async senders(@common.Req() request: Request): Promise<Sender[]> {
    const args = plainToClass(SenderFindManyArgs, request.query);
    return this.service.senders({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Sender })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async sender(
    @common.Param() params: SenderWhereUniqueInput
  ): Promise<Sender | null> {
    const result = await this.service.sender({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Sender })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSender(
    @common.Param() params: SenderWhereUniqueInput,
    @common.Body() data: SenderUpdateInput
  ): Promise<Sender | null> {
    try {
      return await this.service.updateSender({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Sender })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSender(
    @common.Param() params: SenderWhereUniqueInput
  ): Promise<Sender | null> {
    try {
      return await this.service.deleteSender({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
