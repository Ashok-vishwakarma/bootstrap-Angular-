import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web/web.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UiComponent } from './ui/ui.component';
import { ToggleComponent } from './toggle/toggle.component';
import { HostlistnerAndBindingComponent } from './hostlistner-and-binding/hostlistner-and-binding.component';
import { ViewchildChildrenComponent } from './viewchild-children/viewchild-children.component';


const routes: Routes = [
  { path: '', component: WebComponent },
  { path: 'cart', component: CartComponent },
  { path: 'header', component: HeaderComponent },
  {path:'ui' , component:UiComponent },
  // {path:'footer', component:FooterComponent },
  {path:'toggle' , component:ToggleComponent },
  {path:'host' , component:HostlistnerAndBindingComponent },
  {path:'view' , component:ViewchildChildrenComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
