import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule } from './sidenav-routing.module';
import { IcecreamComponent } from './icecream/icecream/icecream.component';


@NgModule({
  declarations: [
    IcecreamComponent
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule
  ]
})
export class SidenavModule { }
