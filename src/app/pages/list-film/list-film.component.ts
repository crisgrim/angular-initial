import { Component } from '@angular/core';
import { FilmService } from '../../services/film.service'; // <- importamos el servicio

@Component({
  selector: 'list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent {
  
  films: any[]

  constructor(private filmService: FilmService) { //<- Inyectamos la instancia del servicio y declaramos el campo privada filmService
    this.films = this.filmService.films;
  }

  remove(film) {
    if (window.confirm(`¿Seguro que quiere borrar la serie ${film.name}?`)){
      this.filmService.removeFilm(film);
      this.films = this.filmService.films;
    }
  }
}
