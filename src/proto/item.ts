/* eslint-disable @typescript-eslint/no-namespace */
/**
 * This file is auto-generated by nestjs-proto-gen-ts
 */

import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export namespace item {
  export interface ItemService {
    first(
      data: ItemById,
      metadata?: Metadata,
      ...rest: any[]
    ): Observable<Item>;
  }
  export interface ItemById {
    id?: number;
  }
  export interface Item {
    foo?: string;
    bar?: string;
    date?: number;
  }
}
