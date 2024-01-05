import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circle-area',
  standalone: true,
  imports: [FormsModule],
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
