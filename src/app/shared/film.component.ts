import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent {
  
  @Input() public data: any 
  @Output() public onRemove = new EventEmitter()

  remove() {
    this.onRemove.emit(this.data); 
    return false;
  }
}
