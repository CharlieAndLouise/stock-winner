import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DesktopRoutingModule } from './desktop-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DesktopRoutingModule
  ]
})
export class DesktopModule { }
