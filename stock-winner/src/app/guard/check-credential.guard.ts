import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../core/storage/local-storage.service';
import { SessionStorageService } from '../core/storage/session-storage.service';
import { STORAGE_KEY } from '../constant/storage.constant';
import { PATH_FRAGMENTS } from '../app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class CheckCredentialGuard implements CanActivate  {

  constructor(
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private router: Router
  ) {
    
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.localStorage.getData(STORAGE_KEY.IDENTITY_TOKEN) &&
      !this.sessionStorage.getData(STORAGE_KEY.IDENTITY_TOKEN)) 
    {
      return this.router.createUrlTree([PATH_FRAGMENTS.PASSPORT]);
    }
    else {
      return true;
    }
  }
}
