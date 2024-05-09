import { Component } from '@angular/core';
import { TablaAutosComponent } from '../../components/tabla-autos/tabla-autos.component';

@Component({
  selector: 'app-carro',
  standalone: true,
  imports: [TablaAutosComponent],
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.css'
})
export class CarroComponent {

}
