import { FilmService } from './../../services/film.service';
import { Component } from '@angular/core';

@Component({
    selector: 'film-form',
    templateUrl: './film-form.component.html',
    styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent {
    genders: string[] = ['Comedia', 'Terror', 'Acción', 'Aventura']

    constructor(private filmService: FilmService){}

    save(film) {
        this.filmService.addFilm(film);
        return false;
    }
}