import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import{HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { UiComponent } from './ui/ui.component';
import { ToggleComponent } from './toggle/toggle.component';
import { HostlistnerAndBindingComponent } from './hostlistner-and-binding/hostlistner-and-binding.component';
import { ViewchildChildrenComponent } from './viewchild-children/viewchild-children.component';


@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    UiComponent,
    ToggleComponent,
    HostlistnerAndBindingComponent,
    ViewchildChildrenComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
