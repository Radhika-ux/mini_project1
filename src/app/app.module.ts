import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './HOME/home/home.component';
import { LocationsComponent } from './LOCATIONS/locations/locations.component';
import { ContactComponent } from './CONTACT/contact/contact.component';
import { GettoknowusComponent } from './GET TO KNOW US/gettoknowus/gettoknowus.component';
import { OrderOnlineComponent } from './ORDER ONLINE/order-online/order-online.component';
import { MainContentComponent } from './MAIN_CONTENT/main-content/main-content.component';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { IcecreamComponent } from './icecream/icecream/icecream.component';
import { ChocolateComponent } from './chocolate/chocolate/chocolate.component';
import { ScoopsComponent } from './scoops/scoops/scoops.component';
import { StrawberryComponent } from './strawberry/strawberry/strawberry.component';
import { BlackforestComponent } from './blackforest/blackforest/blackforest.component';
import { ButterscotchComponent } from './butterscotch/butterscotch/butterscotch.component';
import { VanillaComponent } from './vanilla/vanilla/vanilla.component';
//import { RegisterformComponent } from './RegisterForm/registerform/registerform.component';
@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    LocationsComponent,
    ContactComponent,
    GettoknowusComponent,
    OrderOnlineComponent,
    MainContentComponent,
    SidenavComponent,
    IcecreamComponent,
    ChocolateComponent,
    ScoopsComponent,
    StrawberryComponent,
    BlackforestComponent,
    ButterscotchComponent,
    VanillaComponent,
   // RegisterformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
