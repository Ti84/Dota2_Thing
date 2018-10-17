import { Injectable } from "@angular/core";
import { ErrorState } from "./store/reducers/error.reducer";
import { Store } from "@ngrx/store";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpInterceptor
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { LoadError } from "./store/actions";

@Injectable()
export class GlobalErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store<ErrorState>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch(new LoadError(error));
        return throwError(error);
      })
    );
  }
}
