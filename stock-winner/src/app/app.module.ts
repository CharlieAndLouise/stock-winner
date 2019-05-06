import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetDeviceComponent } from './shared-component/set-device/set-device.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { IdentityTokenComponent } from './shared-component/identity-token/identity-token.component';
import { LocalStorageService } from './core/storage/local-storage.service';
import { SessionStorageService } from './core/storage/session-storage.service';
import { PassportComponent } from './shared/passport/passport.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    SetDeviceComponent,
    IdentityTokenComponent,
    PassportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    LocalStorageService,
    SessionStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
