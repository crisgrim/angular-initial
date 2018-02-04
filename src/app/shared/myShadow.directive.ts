import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector:'[my-shadow]'
})
export class MyShadowDirective implements OnInit {
    el: ElementRef = null
    @Input() color: string

    constructor(el: ElementRef) {
        this.el = el;
    }

    ngOnInit() {
        this.color = this.color || '#ccc'; // chequeamos que tengamos un valor valido
        this.setShadow(`2px 2px 10px ${this.color}`);
    }

    setShadow(shadow) {
        this.el.nativeElement.style.boxShadow = shadow;
    }

    @HostListener('mouseenter') 
    onMouseEnter(){
        this.setShadow('5px 5px 10px #f00');
    }

    @HostListener('mouseleave') 
    onMouseLeave(){
        this.setShadow(`2px 2px 10px ${this.color}`);
    }
}