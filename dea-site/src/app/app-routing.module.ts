import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { RegistraDispositivoComponent } from './registra-dispositivo/registra-dispositivo.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'Registrazione', component: RegistraDispositivoComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Chi-Siamo', component: ChiSiamoComponent },
  { path: 'Contatti', component: ContattiComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: '**', component: RegistraDispositivoComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
