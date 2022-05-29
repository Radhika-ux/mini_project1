import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackforestComponent } from './blackforest/blackforest/blackforest.component';
import { ButterscotchComponent } from './butterscotch/butterscotch/butterscotch.component';
import { ChocolateComponent } from './chocolate/chocolate/chocolate.component';
import { ContactComponent } from './CONTACT/contact/contact.component';
import { GettoknowusComponent } from './GET TO KNOW US/gettoknowus/gettoknowus.component';
import { HOMEComponent } from './HOME/home/home.component';
import { IcecreamComponent } from './icecream/icecream/icecream.component';
import { LocationsComponent } from './LOCATIONS/locations/locations.component';
import { MainContentComponent } from './MAIN_CONTENT/main-content/main-content.component';
import { OrderOnlineComponent } from './ORDER ONLINE/order-online/order-online.component';
import { ScoopsComponent } from './scoops/scoops/scoops.component';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { StrawberryComponent } from './strawberry/strawberry/strawberry.component';
import { VanillaComponent } from './vanilla/vanilla/vanilla.component';

const routes: Routes = [
  { path: 'home', component: HOMEComponent },
  { path: 'get_toknow_us', component: GettoknowusComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'orderOnline', component: OrderOnlineComponent },
  { path: 'contact', component: ContactComponent },
  { path: "", component: MainContentComponent },
  { path: "sidenav", component: SidenavComponent },
  { path: 'icecream',component: IcecreamComponent},
  {path: 'chocolate', component: ChocolateComponent},
  {path: 'scoops',component: ScoopsComponent},
  {path: 'strawberry',component: StrawberryComponent},
  {path: 'vanilla', component: VanillaComponent},
  {path: 'butterscotch', component: ButterscotchComponent},
  {path: 'blackforest', component: BlackforestComponent}
  //{path: 'sidenav',loadChildren:()=>import('./sidenav/sidenav/sidenav.module').then(m=>m.SidenavModule)}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
