import { Component } from '@angular/core';

@Component({
  selector: 'app-circle-area',
  standalone: true,
  imports: [],
  templateUrl: './circle-area.component.html',
  styleUrl: './circle-area.component.css'
})
export class CircleAreaComponent {

  radio: number=0;
   areaCalculada: number=0;

  calcularArea() {
    const pi: number = Math.PI;
    this.areaCalculada = pi * Math.pow(this.radio, 2);
  }

}
