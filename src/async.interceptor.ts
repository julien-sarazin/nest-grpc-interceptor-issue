import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';

export class AsyncInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(map(async (data: any) => await this.doAsyncStuff(data)));
  }

  async doAsyncStuff(data: any) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log('async log', data);
        resolve(data);
      }, 500);
    });
  }
}
