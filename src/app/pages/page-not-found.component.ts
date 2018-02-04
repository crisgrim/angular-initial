import { Component } from '@angular/core';

@Component({
    selector: 'page-not-found',
    template: `
        <div class="container">
            <h1> Pagina no encontrada </h1>
            <a routerLink="/film">Ir a la home</a>
        </div>
    `

})
export class PageNotFoundComponent {

}
