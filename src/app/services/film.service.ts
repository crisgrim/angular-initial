import { Injectable, Inject } from '@angular/core';
import { API_CONFIG } from './../config'; 

@Injectable()
export class FilmService {
    private lastId = 5;
    private _films: any[] = [{
        id: 1,
        name: 'Spectre 007',
        gender: 'Aventura',
        image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2Nzg4MzkwOF5BMl5BanBnXkFtZTgwNzA0OTE3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbUrl: 'http://www.imdb.com/title/tt2379713/'
    },{
        id: 2,
        name: 'solo en casa',
        gender: 'Comedia',
        image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNmQzYjEzYTQtNzNhZi00NmEwLThiZDMtMWYyNjRmZWY0ZTdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbUrl: 'http://www.imdb.com/title/tt0099785/'
    },{
        id: 3,
        name: 'Mascotas',
        gender: 'Comedia',
        image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMzA1OTkzNV5BMl5BanBnXkFtZTgwODE3MjM4NzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbUrl: 'http://www.imdb.com/title/tt2709768/'}];

    constructor(@Inject(API_CONFIG) private apiConfig: any) {
    }


    get films() {
        return this._films;
    }

    set films(films) {
        this._films = films;
    }

    removeFilm(film) {
        this._films = this._films.filter((data) => data.name !== film.name);
    }

    addFilm(film) {
        this.lastId++;
        film.id = this.lastId;
        this._films.push(film);
    }

    getFilm(id) {
        return this._films.find((film) => film.id === id);
    }

    update(id, film){
        this._films = this._films.map((data) => {
            if (data.id === id) {
                data.name = film.name;
                data.gender = film.gender;
                data.image = film.image;
                data.imdbUrl = film.imdbUrl;                
            }
            return data;
        });
    }
}