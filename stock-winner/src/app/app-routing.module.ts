import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetDeviceComponent } from './shared-component/set-device/set-device.component';
import { DeviceDetectorGuard } from './guard/device-detector.guard';
import { PassportComponent } from './shared/passport/passport.component';
import { CheckCredentialGuard } from './guard/check-credential.guard';

export const PATH_FRAGMENTS = {
  DESKTOP: "desktop",
  MOBILE: "mobile",
  PASSPORT: "passport"
}

const routes: Routes = [
  { path: PATH_FRAGMENTS.DESKTOP, canActivate: [CheckCredentialGuard], loadChildren: "./desktop/desktop.module#DesktopModule" },
  { path: PATH_FRAGMENTS.MOBILE, canActivate: [CheckCredentialGuard], loadChildren: "./mobile/mobile.module#MobileModule" },
  { path: PATH_FRAGMENTS.PASSPORT, component: PassportComponent },
  {
    path: "abc",
    //canActivate: [ DeviceDetectorGuard ],
    pathMatch: "full",
    component: SetDeviceComponent
  }  
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
