import { Component } from '@angular/core';
import { TablaEmpleadosComponent } from '../../components/tabla-empleados/tabla-empleados.component';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [TablaEmpleadosComponent],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

}
