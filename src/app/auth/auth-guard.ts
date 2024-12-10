import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, GuardResult, MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class CanActivateDashboard implements CanActivate {
  constructor(private readonly cookieService: CookieService, private readonly router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const token = this.cookieService.get("RANQUE_AUTH_accessToken");

    if (!token) {
      return this.router.parseUrl('/login');
    }

    return true;
  }
}

@Injectable()
export class CanAuth implements CanActivate {
  constructor(private readonly cookieService: CookieService, private readonly router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const token = this.cookieService.get("RANQUE_AUTH_accessToken");

    if (token) {
      return this.router.parseUrl('/dashboard');
    }

    return true;
  }
}

