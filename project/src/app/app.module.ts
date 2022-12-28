import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductComponent,
    FooterComponent,
    ProductComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
