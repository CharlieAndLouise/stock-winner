import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DesktopRoutingModule } from './desktop-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DesktopRoutingModule,
    NgZorroAntdModule
  ]
})
export class DesktopModule { }
