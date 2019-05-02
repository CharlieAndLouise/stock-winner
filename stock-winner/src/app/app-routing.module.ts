import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetDeviceComponent } from './shared-component/set-device/set-device.component';
import { DeviceDetectorGuard } from './guard/device-detector.guard';

export const PATH_FRAGMENTS = {
  DESKTOP: "desktop",
  MOBILE: "mobile"
}

const routes: Routes = [
  { path: PATH_FRAGMENTS.DESKTOP, loadChildren: "./desktop/desktop.module#DesktopModule" },
  { path: PATH_FRAGMENTS.MOBILE, loadChildren: "./mobile/mobile.module#MobileModule" },
  {
    path: "",
    canActivate: [DeviceDetectorGuard],
    pathMatch: "full",
    component: SetDeviceComponent
  }  
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
