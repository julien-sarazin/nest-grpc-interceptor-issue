import { Injectable } from '@nestjs/common';

export class ItemEntity {
  foo = 'foo';
  bar = 'bar';
  date = new Date();
}

@Injectable()
export class AppService {
  getItem(): Promise<ItemEntity> {
    const item = new ItemEntity();

    return new Promise<ItemEntity>((resolve, reject) => {
      setTimeout(() => resolve(item), 500);
    });
  }
}
