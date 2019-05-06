import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetDeviceComponent } from './shared-component/set-device/set-device.component';
import { DeviceDetectorGuard } from './guard/device-detector.guard';
import { PassportComponent } from './shared/passport/passport.component';
import { CheckCredentialGuard } from './guard/check-credential.guard';
import { IdentityTokenComponent } from './shared-component/identity-token/identity-token.component';

export const PATH_FRAGMENTS = {
  DESKTOP: "desktop",
  MOBILE: "mobile",
  PASSPORT: "passport",
  IDENTITY_TOKEN: "identity_token"
}

const routes: Routes = [
  { path: PATH_FRAGMENTS.DESKTOP, canActivate: [CheckCredentialGuard], loadChildren: "./desktop/desktop.module#DesktopModule" },
  { path: PATH_FRAGMENTS.MOBILE, canActivate: [CheckCredentialGuard], loadChildren: "./mobile/mobile.module#MobileModule" },
  { path: PATH_FRAGMENTS.PASSPORT, component: PassportComponent },
  { path: PATH_FRAGMENTS.IDENTITY_TOKEN, component: IdentityTokenComponent },
  {
    path: "",
    canActivate: [ DeviceDetectorGuard ],
    pathMatch: "full",
    component: SetDeviceComponent
  }  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
