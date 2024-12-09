import {inject} from "@angular/core";
import {HttpEvent, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";


/**
 * Intercepts HTTP requests and adds a token if the user has been logged in
 * @param request Request
 * @param next Next handler
 * @returns Next result
 */
export const jwtInterceptor = (request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const token = inject(CookieService).get("RANQUE_AUTH_accessToken")
  if (token) {
    request = request.clone({
      setHeaders: {Authorization: `Token ${token}`},
    });
  }
  return next(request);
};
