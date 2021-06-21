import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { MainComponent } from './main/main.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { RegistraDispositivoComponent } from './registra-dispositivo/registra-dispositivo.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { HttpService } from "./service/http-service.service";
import { DataService } from "./service/data.service";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    MainComponent,
    ChiSiamoComponent,
    ContattiComponent,
    RegistraDispositivoComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [MainComponent]
})
export class AppModule { }
