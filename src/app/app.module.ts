import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //<- Importamos ReactiveFormsModule
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FilmComponent } from './shared/film.component'; // <-- Importamos el componente
import { CapitalizeFirstPipe } from './shared/capitalize-first.pipe'; // <-- Importamos el pipe
import { MyShadowDirective } from './shared/myShadow.directive'; // <-- Importamos la directiva
import { FilmFormComponent } from './shared/film-form/film-form.component';
import { FilmFormReactiveComponent } from './shared/film-form-reactive/film-form-reactive.component';

import { FilmService } from './services/film.service';

import { API_CONFIG, value } from './config';

import { CreateFilmComponent } from './pages/create-film/create-film.component';
import { ListFilmComponent } from './pages/list-film/list-film.component';

import { PageNotFoundComponent } from './pages/page-not-found.component';

import { ActivateGuard } from './services/can-activate.service';

import { SureExitGuard } from './services/sure-exit.service';

const appRoutes: Routes = [
  { path: 'film', component: ListFilmComponent, canActivate: [ActivateGuard] },
  { path: 'create', component: CreateFilmComponent, canActivate: [ActivateGuard], canDeactivate: [SureExitGuard] },
  { path: 'edit/:id',      component: CreateFilmComponent, canActivate: [ActivateGuard], canDeactivate: [SureExitGuard] },
  { path: '',
    redirectTo: '/film',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent, canActivate: [ActivateGuard] }
];


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    CapitalizeFirstPipe,
    MyShadowDirective,
    FilmFormComponent,
    FilmFormReactiveComponent,
    ListFilmComponent,
    CreateFilmComponent,
    PageNotFoundComponent // <- declaramos el componente
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FilmService, // <- Registramos nuestro servicio,
    ActivateGuard,
    SureExitGuard,
    { provide: API_CONFIG, useValue: value }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
