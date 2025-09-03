import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBorderError]'
})
export class BorderErrorDirective implements OnChanges {

  @Input() appBorderError: boolean = false; // recibe un true/false desde el html. se hace true si hay error y el bordo se pone rojo, si se mantiene en falso no cambia nada

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void { // se ejecuta cuando cambia el valor de la directiva
    if (this.appBorderError) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border');
    }
  }
}
