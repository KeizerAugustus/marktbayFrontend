import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistreerFormulierComponent} from './components/registreer-formulier/registreer-formulier.component';
import {RegistreerAdresComponent} from './components/registreer-adres/registreer-adres.component';
import {InlogComponent} from './components/inlog/inlog.component';
import { AanmakenAdvertentieComponent } from './components/aanmaken-advertentie/aanmaken-advertentie.component';
import { AdvertentiesDisplayComponent } from './components/advertenties-display/advertenties-display.component';
import { EigenAdvertentiesComponent } from './components/eigen-advertenties/eigen-advertenties.component';
import { AanpassenGegevensComponent } from './components/aanpassen-gegevens/aanpassen-gegevens.component';
import {AuthGuardService as AuthGuard} from './services/auth-guard.service';

let routes: Route[] = [
  {path: '', component: InlogComponent},
  {path: 'registreren', component: RegistreerFormulierComponent},
  {path: 'login', component: InlogComponent},
  {path: 'aanmakenadvertentie', component: AanmakenAdvertentieComponent, canActivate: [AuthGuard]},
  {path: 'advertenties', component: AdvertentiesDisplayComponent, canActivate: [AuthGuard]},
  {path: 'mijnadvertenties', component: EigenAdvertentiesComponent, canActivate: [AuthGuard]},
  {path: 'mijngegevens', component: AanpassenGegevensComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistreerFormulierComponent,
    RegistreerAdresComponent,
    InlogComponent,
    AanmakenAdvertentieComponent,
    AdvertentiesDisplayComponent,
    EigenAdvertentiesComponent,
    AanpassenGegevensComponent,

  ],
  imports: [
    BrowserModule, CommonModule,
    AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
