import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service'; 

@Component({
  selector: 'create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css']
})
export class CreateFilmComponent implements OnInit {
  
  film: any;

  constructor(private filmService: FilmService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(){
      this.activatedRoute.params.subscribe((params) => {
          if (params['id']){
              // (+) convierte el string 'id' a numero
              this.film = this.filmService.getFilm(+params['id']);
          }
      })
  }


  onSave(film){
      if (this.film && this.film.id){
          //edit
          this.filmService.update(this.film.id, film);
      } else {
          //create          
          this.filmService.addFilm(film);
      }
      this.router.navigate(['/film']);
  }
 
}
