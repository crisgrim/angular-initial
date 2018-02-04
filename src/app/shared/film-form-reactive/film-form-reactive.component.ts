import { FilmService } from './../../services/film.service';
import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

const URL_VALID = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;

@Component({
    selector: 'film-form-reactive',
    templateUrl: './film-form-reactive.component.html',
    styleUrls: ['./film-form-reactive.component.css']
})
export class FilmFormReactiveComponent implements OnChanges {
    genders: string[] = ['Comedia', 'Terror', 'Acción', 'Aventura']
    formGroup: FormGroup
    @Input() film
    @Output() onSave = new EventEmitter();
    constructor(private filmService: FilmService, private formBuilder: FormBuilder) { }

    ngOnChanges() {
        if (this.film) {
            this.formGroup = this.formBuilder.group({
                name: [this.film.name, [Validators.required, Validators.minLength(4)]],
                gender: [this.film.gender, Validators.required],
                image: [this.film.image, [Validators.required, this.validateUrl]],
                imdbUrl: [this.film.imdbUrl, [Validators.required, this.validateUrl]],
            });
        } else {
            this.formGroup = this.formBuilder.group({
                name: ['', [Validators.required, Validators.minLength(4)]],
                gender: ['', Validators.required],
                image: ['', [Validators.required, this.validateUrl]],
                imdbUrl: ['', [Validators.required, this.validateUrl]],
            });
        }
    }

    validateUrl(control: AbstractControl): { [key: string]: any } {
        const url = control.value;
        const correct = URL_VALID.test(url);
        return !correct ? { url: true } : null;
    }

    save(film) {
        this.onSave.emit(film);
        return false;
    }
}