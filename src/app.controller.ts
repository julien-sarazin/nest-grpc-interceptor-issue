import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService, ItemEntity } from './app.service';
import { AsyncInterceptor } from './async.interceptor';
import { GrpcMethod } from '@nestjs/microservices';
import { item } from './proto/item';
import ItemService = item.ItemService;
import { Metadata } from '@grpc/grpc-js';
import { from, Observable } from 'rxjs';
import { props } from 'bluebird';

@Controller()
export class AppController implements ItemService {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(new AsyncInterceptor())
  async getItem(): Promise<ItemEntity> {
    return this.appService.getItem();
  }

  @GrpcMethod('ItemService', 'First')
  // @UseInterceptors(new AppInterceptor())
  first(
    data: item.ItemById,
    metadata?: Metadata,
    ...rest: any[]
  ): Observable<any> {
    return from(props({ item: this.appService.getItem() }));
  }
}
