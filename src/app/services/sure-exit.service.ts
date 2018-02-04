import { CreateFilmComponent } from './../pages/create-film/create-film.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class SureExitGuard implements CanDeactivate<CreateFilmComponent> {
    constructor() { }

    canDeactivate(target: CreateFilmComponent){
        return window.confirm('¿Seguro que quieres salir?');
    }

}