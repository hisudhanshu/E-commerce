import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { SellerAuthComponent } from './Components/seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,HomeComponent, SellerAuthComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
