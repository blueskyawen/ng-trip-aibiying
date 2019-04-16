import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PageRegisterLoginService } from '../home-page/page-register-login/page-register-login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public pageRegisterLoginService: PageRegisterLoginService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;
    if (this.pageRegisterLoginService.isLogined) {
      return true;
    } else {
      if(url === '/selfCenter/share/beHoster') {
        this.router.navigate(['/selfCenter/share/publish']);
      }
      return false;
    }
  }
}
