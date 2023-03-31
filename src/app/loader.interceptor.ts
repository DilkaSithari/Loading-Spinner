import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { delay, Observable, tap } from 'rxjs';
import { DesignutilityService } from './designutility.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private _du: DesignutilityService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        this._du.loading.next(true);
        if (event.type == HttpEventType.Response) {
          if (event.status == 200) {
            this._du.loading.next(false);
          }
        }
      })
    );
  }
}
